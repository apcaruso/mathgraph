/* Combinatoria e teoria dei grafi */
Mappa.registra([
  // Contare
  {
    id: 'principio-di-moltiplicazione', titolo: 'Il principio di moltiplicazione', tipo: 'concetto', area: 'combinatoria', argomento: 'contare', livello: 1,
    sinonimi: ['principio fondamentale del conteggio', 'regola del prodotto', 'contare le scelte', 'combinazioni di scelte'],
    domanda: "Come si contano le possibilità senza elencarle tutte?",
    esempio: "Hai 3 magliette e 4 pantaloni: puoi vestirti in 12 modi diversi. Non serve provarli tutti.",
    idea: "Una scelta in 3 modi seguita da una scelta in 4 modi dà 12 possibilità.\nIn generale, il numero di possibilità si ottiene moltiplicando i modi di ogni scelta.\nVale per qualsiasi numero di scelte successive.\nSe invece le scelte sono alternative, i modi si sommano.\nQuasi tutta la combinatoria parte da qui.",
    perche_fa_pensare: "Il numero delle possibilità esplode in fretta. Pochi caratteri bastano per milioni di combinazioni diverse.",
    dove_si_usa: "Nelle password, nelle targhe, nei menù, nei codici a barre.",
    prerequisiti: [
      { id: 'moltiplicazione-divisione', perche: "Il numero di possibilità è un prodotto." }
    ],
    parenti: []
  },
  {
    id: 'permutazioni', titolo: 'Permutazioni e fattoriale', tipo: 'concetto', area: 'combinatoria', argomento: 'contare', livello: 1,
    sinonimi: ['permutazioni', 'fattoriale', 'anagrammi', 'ordinamenti', 'n fattoriale'],
    domanda: "In quanti modi si possono mettere in fila delle persone?",
    esempio: "Quattro amici possono sedersi su quattro sedie in fila in 24 modi diversi: 4 per 3 per 2 per 1.",
    idea: "Una permutazione è un modo di mettere in fila un gruppo di oggetti.\nCon n oggetti diversi, il primo posto si sceglie in n modi.\nIl secondo in n meno 1 modi, e così via.\nIl totale si chiama fattoriale di n, e si scrive n seguito da un punto esclamativo.\nIl fattoriale cresce velocissimo: dieci oggetti si ordinano in più di tre milioni di modi.\nPer convenzione, il fattoriale di zero vale 1.",
    perche_fa_pensare: "Un mazzo di 52 carte ben mescolato è quasi certamente in un ordine mai uscito prima nella storia. Le possibilità sono più delle stelle conosciute.",
    dove_si_usa: "Negli anagrammi, nei calendari, nell'organizzazione dei turni, nella crittografia.",
    formula: {
      latex: 'n! = n \\cdot (n-1) \\cdots 2 \\cdot 1',
      come_si_legge: "n fattoriale uguale n per n meno uno, e così via fino a due per uno.",
      a_parole: "Il fattoriale di n è il prodotto di tutti i numeri da 1 a n."
    },
    prerequisiti: [
      { id: 'principio-di-moltiplicazione', perche: "Ogni posto si sceglie dopo il precedente, e i modi si moltiplicano." }
    ],
    parenti: []
  },
  {
    id: 'combinazioni', titolo: 'Combinazioni e coefficienti binomiali', tipo: 'concetto', area: 'combinatoria', argomento: 'contare', livello: 2,
    sinonimi: ['combinazioni', 'coefficiente binomiale', 'n su k', 'scegliere k oggetti', 'gruppi senza ordine'],
    domanda: "In quanti modi si sceglie un gruppo, se l'ordine non conta?",
    esempio: "Da una classe di 20 persone si scelgono 3 rappresentanti. Le terne possibili sono 1140.",
    idea: "Una combinazione è una scelta di alcuni oggetti in cui l'ordine non conta.\nIl numero di modi per scegliere k oggetti tra n si chiama coefficiente binomiale.\nSi legge «n su k».\nSi calcola contando le file ordinate e dividendo per i modi di riordinare il gruppo scelto.\nScegliere k oggetti equivale a scartarne n meno k.\nPer questo n su k è uguale a n su n meno k.",
    perche_fa_pensare: "La probabilità di vincere al superenalotto si calcola con le combinazioni. Il numero è così grande che l'intuizione non lo afferra.",
    dove_si_usa: "Nelle lotterie, nei sondaggi, in genetica, nella scelta di squadre.",
    formula: {
      latex: '\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}',
      come_si_legge: "n su k uguale n fattoriale, fratto k fattoriale per n meno k fattoriale.",
      a_parole: "Si contano le file ordinate. Poi si divide per i modi di riordinare chi è dentro e chi è fuori dal gruppo."
    },
    prerequisiti: [
      { id: 'permutazioni', perche: "Si parte dalle file ordinate." },
      { id: 'frazioni', perche: "Si divide per i modi di riordinare." }
    ],
    parenti: []
  },
  {
    id: 'triangolo-di-tartaglia', titolo: 'Triangolo di Tartaglia', tipo: 'concetto', area: 'combinatoria', argomento: 'contare', livello: 2,
    sinonimi: ['triangolo di Pascal', 'Tartaglia', 'coefficienti binomiali', 'triangolo aritmetico'],
    domanda: "Quale schema nasconde tutti i coefficienti binomiali?",
    esempio: "Scrivi 1 in cima. Ogni numero sotto è la somma dei due numeri sopra di lui. Ottieni 1; 1 1; 1 2 1; 1 3 3 1…",
    idea: "Il triangolo di Tartaglia è una tabella di numeri a forma di triangolo.\nOgni numero è la somma dei due numeri che stanno sopra di lui.\nLe righe contengono i coefficienti binomiali: il numero al posto k della riga n è «n su k».\nLa somma di ogni riga è una potenza di 2.\nNel triangolo si nascondono molti altri schemi, compresi i numeri di Fibonacci.",
    perche_fa_pensare: "Lo stesso triangolo fu studiato in Cina, in Persia, in Italia e in Francia, spesso in modo indipendente. Ogni paese lo chiama con un nome diverso.",
    dove_si_usa: "Nel calcolo delle probabilità, nello sviluppo delle potenze, nei percorsi su una griglia.",
    prerequisiti: [
      { id: 'combinazioni', perche: "Le sue righe contengono i coefficienti binomiali." }
    ],
    parenti: []
  },
  {
    id: 'binomio-di-newton', titolo: 'Binomio di Newton', tipo: 'teorema', area: 'combinatoria', argomento: 'contare', livello: 2,
    sinonimi: ['binomio di Newton', 'potenza di un binomio', 'sviluppo del binomio', 'formula del binomio'],
    domanda: "Come si calcola una somma elevata a una potenza qualsiasi?",
    esempio: "Prova a sviluppare a più b alla terza. Ottieni quattro termini: a cubo, 3 a quadro b, 3 a b quadro, b cubo. I numeri 1, 3, 3, 1 vengono dal triangolo di Tartaglia.",
    idea: "Il binomio di Newton dice come sviluppare una somma di due termini elevata alla n.\nIl risultato è una somma di termini, uno per ogni modo di distribuire gli esponenti.\nI coefficienti sono i coefficienti binomiali «n su k».\nInfatti ogni termine conta in quanti modi si sceglie il secondo addendo k volte su n.\nNewton lo estese anche a esponenti non interi, ottenendo somme infinite.",
    perche_fa_pensare: "Un'identità algebrica è, in realtà, un conteggio. Algebra e combinatoria parlano della stessa cosa.",
    dove_si_usa: "In probabilità, nelle approssimazioni, in finanza.",
    formula: {
      latex: '(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^{k}',
      come_si_legge: "a più b, alla n, è uguale a una somma, per k da zero a n. Ogni termine è: n su k, per a alla n meno k, per b alla k.",
      a_parole: "La potenza di una somma è una somma di termini, pesati dai coefficienti binomiali."
    },
    prerequisiti: [
      { id: 'combinazioni', perche: "I coefficienti sono coefficienti binomiali." },
      { id: 'prodotti-notevoli', perche: "Generalizza il quadrato e il cubo di un binomio." }
    ],
    parenti: [
      { id: 'triangolo-di-tartaglia', perche: "I coefficienti si leggono sulle righe del triangolo di Tartaglia." }
    ]
  },

  // Tecniche combinatorie
  {
    id: 'principio-dei-cassetti', titolo: 'Principio dei cassetti', tipo: 'teorema', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 1,
    sinonimi: ['principio della piccionaia', 'pigeonhole', 'cassetti', 'Dirichlet'],
    domanda: "Si può essere certi di qualcosa senza contare?",
    esempio: "In una città di un milione di abitanti, almeno due persone hanno esattamente lo stesso numero di capelli. Nessuno ne ha più di qualche centinaio di migliaia.",
    idea: "Se metti più oggetti che cassetti, almeno un cassetto contiene due oggetti.\nÈ un'affermazione semplice, ma potentissima.\nNon dice quale cassetto, né quali oggetti: garantisce solo che esistono.\nSi usa per dimostrare che qualcosa deve esistere, senza doverlo trovare.\nUna versione più forte dice quanti oggetti, come minimo, finiscono nel cassetto più pieno.",
    perche_fa_pensare: "Si può sapere con certezza che una cosa esiste senza poterla indicare. È una forma di conoscenza curiosa.",
    dove_si_usa: "In informatica, per capire perché due file diversi possono avere la stessa impronta digitale.",
    prerequisiti: [
      { id: 'numeri-naturali', perche: "Confronta due numeri: gli oggetti e i cassetti." }
    ],
    parenti: []
  },
  {
    id: 'inclusione-esclusione', titolo: 'Principio di inclusione-esclusione', tipo: 'teorema', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 2,
    sinonimi: ['inclusione esclusione', 'contare le unioni', 'principio di inclusione-esclusione'],
    domanda: "Come si contano gli elementi di gruppi che si sovrappongono?",
    esempio: "In una classe 15 persone studiano inglese, 10 francese e 4 entrambe. Chi studia almeno una lingua? 15 più 10 meno 4: 21 persone.",
    idea: "Per contare gli elementi di un'unione non basta sommare: chi sta in più gruppi verrebbe contato due volte.\nCon due insiemi si sommano gli elementi e si toglie l'intersezione.\nCon tre insiemi si aggiungono di nuovo gli elementi comuni a tutti e tre.\nIn generale si alternano somme e sottrazioni.\nÈ un modo sistematico di correggere i doppi conteggi.",
    perche_fa_pensare: "Contare bene vuol dire non contare due volte. Molti errori nei sondaggi e nelle statistiche nascono da qui.",
    dove_si_usa: "Nei sondaggi, nel calcolo delle probabilità, nell'analisi dei database.",
    prerequisiti: [
      { id: 'operazioni-insiemi', perche: "Riguarda unioni e intersezioni di insiemi." },
      { id: 'combinazioni', perche: "Nel caso generale si contano le intersezioni con le combinazioni." }
    ],
    parenti: []
  },
  {
    id: 'successione-di-fibonacci', titolo: 'Successione di Fibonacci', tipo: 'concetto', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 2,
    sinonimi: ['Fibonacci', 'numeri di Fibonacci', '1 1 2 3 5 8', 'conigli di Fibonacci'],
    domanda: "Quale successione nasce sommando ogni volta i due numeri precedenti?",
    esempio: "1, 1, 2, 3, 5, 8, 13, 21: ogni numero è la somma dei due prima. Fibonacci la usò nel 1202 per un problema sui conigli.",
    idea: "La successione di Fibonacci parte da 1 e 1.\nOgni termine successivo è la somma dei due precedenti.\nÈ un esempio di [[definizione-ricorsiva|definizione ricorsiva]].\nI rapporti tra termini consecutivi si avvicinano alla [[sezione-aurea|sezione aurea]].\nCompare in alcune strutture delle piante, anche se spesso la sua presenza in natura viene esagerata.",
    perche_fa_pensare: "Una regola semplicissima produce numeri pieni di proprietà sorprendenti. La complessità può nascere da pochissimo.",
    dove_si_usa: "In informatica, in alcuni algoritmi di ricerca, nello studio della crescita delle piante.",
    prerequisiti: [
      { id: 'definizione-ricorsiva', perche: "È definita in modo ricorsivo." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-generatrici', titolo: 'Funzioni generatrici', tipo: 'concetto', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 3,
    sinonimi: ['funzione generatrice', 'serie formali', 'generating function'],
    domanda: "Si può racchiudere una successione infinita in una sola funzione?",
    esempio: "In quanti modi puoi pagare 1 euro con monete da 10, 20 e 50 centesimi? Si moltiplicano tre serie, e la risposta si legge in un coefficiente.",
    idea: "Una funzione generatrice codifica una successione di numeri come coefficienti di una [[serie-di-potenze|serie di potenze]].\nIl termine n-esimo della successione diventa il numero davanti a x alla n.\nLe operazioni sulle funzioni corrispondono a operazioni sui conteggi.\nAd esempio, moltiplicare due funzioni generatrici combina due scelte indipendenti.\nCosì problemi di conteggio difficili diventano calcoli algebrici.",
    perche_fa_pensare: "Un problema sui numeri interi si risolve con strumenti dell'analisi. I confini tra le aree della matematica sono porosi.",
    dove_si_usa: "In combinatoria, in probabilità, nell'analisi degli algoritmi.",
    prerequisiti: [
      { id: 'serie-di-potenze', perche: "Una funzione generatrice è una serie di potenze." },
      { id: 'combinazioni', perche: "Serve a risolvere problemi di conteggio." }
    ],
    parenti: []
  },
  {
    id: 'partizioni-di-interi', titolo: 'Partizioni di un numero', tipo: 'concetto', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 3,
    sinonimi: ['partizioni', 'partizione di un numero', 'Ramanujan', 'modi di scrivere un numero come somma'],
    domanda: "In quanti modi si può scrivere un numero come somma di altri?",
    esempio: "Il 4 si scrive come somma in cinque modi diversi. Ad esempio come 3 più 1, come 2 più 2, o come 4 da solo.",
    idea: "Una partizione di un numero è un modo di scriverlo come somma di numeri positivi, senza badare all'ordine.\nIl numero di partizioni cresce molto in fretta: 100 ne ha quasi duecento milioni.\nNon esiste una formula semplice e chiusa per contarle.\nHardy e Ramanujan trovarono però una formula approssimata sorprendentemente precisa.\nLe funzioni generatrici sono lo strumento principale per studiarle.",
    perche_fa_pensare: "Un problema che sembra un gioco nasconde una matematica profondissima. Ramanujan, quasi autodidatta, vi scoprì regolarità che nessuno sospettava.",
    dove_si_usa: "In teoria dei numeri, in fisica statistica, nella teoria delle rappresentazioni dei gruppi.",
    prerequisiti: [
      { id: 'funzioni-generatrici', perche: "Le partizioni si contano con le funzioni generatrici." }
    ],
    parenti: []
  },
  {
    id: 'disegni-combinatori', titolo: 'Quadrati latini e disegni combinatori', tipo: 'concetto', area: 'combinatoria', argomento: 'tecniche-combinatorie', livello: 3,
    sinonimi: ['quadrati latini', 'disegni a blocchi', 'sudoku', 'design combinatori', 'quadrato latino'],
    domanda: "Come si organizza un torneo in cui tutti incontrano tutti in modo equilibrato?",
    esempio: "Un sudoku completato contiene un quadrato latino: ogni cifra compare una sola volta in ogni riga e in ogni colonna.",
    idea: "Un quadrato latino è una tabella in cui ogni simbolo compare una volta sola per riga e per colonna.\nI disegni combinatori sono schemi in cui gruppi di oggetti si incontrano in modo bilanciato.\nAd esempio, ogni coppia di giocatori si ritrova nella stessa squadra lo stesso numero di volte.\nNon sempre esistono, e capire quali schemi sono possibili è spesso molto difficile.\nSono legati alle geometrie finite e ai codici.",
    perche_fa_pensare: "Eulero pensò che un certo schema con 36 ufficiali fosse impossibile, e aveva ragione. Sbagliò però nel generalizzare: l'errore fu scoperto solo nel 1959.",
    dove_si_usa: "Negli esperimenti agricoli e medici, nei tornei, nei codici che correggono gli errori.",
    prerequisiti: [
      { id: 'combinazioni', perche: "Si contano gruppi e coppie di oggetti." }
    ],
    parenti: [
      { id: 'esperimenti-randomizzati', perche: "I quadrati latini servono a progettare esperimenti equilibrati." }
    ]
  },

  // Grafi
  {
    id: 'grafo', titolo: 'Grafo', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 1,
    sinonimi: ['grafi', 'nodi', 'archi', 'vertici', 'rete', 'collegamenti'],
    domanda: "Cosa si capisce guardando solo i collegamenti?",
    esempio: "La mappa della metropolitana non rispetta le distanze vere. Mostra solo le stazioni e quali sono collegate: è un grafo.",
    idea: "Un grafo è fatto di punti, chiamati nodi, e di linee che li collegano, chiamate archi.\nConta solo chi è collegato a chi, non la forma del disegno.\nGli archi possono avere una direzione, come le strade a senso unico.\nPossono anche avere un peso, come una distanza o un costo.\nCon i grafi si descrivono reti di ogni tipo: strade, amicizie, pagine web.",
    perche_fa_pensare: "Togliere tutti i dettagli tranne i collegamenti sembra impoverire. Invece fa vedere la struttura nascosta. Anche questa mappa della matematica è un grafo.",
    dove_si_usa: "Nei navigatori, nei social network, nei motori di ricerca, nella logistica.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'ponti-di-konigsberg', titolo: 'I ponti di Königsberg', tipo: 'teorema', area: 'combinatoria', argomento: 'grafi', livello: 1,
    sinonimi: ['Königsberg', 'Eulero', 'cammino euleriano', 'sette ponti', 'disegnare senza staccare la penna'],
    domanda: "Si può fare una passeggiata che attraversi ogni ponte una sola volta?",
    esempio: "La città di Königsberg aveva sette ponti. Gli abitanti si chiedevano se si potesse attraversarli tutti, una volta sola ciascuno.",
    idea: "Nel 1736 Eulero dimostrò che la passeggiata di Königsberg è impossibile.\nTrasformò le zone della città in nodi e i ponti in archi.\nUn percorso che usa ogni arco una volta sola esiste solo se pochi nodi hanno un numero dispari di archi.\nPiù precisamente, al massimo due.\nÈ considerato l'atto di nascita della teoria dei grafi.",
    perche_fa_pensare: "La soluzione non dipende dalle misure né dalla forma della città. Conta solo la struttura dei collegamenti: un modo nuovo di guardare il mondo.",
    dove_si_usa: "Nei percorsi degli spazzaneve e dei postini, nei circuiti, nel disegno di figure senza staccare la penna.",
    prerequisiti: [
      { id: 'grafo', perche: "Eulero trasformò la città in un grafo." }
    ],
    parenti: []
  },
  {
    id: 'alberi', titolo: 'Alberi', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 2,
    sinonimi: ['albero', 'grafi ad albero', 'albero genealogico', 'struttura gerarchica', 'diagramma ad albero'],
    domanda: "Qual è la rete più semplice che collega tutto?",
    esempio: "Un albero genealogico, le cartelle di un computer, l'organigramma di un'azienda: sono tutti alberi.",
    idea: "Un albero è un grafo tutto collegato e senza cicli, cioè senza percorsi chiusi.\nTra due nodi qualsiasi c'è uno e un solo percorso.\nUn albero con n nodi ha sempre n meno 1 archi.\nTogliendo un arco si spezza in due, aggiungendone uno si crea un ciclo.\nGli alberi descrivono gerarchie, ramificazioni e scelte successive.",
    perche_fa_pensare: "La struttura ad albero è ovunque: nelle lingue, nell'evoluzione, nei fiumi. Forse è il modo più economico di organizzare.",
    dove_si_usa: "Nelle cartelle dei computer, nelle reti elettriche, negli algoritmi di ricerca, nella biologia evolutiva.",
    prerequisiti: [
      { id: 'grafo', perche: "Un albero è un tipo speciale di grafo." }
    ],
    parenti: []
  },
  {
    id: 'grafi-planari', titolo: 'Grafi planari', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 2,
    sinonimi: ['grafo planare', 'tre case tre servizi', 'disegnare senza incroci', 'planarità'],
    domanda: "Si può disegnare una rete senza che le linee si incrocino?",
    esempio: "Tre case devono essere collegate ad acqua, luce e gas senza che i tubi si incrocino. Sul piano è impossibile.",
    idea: "Un grafo è planare se si può disegnare sul piano senza incroci tra gli archi.\nNon tutti lo sono: il problema delle tre case e dei tre servizi non ha soluzione.\nPer i grafi planari vale la [[formula-di-eulero-poliedri|formula di Eulero]]: nodi meno archi più regioni fa 2.\nNe segue che un grafo planare non può avere troppi archi.\nEsistono algoritmi rapidi per decidere se un grafo è planare.",
    perche_fa_pensare: "Su una ciambella, il problema delle tre case si risolve. Ciò che è possibile dipende dalla forma della superficie.",
    dove_si_usa: "Nel progetto dei circuiti stampati, delle reti stradali, delle mappe della metropolitana.",
    prerequisiti: [
      { id: 'grafo', perche: "La planarità è una proprietà dei grafi." },
      { id: 'formula-di-eulero-poliedri', perche: "Per i grafi planari vale la formula di Eulero." }
    ],
    parenti: []
  },
  {
    id: 'colorazione-di-grafi', titolo: 'Colorare un grafo', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 2,
    sinonimi: ['colorare un grafo', 'numero cromatico', 'colorazione', 'conflitti'],
    domanda: "Quanti colori servono perché due vicini non abbiano mai lo stesso colore?",
    esempio: "Un'università organizza gli esami: due esami con studenti in comune non possono cadere nello stesso giorno. I giorni sono i colori.",
    idea: "Colorare un grafo vuol dire dare un colore a ogni nodo, con nodi collegati sempre di colore diverso.\nIl numero minimo di colori necessari si chiama numero cromatico.\nMolti problemi di conflitti diventano problemi di colorazione.\nTrovare il numero cromatico di un grafo grande è, in generale, molto difficile.\nÈ uno dei problemi [[np-completezza|NP-completi]] più noti.",
    perche_fa_pensare: "Un problema semplice da enunciare può essere difficilissimo da risolvere. È una lezione che la teoria dei grafi ripete spesso.",
    dove_si_usa: "Negli orari scolastici, nell'assegnazione delle frequenze radio, nella compilazione dei programmi.",
    prerequisiti: [
      { id: 'grafo', perche: "Si colorano i nodi di un grafo." }
    ],
    parenti: []
  },
  {
    id: 'teorema-dei-quattro-colori', titolo: 'Teorema dei quattro colori', tipo: 'teorema', area: 'combinatoria', argomento: 'grafi', livello: 2,
    sinonimi: ['quattro colori', 'colorare le mappe', 'Appel e Haken', 'mappe'],
    domanda: "Bastano quattro colori per colorare qualsiasi mappa?",
    esempio: "Su una carta politica i paesi confinanti hanno colori diversi. Per qualsiasi carta, quattro colori bastano sempre.",
    idea: "Il teorema dice che ogni mappa piana si colora con quattro colori.\nDue regioni confinanti devono avere colori diversi.\nIn termini di grafi: ogni grafo planare ha numero cromatico al massimo 4.\nLa domanda nacque nel 1852 e resistette per più di un secolo.\nNel 1976 Appel e Haken la risolsero con l'aiuto di un computer.\nFu la prima grande dimostrazione che nessuno poteva controllare a mano per intero.",
    perche_fa_pensare: "Una dimostrazione che nessuno può leggere tutta è davvero una dimostrazione? Il dibattito ha cambiato l'idea stessa di prova.",
    dove_si_usa: "In cartografia e, soprattutto, come caso di studio sulle dimostrazioni al computer.",
    prerequisiti: [
      { id: 'colorazione-di-grafi', perche: "È un risultato sulla colorazione dei grafi." },
      { id: 'grafi-planari', perche: "Riguarda i grafi planari, cioè le mappe." }
    ],
    parenti: []
  },
  {
    id: 'cammino-minimo', titolo: 'Il percorso più breve', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 2,
    sinonimi: ['percorso più breve', 'algoritmo di Dijkstra', 'Dijkstra', 'shortest path', 'navigatore'],
    domanda: "Come trova il navigatore la strada più veloce?",
    esempio: "Il navigatore vede la rete stradale come un grafo, con i tempi di percorrenza sugli archi. Poi cerca il percorso con il tempo totale più basso.",
    idea: "Il problema del cammino minimo cerca il percorso più breve tra due nodi di un grafo.\nOgni arco ha un peso, che può essere una distanza, un tempo o un costo.\nL'algoritmo di Dijkstra, con pesi non negativi, lo risolve esplorando i nodi a partire dal più vicino.\nA ogni passo fissa la distanza definitiva di un nodo.\nFunziona in tempi brevi anche su reti con milioni di nodi.",
    perche_fa_pensare: "Trovare la strada migliore tra innumerevoli possibilità sembra impossibile. Un'idea ordinata ci riesce in un attimo.",
    dove_si_usa: "Nei navigatori, nell'instradamento dei dati su internet, nella logistica.",
    prerequisiti: [
      { id: 'grafo', perche: "Il percorso si cerca su un grafo." },
      { id: 'algoritmo', perche: "Si risolve con un algoritmo." }
    ],
    parenti: []
  },
  {
    id: 'reti-complesse', titolo: 'Reti complesse e mondo piccolo', tipo: 'concetto', area: 'combinatoria', argomento: 'grafi', livello: 3,
    sinonimi: ['reti', 'mondo piccolo', 'sei gradi di separazione', 'reti sociali', 'hub', 'reti a invarianza di scala'],
    domanda: "Perché bastano pochi passaggi per collegare due persone qualsiasi?",
    esempio: "Si dice che due persone qualsiasi siano collegate da una catena di circa sei conoscenze. Negli studi sui social network le catene risultano spesso ancora più corte.",
    idea: "Le reti complesse sono grafi enormi, nati in modo spontaneo, come internet o le reti di amicizie.\nMolte hanno la proprietà del «mondo piccolo»: le distanze tra i nodi sono brevi.\nSpesso pochi nodi hanno moltissimi collegamenti: si chiamano hub.\nQuesta struttura rende la rete resistente ai guasti casuali, ma fragile agli attacchi agli hub.\nSi studiano con statistica, probabilità e teoria dei grafi insieme.",
    perche_fa_pensare: "Reti diversissime, dalle proteine agli aeroporti, mostrano la stessa architettura. Forse esistono leggi comuni a tutti i sistemi collegati.",
    dove_si_usa: "Nello studio delle epidemie, dei social network, delle reti elettriche e dei trasporti.",
    prerequisiti: [
      { id: 'cammino-minimo', perche: "La distanza tra due nodi si misura con il cammino minimo." }
    ],
    parenti: [
      { id: 'grafi-casuali', perche: "I grafi casuali sono il modello più semplice con cui confrontare le reti reali." }
    ]
  },

  // Ordine nel disordine
  {
    id: 'teoria-di-ramsey', titolo: 'Teoria di Ramsey', tipo: 'teorema', area: 'combinatoria', argomento: 'ordine-nel-disordine', livello: 3,
    sinonimi: ['Ramsey', 'numeri di Ramsey', 'teorema dell\'amicizia', 'ordine nel disordine'],
    domanda: "Il disordine completo è impossibile?",
    esempio: "Prendi sei persone qualsiasi. Ce ne sono sempre tre che si conoscono tutte, oppure tre che non si conoscono affatto.",
    idea: "La teoria di Ramsey dice che in una struttura abbastanza grande compare sempre un po' di ordine.\nL'esempio classico riguarda gruppi di persone che si conoscono o no.\nCon sei persone c'è sempre un trio di amici o un trio di estranei; con cinque, no.\nI numeri di Ramsey dicono quanto deve essere grande un gruppo per garantire un certo ordine.\nSono difficilissimi da calcolare: già per gruppi di cinque il valore esatto è sconosciuto.",
    perche_fa_pensare: "Si racconta che Erdős considerasse alcuni numeri di Ramsey fuori dalla portata di tutti i computer del mondo. L'ordine è garantito, ma trovarlo è un'altra cosa.",
    dove_si_usa: "In combinatoria, in informatica teorica, nella teoria delle reti.",
    prerequisiti: [
      { id: 'colorazione-di-grafi', perche: "Si colorano gli archi di un grafo: amici o estranei." },
      { id: 'principio-dei-cassetti', perche: "Le dimostrazioni usano il principio dei cassetti." }
    ],
    parenti: []
  },
  {
    id: 'grafi-casuali', titolo: 'Grafi casuali', tipo: 'concetto', area: 'combinatoria', argomento: 'ordine-nel-disordine', livello: 3,
    sinonimi: ['grafo casuale', 'Erdős-Rényi', 'random graph', 'transizione di fase', 'componente gigante'],
    domanda: "Che aspetto ha una rete costruita tirando a sorte i collegamenti?",
    esempio: "Prendi mille persone e collega ogni coppia lanciando una moneta truccata. Oltre una certa soglia, quasi tutti finiscono in un unico grande gruppo.",
    idea: "Un grafo casuale si costruisce decidendo a caso, per ogni coppia di nodi, se collegarli.\nPaul Erdős e Alfréd Rényi lo studiarono alla fine degli anni Cinquanta.\nAl crescere della probabilità di collegamento, la struttura cambia all'improvviso.\nOltre una soglia precisa compare di colpo una componente gigante, che contiene gran parte dei nodi.\nÈ un esempio di transizione di fase, come l'acqua che diventa ghiaccio.",
    perche_fa_pensare: "Il caso, su grandi numeri, produce strutture prevedibili. E cambiamenti piccoli possono avere effetti improvvisi.",
    dove_si_usa: "Nello studio delle epidemie, della robustezza delle reti, della fisica dei materiali.",
    prerequisiti: [
      { id: 'grafo', perche: "Si costruisce un grafo." },
      { id: 'regole-della-probabilita', perche: "I collegamenti si decidono con regole di probabilità." }
    ],
    parenti: []
  },
  {
    id: 'metodo-probabilistico', titolo: 'Metodo probabilistico', tipo: 'concetto', area: 'combinatoria', argomento: 'ordine-nel-disordine', livello: 4,
    sinonimi: ['metodo probabilistico', 'Erdős', 'dimostrazioni con il caso', 'esistenza probabilistica'],
    domanda: "Si può dimostrare che una cosa esiste mostrando che è probabile?",
    esempio: "Vuoi dimostrare che esiste una rete con certe proprietà, e la costruisci a caso. Se la probabilità che le abbia è maggiore di zero, una rete così esiste.",
    idea: "Il metodo probabilistico dimostra l'esistenza di oggetti usando la probabilità.\nSi costruisce un oggetto a caso e si calcola la probabilità che abbia la proprietà voluta.\nSe è maggiore di zero, almeno un oggetto con quella proprietà deve esistere.\nPaul Erdős lo usò per stimare i numeri di Ramsey.\nSpesso dimostra che l'oggetto esiste senza dire come trovarlo.",
    perche_fa_pensare: "Il caso diventa uno strumento di certezza. È uno dei modi di ragionare più sorprendenti della matematica moderna.",
    dove_si_usa: "In combinatoria, nei codici, negli algoritmi che usano il caso.",
    prerequisiti: [
      { id: 'grafi-casuali', perche: "Gli oggetti si costruiscono a caso, come nei grafi casuali." },
      { id: 'teoria-di-ramsey', perche: "Il primo grande successo riguarda i numeri di Ramsey." },
      { id: 'valore-atteso', perche: "Molte dimostrazioni usano il valore atteso." }
    ],
    parenti: []
  }
]);
