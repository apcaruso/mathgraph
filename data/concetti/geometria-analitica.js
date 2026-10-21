/* Geometria analitica */
Mappa.registra([
  // Coordinate
  {
    id: 'piano-cartesiano', titolo: 'Piano cartesiano', tipo: 'concetto', area: 'geometria-analitica', argomento: 'coordinate', livello: 1,
    sinonimi: ['coordinate', 'assi cartesiani', 'ascissa', 'ordinata', 'origine', 'Cartesio', 'sistema di riferimento'],
    domanda: "Come si trasforma un punto in una coppia di numeri?",
    esempio: "Nella battaglia navale dici «B5» per indicare una casella. Sul piano cartesiano dici «3, 2»: tre passi a destra, due in su.",
    idea: "Il piano cartesiano ha due rette perpendicolari, gli assi, che si incrociano in un punto detto origine.\nOgni punto è individuato da due numeri, le sue coordinate.\nLa prima dice di quanto spostarsi in orizzontale, la seconda in verticale.\nI numeri negativi indicano spostamenti a sinistra o in basso.\nCosì le figure geometriche diventano equazioni, e viceversa.",
    perche_fa_pensare: "Cartesio unì due mondi che sembravano separati, i numeri e le forme. Da allora la geometria si può fare anche con i calcoli.",
    dove_si_usa: "Nelle mappe, nei videogiochi, negli schermi, nei grafici di ogni tipo.",
    prerequisiti: [
      { id: 'numeri-interi-relativi', perche: "Le coordinate possono essere negative." },
      { id: 'rette-parallele-perpendicolari', perche: "Gli assi sono due rette perpendicolari." }
    ],
    parenti: []
  },
  {
    id: 'distanza-tra-punti', titolo: 'Distanza tra due punti', tipo: 'concetto', area: 'geometria-analitica', argomento: 'coordinate', livello: 2,
    sinonimi: ['distanza', 'distanza euclidea', 'lunghezza di un segmento', 'formula della distanza'],
    domanda: "Quanto sono lontani due punti di cui conosci le coordinate?",
    esempio: "Un drone parte dal punto 0, 0 e arriva al punto 3, 4. In linea retta ha percorso 5 unità.",
    idea: "La distanza tra due punti si calcola con il [[teorema-di-pitagora|teorema di Pitagora]].\nLe differenze delle coordinate sono i cateti di un triangolo rettangolo.\nIl segmento che unisce i due punti è l'ipotenusa.\nQuindi la distanza è la radice della somma dei quadrati delle differenze.\nCon più coordinate, la stessa formula funziona anche nello spazio.",
    perche_fa_pensare: "Esistono altri modi di misurare la distanza, come quello di un taxi che si muove solo lungo strade a griglia. Quale sia quello giusto dipende dal problema.",
    dove_si_usa: "Nei navigatori, nei videogiochi, nella classificazione automatica dei dati.",
    formula: {
      latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}',
      come_si_legge: "d uguale radice di: x due meno x uno, al quadrato, più y due meno y uno, al quadrato.",
      a_parole: "La distanza è la radice della somma dei quadrati delle differenze tra le coordinate."
    },
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "Si usano le coordinate dei due punti." },
      { id: 'teorema-di-pitagora', perche: "La formula nasce dal teorema di Pitagora." }
    ],
    parenti: []
  },
  {
    id: 'coordinate-polari', titolo: 'Coordinate polari', tipo: 'concetto', area: 'geometria-analitica', argomento: 'coordinate', livello: 2,
    sinonimi: ['coordinate polari', 'raggio e angolo', 'angolo polare', 'coordinate circolari'],
    domanda: "Si può indicare un punto con una distanza e una direzione?",
    esempio: "Un controllore di volo dice: aereo a 20 chilometri, direzione nord-est. Non usa due coordinate in croce, ma una distanza e un angolo.",
    idea: "Nelle coordinate polari un punto è dato dalla distanza dall'origine e da un angolo.\nL'angolo si misura a partire dall'asse orizzontale, in senso antiorario.\nSi passa alle coordinate cartesiane con seno e coseno.\nAlcune curve, come cerchi e spirali, hanno equazioni molto più semplici in coordinate polari.\nScegliere bene le coordinate semplifica i problemi.",
    perche_fa_pensare: "Le coordinate non sono il mondo, ma un modo di guardarlo. Lo stesso punto ha molti nomi diversi.",
    dove_si_usa: "Nei radar, nella navigazione, nella robotica, nel disegno di spirali e antenne.",
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "Sono un'alternativa alle coordinate cartesiane." },
      { id: 'seno-coseno', perche: "Si passa alle coordinate cartesiane con seno e coseno." }
    ],
    parenti: []
  },
  {
    id: 'trasformazioni-del-piano', titolo: 'Trasformazioni scritte con le coordinate', tipo: 'concetto', area: 'geometria-analitica', argomento: 'coordinate', livello: 2,
    sinonimi: ['trasformazioni geometriche', 'traslazione con le coordinate', 'rotazione con le coordinate', 'trasformazioni'],
    domanda: "Come si scrive con i numeri lo spostamento di una figura?",
    esempio: "In un programma di grafica sposti un'immagine di 10 pixel a destra. Per il computer vuol dire aggiungere 10 alla prima coordinata di ogni punto.",
    idea: "Con le coordinate, ogni trasformazione geometrica diventa una regola sui numeri.\nUna traslazione aggiunge numeri fissi alle coordinate.\nUna rotazione intorno all'origine mescola le coordinate con seno e coseno dell'angolo.\nUna simmetria rispetto a un asse cambia il segno di una coordinata.\nMolte di queste regole si scrivono in modo compatto con le [[matrice|matrici]].",
    perche_fa_pensare: "Ciò che l'occhio vede come un movimento, il computer lo vede come un calcolo. Sono due descrizioni della stessa cosa.",
    dove_si_usa: "Nella grafica al computer, nei videogiochi, nella robotica, nell'elaborazione delle immagini.",
    prerequisiti: [
      { id: 'isometrie', perche: "Si scrivono con le coordinate traslazioni, rotazioni e riflessioni." },
      { id: 'piano-cartesiano', perche: "Le trasformazioni agiscono sulle coordinate dei punti." }
    ],
    parenti: []
  },

  // Rette e luoghi geometrici
  {
    id: 'equazione-della-retta', titolo: 'Equazione della retta e pendenza', tipo: 'concetto', area: 'geometria-analitica', argomento: 'rette-e-luoghi', livello: 2,
    sinonimi: ['retta', 'pendenza', 'coefficiente angolare', 'funzione lineare', 'y uguale m x più q'],
    domanda: "Come si scrive una retta con un'equazione?",
    esempio: "Un abbonamento costa 20 euro al mese più 5 euro di attivazione. I punti con mesi e costo totale stanno tutti su una retta.",
    idea: "Una retta non verticale si scrive come y uguale m per x più q.\nIl numero m è la pendenza: dice di quanto sale la retta per ogni passo a destra.\nIl numero q dice dove la retta taglia l'asse verticale.\nDue rette sono parallele se hanno la stessa pendenza.\nUna pendenza positiva fa salire la retta, una negativa la fa scendere.",
    perche_fa_pensare: "La pendenza misura un tasso di cambiamento. Da questa idea, resa più fine, nascerà la derivata.",
    dove_si_usa: "Nelle tariffe, nelle previsioni lineari, nella pendenza delle strade e dei tetti.",
    formula: {
      latex: 'y = mx + q',
      come_si_legge: "y uguale m x più q.",
      a_parole: "Ogni punto della retta si ottiene moltiplicando x per la pendenza m e aggiungendo q."
    },
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "La retta si descrive con le coordinate dei suoi punti." },
      { id: 'equazioni-di-primo-grado', perche: "L'equazione della retta è di primo grado, in due variabili." }
    ],
    parenti: [
      { id: 'proporzionalita', perche: "Una retta che passa per l'origine descrive una proporzionalità diretta." }
    ]
  },
  {
    id: 'luogo-geometrico', titolo: 'Luogo geometrico', tipo: 'concetto', area: 'geometria-analitica', argomento: 'rette-e-luoghi', livello: 2,
    sinonimi: ['luogo', 'luoghi geometrici', 'insieme di punti', 'asse di un segmento'],
    domanda: "Come si descrive una figura con una proprietà dei suoi punti?",
    esempio: "Tutti i punti alla stessa distanza da due città formano una retta: l'asse del segmento che le unisce.",
    idea: "Un luogo geometrico è l'insieme di tutti i punti che hanno una certa proprietà.\nLa circonferenza, ad esempio, è il luogo dei punti a distanza fissa da un centro.\nCon le coordinate, la proprietà diventa un'equazione.\nI punti della figura sono esattamente le soluzioni dell'equazione.\nCosì risolvere equazioni e disegnare figure diventano la stessa attività.",
    perche_fa_pensare: "Una figura si può definire da come appare o da una regola che i suoi punti rispettano. La seconda strada è più potente.",
    dove_si_usa: "Nel disegno tecnico, nella localizzazione, nella progettazione di curve.",
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "Il luogo si descrive con le coordinate." },
      { id: 'equazione', perche: "La proprietà dei punti diventa un'equazione." }
    ],
    parenti: []
  },
  {
    id: 'circonferenza-analitica', titolo: 'Equazione della circonferenza', tipo: 'concetto', area: 'geometria-analitica', argomento: 'rette-e-luoghi', livello: 2,
    sinonimi: ['equazione della circonferenza', 'centro e raggio', 'circonferenza nel piano cartesiano'],
    domanda: "Che equazione ha un cerchio?",
    esempio: "Un'antenna copre tutti i punti entro 3 chilometri. Il bordo della zona coperta è una circonferenza con centro nell'antenna.",
    idea: "La circonferenza è il luogo dei punti a distanza fissa dal centro.\nScrivendo questa condizione con la formula della distanza, si ottiene la sua equazione.\nNell'equazione compaiono le coordinate del centro e il quadrato del raggio.\nDall'equazione si ricavano centro e raggio, e viceversa.\nIntersecare una circonferenza con una retta vuol dire risolvere un sistema.",
    perche_fa_pensare: "La figura più perfetta della geometria antica diventa una riga di algebra. Non perde nulla, ma si lascia calcolare.",
    dove_si_usa: "Nella localizzazione con le antenne, nel progetto di ruote e ingranaggi, nella grafica.",
    formula: {
      latex: '(x - a)^2 + (y - b)^2 = r^2',
      come_si_legge: "x meno a al quadrato, più y meno b al quadrato, uguale erre al quadrato.",
      a_parole: "Un punto sta sulla circonferenza di centro a, b e raggio r quando dista esattamente r dal centro."
    },
    prerequisiti: [
      { id: 'distanza-tra-punti', perche: "L'equazione nasce dalla formula della distanza." },
      { id: 'luogo-geometrico', perche: "La circonferenza è un luogo geometrico." },
      { id: 'circonferenza-cerchio', perche: "È la stessa figura della geometria classica." }
    ],
    parenti: []
  },
  {
    id: 'curve-parametriche', titolo: 'Curve descritte da un parametro', tipo: 'concetto', area: 'geometria-analitica', argomento: 'rette-e-luoghi', livello: 3,
    sinonimi: ['curve parametriche', 'parametro', 'traiettoria', 'equazioni parametriche'],
    domanda: "Come si descrive il percorso di un oggetto che si muove?",
    esempio: "La posizione di un'auto, minuto per minuto, traccia una curva sulla mappa. Il tempo è il parametro che la descrive.",
    idea: "Una curva parametrica dà le coordinate di un punto in funzione di un numero, il parametro.\nSpesso il parametro è il tempo, e la curva è una traiettoria.\nAl variare del parametro il punto si muove e disegna la curva.\nCosì si descrivono curve che non sono grafici di funzioni, come cerchi e spirali.\nIn breve, è una funzione che a ogni numero associa un [[vettore]].",
    perche_fa_pensare: "Una curva può essere una forma ferma o un movimento. Il parametro aggiunge la dimensione del tempo.",
    dove_si_usa: "Nell'animazione, nella robotica, nel disegno dei caratteri tipografici e delle strade.",
    prerequisiti: [
      { id: 'funzione', perche: "Le coordinate sono funzioni del parametro." },
      { id: 'vettore', perche: "Ogni posizione si può vedere come un vettore." }
    ],
    parenti: []
  },

  // Coniche
  {
    id: 'parabola', titolo: 'Parabola', tipo: 'concetto', area: 'geometria-analitica', argomento: 'sezioni-coniche', livello: 2,
    sinonimi: ['parabola', 'fuoco e direttrice', 'traiettoria di un proiettile', 'funzione quadratica'],
    domanda: "Che forma ha la traiettoria di un pallone?",
    esempio: "Un pallone calciato in alto disegna una parabola, se si trascura l'aria. Anche il getto di una fontana.",
    idea: "La parabola è il luogo dei punti equidistanti da un punto e da una retta.\nIl punto si chiama fuoco, la retta direttrice.\nCon le coordinate si scrive come grafico di un polinomio di secondo grado.\nHa un asse di simmetria e un punto estremo, il vertice.\nI raggi paralleli all'asse, riflessi dalla parabola, passano tutti per il fuoco.\nPer questo le antenne paraboliche e i fari hanno questa forma.",
    perche_fa_pensare: "Galileo scoprì che i proiettili seguono parabole, curve studiate dai Greci quasi duemila anni prima. La geometria aspettava la fisica.",
    dove_si_usa: "Nelle antenne paraboliche, nei fari delle auto, nei forni solari, in balistica.",
    formula: {
      latex: 'y = ax^2 + bx + c',
      come_si_legge: "y uguale a x al quadrato più b x più c.",
      a_parole: "Il grafico di un polinomio di secondo grado è una parabola."
    },
    prerequisiti: [
      { id: 'luogo-geometrico', perche: "La parabola si definisce come luogo geometrico." },
      { id: 'equazioni-di-secondo-grado', perche: "La sua equazione è di secondo grado." }
    ],
    parenti: []
  },
  {
    id: 'ellisse', titolo: 'Ellisse', tipo: 'concetto', area: 'geometria-analitica', argomento: 'sezioni-coniche', livello: 2,
    sinonimi: ['ellisse', 'fuochi', 'orbita ellittica', 'ovale', 'eccentricità'],
    domanda: "Che forma hanno le orbite dei pianeti?",
    esempio: "Pianta due chiodi, fissa uno spago più lungo della loro distanza e tendilo con una matita. Girando, la matita disegna un'ellisse.",
    idea: "L'ellisse è il luogo dei punti per cui la somma delle distanze da due punti fissi è costante.\nI due punti fissi si chiamano fuochi.\nSe i fuochi coincidono, l'ellisse diventa una circonferenza.\nL'eccentricità misura quanto l'ellisse è schiacciata.\nKeplero scoprì che i pianeti girano intorno al Sole su ellissi, con il Sole in un fuoco.",
    perche_fa_pensare: "Per duemila anni si credette che i cieli si muovessero in cerchi perfetti. I dati costrinsero Keplero ad accettare una forma meno «perfetta», ma vera.",
    dove_si_usa: "In astronomia, nelle orbite dei satelliti, in alcune tecniche mediche per frantumare i calcoli renali.",
    formula: {
      latex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1',
      come_si_legge: "x al quadrato fratto a al quadrato, più y al quadrato fratto b al quadrato, uguale uno.",
      a_parole: "È l'equazione di un'ellisse centrata nell'origine, con semiassi a e b."
    },
    prerequisiti: [
      { id: 'luogo-geometrico', perche: "L'ellisse si definisce come luogo geometrico." },
      { id: 'distanza-tra-punti', perche: "La definizione usa le distanze dai due fuochi." }
    ],
    parenti: []
  },
  {
    id: 'iperbole', titolo: 'Iperbole', tipo: 'concetto', area: 'geometria-analitica', argomento: 'sezioni-coniche', livello: 2,
    sinonimi: ['iperbole', 'asintoti', 'iperbole equilatera', 'grafico della proporzionalità inversa'],
    domanda: "Esiste una curva che si avvicina a una retta senza mai toccarla?",
    esempio: "Il grafico della proporzionalità inversa, come velocità e tempo per un viaggio di lunghezza fissata, è un'iperbole.",
    idea: "L'iperbole è il luogo dei punti per cui la differenza delle distanze da due fuochi è costante.\nÈ formata da due rami separati.\nOgni ramo si avvicina sempre di più a due rette, gli asintoti, senza mai toccarle.\nIl grafico della proporzionalità inversa è un'iperbole.\nAlcune comete, che passano una sola volta vicino al Sole, seguono un'iperbole.",
    perche_fa_pensare: "Avvicinarsi per sempre senza arrivare mai: l'iperbole è un'immagine geometrica dell'infinito.",
    dove_si_usa: "Nella navigazione radio, in astronomia, in ottica, nel progetto delle torri di raffreddamento.",
    prerequisiti: [
      { id: 'luogo-geometrico', perche: "L'iperbole si definisce come luogo geometrico." },
      { id: 'distanza-tra-punti', perche: "La definizione usa le distanze dai due fuochi." }
    ],
    parenti: []
  },
  {
    id: 'coniche', titolo: 'Le coniche: sezioni di un cono', tipo: 'concetto', area: 'geometria-analitica', argomento: 'sezioni-coniche', livello: 2,
    sinonimi: ['sezioni coniche', 'coniche', 'Apollonio', 'cono'],
    domanda: "Cosa hanno in comune cerchio, ellisse, parabola e iperbole?",
    esempio: "Punta una torcia contro un muro. Secondo l'inclinazione, la luce disegna un cerchio, un'ellisse, una parabola o un'iperbole.",
    idea: "Le coniche sono le curve che si ottengono tagliando un cono con un piano.\nSecondo l'inclinazione del taglio, si ottengono circonferenza, ellisse, parabola o iperbole.\nApollonio di Perga le studiò a fondo più di duemila anni fa.\nCon le coordinate, salvo casi particolari, sono le curve date da equazioni di secondo grado in due variabili.\nCompaiono ovunque in fisica, dalle orbite alle lenti.",
    perche_fa_pensare: "Curve studiate per pura curiosità geometrica si rivelarono, secoli dopo, la forma esatta delle orbite. È uno dei casi più famosi di matematica «in anticipo».",
    dove_si_usa: "In astronomia, ottica, architettura, nel progetto di antenne e fari.",
    prerequisiti: [
      { id: 'parabola', perche: "La parabola è una delle coniche." },
      { id: 'ellisse', perche: "L'ellisse è una delle coniche." },
      { id: 'iperbole', perche: "L'iperbole è una delle coniche." },
      { id: 'solidi', perche: "Nascono tagliando un cono, che è un solido." }
    ],
    parenti: []
  },
  {
    id: 'quadriche', titolo: 'Superfici quadriche', tipo: 'concetto', area: 'geometria-analitica', argomento: 'sezioni-coniche', livello: 3,
    sinonimi: ['quadriche', 'ellissoide', 'paraboloide', 'iperboloide', 'superfici di secondo grado'],
    domanda: "Esistono le coniche anche nello spazio?",
    esempio: "Il disco di un'antenna satellitare è una superficie: un paraboloide. Le torri di raffreddamento delle centrali sono iperboloidi.",
    idea: "Le quadriche sono le superfici dello spazio date da equazioni di secondo grado in tre variabili.\nSono l'analogo tridimensionale delle coniche.\nLe principali sono sfere, ellissoidi, paraboloidi, iperboloidi, coni e cilindri.\nOgni sezione piana di una quadrica è una conica.\nAlcune si possono costruire interamente con rette, come l'iperboloide a una falda.",
    perche_fa_pensare: "Una superficie curva fatta solo di rette dritte sembra un paradosso. L'iperboloide lo realizza, e gli architetti lo usano.",
    dove_si_usa: "In architettura, nelle antenne, nelle lenti, nelle torri di raffreddamento.",
    prerequisiti: [
      { id: 'coniche', perche: "Generalizzano le coniche allo spazio." },
      { id: 'coordinate-nello-spazio', perche: "Si descrivono con tre coordinate." }
    ],
    parenti: []
  },

  // Spazio e dimensioni
  {
    id: 'coordinate-nello-spazio', titolo: 'Coordinate nello spazio', tipo: 'concetto', area: 'geometria-analitica', argomento: 'spazio-e-dimensioni', livello: 2,
    sinonimi: ['tre dimensioni', 'coordinate tridimensionali', 'asse z', 'spazio cartesiano'],
    domanda: "Come si indica un punto nello spazio?",
    esempio: "Un drone in una stanza si individua con tre numeri. Dicono quanto è avanti, quanto è a destra e quanto è in alto.",
    idea: "Nello spazio servono tre assi perpendicolari tra loro, che si incontrano nell'origine.\nOgni punto è individuato da tre coordinate.\nLa distanza tra due punti si calcola applicando due volte il teorema di Pitagora.\nPiani e sfere diventano equazioni in tre variabili.\nÈ il linguaggio della grafica 3D e della fisica.",
    perche_fa_pensare: "Tre numeri bastano per ogni punto dello spazio. Ma cosa succede se ne usiamo quattro, o cento?",
    dove_si_usa: "Nella grafica 3D, nella stampa 3D, nel GPS, nella medicina per immagini.",
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "Aggiunge una terza coordinata a quelle del piano." },
      { id: 'solidi', perche: "Serve a descrivere le figure solide." }
    ],
    parenti: []
  },
  {
    id: 'rette-e-piani-nello-spazio', titolo: 'Rette e piani nello spazio', tipo: 'concetto', area: 'geometria-analitica', argomento: 'spazio-e-dimensioni', livello: 3,
    sinonimi: ['equazione del piano', 'retta nello spazio', 'piani nello spazio', 'vettore normale', 'rette sghembe'],
    domanda: "Come si scrivono rette e piani in tre dimensioni?",
    esempio: "Il pavimento e una parete di una stanza sono due piani. La linea dove si incontrano è una retta.",
    idea: "Un piano nello spazio si descrive con un'equazione di primo grado in tre variabili.\nI coefficienti indicano una direzione perpendicolare al piano, detta normale.\nUna retta nello spazio si descrive con un punto e una direzione, oppure come incontro di due piani.\nCon il [[prodotto-scalare|prodotto scalare]] si calcolano angoli e distanze tra rette e piani.\nDue piani non paralleli si incontrano sempre in una retta.",
    perche_fa_pensare: "Nello spazio due rette possono non incontrarsi senza essere parallele. Si chiamano sghembe, e nel piano non esistono.",
    dove_si_usa: "Nella grafica 3D, nella robotica, nel calcolo delle ombre e dei riflessi.",
    prerequisiti: [
      { id: 'coordinate-nello-spazio', perche: "Rette e piani si descrivono con tre coordinate." },
      { id: 'equazione-della-retta', perche: "Estende l'equazione della retta allo spazio." },
      { id: 'prodotto-scalare', perche: "Angoli e perpendicolarità si calcolano con il prodotto scalare." }
    ],
    parenti: []
  },
  {
    id: 'spazi-a-n-dimensioni', titolo: 'Spazi con più di tre dimensioni', tipo: 'concetto', area: 'geometria-analitica', argomento: 'spazio-e-dimensioni', livello: 2,
    sinonimi: ['n dimensioni', 'quarta dimensione', 'più dimensioni', 'spazio a n dimensioni', 'iperspazio'],
    domanda: "Ha senso parlare di spazi con più di tre dimensioni?",
    esempio: "Una persona descritta da età, altezza, peso e reddito è un punto in uno spazio a quattro dimensioni.",
    idea: "Uno spazio a n dimensioni è l'insieme delle liste di n numeri.\nPer n uguale a 2 e a 3 ritrovi il piano e lo spazio.\nPer n più grande non si può disegnare, ma si può calcolare con le stesse regole.\nDistanze, angoli e volumi si definiscono come in tre dimensioni.\nIn molte applicazioni n è grandissimo: migliaia o milioni di dimensioni.",
    perche_fa_pensare: "Non possiamo immaginare la quarta dimensione, ma possiamo ragionarci con precisione. La matematica va dove l'immaginazione non arriva.",
    dove_si_usa: "Nell'analisi dei dati, nell'apprendimento automatico, nella fisica dello spaziotempo.",
    prerequisiti: [
      { id: 'coordinate-nello-spazio', perche: "Si generalizzano le tre coordinate a un numero qualsiasi." }
    ],
    parenti: []
  }
]);
