/*
 * Mappa della matematica — interfaccia.
 * JavaScript senza framework né build. Usa solo KaTeX e dagre, copiati in vendor/.
 * Ogni vista ha un indirizzo con hash (#/concetto/…), così il tasto Indietro funziona.
 */
(function () {
  'use strict';

  // ===========================================================================
  // Dati e indici

  const DATI = Mappa.dati();
  const INDICE = Controlli.costruisciIndice(DATI);
  const perId = INDICE.perId;
  const CONCETTI = DATI.concetti;

  const FORME = ['cerchio', 'quadrato', 'rombo', 'triangolo', 'esagono', 'pentagono'];
  const FAMIGLIE = {};
  const AREE = {};
  const ARGOMENTI = {};
  DATI.famiglie.forEach((f, i) => { FAMIGLIE[f.id] = Object.assign({ ordine: i }, f); });
  const quanteNellaFamiglia = {};
  DATI.aree.forEach((a, i) => {
    const n = quanteNellaFamiglia[a.famiglia] || 0;
    quanteNellaFamiglia[a.famiglia] = n + 1;
    AREE[a.id] = Object.assign({}, a, { forma: FORME[n % FORME.length], ordine: i });
  });
  DATI.argomenti.forEach((a, i) => { ARGOMENTI[a.id] = Object.assign({ ordine: i }, a); });

  const ORDINE = {};
  const perArea = {};
  const perArgomento = {};
  CONCETTI.forEach((c, i) => {
    ORDINE[c.id] = i;
    (perArea[c.area] = perArea[c.area] || []).push(c);
    (perArgomento[c.argomento] = perArgomento[c.argomento] || []).push(c);
  });

  // Le frasi "perche" stanno sul concetto che dichiara il legame.
  const PERCHE_PRE = {};
  const PERCHE_PAR = {};
  const coppia = (a, b) => (a < b ? a + '~' + b : b + '~' + a);
  CONCETTI.forEach((c) => {
    c.prerequisiti.forEach((p) => { PERCHE_PRE[p.id + '>' + c.id] = p.perche; });
    c.parenti.forEach((p) => { PERCHE_PAR[coppia(c.id, p.id)] = p.perche; });
  });

  const LIVELLI = {
    1: 'scuola media',
    2: 'scuola superiore',
    3: 'università, primi anni',
    4: 'università avanzata e ricerca'
  };
  const TIPI = { 'concetto': 'Concetto', 'teorema': 'Teorema', 'problema-aperto': 'Problema aperto' };
  const MAX_VICINI = Controlli.MAX_VICINI;
  const SCALE_TESTO = [1, 1.15, 1.3, 1.5];

  // ===========================================================================
  // Memoria locale: sempre dentro try/catch, con una riserva in memoria.

  const Memoria = (function () {
    const riserva = {};
    const prefisso = 'mappa-matematica:';
    return {
      leggi(chiave, predefinito) {
        try {
          const v = window.localStorage.getItem(prefisso + chiave);
          if (v !== null) return JSON.parse(v);
        } catch (e) { /* localStorage non disponibile */ }
        return Object.prototype.hasOwnProperty.call(riserva, chiave) ? riserva[chiave] : predefinito;
      },
      scrivi(chiave, valore) {
        riserva[chiave] = valore;
        try { window.localStorage.setItem(prefisso + chiave, JSON.stringify(valore)); } catch (e) { /* va bene lo stesso */ }
      }
    };
  })();

  function numeroTra(v, min, max, predefinito) {
    const n = Number(v);
    return Number.isInteger(n) && n >= min && n <= max ? n : predefinito;
  }

  const stato = {
    livelloMax: numeroTra(Memoria.leggi('livello', 4), 1, 4, 4),
    scala: numeroTra(Memoria.leggi('scala', 0), 0, SCALE_TESTO.length - 1, 0),
    conosciuti: new Set((Memoria.leggi('conosciuti', []) || []).filter((id) => perId[id])),
    soglia: numeroTra(Memoria.leggi('soglia', 4), 1, 8, 4),
    mostraNoti: false,
    nascondiNotiPercorso: false,
    parenteleMappa: false,
    mostraFuoriFiltro: false
  };

  function salvaConosciuti() { Memoria.scrivi('conosciuti', Array.from(stato.conosciuti)); }
  const visibile = (c) => c.livello <= stato.livelloMax;

  // Concetti che non serve rivedere: quelli segnati come noti e tutti i loro prerequisiti.
  function insiemeNoti() {
    const noti = new Set();
    stato.conosciuti.forEach((id) => {
      noti.add(id);
      Object.keys(INDICE.antenati(id)).forEach((a) => noti.add(a));
    });
    return noti;
  }

  // Ordine valido (ogni concetto dopo i suoi prerequisiti). Con preferisciArea
  // cerca di tenere vicini i concetti della stessa area.
  function ordineValido(ids, preferisciArea) {
    const insieme = new Set(ids);
    const gradi = new Map();
    const figli = new Map();
    ids.forEach((id) => { gradi.set(id, 0); figli.set(id, []); });
    ids.forEach((id) => {
      perId[id].prerequisiti.forEach((p) => {
        if (!insieme.has(p.id)) return;
        gradi.set(id, gradi.get(id) + 1);
        figli.get(p.id).push(id);
      });
    });
    const pronti = ids.filter((id) => gradi.get(id) === 0);
    const risultato = [];
    let ultimaArea = null;
    const confronta = (a, b) => {
      const ca = perId[a];
      const cb = perId[b];
      if (preferisciArea) {
        const sa = ca.area === ultimaArea ? 0 : 1;
        const sb = cb.area === ultimaArea ? 0 : 1;
        if (sa !== sb) return sa - sb;
      }
      return ca.livello - cb.livello || AREE[ca.area].ordine - AREE[cb.area].ordine || ORDINE[a] - ORDINE[b];
    };
    while (pronti.length) {
      pronti.sort(confronta);
      const id = pronti.shift();
      risultato.push(id);
      ultimaArea = perId[id].area;
      figli.get(id).forEach((f) => {
        gradi.set(f, gradi.get(f) - 1);
        if (gradi.get(f) === 0) pronti.push(f);
      });
    }
    return risultato;
  }

  // ===========================================================================
  // Piccoli aiuti per il DOM

  function h(tag, attributi, ...figli) {
    const el = document.createElement(tag);
    impostaAttributi(el, attributi);
    aggiungi(el, figli);
    return el;
  }

  const SVGNS = 'http://www.w3.org/2000/svg';
  function s(tag, attributi) {
    const el = document.createElementNS(SVGNS, tag);
    impostaAttributi(el, attributi);
    return el;
  }

  function impostaAttributi(el, attributi) {
    if (!attributi) return;
    Object.keys(attributi).forEach((k) => {
      const v = attributi[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.setAttribute('class', v);
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
  }

  function aggiungi(el, figli) {
    figli.flat(Infinity).forEach((f) => {
      if (f === null || f === undefined || f === false) return;
      el.appendChild(typeof f === 'string' || typeof f === 'number' ? document.createTextNode(String(f)) : f);
    });
  }

  function annuncia(testo) {
    const zona = document.getElementById('annunci');
    zona.textContent = '';
    setTimeout(() => { zona.textContent = testo; }, 50);
  }

  function rimanda(fn, ms) {
    let t = null;
    return function () {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), ms);
    };
  }

  const plurale = (n, uno, molti) => n + ' ' + (n === 1 ? uno : molti);

  // ===========================================================================
  // Etichette: forma e colore dell'area, tipo, livello

  function iconaForma(forma, dim) {
    dim = dim || 16;
    const svg = s('svg', { width: dim, height: dim, viewBox: '0 0 16 16', 'aria-hidden': 'true', focusable: 'false' });
    let el;
    switch (forma) {
      case 'quadrato': el = s('rect', { x: 2, y: 2, width: 12, height: 12, rx: 1 }); break;
      case 'rombo': el = s('polygon', { points: '8,1 15,8 8,15 1,8' }); break;
      case 'triangolo': el = s('polygon', { points: '8,1.5 15,14.5 1,14.5' }); break;
      case 'esagono': el = s('polygon', { points: '4.5,2 11.5,2 15,8 11.5,14 4.5,14 1,8' }); break;
      case 'pentagono': el = s('polygon', { points: '8,1 15,6.2 12.3,14.5 3.7,14.5 1,6.2' }); break;
      default: el = s('circle', { cx: 8, cy: 8, r: 6.5 });
    }
    el.setAttribute('class', 'forma');
    svg.appendChild(el);
    return svg;
  }

  function classeFamiglia(areaId) { return 'fam-' + AREE[areaId].famiglia; }

  function badgeArea(areaId) {
    const a = AREE[areaId];
    return h('span', { class: 'badge badge-area ' + classeFamiglia(areaId), title: a.titolo },
      iconaForma(a.forma, 14), a.breve);
  }
  function badgeTipo(c) { return h('span', { class: 'badge badge-tipo tipo-' + c.tipo }, TIPI[c.tipo]); }
  function badgeLivello(c) { return h('span', { class: 'badge', title: LIVELLI[c.livello] }, 'Livello ' + c.livello); }
  function badgeConosciuto(c) { return stato.conosciuti.has(c.id) ? h('span', { class: 'badge badge-conosciuto' }, 'lo sai già') : null; }

  function metaConcetto(c, conArea) {
    return h('p', { class: 'scheda-meta' },
      badgeTipo(c), conArea === false ? null : badgeArea(c.area), badgeLivello(c),
      h('span', { class: 'solo-lettori' }, '(' + LIVELLI[c.livello] + ')'), badgeConosciuto(c));
  }

  // ===========================================================================
  // Testo con termini collegati: [[id]] oppure [[id|parola]]

  const RE_TERMINE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
  let contaTermini = 0;

  function parolaTermine(id, parola) {
    if (parola) return parola;
    return perId[id] ? perId[id].titolo.toLowerCase() : id;
  }

  function testoSemplice(testo) {
    return String(testo || '').replace(RE_TERMINE, (t, id, parola) => parolaTermine(id, parola));
  }

  function definizioneBreve(c) {
    if (c.definizione) return testoSemplice(c.definizione);
    if (c.idea) {
      const t = testoSemplice(c.idea);
      const m = t.match(/^.+?[.!?](\s|$)/);
      return (m ? m[0] : t).trim();
    }
    return c.titolo + ': definizione in arrivo.';
  }

  function arricchisci(testo, idCorrente) {
    const frammento = document.createDocumentFragment();
    testo = String(testo);
    let ultimo = 0;
    // matchAll lavora su una copia della regex: le chiamate a testoSemplice
    // (che usa replace e azzera lastIndex) non possono far ripartire il ciclo.
    for (const m of testo.matchAll(RE_TERMINE)) {
      if (m.index > ultimo) frammento.append(testo.slice(ultimo, m.index));
      const id = m[1];
      const parola = parolaTermine(id, m[2]);
      if (perId[id] && id !== idCorrente) {
        const idDef = 'definizione-' + (++contaTermini);
        frammento.append(h('span', { class: 'termine-avvolto' },
          h('a', { href: '#/concetto/' + id, class: 'termine', 'aria-describedby': idDef }, parola),
          h('span', { class: 'definizione', id: idDef, role: 'tooltip' }, definizioneBreve(perId[id]))));
      } else {
        frammento.append(parola);
      }
      ultimo = m.index + m[0].length;
    }
    if (ultimo < testo.length) frammento.append(testo.slice(ultimo));
    return frammento;
  }

  function paragrafi(testo, idCorrente, segnaposto) {
    if (!testo || !String(testo).trim()) return [h('p', { class: 'segnaposto' }, segnaposto)];
    return String(testo).split(/\n+/).map((t) => t.trim()).filter(Boolean)
      .map((t) => h('p', null, arricchisci(t, idCorrente)));
  }

  function frasePerche(perche, testoMancante) {
    return perche ? testoSemplice(perche) : testoMancante;
  }

  // ===========================================================================
  // Ricerca: ignora gli accenti, tollera gli errori di battitura, usa i sinonimi.

  const PAROLE_VUOTE = new Set(('di del della dello dei degli delle da dal dalla dai la il lo le gli i un una uno ' +
    'e ed o a al alla ai agli in nel nella con per su sul sulla tra fra che come cos cosa l d').split(' '));

  function normalizza(t) {
    return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/π/g, ' pi greco ').replace(/[^a-z0-9]+/g, ' ').trim();
  }

  // Chiave approssimata per gli errori più comuni: lettere doppie, h muta, c/q/k…
  function fonetica(p) {
    return p.replace(/ph/g, 'f').replace(/h/g, '').replace(/qu/g, 'cu').replace(/[kq]/g, 'c')
      .replace(/[yj]/g, 'i').replace(/x/g, 's').replace(/w/g, 'v').replace(/z/g, 's')
      .replace(/gn/g, 'ni').replace(/(.)\1+/g, '$1');
  }

  // Distanza di Damerau-Levenshtein (con scambi di lettere vicine), con soglia.
  function distanza(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prima = null;
    let prec = [];
    for (let j = 0; j <= b.length; j++) prec[j] = j;
    for (let i = 1; i <= a.length; i++) {
      const cor = [i];
      let minimo = i;
      for (let j = 1; j <= b.length; j++) {
        const costo = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(prec[j] + 1, cor[j - 1] + 1, prec[j - 1] + costo);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prima[j - 2] + 1);
        cor[j] = v;
        if (v < minimo) minimo = v;
      }
      if (minimo > max) return max + 1;
      prima = prec;
      prec = cor;
    }
    return prec[b.length];
  }

  function formaRicerca(testo) {
    const norm = normalizza(testo);
    const parole = norm.split(' ').filter((p) => p && !PAROLE_VUOTE.has(p));
    return { testo, norm, parole, foniche: parole.map(fonetica) };
  }

  const VOCI_RICERCA = [];
  CONCETTI.forEach((c) => VOCI_RICERCA.push({
    tipo: 'concetto', id: c.id, titolo: c.titolo, href: '#/concetto/' + c.id,
    forme: [c.titolo].concat(c.sinonimi).map(formaRicerca)
  }));
  DATI.aree.forEach((a) => VOCI_RICERCA.push({
    tipo: 'area', id: a.id, titolo: a.titolo, href: '#/area/' + a.id,
    forme: [a.titolo, a.breve].map(formaRicerca)
  }));
  DATI.argomenti.forEach((a) => VOCI_RICERCA.push({
    tipo: 'argomento', id: a.id, titolo: a.titolo, href: '#/argomento/' + a.id,
    forme: [a.titolo].map(formaRicerca)
  }));

  function punteggio(forma, q, qParole) {
    if (!forma.norm) return 0;
    if (forma.norm === q) return 100;
    if (forma.norm.indexOf(q) === 0) return 92;
    if ((' ' + forma.norm + ' ').indexOf(' ' + q + ' ') >= 0) return 85;
    if (q.length >= 4 && forma.norm.indexOf(q) >= 0) return 78;
    if (!qParole.length || !forma.parole.length) return 0;
    let somma = 0;
    for (const t of qParole) {
      const ft = fonetica(t);
      const max = t.length <= 2 ? 0 : t.length <= 6 ? 1 : 2;
      let migliore = 0;
      forma.parole.forEach((w, i) => {
        let p = 0;
        if (w === t) p = 10;
        else if (t.length >= 2 && w.indexOf(t) === 0) p = 8.5;
        else if (max > 0) {
          let d = distanza(t, w, max);
          // chi sta ancora scrivendo: confronta anche con l'inizio della parola
          if (d > max && w.length > t.length) d = distanza(t, w.slice(0, t.length), max);
          if (d <= max) p = 7 - 1.5 * d;
          else if (distanza(ft, forma.foniche[i], max) <= max) p = 5;
        }
        if (p > migliore) migliore = p;
      });
      if (!migliore) return 0;
      somma += migliore;
    }
    const copertura = Math.min(1, qParole.length / forma.parole.length);
    return Math.round((somma / qParole.length) * 6 + copertura * 6);
  }

  function cerca(testo, limite) {
    const q = normalizza(testo);
    if (!q) return [];
    const qParole = q.split(' ').filter((p) => p && !PAROLE_VUOTE.has(p));
    const risultati = [];
    VOCI_RICERCA.forEach((v) => {
      let migliore = 0;
      let come = null;
      v.forme.forEach((f) => {
        const p = punteggio(f, q, qParole);
        if (p > migliore) { migliore = p; come = f.testo; }
      });
      if (migliore >= 26) risultati.push({ voce: v, punti: migliore + (v.tipo === 'concetto' ? 1 : 0), come });
    });
    risultati.sort((a, b) => b.punti - a.punti || a.voce.titolo.localeCompare(b.voce.titolo, 'it'));
    return limite ? risultati.slice(0, limite) : risultati;
  }

  function dettagliVoce(v) {
    if (v.tipo === 'concetto') {
      const c = perId[v.id];
      return [badgeArea(c.area), h('span', null, TIPI[c.tipo] + ' · livello ' + c.livello)];
    }
    if (v.tipo === 'area') return [badgeArea(v.id), h('span', null, 'Area')];
    return [badgeArea(ARGOMENTI[v.id].area), h('span', null, 'Argomento')];
  }

  let contaCampi = 0;
  // Campo di ricerca accessibile (combobox con elenco di proposte).
  function campoRicerca(opzioni) {
    const n = ++contaCampi;
    const idInput = 'campo-ricerca-' + n;
    const idLista = 'proposte-' + n;
    const input = h('input', {
      id: idInput, type: 'search', role: 'combobox', autocomplete: 'off', spellcheck: 'false',
      'aria-autocomplete': 'list', 'aria-expanded': 'false', 'aria-controls': idLista,
      placeholder: opzioni.segnaposto || ''
    });
    const lista = h('ul', { id: idLista, class: 'risultati', role: 'listbox', 'aria-label': 'Proposte', hidden: true });
    let voci = [];
    let attivo = -1;

    function chiudi() {
      lista.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      attivo = -1;
    }
    function evidenziaVoce(i) {
      const righe = lista.querySelectorAll('[role="option"]:not([aria-disabled])');
      righe.forEach((r, k) => r.setAttribute('aria-selected', k === i ? 'true' : 'false'));
      attivo = i;
      if (i >= 0 && righe[i]) {
        input.setAttribute('aria-activedescendant', righe[i].id);
        righe[i].scrollIntoView({ block: 'nearest' });
      } else input.removeAttribute('aria-activedescendant');
    }
    function scegli(i) {
      const v = voci[i];
      if (!v) return;
      chiudi();
      input.value = '';
      opzioni.scegli(v);
    }
    function aggiorna() {
      const testo = input.value.trim();
      lista.replaceChildren();
      voci = [];
      attivo = -1;
      if (!testo) { chiudi(); return; }
      const risultati = cerca(testo).filter((r) => !opzioni.filtro || opzioni.filtro(r.voce)).slice(0, 8);
      risultati.forEach((r, i) => {
        voci.push(r.voce);
        const trovato = r.come && normalizza(r.come) !== normalizza(r.voce.titolo)
          ? h('span', null, 'trovato come «' + r.come + '»') : null;
        lista.appendChild(h('li', {
          id: idLista + '-' + i, role: 'option', 'aria-selected': 'false',
          onclick: () => scegli(i)
        }, h('span', { class: 'ris-titolo' }, r.voce.titolo),
        h('span', { class: 'ris-dettagli' }, dettagliVoce(r.voce), trovato)));
      });
      if (!risultati.length) {
        lista.appendChild(h('li', { class: 'ris-vuoto', role: 'option', 'aria-disabled': 'true', 'aria-selected': 'false' },
          'Nessun risultato. Prova a scriverlo in un altro modo.'));
      } else if (opzioni.tutti) {
        const i = voci.length;
        voci.push({ href: '#/cerca/' + encodeURIComponent(testo), titolo: 'Tutti i risultati' });
        lista.appendChild(h('li', { id: idLista + '-' + i, role: 'option', 'aria-selected': 'false', onclick: () => scegli(i) },
          h('span', { class: 'ris-titolo' }, 'Vedi tutti i risultati per «' + testo + '»')));
      }
      lista.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      annuncia(risultati.length ? plurale(risultati.length, 'proposta', 'proposte') + '. Usa le frecce per scegliere.' : 'Nessun risultato.');
    }

    input.addEventListener('input', rimanda(aggiorna, 70));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (lista.hidden) aggiorna();
        evidenziaVoce(Math.min(attivo + 1, voci.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        evidenziaVoce(Math.max(attivo - 1, 0));
      } else if (e.key === 'Enter') {
        if (!input.value.trim()) return;
        e.preventDefault();
        if (attivo >= 0) scegli(attivo);
        else if (voci.length) scegli(0);
      } else if (e.key === 'Escape') {
        if (!lista.hidden) { e.preventDefault(); chiudi(); } else input.value = '';
      }
    });
    input.addEventListener('blur', () => setTimeout(chiudi, 180));
    lista.addEventListener('mousedown', (e) => e.preventDefault());

    return h('div', { class: 'ricerca' }, h('label', { for: idInput }, opzioni.etichetta), input, lista);
  }

  // ===========================================================================
  // Grafi disposti con dagre: aree, argomenti, percorsi, mappa completa.
  // Nodi in HTML (testo che va a capo, link veri), archi in SVG.

  let contaGrafi = 0;

  function curvaBasis(punti) {
    const f = (n) => Math.round(n * 10) / 10;
    let d = '';
    let fase = 0;
    let x0, y0, x1, y1;
    const bezier = (x, y) => {
      d += 'C' + f((2 * x0 + x1) / 3) + ',' + f((2 * y0 + y1) / 3) + ' ' + f((x0 + 2 * x1) / 3) + ',' + f((y0 + 2 * y1) / 3) +
        ' ' + f((x0 + 4 * x1 + x) / 6) + ',' + f((y0 + 4 * y1 + y) / 6);
    };
    punti.forEach((p) => {
      if (fase === 0) { fase = 1; d += 'M' + f(p.x) + ',' + f(p.y); } else if (fase === 1) { fase = 2; } else {
        if (fase === 2) { fase = 3; d += 'L' + f((5 * x0 + x1) / 6) + ',' + f((5 * y0 + y1) / 6); }
        bezier(p.x, p.y);
      }
      x0 = x1; x1 = p.x; y0 = y1; y1 = p.y;
    });
    if (fase === 3) { bezier(x1, y1); d += 'L' + f(x1) + ',' + f(y1); } else if (fase === 2) d += 'L' + f(x1) + ',' + f(y1);
    return d;
  }

  function puntaFreccia(id) {
    const defs = s('defs');
    const marker = s('marker', {
      id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 11, markerHeight: 11,
      markerUnits: 'userSpaceOnUse', orient: 'auto-start-reverse'
    });
    marker.appendChild(s('path', { d: 'M0,0 L10,5 L0,10 z', class: 'punta' }));
    defs.appendChild(marker);
    return defs;
  }

  function creaGrafo(opz) {
    const numero = ++contaGrafi;
    const idPunta = 'punta-grafo-' + numero;
    const idAiuto = 'aiuto-grafo-' + numero;
    const radice = h('div', { class: 'grafo' + (opz.classe ? ' ' + opz.classe : '') });
    const vista = h('div', { class: 'grafo-vista', role: 'group', 'aria-label': opz.etichetta, 'aria-describedby': idAiuto });
    const tela = h('div', { class: 'grafo-tela' });
    const svg = s('svg', { class: 'grafo-archi', 'aria-hidden': 'true', focusable: 'false' });
    const strato = h('div', { class: 'grafo-nodi' });
    tela.append(svg, strato);
    vista.appendChild(tela);
    const comandi = h('div', { class: 'grafo-comandi' },
      h('button', { type: 'button', class: 'pulsante', 'aria-label': 'Rimpicciolisci', onclick: () => zoomCentro(1 / 1.25) }, '−'),
      h('button', { type: 'button', class: 'pulsante', 'aria-label': 'Ingrandisci', onclick: () => zoomCentro(1.25) }, '+'),
      h('button', { type: 'button', class: 'pulsante', onclick: () => adatta() }, 'Adatta allo spazio'),
      h('span', { class: 'aiuto', id: idAiuto },
        'Trascina per spostarti, Ctrl e rotella per lo zoom. Con la tastiera: Tab per entrare, frecce per passare da un riquadro all\'altro, Invio per aprire.'));
    radice.append(comandi, vista);

    const nodi = new Map();
    let archiDisegnati = [];
    let sc = 1;
    let tx = 0;
    let ty = 0;
    let gw = 0;
    let gh = 0;
    let attuale = null;
    let disposto = false;

    function applica() { tela.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + sc + ')'; }
    function limita(v) { return Math.max(0.04, Math.min(2.5, v)); }
    function zoomIn(fattore, cx, cy) {
      const nuova = limita(sc * fattore);
      tx = cx - (cx - tx) * (nuova / sc);
      ty = cy - (cy - ty) * (nuova / sc);
      sc = nuova;
      applica();
    }
    function zoomCentro(f) { zoomIn(f, vista.clientWidth / 2, vista.clientHeight / 2); }

    function adatta() {
      if (!disposto) return;
      const W = vista.clientWidth;
      const H = vista.clientHeight;
      sc = Math.max(Math.min(1, W / gw, opz.altezzaAdattiva ? 1 : H / gh), opz.scalaMinima || (opz.altezzaAdattiva ? 0.6 : 0.04));
      tx = (W - gw * sc) / 2;
      ty = gh * sc < H ? (H - gh * sc) / 2 : 0;
      if (gw * sc > W) tx = 0;
      applica();
    }

    function centraSu(id, scala) {
      const n = nodi.get(id);
      if (!n) return;
      if (scala) sc = limita(scala);
      tx = vista.clientWidth / 2 - n.x * sc;
      ty = vista.clientHeight / 2 - n.y * sc;
      applica();
    }

    // Inquadra un gruppo di nodi (per esempio un percorso evidenziato).
    function adattaA(ids, minima) {
      let l = Infinity;
      let tt = Infinity;
      let r = -Infinity;
      let b = -Infinity;
      ids.forEach((id) => {
        const n = nodi.get(id);
        if (!n) return;
        l = Math.min(l, n.x - n.w / 2);
        r = Math.max(r, n.x + n.w / 2);
        tt = Math.min(tt, n.y - n.h / 2);
        b = Math.max(b, n.y + n.h / 2);
      });
      if (l === Infinity) return;
      const W = vista.clientWidth;
      const H = vista.clientHeight;
      sc = limita(Math.max(minima || 0.2, Math.min(1, (W - 60) / (r - l), (H - 60) / (b - tt))));
      tx = W / 2 - ((l + r) / 2) * sc;
      ty = H / 2 - ((tt + b) / 2) * sc;
      applica();
    }

    function rendiVisibile(id) {
      const n = nodi.get(id);
      if (!n) return;
      const margine = 30;
      const x1 = (n.x - n.w / 2) * sc + tx;
      const x2 = (n.x + n.w / 2) * sc + tx;
      const y1 = (n.y - n.h / 2) * sc + ty;
      const y2 = (n.y + n.h / 2) * sc + ty;
      if (x1 < margine || y1 < margine || x2 > vista.clientWidth - margine || y2 > vista.clientHeight - margine) centraSu(id);
    }

    function impostaAttuale(id) {
      if (attuale && nodi.has(attuale)) nodi.get(attuale).el.setAttribute('tabindex', '-1');
      attuale = id;
      if (nodi.has(id)) nodi.get(id).el.setAttribute('tabindex', '0');
    }

    function vicinoIn(id, dir) {
      const p = nodi.get(id);
      let migliore = null;
      let punti = Infinity;
      nodi.forEach((q, qid) => {
        if (qid === id) return;
        const dx = q.x - p.x;
        const dy = q.y - p.y;
        let avanti;
        let lato;
        if (dir === 'destra') { avanti = dx; lato = dy; } else if (dir === 'sinistra') { avanti = -dx; lato = dy; } else if (dir === 'giu') { avanti = dy; lato = dx; } else { avanti = -dy; lato = dx; }
        if (avanti <= 2) return;
        const v = avanti + Math.abs(lato) * 2.5;
        if (v < punti) { punti = v; migliore = qid; }
      });
      return migliore;
    }

    // Spostarsi con il trascinamento (mouse, dita) e lo zoom con due dita.
    const puntatori = new Map();
    let inizio = null;
    let trascinato = false;
    let distanzaPinza = 0;
    vista.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
      puntatori.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (puntatori.size === 1) { inizio = { x: e.clientX, y: e.clientY, tx, ty }; trascinato = false; }
      if (puntatori.size === 2) {
        const [a, b] = Array.from(puntatori.values());
        distanzaPinza = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });
    vista.addEventListener('pointermove', (e) => {
      if (!puntatori.has(e.pointerId)) return;
      puntatori.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (puntatori.size === 2) {
        const [a, b] = Array.from(puntatori.values());
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const r = vista.getBoundingClientRect();
        if (distanzaPinza) zoomIn(d / distanzaPinza, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
        distanzaPinza = d;
        trascinato = true;
        return;
      }
      if (!inizio) return;
      const dx = e.clientX - inizio.x;
      const dy = e.clientY - inizio.y;
      if (!trascinato && Math.hypot(dx, dy) > 6) {
        trascinato = true;
        vista.classList.add('trascina');
        try { vista.setPointerCapture(e.pointerId); } catch (err) { /* niente */ }
      }
      if (trascinato) { tx = inizio.tx + dx; ty = inizio.ty + dy; applica(); }
    });
    const fine = (e) => {
      puntatori.delete(e.pointerId);
      if (puntatori.size < 2) distanzaPinza = 0;
      if (puntatori.size === 0) { inizio = null; vista.classList.remove('trascina'); }
    };
    vista.addEventListener('pointerup', fine);
    vista.addEventListener('pointercancel', fine);
    vista.addEventListener('click', (e) => {
      if (trascinato) { e.preventDefault(); e.stopPropagation(); trascinato = false; }
    }, true);
    vista.addEventListener('wheel', (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      const r = vista.getBoundingClientRect();
      zoomIn(Math.exp(-e.deltaY * 0.0025), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    // Il focus da tastiera non deve far scorrere il contenitore: lo spostamento lo gestiamo noi.
    vista.addEventListener('scroll', () => { vista.scrollLeft = 0; vista.scrollTop = 0; });

    strato.addEventListener('focusin', (e) => {
      const el = e.target.closest('.nodo-grafo');
      if (!el) return;
      impostaAttuale(el.dataset.id);
      rendiVisibile(el.dataset.id);
    });
    strato.addEventListener('keydown', (e) => {
      const el = e.target.closest('.nodo-grafo');
      if (!el) return;
      const dir = { ArrowRight: 'destra', ArrowLeft: 'sinistra', ArrowUp: 'su', ArrowDown: 'giu' }[e.key];
      if (dir) {
        e.preventDefault();
        const prossimo = vicinoIn(el.dataset.id, dir);
        if (prossimo) {
          impostaAttuale(prossimo);
          nodi.get(prossimo).el.focus({ preventScroll: true });
          rendiVisibile(prossimo);
        }
      } else if (e.key === '+' || e.key === '=') { e.preventDefault(); zoomCentro(1.25); } else if (e.key === '-') { e.preventDefault(); zoomCentro(1 / 1.25); } else if (e.key === '0') { e.preventDefault(); adatta(); }
    });

    function disponi() {
      strato.replaceChildren();
      nodi.clear();
      opz.nodi.forEach((n) => {
        n.el.classList.add('nodo-grafo');
        n.el.dataset.id = n.id;
        n.el.setAttribute('tabindex', '-1');
        strato.appendChild(n.el);
      });
      const g = new dagre.graphlib.Graph();
      g.setGraph({
        rankdir: opz.direzione || 'TB',
        nodesep: opz.distanzaNodi || 30,
        ranksep: opz.distanzaRanghi || 60,
        edgesep: 12,
        marginx: 20,
        marginy: 20,
        ranker: opz.ranker || 'network-simplex'
      });
      g.setDefaultEdgeLabel(() => ({}));
      opz.nodi.forEach((n) => {
        const w = n.el.offsetWidth;
        const hh = n.el.offsetHeight;
        nodi.set(n.id, { el: n.el, w, h: hh, x: 0, y: 0 });
        g.setNode(n.id, { width: w, height: hh });
      });
      const archi = opz.archi.filter((a) => nodi.has(a.da) && nodi.has(a.a) && a.da !== a.a);
      archi.forEach((a) => {
        const dati = { weight: a.peso || 1 };
        if (a.etichetta !== undefined && a.etichetta !== null) {
          a.elEtichetta = h('span', { class: 'etichetta-arco' }, String(a.etichetta));
          strato.appendChild(a.elEtichetta);
          dati.width = a.elEtichetta.offsetWidth + 8;
          dati.height = a.elEtichetta.offsetHeight + 6;
          dati.labelpos = 'c';
        }
        if (!a.fuoriDisposizione) g.setEdge(a.da, a.a, dati);
      });
      dagre.layout(g);
      gw = Math.max(g.graph().width || 0, 50);
      gh = Math.max(g.graph().height || 0, 50);
      nodi.forEach((n, id) => {
        const p = g.node(id);
        n.x = p.x;
        n.y = p.y;
        n.el.style.left = (p.x - n.w / 2) + 'px';
        n.el.style.top = (p.y - n.h / 2) + 'px';
      });
      tela.style.width = gw + 'px';
      tela.style.height = gh + 'px';
      svg.setAttribute('width', gw);
      svg.setAttribute('height', gh);
      svg.setAttribute('viewBox', '0 0 ' + gw + ' ' + gh);
      svg.replaceChildren(puntaFreccia(idPunta));
      archiDisegnati = [];
      archi.forEach((a) => {
        let d;
        if (a.fuoriDisposizione) {
          const p = nodi.get(a.da);
          const q = nodi.get(a.a);
          d = 'M' + p.x + ',' + p.y + 'L' + q.x + ',' + q.y;
        } else {
          const e = g.edge(a.da, a.a);
          if (!e) return;
          d = curvaBasis(e.points);
          if (a.elEtichetta) { a.elEtichetta.style.left = e.x + 'px'; a.elEtichetta.style.top = e.y + 'px'; }
        }
        const p = s('path', { d, class: a.classe || 'arco', 'marker-end': a.senzaPunta ? null : 'url(#' + idPunta + ')' });
        if (a.spessore) p.style.strokeWidth = a.spessore;
        a.path = p;
        svg.appendChild(p);
        archiDisegnati.push(a);
      });
      disposto = true;
      if (opz.altezzaAdattiva) {
        // Grafi piccoli: tutto visibile senza zoom, si rimpicciolisce solo per stare in larghezza.
        const scala = Math.max(0.6, Math.min(1, vista.clientWidth / gw));
        vista.style.height = Math.max(180, Math.min(1600, gh * scala + 8)) + 'px';
        vista.classList.add('adattiva');
      }
      const primo = opz.primo && nodi.has(opz.primo) ? opz.primo : (opz.nodi[0] && opz.nodi[0].id);
      if (primo) impostaAttuale(primo);
      adatta();
      // Se per stare tutto il grafo diventerebbe illeggibile, si parte da vicino.
      if (opz.scalaLeggibile && sc < opz.scalaLeggibile && primo) centraSu(primo, opz.scalaLeggibile);
    }

    function evidenzia(selezionato, sulPercorso) {
      radice.classList.toggle('con-selezione', !!selezionato);
      nodi.forEach((n, id) => {
        n.el.classList.toggle('selezionato', id === selezionato);
        n.el.classList.toggle('sul-percorso', !!sulPercorso && sulPercorso.has(id));
      });
      archiDisegnati.forEach((a) => {
        const sopra = !!sulPercorso && sulPercorso.has(a.da) && sulPercorso.has(a.a);
        a.path.classList.toggle('sul-percorso', sopra);
        if (sopra) a.path.parentNode.appendChild(a.path);
      });
    }

    function metti(id) {
      if (!nodi.has(id)) return;
      impostaAttuale(id);
      nodi.get(id).el.focus({ preventScroll: true });
    }

    return { radice, disponi, adatta, adattaA, centraSu, evidenzia, metti, impostaAttuale, nodi, rendiVisibile };
  }

  function legendaArchi(conParenti, conNumeri) {
    return h('p', { class: 'legenda-grafo' },
      h('span', null, frecciaPiccola(false), conNumeri ? 'serve per capire (spessore e numero: quanti concetti)' : 'serve per capire'),
      conParenti ? h('span', null, frecciaPiccola(true), 'è parente di') : null);
  }

  function frecciaPiccola(tratteggiata) {
    const svg = s('svg', { width: 44, height: 14, viewBox: '0 0 44 14', 'aria-hidden': 'true', focusable: 'false' });
    const linea = s('line', { x1: 2, y1: 7, x2: tratteggiata ? 42 : 34, y2: 7, class: 'freccia' + (tratteggiata ? ' parente' : '') });
    svg.appendChild(linea);
    if (!tratteggiata) svg.appendChild(s('path', { d: 'M33,2 L43,7 L33,12 z', class: 'punta' }));
    return svg;
  }

  // Nodo di concetto per i grafi dagre.
  function nodoConcetto(c, opzioni) {
    opzioni = opzioni || {};
    const classi = ['nodo-concetto', classeFamiglia(c.area)];
    if (opzioni.compatto) classi[0] = 'nodo-mappa';
    if (opzioni.obiettivo) classi.push('obiettivo');
    if (opzioni.noto) classi.push('conosciuto');
    return h('a', { class: classi.join(' '), href: opzioni.href || '#/concetto/' + c.id },
      h('span', { class: 'nodo-testa' }, iconaForma(AREE[c.area].forma, 13), h('span', null, c.titolo)),
      opzioni.compatto ? h('span', { class: 'solo-lettori' }, ', ' + AREE[c.area].titolo + ', livello ' + c.livello)
        : h('span', { class: 'nodo-dettagli' }, AREE[c.area].breve + ' · ' + TIPI[c.tipo].toLowerCase() + ' · livello ' + c.livello));
  }

  // ===========================================================================
  // Vista a fuoco: prerequisiti a sinistra, successivi a destra, parenti sotto.

  function importanza(id) { return INDICE.successori[id].length + INDICE.parenti[id].length * 0.5; }
  function ordinaVicini(lista, areaCentro) {
    return lista.slice().sort((a, b) => {
      const ca = perId[a.id];
      const cb = perId[b.id];
      return importanza(b.id) - importanza(a.id) ||
        (ca.area === areaCentro ? 0 : 1) - (cb.area === areaCentro ? 0 : 1) ||
        ca.titolo.localeCompare(cb.titolo, 'it');
    });
  }

  let contaVicini = 0;
  function cartaVicino(v) {
    const c = perId[v.id];
    const idPerche = 'perche-' + (++contaVicini);
    const li = h('li', { class: 'vicino ' + classeFamiglia(c.area) + (visibile(c) ? '' : ' fuori-filtro'), 'data-id': c.id });
    const bottone = h('button', {
      type: 'button', class: 'vicino-perche-btn', 'aria-expanded': 'false', 'aria-controls': idPerche,
      'aria-label': 'Perché è collegato a ' + c.titolo + '?'
    }, '?');
    bottone.addEventListener('click', () => {
      const aperto = !li.classList.contains('aperto');
      document.querySelectorAll('.vicino.aperto').forEach((x) => {
        x.classList.remove('aperto');
        x.querySelector('.vicino-perche-btn').setAttribute('aria-expanded', 'false');
      });
      li.classList.toggle('aperto', aperto);
      bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    });
    aggiungi(li, [
      h('a', { class: 'vicino-link', href: '#/concetto/' + c.id, 'aria-describedby': idPerche },
        h('span', { class: 'vicino-titolo' }, c.titolo),
        h('span', { class: 'vicino-dettagli' }, badgeArea(c.area), h('span', null, 'livello ' + c.livello),
          stato.conosciuti.has(c.id) ? h('span', null, '· lo sai già') : null)),
      bottone,
      h('p', { class: 'vicino-perche', id: idPerche, role: 'tooltip' }, v.perche)
    ]);
    return li;
  }

  function gruppoVicini(classe, titolo, lista, areaCentro, testoVuoto) {
    const ordinati = ordinaVicini(lista, areaCentro);
    const gruppo = h('div', { class: 'fuoco-gruppo ' + classe });
    gruppo.appendChild(h('h2', { class: 'fuoco-titolo' }, titolo));
    if (!ordinati.length) {
      gruppo.appendChild(h('p', { class: 'fuoco-vuoto' }, testoVuoto));
      return gruppo;
    }
    const ul = h('ul', { class: 'fuoco-lista' });
    gruppo.appendChild(ul);
    const mostra = (tutti) => {
      ul.replaceChildren();
      (tutti ? ordinati : ordinati.slice(0, MAX_VICINI)).forEach((v) => ul.appendChild(cartaVicino(v)));
    };
    mostra(false);
    if (ordinati.length > MAX_VICINI) {
      const altri = ordinati.length - MAX_VICINI;
      const bottone = h('button', { type: 'button', class: 'pulsante fuoco-altri', 'aria-expanded': 'false' }, 'Altri ' + altri);
      bottone.addEventListener('click', () => {
        const espandi = bottone.getAttribute('aria-expanded') !== 'true';
        mostra(espandi);
        bottone.setAttribute('aria-expanded', espandi ? 'true' : 'false');
        bottone.textContent = espandi ? 'Mostra meno' : 'Altri ' + altri;
        gruppo.dispatchEvent(new CustomEvent('cambiato', { bubbles: true }));
        if (espandi) { const nuovo = ul.children[MAX_VICINI]; if (nuovo) nuovo.querySelector('a').focus(); }
      });
      gruppo.appendChild(bottone);
    }
    return gruppo;
  }

  function costruisciFuoco(c) {
    const filtra = (lista) => lista.filter((v) => stato.mostraFuoriFiltro || visibile(perId[v.id]));
    const tuttiPrima = c.prerequisiti.map((p) => ({ id: p.id, perche: frasePerche(p.perche, 'Serve per capire ' + c.titolo + '. Frase del legame da scrivere.') }));
    const tuttiDopo = INDICE.successori[c.id].map((id) => ({ id, perche: frasePerche(PERCHE_PRE[c.id + '>' + id], 'Questo concetto serve per capire ' + perId[id].titolo + '. Frase del legame da scrivere.') }));
    const tuttiParenti = INDICE.parenti[c.id].map((id) => ({ id, perche: frasePerche(PERCHE_PAR[coppia(c.id, id)], 'Idea vicina. Frase del legame da scrivere.') }));
    const prima = filtra(tuttiPrima);
    const dopo = filtra(tuttiDopo);
    const parenti = filtra(tuttiParenti);
    const nascosti = tuttiPrima.length + tuttiDopo.length + tuttiParenti.length - prima.length - dopo.length - parenti.length;

    const box = h('section', { class: 'fuoco' + (parenti.length ? '' : ' senza-parenti'), 'aria-label': 'Collegamenti di ' + c.titolo, 'data-non-leggere': '' });
    box.appendChild(s('svg', { class: 'fuoco-frecce', 'aria-hidden': 'true', focusable: 'false' }));
    box.appendChild(gruppoVicini('fuoco-prima', 'Serve per capirlo', prima, c.area, 'Nessun prerequisito: è un punto di partenza.'));
    box.appendChild(h('div', { class: 'fuoco-centro' },
      h('div', { class: 'centro ' + classeFamiglia(c.area) },
        h('p', { class: 'centro-titolo' }, c.titolo),
        metaConcetto(c))));
    box.appendChild(gruppoVicini('fuoco-dopo', 'Porta a', dopo, c.area, 'Per ora nessun concetto della mappa lo usa.'));
    if (parenti.length) box.appendChild(gruppoVicini('fuoco-parenti', 'Parenti', parenti, c.area, ''));

    const pezzi = [box];
    if (nascosti > 0 || stato.mostraFuoriFiltro) {
      const bottone = h('button', { type: 'button', class: 'pulsante' },
        stato.mostraFuoriFiltro ? 'Applica di nuovo il filtro' : 'Mostrali comunque');
      bottone.addEventListener('click', () => { stato.mostraFuoriFiltro = !stato.mostraFuoriFiltro; rinfresca(); });
      pezzi.push(h('p', { class: 'avviso-filtro' },
        stato.mostraFuoriFiltro ? 'Stai vedendo anche i collegamenti oltre il livello ' + stato.livelloMax + '.'
          : plurale(nascosti, 'collegamento nascosto', 'collegamenti nascosti') + ' perché oltre il livello ' + stato.livelloMax + '.',
        bottone));
    }
    return pezzi;
  }

  function etichettaSvg(gruppo, x, y, testo, ancora) {
    const g = s('g', { class: 'etichetta-freccia' });
    const t = s('text', { x, y, 'text-anchor': ancora });
    t.textContent = testo;
    g.appendChild(t);
    gruppo.appendChild(g);
    const b = t.getBBox();
    g.insertBefore(s('rect', { x: b.x - 4, y: b.y - 1, width: b.width + 8, height: b.height + 2, rx: 4 }), t);
    return { l: b.x - 4, t: b.y - 1, r: b.x + b.width + 4, b: b.y + b.height + 1 };
  }

  function disegnaFrecce(box) {
    if (!box.isConnected) return;
    box.classList.toggle('verticale', box.clientWidth < 1000);
    const svg = box.querySelector('.fuoco-frecce');
    const R = box.getBoundingClientRect();
    const rel = (el) => {
      const r = el.getBoundingClientRect();
      return { l: r.left - R.left, t: r.top - R.top, r: r.right - R.left, b: r.bottom - R.top, w: r.width, h: r.height,
        cx: r.left - R.left + r.width / 2, cy: r.top - R.top + r.height / 2, id: el.dataset.id };
    };
    svg.setAttribute('width', R.width);
    svg.setAttribute('height', R.height);
    svg.setAttribute('viewBox', '0 0 ' + R.width + ' ' + R.height);
    svg.replaceChildren(puntaFreccia('punta-fuoco'));
    const linee = s('g');
    const etichette = s('g');
    svg.append(linee, etichette);
    const traccia = (d, classe, idVicino, punta) => {
      const p = s('path', { d, class: 'freccia' + (classe ? ' ' + classe : ''), 'data-per': idVicino || '', 'marker-end': punta ? 'url(#punta-fuoco)' : null });
      linee.appendChild(p);
    };

    const centro = rel(box.querySelector('.centro'));
    const prima = Array.from(box.querySelectorAll('.fuoco-prima .vicino')).map(rel);
    const dopo = Array.from(box.querySelectorAll('.fuoco-dopo .vicino')).map(rel);
    const parenti = Array.from(box.querySelectorAll('.fuoco-parenti .vicino')).map(rel);

    if (!box.classList.contains('verticale')) {
      prima.forEach((p, i) => {
        const yFine = centro.t + centro.h * (i + 1) / (prima.length + 1);
        const lab = etichettaSvg(etichette, p.r + 10, p.cy - 8, 'serve per capire', 'start');
        const x1 = lab.r + 6;
        const xf = centro.l - 3;
        const xm = x1 + (xf - x1) / 2;
        traccia('M' + p.r + ',' + p.cy + ' H' + x1 + ' C' + xm + ',' + p.cy + ' ' + xm + ',' + yFine + ' ' + xf + ',' + yFine, '', p.id, true);
      });
      dopo.forEach((d, i) => {
        const yInizio = centro.t + centro.h * (i + 1) / (dopo.length + 1);
        const lab = etichettaSvg(etichette, d.l - 10, d.cy - 8, 'serve per capire', 'end');
        const x2 = lab.l - 6;
        const xi = centro.r + 3;
        const xm = xi + (x2 - xi) / 2;
        traccia('M' + xi + ',' + yInizio + ' C' + xm + ',' + yInizio + ' ' + xm + ',' + d.cy + ' ' + x2 + ',' + d.cy + ' H' + (d.l - 3), '', d.id, true);
      });
      if (parenti.length) {
        // Un «pettine» tratteggiato: un tronco a sinistra e una linea sopra ogni riga di parenti.
        const zona = rel(box.querySelector('.fuoco-parenti'));
        const xTronco = zona.l + 18;
        const righe = [];
        parenti.forEach((p) => {
          const riga = righe.find((r) => Math.abs(r[0].t - p.t) < 6);
          if (riga) riga.push(p); else righe.push([p]);
        });
        const yBus = righe.map((r) => r[0].t - 46);
        righe.forEach((riga, k) => {
          let xMin = righe.length > 1 ? xTronco : Math.min.apply(null, riga.map((p) => p.cx));
          let xMax = Math.max.apply(null, riga.map((p) => p.cx));
          if (k === 0) {
            xMin = Math.min(xMin, centro.cx);
            xMax = Math.max(xMax, centro.cx);
            traccia('M' + centro.cx + ',' + centro.b + ' V' + yBus[0], 'parente');
          }
          traccia('M' + xMin + ',' + yBus[k] + ' H' + xMax, 'parente');
          riga.forEach((p) => {
            traccia('M' + p.cx + ',' + yBus[k] + ' V' + (p.t - 27), 'parente', p.id);
            etichettaSvg(etichette, p.cx, p.t - 9, 'è parente di', 'middle');
          });
        });
        if (righe.length > 1) traccia('M' + xTronco + ',' + yBus[0] + ' V' + yBus[yBus.length - 1], 'parente');
      }
    } else {
      // Verticale: tronchi ai lati, un'etichetta per gruppo nello spazio libero.
      const xSx = 15;
      const xDx = R.width - 15;
      if (prima.length) {
        const yArrivo = centro.t + Math.min(26, centro.h / 3);
        traccia('M' + xSx + ',' + prima[0].cy + ' V' + yArrivo + ' H' + (centro.l - 3), '', '', true);
        prima.forEach((p) => traccia('M' + (p.l) + ',' + p.cy + ' H' + xSx, '', p.id));
        const ultima = prima[prima.length - 1];
        etichettaSvg(etichette, xSx + 10, (ultima.b + centro.t) / 2 + 5, 'serve per capire', 'start');
      }
      const gruppoDopo = box.querySelector('.fuoco-dopo');
      const fondo = gruppoDopo ? rel(gruppoDopo).b : centro.b;
      if (dopo.length) {
        const yPartenza = centro.b - Math.min(26, centro.h / 3);
        traccia('M' + (centro.l) + ',' + yPartenza + ' H' + xSx + ' V' + dopo[dopo.length - 1].cy, '');
        dopo.forEach((d) => traccia('M' + xSx + ',' + d.cy + ' H' + (d.l - 3), '', d.id, true));
        const gruppo = rel(box.querySelector('.fuoco-dopo'));
        etichettaSvg(etichette, xSx + 10, (centro.b + gruppo.t) / 2 + 5, 'serve per capire', 'start');
      }
      if (parenti.length) {
        traccia('M' + centro.r + ',' + (centro.b - Math.min(14, centro.h / 4)) + ' H' + xDx + ' V' + parenti[parenti.length - 1].cy, 'parente');
        parenti.forEach((p) => traccia('M' + xDx + ',' + p.cy + ' H' + p.r, 'parente', p.id));
        const gruppo = rel(box.querySelector('.fuoco-parenti'));
        etichettaSvg(etichette, xDx - 10, (fondo + gruppo.t) / 2 + 5, 'è parente di', 'end');
      }
    }
  }

  function attivaFuoco(box) {
    const ridisegna = () => disegnaFrecce(box);
    ridisegna();
    const osservatore = new ResizeObserver(ridisegna);
    osservatore.observe(box);
    box.addEventListener('cambiato', () => requestAnimationFrame(ridisegna));
    const evidenziaFreccia = (e, acceso) => {
      const li = e.target.closest('.vicino');
      if (!li) return;
      li.classList.toggle('evidenziato', acceso);
      box.querySelectorAll('.freccia[data-per="' + li.dataset.id + '"]').forEach((p) => p.classList.toggle('evidenziata', acceso));
    };
    box.addEventListener('mouseover', (e) => evidenziaFreccia(e, true));
    box.addEventListener('mouseout', (e) => evidenziaFreccia(e, false));
    box.addEventListener('focusin', (e) => evidenziaFreccia(e, true));
    box.addEventListener('focusout', (e) => evidenziaFreccia(e, false));
    box.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const aperto = box.querySelector('.vicino.aperto');
      if (aperto) { aperto.classList.remove('aperto'); aperto.querySelector('.vicino-perche-btn').setAttribute('aria-expanded', 'false'); }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ridisegna);
    pulizie.push(() => osservatore.disconnect());
  }

  // ===========================================================================
  // Scheda del concetto

  function sezione(titolo, contenuto, classe) {
    return h('section', { class: classe || null }, h('h2', null, titolo), contenuto);
  }

  function bloccoFormula(c) {
    const f = c.formula;
    if (!f || !f.latex) return null;
    const contenitore = h('div', { class: 'formula-katex', 'aria-hidden': 'true', 'data-non-leggere': '' });
    try {
      katex.render(f.latex, contenitore, { throwOnError: false, displayMode: true, output: 'html' });
    } catch (e) {
      contenitore.textContent = f.latex;
    }
    return h('section', { class: 'formula' },
      h('h2', null, 'La formula'),
      h('p', null, h('strong', null, 'Come si legge: '), f.come_si_legge ? testoSemplice(f.come_si_legge) : h('span', { class: 'segnaposto' }, 'lettura da scrivere')),
      h('p', null, h('strong', null, 'Cosa dice a parole: '), f.a_parole ? arricchisci(f.a_parole, c.id) : h('span', { class: 'segnaposto' }, 'spiegazione da scrivere')),
      h('details', null, h('summary', null, 'Vuoi vedere come si scrive?'), contenitore));
  }

  function elencoLegami(titolo, voci, testoVuoto) {
    return h('div', null,
      h('h2', null, titolo),
      voci.length ? h('ul', null, voci.map((v) => h('li', null,
        h('a', { href: '#/concetto/' + v.id }, perId[v.id].titolo),
        ' (' + AREE[perId[v.id].area].breve + ', livello ' + perId[v.id].livello + ')',
        h('span', { class: 'perche' }, ': ' + v.perche))))
        : h('p', { class: 'nota' }, testoVuoto));
  }

  function vistaConcetto(id) {
    const c = perId[id];
    if (!c) return vistaNonTrovata();
    const area = AREE[c.area];
    const argomento = ARGOMENTI[c.argomento];

    const bottoneNoto = h('button', { type: 'button', class: 'pulsante', 'aria-pressed': stato.conosciuti.has(id) ? 'true' : 'false' }, 'Lo so già');
    bottoneNoto.addEventListener('click', () => {
      const noto = !stato.conosciuti.has(id);
      if (noto) stato.conosciuti.add(id); else stato.conosciuti.delete(id);
      salvaConosciuti();
      bottoneNoto.setAttribute('aria-pressed', noto ? 'true' : 'false');
      annuncia(noto ? c.titolo + ': segnato come già noto.' : c.titolo + ': non più segnato come noto.');
    });

    const fuoco = costruisciFuoco(c);
    const contenuto = h('article', { class: 'pagina-concetto' },
      h('header', { class: 'scheda-testata' }, h('h1', null, c.titolo), metaConcetto(c)),
      fuoco,
      h('div', { class: 'riga-pulsanti', 'data-non-leggere': '' },
        h('a', { class: 'pulsante primario', href: '#/percorso/' + id }, 'Come ci arrivo?'),
        h('a', { class: 'pulsante', href: '#/obiettivo/' + id }, 'Voglio arrivare qui'),
        bottoneNoto,
        h('a', { class: 'pulsante', href: '#/mappa/' + id }, 'Vedi nella mappa completa')),
      h('div', { class: 'scheda' },
        h('p', { class: 'domanda-grande' }, c.domanda ? arricchisci(c.domanda, id) : h('span', { class: 'segnaposto' }, 'Qui ci sarà la domanda da cui nasce «' + c.titolo + '».')),
        sezione('Un esempio', paragrafi(c.esempio, id, 'Qui ci sarà un esempio concreto.')),
        sezione('L\'idea', paragrafi(c.idea, id, 'Qui ci sarà la spiegazione, in poche frasi brevi.')),
        sezione('Perché fa pensare', paragrafi(c.perche_fa_pensare, id, 'Qui ci sarà il lato filosofico dell\'idea.')),
        c.dove_si_usa ? sezione('Dove si usa', paragrafi(c.dove_si_usa, id, '')) : null,
        bloccoFormula(c),
        h('section', { class: 'legami-testo' },
          elencoLegami('Per capirlo serve', c.prerequisiti.map((p) => ({ id: p.id, perche: frasePerche(p.perche, 'frase da scrivere') })),
            'Nessun prerequisito: è un punto di partenza.'),
          elencoLegami('Aiuta a capire', INDICE.successori[id].map((x) => ({ id: x, perche: frasePerche(PERCHE_PRE[id + '>' + x], 'frase da scrivere') })),
            'Per ora nessun concetto della mappa lo usa.'),
          elencoLegami('Idee parenti', INDICE.parenti[id].map((x) => ({ id: x, perche: frasePerche(PERCHE_PAR[coppia(id, x)], 'frase da scrivere') })),
            'Nessuna parentela segnata.'))));

    return {
      titolo: c.titolo,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: area.titolo, href: '#/area/' + area.id },
        { testo: argomento.titolo, href: '#/argomento/' + argomento.id }, { testo: c.titolo }],
      contenuto,
      dopo: () => attivaFuoco(contenuto.querySelector('.fuoco'))
    };
  }

  // ===========================================================================
  // Home: la mappa delle aree

  function legamiTraAree() {
    const conta = {};
    CONCETTI.forEach((c) => c.prerequisiti.forEach((p) => {
      const q = perId[p.id];
      if (!q || q.area === c.area) return;
      const k = q.area + '>' + c.area;
      conta[k] = (conta[k] || 0) + 1;
    }));
    return Object.keys(conta).map((k) => ({ da: k.split('>')[0], a: k.split('>')[1], n: conta[k] }));
  }
  const LEGAMI_AREE = legamiTraAree();

  function ingresso(href, titolo, testo) {
    return h('a', { class: 'ingresso', href }, h('strong', null, titolo), h('span', null, testo));
  }

  function vistaHome() {
    const mappa = creaMappaAree(stato.soglia);

    const selettore = h('select', { id: 'soglia-legami' },
      [1, 2, 3, 4, 5, 6].map((n) => h('option', { value: n, selected: n === stato.soglia }, n === 1 ? 'tutti' : 'almeno ' + n + ' concetti')));
    selettore.addEventListener('change', () => {
      stato.soglia = Number(selettore.value);
      Memoria.scrivi('soglia', stato.soglia);
      rinfresca();
    });

    const famiglie = DATI.famiglie.map((f) => h('section', { class: 'famiglia' },
      h('h3', null, f.titolo),
      h('div', { class: 'griglia-aree' }, DATI.aree.filter((a) => a.famiglia === f.id).map(cartaArea))));

    const contenuto = h('div', { class: 'home' },
      h('h1', null, 'La matematica come una rete di idee'),
      h('div', { class: 'introduzione testo' },
        h('p', null, 'Ogni idea matematica nasce da una domanda. Per capirla servono altre idee, e qui puoi vedere quali.'),
        h('p', null, 'Le aree non sono stanze separate: sono collegate, e insieme formano una rete unica. Scegli da dove partire.')),
      h('nav', { class: 'ingressi', 'aria-label': 'Da dove partire' },
        ingresso('#/aree', 'Esplora', 'Sfoglia aree, argomenti e concetti.'),
        ingresso('#/obiettivo', 'Voglio arrivare a…', 'Scegli un concetto e scopri cosa serve per capirlo.'),
        ingresso('#/domande', 'Grandi domande', 'Percorsi guidati tra aree diverse, partendo da una domanda.')),
      h('h2', null, 'La mappa delle aree'),
      h('p', { class: 'nota' }, 'Ogni riquadro è un\'area. Una freccia da A a B vuol dire che alcuni concetti di A servono per capire concetti di B. Lo spessore e il numero dicono quanti. Passa sopra un\'area, o raggiungila con il tasto Tab, per vedere solo i suoi legami.'),
      h('p', null, h('label', { for: 'soglia-legami' }, 'Mostra i legami con '), ' ', selettore),
      mappa.radice,
      legendaArchi(false, true),
      h('h2', null, 'Le aree, una per una'),
      famiglie);

    return { titolo: 'Mappa della matematica', briciole: [{ testo: 'Mappa' }], contenuto, dopo: () => mappa.attiva() };
  }

  function afterFonts(fn) {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fn); else fn();
  }

  // Mappa delle aree: una riga per famiglia, larga quanto lo schermo, senza zoom.
  // Le frecce passano negli spazi tra le righe; al passaggio o al focus su un'area
  // restano accese solo le sue.
  function puntoBezier(p, t) {
    const u = 1 - t;
    return {
      x: u * u * u * p[0].x + 3 * u * u * t * p[1].x + 3 * u * t * t * p[2].x + t * t * t * p[3].x,
      y: u * u * u * p[0].y + 3 * u * u * t * p[1].y + 3 * u * t * t * p[2].y + t * t * t * p[3].y
    };
  }
  const intersecano = (a, b) => a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b;

  function creaMappaAree(soglia) {
    const radice = h('div', { class: 'mappa-aree' });
    const svg = s('svg', { class: 'mappa-aree-archi', 'aria-hidden': 'true', focusable: 'false' });
    const strato = h('div', { class: 'mappa-aree-nodi' });
    radice.append(svg, strato);
    const nodi = {};
    const etichetteFamiglia = {};
    DATI.famiglie.forEach((f) => {
      etichetteFamiglia[f.id] = h('p', { class: 'mappa-aree-famiglia' }, f.titolo);
      strato.appendChild(etichetteFamiglia[f.id]);
      DATI.aree.filter((a) => a.famiglia === f.id).forEach((a) => {
        nodi[a.id] = h('a', { class: 'nodo-grafo nodo-area ' + classeFamiglia(a.id), href: '#/area/' + a.id, 'data-id': a.id },
          h('span', { class: 'nodo-testa' }, iconaForma(AREE[a.id].forma, 16), h('span', null, a.titolo)),
          h('span', { class: 'nodo-domanda' }, a.domanda));
        strato.appendChild(nodi[a.id]);
      });
    });
    const legami = LEGAMI_AREE.filter((l) => l.n >= soglia).sort((x, y) => x.n - y.n);
    let larghezzaFatta = 0;

    function disponi() {
      const W = radice.clientWidth;
      if (!W || W === larghezzaFatta) return;
      larghezzaFatta = W;
      const BORDO = 6;
      const GX = 26;
      const SPAZIO_RIGHE = 74;
      const colonne = Math.max(2, Math.min(6, Math.floor((W - 2 * BORDO + GX) / (175 + GX))));
      const larg = Math.min(240, Math.floor((W - 2 * BORDO - (colonne - 1) * GX) / colonne));
      const pos = {};
      let y = 0;
      DATI.famiglie.forEach((f) => {
        const etichetta = etichetteFamiglia[f.id];
        etichetta.style.left = BORDO + 'px';
        etichetta.style.top = y + 'px';
        y += etichetta.offsetHeight + 34;
        const aree = DATI.aree.filter((a) => a.famiglia === f.id);
        for (let i = 0; i < aree.length; i += colonne) {
          const riga = aree.slice(i, i + colonne);
          riga.forEach((a) => { nodi[a.id].style.width = larg + 'px'; });
          const altezza = Math.max.apply(null, riga.map((a) => nodi[a.id].offsetHeight));
          const totale = riga.length * larg + (riga.length - 1) * GX;
          const x0 = Math.round((W - totale) / 2);
          riga.forEach((a, k) => {
            const el = nodi[a.id];
            const x = x0 + k * (larg + GX);
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            pos[a.id] = { l: x, t: y, r: x + larg, b: y + el.offsetHeight, w: larg, riga: y };
          });
          y += altezza + SPAZIO_RIGHE;
        }
      });
      const H = y - SPAZIO_RIGHE + 30;
      radice.style.height = H + 'px';
      svg.setAttribute('width', W);
      svg.setAttribute('height', H);
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.replaceChildren(puntaFreccia('punta-aree'));
      strato.querySelectorAll('.etichetta-arco').forEach((e) => e.remove());

      // Punti di attacco distribuiti lungo il lato alto o basso di ogni riquadro.
      const attacchi = {};
      const attacca = (id, lato, altroX, legame, ruolo) => {
        const k = id + ':' + lato;
        (attacchi[k] = attacchi[k] || []).push({ altroX, legame, ruolo });
      };
      legami.forEach((l) => {
        const a = pos[l.da];
        const b = pos[l.a];
        const cxA = (a.l + a.r) / 2;
        const cxB = (b.l + b.r) / 2;
        if (b.riga > a.riga) { attacca(l.da, 'sotto', cxB, l, 'da'); attacca(l.a, 'sopra', cxA, l, 'a'); } else if (b.riga < a.riga) { attacca(l.da, 'sopra', cxB, l, 'da'); attacca(l.a, 'sotto', cxA, l, 'a'); } else { attacca(l.da, 'sopra', cxB, l, 'da'); attacca(l.a, 'sopra', cxA, l, 'a'); }
      });
      const punti = new Map();
      Object.keys(attacchi).forEach((k) => {
        const [id, lato] = k.split(':');
        const p = pos[id];
        const lista = attacchi[k].sort((x, y2) => x.altroX - y2.altroX);
        lista.forEach((at, i) => {
          const x = p.l + 14 + (p.w - 28) * (i + 1) / (lista.length + 1);
          const chiave = at.legame.da + '>' + at.legame.a + ':' + at.ruolo;
          punti.set(chiave, { x, y: lato === 'sotto' ? p.b : p.t, lato });
        });
      });

      const ingombri = Object.keys(pos).map((id) => ({ l: pos[id].l - 4, t: pos[id].t - 4, r: pos[id].r + 4, b: pos[id].b + 4 }));
      DATI.famiglie.forEach((f) => {
        const e = etichetteFamiglia[f.id];
        ingombri.push({ l: e.offsetLeft, t: e.offsetTop, r: e.offsetLeft + e.offsetWidth, b: e.offsetTop + e.offsetHeight });
      });
      const occupati = [];
      legami.forEach((l) => {
        const p0 = punti.get(l.da + '>' + l.a + ':da');
        const p3 = punti.get(l.da + '>' + l.a + ':a');
        let c;
        if (pos[l.da].riga === pos[l.a].riga) {
          const alto = Math.min(SPAZIO_RIGHE - 16, 22 + Math.abs(p3.x - p0.x) * 0.1) * 1.33;
          c = [p0, { x: p0.x, y: p0.y - alto }, { x: p3.x, y: p3.y - alto }, p3];
        } else {
          const segno = p3.y > p0.y ? 1 : -1;
          const k = Math.max(36, Math.min(130, Math.abs(p3.y - p0.y) * 0.45));
          c = [p0, { x: p0.x, y: p0.y + segno * k }, { x: p3.x, y: p3.y - segno * k }, p3];
        }
        const fine = { x: p3.x, y: p3.y + (p3.lato === 'sotto' ? 3 : -3) };
        const percorso = 'M' + p0.x + ',' + p0.y + ' C' + c[1].x + ',' + c[1].y + ' ' + c[2].x + ',' + c[2].y + ' ' + fine.x + ',' + fine.y;
        const path = s('path', { d: percorso, class: 'arco-aree', 'data-da': l.da, 'data-a': l.a, 'marker-end': 'url(#punta-aree)' });
        path.style.strokeWidth = (1.2 + Math.sqrt(l.n) * 1.1).toFixed(1);
        svg.appendChild(path);

        const etichetta = h('span', { class: 'etichetta-arco', 'data-da': l.da, 'data-a': l.a }, String(l.n));
        strato.appendChild(etichetta);
        const ew = etichetta.offsetWidth;
        const eh = etichetta.offsetHeight;
        let scelto = null;
        for (const t of [0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74, 0.18, 0.82, 0.12, 0.88]) {
          const q = puntoBezier(c, t);
          const box = { l: q.x - ew / 2 - 2, t: q.y - eh / 2 - 2, r: q.x + ew / 2 + 2, b: q.y + eh / 2 + 2 };
          if (!ingombri.some((r) => intersecano(r, box)) && !occupati.some((r) => intersecano(r, box))) { scelto = { q, box }; break; }
        }
        if (!scelto) { const q = puntoBezier(c, 0.5); scelto = { q, box: { l: q.x - ew / 2, t: q.y - eh / 2, r: q.x + ew / 2, b: q.y + eh / 2 } }; }
        occupati.push(scelto.box);
        etichetta.style.left = scelto.q.x + 'px';
        etichetta.style.top = scelto.q.y + 'px';
        etichetta.title = AREE[l.da].titolo + ' serve per ' + AREE[l.a].titolo + ': ' + l.n + ' legami';
      });
    }

    const accendi = (e, acceso) => {
      const el = e.target.closest('.nodo-area');
      if (!el) return;
      const id = el.dataset.id;
      radice.classList.toggle('con-fuoco', acceso);
      radice.querySelectorAll('[data-da="' + id + '"], [data-a="' + id + '"]').forEach((x) => {
        x.classList.toggle('acceso', acceso);
        if (acceso && x.tagName === 'path') x.parentNode.appendChild(x);
      });
    };
    radice.addEventListener('mouseover', (e) => accendi(e, true));
    radice.addEventListener('mouseout', (e) => accendi(e, false));
    radice.addEventListener('focusin', (e) => accendi(e, true));
    radice.addEventListener('focusout', (e) => accendi(e, false));

    const osservatore = new ResizeObserver(() => disponi());
    return {
      radice,
      attiva() {
        osservatore.observe(radice);
        afterFonts(() => { larghezzaFatta = 0; disponi(); });
        pulizie.push(() => osservatore.disconnect());
      }
    };
  }

  function cartaArea(a) {
    const uscite = LEGAMI_AREE.filter((l) => l.da === a.id).sort((x, y) => y.n - x.n).slice(0, 3);
    const n = (perArea[a.id] || []).length;
    return h('div', { class: 'carta carta-area ' + classeFamiglia(a.id) },
      h('h4', { class: 'titolo-carta' }, h('a', { href: '#/area/' + a.id }, a.titolo)),
      h('p', null, badgeArea(a.id), ' ', plurale(n, 'concetto', 'concetti')),
      h('p', null, a.domanda),
      uscite.length ? h('p', { class: 'legami-aree' }, 'Serve soprattutto a: ' + uscite.map((l) => AREE[l.a].titolo + ' (' + l.n + ')').join(', ') + '.') : null);
  }

  // ===========================================================================
  // Esplora: tutte le aree con i loro argomenti

  function vistaAree() {
    const contenuto = h('div', null,
      h('h1', null, 'Esplora'),
      h('p', { class: 'introduzione' }, 'Le aree sono raggruppate in famiglie. Ogni area si divide in argomenti, e ogni argomento contiene concetti.'),
      DATI.famiglie.map((f) => h('section', { class: 'famiglia' },
        h('h2', null, f.titolo),
        h('div', { class: 'griglia-aree' }, DATI.aree.filter((a) => a.famiglia === f.id).map((a) => h('div', { class: 'carta carta-area ' + classeFamiglia(a.id) },
          h('h3', null, h('a', { href: '#/area/' + a.id }, a.titolo)),
          h('p', null, a.domanda),
          h('ul', null, DATI.argomenti.filter((x) => x.area === a.id).map((x) => h('li', null,
            h('a', { href: '#/argomento/' + x.id }, x.titolo), ' (' + (perArgomento[x.id] || []).length + ')')))))))));
    return { titolo: 'Esplora', briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Esplora' }], contenuto };
  }

  // ===========================================================================
  // Area: argomenti e loro legami

  function chipArea(areaId, n) {
    return h('li', null, h('a', { href: '#/area/' + areaId, class: classeFamiglia(areaId) },
      h('span', { class: 'badge badge-area ' + classeFamiglia(areaId) }, iconaForma(AREE[areaId].forma, 14), AREE[areaId].titolo + (n ? ' · ' + n : ''))));
  }

  function chipConcetto(id) {
    const c = perId[id];
    return h('li', null, h('a', { href: '#/concetto/' + id, class: classeFamiglia(c.area) },
      h('span', { class: 'badge badge-area ' + classeFamiglia(c.area) }, iconaForma(AREE[c.area].forma, 14), c.titolo)));
  }

  function elencoConcetti(lista) {
    return h('ul', { class: 'elenco-concetti' }, lista.map((c) => h('li', null,
      h('a', { href: '#/concetto/' + c.id }, c.titolo), badgeTipo(c), badgeLivello(c), badgeConosciuto(c))));
  }

  function notaFiltro(nascosti) {
    if (!nascosti) return null;
    return h('p', { class: 'nota' }, plurale(nascosti, 'concetto nascosto', 'concetti nascosti') + ' perché oltre il livello ' + stato.livelloMax + '. Puoi cambiare il filtro in alto.');
  }

  function vistaArea(id) {
    const a = AREE[id];
    if (!a) return vistaNonTrovata();
    const argomentiArea = DATI.argomenti.filter((x) => x.area === id);
    const conta = {};
    (perArea[id] || []).forEach((c) => c.prerequisiti.forEach((p) => {
      const q = perId[p.id];
      if (q && q.area === id && q.argomento !== c.argomento) {
        const k = q.argomento + '>' + c.argomento;
        conta[k] = (conta[k] || 0) + 1;
      }
    }));
    const nodi = argomentiArea.map((x) => {
      const tutti = perArgomento[x.id] || [];
      const vis = tutti.filter(visibile).length;
      return {
        id: x.id,
        el: h('a', { class: 'nodo-argomento ' + classeFamiglia(id), href: '#/argomento/' + x.id },
          h('span', { class: 'nodo-testa' }, iconaForma(a.forma, 14), h('span', null, x.titolo)),
          h('span', { class: 'nodo-domanda' }, x.domanda),
          h('span', { class: 'nodo-conteggio' }, vis === tutti.length ? plurale(tutti.length, 'concetto', 'concetti') : vis + ' di ' + tutti.length + ' concetti al tuo livello'))
      };
    });
    const archi = Object.keys(conta).map((k) => ({
      da: k.split('>')[0], a: k.split('>')[1], peso: conta[k], etichetta: conta[k], classe: 'arco-aree',
      spessore: (1.2 + Math.sqrt(conta[k]) * 1.1).toFixed(1)
    }));
    const grafo = creaGrafo({ nodi, archi, direzione: 'TB', distanzaNodi: 40, distanzaRanghi: 64, etichetta: 'Argomenti di ' + a.titolo, altezzaAdattiva: true });

    const entrate = LEGAMI_AREE.filter((l) => l.a === id).sort((x, y) => y.n - x.n);
    const uscite = LEGAMI_AREE.filter((l) => l.da === id).sort((x, y) => y.n - x.n);
    let nascosti = 0;
    const contenuto = h('div', null,
      h('h1', null, a.titolo),
      h('p', null, badgeArea(id), ' ', FAMIGLIE[a.famiglia].titolo),
      h('p', { class: 'domanda-grande' }, a.domanda),
      h('p', { class: 'descrizione' }, a.descrizione || h('span', { class: 'segnaposto' }, 'Descrizione in arrivo.')),
      entrate.length ? [h('h2', null, 'Arriva da'), h('p', { class: 'nota' }, 'Aree con concetti che servono qui. Il numero dice quanti legami.'), h('ul', { class: 'chips' }, entrate.map((l) => chipArea(l.da, l.n)))] : null,
      uscite.length ? [h('h2', null, 'Porta a'), h('ul', { class: 'chips' }, uscite.map((l) => chipArea(l.a, l.n)))] : null,
      h('h2', null, 'Gli argomenti'),
      h('p', { class: 'nota' }, 'Una freccia da un argomento a un altro vuol dire che alcuni suoi concetti servono per capire l\'altro.'),
      grafo.radice,
      legendaArchi(false, true),
      argomentiArea.map((x) => {
        const tutti = perArgomento[x.id] || [];
        const vis = tutti.filter(visibile);
        nascosti += tutti.length - vis.length;
        return h('section', null,
          h('h2', null, h('a', { href: '#/argomento/' + x.id }, x.titolo)),
          h('p', null, x.domanda),
          elencoConcetti(ordineValido(vis.map((c) => c.id)).map((cid) => perId[cid])),
          notaFiltro(tutti.length - vis.length));
      }));
    return {
      titolo: a.titolo,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: a.titolo }],
      contenuto,
      dopo: () => afterFonts(grafo.disponi)
    };
  }

  // ===========================================================================
  // Argomento: i suoi concetti

  function vistaArgomento(id) {
    const x = ARGOMENTI[id];
    if (!x) return vistaNonTrovata();
    const a = AREE[x.area];
    const tutti = perArgomento[id] || [];
    const vis = tutti.filter(visibile);
    const ids = new Set(vis.map((c) => c.id));
    const nodi = ordineValido(vis.map((c) => c.id)).map((cid) => ({ id: cid, el: nodoConcetto(perId[cid], { noto: stato.conosciuti.has(cid) }) }));
    const archi = [];
    const esterni = new Set();
    const uscite = new Set();
    vis.forEach((c) => {
      c.prerequisiti.forEach((p) => {
        if (ids.has(p.id)) archi.push({ da: p.id, a: c.id });
        else if (perId[p.id].argomento !== id && visibile(perId[p.id])) esterni.add(p.id);
      });
      INDICE.successori[c.id].forEach((sId) => {
        if (perId[sId].argomento !== id && visibile(perId[sId])) uscite.add(sId);
      });
    });
    const grafo = creaGrafo({ nodi, archi, direzione: 'TB', distanzaNodi: 30, distanzaRanghi: 54, etichetta: 'Concetti di ' + x.titolo, altezzaAdattiva: true });
    const contenuto = h('div', null,
      h('h1', null, x.titolo),
      h('p', null, badgeArea(a.id), ' ', h('a', { href: '#/area/' + a.id }, a.titolo)),
      h('p', { class: 'domanda-grande' }, x.domanda),
      h('p', { class: 'descrizione' }, x.descrizione || h('span', { class: 'segnaposto' }, 'Descrizione in arrivo.')),
      h('h2', null, 'I concetti'),
      grafo.radice,
      legendaArchi(false, false),
      esterni.size ? [h('h2', null, 'Serve anche'), h('p', { class: 'nota' }, 'Concetti di altri argomenti che servono qui.'), h('ul', { class: 'chips' }, ordineValido(Array.from(esterni)).map(chipConcetto))] : null,
      uscite.size ? [h('h2', null, 'Porta a'), h('ul', { class: 'chips' }, ordineValido(Array.from(uscite)).map(chipConcetto))] : null,
      h('h2', null, 'In ordine'),
      h('p', { class: 'nota' }, 'Ogni concetto viene dopo quelli che servono per capirlo.'),
      elencoConcetti(nodi.map((n) => perId[n.id])),
      notaFiltro(tutti.length - vis.length));
    return {
      titolo: x.titolo,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: a.titolo, href: '#/area/' + a.id }, { testo: x.titolo }],
      contenuto,
      dopo: () => afterFonts(grafo.disponi)
    };
  }

  // ===========================================================================
  // Come ci arrivo? Tutta la catena di prerequisiti

  function vistaPercorso(id) {
    const c = perId[id];
    if (!c) return vistaNonTrovata();
    const antenati = Object.keys(INDICE.antenati(id));
    const noti = insiemeNoti();
    const ids = [id].concat(antenati).filter((x) => x === id || !(stato.nascondiNotiPercorso && noti.has(x)));
    const insieme = new Set(ids);
    const nodi = ordineValido(ids).map((x) => ({ id: x, el: nodoConcetto(perId[x], { obiettivo: x === id, noto: x !== id && noti.has(x) }) }));
    const archi = [];
    ids.forEach((x) => perId[x].prerequisiti.forEach((p) => { if (insieme.has(p.id)) archi.push({ da: p.id, a: x }); }));
    const grafo = creaGrafo({ nodi, archi, direzione: 'LR', distanzaNodi: 18, distanzaRanghi: 56, etichetta: 'Catena di prerequisiti di ' + c.titolo, primo: id, scalaLeggibile: 0.85 });
    const aree = new Set(ids.map((x) => perId[x].area));
    const bottone = h('button', { type: 'button', class: 'pulsante', 'aria-pressed': stato.nascondiNotiPercorso ? 'true' : 'false' }, 'Nascondi quelli che so già');
    bottone.addEventListener('click', () => { stato.nascondiNotiPercorso = !stato.nascondiNotiPercorso; rinfresca(); });
    const contenuto = h('div', null,
      h('h1', null, 'Come ci arrivo? ', h('span', { class: 'solo-lettori' }, c.titolo)),
      h('p', { class: 'domanda-grande' }, c.titolo),
      h('p', { class: 'testo' }, antenati.length
        ? 'Per arrivare a questo concetto servono ' + plurale(antenati.length, 'altro concetto', 'altri concetti') + ', da ' + plurale(aree.size, 'area', 'aree') + '. Le frecce vanno da ciò che serve a ciò che lo usa: si legge da sinistra a destra.'
        : 'Questo concetto è un punto di partenza: non servono prerequisiti.'),
      h('div', { class: 'riga-pulsanti' },
        h('a', { class: 'pulsante primario', href: '#/obiettivo/' + id }, 'Vedilo come elenco di passi'),
        h('a', { class: 'pulsante', href: '#/concetto/' + id }, 'Torna alla scheda'),
        noti.size ? bottone : null),
      grafo.radice,
      legendaArchi(false, false));
    return {
      titolo: 'Come ci arrivo: ' + c.titolo,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: c.titolo, href: '#/concetto/' + id }, { testo: 'Come ci arrivo?' }],
      contenuto,
      dopo: () => afterFonts(() => { grafo.disponi(); grafo.evidenzia(id, insieme); })
    };
  }

  // ===========================================================================
  // Voglio arrivare a…

  const OBIETTIVI_PROPOSTI = ['teorema-fondamentale-del-calcolo', 'teorema-di-bayes', 'relativita-generale', 'p-contro-np',
    'ipotesi-di-riemann', 'teoremi-di-incompletezza', 'rsa', 'reti-neurali'];

  function vistaObiettivo(id) {
    if (!id) {
      const campo = campoRicerca({
        etichetta: 'Cerca il concetto a cui vuoi arrivare',
        segnaposto: 'Per esempio: integrale, probabilità, Pitagora…',
        filtro: (v) => v.tipo === 'concetto',
        scegli: (v) => { location.hash = '#/obiettivo/' + v.id; }
      });
      const contenuto = h('div', null,
        h('h1', null, 'Voglio arrivare a…'),
        h('p', { class: 'introduzione' }, 'Scegli un concetto. Ti mostro tutto quello che serve per capirlo, in un ordine che funziona. Puoi segnare quello che sai già.'),
        campo,
        h('h2', null, 'Qualche idea'),
        h('ul', { class: 'chips' }, OBIETTIVI_PROPOSTI.filter((x) => perId[x]).map((x) => h('li', null,
          h('a', { href: '#/obiettivo/' + x }, h('span', { class: 'badge badge-area ' + classeFamiglia(perId[x].area) }, iconaForma(AREE[perId[x].area].forma, 14), perId[x].titolo))))));
      return { titolo: 'Voglio arrivare a…', briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Voglio arrivare a…' }], contenuto };
    }

    const c = perId[id];
    if (!c) return vistaNonTrovata();
    const antenati = Object.keys(INDICE.antenati(id));
    const noti = insiemeNoti();
    const ordine = ordineValido(antenati.concat(id), true);
    const daFare = ordine.filter((x) => !noti.has(x));
    const daMostrare = stato.mostraNoti ? ordine : daFare;

    // Blocchi consecutivi della stessa area
    const blocchi = [];
    daMostrare.forEach((x) => {
      const ultimo = blocchi[blocchi.length - 1];
      if (ultimo && ultimo.area === perId[x].area) ultimo.ids.push(x); else blocchi.push({ area: perId[x].area, ids: [x] });
    });

    const motivoNoto = (x) => {
      if (stato.conosciuti.has(x)) return 'lo sai già';
      const da = Array.from(stato.conosciuti).find((k) => INDICE.antenati(k)[x]);
      return da ? 'lo sai già, perché serve per ' + perId[da].titolo : 'lo sai già';
    };

    let numero = 0;
    const blocchiEl = blocchi.map((b) => {
      const inizio = numero + 1;
      const quanti = b.ids.filter((x) => !noti.has(x)).length;
      const lista = h('ol', { class: 'passi', start: inizio }, b.ids.map((x) => {
        numero++;
        const cx = perId[x];
        const noto = noti.has(x);
        let bottone = null;
        if (x !== id) {
          if (!noto || stato.conosciuti.has(x)) {
            bottone = h('button', { type: 'button', class: 'pulsante', 'aria-pressed': stato.conosciuti.has(x) ? 'true' : 'false', 'data-id': x },
              stato.conosciuti.has(x) ? 'Non lo so' : 'Lo so già', h('span', { class: 'solo-lettori' }, ': ' + cx.titolo));
            bottone.addEventListener('click', () => segnaNoto(x));
          }
        }
        return h('li', { class: (noto ? 'noto' : '') + (x === id ? ' obiettivo-finale' : ''), 'data-id': x },
          h('div', { class: 'passo-riga' },
            h('a', { href: '#/concetto/' + x }, cx.titolo),
            h('span', { class: 'badge', title: LIVELLI[cx.livello] }, 'Livello ' + cx.livello),
            badgeTipo(cx),
            x === id ? h('span', { class: 'badge badge-conosciuto' }, 'obiettivo') : null,
            noto ? h('span', { class: 'badge badge-conosciuto' }, motivoNoto(x)) : null,
            bottone));
      }));
      return h('section', { class: 'blocco-area ' + classeFamiglia(b.area) },
        h('h2', null, badgeArea(b.area), AREE[b.area].titolo, h('span', { class: 'nota' }, '(' + plurale(quanti, 'passo', 'passi') + ')')),
        lista);
    });

    const nascostiNoti = ordine.length - daFare.length;
    const bottoneMostra = h('button', { type: 'button', class: 'pulsante', 'aria-pressed': stato.mostraNoti ? 'true' : 'false' },
      'Mostra anche quelli che so già (' + nascostiNoti + ')');
    bottoneMostra.addEventListener('click', () => { stato.mostraNoti = !stato.mostraNoti; rinfresca(); });
    const bottoneAzzera = h('button', { type: 'button', class: 'pulsante' }, 'Azzera quello che ho segnato');
    bottoneAzzera.addEventListener('click', () => {
      stato.conosciuti.clear();
      salvaConosciuti();
      annuncia('Ho tolto tutti i segni «lo so già».');
      rinfresca();
    });

    const contenuto = h('div', null,
      h('h1', null, 'Per arrivare a: ', c.titolo),
      metaConcetto(c),
      h('p', { class: 'piano-sommario', role: 'status' },
        daFare.length <= 1 ? (noti.has(id) ? 'Hai segnato di conoscere già questo concetto.' : 'Ci sei: manca solo questo concetto.')
          : 'Ti servono ' + plurale(daFare.length, 'passo', 'passi') + ', compreso l\'obiettivo.'),
      h('p', { class: 'testo nota' }, 'L\'ordine è valido: ogni concetto viene dopo quelli che servono per capirlo. Se segni «Lo so già», spariscono anche i suoi prerequisiti. Il filtro di livello qui non vale: servono tutti.'),
      h('div', { class: 'riga-pulsanti' },
        nascostiNoti ? bottoneMostra : null,
        stato.conosciuti.size ? bottoneAzzera : null,
        h('a', { class: 'pulsante', href: '#/percorso/' + id }, 'Vedilo come mappa'),
        h('a', { class: 'pulsante', href: '#/obiettivo' }, 'Scegli un altro obiettivo')),
      blocchiEl);

    function segnaNoto(x) {
      const eraNoto = stato.conosciuti.has(x);
      const primaNascosti = insiemeNoti().size;
      if (eraNoto) stato.conosciuti.delete(x); else stato.conosciuti.add(x);
      salvaConosciuti();
      const dopoNascosti = insiemeNoti().size;
      // Dopo il ridisegno, il focus va al passo successivo ancora da fare.
      const posizione = daMostrare.indexOf(x);
      rinfresca();
      const nuoviNoti = insiemeNoti();
      const prossimo = daMostrare.slice(posizione + 1).find((y) => stato.mostraNoti || !nuoviNoti.has(y));
      const destinazione = (eraNoto || stato.mostraNoti) ? document.querySelector('li[data-id="' + x + '"] button')
        : prossimo ? document.querySelector('li[data-id="' + prossimo + '"] a') : document.querySelector('.piano-sommario');
      if (destinazione) { if (destinazione.classList.contains('piano-sommario')) destinazione.setAttribute('tabindex', '-1'); destinazione.focus(); }
      annuncia(eraNoto ? perId[x].titolo + ' torna tra i passi da fare.'
        : perId[x].titolo + ' segnato come già noto. ' + (dopoNascosti - primaNascosti > 1 ? 'Nascosti anche ' + plurale(dopoNascosti - primaNascosti - 1, 'suo prerequisito', 'suoi prerequisiti') + '.' : ''));
    }

    return {
      titolo: 'Per arrivare a ' + c.titolo,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Voglio arrivare a…', href: '#/obiettivo' }, { testo: c.titolo }],
      contenuto
    };
  }

  // ===========================================================================
  // Grandi domande

  function vistaDomande() {
    const contenuto = h('div', null,
      h('h1', null, 'Grandi domande'),
      h('p', { class: 'introduzione' }, 'Ogni grande domanda è un percorso tra aree diverse. Lo segui un passo alla volta, al tuo ritmo.'),
      h('ul', { class: 'griglia-domande' }, DATI.grandiDomande.map((g) => {
        const aree = Array.from(new Set(g.passi.map((p) => perId[p.id] && perId[p.id].area).filter(Boolean)));
        return h('li', null, h('div', { class: 'carta carta-domanda' },
          h('h2', null, h('a', { href: '#/domanda/' + g.id + '/1' }, g.titolo)),
          h('p', null, g.descrizione || h('span', { class: 'segnaposto' }, 'Descrizione in arrivo.')),
          h('p', { class: 'nota' }, plurale(g.passi.length, 'passo', 'passi') + ' in ' + plurale(aree.length, 'area', 'aree') + '.'),
          h('ul', { class: 'chips' }, aree.map((a) => h('li', null, badgeArea(a))))));
      })));
    return { titolo: 'Grandi domande', briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Grandi domande' }], contenuto };
  }

  function vistaDomanda(id, n) {
    const g = DATI.grandiDomande.find((x) => x.id === id);
    if (!g) return vistaNonTrovata();
    const totale = g.passi.length;
    const i = Math.max(1, Math.min(totale, Number(n) || 1));
    const passo = g.passi[i - 1];
    const c = perId[passo.id];
    const successivo = g.passi[i];

    const nav = h('nav', { class: 'passi-nav', 'aria-label': 'Passi del percorso' },
      i > 1 ? h('a', { class: 'pulsante', href: '#/domanda/' + id + '/' + (i - 1), rel: 'prev' }, '← Indietro') : null,
      i < totale ? h('a', { class: 'pulsante primario', href: '#/domanda/' + id + '/' + (i + 1), rel: 'next' }, 'Avanti →')
        : h('a', { class: 'pulsante primario', href: '#/domande' }, 'Fine: scegli un\'altra domanda'));

    const contenuto = h('div', null,
      h('h1', null, g.titolo),
      h('p', { class: 'avanzamento' }, 'Passo ' + i + ' di ' + totale),
      h('progress', { max: totale, value: i, 'aria-hidden': 'true' }),
      i === 1 ? h('p', { class: 'testo' }, g.descrizione || h('span', { class: 'segnaposto' }, 'Qui ci sarà una breve presentazione della domanda.')) : null,
      i > 1 ? h('div', { class: 'raccordo' }, h('span', { class: 'raccordo-etichetta' }, 'Dal passo precedente'),
        passo.raccordo ? arricchisci(passo.raccordo) : h('span', { class: 'segnaposto' }, 'Frase di raccordo da scrivere.')) : null,
      h('article', { class: 'passo-corrente' },
        h('h2', null, c.titolo),
        metaConcetto(c),
        h('p', { class: 'domanda-grande' }, c.domanda ? arricchisci(c.domanda, c.id) : h('span', { class: 'segnaposto' }, 'Domanda in arrivo.')),
        paragrafi(c.idea, c.id, 'Qui ci sarà la spiegazione in breve.'),
        h('p', null, h('a', { href: '#/concetto/' + c.id }, 'Apri la scheda completa di «' + c.titolo + '»'))),
      successivo ? h('div', { class: 'raccordo' }, h('span', { class: 'raccordo-etichetta' }, 'Prossimo passo: ' + perId[successivo.id].titolo),
        successivo.raccordo ? arricchisci(successivo.raccordo) : h('span', { class: 'segnaposto' }, 'Frase di raccordo da scrivere.')) : null,
      nav,
      h('details', { class: 'percorso-completo' },
        h('summary', null, 'Tutto il percorso (' + plurale(totale, 'passo', 'passi') + ')'),
        h('ol', null, g.passi.map((p, k) => h('li', { 'aria-current': k === i - 1 ? 'step' : null },
          k > 0 ? h('span', { class: 'raccordo-breve' }, p.raccordo ? testoSemplice(p.raccordo) : 'Raccordo da scrivere.') : null,
          k === i - 1 ? perId[p.id].titolo + ' (sei qui)' : h('a', { href: '#/domanda/' + id + '/' + (k + 1) }, perId[p.id].titolo))))));

    return {
      titolo: g.titolo + ' · passo ' + i,
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Grandi domande', href: '#/domande' }, { testo: g.titolo, href: '#/domanda/' + id + '/1' }, { testo: 'Passo ' + i }],
      contenuto
    };
  }

  // ===========================================================================
  // Mappa completa (facoltativa, mai come vista iniziale)

  let cacheMappa = null;

  function vistaMappa(id) {
    const sel = id && perId[id] ? id : null;
    const chiave = stato.livelloMax + '|' + stato.parenteleMappa;
    let grafo;
    let nuovo = false;
    if (cacheMappa && cacheMappa.chiave === chiave) {
      grafo = cacheMappa.grafo;
    } else {
      const vis = CONCETTI.filter(visibile);
      const ids = new Set(vis.map((c) => c.id));
      const nodi = vis.map((c) => ({ id: c.id, el: nodoConcetto(c, { compatto: true, href: '#/mappa/' + c.id }) }));
      const archi = [];
      vis.forEach((c) => c.prerequisiti.forEach((p) => { if (ids.has(p.id)) archi.push({ da: p.id, a: c.id }); }));
      if (stato.parenteleMappa) {
        vis.forEach((c) => INDICE.parenti[c.id].forEach((x) => {
          if (ids.has(x) && c.id < x) archi.push({ da: c.id, a: x, classe: 'arco parente', senzaPunta: true, fuoriDisposizione: true });
        }));
      }
      grafo = creaGrafo({ nodi, archi, direzione: 'LR', distanzaNodi: 12, distanzaRanghi: 70, ranker: 'tight-tree', etichetta: 'Mappa completa dei concetti', scalaMinima: 0.3 });
      cacheMappa = { chiave, grafo, disposto: false };
      nuovo = true;
    }

    grafo.nodi.forEach((n, nid) => n.el.classList.toggle('conosciuto', stato.conosciuti.has(nid)));

    const parentele = h('button', { type: 'button', class: 'pulsante', 'aria-pressed': stato.parenteleMappa ? 'true' : 'false' }, 'Mostra le parentele');
    parentele.addEventListener('click', () => { stato.parenteleMappa = !stato.parenteleMappa; rinfresca(); });
    const trova = campoRicerca({
      etichetta: 'Trova un concetto nella mappa',
      segnaposto: 'Scrivi un nome…',
      filtro: (v) => v.tipo === 'concetto',
      scegli: (v) => { location.hash = '#/mappa/' + v.id; }
    });

    let pannello;
    if (sel) {
      const c = perId[sel];
      const antenati = Object.keys(INDICE.antenati(sel));
      pannello = h('section', { class: 'mappa-pannello', 'aria-live': 'polite' },
        h('h2', null, c.titolo),
        metaConcetto(c),
        h('p', null, antenati.length ? 'Evidenziati: i ' + antenati.length + ' concetti che servono per arrivarci.' : 'È un punto di partenza: non ha prerequisiti.'),
        h('div', { class: 'riga-pulsanti' },
          h('a', { class: 'pulsante primario', href: '#/concetto/' + sel }, 'Apri la scheda'),
          h('a', { class: 'pulsante', href: '#/percorso/' + sel }, 'Come ci arrivo?'),
          h('a', { class: 'pulsante', href: '#/mappa' }, 'Togli la selezione')));
    } else {
      pannello = h('section', { class: 'mappa-pannello' },
        h('p', { class: 'testo' }, 'Scegli un concetto: con un clic, con Invio o con la ricerca qui sotto. La mappa mette in evidenza la strada di prerequisiti che porta lì.'));
    }

    const contenuto = h('div', null,
      h('h1', null, 'Mappa completa'),
      h('p', { class: 'testo nota' }, 'Tutti i concetti visibili al tuo livello. Si legge da sinistra a destra: ogni freccia va da un concetto a uno che lo usa. Le aree si distinguono per colore e per forma.'),
      h('details', null, h('summary', null, 'Colori e forme delle aree'),
        h('ul', { class: 'legenda-aree' }, DATI.aree.map((a) => h('li', { class: classeFamiglia(a.id) }, iconaForma(AREE[a.id].forma, 16), a.titolo)))),
      h('div', { class: 'riga-pulsanti' }, parentele),
      trova,
      pannello,
      nuovo ? h('p', { class: 'grafo-attesa', role: 'status' }, 'Sto disegnando la mappa. Ci vuole qualche secondo…') : null,
      grafo.radice,
      legendaArchi(stato.parenteleMappa, false));

    return {
      titolo: sel ? 'Mappa completa: ' + perId[sel].titolo : 'Mappa completa',
      briciole: [{ testo: 'Mappa', href: '#/' }, sel ? { testo: 'Mappa completa', href: '#/mappa' } : { testo: 'Mappa completa' }].concat(sel ? [{ testo: perId[sel].titolo }] : []),
      contenuto,
      mantieniFocus: !!sel && !nuovo,
      dopo: () => {
        const completa = () => {
          const attesa = contenuto.querySelector('.grafo-attesa');
          if (attesa) attesa.remove();
          if (sel) {
            const sopra = new Set(Object.keys(INDICE.antenati(sel)).concat(sel));
            grafo.evidenzia(sel, sopra);
            grafo.adattaA(sopra, 0.25);
            grafo.metti(sel);
          } else {
            grafo.evidenzia(null, null);
          }
        };
        if (!cacheMappa.disposto) {
          setTimeout(() => afterFonts(() => {
            grafo.disponi();
            cacheMappa.disposto = true;
            if (!sel) grafo.centraSu(CONCETTI.find(visibile).id, 0.7);
            completa();
          }), 30);
        } else completa();
      }
    };
  }

  // ===========================================================================
  // Ricerca: pagina dei risultati

  function vistaCerca(testo) {
    const risultati = cerca(testo || '');
    const campo = campoRicerca({ etichetta: 'Cerca di nuovo', segnaposto: testo, tutti: true, scegli: (v) => { location.hash = v.href; } });
    const contenuto = h('div', null,
      h('h1', null, 'Risultati per «' + testo + '»'),
      campo,
      risultati.length ? h('ul', { class: 'elenco-concetti' }, risultati.slice(0, 60).map((r) => h('li', null,
        h('a', { href: r.voce.href }, r.voce.titolo), dettagliVoce(r.voce),
        r.come && normalizza(r.come) !== normalizza(r.voce.titolo) ? h('span', { class: 'nota' }, 'trovato come «' + r.come + '»') : null)))
        : h('p', null, 'Nessun risultato. Prova con una parola sola, o scrivila in un altro modo.'));
    return { titolo: 'Risultati per ' + testo, briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Ricerca' }], contenuto };
  }

  // ===========================================================================
  // Controllo dei dati (gli stessi controlli di tools/verifica.js)

  function collegaId(testo) {
    const frammento = document.createDocumentFragment();
    const parti = String(testo).split(/([a-z0-9]+(?:-[a-z0-9]+)+|[a-z]{3,})/);
    parti.forEach((p) => {
      if (perId[p]) frammento.append(h('a', { href: '#/concetto/' + p }, p));
      else frammento.append(p);
    });
    return frammento;
  }

  function vistaControllo() {
    const esito = Controlli.esegui(DATI);
    const st = esito.statistiche;
    const contenuto = h('div', null,
      h('h1', null, 'Controllo dei dati'),
      h('p', { class: 'testo' }, 'Gli stessi controlli dello script tools/verifica.js. Servono a chi scrive la mappa.'),
      h('p', { class: 'controlli-sommario', role: 'status' }, plurale(esito.errori, 'errore', 'errori') + ', ' + plurale(esito.avvisi, 'avviso', 'avvisi') + '.'),
      esito.controlli.map((k) => h('details', {
        class: 'controllo livello-' + k.livello + (k.voci.length ? ' con-voci' : ' senza-voci'),
        open: k.livello === 'errore' && k.voci.length > 0
      },
      h('summary', null,
        h('span', { class: 'esito' }, k.voci.length ? (k.livello === 'errore' ? 'Errore' : k.livello === 'avviso' ? 'Avviso' : 'Nota') + ': ' + k.voci.length : 'Tutto a posto'),
        h('span', null, k.nome)),
      h('p', { class: 'descrizione-controllo' }, k.descrizione),
      k.riassunto ? h('p', { class: 'descrizione-controllo' }, k.riassunto) : null,
      k.voci.length ? h('ul', { class: 'voci' }, k.voci.slice(0, 400).map((v) => h('li', null, collegaId(v.testo)))) : null)),

      h('h2', null, 'Concetti per area e livello'),
      h('div', { class: 'tabella-wrap' }, h('table', null,
        h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Area'), [1, 2, 3, 4].map((l) => h('th', { scope: 'col', class: 'numero' }, 'Livello ' + l)), h('th', { scope: 'col', class: 'numero' }, 'Totale'))),
        h('tbody', null, DATI.aree.map((a) => h('tr', null,
          h('th', { scope: 'row' }, h('a', { href: '#/area/' + a.id }, a.titolo)),
          st.perArea[a.id].livelli.map((n) => h('td', { class: 'numero' }, n)),
          h('td', { class: 'numero' }, st.perArea[a.id].totale)))),
        h('tfoot', null, h('tr', null, h('th', { scope: 'row' }, 'Totale'), st.perLivello.map((n) => h('td', { class: 'numero' }, n)), h('td', { class: 'numero' }, st.totali.concetti))))),

      h('h2', null, 'Le catene di prerequisiti più lunghe'),
      h('ol', { class: 'catene' }, st.catenePiuLunghe.slice(0, 10).map((cat) => h('li', null,
        h('a', { href: '#/percorso/' + cat[cat.length - 1] }, perId[cat[cat.length - 1]].titolo), ' (' + cat.length + ' passi)',
        h('div', { class: 'catena' }, cat.map((x) => perId[x].titolo).join(' → '))))),

      h('h2', null, 'Legami più forti tra aree'),
      h('div', { class: 'tabella-wrap' }, h('table', null,
        h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Da'), h('th', { scope: 'col' }, 'A'), h('th', { scope: 'col', class: 'numero' }, 'Legami'))),
        h('tbody', null, st.legamiTraAree.slice(0, 20).map((l) => h('tr', null,
          h('td', null, AREE[l.da].titolo), h('td', null, AREE[l.a].titolo), h('td', { class: 'numero' }, l.n)))))));
    return { titolo: 'Controllo dei dati', briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Controllo dei dati' }], contenuto };
  }

  function vistaNonTrovata() {
    return {
      titolo: 'Pagina non trovata',
      briciole: [{ testo: 'Mappa', href: '#/' }, { testo: 'Non trovata' }],
      contenuto: h('div', null,
        h('h1', null, 'Questa pagina non esiste'),
        h('p', null, 'Forse il collegamento è cambiato. Prova con la ricerca in alto, oppure ', h('a', { href: '#/' }, 'torna alla mappa'), '.'))
    };
  }

  // ===========================================================================
  // Lettura ad alta voce (Web Speech API, in italiano)

  const Lettore = (function () {
    const disponibile = 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
    let attivo = false;
    let blocchi = [];
    let indice = 0;
    let voce = null;
    const bottone = document.getElementById('leggi');

    function scegliVoce() {
      const voci = window.speechSynthesis.getVoices();
      voce = voci.find((v) => v.lang === 'it-IT') || voci.find((v) => v.lang && v.lang.toLowerCase().indexOf('it') === 0) || null;
    }

    function testoLeggibile(el) {
      const copia = el.cloneNode(true);
      copia.querySelectorAll('[data-non-leggere], [aria-hidden="true"], .definizione, .vicino-perche, svg, .katex').forEach((n) => n.remove());
      copia.querySelectorAll('[data-leggi-come]').forEach((n) => n.replaceWith(n.getAttribute('data-leggi-come')));
      return copia.textContent.replace(/\s+/g, ' ').trim();
    }

    function raccogli() {
      const radice = document.getElementById('contenuto');
      const selettore = 'h1, h2, h3, h4, p, li, dt, dd, summary, th, td';
      return Array.from(radice.querySelectorAll(selettore))
        .filter((el) => !el.closest('[data-non-leggere], [aria-hidden="true"], [hidden], .risultati'))
        .filter((el) => !el.querySelector(selettore))
        .filter((el) => el.offsetParent !== null || el.closest('details[open]'))
        .map((el) => ({ el, testo: testoLeggibile(el) }))
        .filter((b) => b.testo);
    }

    function aggiornaBottone() {
      bottone.querySelector('span').textContent = attivo ? 'Ferma la lettura' : 'Leggi ad alta voce';
      bottone.setAttribute('aria-pressed', attivo ? 'true' : 'false');
    }

    function togliEvidenza() { document.querySelectorAll('.in-lettura').forEach((el) => el.classList.remove('in-lettura')); }

    function prossimo() {
      togliEvidenza();
      if (!attivo || indice >= blocchi.length) { ferma(); return; }
      const b = blocchi[indice++];
      b.el.classList.add('in-lettura');
      b.el.scrollIntoView({ block: 'nearest' });
      const u = new SpeechSynthesisUtterance(b.testo);
      u.lang = 'it-IT';
      if (voce) u.voice = voce;
      u.rate = 0.95;
      u.onend = prossimo;
      u.onerror = prossimo;
      window.speechSynthesis.speak(u);
    }

    function avvia() {
      blocchi = raccogli();
      indice = 0;
      if (!blocchi.length) return;
      window.speechSynthesis.cancel();
      attivo = true;
      aggiornaBottone();
      prossimo();
    }

    function ferma() {
      if (!disponibile) return;
      attivo = false;
      window.speechSynthesis.cancel();
      togliEvidenza();
      aggiornaBottone();
    }

    if (disponibile) {
      bottone.hidden = false;
      scegliVoce();
      if (typeof window.speechSynthesis.addEventListener === 'function') window.speechSynthesis.addEventListener('voiceschanged', scegliVoce);
      bottone.addEventListener('click', () => (attivo ? ferma() : avvia()));
      aggiornaBottone();
    }
    return { ferma, disponibile };
  })();

  // ===========================================================================
  // Legenda, filtro di livello, dimensione del testo

  function costruisciLegenda() {
    const pannello = document.getElementById('pannello-legenda');
    pannello.appendChild(h('div', { class: 'legenda', role: 'region', 'aria-label': 'Legenda' },
      h('div', null,
        h('h2', null, 'Collegamenti'),
        h('ul', null,
          h('li', null, frecciaPiccola(false), 'serve per capire: freccia piena, dal concetto che serve a quello che lo usa'),
          h('li', null, frecciaPiccola(true), 'è parente di: linea tratteggiata, idee vicine o in comune')),
        h('h2', null, 'Tipi'),
        h('ul', null,
          h('li', null, h('span', { class: 'badge badge-tipo tipo-concetto' }, 'Concetto'), 'un\'idea o una definizione'),
          h('li', null, h('span', { class: 'badge badge-tipo tipo-teorema' }, 'Teorema'), 'un risultato dimostrato'),
          h('li', null, h('span', { class: 'badge badge-tipo tipo-problema-aperto' }, 'Problema aperto'), 'una domanda che nessuno ha ancora risolto'))),
      h('div', null,
        h('h2', null, 'Livelli'),
        h('ul', null, [1, 2, 3, 4].map((l) => h('li', null, h('span', { class: 'badge' }, 'Livello ' + l), LIVELLI[l])))),
      h('div', null,
        h('h2', null, 'Aree: colore e forma'),
        DATI.famiglie.map((f) => h('div', { class: 'famiglia-legenda fam-' + f.id },
          h('strong', null, f.titolo),
          h('ul', null, DATI.aree.filter((a) => a.famiglia === f.id).map((a) => h('li', null, iconaForma(AREE[a.id].forma, 16), a.titolo))))))));
    const bottone = document.getElementById('apri-legenda');
    bottone.addEventListener('click', () => {
      const apri = pannello.hidden;
      pannello.hidden = !apri;
      bottone.setAttribute('aria-expanded', apri ? 'true' : 'false');
      bottone.setAttribute('aria-pressed', apri ? 'true' : 'false');
    });
  }

  function impostaStrumenti() {
    const filtro = document.getElementById('filtro-livello');
    filtro.value = String(stato.livelloMax);
    filtro.addEventListener('change', () => {
      stato.livelloMax = numeroTra(filtro.value, 1, 4, 4);
      Memoria.scrivi('livello', stato.livelloMax);
      annuncia('Ora vedi i concetti fino al livello ' + stato.livelloMax + ': ' + LIVELLI[stato.livelloMax] + '.');
      rinfresca();
    });
    const applicaScala = () => {
      document.documentElement.style.setProperty('--scala', SCALE_TESTO[stato.scala]);
      document.getElementById('testo-meno').disabled = stato.scala === 0;
      document.getElementById('testo-piu').disabled = stato.scala === SCALE_TESTO.length - 1;
    };
    const cambiaScala = (delta) => {
      stato.scala = Math.max(0, Math.min(SCALE_TESTO.length - 1, stato.scala + delta));
      Memoria.scrivi('scala', stato.scala);
      applicaScala();
      cacheMappa = null;
      annuncia('Testo al ' + Math.round(SCALE_TESTO[stato.scala] * 100) + ' per cento.');
      rinfresca();
    };
    document.getElementById('testo-piu').addEventListener('click', () => cambiaScala(1));
    document.getElementById('testo-meno').addEventListener('click', () => cambiaScala(-1));
    applicaScala();
    document.getElementById('salta').addEventListener('click', () => {
      const titolo = document.querySelector('#contenuto h1');
      if (titolo) { titolo.setAttribute('tabindex', '-1'); titolo.focus(); }
    });
    document.getElementById('ricerca-globale').appendChild(campoRicerca({
      etichetta: 'Cerca un concetto',
      segnaposto: 'Scrivi anche con errori: va bene lo stesso',
      tutti: true,
      scegli: (v) => { location.hash = v.href; }
    }));
  }

  // ===========================================================================
  // Navigazione: router, briciole, «da dove vengo»

  let pulizie = [];
  let primaVolta = true;
  const scia = [];

  function aggiornaBriciole(briciole) {
    const nav = document.getElementById('briciole');
    nav.replaceChildren(h('ol', null, briciole.map((b, i) => h('li', null,
      b.href && i < briciole.length - 1 ? h('a', { href: b.href }, b.testo) : h('span', { 'aria-current': 'page' }, b.testo)))));
  }

  function aggiornaScia(titolo, href) {
    if (!scia.length || scia[scia.length - 1].href !== href) {
      const gia = scia.findIndex((x) => x.href === href);
      if (gia >= 0) scia.splice(gia, 1);
      scia.push({ titolo, href });
      if (scia.length > 7) scia.shift();
    }
    const precedenti = scia.slice(0, -1).slice(-5);
    const nav = document.getElementById('scia');
    nav.hidden = !precedenti.length;
    nav.replaceChildren(h('span', { class: 'scia-etichetta' }, 'Da dove vengo:'),
      h('ol', null, precedenti.map((x) => h('li', null, h('a', { href: x.href }, x.titolo)))));
  }

  const ROTTE = [
    [/^$/, vistaHome],
    [/^aree$/, vistaAree],
    [/^area\/([a-z0-9-]+)$/, vistaArea],
    [/^argomento\/([a-z0-9-]+)$/, vistaArgomento],
    [/^concetto\/([a-z0-9-]+)$/, vistaConcetto],
    [/^percorso\/([a-z0-9-]+)$/, vistaPercorso],
    [/^obiettivo(?:\/([a-z0-9-]+))?$/, vistaObiettivo],
    [/^domande$/, vistaDomande],
    [/^domanda\/([a-z0-9-]+)(?:\/(\d+))?$/, vistaDomanda],
    [/^mappa(?:\/([a-z0-9-]+))?$/, vistaMappa],
    [/^controllo$/, vistaControllo],
    [/^cerca\/(.*)$/, vistaCerca]
  ];

  function disegna(opzioni) {
    pulizie.forEach((f) => f());
    pulizie = [];
    Lettore.ferma();
    const grezzo = location.hash.replace(/^#\/?/, '');
    let percorso = grezzo;
    try { percorso = decodeURIComponent(grezzo); } catch (e) { /* lascia com'è */ }
    let vista = null;
    for (const [re, fn] of ROTTE) {
      const m = percorso.match(re);
      if (m) { vista = fn.apply(null, m.slice(1)); break; }
    }
    if (!vista) vista = vistaNonTrovata();
    const main = document.getElementById('contenuto');
    main.replaceChildren(vista.contenuto);
    document.title = vista.titolo === 'Mappa della matematica' ? vista.titolo : vista.titolo + ' · Mappa della matematica';
    aggiornaBriciole(vista.briciole);
    if (!opzioni.rinfresco) aggiornaScia(vista.titolo, location.hash || '#/');
    if (vista.dopo) vista.dopo();
    if (!opzioni.rinfresco && !primaVolta && !vista.mantieniFocus) {
      const titolo = main.querySelector('h1');
      if (titolo) { titolo.setAttribute('tabindex', '-1'); titolo.focus({ preventScroll: true }); }
      window.scrollTo(0, 0);
    }
    primaVolta = false;
  }

  // Ridisegna la vista corrente senza spostare il focus (filtro, preferenze).
  function rinfresca() {
    const attivo = document.activeElement;
    const idAttivo = attivo && attivo.id;
    const y = window.scrollY;
    disegna({ rinfresco: true });
    window.scrollTo(0, y);
    if (idAttivo && document.getElementById(idAttivo)) document.getElementById(idAttivo).focus({ preventScroll: true });
  }

  window.addEventListener('hashchange', () => disegna({}));

  // ===========================================================================
  // Avvio

  costruisciLegenda();
  impostaStrumenti();
  disegna({});
})();
