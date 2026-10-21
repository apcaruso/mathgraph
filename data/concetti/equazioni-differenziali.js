/* Equazioni differenziali */
Mappa.registra([
  // Equazioni differenziali ordinarie
  {
    id: 'equazione-differenziale', titolo: 'Equazione differenziale', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'equazioni-ordinarie', livello: 2,
    sinonimi: ['equazioni differenziali', 'equazione differenziale ordinaria', 'modello dinamico', 'legge del cambiamento'],
    domanda: "Si può prevedere il futuro sapendo solo come cambia il presente?",
    esempio: "Una tazza di tè si raffredda tanto più in fretta quanto più è calda rispetto alla stanza. Questa regola, scritta con le derivate, è un'equazione differenziale.",
    idea: "Un'equazione differenziale lega una funzione sconosciuta alle sue [[derivata|derivate]].\nDice come cambia una grandezza, invece di dire quanto vale.\nRisolverla vuol dire trovare la funzione che rispetta quella regola di cambiamento.\nDi solito servono anche le condizioni iniziali, cioè da dove si parte.\nQuasi tutte le leggi della fisica sono equazioni differenziali.",
    perche_fa_pensare: "La natura non dice dove saranno le cose, ma come si muovono istante per istante. Il futuro va ricostruito dal cambiamento.",
    dove_si_usa: "In fisica, in biologia, in economia, in medicina, in ingegneria.",
    prerequisiti: [
      { id: 'derivata', perche: "L'equazione contiene derivate." },
      { id: 'equazione', perche: "È un'equazione in cui l'incognita è una funzione." }
    ],
    parenti: []
  },
  {
    id: 'crescita-esponenziale', titolo: 'Crescita e decadimento esponenziale', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'equazioni-ordinarie', livello: 2,
    sinonimi: ['crescita esponenziale', 'decadimento radioattivo', 'tempo di dimezzamento', 'raddoppio', 'interesse composto'],
    domanda: "Cosa succede quando una cosa cresce in proporzione a sé stessa?",
    esempio: "Il carbonio 14 nei resti di un organismo si dimezza circa ogni 5700 anni. Misurando quanto ne resta, si data un reperto.",
    idea: "Una grandezza cresce in modo esponenziale se la sua velocità di crescita è proporzionale al suo valore.\nPiù ce n'è, più in fretta aumenta.\nLa soluzione è una [[funzione-esponenziale|funzione esponenziale]].\nC'è un tempo fisso di raddoppio, o di dimezzamento se la grandezza cala.\nLa crescita esponenziale sembra lenta all'inizio e poi diventa esplosiva.",
    perche_fa_pensare: "La mente umana ragiona in modo lineare e sottovaluta sempre la crescita esponenziale. Lo si è visto nelle epidemie.",
    dove_si_usa: "Nella datazione con il carbonio, nelle epidemie, negli interessi bancari, nella crescita dei batteri.",
    formula: {
      latex: "y' = k\\,y \\quad\\Longrightarrow\\quad y(t) = y_0\\, e^{k t}",
      come_si_legge: "y primo uguale k per y. Allora y di t uguale y zero per e alla k t.",
      a_parole: "Se la velocità di crescita è proporzionale alla quantità, la quantità cresce come un esponenziale."
    },
    prerequisiti: [
      { id: 'equazione-differenziale', perche: "È la più semplice equazione differenziale." },
      { id: 'funzione-esponenziale', perche: "La soluzione è un esponenziale." }
    ],
    parenti: [
      { id: 'progressione-geometrica', perche: "È la versione continua di una progressione geometrica." }
    ]
  },
  {
    id: 'crescita-logistica', titolo: 'Crescita logistica', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'equazioni-ordinarie', livello: 2,
    sinonimi: ['logistica', 'curva a S', 'capacità portante', 'Verhulst', 'crescita limitata'],
    domanda: "Cosa ferma una crescita esponenziale?",
    esempio: "Dei conigli su un'isola si moltiplicano in fretta, ma il cibo è limitato. La popolazione rallenta e si stabilizza.",
    idea: "Nella crescita logistica, una popolazione cresce in modo esponenziale finché è piccola.\nPoi rallenta, perché le risorse diventano scarse.\nAlla fine si stabilizza su un valore massimo, detto capacità portante.\nIl grafico ha la forma di una S allungata.\nPierre-François Verhulst propose il modello nel 1838.",
    perche_fa_pensare: "Nessuna crescita esponenziale dura per sempre nel mondo reale. La domanda è sempre quando e come si fermerà.",
    dove_si_usa: "In ecologia, nella diffusione di prodotti e tecnologie, nelle epidemie, nelle reti neurali.",
    formula: {
      latex: "y' = r\\,y\\left(1 - \\frac{y}{K}\\right)",
      come_si_legge: "y primo uguale erre per y, per uno meno y su kappa.",
      a_parole: "La crescita è esponenziale quando y è piccolo e si spegne quando y si avvicina a K."
    },
    prerequisiti: [
      { id: 'crescita-esponenziale', perche: "Corregge la crescita esponenziale." }
    ],
    parenti: []
  },
  {
    id: 'variabili-separabili', titolo: 'Separazione delle variabili', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'equazioni-ordinarie', livello: 3,
    sinonimi: ['variabili separabili', 'equazioni separabili', 'separare le variabili', 'integrazione diretta'],
    domanda: "Come si risolvono a mano le equazioni differenziali più semplici?",
    esempio: "Per la crescita esponenziale, si mettono da una parte i termini con la popolazione e dall'altra quelli con il tempo. Poi si integrano entrambi i lati.",
    idea: "Alcune equazioni differenziali si possono scrivere con la variabile incognita da una parte e il tempo dall'altra.\nSi dicono a variabili separabili.\nIn quel caso si calcola una [[primitiva]] di ciascun lato.\nSi ottiene una relazione tra la funzione e il tempo, che spesso si risolve in modo esplicito.\nLa maggior parte delle equazioni differenziali, però, non si risolve così.",
    perche_fa_pensare: "I metodi esatti funzionano solo per pochi casi fortunati. Per tutti gli altri servono approssimazioni e ragionamenti qualitativi.",
    dove_si_usa: "Nei modelli di crescita, nel raffreddamento, nella cinetica chimica.",
    prerequisiti: [
      { id: 'equazione-differenziale', perche: "È un metodo di risoluzione." },
      { id: 'primitiva', perche: "Si calcolano primitive dei due lati." }
    ],
    parenti: []
  },
  {
    id: 'teorema-esistenza-unicita', titolo: 'Esistenza e unicità delle soluzioni', tipo: 'teorema', area: 'equazioni-differenziali', argomento: 'equazioni-ordinarie', livello: 3,
    sinonimi: ['Cauchy-Lipschitz', 'Picard-Lindelöf', 'problema di Cauchy', 'esistenza e unicità'],
    domanda: "Il futuro di un sistema è determinato dal suo presente?",
    esempio: "Lanci una palla con una certa velocità da un certo punto. Le leggi del moto determinano una e una sola traiettoria.",
    idea: "Il teorema di esistenza e unicità riguarda un'equazione differenziale con una condizione iniziale.\nSe l'equazione è abbastanza regolare, esiste una soluzione, ed è una sola.\nAlmeno per un certo intervallo di tempo intorno all'istante iniziale.\nSe l'equazione non è regolare, possono esserci più soluzioni con lo stesso punto di partenza.\nLa dimostrazione costruisce la soluzione con approssimazioni successive.",
    perche_fa_pensare: "È la base matematica del determinismo: dato il presente, il futuro è uno solo. Ma solo se le leggi sono abbastanza regolari.",
    dove_si_usa: "In fisica, in ingegneria, nella garanzia che le simulazioni numeriche abbiano senso.",
    prerequisiti: [
      { id: 'equazione-differenziale', perche: "Riguarda le soluzioni delle equazioni differenziali." },
      { id: 'funzione-continua', perche: "Le ipotesi riguardano la regolarità dell'equazione." }
    ],
    parenti: [
      { id: 'determinismo', perche: "Fornisce una versione matematica precisa del determinismo." },
      { id: 'teorema-punto-fisso-banach', perche: "La dimostrazione classica usa il punto fisso di Banach." }
    ]
  },

  // Equazioni lineari e sistemi
  {
    id: 'edo-lineari', titolo: 'Equazioni differenziali lineari', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'edo-lineari-e-sistemi', livello: 3,
    sinonimi: ['equazioni lineari', 'principio di sovrapposizione', 'equazioni a coefficienti costanti', 'edo lineari'],
    domanda: "Quando si possono sommare le soluzioni di un'equazione?",
    esempio: "Due onde sonore che si incontrano si sommano. Ognuna continua per la sua strada, come se l'altra non ci fosse.",
    idea: "Un'equazione differenziale è lineare se la funzione e le sue derivate compaiono solo moltiplicate per numeri e sommate.\nPer queste equazioni vale il principio di sovrapposizione.\nLa somma di due soluzioni è ancora una soluzione, e così ogni loro multiplo.\nLe soluzioni formano quindi uno [[spazio-vettoriale|spazio vettoriale]].\nCon i coefficienti costanti, si risolvono con esponenziali, seni e coseni.",
    perche_fa_pensare: "I fenomeni lineari si capiscono a pezzi e poi si sommano. Quelli non lineari, come il tempo atmosferico, no: per questo sono così difficili.",
    dove_si_usa: "Nei circuiti elettrici, nelle vibrazioni meccaniche, nell'acustica, nei sistemi di controllo.",
    prerequisiti: [
      { id: 'crescita-esponenziale', perche: "Le soluzioni sono costruite con esponenziali." }
    ],
    parenti: [
      { id: 'spazio-vettoriale', perche: "Le soluzioni formano uno spazio vettoriale." }
    ]
  },
  {
    id: 'oscillatore-armonico', titolo: 'Oscillatore armonico', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'edo-lineari-e-sistemi', livello: 3,
    sinonimi: ['oscillatore armonico', 'molla', 'pendolo', 'moto armonico', 'risonanza'],
    domanda: "Perché tante cose in natura oscillano?",
    esempio: "Una massa appesa a una molla, tirata e lasciata, va su e giù con un ritmo regolare. Anche un'altalena, per piccole spinte, fa lo stesso.",
    idea: "Un oscillatore armonico è un sistema con una forza che lo riporta verso l'equilibrio, proporzionale allo spostamento.\nL'equazione dice che l'accelerazione è opposta alla posizione.\nLe soluzioni sono seni e coseni: oscillazioni regolari con un periodo fisso.\nSe si spinge il sistema al suo ritmo naturale, le oscillazioni crescono: è la risonanza.\nQuasi ogni sistema vicino a un equilibrio stabile si comporta così, per piccole oscillazioni.",
    perche_fa_pensare: "Molle, pendoli, circuiti, atomi: sistemi diversissimi obbediscono alla stessa equazione. La matematica rivela che sono parenti.",
    dove_si_usa: "Negli orologi, negli strumenti musicali, nei circuiti radio, nella fisica degli atomi.",
    formula: {
      latex: "x'' = -\\omega^2 x \\quad\\Longrightarrow\\quad x(t) = A \\cos(\\omega t + \\varphi)",
      come_si_legge: "x secondo uguale meno omega quadro per x. Allora x di t uguale A per coseno di omega t più fi.",
      a_parole: "Se l'accelerazione è opposta alla posizione, il moto è un'oscillazione regolare."
    },
    prerequisiti: [
      { id: 'edo-lineari', perche: "È un'equazione lineare del secondo ordine." },
      { id: 'funzioni-trigonometriche', perche: "Le soluzioni sono seni e coseni." }
    ],
    parenti: []
  },
  {
    id: 'sistemi-di-edo', titolo: 'Sistemi di equazioni differenziali', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'edo-lineari-e-sistemi', livello: 3,
    sinonimi: ['sistemi di equazioni differenziali', 'spazio delle fasi', 'stabilità', 'punti di equilibrio'],
    domanda: "Come si studiano più grandezze che cambiano insieme?",
    esempio: "In un'epidemia, il numero di sani, malati e guariti cambia insieme. Ognuno influenza gli altri.",
    idea: "Un sistema di equazioni differenziali descrive più grandezze che si influenzano a vicenda.\nLo stato del sistema è un punto, e la sua evoluzione è una curva nello spazio degli stati.\nNei sistemi lineari, gli [[autovalori-autovettori|autovalori]] dicono tutto sul comportamento.\nDicono se il sistema torna all'equilibrio, se se ne allontana o se oscilla.\nI sistemi non lineari si studiano spesso guardandoli da vicino intorno agli equilibri.",
    perche_fa_pensare: "Invece di cercare formule, si disegna il flusso delle soluzioni. Spesso la forma del flusso dice più di ogni formula.",
    dove_si_usa: "In epidemiologia, in ecologia, in economia, nei circuiti elettrici, nei robot.",
    prerequisiti: [
      { id: 'edo-lineari', perche: "Estende le equazioni lineari a più grandezze." },
      { id: 'autovalori-autovettori', perche: "Gli autovalori decidono la stabilità." }
    ],
    parenti: []
  },
  {
    id: 'modello-preda-predatore', titolo: 'Modello preda-predatore', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'edo-lineari-e-sistemi', livello: 3,
    sinonimi: ['Lotka-Volterra', 'prede e predatori', 'cicli di popolazione', 'Volterra'],
    domanda: "Perché le popolazioni di lepri e linci salgono e scendono a turno?",
    esempio: "Più lepri vuol dire più cibo per le linci, che aumentano. Più linci mangiano più lepri, che calano. Poi calano anche le linci, e il ciclo ricomincia.",
    idea: "Il modello preda-predatore descrive due popolazioni legate dalla caccia.\nLe prede crescono da sole, ma vengono mangiate dai predatori.\nI predatori crescono mangiando le prede, e senza di esse diminuiscono.\nLe soluzioni sono cicli: le due popolazioni oscillano, con i predatori in ritardo sulle prede.\nAlfred Lotka e Vito Volterra lo proposero, in modo indipendente, negli anni Venti del Novecento.",
    perche_fa_pensare: "Volterra lo studiò per capire perché, durante la Prima guerra mondiale, nell'Adriatico erano aumentati i pesci predatori. Un problema di pesca è diventato un modello universale.",
    dove_si_usa: "In ecologia, in economia, nella dinamica delle malattie, nella gestione della pesca.",
    formula: {
      latex: "x' = a x - b x y, \\qquad y' = c x y - d y",
      come_si_legge: "x primo uguale a x meno b x y. E y primo uguale c x y meno d y.",
      a_parole: "Le prede x crescono e vengono mangiate; i predatori y crescono mangiando e altrimenti calano."
    },
    prerequisiti: [
      { id: 'sistemi-di-edo', perche: "È un sistema di due equazioni." },
      { id: 'crescita-logistica', perche: "Le versioni realistiche aggiungono un limite alla crescita delle prede." }
    ],
    parenti: []
  },

  // Equazioni alle derivate parziali
  {
    id: 'equazioni-alle-derivate-parziali', titolo: 'Equazioni alle derivate parziali', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 3,
    sinonimi: ['equazioni alle derivate parziali', 'EDP', 'condizioni al contorno', 'campi'],
    domanda: "Come si descrive qualcosa che cambia nel tempo e nello spazio?",
    esempio: "La temperatura in una stanza dipende dal punto e dall'istante. Per descriverne l'evoluzione servono derivate rispetto al tempo e rispetto alle tre direzioni.",
    idea: "Un'equazione alle derivate parziali riguarda una funzione di più variabili, come lo spazio e il tempo.\nLega tra loro le [[derivate-parziali|derivate parziali]] di quella funzione.\nOltre alle condizioni iniziali servono le condizioni al bordo, cioè cosa succede ai confini della regione.\nEsistono tre grandi famiglie, rappresentate dalle equazioni del calore, delle onde e di Laplace.\nSono molto più difficili delle equazioni ordinarie, e la loro teoria è ancora in costruzione.",
    perche_fa_pensare: "Calore, suono, luce, fluidi e perfino i prezzi in borsa obbediscono a equazioni di questo tipo. Sono il linguaggio dei fenomeni distribuiti nello spazio.",
    dove_si_usa: "In fisica, in ingegneria, in meteorologia, in finanza, nell'elaborazione delle immagini.",
    prerequisiti: [
      { id: 'derivate-parziali', perche: "Contengono derivate parziali." },
      { id: 'equazione-differenziale', perche: "Estendono le equazioni differenziali a più variabili." }
    ],
    parenti: []
  },
  {
    id: 'equazione-del-calore', titolo: 'Equazione del calore', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 3,
    sinonimi: ['equazione del calore', 'diffusione', 'Fourier', 'equazione di diffusione'],
    domanda: "Come si diffonde il calore in una sbarra di metallo?",
    esempio: "Una goccia di inchiostro in un bicchiere d'acqua si allarga e sfuma, finché il colore è uniforme. La stessa equazione descrive il calore.",
    idea: "L'equazione del calore descrive come una grandezza si diffonde e si livella nel tempo.\nIn ogni punto, la temperatura sale se i dintorni sono più caldi, e scende se sono più freddi.\nCon il tempo le differenze si smussano e tutto tende all'uniformità.\nJoseph Fourier la studiò all'inizio dell'Ottocento.\nPer risolverla inventò le [[serie-di-fourier|serie di Fourier]].",
    perche_fa_pensare: "Il calore va sempre dal caldo al freddo e mai al contrario. È una freccia del tempo nascosta in un'equazione.",
    dove_si_usa: "In ingegneria termica, nella diffusione di sostanze, in finanza, nell'elaborazione delle immagini.",
    formula: {
      latex: '\\frac{\\partial u}{\\partial t} = \\alpha\\, \\Delta u',
      come_si_legge: "derivata parziale di u rispetto a t uguale alfa per laplaciano di u.",
      a_parole: "La temperatura cambia in proporzione a quanto differisce dalla media dei punti vicini."
    },
    prerequisiti: [
      { id: 'equazioni-alle-derivate-parziali', perche: "È un'equazione alle derivate parziali." }
    ],
    parenti: [
      { id: 'moto-browniano', perche: "La diffusione del calore e il moto casuale delle particelle seguono la stessa equazione." },
      { id: 'serie-di-fourier', perche: "Fourier inventò le sue serie per risolverla." }
    ]
  },
  {
    id: 'equazione-delle-onde', titolo: 'Equazione delle onde', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 3,
    sinonimi: ['equazione delle onde', 'onde', 'corda vibrante', 'd\'Alembert', 'propagazione'],
    domanda: "Come viaggia un suono nell'aria?",
    esempio: "Pizzichi una corda di chitarra: la deformazione si sposta avanti e indietro lungo la corda, alla stessa velocità.",
    idea: "L'equazione delle onde descrive perturbazioni che si propagano a velocità costante.\nL'accelerazione in ogni punto dipende da quanto la forma è curva in quel punto.\nA differenza del calore, le onde non si smussano: viaggiano conservando la forma.\nJean d'Alembert la scrisse nel 1747 per la corda vibrante.\nDescrive suono, luce e onde sull'acqua, almeno per piccole ampiezze.",
    perche_fa_pensare: "Dalle equazioni dell'elettromagnetismo, Maxwell ricavò un'equazione delle onde con la velocità della luce. Così scoprì che la luce è un'onda elettromagnetica.",
    dove_si_usa: "In acustica, nelle telecomunicazioni, in sismologia, nelle ecografie.",
    formula: {
      latex: '\\frac{\\partial^2 u}{\\partial t^2} = c^2\\, \\Delta u',
      come_si_legge: "derivata seconda di u rispetto a t uguale ci quadro per laplaciano di u.",
      a_parole: "L'accelerazione in ogni punto è proporzionale a quanto la forma è curva lì; c è la velocità dell'onda."
    },
    prerequisiti: [
      { id: 'equazioni-alle-derivate-parziali', perche: "È un'equazione alle derivate parziali." },
      { id: 'oscillatore-armonico', perche: "Ogni punto oscilla come un oscillatore armonico." }
    ],
    parenti: []
  },
  {
    id: 'equazione-di-laplace', titolo: 'Equazione di Laplace', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 3,
    sinonimi: ['Laplace', 'funzioni armoniche', 'laplaciano', 'potenziale', 'equilibrio'],
    domanda: "Che forma prende qualcosa quando ha smesso di cambiare?",
    esempio: "Una bolla di sapone tesa su un telaio di filo prende una forma precisa. In ogni punto, l'altezza è la media dei punti vicini.",
    idea: "L'equazione di Laplace descrive situazioni di equilibrio, che non cambiano più nel tempo.\nLe sue soluzioni si chiamano funzioni armoniche.\nIn ogni punto, il valore di una funzione armonica è la media dei valori su un cerchio intorno.\nPer questo una funzione armonica non ha massimi né minimi all'interno: stanno sul bordo.\nPierre-Simon Laplace la studiò per il potenziale gravitazionale.",
    perche_fa_pensare: "L'equilibrio è il punto in cui ogni luogo somiglia alla media dei suoi vicini. È un'idea che va dalla fisica alla sociologia.",
    dove_si_usa: "In elettrostatica, nella gravitazione, nei fluidi in quiete, nella grafica per deformare superfici.",
    formula: {
      latex: '\\Delta u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0',
      come_si_legge: "laplaciano di u, cioè derivata seconda rispetto a x più derivata seconda rispetto a y, uguale zero.",
      a_parole: "La somma delle curvature in tutte le direzioni è zero: nessun punto sporge rispetto ai vicini."
    },
    prerequisiti: [
      { id: 'equazioni-alle-derivate-parziali', perche: "È un'equazione alle derivate parziali." }
    ],
    parenti: []
  },
  {
    id: 'soluzioni-deboli', titolo: 'Soluzioni deboli', tipo: 'concetto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 4,
    sinonimi: ['soluzioni deboli', 'spazi di Sobolev', 'soluzioni generalizzate', 'onde d\'urto'],
    domanda: "Cosa fare quando la soluzione di un'equazione ha spigoli e salti?",
    esempio: "Un aereo supersonico crea un'onda d'urto: la pressione dell'aria salta di colpo. Lì le derivate non esistono, eppure la fisica funziona.",
    idea: "Molte equazioni hanno soluzioni fisiche con salti o spigoli, dove le derivate non esistono.\nUna soluzione debole rispetta l'equazione in media, non punto per punto.\nSi controlla l'equazione dopo averla moltiplicata per funzioni lisce e integrata.\nCosì si trovano soluzioni anche dove il metodo classico fallisce.\nSpesso si dimostra prima che esiste una soluzione debole, poi che in realtà è liscia.",
    perche_fa_pensare: "Per trovare una soluzione, a volte bisogna allargare cosa si intende per soluzione. Rilassare la domanda aiuta a rispondere.",
    dove_si_usa: "Nell'aerodinamica, nei metodi agli elementi finiti, nella meccanica dei materiali.",
    prerequisiti: [
      { id: 'equazioni-alle-derivate-parziali', perche: "Si applicano alle equazioni alle derivate parziali." },
      { id: 'distribuzioni', perche: "Le derivate si intendono nel senso delle distribuzioni." }
    ],
    parenti: []
  },
  {
    id: 'navier-stokes', titolo: 'Equazioni di Navier-Stokes', tipo: 'problema-aperto', area: 'equazioni-differenziali', argomento: 'derivate-parziali-edp', livello: 4,
    sinonimi: ['Navier-Stokes', 'fluidodinamica', 'turbolenza', 'problemi del millennio'],
    domanda: "Le equazioni dei fluidi hanno sempre soluzioni regolari?",
    esempio: "Il fumo di una candela sale dritto, poi all'improvviso si arriccia in vortici. Le equazioni di Navier-Stokes descrivono entrambi i comportamenti.",
    idea: "Le equazioni di Navier-Stokes descrivono il moto dei fluidi, come acqua e aria.\nFurono scritte nella prima metà dell'Ottocento.\nSi usano ogni giorno per progettare aerei, automobili e previsioni meteo.\nEppure non si sa se, nello spazio a tre dimensioni, le soluzioni restino sempre regolari.\nPotrebbero sviluppare in tempo finito velocità infinite: è uno dei problemi del millennio.",
    perche_fa_pensare: "Usiamo ogni giorno equazioni di cui non sappiamo se abbiano sempre senso. La pratica corre più veloce della teoria.",
    dove_si_usa: "Nell'aerodinamica, nelle previsioni meteo, nella progettazione navale, in medicina per il flusso del sangue.",
    prerequisiti: [
      { id: 'equazioni-alle-derivate-parziali', perche: "Sono equazioni alle derivate parziali." },
      { id: 'campo-vettoriale', perche: "La velocità del fluido è un campo vettoriale." }
    ],
    parenti: [
      { id: 'caos-deterministico', perche: "La turbolenza dei fluidi è legata al caos deterministico." }
    ]
  }
]);
