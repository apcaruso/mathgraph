/*
 * Controlli di coerenza della mappa.
 * Lo stesso codice gira in Node (tools/verifica.js) e nel browser (pagina #/controllo).
 * Riceve i dati normalizzati da Mappa.dati() e restituisce un elenco di controlli
 * con le loro voci, più alcune statistiche sulla struttura.
 */
(function (radice, fabbrica) {
  var Controlli = fabbrica();
  if (typeof module === 'object' && module.exports) module.exports = Controlli;
  else radice.Controlli = Controlli;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  var TIPI = ['concetto', 'teorema', 'problema-aperto'];
  var CAMPI_TESTO = ['domanda', 'esempio', 'idea', 'perche_fa_pensare'];
  var MAX_VICINI = 6;

  // ---------------------------------------------------------------------------
  // Indice del grafo: concetti per id, successori, parenti simmetrici, antenati.

  function costruisciIndice(dati) {
    var perId = {};
    var successori = {};
    var parenti = {};

    dati.concetti.forEach(function (c) {
      if (!perId[c.id]) perId[c.id] = c;
      successori[c.id] = [];
      parenti[c.id] = [];
    });

    dati.concetti.forEach(function (c) {
      c.prerequisiti.forEach(function (p) {
        if (successori[p.id] && successori[p.id].indexOf(c.id) < 0) successori[p.id].push(c.id);
      });
      c.parenti.forEach(function (p) {
        if (!parenti[p.id] || p.id === c.id) return;
        if (parenti[c.id].indexOf(p.id) < 0) parenti[c.id].push(p.id);
        if (parenti[p.id].indexOf(c.id) < 0) parenti[p.id].push(c.id);
      });
    });

    // Tutti i prerequisiti, diretti e indiretti. Regge anche in presenza di cicli.
    var memo = {};
    var inCorso = {};
    function antenati(id) {
      if (memo[id]) return memo[id];
      if (inCorso[id]) return {};
      inCorso[id] = true;
      var ris = {};
      var c = perId[id];
      if (c) {
        c.prerequisiti.forEach(function (p) {
          if (!perId[p.id]) return;
          ris[p.id] = true;
          var a = antenati(p.id);
          for (var k in a) ris[k] = true;
        });
      }
      inCorso[id] = false;
      memo[id] = ris;
      return ris;
    }

    return { perId: perId, successori: successori, parenti: parenti, antenati: antenati };
  }

  // Cicli nei prerequisiti: restituisce un elenco di cicli, ognuno come lista di id.
  function trovaCicli(dati, indice) {
    var stato = {}; // 1 = in visita, 2 = finito
    var pila = [];
    var cicli = [];
    var visti = {};

    function visita(id) {
      stato[id] = 1;
      pila.push(id);
      var c = indice.perId[id];
      (c ? c.prerequisiti : []).forEach(function (p) {
        if (!indice.perId[p.id]) return;
        if (stato[p.id] === 1) {
          var ciclo = pila.slice(pila.indexOf(p.id)).concat(p.id);
          var chiave = ciclo.slice(0, -1).slice().sort().join('|');
          if (!visti[chiave]) { visti[chiave] = true; cicli.push(ciclo); }
        } else if (!stato[p.id]) {
          visita(p.id);
        }
      });
      pila.pop();
      stato[id] = 2;
    }

    dati.concetti.forEach(function (c) { if (!stato[c.id]) visita(c.id); });
    return cicli;
  }

  // Catena di prerequisiti più lunga che termina in ogni concetto.
  // Va chiamata solo se non ci sono cicli.
  function profondita(dati, indice) {
    var prof = {};
    var prec = {};
    function calcola(id) {
      if (prof[id] !== undefined) return prof[id];
      var migliore = 0;
      var scelto = null;
      var c = indice.perId[id];
      var lista = c.prerequisiti.map(function (p) { return p.id; })
        .filter(function (p) { return indice.perId[p]; })
        .sort();
      lista.forEach(function (p) {
        var d = calcola(p);
        if (d > migliore) { migliore = d; scelto = p; }
      });
      prof[id] = migliore + 1;
      prec[id] = scelto;
      return prof[id];
    }
    dati.concetti.forEach(function (c) { calcola(c.id); });

    function catena(id) {
      var ris = [];
      while (id) { ris.unshift(id); id = prec[id]; }
      return ris;
    }
    return { prof: prof, catena: catena };
  }

  // ---------------------------------------------------------------------------

  function esegui(dati) {
    var controlli = [];
    function nuovo(id, nome, livello, descrizione) {
      var k = { id: id, nome: nome, livello: livello, descrizione: descrizione, voci: [], riassunto: '' };
      controlli.push(k);
      return k;
    }

    var indice = costruisciIndice(dati);
    var areePerId = {};
    var argomentiPerId = {};
    var famigliePerId = {};
    dati.famiglie.forEach(function (f) { famigliePerId[f.id] = f; });
    dati.aree.forEach(function (a) { areePerId[a.id] = a; });
    dati.argomenti.forEach(function (a) { argomentiPerId[a.id] = a; });

    // 1. Identificatori unici
    var kId = nuovo('id-unici', 'Identificatori unici', 'errore',
      'Ogni concetto, area, argomento e grande domanda ha un id diverso dagli altri dello stesso tipo.');
    function duplicati(lista, etichetta) {
      var visti = {};
      lista.forEach(function (x) {
        if (!x.id) return;
        if (visti[x.id]) kId.voci.push({ id: x.id, testo: etichetta + ' con id ripetuto: ' + x.id });
        visti[x.id] = true;
      });
    }
    duplicati(dati.famiglie, 'Famiglia');
    duplicati(dati.aree, 'Area');
    duplicati(dati.argomenti, 'Argomento');
    duplicati(dati.grandiDomande, 'Grande domanda');
    duplicati(dati.concetti, 'Concetto');

    // 2. Campi obbligatori
    var kCampi = nuovo('campi-obbligatori', 'Campi obbligatori', 'errore',
      'Ogni concetto ha id, titolo, tipo, area, argomento e un livello da 1 a 4.');
    dati.concetti.forEach(function (c) {
      var nome = c.id || '(senza id)';
      ['id', 'titolo', 'area', 'argomento'].forEach(function (campo) {
        if (!c[campo]) kCampi.voci.push({ id: c.id, testo: nome + ': manca il campo ' + campo });
      });
      if ([1, 2, 3, 4].indexOf(c.livello) < 0) {
        kCampi.voci.push({ id: c.id, testo: nome + ': livello non valido (' + c.livello + ')' });
      }
      if (TIPI.indexOf(c.tipo) < 0) {
        kCampi.voci.push({ id: c.id, testo: nome + ': tipo non valido (' + c.tipo + ')' });
      }
    });

    // 3. Riferimenti
    var kRif = nuovo('riferimenti', 'Riferimenti esistenti', 'errore',
      'Aree, argomenti, prerequisiti, parenti e passi delle grandi domande puntano a elementi che esistono.');
    dati.aree.forEach(function (a) {
      if (!famigliePerId[a.famiglia]) kRif.voci.push({ testo: 'Area ' + a.id + ': famiglia inesistente ' + a.famiglia });
    });
    dati.argomenti.forEach(function (a) {
      if (!areePerId[a.area]) kRif.voci.push({ testo: 'Argomento ' + a.id + ': area inesistente ' + a.area });
    });
    dati.concetti.forEach(function (c) {
      if (c.area && !areePerId[c.area]) kRif.voci.push({ id: c.id, testo: c.id + ': area inesistente ' + c.area });
      var arg = argomentiPerId[c.argomento];
      if (c.argomento && !arg) {
        kRif.voci.push({ id: c.id, testo: c.id + ': argomento inesistente ' + c.argomento });
      } else if (arg && arg.area !== c.area) {
        kRif.voci.push({ id: c.id, testo: c.id + ': l\'argomento ' + c.argomento + ' appartiene all\'area ' + arg.area + ', non a ' + c.area });
      }
      c.prerequisiti.forEach(function (p) {
        if (p.id === c.id) kRif.voci.push({ id: c.id, testo: c.id + ': è prerequisito di se stesso' });
        else if (!indice.perId[p.id]) kRif.voci.push({ id: c.id, testo: c.id + ': prerequisito inesistente ' + p.id });
      });
      c.parenti.forEach(function (p) {
        if (p.id === c.id) kRif.voci.push({ id: c.id, testo: c.id + ': è parente di se stesso' });
        else if (!indice.perId[p.id]) kRif.voci.push({ id: c.id, testo: c.id + ': parente inesistente ' + p.id });
      });
    });
    dati.grandiDomande.forEach(function (g) {
      g.passi.forEach(function (p, i) {
        if (!indice.perId[p.id]) kRif.voci.push({ testo: 'Grande domanda ' + g.id + ', passo ' + (i + 1) + ': concetto inesistente ' + p.id });
      });
    });
    // Termini collegati dentro i testi: [[id]] oppure [[id|parola]]
    testiDaControllare(dati).forEach(function (t) {
      var re = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
      var m;
      while ((m = re.exec(t.testo))) {
        if (!indice.perId[m[1]]) kRif.voci.push({ id: t.id, testo: t.dove + ': termine collegato a un concetto inesistente [[' + m[1] + ']]' });
      }
    });

    // 4. Cicli
    var kCicli = nuovo('cicli', 'Nessun ciclo nei prerequisiti', 'errore',
      'Seguendo i prerequisiti non si torna mai al punto di partenza.');
    var cicli = trovaCicli(dati, indice);
    cicli.forEach(function (ciclo) {
      kCicli.voci.push({ id: ciclo[0], testo: 'Ciclo: ' + ciclo.join(' → ') });
    });
    var senzaCicli = cicli.length === 0;

    // 5. Grandi domande
    var kPercorsi = nuovo('percorsi', 'Grandi domande in ordine valido', 'errore',
      'In ogni percorso nessun concetto compare dopo un concetto che ne ha bisogno.');
    dati.grandiDomande.forEach(function (g) {
      var visti = {};
      g.passi.forEach(function (p, i) {
        if (visti[p.id]) kPercorsi.voci.push({ testo: g.id + ': il concetto ' + p.id + ' compare due volte' });
        visti[p.id] = true;
      });
      if (!senzaCicli) return;
      for (var i = 0; i < g.passi.length; i++) {
        if (!indice.perId[g.passi[i].id]) continue;
        var ant = indice.antenati(g.passi[i].id);
        for (var j = i + 1; j < g.passi.length; j++) {
          if (ant[g.passi[j].id]) {
            kPercorsi.voci.push({
              id: g.passi[i].id,
              testo: g.id + ': ' + g.passi[j].id + ' (passo ' + (j + 1) + ') serve per capire ' +
                g.passi[i].id + ' (passo ' + (i + 1) + '), ma viene dopo'
            });
          }
        }
      }
    });

    // 6. Livelli
    var kLivelli = nuovo('livelli', 'Livelli coerenti', 'avviso',
      'Un prerequisito non dovrebbe avere un livello più alto del concetto che lo usa.');
    dati.concetti.forEach(function (c) {
      c.prerequisiti.forEach(function (p) {
        var q = indice.perId[p.id];
        if (q && q.livello > c.livello) {
          kLivelli.voci.push({ id: c.id, testo: c.id + ' (livello ' + c.livello + ') usa ' + q.id + ' (livello ' + q.livello + ')' });
        }
      });
    });

    // 7. Concetti isolati
    var kIsolati = nuovo('isolati', 'Concetti isolati', 'avviso',
      'Concetti senza prerequisiti, senza successori e senza parenti.');
    dati.concetti.forEach(function (c) {
      if (c.prerequisiti.length === 0 && indice.successori[c.id].length === 0 && indice.parenti[c.id].length === 0) {
        kIsolati.voci.push({ id: c.id, testo: c.id + ' (' + c.area + ')' });
      }
    });

    // 8. Legami ripetuti
    var kDoppi = nuovo('legami-doppi', 'Legami ripetuti', 'avviso',
      'Un legame va scritto una volta sola. I parenti valgono in tutte e due le direzioni.');
    dati.concetti.forEach(function (c) {
      var pre = {};
      c.prerequisiti.forEach(function (p) {
        if (pre[p.id]) kDoppi.voci.push({ id: c.id, testo: c.id + ': prerequisito ripetuto ' + p.id });
        pre[p.id] = true;
      });
      var par = {};
      c.parenti.forEach(function (p) {
        if (par[p.id]) kDoppi.voci.push({ id: c.id, testo: c.id + ': parente ripetuto ' + p.id });
        par[p.id] = true;
        if (pre[p.id]) kDoppi.voci.push({ id: c.id, testo: c.id + ': ' + p.id + ' è sia prerequisito sia parente' });
        var altro = indice.perId[p.id];
        if (altro) {
          if (altro.prerequisiti.some(function (q) { return q.id === c.id; })) {
            kDoppi.voci.push({ id: c.id, testo: c.id + ': ' + p.id + ' è parente, ma ha ' + c.id + ' come prerequisito' });
          }
          if (c.id < altro.id && altro.parenti.some(function (q) { return q.id === c.id; })) {
            kDoppi.voci.push({ id: c.id, testo: 'Parentela scritta due volte tra ' + c.id + ' e ' + altro.id });
          }
        }
      });
    });

    // 9. File e struttura
    var kFile = nuovo('struttura', 'Struttura e file', 'avviso',
      'Ogni concetto sta nel file della sua area; ogni area e ogni argomento contengono almeno un concetto.');
    var contaArea = {};
    var contaArg = {};
    dati.concetti.forEach(function (c) {
      contaArea[c.area] = (contaArea[c.area] || 0) + 1;
      contaArg[c.argomento] = (contaArg[c.argomento] || 0) + 1;
      if (c._file && c._file !== c.area + '.js') {
        kFile.voci.push({ id: c.id, testo: c.id + ': area ' + c.area + ' ma si trova nel file ' + c._file });
      }
    });
    dati.aree.forEach(function (a) {
      if (!contaArea[a.id]) kFile.voci.push({ testo: 'Area senza concetti: ' + a.id });
    });
    dati.argomenti.forEach(function (a) {
      if (!contaArg[a.id]) kFile.voci.push({ testo: 'Argomento senza concetti: ' + a.id });
    });

    // 10. Testi mancanti
    var kTesti = nuovo('testi', 'Testi mancanti', 'avviso',
      'Campi di testo da scrivere: schede dei concetti, frasi dei legami, descrizioni e raccordi.');
    var mancanti = {};
    function segnaMancante(campo) { mancanti[campo] = (mancanti[campo] || 0) + 1; }
    dati.concetti.forEach(function (c) {
      var campi = CAMPI_TESTO.filter(function (k) { return !c[k] || !String(c[k]).trim(); });
      var legamiSenza = c.prerequisiti.concat(c.parenti).filter(function (l) { return !l.perche; }).length;
      if (c.sinonimi.length === 0) campi.push('sinonimi');
      campi.forEach(segnaMancante);
      if (legamiSenza) {
        campi.push(legamiSenza + (legamiSenza === 1 ? ' frase "perche"' : ' frasi "perche"'));
        mancanti['perche dei legami'] = (mancanti['perche dei legami'] || 0) + legamiSenza;
      }
      if (c.formula && (!c.formula.come_si_legge || !c.formula.a_parole)) {
        campi.push('lettura della formula');
        segnaMancante('lettura della formula');
      }
      if (campi.length) kTesti.voci.push({ id: c.id, testo: c.id + ': ' + campi.join(', ') });
    });
    dati.aree.forEach(function (a) {
      ['domanda', 'descrizione'].forEach(function (k) {
        if (!a[k]) { kTesti.voci.push({ testo: 'Area ' + a.id + ': manca ' + k }); segnaMancante(k + ' delle aree'); }
      });
    });
    dati.argomenti.forEach(function (a) {
      ['domanda', 'descrizione'].forEach(function (k) {
        if (!a[k]) { kTesti.voci.push({ testo: 'Argomento ' + a.id + ': manca ' + k }); segnaMancante(k + ' degli argomenti'); }
      });
    });
    dati.grandiDomande.forEach(function (g) {
      if (!g.descrizione) { kTesti.voci.push({ testo: 'Grande domanda ' + g.id + ': manca la descrizione' }); segnaMancante('descrizione delle grandi domande'); }
      var senza = g.passi.slice(1).filter(function (p) { return !p.raccordo; }).length;
      if (senza) {
        kTesti.voci.push({ testo: 'Grande domanda ' + g.id + ': ' + senza + ' frasi di raccordo da scrivere' });
        mancanti['raccordi'] = (mancanti['raccordi'] || 0) + senza;
      }
    });
    kTesti.riassunto = Object.keys(mancanti).map(function (k) { return k + ': ' + mancanti[k]; }).join(' · ');

    // 10b. Regole di linguaggio
    var kLingua = nuovo('linguaggio', 'Regole di linguaggio', 'avviso',
      'Niente «è facile», «ovviamente», «banalmente», «si vede subito»; frasi sotto le 20 parole; idea in 4-6 frasi; ' +
      'niente parole tutte maiuscole, corsivo o formule nel testo principale.');
    testiDaControllare(dati).forEach(function (t) {
      var pulito = testoPulito(t.testo);
      var vietata = pulito.match(/\b(è facile|e' facile|ovviamente|ovvio|banalmente|banale|si vede subito)\b/i);
      if (vietata) kLingua.voci.push({ id: t.id, testo: t.dove + ': espressione da evitare «' + vietata[0] + '»' });
      frasi(pulito).forEach(function (f) {
        var n = f.split(/\s+/).filter(Boolean).length;
        if (n > 20) kLingua.voci.push({ id: t.id, testo: t.dove + ': frase di ' + n + ' parole «' + f.slice(0, 60) + '…»' });
      });
      var maiuscole = (pulito.match(/\b[A-ZÀÈÉÌÒÙ]{3,}\b/g) || []).filter(function (p) {
        return SIGLE_AMMESSE.indexOf(p) < 0 && !/^[IVXLCDM]+$/.test(p);
      });
      if (maiuscole.length) kLingua.voci.push({ id: t.id, testo: t.dove + ': parola tutta maiuscola «' + maiuscole[0] + '»' });
      if (/[*_]{1,2}\S/.test(pulito)) kLingua.voci.push({ id: t.id, testo: t.dove + ': segni di corsivo o grassetto' });
      if (t.principale && /[=^√∫∑≤≥≠∞]|\\[a-z]/.test(pulito)) kLingua.voci.push({ id: t.id, testo: t.dove + ': simboli da formula nel testo principale' });
    });
    dati.concetti.forEach(function (c) {
      if (!c.idea) return;
      var n = frasi(testoPulito(c.idea)).length;
      if (n > 6) kLingua.voci.push({ id: c.id, testo: c.id + ' (idea): ' + n + ' frasi, al massimo 6' });
    });

    // 11. Da verificare
    var kVerificare = nuovo('da-verificare', 'Concetti da verificare', 'info',
      'Schede con affermazioni incerte, da ricontrollare.');
    dati.concetti.forEach(function (c) {
      if (c.da_verificare) kVerificare.voci.push({ id: c.id, testo: c.id + (typeof c.da_verificare === 'string' ? ': ' + c.da_verificare : '') });
    });

    // 12. Prerequisiti ridondanti
    var kRidondanti = nuovo('ridondanti', 'Prerequisiti indiretti scritti anche come diretti', 'info',
      'Un prerequisito diretto che si raggiunge già passando da un altro. A volte è voluto, spesso si può togliere.');
    if (senzaCicli) {
      dati.concetti.forEach(function (c) {
        c.prerequisiti.forEach(function (p) {
          var via = c.prerequisiti.filter(function (q) {
            return q.id !== p.id && indice.perId[q.id] && indice.antenati(q.id)[p.id];
          });
          if (via.length) kRidondanti.voci.push({ id: c.id, testo: c.id + ': ' + p.id + ' si raggiunge già da ' + via[0].id });
        });
      });
    }

    // 13. Molti vicini
    var kVicini = nuovo('molti-vicini', 'Concetti con molti vicini', 'info',
      'Più di ' + MAX_VICINI + ' vicini su un lato: la vista a fuoco mostrerà il pulsante «altri N».');
    dati.concetti.forEach(function (c) {
      var lati = [];
      if (c.prerequisiti.length > MAX_VICINI) lati.push(c.prerequisiti.length + ' prerequisiti');
      if (indice.successori[c.id].length > MAX_VICINI) lati.push(indice.successori[c.id].length + ' successori');
      if (indice.parenti[c.id].length > MAX_VICINI) lati.push(indice.parenti[c.id].length + ' parenti');
      if (lati.length) kVicini.voci.push({ id: c.id, testo: c.id + ': ' + lati.join(', ') });
    });

    return {
      controlli: controlli,
      errori: contaVoci(controlli, 'errore'),
      avvisi: contaVoci(controlli, 'avviso'),
      statistiche: statistiche(dati, indice, senzaCicli)
    };
  }

  // Sigle che possono restare in maiuscolo perché sono il nome stesso della cosa.
  var SIGLE_AMMESSE = ['RSA', 'GPS', 'DNA', 'RNA', 'JPEG', 'MP3', 'PIN', 'PNG', 'ZIP', 'USB', 'HTTPS', 'SSL', 'TLS',
    'MRI', 'TAC', 'PIL', 'ISTAT', 'NASA', 'CERN', 'IBM', 'CPU', 'GPU', 'SHA', 'AES', 'QR', 'NP', 'SAT', 'ENIAC'];

  // Tutti i campi di testo, con l'indicazione di dove si trovano.
  function testiDaControllare(dati) {
    var testi = [];
    var principali = ['domanda', 'esempio', 'idea', 'perche_fa_pensare', 'dove_si_usa', 'definizione'];
    dati.concetti.forEach(function (c) {
      principali.forEach(function (k) {
        if (c[k]) testi.push({ id: c.id, dove: c.id + ' (' + k + ')', testo: String(c[k]), principale: true });
      });
      if (c.formula && c.formula.a_parole) testi.push({ id: c.id, dove: c.id + ' (formula a parole)', testo: c.formula.a_parole, principale: true });
      if (c.formula && c.formula.come_si_legge) testi.push({ id: c.id, dove: c.id + ' (come si legge)', testo: c.formula.come_si_legge, principale: false });
      c.prerequisiti.concat(c.parenti).forEach(function (l) {
        if (l.perche) testi.push({ id: c.id, dove: c.id + ' → ' + l.id + ' (perché)', testo: l.perche, principale: true });
      });
    });
    dati.aree.concat(dati.argomenti).forEach(function (a) {
      ['domanda', 'descrizione'].forEach(function (k) {
        if (a[k]) testi.push({ dove: a.id + ' (' + k + ')', testo: String(a[k]), principale: true });
      });
    });
    dati.grandiDomande.forEach(function (g) {
      if (g.descrizione) testi.push({ dove: g.id + ' (descrizione)', testo: g.descrizione, principale: true });
      g.passi.forEach(function (p, i) {
        if (p.raccordo) testi.push({ dove: g.id + ', passo ' + (i + 1) + ' (raccordo)', testo: p.raccordo, principale: true });
      });
    });
    return testi;
  }

  // Testo senza la sintassi dei termini collegati.
  function testoPulito(t) {
    return String(t).replace(/\[\[([^\]|]+)\|([^\]]*)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1');
  }

  // Divide in frasi, senza spezzare i numeri decimali (3,14) o le abbreviazioni comuni.
  function frasi(t) {
    return t.replace(/\b(es|ecc|cioè|pag|vol|sec|ca)\.\s/gi, '$1§ ')
      .split(/(?<=[.!?…][»"')\]]*)\s+/)
      .map(function (f) { return f.trim(); })
      .filter(Boolean);
  }

  function contaVoci(controlli, livello) {
    return controlli.filter(function (k) { return k.livello === livello; })
      .reduce(function (n, k) { return n + k.voci.length; }, 0);
  }

  // ---------------------------------------------------------------------------

  function statistiche(dati, indice, senzaCicli) {
    var perArea = {};
    dati.aree.forEach(function (a) {
      perArea[a.id] = { totale: 0, livelli: [0, 0, 0, 0], tipi: { 'concetto': 0, 'teorema': 0, 'problema-aperto': 0 } };
    });
    var perLivello = [0, 0, 0, 0];
    var perTipo = { 'concetto': 0, 'teorema': 0, 'problema-aperto': 0 };
    var nPrerequisiti = 0;
    var nParenti = 0;

    dati.concetti.forEach(function (c) {
      var s = perArea[c.area];
      if (s) {
        s.totale++;
        if (c.livello >= 1 && c.livello <= 4) s.livelli[c.livello - 1]++;
        if (s.tipi[c.tipo] !== undefined) s.tipi[c.tipo]++;
      }
      if (c.livello >= 1 && c.livello <= 4) perLivello[c.livello - 1]++;
      if (perTipo[c.tipo] !== undefined) perTipo[c.tipo]++;
      nPrerequisiti += c.prerequisiti.length;
    });
    Object.keys(indice.parenti).forEach(function (id) { nParenti += indice.parenti[id].length; });
    nParenti = nParenti / 2;

    // Legami tra aree: quante volte un concetto dell'area A serve a un concetto dell'area B.
    var traAree = {};
    var parentiTraAree = {};
    dati.concetti.forEach(function (c) {
      c.prerequisiti.forEach(function (p) {
        var q = indice.perId[p.id];
        if (!q || q.area === c.area) return;
        var k = q.area + '>' + c.area;
        traAree[k] = (traAree[k] || 0) + 1;
      });
    });
    Object.keys(indice.parenti).forEach(function (id) {
      indice.parenti[id].forEach(function (altro) {
        var a = indice.perId[id].area;
        var b = indice.perId[altro].area;
        if (a === b || id > altro) return;
        var k = a < b ? a + '~' + b : b + '~' + a;
        parentiTraAree[k] = (parentiTraAree[k] || 0) + 1;
      });
    });
    function ordina(mappa, sep) {
      return Object.keys(mappa).map(function (k) {
        var x = k.split(sep);
        return { da: x[0], a: x[1], n: mappa[k] };
      }).sort(function (x, y) { return y.n - x.n || (x.da + x.a).localeCompare(y.da + y.a); });
    }

    // Catene più lunghe: per i concetti finali (senza successori), la catena di
    // prerequisiti più lunga che ci arriva.
    var catene = [];
    if (senzaCicli) {
      var p = profondita(dati, indice);
      catene = dati.concetti
        .filter(function (c) { return indice.successori[c.id].length === 0; })
        .map(function (c) { return p.catena(c.id); })
        .sort(function (x, y) { return y.length - x.length || x[x.length - 1].localeCompare(y[y.length - 1]); });
    }

    var piuUsati = dati.concetti
      .map(function (c) { return { id: c.id, n: indice.successori[c.id].length }; })
      .sort(function (x, y) { return y.n - x.n || x.id.localeCompare(y.id); });

    return {
      totali: {
        concetti: dati.concetti.length,
        aree: dati.aree.length,
        argomenti: dati.argomenti.length,
        prerequisiti: nPrerequisiti,
        parenti: nParenti,
        grandiDomande: dati.grandiDomande.length
      },
      perArea: perArea,
      perLivello: perLivello,
      perTipo: perTipo,
      legamiTraAree: ordina(traAree, '>'),
      parentiTraAree: ordina(parentiTraAree, '~'),
      catenePiuLunghe: catene,
      piuUsati: piuUsati
    };
  }

  return {
    esegui: esegui,
    costruisciIndice: costruisciIndice,
    MAX_VICINI: MAX_VICINI
  };
});
