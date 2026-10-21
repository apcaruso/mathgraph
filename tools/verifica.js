#!/usr/bin/env node
/*
 * Verifica della mappa (solo per lo sviluppo).
 *
 *   node tools/verifica.js              controlli + statistiche
 *   node tools/verifica.js --dettagli   mostra tutte le voci di ogni controllo
 *   node tools/verifica.js --breve      solo i controlli, senza statistiche
 *
 * Carica i file di data/ come farebbe il browser e usa gli stessi controlli
 * della pagina #/controllo (controlli.js). Esce con codice 1 se ci sono errori.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RADICE = path.join(__dirname, '..');
const DIR_CONCETTI = path.join(RADICE, 'data', 'concetti');
const argomenti = process.argv.slice(2);
const DETTAGLI = argomenti.includes('--dettagli');
const BREVE = argomenti.includes('--breve');
const VOCI_MASSIME = 12;

// --- Caricamento dei dati -----------------------------------------------------

const contesto = vm.createContext({ console });
function carica(relativo) {
  const file = path.join(RADICE, relativo);
  contesto.Mappa && (contesto.Mappa._fileCorrente = path.basename(file));
  vm.runInContext(fs.readFileSync(file, 'utf8'), contesto, { filename: relativo });
}

carica('data/registro.js');
carica('data/struttura.js');
const fileConcetti = fs.readdirSync(DIR_CONCETTI).filter((f) => f.endsWith('.js')).sort();
fileConcetti.forEach((f) => carica(path.join('data', 'concetti', f)));
contesto.Mappa._fileCorrente = null;

const Controlli = require(path.join(RADICE, 'controlli.js'));
const dati = contesto.Mappa.dati();
const esito = Controlli.esegui(dati);

// index.html deve caricare tutti i file di dati (se esiste già).
const fileIndex = path.join(RADICE, 'index.html');
if (fs.existsSync(fileIndex)) {
  const html = fs.readFileSync(fileIndex, 'utf8');
  const richiesti = ['data/registro.js', 'data/struttura.js', 'controlli.js']
    .concat(fileConcetti.map((f) => 'data/concetti/' + f));
  const kIndex = {
    id: 'index', nome: 'File caricati da index.html', livello: 'errore',
    voci: richiesti.filter((f) => !html.includes('"' + f + '"'))
      .map((f) => ({ testo: 'index.html non carica ' + f }))
  };
  esito.controlli.push(kIndex);
  esito.errori += kIndex.voci.length;
}

// --- Stampa -------------------------------------------------------------------

const nomeArea = {};
dati.aree.forEach((a) => { nomeArea[a.id] = a.titolo; });
const titolo = {};
dati.concetti.forEach((c) => { titolo[c.id] = c.titolo; });

const SIMBOLO = { errore: '✗', avviso: '!', info: 'i' };
const out = [];
const riga = (s = '') => out.push(s);
const intestazione = (s) => { riga(); riga(s); riga('─'.repeat(s.length)); };

intestazione('Controlli');
esito.controlli.forEach((k) => {
  const n = k.voci.length;
  const segno = n === 0 ? '✓' : SIMBOLO[k.livello];
  riga(`${segno} ${k.nome}: ${n === 0 ? 'ok' : n + (n === 1 ? ' voce' : ' voci')}`);
  if (n === 0) return;
  if (k.riassunto) riga('    ' + k.riassunto);
  const mostraTutto = DETTAGLI || (k.livello === 'errore');
  const daMostrare = k.id === 'testi' && !DETTAGLI ? [] : (mostraTutto ? k.voci : k.voci.slice(0, VOCI_MASSIME));
  daMostrare.forEach((v) => riga('    ' + v.testo));
  if (daMostrare.length < n && !(k.id === 'testi' && !DETTAGLI)) riga(`    … e altre ${n - daMostrare.length} (usa --dettagli)`);
});

if (!BREVE) {
  const s = esito.statistiche;

  intestazione('Totali');
  riga(`${s.totali.concetti} concetti in ${s.totali.aree} aree e ${s.totali.argomenti} argomenti`);
  riga(`${s.totali.prerequisiti} legami di prerequisito, ${s.totali.parenti} legami di parentela`);
  riga(`Tipi: ${s.perTipo['concetto']} concetti, ${s.perTipo['teorema']} teoremi, ${s.perTipo['problema-aperto']} problemi aperti`);
  riga(`Livelli: 1 → ${s.perLivello[0]} · 2 → ${s.perLivello[1]} · 3 → ${s.perLivello[2]} · 4 → ${s.perLivello[3]}`);

  intestazione('Concetti per area e livello');
  const larghezza = Math.max(...dati.aree.map((a) => a.titolo.length));
  riga(`${'Area'.padEnd(larghezza)}   L1  L2  L3  L4  totale`);
  dati.aree.forEach((a) => {
    const x = s.perArea[a.id];
    const celle = x.livelli.map((n) => String(n).padStart(3)).join(' ');
    riga(`${a.titolo.padEnd(larghezza)}  ${celle}  ${String(x.totale).padStart(5)}`);
  });

  intestazione('Le 10 catene di prerequisiti più lunghe');
  s.catenePiuLunghe.slice(0, 10).forEach((catena, i) => {
    riga(`${String(i + 1).padStart(2)}. ${titolo[catena[catena.length - 1]]} (${catena.length} passi)`);
    riga('    ' + catena.join(' → '));
  });

  intestazione('Legami più forti tra aree (prerequisiti: A serve per B)');
  s.legamiTraAree.slice(0, 15).forEach((l) => {
    riga(`${String(l.n).padStart(3)}  ${nomeArea[l.da]} → ${nomeArea[l.a]}`);
  });

  intestazione('Parentele più frequenti tra aree');
  s.parentiTraAree.slice(0, 10).forEach((l) => {
    riga(`${String(l.n).padStart(3)}  ${nomeArea[l.da]} — ${nomeArea[l.a]}`);
  });

  intestazione('Concetti su cui poggiano più concetti');
  riga(s.piuUsati.slice(0, 12).map((x) => `${x.id} (${x.n})`).join(', '));
}

riga();
riga(`Esito: ${esito.errori} errori, ${esito.avvisi} avvisi.`);
console.log(out.join('\n'));
process.exitCode = esito.errori > 0 ? 1 : 0;
