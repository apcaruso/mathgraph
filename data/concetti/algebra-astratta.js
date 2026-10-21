/* Algebra astratta */
Mappa.registra([
  // Strutture algebriche
  {
    id: 'operazione-binaria', titolo: 'Operazioni e strutture algebriche', tipo: 'concetto', area: 'algebra-astratta', argomento: 'strutture-algebriche', livello: 2,
    sinonimi: ['operazione binaria', 'struttura algebrica', 'legge di composizione', 'algebra astratta'],
    domanda: "Cosa resta di un calcolo se togli i numeri?",
    esempio: "Mescolare due colori di vernice dà un colore. Comporre due mosse del cubo di Rubik dà una mossa. Sono operazioni, anche senza numeri.",
    idea: "Un'operazione binaria prende due elementi di un insieme e ne restituisce un terzo, nello stesso insieme.\nSomma e prodotto di numeri sono operazioni binarie, ma non le uniche.\nSi possono comporre funzioni, mosse, rotazioni o parole.\nUna struttura algebrica è un insieme con una o più operazioni che rispettano certe regole.\nL'algebra astratta studia queste strutture, indipendentemente da cosa sono gli elementi.",
    perche_fa_pensare: "Togliendo i numeri si scopre che le regole del calcolo valgono anche per cose che non sono numeri. Conta il modo di combinare, non gli oggetti.",
    dove_si_usa: "In informatica, in crittografia, in fisica, nella teoria dei codici.",
    prerequisiti: [
      { id: 'funzione', perche: "Un'operazione è una funzione da coppie di elementi a elementi." },
      { id: 'proprieta-operazioni', perche: "Le strutture si definiscono con proprietà come quella associativa." },
      { id: 'prodotto-cartesiano', perche: "L'operazione agisce sulle coppie, cioè sul prodotto cartesiano." }
    ],
    parenti: []
  },
  {
    id: 'algebra-di-boole', titolo: 'Algebra di Boole', tipo: 'concetto', area: 'algebra-astratta', argomento: 'strutture-algebriche', livello: 2,
    sinonimi: ['Boole', 'algebra booleana', 'logica booleana', 'porte logiche', 'vero e falso'],
    domanda: "Si può calcolare con il vero e il falso?",
    esempio: "Una ricerca su internet per «gatti e cani, ma non topi» usa l'algebra di Boole. Anche ogni circuito del tuo telefono la usa.",
    idea: "L'algebra di Boole lavora con due soli valori: vero e falso, oppure 1 e 0.\nLe operazioni sono «e», «o» e «non», come i [[connettivi-logici|connettivi logici]].\nObbedisce a regole simili a quelle dei numeri, ma con alcune differenze.\nAd esempio, «A o A» è semplicemente A.\nGeorge Boole la propose a metà Ottocento per trasformare la logica in calcolo.",
    perche_fa_pensare: "Boole voleva capire le leggi del pensiero. Un secolo dopo, Claude Shannon usò la sua algebra per progettare circuiti, e nacquero i computer.",
    dove_si_usa: "Nei circuiti digitali, nei motori di ricerca, nei database, nella programmazione.",
    prerequisiti: [
      { id: 'connettivi-logici', perche: "Le operazioni corrispondono ai connettivi logici." },
      { id: 'operazioni-insiemi', perche: "Unione, intersezione e complemento seguono le stesse regole." },
      { id: 'operazione-binaria', perche: "«E» e «o» sono operazioni binarie." }
    ],
    parenti: [
      { id: 'bit', perche: "Il bit è il valore su cui lavora l'algebra di Boole." }
    ]
  },

  // Gruppi
  {
    id: 'gruppo', titolo: 'Gruppo', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['gruppi', 'teoria dei gruppi', 'gruppo abeliano', 'elemento neutro', 'inverso'],
    domanda: "Cosa hanno in comune tutte le simmetrie?",
    esempio: "Le rotazioni di un quadrato di 0, 90, 180 e 270 gradi formano un gruppo. Due rotazioni di seguito danno ancora una rotazione, e ogni rotazione si può annullare.",
    idea: "Un gruppo è un insieme con un'operazione che rispetta quattro regole.\nCombinando due elementi si resta nell'insieme.\nL'operazione è associativa, e c'è un elemento neutro che non cambia nulla.\nOgni elemento ha un inverso che ne annulla l'effetto.\nI gruppi descrivono le simmetrie, ma anche i numeri interi con la somma e molte altre strutture.",
    perche_fa_pensare: "Quattro regole semplici catturano l'essenza della simmetria. Da esse nasce una delle teorie più ricche della matematica.",
    dove_si_usa: "In fisica delle particelle, in chimica, in crittografia, nel cubo di Rubik.",
    prerequisiti: [
      { id: 'operazione-binaria', perche: "Un gruppo è un insieme con un'operazione." }
    ],
    parenti: [
      { id: 'simmetria', perche: "Le simmetrie di una figura formano un gruppo." }
    ]
  },
  {
    id: 'sottogruppo', titolo: 'Sottogruppo', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['sottogruppi', 'sottogruppo', 'gruppo contenuto'],
    domanda: "Dentro un gruppo, ci sono gruppi più piccoli?",
    esempio: "Tra le rotazioni del quadrato, quelle di 0 e 180 gradi formano da sole un gruppo. È un sottogruppo.",
    idea: "Un sottogruppo è una parte di un gruppo che è a sua volta un gruppo, con la stessa operazione.\nDeve contenere l'elemento neutro.\nCombinando due suoi elementi si deve restare nel sottogruppo.\nAnche l'inverso di ogni elemento deve stare nel sottogruppo.\nStudiare i sottogruppi aiuta a capire la struttura del gruppo intero.",
    perche_fa_pensare: "Come si studia una macchina smontandola nei suoi pezzi, si studia un gruppo guardando i suoi sottogruppi.",
    dove_si_usa: "In cristallografia, in teoria dei codici, in fisica.",
    prerequisiti: [
      { id: 'gruppo', perche: "È una parte di un gruppo." }
    ],
    parenti: []
  },
  {
    id: 'gruppi-ciclici', titolo: 'Gruppi ciclici', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['gruppo ciclico', 'generatore', 'ordine di un elemento', 'gruppo generato'],
    domanda: "Si può costruire un gruppo intero ripetendo un solo gesto?",
    esempio: "Le ore di un orologio si ottengono tutte avanzando di un'ora alla volta. Il gruppo delle ore è generato da un solo passo.",
    idea: "Un gruppo è ciclico se tutti i suoi elementi si ottengono ripetendo un solo elemento, detto generatore.\nI numeri interi con la somma sono un gruppo ciclico infinito, generato da 1.\nL'[[aritmetica-modulare|aritmetica modulare]] dà gruppi ciclici finiti.\nAnche le rotazioni di un poligono regolare formano un gruppo ciclico.\nSono i gruppi più semplici, e si conoscono completamente.",
    perche_fa_pensare: "Un solo gesto, ripetuto, basta a generare un mondo intero. La complessità nasce dalla ripetizione.",
    dove_si_usa: "In crittografia, per lo scambio di chiavi, e nella teoria dei segnali.",
    prerequisiti: [
      { id: 'gruppo', perche: "È un tipo di gruppo." },
      { id: 'aritmetica-modulare', perche: "Le classi di resto sono l'esempio tipico." }
    ],
    parenti: [
      { id: 'radici-dell-unita', perche: "Le radici dell'unità formano un gruppo ciclico." }
    ]
  },
  {
    id: 'gruppo-simmetrico', titolo: 'Gruppo delle permutazioni', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['gruppo simmetrico', 'permutazioni', 'teorema di Cayley', 'scambi'],
    domanda: "Cosa succede se si combinano due rimescolamenti?",
    esempio: "Mescoli un mazzo di carte in un modo, poi in un altro. Il risultato è ancora un modo di mescolare il mazzo.",
    idea: "Il gruppo simmetrico è formato da tutte le [[permutazioni]] di un insieme di oggetti.\nL'operazione è fare una permutazione dopo l'altra.\nCon n oggetti, il gruppo ha n fattoriale elementi.\nOgni permutazione si ottiene con una serie di scambi a due a due.\nUn teorema di Cayley dice che ogni gruppo finito si trova dentro un gruppo simmetrico.",
    perche_fa_pensare: "Rimescolare è il gesto più generale possibile: ogni simmetria, in fondo, è un rimescolamento.",
    dove_si_usa: "In teoria di Galois, nei rompicapo come il cubo di Rubik, in crittografia.",
    prerequisiti: [
      { id: 'gruppo', perche: "Le permutazioni formano un gruppo." },
      { id: 'permutazioni', perche: "Gli elementi sono permutazioni." }
    ],
    parenti: []
  },
  {
    id: 'gruppi-di-simmetria', titolo: 'Gruppi di simmetria delle figure', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['gruppo diedrale', 'simmetrie dei poligoni', 'gruppi cristallografici', 'gruppi del fregio'],
    domanda: "Quante simmetrie ha un fiocco di neve?",
    esempio: "Un fiocco di neve ideale ha 12 simmetrie: 6 rotazioni e 6 riflessioni. Insieme formano un gruppo.",
    idea: "Le simmetrie di una figura sono i movimenti rigidi che la lasciano uguale a sé stessa.\nFormano sempre un [[gruppo]].\nUn poligono regolare con n lati ha 2n simmetrie: n rotazioni e n riflessioni.\nLe decorazioni che si ripetono sul piano hanno esattamente 17 tipi di simmetria diversi.\nI cristalli nello spazio ne hanno 230.",
    perche_fa_pensare: "Gli artisti dell'Alhambra hanno usato, secoli fa, molti dei 17 tipi di simmetria del piano. L'arte arrivava dove la matematica sarebbe arrivata dopo.",
    dove_si_usa: "In cristallografia, in chimica molecolare, nell'arte decorativa, nell'architettura.",
    prerequisiti: [
      { id: 'gruppo', perche: "Le simmetrie formano un gruppo." },
      { id: 'simmetria', perche: "Parte dall'idea di simmetria di una figura." }
    ],
    parenti: [
      { id: 'solidi-platonici', perche: "Ogni solido platonico ha un ricco gruppo di simmetrie." },
      { id: 'tassellazioni', perche: "Le tassellazioni del piano si classificano con i loro gruppi di simmetria." }
    ]
  },
  {
    id: 'teorema-di-lagrange', titolo: 'Teorema di Lagrange sui gruppi', tipo: 'teorema', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['Lagrange', 'teorema di Lagrange', 'ordine di un sottogruppo', 'classi laterali'],
    domanda: "Quanto può essere grande un sottogruppo?",
    esempio: "Un gruppo con 12 elementi può avere sottogruppi di 1, 2, 3, 4, 6 o 12 elementi. Mai di 5 o di 7.",
    idea: "Il teorema di Lagrange riguarda i gruppi finiti.\nDice che il numero di elementi di un sottogruppo divide il numero di elementi del gruppo.\nLa dimostrazione divide il gruppo in copie del sottogruppo, tutte della stessa grandezza.\nQuindi un gruppo con un numero primo di elementi non ha sottogruppi intermedi.\nIl [[piccolo-teorema-di-fermat|piccolo teorema di Fermat]] ne è una conseguenza.",
    perche_fa_pensare: "La sola grandezza di un gruppo pone limiti precisi alla sua struttura interna. Contare dice molto.",
    dove_si_usa: "In teoria dei numeri, in crittografia, nello studio dei gruppi finiti.",
    formula: {
      latex: '|G| = |H| \\cdot [G : H]',
      come_si_legge: "l'ordine di G è uguale all'ordine di H per l'indice di H in G.",
      a_parole: "Il gruppo si divide in copie del sottogruppo, tutte con lo stesso numero di elementi."
    },
    prerequisiti: [
      { id: 'sottogruppo', perche: "Confronta un gruppo con un suo sottogruppo." },
      { id: 'relazione-di-equivalenza', perche: "Le copie del sottogruppo sono classi di equivalenza." }
    ],
    parenti: []
  },
  {
    id: 'omomorfismo', titolo: 'Omomorfismi e isomorfismi', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['omomorfismo', 'isomorfismo', 'stessa struttura', 'nucleo'],
    domanda: "Quando due strutture sono «la stessa» anche se sembrano diverse?",
    esempio: "Le rotazioni di un quadrato e le ore di un orologio a 4 ore si combinano allo stesso modo. Sono due vestiti diversi dello stesso gruppo.",
    idea: "Un omomorfismo è una funzione tra gruppi che rispetta le operazioni.\nCombinare e poi trasformare dà lo stesso risultato che trasformare e poi combinare.\nSe l'omomorfismo è anche biunivoco, si chiama isomorfismo.\nDue gruppi isomorfi hanno esattamente la stessa struttura, anche se gli elementi sono diversi.\nIl [[logaritmo]], ad esempio, trasforma prodotti in somme: è un isomorfismo.",
    perche_fa_pensare: "Per l'algebra conta il modo in cui le cose si combinano, non cosa sono. Due oggetti diversissimi possono essere la stessa cosa.",
    dove_si_usa: "In tutta l'algebra, in crittografia, in fisica, nel confronto tra modelli.",
    prerequisiti: [
      { id: 'gruppo', perche: "Collega due gruppi." },
      { id: 'funzione-iniettiva-suriettiva', perche: "Un isomorfismo è una funzione biunivoca." }
    ],
    parenti: [
      { id: 'applicazione-lineare', perche: "Le trasformazioni lineari sono gli omomorfismi degli spazi vettoriali." }
    ]
  },
  {
    id: 'gruppo-quoziente', titolo: 'Sottogruppi normali e gruppi quoziente', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['gruppo quoziente', 'sottogruppo normale', 'quoziente', 'classi laterali'],
    domanda: "Si può semplificare un gruppo ignorando alcuni dettagli?",
    esempio: "Se dei numeri interi guardi solo se sono pari o dispari, ottieni un gruppo con due elementi. È un quoziente degli interi.",
    idea: "Un gruppo quoziente si ottiene considerando uguali gli elementi che differiscono per un sottogruppo.\nNon funziona con tutti i sottogruppi, ma solo con quelli detti normali.\nI sottogruppi normali sono quelli che restano uguali se li si guarda «da un altro punto di vista» del gruppo.\nIl quoziente è una versione più semplice del gruppo, che ne conserva una parte della struttura.\nÈ come guardare una mappa a scala ridotta.",
    perche_fa_pensare: "Per capire una cosa complicata, si può decidere di ignorare alcune differenze. Ma bisogna scegliere bene cosa ignorare.",
    dove_si_usa: "In teoria di Galois, in topologia, in fisica.",
    prerequisiti: [
      { id: 'sottogruppo', perche: "Si divide per un sottogruppo." },
      { id: 'omomorfismo', perche: "Ogni quoziente nasce da un omomorfismo, e viceversa." },
      { id: 'relazione-di-equivalenza', perche: "Gli elementi del quoziente sono classi di equivalenza." }
    ],
    parenti: []
  },
  {
    id: 'azione-di-gruppo', titolo: 'Azione di un gruppo', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 3,
    sinonimi: ['azione di gruppo', 'orbite', 'stabilizzatore', 'lemma di Burnside'],
    domanda: "Quante collane diverse si possono fare con perle di due colori?",
    esempio: "Due collane sono uguali se una si ottiene ruotando l'altra. Contare quelle davvero diverse richiede di tener conto delle rotazioni.",
    idea: "Un gruppo agisce su un insieme quando ogni elemento del gruppo muove gli oggetti dell'insieme.\nAd esempio, le rotazioni agiscono sulle collane, spostando le perle.\nGli oggetti raggiungibili l'uno dall'altro formano un'orbita.\nContare le orbite vuol dire contare gli oggetti «davvero diversi».\nLe azioni sono il modo in cui i gruppi astratti diventano movimenti concreti.",
    perche_fa_pensare: "Un gruppo, da solo, è una struttura astratta. Quando agisce su qualcosa, diventa uno strumento per contare e classificare.",
    dove_si_usa: "In combinatoria, in chimica per contare le molecole, in fisica.",
    prerequisiti: [
      { id: 'gruppo', perche: "Un gruppo agisce su un insieme." }
    ],
    parenti: []
  },
  {
    id: 'teoremi-di-sylow', titolo: 'Teoremi di Sylow', tipo: 'teorema', area: 'algebra-astratta', argomento: 'gruppi', livello: 4,
    sinonimi: ['Sylow', 'p-sottogruppi', 'sottogruppi di Sylow', 'gruppi finiti'],
    domanda: "Quali sottogruppi è garantito trovare in un gruppo finito?",
    esempio: "Un gruppo con 15 elementi deve avere sottogruppi di 3 e di 5 elementi. Da qui si dimostra che c'è un solo gruppo con 15 elementi.",
    idea: "Il teorema di Lagrange dice quali grandezze possono avere i sottogruppi, ma non garantisce che esistano.\nI teoremi di Sylow danno una garanzia parziale.\nPer ogni primo che divide il numero di elementi, esistono sottogruppi della massima potenza possibile di quel primo.\nDicono anche quanti sono questi sottogruppi, e che sono tutti simili tra loro.\nLudwig Sylow li dimostrò nel 1872.",
    perche_fa_pensare: "Dalla sola scomposizione in fattori primi di un numero si deducono fatti sulla struttura di ogni gruppo di quella grandezza.",
    dove_si_usa: "Nella classificazione dei gruppi finiti.",
    prerequisiti: [
      { id: 'teorema-di-lagrange', perche: "Completano in parte il teorema di Lagrange." },
      { id: 'azione-di-gruppo', perche: "La dimostrazione usa le azioni di gruppo." }
    ],
    parenti: []
  },
  {
    id: 'classificazione-gruppi-semplici', titolo: 'Classificazione dei gruppi semplici finiti', tipo: 'teorema', area: 'algebra-astratta', argomento: 'gruppi', livello: 4,
    sinonimi: ['gruppi semplici', 'gruppo mostro', 'gruppi sporadici', 'teorema enorme'],
    domanda: "Quali sono gli atomi di tutti i gruppi finiti?",
    esempio: "Il più grande gruppo sporadico, detto «mostro», ha un numero di elementi con 54 cifre. Eppure ha una struttura precisa.",
    idea: "I gruppi semplici sono i gruppi finiti che non si possono spezzare in quozienti più piccoli.\nSono come gli atomi: ogni gruppo finito si costruisce a partire da loro.\nLa classificazione dice che sono di 18 famiglie infinite, più 26 gruppi eccezionali detti sporadici.\nLa dimostrazione occupa decine di migliaia di pagine, scritte da circa cento matematici.\nFu considerata completa solo nei primi anni Duemila.",
    perche_fa_pensare: "Nessuna persona ha letto tutta la dimostrazione. Cosa vuol dire, allora, sapere che un teorema è vero?",
    dove_si_usa: "In tutta la teoria dei gruppi; il gruppo mostro ha legami sorprendenti con la fisica teorica.",
    prerequisiti: [
      { id: 'gruppo-quoziente', perche: "Un gruppo semplice non ha quozienti propri." },
      { id: 'teoremi-di-sylow', perche: "I teoremi di Sylow sono uno strumento di base della classificazione." }
    ],
    parenti: []
  },
  {
    id: 'rappresentazioni-di-gruppi', titolo: 'Rappresentazioni dei gruppi', tipo: 'concetto', area: 'algebra-astratta', argomento: 'gruppi', livello: 4,
    sinonimi: ['teoria delle rappresentazioni', 'rappresentazione', 'caratteri', 'gruppi di matrici'],
    domanda: "Si può trasformare un gruppo astratto in un gruppo di matrici?",
    esempio: "Le simmetrie di una molecola si possono scrivere come matrici. Così i chimici prevedono quali colori di luce la molecola assorbe.",
    idea: "Una rappresentazione traduce ogni elemento di un gruppo in una [[matrice]].\nLa traduzione rispetta l'operazione: combinare elementi corrisponde a moltiplicare matrici.\nCosì problemi sui gruppi diventano problemi di algebra lineare, più facili da calcolare.\nOgni rappresentazione si scompone in pezzi più semplici, detti irriducibili.\nFerdinand Georg Frobenius sviluppò la teoria alla fine dell'Ottocento.",
    perche_fa_pensare: "In fisica, le particelle elementari corrispondono a rappresentazioni di gruppi di simmetria. La materia stessa sembra fatta di algebra.",
    dove_si_usa: "In fisica delle particelle, in chimica, in teoria dei numeri, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'omomorfismo', perche: "Una rappresentazione è un omomorfismo verso un gruppo di matrici." },
      { id: 'matrice', perche: "Gli elementi diventano matrici." },
      { id: 'spazio-vettoriale', perche: "Il gruppo agisce su uno spazio vettoriale." }
    ],
    parenti: []
  },

  // Anelli e campi
  {
    id: 'anello', titolo: 'Anello', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 3,
    sinonimi: ['anelli', 'anello commutativo', 'somma e prodotto', 'Emmy Noether'],
    domanda: "Quali regole servono per sommare e moltiplicare?",
    esempio: "Con i numeri interi puoi sommare, sottrarre e moltiplicare, ma non sempre dividere. Gli interi sono l'esempio tipico di anello.",
    idea: "Un anello è un insieme con due operazioni, chiamate somma e prodotto.\nCon la somma forma un gruppo commutativo.\nIl prodotto è associativo e si distribuisce sulla somma.\nNon si chiede che si possa sempre dividere.\nInteri, polinomi e matrici quadrate sono anelli.",
    perche_fa_pensare: "Emmy Noether trasformò la teoria degli anelli negli anni Venti del Novecento. Il suo modo astratto di pensare cambiò tutta l'algebra.",
    dove_si_usa: "In teoria dei numeri, in geometria algebrica, in crittografia, nei codici di correzione.",
    prerequisiti: [
      { id: 'gruppo', perche: "Con la somma, un anello è un gruppo." }
    ],
    parenti: []
  },
  {
    id: 'campo', titolo: 'Campo', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 3,
    sinonimi: ['campi', 'corpo', 'campo numerico', 'dividere sempre'],
    domanda: "In quali sistemi di numeri si può sempre dividere?",
    esempio: "Con le frazioni puoi dividere qualsiasi numero per qualsiasi altro, purché non sia zero. Le frazioni formano un campo.",
    idea: "Un campo è un anello commutativo in cui si può sempre dividere per un elemento diverso da zero.\nNumeri razionali, reali e complessi sono campi.\nI numeri interi no: 1 diviso 2 non è un intero.\nNei campi valgono tutte le regole familiari del calcolo.\nEsistono anche campi con un numero finito di elementi.",
    perche_fa_pensare: "Le regole che impariamo a scuola per i numeri valgono, identiche, in mondi molto diversi. Il campo è il loro ambiente naturale.",
    dove_si_usa: "In algebra lineare, in crittografia, nella teoria dei codici, in geometria.",
    prerequisiti: [
      { id: 'anello', perche: "Un campo è un anello speciale." },
      { id: 'numeri-razionali', perche: "Le frazioni sono il primo esempio di campo." }
    ],
    parenti: []
  },
  {
    id: 'anello-dei-polinomi', titolo: 'Anello dei polinomi', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 3,
    sinonimi: ['polinomi', 'anello dei polinomi', 'polinomi irriducibili', 'fattorizzazione di polinomi'],
    domanda: "I polinomi si comportano come i numeri interi?",
    esempio: "Il numero 12 si scompone in 2 per 2 per 3. Allo stesso modo un polinomio si scompone in polinomi più semplici, che non si scompongono oltre.",
    idea: "I polinomi con coefficienti in un campo formano un anello.\nSi possono sommare e moltiplicare, e si può fare la divisione con resto.\nI polinomi che non si scompongono si chiamano irriducibili, come i numeri primi.\nOgni polinomio si scompone in irriducibili in un solo modo.\nL'analogia tra numeri interi e polinomi guida molte scoperte.",
    perche_fa_pensare: "Numeri e polinomi sembrano oggetti diversi, ma hanno la stessa architettura. Un'analogia può diventare un teorema.",
    dove_si_usa: "Nei codici di correzione degli errori, in crittografia, in algebra.",
    prerequisiti: [
      { id: 'anello', perche: "I polinomi formano un anello." },
      { id: 'divisione-polinomi', perche: "Si usa la divisione tra polinomi." }
    ],
    parenti: []
  },
  {
    id: 'ideale', titolo: 'Ideali', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 3,
    sinonimi: ['ideale', 'ideale primo', 'ideale massimale', 'anello quoziente', 'Dedekind'],
    domanda: "Come si generalizza l'idea di «multipli di un numero»?",
    esempio: "I multipli di 3 sono un ideale degli interi. Sommandoli resti tra i multipli di 3, e anche moltiplicandoli per qualsiasi intero.",
    idea: "Un ideale è una parte di un anello che si comporta come l'insieme dei multipli di un numero.\nLa somma di due elementi dell'ideale resta nell'ideale.\nMoltiplicando un elemento dell'ideale per qualsiasi elemento dell'anello si resta nell'ideale.\nCon gli ideali si costruiscono anelli quoziente, come l'aritmetica modulare.\nDedekind li introdusse per salvare la fattorizzazione unica dove sembrava perduta.",
    perche_fa_pensare: "Quando i numeri smettono di scomporsi in modo unico, si scompongono gli ideali. Cambiare oggetto di studio può risolvere un problema.",
    dove_si_usa: "In teoria dei numeri, in geometria algebrica, nel calcolo simbolico.",
    prerequisiti: [
      { id: 'anello', perche: "È una parte di un anello." },
      { id: 'gruppo-quoziente', perche: "Ha lo stesso ruolo dei sottogruppi normali nei quozienti." }
    ],
    parenti: []
  },
  {
    id: 'fattorizzazione-unica-anelli', titolo: 'Fattorizzazione unica negli anelli', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 4,
    sinonimi: ['fattorizzazione unica', 'anelli fattoriali', 'domini euclidei', 'elementi irriducibili'],
    domanda: "In quali sistemi di numeri la scomposizione in primi è unica?",
    esempio: "Negli interi, 6 si scompone solo come 2 per 3. In altri anelli, lo stesso numero può avere due scomposizioni diverse.",
    idea: "In molti anelli si può parlare di elementi primi o irriducibili.\nLa fattorizzazione è unica se ogni elemento si scompone in irriducibili in un solo modo.\nVale negli interi e nei polinomi, ma non in tutti gli anelli.\nUn modo per garantirla è avere una divisione con resto, come nell'[[algoritmo-di-euclide|algoritmo di Euclide]].\nCapire quando la fattorizzazione è unica è stato un motore dell'algebra dell'Ottocento.",
    perche_fa_pensare: "Il teorema fondamentale dell'aritmetica sembra una legge universale. È invece una fortuna degli interi.",
    dove_si_usa: "In teoria dei numeri e in geometria algebrica.",
    prerequisiti: [
      { id: 'ideale', perche: "Si studia anche attraverso gli ideali." },
      { id: 'fattorizzazione-in-primi', perche: "Generalizza la scomposizione in fattori primi." }
    ],
    parenti: [
      { id: 'algoritmo-di-euclide', perche: "Dove c'è un algoritmo di Euclide, la fattorizzazione è unica." }
    ]
  },
  {
    id: 'campi-finiti', titolo: 'Campi finiti', tipo: 'concetto', area: 'algebra-astratta', argomento: 'anelli-e-campi', livello: 3,
    sinonimi: ['campo finito', 'campi di Galois', 'aritmetica in un campo finito'],
    domanda: "Può esistere un sistema di numeri con un numero finito di elementi?",
    esempio: "Con i resti della divisione per 7 puoi sommare, sottrarre, moltiplicare e anche dividere. È un campo con 7 elementi.",
    idea: "Un campo finito ha un numero finito di elementi, ma tutte le regole del calcolo.\nI resti della divisione per un numero primo formano un campo finito.\nEsistono campi finiti solo quando il numero di elementi è una potenza di un primo.\nPer ogni potenza di un primo, ne esiste esattamente uno, a meno di isomorfismi.\nSi chiamano anche campi di Galois.",
    perche_fa_pensare: "Un mondo di calcoli che si chiude su sé stesso, senza infinito, si rivela utilissimo. I computer lavorano proprio con quantità finite.",
    dove_si_usa: "Nei codici dei QR code e dei CD, nella crittografia AES e su curve ellittiche.",
    prerequisiti: [
      { id: 'campo', perche: "È un campo." },
      { id: 'aritmetica-modulare', perche: "L'esempio di base sono i resti modulo un primo." }
    ],
    parenti: [
      { id: 'geometrie-finite', perche: "Con i campi finiti si costruiscono geometrie con un numero finito di punti." }
    ]
  },

  // Teoria di Galois
  {
    id: 'estensione-di-campi', titolo: 'Estensioni di campi', tipo: 'concetto', area: 'algebra-astratta', argomento: 'equazioni-e-simmetrie', livello: 3,
    sinonimi: ['estensione di campi', 'grado di un\'estensione', 'campo di spezzamento', 'aggiungere radici'],
    domanda: "Cosa succede se si aggiunge un numero nuovo a un sistema di numeri?",
    esempio: "Aggiungi la radice di 2 alle frazioni. Ottieni tutti i numeri del tipo «a più b per radice di 2», con a e b frazioni.",
    idea: "Un'estensione di campi si ottiene aggiungendo a un campo nuovi elementi, come le radici di un'equazione.\nIl campo più grande si può vedere come uno [[spazio-vettoriale|spazio vettoriale]] sul campo più piccolo.\nLa sua dimensione si chiama grado dell'estensione.\nIl grado misura quanto è «grande» il numero aggiunto.\nAggiungendo tutte le radici di un polinomio si ottiene il suo campo di spezzamento.",
    perche_fa_pensare: "Invece di risolvere un'equazione, si costruisce un mondo in cui ha soluzione. Poi si studia quel mondo.",
    dove_si_usa: "In teoria di Galois, nelle costruzioni geometriche, in crittografia.",
    prerequisiti: [
      { id: 'campo', perche: "Si estende un campo." },
      { id: 'anello-dei-polinomi', perche: "Si aggiungono radici di polinomi." },
      { id: 'base-e-dimensione', perche: "Il grado è una dimensione." }
    ],
    parenti: []
  },
  {
    id: 'problemi-classici-impossibili', titolo: 'Trisezione, duplicazione del cubo e quadratura del cerchio', tipo: 'teorema', area: 'algebra-astratta', argomento: 'equazioni-e-simmetrie', livello: 3,
    sinonimi: ['problemi classici', 'trisezione dell\'angolo', 'duplicazione del cubo', 'quadratura del cerchio', 'Wantzel'],
    domanda: "Perché alcuni problemi greci sono rimasti irrisolti per duemila anni?",
    esempio: "Con riga e compasso si divide un angolo a metà. Dividerlo in tre parti uguali, per un angolo qualsiasi, è impossibile.",
    idea: "I Greci posero tre problemi da risolvere con [[costruzioni-riga-compasso|riga e compasso]].\nDividere un angolo in tre, costruire un cubo di volume doppio, costruire un quadrato grande quanto un cerchio.\nCon riga e compasso si ottengono solo estensioni di grado pari a una potenza di 2.\nLa radice cubica di 2 ha grado 3, quindi il cubo non si raddoppia; per l'angolo il ragionamento è simile.\nWantzel lo dimostrò nel 1837; per il cerchio servì la trascendenza di pi greco, nel 1882.",
    perche_fa_pensare: "La risposta a un problema geometrico è arrivata dall'algebra. A volte bisogna cambiare linguaggio per vedere che una strada non c'è.",
    dove_si_usa: "Nella storia della matematica e come esempio della forza della teoria dei campi.",
    prerequisiti: [
      { id: 'estensione-di-campi', perche: "La dimostrazione usa il grado delle estensioni." },
      { id: 'costruzioni-riga-compasso', perche: "Riguarda le costruzioni con riga e compasso." }
    ],
    parenti: []
  },
  {
    id: 'teoria-di-galois', titolo: 'Teoria di Galois', tipo: 'concetto', area: 'algebra-astratta', argomento: 'equazioni-e-simmetrie', livello: 4,
    sinonimi: ['Galois', 'gruppo di Galois', 'corrispondenza di Galois', 'simmetrie delle radici'],
    domanda: "Perché alcune equazioni non hanno una formula risolutiva?",
    esempio: "Le due soluzioni di un'equazione di secondo grado si possono scambiare senza rompere nessuna relazione tra loro. Questo scambio è una simmetria.",
    idea: "La teoria di Galois studia le simmetrie delle soluzioni di un'equazione polinomiale.\nQueste simmetrie formano un gruppo, il gruppo di Galois dell'equazione.\nLa struttura del gruppo dice se l'equazione si risolve con radici quadrate, cubiche e così via.\nUn dizionario preciso collega i sottogruppi del gruppo ai campi intermedi.\nÉvariste Galois la sviluppò prima di morire in duello nel 1832, a vent'anni.",
    perche_fa_pensare: "Un ragazzo di vent'anni ha cambiato la domanda: non più come risolvere un'equazione, ma quali simmetrie ha. Fu capito solo decenni dopo.",
    dove_si_usa: "In teoria dei numeri, in crittografia, in geometria, nella teoria dei codici.",
    prerequisiti: [
      { id: 'estensione-di-campi', perche: "Studia le estensioni generate dalle radici." },
      { id: 'gruppo-quoziente', perche: "Usa i sottogruppi normali e i quozienti." },
      { id: 'gruppo-simmetrico', perche: "Il gruppo di Galois permuta le radici." }
    ],
    parenti: []
  },
  {
    id: 'insolubilita-quintica', titolo: 'Teorema di Abel-Ruffini', tipo: 'teorema', area: 'algebra-astratta', argomento: 'equazioni-e-simmetrie', livello: 4,
    sinonimi: ['Abel-Ruffini', 'equazione di quinto grado', 'insolubilità per radicali', 'Ruffini', 'Abel'],
    domanda: "Esiste una formula per le equazioni di quinto grado?",
    esempio: "Per le equazioni di secondo grado c'è una formula con radici quadrate. Per il terzo e il quarto grado ce ne sono, più lunghe. Per il quinto no.",
    idea: "Le equazioni fino al quarto grado si risolvono con formule che usano operazioni e radici.\nLe formule per il terzo e il quarto grado furono trovate in Italia nel Cinquecento.\nIl teorema di Abel-Ruffini dice che dal quinto grado in poi una formula generale di questo tipo non esiste.\nPaolo Ruffini ne diede una dimostrazione incompleta nel 1799; Niels Abel la completò nel 1824.\nAttenzione: le soluzioni esistono, ma non si scrivono sempre con radici.",
    perche_fa_pensare: "Per secoli si è cercata una formula che non poteva esistere. Dimostrarlo ha richiesto di inventare un modo nuovo di pensare.",
    dove_si_usa: "In algebra e nella storia della matematica; spiega perché si usano metodi numerici.",
    prerequisiti: [
      { id: 'teoria-di-galois', perche: "La teoria di Galois spiega perché la formula non esiste." },
      { id: 'equazioni-di-grado-superiore', perche: "Riguarda le equazioni di grado alto." }
    ],
    parenti: []
  }
]);
