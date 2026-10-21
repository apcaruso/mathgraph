/* Geometria differenziale */
Mappa.registra([
  // Curve e superfici
  {
    id: 'idea-di-curvatura', titolo: 'Cos\'è la curvatura', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 2,
    sinonimi: ['curvatura', 'quanto curva', 'raggio di curvatura', 'cerchio osculatore'],
    domanda: "Quanto è curva una curva?",
    esempio: "In auto, una curva stretta ti costringe a girare molto il volante; una curva larga, poco. Il volante misura la curvatura della strada.",
    idea: "La curvatura misura quanto rapidamente una linea cambia direzione.\nUna retta ha curvatura zero.\nUna circonferenza ha curvatura costante: tanto più grande quanto più è piccolo il raggio.\nIn ogni punto di una curva si trova il cerchio che la approssima meglio, detto cerchio osculatore.\nLa curvatura in quel punto è uno diviso il raggio di quel cerchio.",
    perche_fa_pensare: "Un'idea intuitiva, «quanto curva», diventa un numero preciso in ogni punto. È il primo passo verso la geometria degli spazi curvi.",
    dove_si_usa: "Nella progettazione di strade e ferrovie, nel disegno industriale, nella grafica.",
    prerequisiti: [
      { id: 'circonferenza-cerchio', perche: "La curvatura si confronta con quella di un cerchio." }
    ],
    parenti: []
  },
  {
    id: 'curvatura-di-una-curva', titolo: 'Curvatura di una curva', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 3,
    sinonimi: ['curvatura di una curva', 'curvatura e torsione', 'clotoide', 'formule di Frenet'],
    domanda: "Come si calcola la curvatura in ogni punto di una curva?",
    esempio: "Le curve delle autostrade non passano di colpo da rettilineo a cerchio. La curvatura cresce gradualmente, per non dare scossoni al volante.",
    idea: "Per una curva descritta con le coordinate, la curvatura si calcola con le derivate.\nServono le derivate prime, che danno la direzione, e le seconde, che dicono come cambia.\nNello spazio serve anche la torsione, che misura quanto la curva esce dal piano.\nCurvatura e torsione, insieme, determinano la forma della curva.\nLe curve di raccordo stradali, come la clotoide, hanno curvatura che cresce in modo uniforme.",
    perche_fa_pensare: "Due numeri in ogni punto bastano a ricostruire una curva intera nello spazio. La forma è codificata nel modo in cui cambia.",
    dove_si_usa: "Nella progettazione di strade, ferrovie e montagne russe, nella robotica, nella grafica.",
    formula: {
      latex: '\\kappa = \\frac{1}{R}',
      come_si_legge: "kappa uguale uno su erre.",
      a_parole: "La curvatura è l'inverso del raggio del cerchio che approssima meglio la curva."
    },
    prerequisiti: [
      { id: 'idea-di-curvatura', perche: "Rende precisa l'idea di curvatura." },
      { id: 'curve-parametriche', perche: "La curva è descritta con coordinate." },
      { id: 'derivata-seconda-convessita', perche: "Si calcola con le derivate seconde." }
    ],
    parenti: []
  },
  {
    id: 'superficie-regolare', titolo: 'Superfici nello spazio', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 3,
    sinonimi: ['superficie regolare', 'superficie liscia', 'piano tangente', 'superfici parametriche'],
    domanda: "Cosa vuol dire che una superficie è liscia?",
    esempio: "Il guscio di un uovo è liscio: in ogni punto ci puoi appoggiare un piano tangente. La punta di un cono no.",
    idea: "Una superficie regolare è una superficie nello spazio senza spigoli né punte.\nIn ogni punto ha un piano tangente ben definito.\nSi descrive con due coordinate, come latitudine e longitudine sulla Terra.\nLe [[derivate-parziali|derivate parziali]] rispetto alle due coordinate danno le direzioni del piano tangente.\nSu una superficie regolare si possono misurare lunghezze, angoli e aree.",
    perche_fa_pensare: "Una superficie liscia, vista abbastanza da vicino, sembra un piano. È l'idea che regge tutta la geometria differenziale.",
    dove_si_usa: "Nel disegno industriale, nella grafica 3D, nell'architettura, nella cartografia.",
    prerequisiti: [
      { id: 'superfici', perche: "Sono superfici con in più la liscezza." },
      { id: 'derivate-parziali', perche: "Il piano tangente si calcola con le derivate parziali." }
    ],
    parenti: []
  },
  {
    id: 'curvatura-di-gauss', titolo: 'Curvatura di Gauss', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 3,
    sinonimi: ['curvatura di Gauss', 'curvatura gaussiana', 'curvature principali', 'sella', 'curvatura negativa'],
    domanda: "Come si misura quanto è curva una superficie?",
    esempio: "Una palla è curva allo stesso modo in tutte le direzioni. Una sella da cavallo sale in una direzione e scende in quella perpendicolare.",
    idea: "In ogni punto di una superficie, le curve che la attraversano possono curvare in modi diversi.\nLe due curvature principali sono la massima e la minima tra queste.\nLa curvatura di Gauss è il loro prodotto.\nÈ positiva su una sfera, zero su un piano o un cilindro, negativa su una sella.\nCarl Friedrich Gauss la introdusse nel 1827.",
    perche_fa_pensare: "Un cilindro sembra curvo, ma per Gauss è piatto come un foglio. Infatti si può arrotolare un foglio in un cilindro senza strapparlo.",
    dove_si_usa: "In architettura, nella progettazione di carrozzerie, in cartografia, in biologia per le membrane.",
    formula: {
      latex: 'K = \\kappa_1 \\, \\kappa_2',
      come_si_legge: "kappa grande uguale kappa uno per kappa due.",
      a_parole: "La curvatura di Gauss è il prodotto delle due curvature principali."
    },
    prerequisiti: [
      { id: 'superficie-regolare', perche: "Si definisce sulle superfici regolari." },
      { id: 'curvatura-di-una-curva', perche: "Si costruisce dalle curvature di curve sulla superficie." }
    ],
    parenti: []
  },
  {
    id: 'theorema-egregium', titolo: 'Theorema egregium di Gauss', tipo: 'teorema', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 3,
    sinonimi: ['theorema egregium', 'teorema egregio', 'curvatura intrinseca', 'carte geografiche impossibili'],
    domanda: "Perché non esiste una carta geografica perfetta?",
    esempio: "Per mangiare una fetta di pizza senza che si afflosci, la pieghi a conca. Curvandola in una direzione, non può più piegarsi nell'altra.",
    idea: "Il theorema egregium dice che la curvatura di Gauss si può calcolare stando dentro la superficie.\nBastano misure di lunghezze sulla superficie stessa, senza guardarla dallo spazio.\nQuindi deformare una superficie senza allungarla non cambia la sua curvatura di Gauss.\nUna sfera ha curvatura positiva e un piano zero: nessuna carta piana può conservare tutte le distanze.\nGauss lo chiamò «egregio», cioè notevole, nel 1827.",
    perche_fa_pensare: "Una formica che vive su una superficie può scoprire che è curva senza mai uscirne. Anche noi possiamo chiederci se il nostro spazio è curvo.",
    dove_si_usa: "In cartografia, nell'ingegneria dei materiali, nel design di strutture sottili.",
    prerequisiti: [
      { id: 'curvatura-di-gauss', perche: "Riguarda la curvatura di Gauss." }
    ],
    parenti: [
      { id: 'mappe-conformi', perche: "Le carte possono conservare gli angoli, ma mai tutte le distanze." }
    ]
  },
  {
    id: 'geodetica', titolo: 'Geodetiche', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 3,
    sinonimi: ['geodetica', 'percorso più breve', 'cerchi massimi', 'linee rette su una superficie'],
    domanda: "Qual è la strada più breve su una superficie curva?",
    esempio: "Un volo da Milano a Los Angeles passa sopra la Groenlandia. Su una carta piana sembra una deviazione, ma sul globo è la strada più breve.",
    idea: "Una geodetica è una curva che, su una superficie, fa la parte della retta.\nTra due punti abbastanza vicini, è il cammino più breve.\nUna formica che cammina sempre dritta, senza girare né a destra né a sinistra, segue una geodetica.\nSulla sfera le geodetiche sono i cerchi massimi.\nIn relatività generale, i corpi in caduta libera seguono geodetiche dello spaziotempo.",
    perche_fa_pensare: "Per Einstein la gravità non è una forza: i pianeti vanno «dritti» in uno spaziotempo curvo. L'orbita è una geodetica.",
    dove_si_usa: "Nella navigazione aerea e marittima, in relatività, nella robotica, nella grafica.",
    prerequisiti: [
      { id: 'superficie-regolare', perche: "Sono curve su una superficie." },
      { id: 'distanza-tra-punti', perche: "Minimizzano la distanza." }
    ],
    parenti: [
      { id: 'calcolo-delle-variazioni', perche: "Si trovano come soluzioni di un problema del calcolo delle variazioni." }
    ]
  },
  {
    id: 'gauss-bonnet', titolo: 'Teorema di Gauss-Bonnet', tipo: 'teorema', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 4,
    sinonimi: ['Gauss-Bonnet', 'curvatura totale', 'geometria e topologia'],
    domanda: "Cosa lega la curvatura di una superficie al numero dei suoi buchi?",
    esempio: "Puoi schiacciare e deformare una palla come vuoi. La curvatura totale, sommata su tutta la superficie, resta sempre la stessa.",
    idea: "Il teorema di Gauss-Bonnet riguarda le superfici chiuse.\nDice che la curvatura di Gauss, sommata su tutta la superficie, dipende solo dalla sua forma topologica.\nPrecisamente, è uguale a 2 pi greco per la [[caratteristica-di-eulero|caratteristica di Eulero]].\nDeformare la superficie sposta la curvatura da una zona all'altra, ma non cambia il totale.\nPer un triangolo, spiega di quanto la somma degli angoli si discosta da 180 gradi.",
    perche_fa_pensare: "Una quantità geometrica, la curvatura, coincide con una quantità topologica, il numero di buchi. Il locale e il globale si toccano.",
    dove_si_usa: "In geometria, in topologia, in fisica, nella grafica 3D.",
    formula: {
      latex: '\\int_S K \\, dA = 2\\pi \\chi(S)',
      come_si_legge: "l'integrale su esse di kappa grande in de A uguale due pi greco per chi di esse.",
      a_parole: "La curvatura totale di una superficie chiusa è due pi greco per la sua caratteristica di Eulero."
    },
    prerequisiti: [
      { id: 'curvatura-di-gauss', perche: "Somma la curvatura di Gauss." },
      { id: 'caratteristica-di-eulero', perche: "Il risultato dipende dalla caratteristica di Eulero." },
      { id: 'integrale-multiplo', perche: "La curvatura si somma con un integrale sulla superficie." }
    ],
    parenti: [
      { id: 'somma-angoli-triangolo', perche: "Spiega perché gli angoli di un triangolo curvo non sommano 180 gradi." }
    ]
  },
  {
    id: 'superfici-minime', titolo: 'Superfici minime', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'curve-e-superfici', livello: 4,
    sinonimi: ['superfici minime', 'bolle di sapone', 'problema di Plateau', 'curvatura media nulla'],
    domanda: "Che forma prende una pellicola di sapone?",
    esempio: "Immergi un filo di ferro piegato nell'acqua saponata. La pellicola che si forma ha l'area più piccola possibile con quel bordo.",
    idea: "Una superficie minima ha, localmente, l'area più piccola tra tutte quelle con lo stesso bordo.\nIn ogni punto, le due curvature principali sono uguali e opposte.\nQuindi una superficie minima ha sempre la forma di una sella, o è piatta.\nLe pellicole di sapone sono superfici minime, perché la tensione superficiale riduce l'area.\nIl fisico Joseph Plateau studiò sperimentalmente queste forme nell'Ottocento.",
    perche_fa_pensare: "La natura risolve con una bolla di sapone problemi di ottimizzazione che i matematici hanno faticato a dimostrare.",
    dove_si_usa: "In architettura per coperture leggere, nella scienza dei materiali, in biologia.",
    prerequisiti: [
      { id: 'curvatura-di-gauss', perche: "Si caratterizzano con le curvature principali." },
      { id: 'calcolo-delle-variazioni', perche: "Minimizzano l'area, un problema del calcolo delle variazioni." }
    ],
    parenti: []
  },

  // Varietà e geometria riemanniana
  {
    id: 'varieta-differenziabile', titolo: 'Varietà differenziabili', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'varieta-e-metriche', livello: 4,
    sinonimi: ['varietà differenziabile', 'varietà liscia', 'atlante', 'carte compatibili'],
    domanda: "Come si fa analisi su uno spazio curvo?",
    esempio: "Sulla Terra puoi calcolare la velocità di una nave usando le carte nautiche locali. Passando da una carta all'altra, i calcoli devono restare coerenti.",
    idea: "Una varietà differenziabile è una [[varieta-topologica|varietà]] su cui si possono fare derivate.\nÈ coperta da carte locali, come un atlante.\nPassando da una carta all'altra, le coordinate cambiano in modo liscio.\nCosì si possono definire velocità, direzioni e funzioni derivabili su tutta la varietà.\nÈ l'ambiente naturale della fisica moderna.",
    perche_fa_pensare: "Non serve uno spazio esterno per fare analisi: basta che ogni pezzo somigli allo spazio ordinario. L'universo non ha bisogno di un «fuori».",
    dove_si_usa: "In relatività generale, in meccanica, in robotica, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'varieta-topologica', perche: "È una varietà con in più la possibilità di derivare." },
      { id: 'derivate-parziali', perche: "I cambi di carta si derivano." }
    ],
    parenti: [
      { id: 'teorema-funzione-implicita', perche: "Molte varietà nascono come insiemi definiti da equazioni, grazie a questo teorema." }
    ]
  },
  {
    id: 'spazio-tangente', titolo: 'Spazio tangente', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'varieta-e-metriche', livello: 4,
    sinonimi: ['spazio tangente', 'vettori tangenti', 'velocità su una varietà', 'fibrato tangente'],
    domanda: "Cosa sono le direzioni possibili in un punto di uno spazio curvo?",
    esempio: "In un punto della Terra puoi andare verso nord, verso est o in una combinazione. Le direzioni possibili formano un piano tangente al globo.",
    idea: "In ogni punto di una varietà, le possibili velocità formano uno [[spazio-vettoriale|spazio vettoriale]].\nSi chiama spazio tangente in quel punto.\nPer una superficie nello spazio, è il piano tangente.\nHa la stessa dimensione della varietà.\nGli spazi tangenti di tutti i punti, insieme, formano il fibrato tangente.",
    perche_fa_pensare: "Ogni punto di uno spazio curvo ha il suo piccolo spazio piatto di direzioni. La linearità vive dentro la curvatura.",
    dove_si_usa: "In meccanica, in relatività, in robotica, nell'ottimizzazione.",
    prerequisiti: [
      { id: 'varieta-differenziabile', perche: "Si definisce in ogni punto di una varietà." },
      { id: 'spazio-vettoriale', perche: "È uno spazio vettoriale." }
    ],
    parenti: []
  },
  {
    id: 'metrica-riemanniana', titolo: 'Metrica riemanniana', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'varieta-e-metriche', livello: 4,
    sinonimi: ['metrica riemanniana', 'geometria riemanniana', 'tensore metrico', 'Riemann'],
    domanda: "Come si misura dentro uno spazio curvo?",
    esempio: "Su una carta geografica, un centimetro all'equatore e uno vicino al polo corrispondono a distanze diverse. La metrica dice quanto vale ogni centimetro, punto per punto.",
    idea: "Una metrica riemanniana dà un [[prodotto-scalare|prodotto scalare]] in ogni spazio tangente.\nCosì si possono misurare lunghezze e angoli delle velocità in ogni punto.\nIntegrando, si misurano lunghezze di curve, aree e volumi.\nLa metrica può cambiare da punto a punto, e da essa dipende la curvatura.\nRiemann presentò l'idea nel 1854, in una lezione sulle ipotesi alla base della geometria.",
    perche_fa_pensare: "Sessant'anni dopo, Einstein usò proprio la geometria di Riemann per descrivere la gravità. La matematica aspettava la fisica.",
    dove_si_usa: "In relatività generale, nella navigazione, nell'apprendimento automatico, nell'analisi delle forme.",
    prerequisiti: [
      { id: 'spazio-tangente', perche: "Il prodotto scalare agisce sugli spazi tangenti." },
      { id: 'prodotto-scalare', perche: "È un prodotto scalare in ogni punto." },
      { id: 'geodetica', perche: "Con la metrica si definiscono le geodetiche." }
    ],
    parenti: []
  },
  {
    id: 'curvatura-riemanniana', titolo: 'Curvatura in più dimensioni', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'varieta-e-metriche', livello: 4,
    sinonimi: ['tensore di Riemann', 'curvatura di Ricci', 'curvatura sezionale', 'spazio curvo'],
    domanda: "Cosa vuol dire che lo spazio stesso è curvo?",
    esempio: "Trasporta una freccia lungo un triangolo su una sfera, tenendola sempre «parallela». Tornata al punto di partenza, è ruotata.",
    idea: "In più dimensioni, la curvatura non è più un solo numero in ogni punto.\nSi descrive con il tensore di Riemann, che misura la curvatura in ogni direzione piana.\nUn modo per vederla: una freccia trasportata lungo un giro chiuso torna ruotata.\nLa curvatura di Ricci è una media di queste curvature.\nNelle equazioni di Einstein, la curvatura di Ricci è legata alla materia e all'energia.",
    perche_fa_pensare: "Il fisico John Wheeler lo riassunse così. La materia dice allo spaziotempo come curvarsi, e lo spaziotempo dice alla materia come muoversi.",
    dove_si_usa: "In relatività generale, in cosmologia, in geometria, nell'analisi dei dati.",
    prerequisiti: [
      { id: 'metrica-riemanniana', perche: "La curvatura dipende dalla metrica." },
      { id: 'curvatura-di-gauss', perche: "Generalizza la curvatura di Gauss." }
    ],
    parenti: []
  },
  {
    id: 'flusso-di-ricci', titolo: 'Flusso di Ricci', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'varieta-e-metriche', livello: 4,
    sinonimi: ['flusso di Ricci', 'Hamilton', 'Perelman', 'deformazione della metrica'],
    domanda: "Si può far «evolvere» uno spazio curvo fino a renderlo uniforme?",
    esempio: "Il calore si diffonde in una stanza finché la temperatura è uguale ovunque. Il flusso di Ricci fa qualcosa di simile con la curvatura.",
    idea: "Il flusso di Ricci deforma una metrica nel tempo, secondo la sua curvatura di Ricci.\nLe zone più curve si appiattiscono, come il calore che si diffonde.\nRichard Hamilton lo introdusse nel 1982.\nA volte il flusso crea singolarità, punti in cui la curvatura esplode.\nGrigori Perelman capì come gestirle, e così dimostrò la congettura di Poincaré.",
    perche_fa_pensare: "Per capire la forma di uno spazio, lo si lascia evolvere e si guarda dove va. La dinamica rivela la geometria.",
    dove_si_usa: "In topologia, in geometria, nell'elaborazione delle immagini e delle forme 3D.",
    prerequisiti: [
      { id: 'curvatura-riemanniana', perche: "Evolve secondo la curvatura di Ricci." },
      { id: 'equazione-del-calore', perche: "Si comporta come un'equazione del calore per la metrica." }
    ],
    parenti: []
  },

  // Forme, gruppi di Lie e fibrati
  {
    id: 'forme-differenziali', titolo: 'Forme differenziali', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'simmetrie-continue-e-forme', livello: 4,
    sinonimi: ['forme differenziali', 'derivata esterna', 'Cartan', 'integrazione su varietà'],
    domanda: "Cosa si integra, esattamente, su una curva o una superficie?",
    esempio: "Il lavoro di una forza lungo un percorso e il flusso d'acqua attraverso una rete sono integrali. Le forme differenziali li descrivono con lo stesso linguaggio.",
    idea: "Una forma differenziale è un oggetto che si può integrare su curve, superfici o regioni di dimensione più alta.\nUna forma di grado uno si integra su curve, una di grado due su superfici, e così via.\nC'è un'operazione, la derivata esterna, che porta forme di un grado a forme del grado successivo.\nIl [[determinante]] misura come cambiano sotto un cambio di coordinate.\nÉlie Cartan sviluppò questo linguaggio all'inizio del Novecento.",
    perche_fa_pensare: "Gradiente, rotore e divergenza, che sembrano tre operazioni diverse, sono la stessa derivata esterna in gradi diversi.",
    dove_si_usa: "In fisica per l'elettromagnetismo, in meccanica, in topologia, nella grafica.",
    prerequisiti: [
      { id: 'varieta-differenziabile', perche: "Si definiscono sulle varietà." },
      { id: 'determinante', perche: "Si trasformano come determinanti." },
      { id: 'integrale-multiplo', perche: "Generalizzano gli integrali multipli." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-stokes-generale', titolo: 'Teorema di Stokes generale', tipo: 'teorema', area: 'geometria-differenziale', argomento: 'simmetrie-continue-e-forme', livello: 4,
    sinonimi: ['teorema di Stokes', 'Stokes generale', 'bordo e interno', 'teorema fondamentale generalizzato'],
    domanda: "Esiste un solo teorema dietro tutti i teoremi su bordo e interno?",
    esempio: "Il teorema fondamentale del calcolo, quelli di Green, Gauss e Stokes sono tutti casi di un'unica formula di una riga.",
    idea: "Il teorema di Stokes generale lega l'integrale su una regione a quello sul suo bordo.\nIntegrare la derivata esterna di una forma sulla regione dà lo stesso che integrare la forma sul bordo.\nIn una dimensione, è il [[teorema-fondamentale-del-calcolo|teorema fondamentale del calcolo]].\nIn due e tre dimensioni, contiene i teoremi di Green, Gauss e Stokes.\nVale su varietà di qualsiasi dimensione.",
    perche_fa_pensare: "Una sola formula raccoglie secoli di teoremi. È un esempio perfetto di come l'astrazione semplifica.",
    dove_si_usa: "In fisica, in elettromagnetismo, in topologia, in geometria.",
    formula: {
      latex: '\\int_M d\\omega = \\int_{\\partial M} \\omega',
      come_si_legge: "l'integrale su emme di de omega uguale l'integrale sul bordo di emme di omega.",
      a_parole: "Sommare la variazione all'interno equivale a sommare il valore sul bordo."
    },
    prerequisiti: [
      { id: 'forme-differenziali', perche: "È un teorema sulle forme differenziali." },
      { id: 'teoremi-calcolo-vettoriale', perche: "Generalizza i teoremi di Green, Gauss e Stokes." },
      { id: 'teorema-fondamentale-del-calcolo', perche: "Generalizza il teorema fondamentale del calcolo." }
    ],
    parenti: []
  },
  {
    id: 'gruppi-di-lie', titolo: 'Gruppi di Lie', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'simmetrie-continue-e-forme', livello: 4,
    sinonimi: ['gruppi di Lie', 'simmetrie continue', 'Sophus Lie', 'gruppo delle rotazioni', 'algebre di Lie'],
    domanda: "Come si descrivono simmetrie che variano con continuità?",
    esempio: "Un quadrato ha solo 8 simmetrie. Un cerchio ne ha infinite: si può ruotare di qualsiasi angolo. Le rotazioni del cerchio formano un gruppo di Lie.",
    idea: "Un gruppo di Lie è un [[gruppo]] che è anche una varietà liscia.\nI suoi elementi variano con continuità, come gli angoli di rotazione.\nLe rotazioni dello spazio formano un gruppo di Lie a tre dimensioni.\nVicino all'identità, il gruppo è descritto da uno spazio vettoriale, la sua algebra di Lie.\nSophus Lie li introdusse nell'Ottocento per studiare le simmetrie delle equazioni differenziali.",
    perche_fa_pensare: "Il modello standard della fisica delle particelle è costruito su pochi gruppi di Lie. Le particelle sono figlie della simmetria.",
    dove_si_usa: "In fisica delle particelle, in robotica, nella grafica 3D, nelle equazioni differenziali.",
    prerequisiti: [
      { id: 'gruppo', perche: "È un gruppo." },
      { id: 'varieta-differenziabile', perche: "È anche una varietà liscia." }
    ],
    parenti: [
      { id: 'quaternioni', perche: "I quaternioni di lunghezza uno formano un gruppo di Lie legato alle rotazioni." }
    ]
  },
  {
    id: 'fibrati', titolo: 'Fibrati e connessioni', tipo: 'concetto', area: 'geometria-differenziale', argomento: 'simmetrie-continue-e-forme', livello: 4,
    sinonimi: ['fibrato', 'fibrati', 'connessione', 'teorie di gauge', 'trasporto parallelo'],
    domanda: "Come si attacca uno spazio a ogni punto di un altro spazio?",
    esempio: "Un nastro di Möbius si ottiene attaccando un segmento a ogni punto di una circonferenza, con una torsione. Un cilindro si ottiene senza torsione.",
    idea: "Un fibrato attacca a ogni punto di uno spazio una copia di un altro spazio, detta fibra.\nDa vicino sembra un semplice prodotto, ma globalmente può essere attorcigliato.\nIl nastro di Möbius e il cilindro sono due fibrati diversi sulla circonferenza.\nUna connessione dice come confrontare le fibre di punti vicini.\nNella fisica moderna, le forze fondamentali sono descritte da connessioni su fibrati.",
    perche_fa_pensare: "Fisici e matematici hanno costruito la stessa teoria in modo indipendente, con nomi diversi. Lo hanno scoperto solo negli anni Settanta.",
    dove_si_usa: "In fisica delle particelle, in relatività, in robotica, in topologia.",
    prerequisiti: [
      { id: 'spazio-tangente', perche: "Gli spazi tangenti formano il primo esempio di fibrato." }
    ],
    parenti: [
      { id: 'nastro-di-moebius', perche: "Il nastro di Möbius è il fibrato attorcigliato più semplice." }
    ]
  }
]);
