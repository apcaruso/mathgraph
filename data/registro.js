/*
 * Registro della mappa.
 * Va caricato per primo: definisce l'oggetto globale Mappa, che raccoglie
 * la struttura (data/struttura.js) e i concetti (data/concetti/*.js).
 * Funziona sia nel browser (anche da file://) sia in Node (tools/verifica.js).
 */
(function (globale) {
  'use strict';

  var struttura = null;
  var concetti = [];

  // Nome del file che sta registrando: serve ai controlli per segnalare
  // un concetto finito nel file di un'altra area.
  function fileCorrente() {
    if (Mappa._fileCorrente) return Mappa._fileCorrente;
    if (typeof document !== 'undefined' && document.currentScript) {
      var src = document.currentScript.getAttribute('src') || '';
      return src.split('/').pop();
    }
    return '';
  }

  // Un collegamento si può scrivere come 'id' oppure come { id, perche }.
  function normalizzaLegame(l) {
    if (typeof l === 'string') return { id: l, perche: '' };
    return { id: l.id, perche: l.perche || '' };
  }

  function normalizzaPasso(p) {
    if (typeof p === 'string') return { id: p, raccordo: '' };
    return { id: p.id, raccordo: p.raccordo || '' };
  }

  var Mappa = {
    _fileCorrente: null,

    struttura: function (s) {
      struttura = s;
    },

    registra: function (lista) {
      var file = fileCorrente();
      lista.forEach(function (c) {
        c._file = file;
        concetti.push(c);
      });
    },

    // Restituisce una copia normalizzata di tutti i dati registrati.
    dati: function () {
      var s = struttura || { famiglie: [], aree: [], argomenti: [], grandiDomande: [] };
      return {
        famiglie: s.famiglie || [],
        aree: s.aree || [],
        argomenti: s.argomenti || [],
        grandiDomande: (s.grandiDomande || []).map(function (g) {
          var copia = Object.assign({}, g);
          copia.passi = (g.passi || []).map(normalizzaPasso);
          return copia;
        }),
        concetti: concetti.map(function (c) {
          var copia = Object.assign({}, c);
          copia.sinonimi = c.sinonimi || [];
          copia.prerequisiti = (c.prerequisiti || []).map(normalizzaLegame);
          copia.parenti = (c.parenti || []).map(normalizzaLegame);
          return copia;
        })
      };
    }
  };

  globale.Mappa = Mappa;
})(typeof window !== 'undefined' ? window : globalThis);
