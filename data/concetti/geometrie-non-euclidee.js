/* Geometrie non euclidee e proiettive */
Mappa.registra([
  // Geometrie non euclidee
  {
    id: 'geometria-sferica', titolo: 'Geometria sulla sfera', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'parallele-e-curvatura', livello: 2,
    sinonimi: ['geometria sferica', 'cerchi massimi', 'triangoli sferici', 'rotte aeree', 'navigazione'],
    domanda: "Cosa diventano rette e triangoli sulla superficie della Terra?",
    esempio: "Parti dal Polo Nord, scendi fino all'equatore, giri a sinistra, percorri un quarto di equatore e risali al Polo. Hai disegnato un triangolo con tre angoli retti.",
    idea: "Sulla sfera, le linee più brevi tra due punti sono archi di cerchi massimi, come l'equatore.\nSono loro a fare la parte delle rette.\nDue cerchi massimi si incontrano sempre: non esistono parallele.\nGli angoli di un triangolo sferico sommano più di 180 gradi.\nL'eccesso sopra i 180 gradi è proporzionale all'area del triangolo.",
    perche_fa_pensare: "Viviamo su una sfera, eppure la geometria che usiamo ogni giorno è quella del piano. Funziona solo perché, da vicino, la Terra sembra piatta.",
    dove_si_usa: "Nella navigazione aerea e marittima, in astronomia, nei sistemi GPS.",
    formula: {
      latex: '\\text{Area} = (\\alpha + \\beta + \\gamma - \\pi)\\, R^2',
      come_si_legge: "area uguale alfa più beta più gamma meno pi greco, il tutto per erre al quadrato.",
      a_parole: "L'area di un triangolo sulla sfera dipende da quanto i suoi angoli superano la somma di un triangolo piano."
    },
    prerequisiti: [
      { id: 'circonferenza-cerchio', perche: "Le «rette» sono cerchi massimi." },
      { id: 'solidi', perche: "Si lavora sulla superficie di una sfera." },
      { id: 'somma-angoli-triangolo', perche: "Mostra che la somma degli angoli può superare 180 gradi." }
    ],
    parenti: [
      { id: 'geodetica', perche: "I cerchi massimi sono le geodetiche della sfera." }
    ]
  },
  {
    id: 'geometria-iperbolica', titolo: 'Geometria iperbolica', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'parallele-e-curvatura', livello: 3,
    sinonimi: ['geometria iperbolica', 'Lobačevskij', 'Bolyai', 'geometria di Lobačevskij', 'infinite parallele'],
    domanda: "Cosa succede se le parallele non sono uniche?",
    esempio: "Una foglia di lattuga o un corallo hanno bordi tutti increspati. C'è più superficie di quanta ne stia in un piano. Somigliano a un pezzo di piano iperbolico.",
    idea: "Nella geometria iperbolica, per un punto fuori da una retta passano infinite parallele.\nÈ una geometria coerente, in cui valgono tutti i postulati di Euclide tranne il [[quinto-postulato|quinto]].\nGli angoli di un triangolo sommano meno di 180 gradi.\nPiù il triangolo è grande, più la somma è piccola.\nLobačevskij e Bolyai la pubblicarono intorno al 1830; Gauss vi era arrivato prima, senza pubblicare.",
    perche_fa_pensare: "Per duemila anni si è creduto che la geometria di Euclide fosse l'unica possibile. Era un'abitudine, non una necessità.",
    dove_si_usa: "In relatività, nella visualizzazione di reti molto grandi, nell'arte di Escher, nella topologia.",
    prerequisiti: [
      { id: 'quinto-postulato', perche: "Nasce negando il quinto postulato." },
      { id: 'somma-angoli-triangolo', perche: "La somma degli angoli è minore di 180 gradi." }
    ],
    parenti: [
      { id: 'curvatura-di-gauss', perche: "Il piano iperbolico ha curvatura negativa costante." }
    ]
  },
  {
    id: 'geometria-ellittica', titolo: 'Geometria ellittica', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'parallele-e-curvatura', livello: 3,
    sinonimi: ['geometria ellittica', 'geometria di Riemann', 'nessuna parallela', 'curvatura positiva'],
    domanda: "Una geometria può non avere nessuna parallela?",
    esempio: "Sulla sfera due cerchi massimi si incontrano in due punti opposti. Se si considerano un solo punto, le «rette» si incontrano sempre esattamente una volta.",
    idea: "Nella geometria ellittica non esistono rette parallele: due rette si incontrano sempre.\nSi ottiene dalla geometria della sfera, considerando come un solo punto ogni coppia di punti opposti.\nCosì due rette hanno esattamente un punto in comune, come chiede Euclide.\nGli angoli di un triangolo sommano più di 180 gradi.\nBernhard Riemann ne parlò nel 1854, in una lezione che cambiò la geometria.",
    perche_fa_pensare: "Euclide, iperbolica, ellittica: tre risposte diverse alla stessa domanda sulle parallele. Ognuna è coerente.",
    dove_si_usa: "In geometria differenziale, in cosmologia, nello studio degli spazi curvi.",
    prerequisiti: [
      { id: 'geometria-sferica', perche: "Si costruisce a partire dalla sfera." },
      { id: 'quinto-postulato', perche: "Nega il quinto postulato in modo opposto all'iperbolica." }
    ],
    parenti: []
  },
  {
    id: 'modelli-geometria-iperbolica', titolo: 'Modelli del piano iperbolico', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'parallele-e-curvatura', livello: 3,
    sinonimi: ['disco di Poincaré', 'semipiano di Poincaré', 'modello di Klein', 'pseudosfera', 'Beltrami'],
    domanda: "Come si disegna una geometria che non sta in un foglio?",
    esempio: "Nelle incisioni «Limite del cerchio» di Escher, pesci e angeli diventano sempre più piccoli verso il bordo. Sono tutti grandi uguali nel piano iperbolico.",
    idea: "Il piano iperbolico non si può costruire per intero dentro lo spazio ordinario senza deformarlo.\nSi usano allora dei modelli: mappe che lo rappresentano dentro il piano di Euclide.\nNel disco di Poincaré, tutto il piano iperbolico sta dentro un cerchio, e il bordo è all'infinito.\nLe rette diventano archi di cerchio perpendicolari al bordo.\nGli angoli si vedono giusti, ma le distanze si accorciano verso il bordo.",
    perche_fa_pensare: "Una geometria «impossibile» si può disegnare dentro quella che conosciamo. Il nuovo si costruisce con il vecchio.",
    dove_si_usa: "Nell'arte, nella visualizzazione di reti e gerarchie, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'geometria-iperbolica', perche: "Rappresentano il piano iperbolico." },
      { id: 'circonferenza-analitica', perche: "Le rette del modello sono archi di circonferenza." }
    ],
    parenti: [
      { id: 'mappe-conformi', perche: "Il disco di Poincaré conserva gli angoli, come una mappa conforme." },
      { id: 'tassellazioni', perche: "Il piano iperbolico ammette infinite tassellazioni regolari." }
    ]
  },
  {
    id: 'coerenza-geometrie-non-euclidee', titolo: 'Le geometrie non euclidee sono coerenti', tipo: 'teorema', area: 'geometrie-non-euclidee', argomento: 'parallele-e-curvatura', livello: 3,
    sinonimi: ['coerenza relativa', 'indipendenza del quinto postulato', 'Beltrami', 'consistenza'],
    domanda: "Come si sa che la geometria iperbolica non nasconde una contraddizione?",
    esempio: "Per secoli molti matematici cercarono di dimostrare il quinto postulato. Speravano di trovare una contraddizione negandolo, ma non la trovarono mai.",
    idea: "Nel 1868 Eugenio Beltrami mostrò che la geometria iperbolica si può costruire dentro quella euclidea.\nOgni affermazione iperbolica diventa un'affermazione euclidea sul modello.\nQuindi, se la geometria iperbolica fosse contraddittoria, lo sarebbe anche quella di Euclide.\nDa qui segue che il [[quinto-postulato|quinto postulato]] non si può dimostrare dagli altri.\nÈ un risultato di coerenza relativa: sposta la domanda, non la elimina.",
    perche_fa_pensare: "Si può dimostrare che una cosa non si può dimostrare. È stata una delle prime volte, molto prima di Gödel.",
    dove_si_usa: "In logica e nei fondamenti della matematica.",
    prerequisiti: [
      { id: 'modelli-geometria-iperbolica', perche: "La dimostrazione usa un modello." },
      { id: 'metodo-assiomatico', perche: "Riguarda la coerenza di un sistema di assiomi." }
    ],
    parenti: [
      { id: 'indipendenza-logica', perche: "Il quinto postulato è il primo grande esempio di assioma indipendente." }
    ]
  },

  // Geometria proiettiva
  {
    id: 'prospettiva', titolo: 'Prospettiva e punto di fuga', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 1,
    sinonimi: ['prospettiva', 'punto di fuga', 'linea dell\'orizzonte', 'Brunelleschi', 'prospettiva lineare'],
    domanda: "Perché i binari del treno sembrano incontrarsi all'orizzonte?",
    esempio: "Guarda la foto di una strada dritta. I bordi paralleli si avvicinano e si incontrano in un punto lontano, il punto di fuga.",
    idea: "La prospettiva è il modo di rappresentare lo spazio come lo vede un occhio da un punto fisso.\nLe rette parallele nella realtà, nel disegno, convergono in un punto di fuga.\nI punti di fuga di tutte le direzioni orizzontali stanno sulla linea dell'orizzonte.\nLe distanze e gli angoli cambiano, ma le rette restano rette.\nArtisti e architetti del Rinascimento, come Brunelleschi e Alberti, ne fissarono le regole.",
    perche_fa_pensare: "Gli artisti hanno scoperto una geometria nuova prima dei matematici. Le parallele che si incontrano erano già sui muri delle chiese.",
    dove_si_usa: "Nel disegno, nella pittura, nella fotografia, nei videogiochi, nella realtà virtuale.",
    prerequisiti: [
      { id: 'rette-parallele-perpendicolari', perche: "Le parallele, in prospettiva, si incontrano." }
    ],
    parenti: []
  },
  {
    id: 'piano-proiettivo', titolo: 'Piano proiettivo', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['piano proiettivo', 'punti all\'infinito', 'retta all\'infinito', 'geometria proiettiva'],
    domanda: "Cosa succede se si aggiungono al piano i punti all'infinito?",
    esempio: "Nel piano proiettivo i binari si incontrano davvero, in un punto all'infinito. Quel punto è il punto di fuga del disegno, preso sul serio.",
    idea: "Il piano proiettivo si ottiene aggiungendo al piano un punto all'infinito per ogni direzione.\nRette parallele hanno la stessa direzione, quindi si incontrano nel loro punto all'infinito.\nTutti i punti all'infinito formano una nuova retta, la retta all'infinito.\nCosì due rette distinte si incontrano sempre, in esattamente un punto.\nMolti teoremi diventano più semplici, perché non ci sono più casi speciali.",
    perche_fa_pensare: "L'infinito, aggiunto con cura, rende la geometria più semplice invece che più difficile. È un'eccezione eliminata.",
    dove_si_usa: "Nella grafica al computer, nella visione artificiale, in geometria algebrica.",
    prerequisiti: [
      { id: 'prospettiva', perche: "Formalizza i punti di fuga della prospettiva." },
      { id: 'postulati-di-euclide', perche: "Modifica il comportamento delle parallele." }
    ],
    parenti: [
      { id: 'infinito-potenziale-attuale', perche: "I punti all'infinito sono un modo di trattare l'infinito come un oggetto." }
    ]
  },
  {
    id: 'coordinate-omogenee', titolo: 'Coordinate omogenee', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['coordinate omogenee', 'coordinate proiettive', 'Möbius', 'Plücker'],
    domanda: "Come si scrivono con i numeri i punti all'infinito?",
    esempio: "Nei videogiochi, ogni punto dello spazio ha quattro coordinate invece di tre. La quarta permette di fare la prospettiva con una sola moltiplicazione di matrici.",
    idea: "Nelle coordinate omogenee, un punto del piano si descrive con tre numeri invece di due.\nTerne proporzionali, come 1, 2, 3 e 2, 4, 6, indicano lo stesso punto.\nI punti ordinari hanno l'ultimo numero diverso da zero.\nI punti all'infinito sono quelli con l'ultimo numero uguale a zero.\nCosì spostamenti, rotazioni e prospettive diventano tutti moltiplicazioni per [[matrice|matrici]].",
    perche_fa_pensare: "Aggiungere un numero in più rende i calcoli più semplici. A volte una dimensione in più è una scorciatoia.",
    dove_si_usa: "Nella grafica 3D, nei videogiochi, nella robotica, nella visione artificiale.",
    prerequisiti: [
      { id: 'piano-proiettivo', perche: "Danno coordinate ai punti del piano proiettivo." },
      { id: 'coordinate-nello-spazio', perche: "Un punto del piano si descrive con tre numeri." }
    ],
    parenti: []
  },
  {
    id: 'dualita-proiettiva', titolo: 'Dualità tra punti e rette', tipo: 'teorema', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['dualità', 'principio di dualità', 'punti e rette', 'teorema duale'],
    domanda: "Cosa succede se in un teorema si scambiano punti e rette?",
    esempio: "«Due punti stanno su una sola retta» diventa «due rette passano per un solo punto». Nel piano proiettivo, entrambe le frasi sono vere.",
    idea: "Nel piano proiettivo, punti e rette hanno ruoli perfettamente simmetrici.\nIl principio di dualità dice di scambiare «punto» con «retta» in un teorema vero.\nBisogna scambiare anche «passa per» con «sta su».\nSi ottiene un altro teorema vero, gratis.\nOgni teorema proiettivo ne ha quindi un gemello.",
    perche_fa_pensare: "Una simmetria nascosta raddoppia i teoremi. Capire la struttura fa risparmiare metà del lavoro.",
    dove_si_usa: "In geometria, in ottimizzazione, nella grafica al computer.",
    prerequisiti: [
      { id: 'piano-proiettivo', perche: "La dualità vale nel piano proiettivo." }
    ],
    parenti: []
  },
  {
    id: 'birapporto', titolo: 'Birapporto', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['birapporto', 'rapporto anarmonico', 'invariante proiettivo', 'cross ratio'],
    domanda: "Cosa resta uguale in una fotografia, se distanze e angoli cambiano?",
    esempio: "Fotografi quattro pali allineati lungo una strada. Nella foto le distanze cambiano, ma un certo rapporto tra di esse resta identico.",
    idea: "In prospettiva cambiano le distanze, gli angoli e anche i semplici rapporti tra lunghezze.\nIl birapporto, però, resta uguale.\nSi calcola con quattro punti allineati, combinando le loro distanze in un doppio rapporto.\nÈ il numero fondamentale della geometria proiettiva.\nEra già noto a Pappo di Alessandria, nell'antichità.",
    perche_fa_pensare: "Dentro ogni cambiamento c'è qualcosa che non cambia. Trovarlo è il modo migliore per capire il cambiamento.",
    dove_si_usa: "Nella fotogrammetria, nella visione artificiale, nella ricostruzione 3D da fotografie.",
    formula: {
      latex: '(A,B;C,D) = \\frac{AC \\cdot BD}{BC \\cdot AD}',
      come_si_legge: "birapporto di A, B, C, D uguale A C per B D, fratto B C per A D.",
      a_parole: "Un rapporto di rapporti tra le distanze di quattro punti allineati, che nessuna prospettiva cambia."
    },
    prerequisiti: [
      { id: 'piano-proiettivo', perche: "È l'invariante della geometria proiettiva." },
      { id: 'rapporti-proporzioni', perche: "È un rapporto tra rapporti." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-desargues', titolo: 'Teorema di Desargues', tipo: 'teorema', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['Desargues', 'triangoli prospettici', 'teorema dei due triangoli'],
    domanda: "Quando due triangoli sono uno l'ombra dell'altro?",
    esempio: "Una lampada proietta l'ombra di un triangolo su una parete. I lati del triangolo e quelli dell'ombra, prolungati, si incontrano in punti tutti allineati.",
    idea: "Prendi due triangoli tali che le rette che uniscono i vertici corrispondenti passino per uno stesso punto.\nIl teorema dice che allora i lati corrispondenti si incontrano in tre punti allineati.\nVale anche il contrario.\nGirard Desargues, architetto e matematico francese, lo studiò nel Seicento.\nNello spazio la dimostrazione è semplice; nel piano richiede un'ipotesi in più, e certe geometrie finite non lo rispettano.",
    perche_fa_pensare: "Un teorema del piano si capisce meglio uscendo nello spazio. Guardare da una dimensione in più chiarisce.",
    dove_si_usa: "In geometria proiettiva, nel disegno tecnico, nei fondamenti della geometria.",
    prerequisiti: [
      { id: 'piano-proiettivo', perche: "È un teorema di geometria proiettiva." },
      { id: 'triangolo', perche: "Riguarda due triangoli." }
    ],
    parenti: []
  },
  {
    id: 'coniche-proiettive', titolo: 'Le coniche in geometria proiettiva', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'geometria-proiettiva', livello: 3,
    sinonimi: ['coniche proiettive', 'teorema di Pascal', 'ellisse parabola iperbole', 'conica'],
    domanda: "Ellisse, parabola e iperbole sono davvero diverse?",
    esempio: "La luce di una torcia su una parete disegna un'ellisse. Inclinando la torcia, l'ellisse si allunga, diventa parabola e poi iperbole.",
    idea: "In geometria proiettiva, ellisse, parabola e iperbole sono la stessa curva vista in modi diversi.\nLa differenza sta solo in quanti punti hanno sulla retta all'infinito.\nL'ellisse non ne ha nessuno, la parabola uno, l'iperbole due.\nUna prospettiva può trasformare ciascuna nelle altre.\nIl teorema di Pascal, scoperto da Blaise Pascal a sedici anni, vale per tutte le coniche allo stesso modo.",
    perche_fa_pensare: "Tre curve studiate per secoli come diverse si rivelano una sola. Il punto di vista giusto unifica.",
    dove_si_usa: "In ottica, in astronomia, nella grafica al computer.",
    prerequisiti: [
      { id: 'coniche', perche: "Riguarda ellisse, parabola e iperbole." },
      { id: 'piano-proiettivo', perche: "Le coniche si unificano nel piano proiettivo." }
    ],
    parenti: []
  },

  // Che cos'è una geometria
  {
    id: 'geometria-affine', titolo: 'Geometria affine', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'classificare-le-geometrie', livello: 3,
    sinonimi: ['geometria affine', 'trasformazioni affini', 'parallelismo', 'proiezione parallela'],
    domanda: "Quale geometria resta se si dimenticano lunghezze e angoli?",
    esempio: "Con il sole, l'ombra di una finestra quadrata sul pavimento può essere un parallelogramma. Lati e angoli cambiano, ma i lati paralleli restano paralleli.",
    idea: "La geometria affine studia le proprietà che non cambiano con le trasformazioni affini.\nUna trasformazione affine è una [[applicazione-lineare|trasformazione lineare]] seguita da uno spostamento.\nConserva le rette, il parallelismo e i rapporti tra segmenti sulla stessa retta.\nNon conserva lunghezze, angoli e aree.\nIn geometria affine tutti i triangoli si equivalgono, e così tutti i parallelogrammi.",
    perche_fa_pensare: "Dimenticando alcune proprietà, si vedono meglio quelle che restano. Ogni geometria sceglie cosa considerare importante.",
    dove_si_usa: "Nella grafica al computer, nel disegno tecnico, nella fisica, nella statistica.",
    prerequisiti: [
      { id: 'trasformazioni-del-piano', perche: "Generalizza le trasformazioni del piano." },
      { id: 'applicazione-lineare', perche: "Una trasformazione affine è lineare più uno spostamento." }
    ],
    parenti: []
  },
  {
    id: 'geometrie-finite', titolo: 'Geometrie finite', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'classificare-le-geometrie', livello: 3,
    sinonimi: ['geometrie finite', 'piano di Fano', 'piani proiettivi finiti', 'Dobble'],
    domanda: "Può esistere una geometria con un numero finito di punti?",
    esempio: "Nel gioco di carte Dobble, due carte qualsiasi hanno sempre esattamente un simbolo in comune. Il gioco è costruito su un piano proiettivo finito.",
    idea: "Una geometria finita ha un numero finito di punti e di rette, ma rispetta assiomi geometrici.\nIl più piccolo piano proiettivo, il piano di Fano, ha 7 punti e 7 rette.\nOgni retta ha 3 punti, e due rette si incontrano sempre in un punto.\nSi costruiscono piani così per molte grandezze, usando i [[campi-finiti|campi finiti]].\nPer alcune grandezze non esistono, e per altre ancora non si sa.",
    perche_fa_pensare: "La geometria non ha bisogno di disegni o di spazio continuo. Le bastano assiomi e qualche punto.",
    dove_si_usa: "Nei codici correttori, nella progettazione di esperimenti, nei giochi di carte, in crittografia.",
    prerequisiti: [
      { id: 'piano-proiettivo', perche: "Molte geometrie finite sono piani proiettivi." },
      { id: 'metodo-assiomatico', perche: "Si definiscono solo con gli assiomi." }
    ],
    parenti: [
      { id: 'disegni-combinatori', perche: "Un piano proiettivo finito è un disegno combinatorio." }
    ]
  },
  {
    id: 'programma-di-erlangen', titolo: 'Programma di Erlangen', tipo: 'concetto', area: 'geometrie-non-euclidee', argomento: 'classificare-le-geometrie', livello: 4,
    sinonimi: ['Erlangen', 'Felix Klein', 'geometria e gruppi', 'invarianti', 'classificazione delle geometrie'],
    domanda: "Quante geometrie esistono, e cosa le distingue?",
    esempio: "Per la geometria di Euclide un quadrato e un rombo sono diversi. Per quella affine sono uguali. Dipende da quali trasformazioni si permettono.",
    idea: "Nel 1872 Felix Klein propose un modo per mettere ordine tra le tante geometrie.\nOgni geometria è definita da un [[gruppo]] di trasformazioni.\nStudiarla vuol dire studiare le proprietà che quelle trasformazioni non cambiano.\nPiù trasformazioni si permettono, meno proprietà restano.\nCosì geometria euclidea, affine e proiettiva diventano livelli di una stessa scala.",
    perche_fa_pensare: "Una geometria non è un elenco di figure, ma una scelta di cosa considerare uguale. È l'idea di simmetria messa al centro.",
    dove_si_usa: "In geometria, in fisica, dove le leggi si classificano con le loro simmetrie.",
    prerequisiti: [
      { id: 'gruppo', perche: "Ogni geometria è definita da un gruppo." },
      { id: 'geometria-affine', perche: "La geometria affine è uno dei livelli." },
      { id: 'geometria-iperbolica', perche: "Anche le geometrie non euclidee rientrano nello schema." },
      { id: 'piano-proiettivo', perche: "La geometria proiettiva è il livello più generale tra quelli classici." }
    ],
    parenti: [
      { id: 'simmetria', perche: "Mette la simmetria al centro della geometria." },
      { id: 'oggetti-e-frecce', perche: "Anche le categorie studiano gli oggetti attraverso le trasformazioni." }
    ]
  }
]);
