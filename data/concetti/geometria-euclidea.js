/* Geometria euclidea e trigonometria */
Mappa.registra([
  // Enti fondamentali e postulati
  {
    id: 'punto-retta-piano', titolo: 'Punto, retta e piano', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 1,
    sinonimi: ['punto', 'retta', 'piano', 'enti primitivi', 'segmento', 'semiretta'],
    domanda: "Da dove si comincia a costruire la geometria?",
    esempio: "Un granello di sabbia ricorda un punto, un filo teso una retta, la superficie di un lago calmo un piano. Ma sono solo somiglianze.",
    idea: "Punto, retta e piano sono gli enti di partenza della geometria, e non si definiscono.\nUn punto non ha dimensioni; una retta è infinita e ha solo lunghezza.\nUn piano è una superficie piatta e infinita.\nPer due punti passa una e una sola retta.\nUn segmento è il pezzo di retta compreso tra due punti.",
    perche_fa_pensare: "Nessuno ha mai visto un punto o una retta: sono idee. Eppure con queste idee si costruiscono ponti veri.",
    dove_si_usa: "In architettura, nel disegno tecnico, nelle mappe e nella grafica al computer.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'angolo', titolo: 'Angolo', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 1,
    sinonimi: ['angoli', 'gradi', 'angolo retto', 'angolo acuto', 'angolo ottuso', 'goniometro'],
    domanda: "Come si misura quanto si apre un incrocio?",
    esempio: "Alle tre in punto le lancette formano un angolo retto: 90 gradi. Un giro completo vale 360 gradi.",
    idea: "Un angolo è la parte di piano compresa tra due semirette che partono dallo stesso punto.\nMisura quanto le due semirette si aprono l'una rispetto all'altra.\nDi solito si misura in gradi: un giro completo vale 360 gradi.\nUn angolo retto vale 90 gradi; quelli più piccoli si dicono acuti, quelli più grandi ottusi.\nLa scelta di 360 è antica e convenzionale.",
    perche_fa_pensare: "Perché un giro vale 360 e non 100? Molte unità di misura nascono da scelte antiche, non da necessità matematiche.",
    dove_si_usa: "In navigazione, in edilizia, nello sport, nell'orientamento dei pannelli solari.",
    prerequisiti: [
      { id: 'punto-retta-piano', perche: "Un angolo è formato da due semirette che partono da un punto." }
    ],
    parenti: []
  },
  {
    id: 'rette-parallele-perpendicolari', titolo: 'Rette parallele e perpendicolari', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 1,
    sinonimi: ['parallele', 'perpendicolari', 'rette parallele', 'incidenti', 'ortogonali'],
    domanda: "Due rette possono non incontrarsi mai?",
    esempio: "Le rotaie di un binario sono parallele. I bordi di una porta e del pavimento sono perpendicolari.",
    idea: "Due rette di un piano sono parallele se non si incontrano mai.\nSono perpendicolari se si incontrano formando quattro angoli retti.\nDue rette che si incontrano in un punto si dicono incidenti.\nQuando una retta taglia due parallele, si formano angoli uguali in posizioni corrispondenti.\nQuesta proprietà regge molti teoremi della geometria di Euclide.",
    perche_fa_pensare: "Che due rette non si incontrino mai, nemmeno lontanissimo, non si può controllare con l'esperienza. È un'affermazione sull'infinito.",
    dove_si_usa: "Nelle costruzioni, nel disegno tecnico, nella posa delle piastrelle.",
    prerequisiti: [
      { id: 'angolo', perche: "Le perpendicolari formano angoli retti, e le parallele formano angoli uguali con una trasversale." }
    ],
    parenti: []
  },
  {
    id: 'postulati-di-euclide', titolo: 'I postulati di Euclide', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 2,
    sinonimi: ['Euclide', 'Elementi', 'postulati', 'geometria euclidea', 'assiomi della geometria'],
    domanda: "Quali poche regole bastano per costruire tutta la geometria?",
    esempio: "Negli Elementi, scritti circa 2300 anni fa, Euclide parte da cinque postulati e da poche definizioni. Da lì ricava centinaia di teoremi.",
    idea: "I postulati di Euclide sono cinque regole accettate senza dimostrazione.\nIl primo dice che per due punti passa sempre una retta.\nUn altro dice che si può tracciare un cerchio con centro e raggio qualsiasi.\nDa questi postulati Euclide ricava, una dopo l'altra, le proprietà delle figure.\nÈ il primo grande esempio di [[metodo-assiomatico|metodo assiomatico]].\nGli Elementi sono stati studiati per oltre duemila anni.",
    perche_fa_pensare: "Per secoli gli Elementi sono stati il modello di ogni ragionamento rigoroso, anche in filosofia e in diritto.",
    dove_si_usa: "Nell'insegnamento della geometria e come modello di ogni teoria costruita su assiomi.",
    prerequisiti: [
      { id: 'punto-retta-piano', perche: "I postulati parlano di punti, rette e cerchi." },
      { id: 'metodo-assiomatico', perche: "Sono il primo esempio storico di sistema di assiomi." }
    ],
    parenti: []
  },
  {
    id: 'quinto-postulato', titolo: 'Il quinto postulato', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 2,
    sinonimi: ['postulato delle parallele', 'quinto postulato', 'assioma delle parallele'],
    domanda: "Per un punto passa sempre una sola parallela a una retta?",
    esempio: "Disegna una retta e un punto fuori di essa. Sembra evidente che per il punto passi una sola retta che non incontra mai la prima.",
    idea: "Il quinto postulato riguarda le rette parallele.\nIn una forma equivalente dice: per un punto esterno a una retta passa una sola parallela.\nÈ più complicato degli altri postulati, e per secoli si è cercato di dimostrarlo a partire da essi.\nNell'Ottocento si scoprì che è impossibile: è [[indipendenza-logica|indipendente]] dagli altri.\nNegarlo non porta a contraddizioni, ma a geometrie nuove.",
    perche_fa_pensare: "Duemila anni di tentativi falliti hanno portato a una scoperta enorme: possono esistere geometrie diverse, tutte coerenti.",
    dove_si_usa: "Nella storia delle idee, nelle geometrie non euclidee e nella relatività generale.",
    prerequisiti: [
      { id: 'postulati-di-euclide', perche: "È l'ultimo dei cinque postulati di Euclide." },
      { id: 'rette-parallele-perpendicolari', perche: "Parla di rette parallele." }
    ],
    parenti: []
  },
  {
    id: 'costruzioni-riga-compasso', titolo: 'Costruzioni con riga e compasso', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 2,
    sinonimi: ['riga e compasso', 'costruzioni geometriche', 'bisettrice', 'asse di un segmento'],
    domanda: "Cosa si può disegnare con solo una riga e un compasso?",
    esempio: "Con riga e compasso puoi dividere un angolo a metà, tracciare una perpendicolare o costruire un esagono regolare.",
    idea: "Nelle costruzioni classiche si usano solo una riga senza tacche e un compasso.\nLa riga traccia rette per due punti, il compasso traccia cerchi.\nCon questi strumenti si dimezzano segmenti e angoli e si costruiscono molti poligoni regolari.\nTre problemi antichi resistettero per oltre duemila anni: trisecare un angolo, duplicare un cubo, quadrare un cerchio.\nSolo nell'Ottocento si dimostrò che, in generale, sono impossibili.",
    perche_fa_pensare: "Per dimostrare che una cosa è impossibile bisogna uscire dallo strumento stesso. Qui servì l'algebra, non la geometria.",
    dove_si_usa: "Nel disegno tecnico tradizionale, nell'insegnamento e nella storia dell'algebra.",
    prerequisiti: [
      { id: 'circonferenza-cerchio', perche: "Il compasso traccia circonferenze." },
      { id: 'postulati-di-euclide', perche: "Riga e compasso corrispondono ai primi postulati di Euclide." }
    ],
    parenti: []
  },
  {
    id: 'assiomi-di-hilbert-geometria', titolo: 'Gli assiomi di Hilbert per la geometria', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'enti-e-postulati', livello: 3,
    sinonimi: ['Hilbert', 'Fondamenti della geometria', 'assiomi di Hilbert', 'geometria rigorosa'],
    domanda: "Euclide aveva davvero detto tutto?",
    esempio: "Euclide dà per scontato che due cerchi che si attraversano abbiano un punto in comune. Ma nei suoi postulati non c'è nulla che lo garantisca.",
    idea: "Gli assiomi di Hilbert sono una versione rigorosa dei fondamenti della geometria, pubblicata nel 1899.\nColmano lacune nascoste negli Elementi di Euclide.\nAd esempio rendono esplicito cosa vuol dire che un punto sta «tra» altri due.\nSono una ventina, divisi in gruppi: appartenenza, ordine, congruenza, parallele, continuità.\nCon loro ogni dimostrazione può fare a meno del disegno.",
    perche_fa_pensare: "Si racconta che Hilbert dicesse: invece di punti, rette e piani, si potrebbe dire tavoli, sedie e boccali. Conta la struttura, non il nome.",
    dove_si_usa: "Nei fondamenti della geometria e nella verifica delle dimostrazioni al computer.",
    prerequisiti: [
      { id: 'postulati-di-euclide', perche: "Riprendono e completano i postulati di Euclide." },
      { id: 'congruenza-triangoli', perche: "Uno dei gruppi di assiomi riguarda la congruenza." }
    ],
    parenti: [
      { id: 'programma-di-hilbert', perche: "Sono un primo esempio del metodo che Hilbert voleva estendere a tutta la matematica." }
    ]
  },

  // Triangoli e poligoni
  {
    id: 'triangolo', titolo: 'Triangolo', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'triangoli-e-poligoni', livello: 1,
    sinonimi: ['triangoli', 'triangolo rettangolo', 'triangolo equilatero', 'isoscele', 'scaleno'],
    domanda: "Perché il triangolo è la figura più importante della geometria?",
    esempio: "Le travi dei ponti e delle gru formano triangoli. Un triangolo non si deforma, un quadrato sì.",
    idea: "Un triangolo è una figura con tre lati e tre angoli.\nÈ il poligono più semplice: ogni altro poligono si può dividere in triangoli.\nSi classifica per i lati, come equilatero o isoscele, o per gli angoli, come rettangolo.\nCon tre lati dati, la forma del triangolo è determinata: per questo è rigido.\nOgni lato è più corto della somma degli altri due.",
    perche_fa_pensare: "Una figura così elementare contiene già moltissima matematica. Studiare il triangolo vuol dire studiare lo spazio.",
    dove_si_usa: "Nelle strutture di ponti e tetti, nella grafica 3D, nella misura delle distanze.",
    prerequisiti: [
      { id: 'angolo', perche: "Un triangolo ha tre angoli." }
    ],
    parenti: []
  },
  {
    id: 'somma-angoli-triangolo', titolo: 'La somma degli angoli di un triangolo', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'triangoli-e-poligoni', livello: 1,
    sinonimi: ['180 gradi', 'somma degli angoli interni', 'angoli di un triangolo'],
    domanda: "Perché gli angoli di un triangolo sommano sempre 180 gradi?",
    esempio: "Ritaglia un triangolo di carta, strappa i tre angoli e accostali. Formano sempre un angolo piatto, cioè 180 gradi.",
    idea: "In ogni triangolo del piano la somma dei tre angoli interni è 180 gradi.\nSi dimostra tracciando, per un vertice, la parallela al lato opposto.\nGli angoli che si formano sono uguali a quelli del triangolo, e insieme fanno un angolo piatto.\nLa dimostrazione usa il [[quinto-postulato|quinto postulato]].\nSu una sfera, infatti, la somma supera 180 gradi.",
    perche_fa_pensare: "Un fatto che sembra indiscutibile dipende da un postulato sulle parallele. Se cambi il postulato, cambia anche la somma.",
    dove_si_usa: "In topografia, in architettura, nel controllo delle misure di un terreno.",
    prerequisiti: [
      { id: 'triangolo', perche: "Riguarda gli angoli di un triangolo." },
      { id: 'rette-parallele-perpendicolari', perche: "La dimostrazione usa una retta parallela a un lato." }
    ],
    parenti: [
      { id: 'quinto-postulato', perche: "Il risultato vale solo se vale il quinto postulato." }
    ]
  },
  {
    id: 'congruenza-triangoli', titolo: 'Criteri di congruenza dei triangoli', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'triangoli-e-poligoni', livello: 2,
    sinonimi: ['criteri di congruenza', 'triangoli congruenti', 'triangoli uguali', 'congruenza'],
    domanda: "Quando due triangoli sono uguali?",
    esempio: "Per costruire una capriata uguale a un'altra non serve misurare tutto. Bastano due lati e l'angolo compreso tra loro.",
    idea: "Due triangoli sono congruenti se si possono sovrapporre esattamente.\nNon serve confrontare tutti i lati e tutti gli angoli.\nBastano tre informazioni scelte bene.\nAd esempio tre lati, oppure due lati e l'angolo compreso tra loro.\nEsiste anche un criterio con un lato e due angoli.\nQuesti criteri sono lo strumento base di molte dimostrazioni.",
    perche_fa_pensare: "Poche informazioni bastano a determinare una forma intera. La geometria è economica.",
    dove_si_usa: "In edilizia, in meccanica, nel controllo della qualità dei pezzi.",
    prerequisiti: [
      { id: 'triangolo', perche: "I criteri riguardano i triangoli." },
      { id: 'dimostrazione', perche: "I criteri si usano come passi nelle dimostrazioni." }
    ],
    parenti: []
  },
  {
    id: 'poligoni', titolo: 'Poligoni', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'triangoli-e-poligoni', livello: 1,
    sinonimi: ['poligono', 'poligoni regolari', 'quadrilateri', 'esagono', 'pentagono', 'diagonali'],
    domanda: "Cosa hanno in comune un cartello di stop, una cella d'alveare e un foglio?",
    esempio: "Il cartello di stop è un ottagono, le celle delle api sono esagoni, un foglio è un rettangolo.",
    idea: "Un poligono è una figura piana chiusa, delimitata da segmenti chiamati lati.\nSi chiama col numero dei lati: triangolo, quadrilatero, pentagono, esagono.\nUn poligono è regolare se ha tutti i lati e tutti gli angoli uguali.\nOgni poligono si può dividere in triangoli.\nPer questo la somma degli angoli interni cresce di 180 gradi per ogni lato in più.",
    perche_fa_pensare: "Con molti lati, un poligono regolare assomiglia sempre di più a un cerchio. È un primo assaggio dell'idea di limite.",
    dove_si_usa: "Nei pavimenti, nella grafica al computer, nelle mappe, nei cartelli stradali.",
    prerequisiti: [
      { id: 'triangolo', perche: "Ogni poligono si divide in triangoli." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-pitagora', titolo: 'Teorema di Pitagora', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'triangoli-e-poligoni', livello: 1,
    sinonimi: ['Pitagora', 'teorema di Pitagora', 'ipotenusa', 'cateti', 'triangolo rettangolo'],
    domanda: "Che legame c'è tra i lati di un triangolo rettangolo?",
    esempio: "Una scala lunga 5 metri, con la base a 3 metri dal muro, arriva a 4 metri di altezza. Infatti 9 più 16 fa 25.",
    idea: "In un triangolo rettangolo il lato opposto all'angolo retto si chiama ipotenusa, gli altri due cateti.\nIl quadrato costruito sull'ipotenusa ha la stessa area dei due quadrati sui cateti messi insieme.\nEsistono centinaia di dimostrazioni diverse.\nVale anche il contrario: se i lati rispettano questa relazione, il triangolo è rettangolo.\nPermette di calcolare distanze senza misurarle direttamente.",
    perche_fa_pensare: "La relazione era nota ai Babilonesi più di mille anni prima di Pitagora. Le stesse verità vengono trovate da culture lontane.",
    dove_si_usa: "In edilizia, nella navigazione, nel calcolo delle distanze sugli schermi e nelle mappe.",
    formula: {
      latex: 'a^2 + b^2 = c^2',
      come_si_legge: "a al quadrato più b al quadrato uguale c al quadrato.",
      a_parole: "Il quadrato dell'ipotenusa c è uguale alla somma dei quadrati dei cateti a e b."
    },
    prerequisiti: [
      { id: 'triangolo', perche: "Riguarda i triangoli rettangoli." },
      { id: 'area-e-perimetro', perche: "Si confrontano le aree di tre quadrati." },
      { id: 'potenze', perche: "Compaiono i quadrati delle lunghezze dei lati." }
    ],
    parenti: []
  },

  // Lunghezze e aree
  {
    id: 'area-e-perimetro', titolo: 'Perimetro e area', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'misura-delle-figure', livello: 1,
    sinonimi: ['area', 'perimetro', 'superficie', 'metri quadrati', 'area del rettangolo'],
    domanda: "Quanto spazio occupa una figura, e quanto è lungo il suo bordo?",
    esempio: "Per comprare il battiscopa ti serve il perimetro della stanza. Per comprare il pavimento ti serve l'area.",
    idea: "Il perimetro è la lunghezza del bordo di una figura.\nL'area misura quanta superficie occupa, contando quadratini di lato unitario.\nUn rettangolo di 3 metri per 4 ha area 12 metri quadrati e perimetro 14 metri.\nFigure con lo stesso perimetro possono avere aree molto diverse.\nPer le aree delle figure curve servono idee nuove, come quella di [[integrale-di-riemann|integrale]].",
    perche_fa_pensare: "Bordo e superficie sembrano legati, ma non in modo semplice. Tra tutte le figure con lo stesso bordo, il cerchio racchiude l'area massima.",
    dove_si_usa: "In edilizia, in agricoltura, nell'arredamento, nel calcolo del prezzo di un terreno.",
    prerequisiti: [
      { id: 'poligoni', perche: "Si calcolano area e perimetro dei poligoni." },
      { id: 'moltiplicazione-divisione', perche: "L'area di un rettangolo è una moltiplicazione." }
    ],
    parenti: []
  },
  {
    id: 'circonferenza-cerchio', titolo: 'Circonferenza e cerchio', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'misura-delle-figure', livello: 1,
    sinonimi: ['cerchio', 'circonferenza', 'raggio', 'diametro', 'centro'],
    domanda: "Cosa rende il cerchio una figura speciale?",
    esempio: "Un compasso, una ruota, un'onda in uno stagno: tutti i loro punti stanno alla stessa distanza da un centro.",
    idea: "La circonferenza è l'insieme dei punti del piano che hanno la stessa distanza da un punto, il centro.\nQuella distanza si chiama raggio.\nIl cerchio è la parte di piano racchiusa dalla circonferenza.\nIl diametro è il doppio del raggio.\nOgni retta che passa per il centro è un asse di simmetria.",
    perche_fa_pensare: "Gli antichi vedevano nel cerchio la forma perfetta e la attribuivano ai cieli. Le orbite vere, però, sono ellissi.",
    dove_si_usa: "Nelle ruote, negli ingranaggi, nei tubi, nelle antenne.",
    prerequisiti: [
      { id: 'punto-retta-piano', perche: "Si definisce con un centro e una distanza." }
    ],
    parenti: []
  },
  {
    id: 'pi-greco', titolo: 'Il numero π', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'misura-delle-figure', livello: 1,
    sinonimi: ['pi greco', 'pi', '3,14', 'rapporto tra circonferenza e diametro'],
    domanda: "Perché tutti i cerchi hanno lo stesso rapporto tra bordo e diametro?",
    esempio: "Misura il bordo di un piatto con un filo e dividilo per il diametro. Ottieni sempre circa 3,14, qualunque sia il piatto.",
    idea: "Pi greco è il rapporto tra la lunghezza di una circonferenza e il suo diametro.\nÈ lo stesso per tutti i cerchi, perché tutti i cerchi sono simili tra loro.\nVale circa 3,14159, ma le sue cifre decimali non finiscono e non si ripetono mai.\nNon è una frazione: è un numero irrazionale.\nCompare in moltissimi campi che, a prima vista, non hanno nulla a che fare con i cerchi.",
    perche_fa_pensare: "Un numero nato dalla geometria del cerchio ricompare in probabilità, in fisica, in statistica. Perché? È uno dei piccoli misteri della matematica.",
    dove_si_usa: "In ingegneria, in fisica, in statistica, nel calcolo di aree e volumi.",
    formula: {
      latex: '\\pi = \\frac{C}{d} \\approx 3{,}14159',
      come_si_legge: "pi greco uguale circonferenza fratto diametro, circa tre virgola uno quattro uno cinque nove.",
      a_parole: "Il bordo di un cerchio è poco più di tre volte il suo diametro, sempre nella stessa proporzione."
    },
    prerequisiti: [
      { id: 'circonferenza-cerchio', perche: "È una proprietà della circonferenza." },
      { id: 'rapporti-proporzioni', perche: "Pi greco è un rapporto tra due lunghezze." }
    ],
    parenti: []
  },
  {
    id: 'area-del-cerchio', titolo: 'Area del cerchio', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'misura-delle-figure', livello: 1,
    sinonimi: ['area del cerchio', 'pi greco erre quadro', 'superficie del cerchio'],
    domanda: "Come si misura l'area di una figura senza spigoli?",
    esempio: "Taglia una pizza in tante fette sottili e disponile alternate, punta in su e punta in giù. Ottieni quasi un rettangolo.",
    idea: "L'area del cerchio è pi greco per il raggio al quadrato.\nSi capisce tagliando il cerchio in tante fette sottili e riordinandole.\nLe fette formano quasi un rettangolo, alto quanto il raggio e lungo mezza circonferenza.\nPiù le fette sono sottili, più la figura assomiglia a un rettangolo vero.\nÈ un ragionamento che porta già verso l'idea di limite.",
    perche_fa_pensare: "Per misurare una figura curva bisogna pensarla fatta di infiniti pezzi dritti. L'infinito entra dalla porta di servizio.",
    dove_si_usa: "Nel calcolo di superfici rotonde: tavoli, piscine, sezioni di tubi e cavi.",
    formula: {
      latex: 'A = \\pi r^2',
      come_si_legge: "a uguale pi greco erre al quadrato.",
      a_parole: "L'area di un cerchio è pi greco moltiplicato per il quadrato del raggio."
    },
    prerequisiti: [
      { id: 'pi-greco', perche: "Nella formula compare pi greco." },
      { id: 'area-e-perimetro', perche: "Si confronta il cerchio con un rettangolo." }
    ],
    parenti: []
  },
  {
    id: 'metodo-di-esaustione', titolo: 'Il metodo di esaustione di Archimede', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'misura-delle-figure', livello: 2,
    sinonimi: ['esaustione', 'Archimede', 'poligoni inscritti', 'approssimare pi greco'],
    domanda: "Come si misura un cerchio con figure fatte di segmenti?",
    esempio: "Archimede chiuse il cerchio tra due poligoni di 96 lati, uno dentro e uno fuori. Così trovò che pi greco sta tra 3,1408 e 3,1429.",
    idea: "Il metodo di esaustione approssima una figura curva con figure più semplici.\nSi inscrive nella figura un poligono e se ne circoscrive un altro.\nAumentando i lati, i due poligoni stringono la figura sempre di più.\nCosì l'area cercata resta intrappolata tra due valori sempre più vicini.\nÈ un antenato del [[limite-di-successione|limite]] e dell'integrale, nato circa duemila anni prima.",
    perche_fa_pensare: "I Greci evitavano l'infinito, ma con questo metodo ci giravano intorno con grande precisione.",
    dove_si_usa: "Nel calcolo numerico di aree e nella storia del calcolo integrale.",
    prerequisiti: [
      { id: 'area-del-cerchio', perche: "Il caso più famoso è il calcolo dell'area del cerchio." },
      { id: 'poligoni', perche: "Si usano poligoni inscritti e circoscritti." }
    ],
    parenti: [
      { id: 'integrale-di-riemann', perche: "L'integrale riprende la stessa idea: stringere un'area tra somme di rettangoli." },
      { id: 'limite-di-successione', perche: "Le approssimazioni sempre migliori anticipano l'idea di limite." }
    ]
  },

  // Geometria nello spazio
  {
    id: 'solidi', titolo: 'Solidi e volumi', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 1,
    sinonimi: ['solido', 'volume', 'cubo', 'sfera', 'cilindro', 'piramide', 'cono', 'poliedri'],
    domanda: "Come si misura lo spazio occupato da un oggetto?",
    esempio: "Una scatola di 2 per 3 per 4 decimetri ha un volume di 24 decimetri cubi. Ci stanno 24 litri d'acqua.",
    idea: "Un solido è una figura a tre dimensioni, come un cubo, una sfera o un cilindro.\nIl volume misura quanto spazio occupa, contando cubetti di lato unitario.\nLa superficie misura l'estensione del suo bordo.\nI poliedri sono solidi limitati da facce piatte, come cubi e piramidi.\nUna piramide ha un terzo del volume del prisma con la stessa base e la stessa altezza.",
    perche_fa_pensare: "Raddoppiando le misure di un oggetto, il volume diventa otto volte più grande. Per questo i giganti delle favole non potrebbero stare in piedi.",
    dove_si_usa: "Negli imballaggi, nei serbatoi, in edilizia, nel calcolo delle dosi.",
    prerequisiti: [
      { id: 'area-e-perimetro', perche: "Il volume estende l'idea di area alle tre dimensioni." }
    ],
    parenti: []
  },
  {
    id: 'principio-di-cavalieri', titolo: 'Principio di Cavalieri', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 2,
    sinonimi: ['Cavalieri', 'principio di Cavalieri', 'indivisibili', 'sezioni uguali'],
    domanda: "Due solidi diversi possono avere lo stesso volume?",
    esempio: "Una pila di monete dritta e una pila storta hanno lo stesso volume. Ogni moneta occupa lo stesso spazio, comunque sia spostata.",
    idea: "Il principio di Cavalieri confronta due solidi tagliandoli a fette parallele.\nSe a ogni altezza le due fette hanno la stessa area, i solidi hanno lo stesso volume.\nBonaventura Cavalieri lo formulò nel Seicento.\nPensava i solidi come fatti di infinite fette sottilissime, gli «indivisibili».\nL'idea fu poi resa rigorosa dal calcolo integrale.",
    perche_fa_pensare: "Pensare un solido come una pila di infinite fette senza spessore è audace. Funzionava, prima ancora che qualcuno sapesse spiegare perché.",
    dove_si_usa: "Nel calcolo dei volumi di sfere, coni e solidi irregolari.",
    prerequisiti: [
      { id: 'solidi', perche: "Confronta i volumi di due solidi." }
    ],
    parenti: [
      { id: 'integrale-multiplo', perche: "Gli integrali multipli rendono rigoroso il calcolo dei volumi per fette." }
    ]
  },
  {
    id: 'solidi-platonici', titolo: 'I cinque solidi regolari', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 2,
    sinonimi: ['poliedri regolari', 'solidi platonici', 'tetraedro', 'ottaedro', 'dodecaedro', 'icosaedro'],
    domanda: "Quanti solidi perfettamente regolari esistono?",
    esempio: "I dadi dei giochi di ruolo hanno 4, 6, 8, 12 o 20 facce. Non è un caso: sono gli unici solidi regolari possibili.",
    idea: "Un poliedro regolare ha per facce poligoni regolari tutti uguali, e tutti i vertici uguali tra loro.\nNe esistono solo cinque: tetraedro, cubo, ottaedro, dodecaedro e icosaedro.\nIl motivo: intorno a un vertice, gli angoli delle facce devono sommare meno di 360 gradi.\nCon triangoli, quadrati o pentagoni le combinazioni possibili sono poche.\nLa dimostrazione completa chiude gli Elementi di Euclide.",
    perche_fa_pensare: "Platone associava i cinque solidi agli elementi della natura. Si sbagliava, ma l'idea di cercare forme matematiche nella natura è sopravvissuta.",
    dove_si_usa: "Nei dadi, in chimica e cristallografia, nell'architettura delle cupole.",
    prerequisiti: [
      { id: 'solidi', perche: "Sono solidi particolari." },
      { id: 'poligoni', perche: "Le facce sono poligoni regolari." }
    ],
    parenti: [
      { id: 'formula-di-eulero-poliedri', perche: "In tutti i solidi platonici vertici meno spigoli più facce fa 2." }
    ]
  },
  {
    id: 'terzo-problema-di-hilbert', titolo: 'Tagliare e ricomporre i poliedri', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 3,
    sinonimi: ['terzo problema di Hilbert', 'Dehn', 'equiscomponibilità', 'tagliare e ricomporre'],
    domanda: "Due solidi con lo stesso volume si possono sempre tagliare e ricomporre l'uno nell'altro?",
    esempio: "Due poligoni con la stessa area si possono sempre tagliare in pezzi e riassemblare l'uno nell'altro. Con i solidi, sorprendentemente, non sempre.",
    idea: "Nel piano, due poligoni con la stessa area si possono tagliare in pezzi e ricomporre l'uno nell'altro.\nHilbert, nel 1900, chiese se lo stesso valga per i poliedri con lo stesso volume.\nMax Dehn rispose di no nel giro di pochi mesi.\nUn cubo e un tetraedro regolare con lo stesso volume non si ricompongono l'uno nell'altro con tagli piani.\nPer questo, in tre dimensioni, i volumi richiedono idee più fini, come il [[principio-di-cavalieri|principio di Cavalieri]].",
    perche_fa_pensare: "Il piano e lo spazio si comportano in modo diverso su una questione che sembra identica. Le dimensioni contano.",
    dove_si_usa: "Nella teoria della misura e nella storia dei problemi di Hilbert.",
    prerequisiti: [
      { id: 'principio-di-cavalieri', perche: "Mostra perché, in tre dimensioni, servono metodi come quello di Cavalieri." }
    ],
    parenti: [
      { id: 'banach-tarski', perche: "Con pezzi non misurabili, invece, si può ricomporre una sfera in due sfere uguali." }
    ]
  },
  {
    id: 'politopi-regolari', titolo: 'Poliedri regolari in più dimensioni', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 3,
    sinonimi: ['politopi', 'quarta dimensione', 'ipercubo', 'tesseratto', 'poliedri in più dimensioni'],
    domanda: "Esistono solidi regolari in quattro dimensioni?",
    esempio: "Un ipercubo è il cugino del cubo in quattro dimensioni. Le sue ombre in tre dimensioni appaiono come un cubo dentro un cubo.",
    idea: "Un politopo regolare è l'analogo di un poligono o di un poliedro regolare in più dimensioni.\nIn quattro dimensioni ne esistono sei.\nDalla quinta dimensione in poi ne esistono sempre e solo tre: gli analoghi del tetraedro, del cubo e dell'ottaedro.\nNon si possono vedere, ma si studiano con le coordinate e con le loro ombre.\nLudwig Schläfli li classificò a metà dell'Ottocento.",
    perche_fa_pensare: "Più dimensioni non vuol dire più forme regolari. Le dimensioni alte sono, in un certo senso, più povere.",
    dove_si_usa: "Nella teoria dei codici, nella geometria dei dati e nella visualizzazione scientifica.",
    prerequisiti: [
      { id: 'solidi-platonici', perche: "Generalizzano i solidi platonici." },
      { id: 'spazi-a-n-dimensioni', perche: "Vivono in spazi con più di tre dimensioni." }
    ],
    parenti: []
  },
  {
    id: 'congettura-di-keplero', titolo: 'Impacchettare le sfere: la congettura di Keplero', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'geometria-solida', livello: 4,
    sinonimi: ['impacchettamento di sfere', 'Keplero', 'arance', 'Hales', 'sphere packing'],
    domanda: "Qual è il modo più compatto di impilare delle sfere?",
    esempio: "Il fruttivendolo impila le arance a piramide, ogni strato nelle cavità di quello sotto. Keplero pensava che nessuna disposizione fosse più compatta.",
    idea: "Keplero, nel 1611, congetturò che la piramide del fruttivendolo fosse la disposizione di sfere più compatta.\nCosì le sfere riempiono circa il 74 per cento dello spazio.\nLa dimostrazione arrivò solo nel 1998, da Thomas Hales.\nRichiedeva moltissimi calcoli al computer, difficili da controllare.\nNel 2014 una versione verificata formalmente al computer ha chiuso ogni dubbio.",
    perche_fa_pensare: "Un fruttivendolo sa da sempre una cosa che i matematici hanno dimostrato dopo quasi quattrocento anni. Sapere e dimostrare sono cose diverse.",
    dove_si_usa: "In cristallografia, in logistica, nei codici per trasmettere segnali.",
    prerequisiti: [
      { id: 'solidi', perche: "Riguarda la disposizione di sfere nello spazio." },
      { id: 'problema-di-ottimizzazione', perche: "Cerca la disposizione migliore possibile." }
    ],
    parenti: [
      { id: 'dimostrazione-assistita', perche: "La dimostrazione completa è stata verificata da un assistente di prova." },
      { id: 'codici-correttori', perche: "Impacchettare sfere in molte dimensioni serve a progettare codici che resistono agli errori." }
    ]
  },

  // Trasformazioni e similitudine
  {
    id: 'isometrie', titolo: 'Traslazioni, rotazioni e riflessioni', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 1,
    sinonimi: ['traslazione', 'rotazione', 'riflessione', 'simmetria assiale', 'movimenti rigidi', 'isometria'],
    domanda: "Come si sposta una figura senza deformarla?",
    esempio: "Spostare un mobile lungo una parete è una traslazione. Girare la chiave nella serratura è una rotazione. Lo specchio mostra una riflessione.",
    idea: "Un'isometria è una trasformazione del piano che conserva le distanze.\nLe principali sono traslazioni, rotazioni e riflessioni.\nUna figura spostata con un'isometria cambia posizione, ma non forma né dimensioni.\nApplicare un'isometria dopo l'altra dà ancora un'isometria.\nDue figure si dicono congruenti quando un'isometria porta l'una sull'altra.",
    perche_fa_pensare: "Guardare cosa resta uguale quando qualcosa cambia è uno dei modi più profondi di pensare. Da qui nasce l'idea di simmetria.",
    dove_si_usa: "Nei motivi decorativi, nella robotica, nell'animazione e nei videogiochi.",
    prerequisiti: [
      { id: 'angolo', perche: "Le rotazioni si descrivono con un angolo." }
    ],
    parenti: []
  },
  {
    id: 'simmetria', titolo: 'Simmetria', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 1,
    sinonimi: ['simmetrico', 'asse di simmetria', 'simmetria centrale', 'simmetrie'],
    domanda: "Cosa vuol dire che una cosa è simmetrica?",
    esempio: "Una farfalla resta uguale se la rifletti rispetto al suo asse. Un fiocco di neve resta uguale se lo ruoti di un sesto di giro.",
    idea: "Una simmetria di una figura è una trasformazione che la lascia uguale a sé stessa.\nUn quadrato, ad esempio, ha otto simmetrie: quattro rotazioni e quattro riflessioni.\nPiù simmetrie ha una figura, più è regolare.\nLe simmetrie di una figura si possono comporre, e formano una struttura chiamata [[gruppo]].\nLa simmetria non riguarda solo le forme, ma anche le equazioni e le leggi della fisica.",
    perche_fa_pensare: "Ciò che non cambia, quando tutto cambia, dice molto di una cosa. La fisica moderna è costruita su questa idea.",
    dove_si_usa: "In arte e architettura, in chimica, in cristallografia e nelle leggi della fisica.",
    prerequisiti: [
      { id: 'isometrie', perche: "Le simmetrie sono isometrie che lasciano la figura uguale." }
    ],
    parenti: []
  },
  {
    id: 'tassellazioni', titolo: 'Tassellazioni del piano', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 2,
    sinonimi: ['tassellazione', 'piastrellatura', 'pavimentazione', 'Escher', 'mosaici', 'Penrose'],
    domanda: "Con quali forme si può ricoprire un pavimento senza lasciare buchi?",
    esempio: "Puoi piastrellare un pavimento con triangoli, quadrati o esagoni regolari, ma non con pentagoni regolari.",
    idea: "Una tassellazione ricopre il piano con figure, senza buchi e senza sovrapposizioni.\nCon un solo tipo di poligono regolare funzionano solo triangoli, quadrati ed esagoni.\nIl motivo è che gli angoli intorno a ogni vertice devono sommare 360 gradi.\nLe tassellazioni che si ripetono hanno simmetrie, e i tipi di simmetria possibili sono 17.\nEsistono anche tassellazioni che non si ripetono mai, come quelle di Penrose.",
    perche_fa_pensare: "Gli artigiani dell'Alhambra e l'artista Escher hanno esplorato queste forme con l'arte. La matematica ne ha poi fatto l'inventario completo.",
    dove_si_usa: "Nei pavimenti, nei tessuti, nei cristalli, nei pannelli solari.",
    prerequisiti: [
      { id: 'poligoni', perche: "Le tessere sono spesso poligoni." },
      { id: 'isometrie', perche: "Le tassellazioni ripetute si spostano su sé stesse con isometrie." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-talete', titolo: 'Teorema di Talete', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 2,
    sinonimi: ['Talete', 'fascio di rette parallele', 'segmenti proporzionali'],
    domanda: "Come si misura l'altezza di una piramide con un bastone?",
    esempio: "Si racconta che Talete misurò una piramide confrontando la sua ombra con l'ombra di un bastone. Ombre e altezze stanno nella stessa proporzione.",
    idea: "Il teorema di Talete riguarda rette parallele tagliate da due trasversali.\nDice che i segmenti su una trasversale sono proporzionali a quelli corrispondenti sull'altra.\nIn pratica, le rette parallele conservano le proporzioni.\nÈ la base della [[similitudine]] tra figure.\nPermette di misurare distanze irraggiungibili confrontando triangoli.",
    perche_fa_pensare: "Con un bastone e un po' di ragionamento si misura un monumento enorme. È uno dei primi esempi del potere della geometria.",
    dove_si_usa: "In topografia, nel disegno in scala, in fotografia e nelle mappe.",
    prerequisiti: [
      { id: 'rette-parallele-perpendicolari', perche: "Parla di rette parallele." },
      { id: 'rapporti-proporzioni', perche: "La conclusione è una proporzione." }
    ],
    parenti: []
  },
  {
    id: 'similitudine', titolo: 'Similitudine', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 2,
    sinonimi: ['figure simili', 'scala', 'ingrandimento', 'omotetia', 'triangoli simili'],
    domanda: "Cosa resta uguale quando ingrandisci una figura?",
    esempio: "Una foto stampata più grande è simile all'originale. Gli angoli sono gli stessi, e tutte le lunghezze crescono nella stessa proporzione.",
    idea: "Due figure sono simili se hanno la stessa forma, anche con dimensioni diverse.\nGli angoli corrispondenti sono uguali e i lati corrispondenti sono proporzionali.\nIl rapporto tra le lunghezze si chiama rapporto di similitudine.\nSe le lunghezze raddoppiano, le aree diventano quattro volte più grandi e i volumi otto volte.\nPer i triangoli basta controllare che abbiano gli stessi angoli.",
    perche_fa_pensare: "Forma e grandezza si possono separare. Ma il mondo fisico non è indifferente alla scala: un insetto grande come un elefante crollerebbe.",
    dove_si_usa: "Nelle mappe, nei modellini, in fotografia, nel progetto di oggetti in scala.",
    prerequisiti: [
      { id: 'teorema-di-talete', perche: "Il teorema di Talete è lo strumento per dimostrare la similitudine." },
      { id: 'triangolo', perche: "La similitudine tra triangoli è il caso più importante." }
    ],
    parenti: []
  },
  {
    id: 'sezione-aurea', titolo: 'Sezione aurea', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trasformazioni-e-similitudine', livello: 2,
    sinonimi: ['sezione aurea', 'rapporto aureo', 'numero aureo', 'phi', 'divina proporzione', '1,618'],
    domanda: "Esiste una proporzione «perfetta»?",
    esempio: "Taglia un segmento in due parti: il tutto deve stare alla parte lunga come la parte lunga sta alla corta. Il rapporto viene circa 1,618.",
    idea: "La sezione aurea divide un segmento in due parti con una proprietà speciale.\nIl segmento intero sta alla parte più lunga come la parte lunga sta alla corta.\nIl rapporto vale circa 1,618 ed è un numero irrazionale.\nCompare nel pentagono regolare e nella [[successione-di-fibonacci|successione di Fibonacci]].\nMolte affermazioni sulla sua presenza nell'arte e nel corpo umano sono esagerate o false.",
    perche_fa_pensare: "Un numero con proprietà eleganti attira miti. Distinguere la matematica vera dalle leggende è parte del pensiero critico.",
    dove_si_usa: "Nella geometria del pentagono, in alcuni metodi di ricerca numerica e nella grafica.",
    formula: {
      latex: '\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}618',
      come_si_legge: "fi uguale uno più radice di cinque, fratto due. Vale circa uno virgola sei uno otto.",
      a_parole: "Il rapporto aureo è un numero irrazionale poco più grande di uno e mezzo."
    },
    prerequisiti: [
      { id: 'rapporti-proporzioni', perche: "È una proporzione speciale." },
      { id: 'equazioni-di-secondo-grado', perche: "Il suo valore si trova risolvendo un'equazione di secondo grado." }
    ],
    parenti: [
      { id: 'successione-di-fibonacci', perche: "I rapporti tra numeri di Fibonacci consecutivi si avvicinano al rapporto aureo." },
      { id: 'poligoni', perche: "Nel pentagono regolare, diagonale e lato stanno nel rapporto aureo." }
    ]
  },

  // Trigonometria
  {
    id: 'seno-coseno', titolo: 'Seno, coseno e tangente', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 2,
    sinonimi: ['seno', 'coseno', 'tangente', 'trigonometria', 'rapporti trigonometrici', 'sin cos tan'],
    domanda: "Come si legano gli angoli e le lunghezze di un triangolo rettangolo?",
    esempio: "Una rampa lunga 12 metri sale di 1 metro. Il seno del suo angolo di salita è un dodicesimo.",
    idea: "In un triangolo rettangolo, seno, coseno e tangente sono rapporti tra lati che dipendono solo da un angolo.\nIl seno è il cateto opposto all'angolo diviso l'ipotenusa.\nIl coseno è il cateto adiacente diviso l'ipotenusa.\nLa tangente è il cateto opposto diviso quello adiacente.\nNon dipendono dalla grandezza del triangolo, grazie alla [[similitudine]].",
    perche_fa_pensare: "Trasformare un angolo in un numero ha permesso di misurare montagne, mari e stelle senza raggiungerli.",
    dove_si_usa: "In topografia, navigazione, astronomia, architettura e grafica al computer.",
    prerequisiti: [
      { id: 'similitudine', perche: "I rapporti non cambiano per triangoli simili." },
      { id: 'teorema-di-pitagora', perche: "Seno e coseno sono legati dal teorema di Pitagora." }
    ],
    parenti: []
  },
  {
    id: 'radianti', titolo: 'Misurare gli angoli in radianti', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 2,
    sinonimi: ['radiante', 'misura in radianti', 'gradi e radianti', 'angolo giro'],
    domanda: "Esiste un modo più naturale dei gradi per misurare gli angoli?",
    esempio: "Su una circonferenza di raggio 1, un arco lungo 1 corrisponde a un angolo di un radiante, circa 57 gradi.",
    idea: "Un radiante è l'angolo che, su una circonferenza, stacca un arco lungo quanto il raggio.\nUn giro completo vale 2 pi greco radianti, cioè circa 6,28.\nUn angolo retto vale pi greco mezzi.\nA differenza dei gradi, i radianti non dipendono da una scelta arbitraria come il 360.\nPer questo in analisi e in fisica si usano i radianti.",
    perche_fa_pensare: "Misurare un angolo con la lunghezza di un arco lega la geometria ai numeri in modo naturale. Molte formule diventano più semplici.",
    dove_si_usa: "In fisica, in ingegneria, nella programmazione della grafica e dei robot.",
    prerequisiti: [
      { id: 'angolo', perche: "Sono un'altra unità di misura degli angoli." },
      { id: 'pi-greco', perche: "Un giro completo vale 2 pi greco radianti." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-trigonometriche', titolo: 'Funzioni goniometriche', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 2,
    sinonimi: ['funzioni goniometriche', 'circonferenza goniometrica', 'sinusoide', 'funzioni periodiche', 'seno e coseno come funzioni'],
    domanda: "Come si descrive matematicamente qualcosa che si ripete?",
    esempio: "L'altezza di una cabina su una ruota panoramica, nel tempo, sale e scende sempre allo stesso modo. Il suo grafico è una sinusoide.",
    idea: "Le funzioni goniometriche estendono seno e coseno ad angoli qualsiasi.\nSi definiscono su una circonferenza di raggio 1.\nIl coseno è la coordinata orizzontale di un punto, il seno quella verticale.\nFacendo girare il punto, seno e coseno si ripetono dopo ogni giro.\nSono funzioni periodiche, con grafici a onda chiamati sinusoidi.\nSono il linguaggio naturale di tutto ciò che oscilla.",
    perche_fa_pensare: "Ogni suono, ogni onda, ogni ciclo si può scomporre in sinusoidi. Il cerchio contiene il segreto di tutto ciò che si ripete.",
    dove_si_usa: "Nella musica, nella corrente alternata, nelle maree, nella grafica e nei segnali radio.",
    prerequisiti: [
      { id: 'seno-coseno', perche: "Estendono seno e coseno ad angoli qualsiasi." },
      { id: 'radianti', perche: "Gli angoli si misurano in radianti." },
      { id: 'grafico-di-funzione', perche: "Il loro grafico mostra le oscillazioni." }
    ],
    parenti: []
  },
  {
    id: 'teoremi-seni-coseno', titolo: 'Teorema dei seni e teorema del coseno', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 2,
    sinonimi: ['teorema dei seni', 'teorema del coseno', 'teorema di Carnot', 'risoluzione dei triangoli', 'triangolazione'],
    domanda: "Come si risolve un triangolo qualsiasi?",
    esempio: "Da due punti di una costa si misurano gli angoli verso una nave. Conoscendo la distanza tra i due punti, si calcola quanto è lontana la nave.",
    idea: "Il teorema dei seni dice che in ogni triangolo i lati sono proporzionali ai seni degli angoli opposti.\nIl teorema del coseno estende il teorema di Pitagora ai triangoli non rettangoli.\nCon questi due teoremi, da tre dati si calcolano tutti gli altri lati e angoli.\nServe però che almeno uno dei dati sia un lato.\nSu questo principio si basa la triangolazione, usata per secoli per disegnare le mappe.",
    perche_fa_pensare: "Per secoli intere nazioni sono state misurate con catene di triangoli. Un'idea di geometria antica ha disegnato il mondo.",
    dove_si_usa: "In topografia, nella navigazione, nella localizzazione con le antenne e in astronomia.",
    formula: {
      latex: 'c^2 = a^2 + b^2 - 2ab\\cos\\gamma',
      come_si_legge: "c al quadrato uguale a al quadrato più b al quadrato, meno due a b per il coseno di gamma.",
      a_parole: "Il teorema del coseno corregge Pitagora con un termine che dipende dall'angolo tra i lati a e b."
    },
    prerequisiti: [
      { id: 'seno-coseno', perche: "Usano seno e coseno degli angoli." }
    ],
    parenti: []
  },
  {
    id: 'formule-di-addizione', titolo: 'Formule di addizione', tipo: 'teorema', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 2,
    sinonimi: ['formule di addizione', 'seno della somma', 'coseno della somma', 'formule di duplicazione'],
    domanda: "Quanto vale il seno di una somma di angoli?",
    esempio: "Il seno di 75 gradi si calcola come seno di 45 più 30 gradi, usando valori già noti.",
    idea: "Le formule di addizione danno seno e coseno della somma di due angoli.\nIl seno di una somma non è la somma dei seni: c'è una formula più ricca.\nCombina seni e coseni dei due angoli.\nDa queste formule ne seguono molte altre, come quelle per l'angolo doppio.\nSono il cuore del calcolo trigonometrico.",
    perche_fa_pensare: "Queste formule, che sembrano aride, nascondono una rotazione del piano. Con i numeri complessi diventano una semplice moltiplicazione.",
    dove_si_usa: "Nell'elaborazione dei segnali, in acustica, nella grafica 3D.",
    formula: {
      latex: '\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta',
      come_si_legge: "seno di alfa più beta uguale seno di alfa per coseno di beta. Più coseno di alfa per seno di beta.",
      a_parole: "Il seno di una somma di angoli mescola i seni e i coseni dei due angoli."
    },
    prerequisiti: [
      { id: 'funzioni-trigonometriche', perche: "Riguardano seno e coseno di angoli qualsiasi." }
    ],
    parenti: [
      { id: 'formula-di-eulero', perche: "Con la formula di Eulero le formule di addizione si ricavano in una riga." }
    ]
  },
  {
    id: 'trigonometria-sferica', titolo: 'Trigonometria sferica', tipo: 'concetto', area: 'geometria-euclidea', argomento: 'trigonometria', livello: 3,
    sinonimi: ['triangoli sferici', 'navigazione', 'rotte aeree', 'cerchio massimo'],
    domanda: "Come si calcolano distanze e direzioni sulla superficie della Terra?",
    esempio: "La rotta più breve tra Roma e New York, su una carta piatta, sembra curvare verso nord. Sulla sfera è il percorso più diretto.",
    idea: "La trigonometria sferica studia i triangoli disegnati su una sfera.\nI lati sono archi di cerchio massimo, cioè di cerchi che dividono la sfera in due metà uguali.\nGli angoli di un triangolo sferico sommano più di 180 gradi.\nEsistono teoremi dei seni e del coseno sferici, simili a quelli del piano.\nPer triangoli piccoli rispetto alla sfera si ritrovano le formule del piano.",
    perche_fa_pensare: "Viviamo su una sfera ma pensiamo in piano. Basta allargare lo sguardo perché le regole cambino.",
    dove_si_usa: "Nella navigazione aerea e marittima, in astronomia, nei sistemi di posizionamento.",
    prerequisiti: [
      { id: 'teoremi-seni-coseno', perche: "Estende i teoremi dei seni e del coseno alla sfera." },
      { id: 'geometria-sferica', perche: "I triangoli vivono sulla superficie di una sfera." }
    ],
    parenti: []
  }
]);
