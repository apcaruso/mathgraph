/* Teoria delle categorie */
Mappa.registra([
  // Categorie e funtori
  {
    id: 'oggetti-e-frecce', titolo: 'Oggetti e frecce', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-funtori', livello: 2,
    sinonimi: ['frecce', 'morfismi', 'composizione', 'diagrammi', 'pensiero relazionale'],
    domanda: "Cosa si scopre guardando le frecce invece degli oggetti?",
    esempio: "Una mappa della metropolitana non mostra com'è fatta ogni stazione. Mostra solo come sono collegate, ed è quello che serve per muoversi.",
    idea: "Molte parti della matematica studiano oggetti e trasformazioni tra oggetti.\nInsiemi e funzioni, gruppi e omomorfismi, spazi e funzioni continue.\nL'idea delle categorie è dare il ruolo principale alle trasformazioni, disegnate come frecce.\nDue frecce consecutive si possono comporre in una freccia sola.\nSpesso le proprietà di un oggetto si capiscono da come le frecce entrano ed escono.",
    perche_fa_pensare: "Un oggetto può essere descritto solo dalle sue relazioni con gli altri. È un'idea che si ritrova in filosofia, in sociologia e in linguistica.",
    dove_si_usa: "In matematica come linguaggio comune, in informatica, in fisica teorica.",
    prerequisiti: [
      { id: 'funzione-inversa', perche: "Comporre e invertire funzioni è il primo esempio di frecce." }
    ],
    parenti: [
      { id: 'omomorfismo', perche: "Gli omomorfismi sono le frecce tra gruppi." }
    ]
  },
  {
    id: 'categoria', titolo: 'Categoria', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-funtori', livello: 3,
    sinonimi: ['categorie', 'teoria delle categorie', 'Eilenberg e Mac Lane', 'morfismi'],
    domanda: "Cosa hanno in comune tutte le strutture matematiche?",
    esempio: "Gli insiemi con le funzioni sono una categoria. Lo sono anche i gruppi con gli omomorfismi, e gli spazi con le funzioni continue.",
    idea: "Una categoria è fatta di oggetti e di frecce tra di essi.\nLe frecce si possono comporre, e la composizione è associativa.\nOgni oggetto ha una freccia identità, che non cambia nulla.\nNon importa cosa sono gli oggetti: conta solo come si combinano le frecce.\nSamuel Eilenberg e Saunders Mac Lane introdussero le categorie nel 1945.",
    perche_fa_pensare: "Fu chiamata scherzosamente «astrazione senza senso». Eppure si è rivelata il linguaggio che unisce tante parti della matematica.",
    dove_si_usa: "In topologia algebrica, in geometria algebrica, nella teoria dei linguaggi di programmazione.",
    prerequisiti: [
      { id: 'oggetti-e-frecce', perche: "Formalizza l'idea di oggetti e frecce." },
      { id: 'omomorfismo', perche: "Gli omomorfismi tra gruppi sono un esempio tipico di frecce." }
    ],
    parenti: []
  },
  {
    id: 'funtore', titolo: 'Funtore', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-funtori', livello: 3,
    sinonimi: ['funtori', 'funtore', 'traduzione tra categorie', 'mappa tra categorie'],
    domanda: "Come si traduce un problema da un'area della matematica a un'altra?",
    esempio: "Il gruppo fondamentale trasforma ogni spazio in un gruppo e ogni funzione continua in un omomorfismo. È un traduttore dalla topologia all'algebra.",
    idea: "Un funtore è una corrispondenza tra due categorie.\nManda oggetti in oggetti e frecce in frecce.\nRispetta la composizione: tradurre due frecce consecutive equivale a tradurre la loro composizione.\nCosì un problema in una categoria diventa un problema in un'altra, magari più semplice.\nLa topologia algebrica è costruita quasi tutta con funtori.",
    perche_fa_pensare: "Un buon dizionario tra due lingue conserva non solo le parole, ma anche le frasi. I funtori sono dizionari matematici.",
    dove_si_usa: "In topologia, in geometria algebrica, nei linguaggi di programmazione funzionale.",
    prerequisiti: [
      { id: 'categoria', perche: "Collega due categorie." }
    ],
    parenti: []
  },
  {
    id: 'trasformazione-naturale', titolo: 'Trasformazione naturale', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-funtori', livello: 4,
    sinonimi: ['trasformazione naturale', 'naturalità', 'isomorfismo naturale', 'canonico'],
    domanda: "Cosa vuol dire che una costruzione è «naturale», senza scelte arbitrarie?",
    esempio: "Ogni spazio vettoriale finito è uguale al suo duale, ma per dirlo bisogna scegliere una base. È uguale al suo doppio duale senza scegliere nulla.",
    idea: "Una trasformazione naturale collega due funtori tra le stesse categorie.\nPer ogni oggetto dà una freccia, e queste frecce sono compatibili con tutte le altre.\nIntuitivamente, è una costruzione che funziona allo stesso modo ovunque, senza scelte arbitrarie.\nIn matematica, «naturale» o «canonico» indica proprio questo.\nEilenberg e Mac Lane dissero di aver inventato le categorie per definire le trasformazioni naturali.",
    perche_fa_pensare: "I matematici dicevano da tempo «naturale» in modo intuitivo. Le categorie hanno dato a questa parola un significato preciso.",
    dove_si_usa: "In algebra, in topologia, nella programmazione funzionale.",
    prerequisiti: [
      { id: 'funtore', perche: "Collega due funtori." }
    ],
    parenti: []
  },

  // Costruzioni universali
  {
    id: 'proprieta-universale', titolo: 'Proprietà universali', tipo: 'concetto', area: 'categorie', argomento: 'costruzioni-universali', livello: 4,
    sinonimi: ['proprietà universale', 'prodotto categoriale', 'limiti e colimiti', 'oggetto universale'],
    domanda: "Si può descrivere un oggetto solo attraverso le sue relazioni?",
    esempio: "Il prodotto cartesiano di due insiemi ha una proprietà speciale. Ogni coppia di funzioni verso i due insiemi corrisponde a una sola funzione verso il prodotto.",
    idea: "Una proprietà universale descrive un oggetto dicendo come si relaziona con tutti gli altri.\nNon dice di cosa è fatto, ma quali frecce lo collegano agli altri oggetti.\nUn oggetto con una proprietà universale è unico, a meno di un unico isomorfismo.\nProdotti, somme, quozienti e molte altre costruzioni si definiscono così.\nLa stessa definizione vale in categorie diversissime.",
    perche_fa_pensare: "Per sapere cos'è una cosa, a volte basta sapere cosa fa. È una forma matematica del «dimmi con chi vai e ti dirò chi sei».",
    dove_si_usa: "In algebra, in topologia, in logica, nei linguaggi di programmazione.",
    prerequisiti: [
      { id: 'categoria', perche: "Si definisce all'interno di una categoria." },
      { id: 'prodotto-cartesiano', perche: "Il prodotto cartesiano è il primo esempio." }
    ],
    parenti: []
  },
  {
    id: 'lemma-di-yoneda', titolo: 'Lemma di Yoneda', tipo: 'teorema', area: 'categorie', argomento: 'costruzioni-universali', livello: 4,
    sinonimi: ['Yoneda', 'lemma di Yoneda', 'funtori rappresentabili', 'immersione di Yoneda'],
    domanda: "Un oggetto è determinato da tutte le sue relazioni?",
    esempio: "Puoi riconoscere una persona da come la vedono tutti quelli che la conoscono. Il lemma di Yoneda dice che, in una categoria, funziona sempre.",
    idea: "Il lemma di Yoneda riguarda le frecce che arrivano in un oggetto da tutti gli altri.\nDice che questa rete di frecce determina completamente l'oggetto.\nDue oggetti con le stesse relazioni, in modo compatibile, sono isomorfi.\nCosì ogni categoria si può immergere in una categoria di funtori, più comoda.\nPorta il nome di Nobuo Yoneda, matematico giapponese, e risale agli anni Cinquanta.",
    perche_fa_pensare: "Conoscere tutte le relazioni di un oggetto equivale a conoscere l'oggetto. In matematica, l'identità è fatta di relazioni.",
    dove_si_usa: "In tutta la teoria delle categorie, in geometria algebrica, in informatica teorica.",
    prerequisiti: [
      { id: 'trasformazione-naturale', perche: "È un enunciato sulle trasformazioni naturali." }
    ],
    parenti: []
  },
  {
    id: 'aggiunzione', titolo: 'Funtori aggiunti', tipo: 'concetto', area: 'categorie', argomento: 'costruzioni-universali', livello: 4,
    sinonimi: ['aggiunzione', 'funtori aggiunti', 'aggiunto sinistro', 'aggiunto destro', 'costruzioni libere'],
    domanda: "Esistono coppie di traduzioni che sono quasi l'una l'inversa dell'altra?",
    esempio: "Da un insieme di lettere si costruisce il gruppo «libero» di tutte le parole. Da un gruppo si dimentica la struttura e resta un insieme. Le due operazioni sono aggiunte.",
    idea: "Due funtori sono aggiunti se vanno in direzioni opposte tra due categorie in modo bilanciato.\nLe frecce da un oggetto tradotto corrispondono alle frecce verso l'altro oggetto tradotto.\nNon sono inversi, ma sono il miglior compromesso possibile.\nCostruire qualcosa di «libero» e «dimenticare» la struttura sono l'esempio tipico.\nDaniel Kan introdusse il concetto nel 1958, e da allora lo si è trovato ovunque.",
    perche_fa_pensare: "Saunders Mac Lane scrisse che i funtori aggiunti compaiono dappertutto. Molte costruzioni matematiche ne sono esempi travestiti.",
    dove_si_usa: "In algebra, in topologia, in logica, nella programmazione funzionale.",
    prerequisiti: [
      { id: 'trasformazione-naturale', perche: "Si definisce con trasformazioni naturali." },
      { id: 'proprieta-universale', perche: "È equivalente a una famiglia di proprietà universali." }
    ],
    parenti: []
  },
  {
    id: 'monade', titolo: 'Monadi', tipo: 'concetto', area: 'categorie', argomento: 'costruzioni-universali', livello: 4,
    sinonimi: ['monade', 'monadi', 'effetti nei programmi', 'programmazione funzionale', 'Haskell'],
    domanda: "Come si combinano calcoli che possono fallire, aspettare o avere effetti collaterali?",
    esempio: "Un programma legge un dato, che potrebbe mancare, poi lo usa per un calcolo, che potrebbe fallire. Una monade gestisce questi «forse» in modo ordinato.",
    idea: "Una monade è un funtore da una categoria in sé stessa con due operazioni speciali.\nUna avvolge un valore semplice, l'altra appiattisce due strati di avvolgimento in uno.\nNasce da ogni coppia di funtori aggiunti.\nIn informatica, le monadi descrivono calcoli con effetti: errori, attese, stati, input e output.\nEugenio Moggi propose questo uso alla fine degli anni Ottanta.",
    perche_fa_pensare: "Un'idea astratta di teoria delle categorie è diventata uno strumento quotidiano per molti programmatori.",
    dove_si_usa: "Nei linguaggi di programmazione funzionale, nella verifica dei programmi, in algebra.",
    prerequisiti: [
      { id: 'aggiunzione', perche: "Ogni coppia di funtori aggiunti produce una monade." }
    ],
    parenti: [
      { id: 'lambda-calcolo', perche: "Le monadi danno significato agli effetti nei linguaggi basati sul lambda calcolo." }
    ]
  },

  // Categorie e fondamenti
  {
    id: 'topos', titolo: 'Topos', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-fondamenti', livello: 4,
    sinonimi: ['topos', 'topoi', 'teoria dei topos', 'logica interna', 'Lawvere'],
    domanda: "Può esistere un universo matematico con una logica diversa?",
    esempio: "Esistono «universi» matematici costruiti con le categorie in cui non vale il terzo escluso. In alcuni di essi ogni funzione dai reali ai reali è continua.",
    idea: "Un topos è una categoria che si comporta come la categoria degli insiemi.\nAl suo interno si può fare quasi tutta la matematica.\nMa la sua logica interna può essere diversa: spesso è la logica intuizionista.\nGrothendieck introdusse i topos in geometria negli anni Sessanta.\nWilliam Lawvere e Myles Tierney ne diedero una versione logica intorno al 1970.",
    perche_fa_pensare: "La logica classica non è l'unica possibile: ogni topos ha la sua. La matematica può vivere in molti universi diversi.",
    dove_si_usa: "In geometria algebrica, in logica, nei fondamenti della matematica, in informatica teorica.",
    prerequisiti: [
      { id: 'proprieta-universale', perche: "Si definisce con proprietà universali." },
      { id: 'logica-del-primo-ordine', perche: "Ogni topos ha una logica interna." }
    ],
    parenti: [
      { id: 'assiomi-zfc', perche: "È un'alternativa agli insiemi come fondamento." }
    ]
  },
  {
    id: 'teoria-omotopica-dei-tipi', titolo: 'Teoria omotopica dei tipi', tipo: 'concetto', area: 'categorie', argomento: 'categorie-e-fondamenti', livello: 4,
    sinonimi: ['teoria dei tipi', 'univalenza', 'Voevodsky', 'fondamenti univalenti', 'HoTT'],
    domanda: "Si può fondare la matematica su forme invece che su insiemi?",
    esempio: "In questa teoria, dire che due oggetti sono uguali vuol dire dare un cammino tra loro. Due cammini diversi sono due modi diversi di essere uguali.",
    idea: "La teoria omotopica dei tipi è un fondamento della matematica alternativo agli insiemi.\nUnisce la teoria dei tipi, usata in informatica, con l'omotopia, cioè la topologia dei cammini.\nOgni tipo si comporta come uno spazio, e le uguaglianze come cammini.\nL'assioma di univalenza dice che oggetti equivalenti si possono trattare come uguali.\nVladimir Voevodsky la promosse dal 2006, anche per verificare le dimostrazioni al computer.",
    perche_fa_pensare: "Voevodsky trovò errori in suoi lavori pubblicati e decise che servivano dimostrazioni controllate dal computer. Un dubbio personale ha generato un nuovo fondamento.",
    dove_si_usa: "Nella verifica formale delle dimostrazioni, in topologia, nei linguaggi di programmazione.",
    prerequisiti: [
      { id: 'lambda-calcolo', perche: "La teoria dei tipi viene dal lambda calcolo." },
      { id: 'gruppo-fondamentale', perche: "Usa le idee di omotopia e cammino." },
      { id: 'categoria', perche: "Si interpreta con categorie di dimensione superiore." }
    ],
    parenti: []
  }
]);
