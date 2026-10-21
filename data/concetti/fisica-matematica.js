/* Fisica matematica */
Mappa.registra([
  // Modelli
  {
    id: 'modello-matematico', titolo: 'Modello matematico', tipo: 'concetto', area: 'fisica-matematica', argomento: 'modelli', livello: 1,
    sinonimi: ['modello', 'modellizzazione', 'semplificazione', 'simulazione', 'tutti i modelli sono sbagliati'],
    domanda: "Cosa vuol dire descrivere il mondo con un'equazione?",
    esempio: "Una cartina stradale non mostra alberi né case, eppure ti porta a destinazione. Un modello matematico fa lo stesso con un fenomeno.",
    idea: "Un modello matematico descrive un fenomeno reale con numeri, funzioni ed equazioni.\nTiene solo gli aspetti importanti e trascura il resto.\nPermette di fare previsioni e di confrontarle con i dati.\nSe le previsioni sbagliano, il modello si corregge o si cambia.\nNessun modello è la realtà: è uno strumento per capirla.",
    perche_fa_pensare: "Lo statistico George Box scrisse che tutti i modelli sono sbagliati, ma alcuni sono utili. La domanda giusta non è se un modello è vero, ma se serve.",
    dove_si_usa: "In fisica, in economia, in medicina, in ecologia, nelle previsioni del tempo.",
    prerequisiti: [
      { id: 'modellizzare-con-equazioni', perche: "Si parte traducendo un problema in equazioni." }
    ],
    parenti: []
  },
  {
    id: 'analisi-dimensionale', titolo: 'Analisi dimensionale', tipo: 'concetto', area: 'fisica-matematica', argomento: 'modelli', livello: 2,
    sinonimi: ['analisi dimensionale', 'dimensioni fisiche', 'unità di misura', 'leggi di scala'],
    domanda: "Si può indovinare una legge fisica solo guardando le unità di misura?",
    esempio: "Il periodo di un pendolo può dipendere solo dalla lunghezza e dalla gravità. L'unica combinazione che dà un tempo è la radice della lunghezza divisa per la gravità.",
    idea: "Ogni grandezza fisica ha delle dimensioni, come lunghezza, tempo o massa.\nIn un'equazione corretta, i due lati devono avere le stesse dimensioni.\nQuesto vincolo, da solo, permette spesso di indovinare la forma di una legge.\nNon dà i numeri puri, come 2 pi greco, ma dà le proporzioni.\nÈ anche un controllo rapido per scoprire errori nei calcoli.",
    perche_fa_pensare: "Nel 1950 il fisico G. I. Taylor stimò la potenza di una bomba atomica solo da alcune foto, con l'analisi dimensionale.",
    dove_si_usa: "In fisica, in ingegneria, in biologia per le leggi di scala, nei controlli dei calcoli.",
    formula: {
      latex: 'T \\propto \\sqrt{\\frac{L}{g}}',
      come_si_legge: "ti è proporzionale alla radice di elle fratto gi.",
      a_parole: "Il periodo del pendolo cresce con la radice della sua lunghezza."
    },
    prerequisiti: [
      { id: 'unita-di-misura', perche: "Lavora con le unità di misura." },
      { id: 'potenze', perche: "Le dimensioni si combinano con potenze." }
    ],
    parenti: []
  },
  {
    id: 'determinismo', titolo: 'Determinismo', tipo: 'concetto', area: 'fisica-matematica', argomento: 'modelli', livello: 2,
    sinonimi: ['determinismo', 'demone di Laplace', 'prevedibilità', 'causalità'],
    domanda: "Se conoscessimo tutto del presente, conosceremmo il futuro?",
    esempio: "Laplace immaginò un'intelligenza che conosce posizione e velocità di ogni particella. Per lei, il futuro sarebbe scritto come il passato.",
    idea: "Una teoria è deterministica se lo stato presente determina in modo unico tutti gli stati futuri.\nLa meccanica di Newton è deterministica, grazie al teorema di esistenza e unicità.\nNel 1814 Laplace descrisse un'intelligenza capace di calcolare tutto il futuro.\nIl caos mostra che determinismo non vuol dire prevedibilità.\nLa meccanica quantistica mette in discussione il determinismo stesso, almeno per le misure.",
    perche_fa_pensare: "Se tutto è determinato, che spazio resta per le scelte? La matematica non risponde, ma rende la domanda più precisa.",
    dove_si_usa: "In fisica, in filosofia della scienza, nella discussione sul libero arbitrio.",
    prerequisiti: [
      { id: 'leggi-di-newton', perche: "La meccanica di Newton è l'esempio classico." },
      { id: 'equazione-differenziale', perche: "Le leggi deterministiche sono equazioni differenziali." }
    ],
    parenti: [
      { id: 'effetto-farfalla', perche: "L'effetto farfalla mostra che un sistema deterministico può essere imprevedibile." },
      { id: 'meccanica-quantistica', perche: "La meccanica quantistica introduce probabilità irriducibili." }
    ]
  },
  {
    id: 'irragionevole-efficacia', titolo: 'L\'irragionevole efficacia della matematica', tipo: 'concetto', area: 'fisica-matematica', argomento: 'modelli', livello: 2,
    sinonimi: ['irragionevole efficacia', 'Wigner', 'matematica e realtà', 'perché la matematica funziona'],
    domanda: "Perché la matematica descrive così bene il mondo?",
    esempio: "I numeri complessi furono inventati per risolvere equazioni. Secoli dopo si scoprì che sono indispensabili per descrivere gli atomi.",
    idea: "Nel 1960 il fisico Eugene Wigner scrisse un saggio sull'«irragionevole efficacia della matematica».\nNotava che teorie nate per pura curiosità si rivelano perfette per la fisica, a volte secoli dopo.\nLa geometria di Riemann per la relatività e i gruppi per le particelle sono esempi famosi.\nNon c'è accordo su come spiegarlo.\nAlcuni pensano che la matematica sia scoperta, altri che sia il nostro modo di guardare il mondo.",
    perche_fa_pensare: "Galileo scrisse che il libro della natura è scritto in lingua matematica. Ma chi ha scelto quella lingua?",
    dove_si_usa: "In filosofia della scienza e nelle riflessioni sul rapporto tra matematica e realtà.",
    prerequisiti: [
      { id: 'modello-matematico', perche: "Riguarda il successo dei modelli matematici." }
    ],
    parenti: []
  },

  // Meccanica
  {
    id: 'leggi-di-newton', titolo: 'Le leggi del moto di Newton', tipo: 'concetto', area: 'fisica-matematica', argomento: 'meccanica', livello: 2,
    sinonimi: ['Newton', 'leggi di Newton', 'forza uguale massa per accelerazione', 'inerzia', 'azione e reazione'],
    domanda: "Perché le cose si muovono come si muovono?",
    esempio: "Spingi un carrello vuoto e uno pieno con la stessa forza. Quello vuoto accelera di più: la forza si divide per la massa.",
    idea: "Le leggi di Newton descrivono come le forze cambiano il moto dei corpi.\nUn corpo senza forze resta fermo o si muove in linea retta a velocità costante.\nLa forza è uguale alla massa per l'accelerazione, cioè per la [[derivata]] della velocità.\nA ogni azione corrisponde una reazione uguale e contraria.\nNewton le pubblicò nel 1687, insieme alla legge di gravitazione.",
    perche_fa_pensare: "Con tre leggi e il calcolo si spiegano le maree, le orbite e la caduta di una mela. Fu la prima grande teoria matematica della natura.",
    dove_si_usa: "In ingegneria, nell'astronautica, nei videogiochi, nello sport, nella progettazione di veicoli.",
    formula: {
      latex: '\\vec{F} = m\\, \\vec{a}',
      come_si_legge: "effe vettore uguale emme per a vettore.",
      a_parole: "La forza è uguale alla massa per l'accelerazione."
    },
    prerequisiti: [
      { id: 'vettore', perche: "Forze e accelerazioni sono vettori." },
      { id: 'derivata', perche: "L'accelerazione è una derivata." }
    ],
    parenti: []
  },
  {
    id: 'energia-e-conservazione', titolo: 'Energia e leggi di conservazione', tipo: 'concetto', area: 'fisica-matematica', argomento: 'meccanica', livello: 2,
    sinonimi: ['energia', 'conservazione dell\'energia', 'energia cinetica', 'energia potenziale', 'quantità di moto'],
    domanda: "Cosa resta uguale mentre tutto cambia?",
    esempio: "Un'altalena sale e scende. In alto è quasi ferma ma è lontana da terra; in basso è veloce. La somma delle due energie resta la stessa.",
    idea: "Una grandezza si conserva se resta uguale mentre il sistema evolve.\nL'energia cinetica dipende dalla velocità, quella potenziale dalla posizione.\nIn un sistema senza attriti, la loro somma resta costante.\nSi conservano anche la quantità di moto e il momento angolare, in condizioni adatte.\nLe leggi di conservazione permettono di risolvere problemi senza seguire il moto istante per istante.",
    perche_fa_pensare: "Trovare ciò che non cambia è spesso il modo più rapido per capire ciò che cambia. È una strategia che attraversa tutta la scienza.",
    dove_si_usa: "In ingegneria, nella produzione di energia, in astronomia, nella progettazione di macchine.",
    formula: {
      latex: 'E = \\tfrac{1}{2} m v^2 + V(x) = \\text{costante}',
      come_si_legge: "e uguale un mezzo emme vu quadro più vu grande di x, uguale a una costante.",
      a_parole: "Energia di movimento più energia di posizione resta costante."
    },
    prerequisiti: [
      { id: 'leggi-di-newton', perche: "Si ricava dalle leggi di Newton." },
      { id: 'integrale-di-riemann', perche: "Il lavoro di una forza è un integrale." }
    ],
    parenti: []
  },
  {
    id: 'gravitazione-e-orbite', titolo: 'Gravitazione e leggi di Keplero', tipo: 'concetto', area: 'fisica-matematica', argomento: 'meccanica', livello: 3,
    sinonimi: ['Keplero', 'gravitazione universale', 'orbite ellittiche', 'leggi di Keplero', 'Newton'],
    domanda: "Perché i pianeti si muovono su ellissi?",
    esempio: "Marte non gira intorno al Sole su un cerchio, ma su un'ellisse leggermente schiacciata. Keplero lo scoprì studiando le osservazioni di Tycho Brahe.",
    idea: "Keplero trovò tre leggi sul moto dei pianeti, all'inizio del Seicento.\nLe orbite sono [[ellisse|ellissi]], con il Sole in uno dei fuochi.\nUn pianeta va più veloce quando è vicino al Sole e più lento quando è lontano.\nIl quadrato del periodo è proporzionale al cubo della dimensione dell'orbita.\nNewton dimostrò che le tre leggi seguono dalla gravitazione, una forza che cala con il quadrato della distanza.",
    perche_fa_pensare: "Le coniche studiate dai Greci per curiosità geometrica descrivono il cielo. Apollonio non poteva saperlo.",
    dove_si_usa: "In astronomia, nella navigazione spaziale, nel posizionamento dei satelliti.",
    formula: {
      latex: 'T^2 \\propto a^3',
      come_si_legge: "ti al quadrato è proporzionale ad a al cubo.",
      a_parole: "Il quadrato del periodo di un pianeta cresce come il cubo della dimensione della sua orbita."
    },
    prerequisiti: [
      { id: 'leggi-di-newton', perche: "Le orbite si ricavano dalle leggi di Newton." },
      { id: 'ellisse', perche: "Le orbite sono ellissi." },
      { id: 'equazione-differenziale', perche: "Il moto è descritto da equazioni differenziali." }
    ],
    parenti: []
  },
  {
    id: 'principio-di-minima-azione', titolo: 'Principio di minima azione', tipo: 'concetto', area: 'fisica-matematica', argomento: 'meccanica', livello: 4,
    sinonimi: ['minima azione', 'azione stazionaria', 'lagrangiana', 'principio di Hamilton', 'principio di Fermat'],
    domanda: "La natura sceglie sempre la strada più economica?",
    esempio: "La luce, passando dall'aria all'acqua, si piega. Segue il percorso che richiede il tempo minimo, come aveva intuito Fermat.",
    idea: "Il principio di minima azione dice che un sistema segue il percorso che rende stazionaria una certa quantità, l'azione.\nL'azione è un integrale nel tempo della differenza tra energia cinetica e potenziale.\nDal principio, con il [[calcolo-delle-variazioni|calcolo delle variazioni]], si ricavano le leggi del moto.\nIl nome è un po' impreciso: in realtà è più sottile, l'azione può essere stazionaria senza essere minima.\nEulero, Lagrange e Hamilton lo resero uno strumento potentissimo.",
    perche_fa_pensare: "Invece di dire come si muove un corpo istante per istante, si dice quale percorso globale sceglie. Due modi diversi di vedere la stessa natura.",
    dove_si_usa: "In meccanica, in ottica, in relatività, in meccanica quantistica, nella teoria dei campi.",
    prerequisiti: [
      { id: 'calcolo-delle-variazioni', perche: "Si usa il calcolo delle variazioni." },
      { id: 'energia-e-conservazione', perche: "L'azione è costruita con le energie." }
    ],
    parenti: []
  },
  {
    id: 'meccanica-hamiltoniana', titolo: 'Meccanica hamiltoniana', tipo: 'concetto', area: 'fisica-matematica', argomento: 'meccanica', livello: 4,
    sinonimi: ['Hamilton', 'hamiltoniana', 'equazioni di Hamilton', 'geometria simplettica'],
    domanda: "Si può riscrivere la meccanica in un linguaggio più simmetrico?",
    esempio: "Un pendolo si descrive con la sua posizione e la sua quantità di moto. Le equazioni di Hamilton trattano queste due grandezze in modo quasi simmetrico.",
    idea: "La meccanica hamiltoniana riscrive le leggi del moto usando posizioni e quantità di moto.\nTutto dipende da una sola funzione, l'hamiltoniana, che di solito è l'energia totale.\nLe equazioni del moto hanno una forma molto simmetrica.\nL'evoluzione conserva il volume nello spazio delle fasi: è il teorema di Liouville.\nWilliam Rowan Hamilton la formulò negli anni Trenta dell'Ottocento.",
    perche_fa_pensare: "Una riformulazione elegante della vecchia meccanica è diventata, un secolo dopo, la porta d'ingresso alla meccanica quantistica.",
    dove_si_usa: "In meccanica celeste, in meccanica quantistica, nella fisica dei plasmi, nei metodi numerici.",
    prerequisiti: [
      { id: 'principio-di-minima-azione', perche: "Si ricava dalla formulazione con l'azione." },
      { id: 'spazio-delle-fasi', perche: "Lo stato è un punto nello spazio delle fasi." }
    ],
    parenti: []
  },

  // Simmetrie e campi
  {
    id: 'teorema-di-noether', titolo: 'Teorema di Noether', tipo: 'teorema', area: 'fisica-matematica', argomento: 'simmetrie-e-campi', livello: 4,
    sinonimi: ['Noether', 'Emmy Noether', 'simmetrie e conservazione', 'teorema di Noether'],
    domanda: "Perché alcune quantità non cambiano mai?",
    esempio: "Le leggi della fisica sono uguali oggi e domani. Da questa sola simmetria nel tempo segue che l'energia si conserva.",
    idea: "Il teorema di Noether collega le simmetrie delle leggi fisiche alle grandezze che si conservano.\nSe le leggi non cambiano nel tempo, si conserva l'energia.\nSe non cambiano spostandosi nello spazio, si conserva la quantità di moto.\nSe non cambiano ruotando, si conserva il momento angolare.\nEmmy Noether lo dimostrò nel 1918, ed è considerato uno dei teoremi più belli della fisica.",
    perche_fa_pensare: "Noether non poteva avere un posto ufficiale all'università perché era una donna. Oggi il suo teorema è alla base di tutta la fisica delle particelle.",
    dove_si_usa: "In fisica delle particelle, in meccanica, in relatività, nella teoria dei campi.",
    prerequisiti: [
      { id: 'principio-di-minima-azione', perche: "Il teorema si applica a sistemi descritti da un'azione." },
      { id: 'simmetria', perche: "Parte dalle simmetrie delle leggi." },
      { id: 'energia-e-conservazione', perche: "Spiega le leggi di conservazione." }
    ],
    parenti: [
      { id: 'gruppi-di-lie', perche: "Le simmetrie continue formano gruppi di Lie." }
    ]
  },
  {
    id: 'equazioni-di-maxwell', titolo: 'Equazioni di Maxwell', tipo: 'concetto', area: 'fisica-matematica', argomento: 'simmetrie-e-campi', livello: 3,
    sinonimi: ['Maxwell', 'elettromagnetismo', 'campo elettrico', 'campo magnetico', 'onde elettromagnetiche'],
    domanda: "Cosa hanno in comune elettricità, magnetismo e luce?",
    esempio: "Ogni volta che usi il telefono o accendi la radio, sfrutti onde previste da quattro equazioni scritte nell'Ottocento.",
    idea: "Le equazioni di Maxwell descrivono il campo elettrico e il campo magnetico.\nDicono come i campi nascono dalle cariche e dalle correnti, e come si generano a vicenda.\nUsano gli strumenti dei [[teoremi-calcolo-vettoriale|teoremi di Gauss e Stokes]].\nDa esse Maxwell ricavò un'equazione delle onde, con la velocità della luce.\nCapì così che la luce è un'onda elettromagnetica; Hertz confermò le onde nel 1887.",
    perche_fa_pensare: "Da poche equazioni sulla carta è uscita la previsione di onde invisibili. Senza di esse non esisterebbero radio, televisione e wifi.",
    dove_si_usa: "Nelle telecomunicazioni, nei motori elettrici, nell'ottica, nella progettazione di antenne.",
    prerequisiti: [
      { id: 'teoremi-calcolo-vettoriale', perche: "Sono scritte con il calcolo vettoriale." },
      { id: 'equazione-delle-onde', perche: "Da esse segue l'equazione delle onde." }
    ],
    parenti: []
  },
  {
    id: 'teorie-di-gauge', titolo: 'Simmetrie di gauge', tipo: 'concetto', area: 'fisica-matematica', argomento: 'simmetrie-e-campi', livello: 4,
    sinonimi: ['gauge', 'teorie di gauge', 'simmetria locale', 'modello standard'],
    domanda: "Una simmetria può creare una forza?",
    esempio: "L'elettromagnetismo nasce chiedendo che una certa simmetria valga punto per punto, in modo indipendente. Il campo elettromagnetico serve a mantenere la coerenza tra i punti.",
    idea: "Una simmetria di gauge è una simmetria che si può applicare in modo diverso in ogni punto dello spazio.\nPerché le leggi restino valide, serve un campo che collega i punti vicini.\nQuel campo è una forza: nel caso più semplice, l'elettromagnetismo.\nMatematicamente, è una connessione su un [[fibrati|fibrato]].\nIl modello standard della fisica delle particelle è una teoria di gauge.",
    perche_fa_pensare: "Le forze fondamentali della natura sembrano nascere da simmetrie. La geometria, ancora una volta, detta la fisica.",
    dove_si_usa: "In fisica delle particelle, nella fisica della materia condensata, in geometria.",
    prerequisiti: [
      { id: 'teorema-di-noether', perche: "Ogni simmetria porta una legge di conservazione." },
      { id: 'fibrati', perche: "Si descrivono con connessioni su fibrati." },
      { id: 'gruppi-di-lie', perche: "Le simmetrie formano gruppi di Lie." }
    ],
    parenti: []
  },
  {
    id: 'yang-mills', titolo: 'Teoria di Yang-Mills e gap di massa', tipo: 'problema-aperto', area: 'fisica-matematica', argomento: 'simmetrie-e-campi', livello: 4,
    sinonimi: ['Yang-Mills', 'gap di massa', 'cromodinamica quantistica', 'problemi del millennio'],
    domanda: "Le teorie della fisica delle particelle hanno una base matematica solida?",
    esempio: "Le previsioni della forza nucleare forte concordano con gli esperimenti. Ma nessuno ha ancora dimostrato che la teoria quantistica che le produce esista in modo rigoroso.",
    idea: "Le teorie di Yang-Mills sono teorie di gauge con gruppi di simmetria non commutativi.\nChen Ning Yang e Robert Mills le proposero nel 1954.\nDescrivono le forze nucleari, e funzionano benissimo negli esperimenti.\nMa la versione quantistica non ha ancora una costruzione matematica rigorosa.\nIl problema del millennio chiede di costruirla e di dimostrare che le particelle più leggere hanno massa positiva.",
    perche_fa_pensare: "La fisica usa con successo teorie che la matematica non sa ancora giustificare. Il rigore insegue l'intuizione.",
    dove_si_usa: "In fisica delle particelle e in fisica matematica.",
    prerequisiti: [
      { id: 'teorie-di-gauge', perche: "È una teoria di gauge." }
    ],
    parenti: []
  },

  // Spazio e tempo
  {
    id: 'relativita-ristretta', titolo: 'Relatività ristretta e spaziotempo', tipo: 'concetto', area: 'fisica-matematica', argomento: 'spazio-e-tempo', livello: 3,
    sinonimi: ['relatività ristretta', 'Einstein', 'spaziotempo', 'E uguale m c quadro', 'dilatazione del tempo'],
    domanda: "Il tempo passa allo stesso modo per tutti?",
    esempio: "Gli orologi dei satelliti GPS vanno a un ritmo leggermente diverso da quelli a terra. Senza correggere questa differenza, il navigatore sbaglierebbe di chilometri ogni giorno.",
    idea: "Nel 1905 Einstein partì da due principi.\nLe leggi della fisica e la velocità della luce sono uguali per chi si muove a velocità costante.\nNe segue che tempo e lunghezze dipendono da chi li misura.\nUn orologio in movimento rallenta, e un oggetto in movimento si accorcia.\nHermann Minkowski unì spazio e tempo in un'unica geometria a quattro dimensioni, lo spaziotempo.\nMassa ed energia sono due forme della stessa cosa.",
    perche_fa_pensare: "Il tempo assoluto, che sembrava evidente a tutti, era un'illusione dovuta alle basse velocità. Il buon senso è una teoria locale.",
    dove_si_usa: "Nel GPS, negli acceleratori di particelle, nell'energia nucleare, in astrofisica.",
    formula: {
      latex: 'E = m c^2',
      come_si_legge: "e uguale emme ci al quadrato.",
      a_parole: "Una massa equivale a un'energia enorme, pari alla massa per il quadrato della velocità della luce."
    },
    prerequisiti: [
      { id: 'leggi-di-newton', perche: "Corregge la meccanica di Newton ad alte velocità." },
      { id: 'spazi-a-n-dimensioni', perche: "Lo spaziotempo ha quattro dimensioni." }
    ],
    parenti: [
      { id: 'geometria-iperbolica', perche: "Le velocità relativistiche si combinano secondo una geometria iperbolica." },
      { id: 'equazioni-di-maxwell', perche: "La relatività nacque per rendere coerenti meccanica ed elettromagnetismo." }
    ]
  },
  {
    id: 'relativita-generale', titolo: 'Relatività generale: la gravità come curvatura', tipo: 'concetto', area: 'fisica-matematica', argomento: 'spazio-e-tempo', livello: 4,
    sinonimi: ['relatività generale', 'Einstein', 'buchi neri', 'onde gravitazionali', 'curvatura dello spaziotempo'],
    domanda: "Che forma ha l'universo?",
    esempio: "Una palla pesante su un telo elastico lo incurva, e le biglie vicine rotolano verso di lei. È solo un'immagine, ma rende l'idea della gravità di Einstein.",
    idea: "Nella relatività generale, la gravità non è una forza ma la [[curvatura-riemanniana|curvatura]] dello spaziotempo.\nMassa ed energia curvano lo spaziotempo.\nI corpi in caduta libera seguono le geodetiche dello spaziotempo curvo.\nEinstein pubblicò la teoria nel 1915, usando la geometria di Riemann.\nHa previsto buchi neri, espansione dell'universo e onde gravitazionali, osservate direttamente nel 2015.",
    perche_fa_pensare: "La geometria dello spazio non è fissata in anticipo: dipende da ciò che contiene. Lo spazio stesso diventa un oggetto fisico.",
    dove_si_usa: "Nel GPS, in astrofisica, in cosmologia, nello studio dei buchi neri.",
    formula: {
      latex: 'G_{\\mu\\nu} = \\frac{8\\pi G}{c^4}\\, T_{\\mu\\nu}',
      come_si_legge: "gi grande mu nu uguale otto pi greco gi fratto ci alla quarta, per ti mu nu.",
      a_parole: "La curvatura dello spaziotempo, a sinistra, è proporzionale a materia ed energia, a destra."
    },
    prerequisiti: [
      { id: 'relativita-ristretta', perche: "Estende la relatività ristretta alla gravità." },
      { id: 'curvatura-riemanniana', perche: "La gravità è curvatura." },
      { id: 'gravitazione-e-orbite', perche: "Corregge la gravitazione di Newton." }
    ],
    parenti: []
  },

  // Probabilità nella fisica
  {
    id: 'meccanica-statistica', titolo: 'Entropia e meccanica statistica', tipo: 'concetto', area: 'fisica-matematica', argomento: 'caso-nella-fisica', livello: 3,
    sinonimi: ['meccanica statistica', 'entropia', 'Boltzmann', 'secondo principio della termodinamica', 'microstati'],
    domanda: "Perché il caffè e il latte si mescolano ma non si separano mai da soli?",
    esempio: "Ci sono moltissimi modi di disporre le molecole di caffellatte mescolato, e pochissimi con latte e caffè separati. Il caso porta quasi sempre al mescolato.",
    idea: "La meccanica statistica spiega il comportamento della materia partendo da miliardi di molecole.\nNon segue ogni molecola, ma usa la probabilità.\nL'entropia conta quanti stati microscopici corrispondono allo stesso stato visibile.\nI sistemi evolvono verso stati con entropia più alta, perché sono enormemente più probabili.\nLudwig Boltzmann sviluppò queste idee nell'Ottocento; la sua formula è incisa sulla sua tomba a Vienna.",
    perche_fa_pensare: "La freccia del tempo, che distingue passato e futuro, nasce dalla probabilità. Le leggi delle singole molecole, invece, non distinguono i due versi.",
    dove_si_usa: "In termodinamica, in chimica, nella scienza dei materiali, nella teoria dell'informazione.",
    formula: {
      latex: 'S = k \\ln W',
      come_si_legge: "esse uguale kappa per logaritmo naturale di vu doppia.",
      a_parole: "L'entropia è proporzionale al logaritmo del numero di modi microscopici di realizzare uno stato."
    },
    prerequisiti: [
      { id: 'energia-e-conservazione', perche: "L'energia totale è fissata." },
      { id: 'probabilita-classica', perche: "Si contano gli stati ugualmente probabili." },
      { id: 'logaritmo', perche: "L'entropia usa il logaritmo." }
    ],
    parenti: [
      { id: 'entropia-di-shannon', perche: "L'entropia di Shannon ha la stessa forma matematica di quella di Boltzmann." }
    ]
  },
  {
    id: 'meccanica-quantistica', titolo: 'Meccanica quantistica: stati come vettori', tipo: 'concetto', area: 'fisica-matematica', argomento: 'caso-nella-fisica', livello: 4,
    sinonimi: ['meccanica quantistica', 'quanti', 'sovrapposizione', 'regola di Born', 'funzione d\'onda'],
    domanda: "Perché la fisica ha bisogno del caso?",
    esempio: "Un elettrone non ha una posizione precisa prima di essere misurato. La teoria dice solo con quale probabilità lo troverai in ogni punto.",
    idea: "Nella meccanica quantistica, lo stato di un sistema è un vettore in uno [[spazio-di-hilbert|spazio di Hilbert]].\nLe grandezze misurabili sono operatori, e i risultati possibili sono il loro spettro.\nStati diversi si possono sommare: è la sovrapposizione.\nLa teoria non prevede il risultato di una singola misura, ma solo le probabilità.\nLe probabilità si ottengono dal quadrato della lunghezza di certe componenti del vettore.",
    perche_fa_pensare: "Einstein non accettava che la natura fosse probabilistica. Gli esperimenti, finora, gli hanno dato torto.",
    dove_si_usa: "Nei transistor e nei computer, nei laser, nella risonanza magnetica, nella chimica.",
    prerequisiti: [
      { id: 'spazio-di-hilbert', perche: "Gli stati sono vettori in uno spazio di Hilbert." },
      { id: 'operatore-lineare', perche: "Le grandezze misurabili sono operatori." },
      { id: 'numeri-complessi', perche: "Le componenti degli stati sono numeri complessi." },
      { id: 'probabilita-classica', perche: "I risultati delle misure sono probabilistici." }
    ],
    parenti: []
  },
  {
    id: 'equazione-di-schrodinger', titolo: 'Equazione di Schrödinger', tipo: 'concetto', area: 'fisica-matematica', argomento: 'caso-nella-fisica', livello: 4,
    sinonimi: ['Schrödinger', 'equazione di Schrödinger', 'funzione d\'onda', 'livelli di energia'],
    domanda: "Come cambia nel tempo uno stato quantistico?",
    esempio: "Le righe colorate della luce emessa da un gas di idrogeno corrispondono ai livelli di energia previsti da questa equazione.",
    idea: "L'equazione di Schrödinger dice come evolve nel tempo lo stato di un sistema quantistico.\nÈ un'[[equazioni-alle-derivate-parziali|equazione alle derivate parziali]] con numeri complessi.\nTra una misura e l'altra, l'evoluzione è deterministica e continua.\nLe sue soluzioni stazionarie danno i livelli di energia possibili, ad esempio di un atomo.\nErwin Schrödinger la pubblicò nel 1926.",
    perche_fa_pensare: "L'equazione è deterministica, ma le misure no. Come si conciliano le due cose è ancora discusso.",
    dove_si_usa: "In chimica quantistica, nella scienza dei materiali, nell'elettronica, nella progettazione di farmaci.",
    formula: {
      latex: 'i\\hbar\\, \\frac{\\partial \\psi}{\\partial t} = \\hat{H}\\, \\psi',
      come_si_legge: "i acca tagliato per la derivata di psi rispetto a t uguale acca cappuccio applicato a psi.",
      a_parole: "La variazione nel tempo dello stato è data dall'operatore dell'energia applicato allo stato."
    },
    prerequisiti: [
      { id: 'meccanica-quantistica', perche: "Descrive l'evoluzione degli stati quantistici." },
      { id: 'equazioni-alle-derivate-parziali', perche: "È un'equazione alle derivate parziali." }
    ],
    parenti: []
  },
  {
    id: 'principio-di-indeterminazione', titolo: 'Principio di indeterminazione', tipo: 'teorema', area: 'fisica-matematica', argomento: 'caso-nella-fisica', livello: 4,
    sinonimi: ['indeterminazione', 'Heisenberg', 'principio di Heisenberg', 'incertezza'],
    domanda: "Si possono conoscere insieme la posizione e la velocità di una particella?",
    esempio: "Una nota musicale molto breve, come un colpo secco, non ha un'altezza precisa. Una nota con un'altezza precisa deve durare a lungo.",
    idea: "Il principio di indeterminazione dice che posizione e quantità di moto non possono essere entrambe precise.\nPiù una è definita, più l'altra è sparpagliata.\nNon dipende dalla goffaggine degli strumenti, ma dalla struttura stessa della teoria.\nMatematicamente è lo stesso fatto della [[trasformata-di-fourier|trasformata di Fourier]]: un segnale breve ha molte frequenze.\nWerner Heisenberg lo formulò nel 1927.",
    perche_fa_pensare: "Un limite alla conoscenza che nasce dalla matematica, non dagli strumenti. La natura stessa non ha valori precisi per tutto.",
    dove_si_usa: "In fisica quantistica, nell'elaborazione dei segnali, nella microscopia.",
    formula: {
      latex: '\\Delta x \\, \\Delta p \\ge \\frac{\\hbar}{2}',
      come_si_legge: "delta x per delta p maggiore o uguale ad acca tagliato mezzi.",
      a_parole: "L'incertezza sulla posizione per quella sulla quantità di moto non scende mai sotto un valore fisso."
    },
    prerequisiti: [
      { id: 'meccanica-quantistica', perche: "È un teorema della meccanica quantistica." },
      { id: 'trasformata-di-fourier', perche: "Matematicamente segue dalle proprietà della trasformata di Fourier." }
    ],
    parenti: []
  }
]);
