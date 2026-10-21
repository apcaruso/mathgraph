# Mappa della matematica

Una pagina web statica che mostra tutta la matematica, dall'aritmetica alla ricerca,
come una rete di idee collegate. È pensata per persone con DSA e per chiunque non
abbia familiarità con la matematica.

Si apre con un doppio clic su `index.html`. Funziona anche offline: non usa server,
build o librerie da internet.

## File

| Percorso | Contenuto |
| --- | --- |
| `data/registro.js` | Definisce l'oggetto `Mappa`. Va caricato per primo. |
| `data/struttura.js` | Famiglie, aree, argomenti e grandi domande. |
| `data/concetti/<area>.js` | I concetti di un'area. Un file per area. |
| `controlli.js` | I controlli di coerenza, usati sia da `tools/verifica.js` sia dalla pagina `#/controllo`. |
| `tools/verifica.js` | Script Node per lo sviluppo. |

## Le pagine

Ogni vista ha il suo indirizzo, così il tasto Indietro funziona e i link si possono condividere.

| Indirizzo | Vista |
| --- | --- |
| `#/` | Home: la mappa delle aree |
| `#/aree` | Esplora: tutte le aree con i loro argomenti |
| `#/area/<id>` | Un'area e il grafo dei suoi argomenti |
| `#/argomento/<id>` | Un argomento e il grafo dei suoi concetti |
| `#/concetto/<id>` | Vista a fuoco e scheda del concetto |
| `#/percorso/<id>` | Come ci arrivo: tutta la catena di prerequisiti |
| `#/obiettivo`, `#/obiettivo/<id>` | Voglio arrivare a… |
| `#/domande`, `#/domanda/<id>/<passo>` | Grandi domande |
| `#/mappa`, `#/mappa/<id>` | Mappa completa, con un concetto selezionato |
| `#/cerca/<testo>` | Tutti i risultati di una ricerca |
| `#/controllo` | Gli stessi controlli di `tools/verifica.js` |

Librerie in `vendor/` (copiate da npm, nessun CDN): KaTeX 0.19.0 per le formule,
dagre 3.1.1 per i grafi a livelli, Atkinson Hyperlegible (Fontsource 5.3.0).
Ogni cartella contiene la sua licenza.

## Verificare i dati

```sh
node tools/verifica.js              # controlli e statistiche
node tools/verifica.js --dettagli   # tutte le voci di ogni controllo
node tools/verifica.js --breve      # solo i controlli
```

Lo script esce con codice 1 se trova errori. Gli avvisi non bloccano.

## Aggiungere un concetto

Apri il file della sua area in `data/concetti/` e aggiungi un oggetto alla lista:

```js
{ id: 'integrale-di-riemann', titolo: 'Integrale definito', tipo: 'concetto',
  area: 'analisi-reale', argomento: 'integrali', livello: 2,
  sinonimi: ['integrale', 'area sotto la curva'],
  domanda: 'Come si misura l\'area di una figura con i bordi curvi?',
  esempio: '…',
  idea: '…',
  perche_fa_pensare: '…',
  dove_si_usa: '…',                      // facoltativo
  formula: {                              // facoltativo
    latex: '\\int_a^b f(x)\\,dx',
    come_si_legge: 'integrale da a a b di effe di x in de x',
    a_parole: '…'
  },
  prerequisiti: [{ id: 'limite-di-successione', perche: '…' }],
  parenti: [{ id: 'metodo-di-esaustione', perche: '…' }],
  da_verificare: false }
```

Regole:

- `id` in minuscolo, parole separate da trattini, senza accenti. Compare negli
  indirizzi, per esempio `#/concetto/integrale-di-riemann`.
- `tipo` è `concetto`, `teorema` o `problema-aperto`.
- `livello`: 1 scuola media, 2 scuola superiore, 3 primi anni di università,
  4 università avanzata e ricerca.
- `argomento` deve appartenere alla stessa `area`, e il concetto va nel file di quell'area.
- Un collegamento si può scrivere come `'id'` o come `{ id, perche }`. La forma
  breve serve mentre si progetta la struttura; alla fine ogni legame ha la sua frase.
- `prerequisiti` vuol dire «per capire questo concetto serve quello». Non devono
  formare cicli. Scrivi solo i prerequisiti diretti: se A serve per B e B serve per C,
  non serve scrivere A tra i prerequisiti di C.
- `parenti` vale in tutte e due le direzioni: scrivilo su uno solo dei due concetti.
- `da_verificare: true` segnala una scheda con affermazioni incerte.

### Termini collegati nei testi

Un termine tecnico che è anche un concetto della mappa si scrive così:

```
La [[derivata]] misura quanto cambia una funzione.
Le [[derivata|derivate]] si calcolano con poche regole.
```

Nella pagina diventa un link, con la definizione breve al passaggio del mouse o al
focus. La definizione breve è il campo facoltativo `definizione`; se manca, si usa
la prima frase di `idea`. La sintesi vocale legge solo la parola.

### Regole di linguaggio controllate in automatico

`tools/verifica.js` segnala: «è facile», «ovviamente», «banalmente», «si vede subito»;
frasi di più di 20 parole; `idea` con più di 6 frasi; parole tutte maiuscole (salvo
sigle come RSA e numeri romani); segni di corsivo; simboli da formula (`=`, `^`, `√`…)
nel testo principale. Le formule vanno solo nel campo `formula`.

## Aggiungere un'area

1. In `data/struttura.js` aggiungi l'area in `aree` (con `id`, `titolo`, `breve`,
   `famiglia`, `domanda`, `descrizione`) e i suoi argomenti in `argomenti`.
2. Crea `data/concetti/<id-area>.js` con una chiamata `Mappa.registra([ … ])`.
3. Aggiungi il nuovo file tra gli script di `index.html`.
4. Esegui `node tools/verifica.js`.

## Grandi domande

Sono percorsi tra aree diverse, in `grandiDomande` dentro `data/struttura.js`.
Ogni passo è un concetto; dal secondo in poi ha una frase di raccordo:

```js
passi: ['numeri-naturali', { id: 'zero', raccordo: '…' }, …]
```

L'ordine dei passi non può contraddire i prerequisiti: un concetto non può venire
dopo un concetto che ne ha bisogno.
