/* Ottimizzazione */
Mappa.registra([
  // Obiettivi e vincoli
  {
    id: 'problema-di-ottimizzazione', titolo: 'Obiettivo e vincoli', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ottimo-e-vincoli', livello: 1,
    sinonimi: ['ottimizzazione', 'problema di ottimizzazione', 'funzione obiettivo', 'vincoli', 'massimizzare', 'minimizzare'],
    domanda: "Come si sceglie il meglio tra infinite possibilità?",
    esempio: "Vuoi costruire un recinto rettangolare con 40 metri di rete. Quali misure danno l'area più grande? Il quadrato di 10 per 10.",
    idea: "Un problema di ottimizzazione cerca la scelta migliore tra molte possibili.\nC'è un obiettivo da rendere massimo o minimo, come un guadagno, un costo o un tempo.\nCi sono dei vincoli, cioè regole che le scelte devono rispettare.\nLe scelte possibili sono descritte da una o più variabili.\nQuasi ogni decisione pratica si può scrivere in questa forma.",
    perche_fa_pensare: "Scrivere chiaramente cosa si vuole e cosa non si può fare è già metà della soluzione. Spesso il difficile è proprio questo.",
    dove_si_usa: "In logistica, in economia, in ingegneria, nell'apprendimento automatico, in medicina.",
    prerequisiti: [
      { id: 'variabile', perche: "Le scelte possibili sono descritte da variabili." }
    ],
    parenti: []
  },
  {
    id: 'ottimizzazione-convessa', titolo: 'Ottimizzazione convessa', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ottimo-e-vincoli', livello: 3,
    sinonimi: ['convessità', 'funzione convessa', 'insieme convesso', 'minimo globale'],
    domanda: "Quando un minimo locale è anche il migliore in assoluto?",
    esempio: "In una valle a forma di ciotola, scendendo sempre si arriva al punto più basso. In una zona di montagna, si può restare bloccati in una conca.",
    idea: "Un problema è convesso se la funzione da minimizzare è convessa e i vincoli formano un insieme convesso.\nUna funzione convessa ha il grafico a forma di ciotola, senza conche secondarie.\nIn un problema convesso, ogni minimo locale è anche il minimo globale.\nCosì i metodi che scendono sempre trovano la soluzione migliore.\nPer questo i problemi convessi si risolvono bene anche con milioni di variabili.",
    perche_fa_pensare: "La linea di confine tra problemi facili e difficili, in ottimizzazione, non è tra lineare e non lineare. È tra convesso e non convesso.",
    dove_si_usa: "In finanza per i portafogli, nell'elaborazione dei segnali, nel controllo, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'derivata-seconda-convessita', perche: "La convessità si riconosce dalla derivata seconda." },
      { id: 'problema-di-ottimizzazione', perche: "È un tipo di problema di ottimizzazione." }
    ],
    parenti: []
  },
  {
    id: 'discesa-del-gradiente', titolo: 'Discesa del gradiente', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ottimo-e-vincoli', livello: 3,
    sinonimi: ['discesa del gradiente', 'gradient descent', 'passo di apprendimento', 'addestramento delle reti neurali'],
    domanda: "Come si scende da una montagna nella nebbia?",
    esempio: "Nella nebbia non vedi la valle. Senti con i piedi dove il terreno scende più ripido, fai un passo in quella direzione e ripeti.",
    idea: "La discesa del gradiente è un metodo per trovare il minimo di una funzione.\nIl [[gradiente]] indica la direzione di salita più ripida.\nSi fa un piccolo passo nella direzione opposta, e si ripete.\nLa lunghezza del passo va scelta con cura: troppo corta è lenta, troppo lunga fa saltare oltre il minimo.\nNei problemi non convessi può fermarsi in un minimo locale.",
    perche_fa_pensare: "Le intelligenze artificiali moderne imparano con questo metodo semplicissimo, ripetuto miliardi di volte. La forza sta nella ripetizione.",
    dove_si_usa: "Nell'addestramento delle reti neurali, in statistica, in ingegneria, in economia.",
    formula: {
      latex: 'x_{k+1} = x_k - \\eta\\, \\nabla f(x_k)',
      come_si_legge: "x con k più uno uguale x con k meno eta per il gradiente di effe in x con k.",
      a_parole: "Il nuovo punto si ottiene facendo un passo, lungo eta, nella direzione opposta al gradiente."
    },
    prerequisiti: [
      { id: 'gradiente', perche: "Si segue il gradiente al contrario." },
      { id: 'problema-di-ottimizzazione', perche: "Risolve problemi di minimo." }
    ],
    parenti: []
  },
  {
    id: 'moltiplicatori-di-lagrange', titolo: 'Moltiplicatori di Lagrange', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ottimo-e-vincoli', livello: 3,
    sinonimi: ['Lagrange', 'moltiplicatori di Lagrange', 'ottimizzazione vincolata', 'lagrangiana'],
    domanda: "Come si trova il massimo restando su un sentiero obbligato?",
    esempio: "Cammini su un sentiero di montagna e cerchi il punto più alto del sentiero. Lì il sentiero corre lungo una curva di livello, senza salire né scendere.",
    idea: "I moltiplicatori di Lagrange servono a ottimizzare una funzione rispettando un vincolo scritto come equazione.\nNel punto ottimo, il gradiente della funzione è parallelo al gradiente del vincolo.\nIl fattore di proporzionalità si chiama moltiplicatore di Lagrange.\nCosì un problema con vincolo diventa un sistema di equazioni senza vincoli.\nIl moltiplicatore ha spesso un significato concreto, come il valore di una risorsa in più.",
    perche_fa_pensare: "Un'idea geometrica, due frecce parallele, risolve problemi di economia e di fisica. Il moltiplicatore diventa un prezzo.",
    dove_si_usa: "In economia, in fisica, in ingegneria, in statistica, nell'apprendimento automatico.",
    formula: {
      latex: '\\nabla f = \\lambda\\, \\nabla g',
      come_si_legge: "il gradiente di effe è uguale a lambda per il gradiente di gi.",
      a_parole: "Nel punto ottimo, la direzione di crescita dell'obiettivo è perpendicolare al vincolo."
    },
    prerequisiti: [
      { id: 'gradiente', perche: "Confronta i gradienti di obiettivo e vincolo." },
      { id: 'problema-di-ottimizzazione', perche: "Risolve problemi con vincoli." }
    ],
    parenti: []
  },

  // Programmazione lineare
  {
    id: 'programmazione-lineare', titolo: 'Programmazione lineare', tipo: 'concetto', area: 'ottimizzazione', argomento: 'programmazione-lineare-e-flussi', livello: 2,
    sinonimi: ['programmazione lineare', 'ottimizzazione lineare', 'regione ammissibile', 'Kantorovič', 'Dantzig'],
    domanda: "Come si distribuiscono risorse limitate?",
    esempio: "Un panificio fa pane e focacce con farina e ore di lavoro limitate. Quante unità di ciascuno conviene fare per guadagnare di più?",
    idea: "Nella programmazione lineare obiettivo e vincoli sono tutti di primo grado.\nI vincoli sono [[disequazioni]] e delimitano una regione a forma di poligono, o di poliedro.\nL'ottimo si trova sempre in uno dei vertici di questa regione.\nIl metodo fu sviluppato da Kantorovič nel 1939 e da Dantzig nel 1947.\n«Programmazione» qui significa pianificazione, non scrivere programmi per computer.",
    perche_fa_pensare: "Un'idea semplice, guardare solo i vertici, ha cambiato l'economia e la logistica del Novecento.",
    dove_si_usa: "Nella logistica, nella produzione industriale, nei trasporti, nelle diete, nelle compagnie aeree.",
    prerequisiti: [
      { id: 'problema-di-ottimizzazione', perche: "È un tipo di problema di ottimizzazione." },
      { id: 'disequazioni', perche: "I vincoli sono disequazioni." },
      { id: 'equazione-della-retta', perche: "Ogni vincolo è delimitato da una retta, o da un piano." }
    ],
    parenti: []
  },
  {
    id: 'metodo-del-simplesso', titolo: 'Metodo del simplesso', tipo: 'concetto', area: 'ottimizzazione', argomento: 'programmazione-lineare-e-flussi', livello: 3,
    sinonimi: ['simplesso', 'metodo del simplesso', 'algoritmo del simplesso', 'punti interni'],
    domanda: "Come si trova il vertice migliore tra milioni di vertici?",
    esempio: "Un'azienda con migliaia di prodotti e vincoli ha una regione con un numero astronomico di vertici. Il simplesso ne visita solo una piccola parte.",
    idea: "Il metodo del simplesso risolve i problemi di programmazione lineare.\nParte da un vertice della regione ammissibile.\nSi sposta lungo uno spigolo verso un vertice vicino migliore, e ripete.\nQuando nessun vertice vicino è migliore, ha trovato l'ottimo.\nIn alcuni casi costruiti apposta è lentissimo, ma in pratica è quasi sempre velocissimo.",
    perche_fa_pensare: "Un algoritmo che nel caso peggiore è lentissimo funziona benissimo nella realtà. La teoria dei casi peggiori non racconta tutto.",
    dove_si_usa: "Nei programmi di pianificazione industriale, nei trasporti, nelle reti elettriche.",
    prerequisiti: [
      { id: 'programmazione-lineare', perche: "Risolve problemi di programmazione lineare." },
      { id: 'sistemi-lineari', perche: "Ogni passo risolve un sistema lineare." }
    ],
    parenti: []
  },
  {
    id: 'dualita-lineare', titolo: 'Dualità', tipo: 'teorema', area: 'ottimizzazione', argomento: 'programmazione-lineare-e-flussi', livello: 3,
    sinonimi: ['dualità', 'problema duale', 'prezzi ombra', 'dualità forte'],
    domanda: "Ogni problema di massimo ha un problema di minimo gemello?",
    esempio: "Un panificio cerca la produzione che rende di più. Il problema gemello chiede quanto valgono farina e ore di lavoro. I due problemi danno lo stesso numero.",
    idea: "Ogni problema di programmazione lineare ha un problema duale, costruito con gli stessi numeri.\nSe il primo cerca un massimo, il duale cerca un minimo.\nIl valore del duale è sempre un limite per il valore del problema originale.\nIl teorema di dualità dice che, all'ottimo, i due valori coincidono.\nLe variabili del duale si interpretano come prezzi delle risorse, detti prezzi ombra.",
    perche_fa_pensare: "Ogni problema ha un'ombra che lo guarda dall'altra parte. Risolvere l'una significa risolvere anche l'altro.",
    dove_si_usa: "In economia, nella logistica, nella teoria dei giochi, negli algoritmi di ottimizzazione.",
    prerequisiti: [
      { id: 'programmazione-lineare', perche: "Riguarda i problemi di programmazione lineare." }
    ],
    parenti: [
      { id: 'teorema-minimax', perche: "Il teorema minimax dei giochi è un caso della dualità lineare." }
    ]
  },
  {
    id: 'flusso-massimo', titolo: 'Flusso massimo e taglio minimo', tipo: 'teorema', area: 'ottimizzazione', argomento: 'programmazione-lineare-e-flussi', livello: 3,
    sinonimi: ['flusso massimo', 'taglio minimo', 'Ford-Fulkerson', 'reti di flusso'],
    domanda: "Quanta acqua può passare in una rete di tubi?",
    esempio: "Una rete di strade porta auto da una città a un'altra. Il traffico massimo è uguale alla capacità del «collo di bottiglia» più stretto che separa le due città.",
    idea: "Una rete ha una sorgente, una destinazione e collegamenti con capacità massime.\nIl problema del flusso massimo cerca quanta merce può passare dalla sorgente alla destinazione.\nUn taglio è un insieme di collegamenti che, eliminati, separano le due estremità.\nIl teorema dice che il flusso massimo è uguale alla capacità del taglio più piccolo.\nLester Ford e Delbert Fulkerson lo dimostrarono nel 1956, insieme a un algoritmo per trovarlo.",
    perche_fa_pensare: "La capacità di una rete è decisa dal suo punto più debole. Trovare il collo di bottiglia è trovare la soluzione.",
    dove_si_usa: "Nelle reti di trasporto, nelle telecomunicazioni, nell'elaborazione delle immagini, negli abbinamenti.",
    prerequisiti: [
      { id: 'grafo', perche: "La rete è un grafo." },
      { id: 'programmazione-lineare', perche: "È un problema di programmazione lineare." }
    ],
    parenti: [
      { id: 'dualita-lineare', perche: "Flusso massimo e taglio minimo sono problemi duali." }
    ]
  },

  // Ricerca operativa
  {
    id: 'commesso-viaggiatore', titolo: 'Problema del commesso viaggiatore', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ricerca-operativa', livello: 3,
    sinonimi: ['commesso viaggiatore', 'TSP', 'giro più breve', 'percorso ottimo'],
    domanda: "Qual è il giro più breve che passa per tutte le città?",
    esempio: "Un corriere deve consegnare 20 pacchi e tornare in magazzino. I giri possibili sono più di cento milioni di miliardi.",
    idea: "Il problema chiede il giro più breve che visita una volta ogni città e torna al punto di partenza.\nI giri possibili sono tanti quanti le [[permutazioni]] delle città, e il loro numero esplode.\nÈ un problema NP-difficile: non si conosce un metodo veloce che funzioni sempre.\nEppure, con metodi intelligenti, si sono risolti in modo esatto casi con decine di migliaia di città.\nPer i problemi pratici si usano spesso soluzioni approssimate ma molto buone.",
    perche_fa_pensare: "Un problema che un bambino capisce resiste ai computer più potenti. La difficoltà non dipende dalla complessità dell'enunciato.",
    dove_si_usa: "Nelle consegne, nella produzione di circuiti, nel sequenziamento del DNA, nei telescopi.",
    prerequisiti: [
      { id: 'grafo', perche: "Le città e le strade formano un grafo." },
      { id: 'problema-di-ottimizzazione', perche: "È un problema di ottimizzazione." }
    ],
    parenti: [
      { id: 'np-completezza', perche: "La sua versione decisionale è un problema NP-completo." }
    ]
  },
  {
    id: 'problema-dello-zaino', titolo: 'Problema dello zaino', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ricerca-operativa', livello: 3,
    sinonimi: ['zaino', 'knapsack', 'problema dello zaino', 'ottimizzazione intera'],
    domanda: "Cosa metti nello zaino, se il peso è limitato?",
    esempio: "Parti per un'escursione e lo zaino regge 10 chili. Ogni oggetto ha un peso e un'utilità: quale combinazione è la più utile?",
    idea: "Il problema dello zaino sceglie oggetti con peso e valore, senza superare un peso massimo.\nL'obiettivo è il valore totale più alto possibile.\nGli oggetti non si possono dividere: si prendono interi o niente.\nQuesto vincolo lo rende molto più difficile della programmazione lineare.\nSe i pesi sono numeri interi non troppo grandi, si risolve bene con la programmazione dinamica.",
    perche_fa_pensare: "Poter dividere gli oggetti rende il problema facile; non poterlo fare lo rende difficile. Una piccola regola cambia tutto.",
    dove_si_usa: "Negli investimenti, nel carico di container e camion, nella crittografia, nell'allocazione di risorse.",
    prerequisiti: [
      { id: 'programmazione-lineare', perche: "È una versione con variabili intere della programmazione lineare." }
    ],
    parenti: [
      { id: 'programmazione-dinamica', perche: "Si risolve spesso con la programmazione dinamica." }
    ]
  },
  {
    id: 'programmazione-dinamica', titolo: 'Programmazione dinamica', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ricerca-operativa', livello: 3,
    sinonimi: ['programmazione dinamica', 'Bellman', 'principio di ottimalità', 'memorizzazione dei sottoproblemi'],
    domanda: "Come si risolve un grande problema riutilizzando le soluzioni dei piccoli?",
    esempio: "Cerchi il percorso più breve da Milano a Napoli. Ti basta conoscere i percorsi più brevi da Milano alle città vicine a Napoli.",
    idea: "La programmazione dinamica divide un problema in sottoproblemi più piccoli che si ripetono.\nRisolve ciascun sottoproblema una sola volta e ne conserva la soluzione.\nPoi costruisce la soluzione del problema grande combinando quelle dei piccoli.\nSi basa sul principio che i pezzi di una soluzione ottima sono a loro volta ottimi.\nRichard Bellman la sviluppò negli anni Cinquanta.",
    perche_fa_pensare: "Bellman raccontò di aver scelto il nome «programmazione dinamica» perché suonava importante e nessuno poteva obiettare. Anche i nomi hanno una strategia.",
    dove_si_usa: "Nei navigatori, nel confronto di sequenze di DNA, nel riconoscimento vocale, in economia.",
    prerequisiti: [
      { id: 'definizione-ricorsiva', perche: "La soluzione si definisce in modo ricorsivo." },
      { id: 'problema-di-ottimizzazione', perche: "Risolve problemi di ottimizzazione." },
      { id: 'algoritmo', perche: "È una tecnica per costruire algoritmi." }
    ],
    parenti: [
      { id: 'cammino-minimo', perche: "Molti algoritmi di cammino minimo sono programmazione dinamica." }
    ]
  },
  {
    id: 'euristiche', titolo: 'Euristiche e metaeuristiche', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ricerca-operativa', livello: 3,
    sinonimi: ['euristiche', 'algoritmi genetici', 'ricottura simulata', 'colonie di formiche', 'soluzioni approssimate'],
    domanda: "Cosa si fa quando la soluzione perfetta è troppo difficile da trovare?",
    esempio: "Le formiche trovano il percorso più breve verso il cibo lasciando tracce chimiche. Alcuni algoritmi imitano questo comportamento per pianificare consegne.",
    idea: "Un'euristica è un metodo che trova in fretta una buona soluzione, senza garantire che sia la migliore.\nLe metaeuristiche sono strategie generali, applicabili a molti problemi diversi.\nGli algoritmi genetici imitano l'evoluzione: combinano e modificano soluzioni, tenendo le migliori.\nLa ricottura simulata imita il raffreddamento lento dei metalli, accettando a volte passi peggiori.\nSono indispensabili per i problemi troppo grandi per i metodi esatti.",
    perche_fa_pensare: "Spesso una soluzione buona oggi vale più di una perfetta tra mille anni. La saggezza sta anche nell'accontentarsi bene.",
    dove_si_usa: "Nella logistica, negli orari di scuole e ospedali, nella progettazione di circuiti e antenne.",
    prerequisiti: [
      { id: 'commesso-viaggiatore', perche: "Il commesso viaggiatore è il banco di prova classico." }
    ],
    parenti: [
      { id: 'algoritmi-probabilistici', perche: "Molte metaeuristiche usano scelte casuali." }
    ]
  },
  {
    id: 'teoria-delle-code', titolo: 'Teoria delle code', tipo: 'concetto', area: 'ottimizzazione', argomento: 'ricerca-operativa', livello: 3,
    sinonimi: ['code', 'teoria delle code', 'legge di Little', 'tempi di attesa', 'Erlang'],
    domanda: "Perché la coda alla cassa si allunga così in fretta?",
    esempio: "Una cassa occupata al 90 per cento del tempo fa aspettare molto più di una occupata all'80 per cento. Vicino al limite, piccoli aumenti producono code enormi.",
    idea: "La teoria delle code studia persone o oggetti che arrivano a caso e aspettano un servizio.\nUsa la probabilità per prevedere lunghezze delle code e tempi di attesa.\nGli arrivi casuali si descrivono spesso con la [[distribuzione-di-poisson|distribuzione di Poisson]].\nLa legge di Little dice che il numero medio in coda è l'arrivo medio per l'attesa media.\nAgner Erlang fondò la teoria nel 1909, studiando le centrali telefoniche di Copenaghen.",
    perche_fa_pensare: "Un sistema sempre pieno al cento per cento non è efficiente: è al collasso. Un po' di capacità libera serve ad assorbire il caso.",
    dove_si_usa: "Nei supermercati, nei pronto soccorso, nei call center, nelle reti di computer, nel traffico.",
    formula: {
      latex: 'L = \\lambda\\, W',
      come_si_legge: "elle uguale lambda per vu doppia.",
      a_parole: "Il numero medio di persone in coda è uguale alla frequenza degli arrivi per il tempo medio di attesa."
    },
    prerequisiti: [
      { id: 'distribuzione-di-poisson', perche: "Gli arrivi casuali seguono spesso Poisson." },
      { id: 'valore-atteso', perche: "Si calcolano code e attese medie." }
    ],
    parenti: [
      { id: 'catene-di-markov', perche: "Molti modelli di code sono catene di Markov." }
    ]
  },

  // Calcolo delle variazioni
  {
    id: 'problema-isoperimetrico', titolo: 'Problema isoperimetrico', tipo: 'teorema', area: 'ottimizzazione', argomento: 'curve-ottimali', livello: 2,
    sinonimi: ['isoperimetrico', 'regina Didone', 'area massima', 'disuguaglianza isoperimetrica'],
    domanda: "Quale figura racchiude l'area più grande con un perimetro dato?",
    esempio: "Secondo la leggenda, la regina Didone poteva avere tanta terra quanta ne racchiudeva una pelle di bue. La tagliò a strisce e formò un grande semicerchio sulla costa.",
    idea: "Tra tutte le figure piane con lo stesso perimetro, il cerchio ha l'area più grande.\nAllo stesso modo, nello spazio, la sfera racchiude il volume più grande a parità di superficie.\nGli antichi Greci lo sapevano, ma non avevano una dimostrazione completa.\nLe prime dimostrazioni davano per scontato che una figura migliore esistesse.\nUna dimostrazione rigorosa arrivò solo nell'Ottocento.",
    perche_fa_pensare: "Le bolle di sapone sono sferiche e i gatti si arrotolano in palla per tenersi caldi. La natura conosce questo teorema.",
    dove_si_usa: "In architettura, nell'imballaggio, in fisica, in biologia.",
    formula: {
      latex: '4\\pi A \\le L^2',
      come_si_legge: "quattro pi greco per A è minore o uguale a elle al quadrato.",
      a_parole: "L'area racchiusa da una curva lunga L non supera mai quella del cerchio, l'unico caso di uguaglianza."
    },
    prerequisiti: [
      { id: 'area-e-perimetro', perche: "Confronta area e perimetro." },
      { id: 'circonferenza-cerchio', perche: "La soluzione è il cerchio." },
      { id: 'problema-di-ottimizzazione', perche: "È un problema di ottimizzazione." }
    ],
    parenti: []
  },
  {
    id: 'brachistocrona', titolo: 'La curva di discesa più rapida', tipo: 'concetto', area: 'ottimizzazione', argomento: 'curve-ottimali', livello: 3,
    sinonimi: ['brachistocrona', 'cicloide', 'Bernoulli', 'discesa più veloce'],
    domanda: "Su quale scivolo una pallina arriva prima in fondo?",
    esempio: "Una pallina su una rampa dritta arriva dopo una pallina su una rampa curva, più ripida all'inizio. Anche se la strada curva è più lunga.",
    idea: "Un corpo scende per gravità da un punto a un altro, più in basso.\nIl problema chiede su quale curva ci mette meno tempo.\nLa risposta non è la retta, ma un arco di cicloide.\nLa cicloide è la curva disegnata da un punto di una ruota che rotola.\nJohann Bernoulli lanciò la sfida nel 1696; la risolsero, tra gli altri, Newton e Leibniz.\nIl problema diede origine al calcolo delle variazioni.",
    perche_fa_pensare: "La strada più corta non è la più veloce. Conviene prendere velocità subito, anche allungando il percorso.",
    dove_si_usa: "Nella progettazione di scivoli e piste, in fisica, come esempio storico del calcolo delle variazioni.",
    prerequisiti: [
      { id: 'massimi-minimi', perche: "Si cerca un minimo, ma tra le curve invece che tra i numeri." },
      { id: 'integrale-di-riemann', perche: "Il tempo di discesa si calcola con un integrale." }
    ],
    parenti: []
  },
  {
    id: 'calcolo-delle-variazioni', titolo: 'Calcolo delle variazioni', tipo: 'concetto', area: 'ottimizzazione', argomento: 'curve-ottimali', livello: 4,
    sinonimi: ['calcolo delle variazioni', 'equazione di Eulero-Lagrange', 'principio di minima azione', 'funzionale'],
    domanda: "Quale curva è la migliore?",
    esempio: "La luce, passando dall'aria all'acqua, si piega. Segue il percorso che richiede il tempo minimo, come se «sapesse» quale strada scegliere.",
    idea: "Il calcolo delle variazioni cerca funzioni o curve che rendono minima una certa quantità.\nLa quantità è spesso un integrale, come una lunghezza, un tempo o un'energia.\nLa curva ottima deve soddisfare un'equazione differenziale, detta equazione di Eulero-Lagrange.\nEulero e Lagrange la trovarono a metà Settecento.\nMolte leggi della fisica si possono scrivere come principi di minimo di questo tipo.",
    perche_fa_pensare: "La natura sembra scegliere sempre la via più economica. È un principio fisico profondo o solo un modo elegante di scrivere le leggi?",
    dove_si_usa: "In fisica, in ingegneria strutturale, nell'elaborazione delle immagini, nel controllo ottimo.",
    formula: {
      latex: '\\frac{\\partial L}{\\partial y} - \\frac{d}{dx}\\frac{\\partial L}{\\partial y\'} = 0',
      come_si_legge: "derivata parziale di elle rispetto a y, meno un secondo termine, uguale zero. Il secondo termine è la derivata rispetto a x della derivata parziale di elle rispetto a y primo.",
      a_parole: "La curva migliore bilancia, punto per punto, il contributo della sua posizione e quello della sua pendenza."
    },
    prerequisiti: [
      { id: 'brachistocrona', perche: "La brachistocrona è il problema da cui è nato." },
      { id: 'derivate-parziali', perche: "L'equazione di Eulero-Lagrange usa derivate parziali." },
      { id: 'integrale-di-riemann', perche: "La quantità da minimizzare è un integrale." }
    ],
    parenti: [
      { id: 'problema-isoperimetrico', perche: "Il problema isoperimetrico è un problema del calcolo delle variazioni." }
    ]
  }
]);
