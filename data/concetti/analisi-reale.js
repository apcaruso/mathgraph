/* Analisi reale */
Mappa.registra([
  // Limiti
  {
    id: 'paradossi-di-zenone', titolo: 'Achille e la tartaruga', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 1,
    sinonimi: ['Zenone', 'Achille e la tartaruga', 'paradosso di Zenone', 'dicotomia', 'paradosso della freccia'],
    domanda: "Come può Achille raggiungere la tartaruga?",
    esempio: "Achille corre verso la tartaruga. Quando arriva dove lei era, lei si è spostata un po' più avanti. Sembra che non la raggiunga mai.",
    idea: "Zenone di Elea propose alcuni paradossi sul movimento, circa 2500 anni fa.\nNel più famoso, Achille deve compiere infinite tappe per raggiungere la tartaruga.\nSembra impossibile completare infiniti passi in un tempo finito.\nLa matematica risponde che infinite durate sempre più piccole possono avere una somma finita.\nÈ l'idea di [[serie]] convergente.",
    perche_fa_pensare: "La risposta matematica convince quasi tutti, ma alcuni filosofi pensano che non chiuda del tutto la questione. Cosa vuol dire, davvero, completare infiniti passi?",
    dove_si_usa: "Come introduzione alle serie e ai limiti, e in filosofia del tempo e dello spazio.",
    prerequisiti: [
      { id: 'frazioni', perche: "Le tappe si dimezzano: metà, un quarto, un ottavo." }
    ],
    parenti: [
      { id: 'serie-geometrica', perche: "Le tappe di Achille formano una serie geometrica." }
    ]
  },
  {
    id: 'completezza-dei-reali', titolo: 'Completezza dei reali ed estremo superiore', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 3,
    sinonimi: ['completezza', 'estremo superiore', 'assioma di continuità', 'sup', 'reali senza buchi'],
    domanda: "Cosa manca ai numeri razionali?",
    esempio: "Le frazioni con quadrato minore di 2 non superano mai 1,5. Ma tra le frazioni non c'è un «bordo» preciso. Il bordo è la radice di 2, che non è una frazione.",
    idea: "I numeri reali sono completi: non hanno buchi.\nIn termini precisi, ogni insieme di reali non vuoto e limitato superiormente ha un estremo superiore.\nL'estremo superiore è il più piccolo numero che sta sopra a tutti gli elementi dell'insieme.\nI razionali non hanno questa proprietà, come mostra la radice di 2.\nTutta l'analisi si fonda su questa proprietà.",
    perche_fa_pensare: "La completezza non si vede e non si misura: è una scelta su come costruire i numeri. Eppure senza di essa crollerebbero i teoremi dell'analisi.",
    dove_si_usa: "In tutti i teoremi dell'analisi che garantiscono l'esistenza di qualcosa.",
    prerequisiti: [
      { id: 'numeri-reali', perche: "È la proprietà che distingue i reali dai razionali." },
      { id: 'relazione-d-ordine', perche: "L'estremo superiore si definisce con l'ordine." },
      { id: 'sottoinsieme', perche: "Riguarda i sottoinsiemi dei numeri reali." }
    ],
    parenti: []
  },
  {
    id: 'limite-di-successione', titolo: 'Limite di una successione', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 2,
    sinonimi: ['limite', 'convergenza', 'successione convergente', 'tendere a', 'limite di una successione'],
    domanda: "Cosa vuol dire avvicinarsi senza mai arrivare?",
    esempio: "La successione 0,9; 0,99; 0,999; e così via si avvicina sempre di più a 1. Si dice che il suo limite è 1.",
    idea: "Il limite di una successione è il numero a cui i suoi termini si avvicinano sempre di più.\nPiù precisamente: da un certo punto in poi, i termini restano vicini al limite quanto vuoi.\nNon serve che un termine sia uguale al limite.\nUna successione che ha un limite si dice convergente.\nAlcune successioni non hanno limite: oscillano o crescono senza fine.",
    perche_fa_pensare: "Con il limite, l'infinito diventa un processo controllato. Si parla di «alla fine» senza dover arrivare alla fine.",
    dove_si_usa: "In tutta l'analisi, nelle approssimazioni numeriche, nei calcoli finanziari.",
    prerequisiti: [
      { id: 'successione', perche: "Si parla del comportamento di una successione." },
      { id: 'valore-assoluto', perche: "La vicinanza si misura con il valore assoluto della differenza." }
    ],
    parenti: []
  },
  {
    id: 'limite-di-funzione', titolo: 'Limite di una funzione', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 2,
    sinonimi: ['limite di una funzione', 'limite', 'tendere a', 'asintoto', 'limite destro e sinistro'],
    domanda: "Cosa fa una funzione vicino a un punto, anche se lì non è definita?",
    esempio: "La velocità media in intervalli di tempo sempre più brevi si avvicina a un valore preciso: la velocità in quell'istante.",
    idea: "Il limite di una funzione in un punto descrive cosa succede ai risultati vicino a quel punto.\nÈ il valore a cui si avvicinano quando l'ingresso si avvicina al punto.\nNon conta cosa succede esattamente nel punto, ma solo vicino.\nUna funzione può non essere definita in un punto e avere comunque un limite lì.\nSi studiano anche limiti all'infinito, per capire come si comporta una funzione lontano.\nÈ lo strumento che permette di definire derivate e integrali.",
    perche_fa_pensare: "Si può conoscere qualcosa guardando solo i dintorni. È l'arte di avvicinarsi senza toccare.",
    dove_si_usa: "Nella definizione della velocità istantanea, delle pendenze, dei tassi di crescita.",
    prerequisiti: [
      { id: 'limite-di-successione', perche: "Si definisce a partire dall'idea di limite di una successione." },
      { id: 'grafico-di-funzione', perche: "Il grafico aiuta a vedere a cosa si avvicina la funzione." }
    ],
    parenti: []
  },
  {
    id: 'definizione-epsilon-delta', titolo: 'La definizione rigorosa di limite', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 3,
    sinonimi: ['epsilon delta', 'definizione di limite', 'Weierstrass', 'rigore', 'epsilon'],
    domanda: "Come si rende preciso «vicino quanto si vuole»?",
    esempio: "Un artigiano deve tagliare un pezzo entro una tolleranza fissata dal cliente. Per ogni tolleranza richiesta, deve sapere quanto essere preciso nella misura.",
    idea: "La definizione rigorosa di limite trasforma il «vicino» in un gioco tra due persone.\nUna persona fissa una tolleranza piccola a piacere, chiamata epsilon.\nL'altra risponde con un margine, chiamato delta, entro cui deve stare l'ingresso.\nIl limite esiste se, per ogni epsilon, si trova sempre un delta che funziona.\nFu messa a punto nell'Ottocento, soprattutto da Cauchy e Weierstrass.",
    perche_fa_pensare: "Per due secoli il calcolo ha funzionato senza basi rigorose. Questa definizione ha tolto l'infinitamente piccolo, sostituendolo con un ragionamento finito.",
    dove_si_usa: "Nelle dimostrazioni dell'analisi e nella stima degli errori nei calcoli numerici.",
    prerequisiti: [
      { id: 'limite-di-funzione', perche: "Rende precisa l'idea di limite." },
      { id: 'quantificatori', perche: "Usa «per ogni» ed «esiste» nell'ordine giusto." }
    ],
    parenti: []
  },
  {
    id: 'numero-e', titolo: 'Il numero e', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 2,
    sinonimi: ['e', 'numero di Nepero', 'numero di Eulero', '2,718', 'base dei logaritmi naturali'],
    domanda: "Cosa succede se gli interessi vengono pagati di continuo?",
    esempio: "Metti 1 euro al 100 per cento annuo. Con interessi pagati ogni mese ottieni circa 2,61 euro, ogni giorno circa 2,71. Il limite è e, circa 2,718.",
    idea: "Il numero e vale circa 2,718 ed è irrazionale.\nNasce come limite di uno più uno su n, il tutto alla n, quando n cresce.\nÈ la base naturale delle funzioni esponenziali.\nLa funzione e alla x ha una proprietà unica: la sua velocità di crescita è uguale al suo valore.\nPer questo compare ovunque ci sia una crescita o un decadimento proporzionale a sé stesso.",
    perche_fa_pensare: "Un numero nato da un problema di interessi bancari si rivela fondamentale per tutta la scienza. La matematica collega cose lontanissime.",
    dove_si_usa: "In finanza, in biologia, in fisica, nel calcolo delle probabilità.",
    formula: {
      latex: 'e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^{n} \\approx 2{,}718',
      come_si_legge: "e uguale limite, per n che tende a infinito, di uno più uno su n, alla n. Vale circa due virgola sette uno otto.",
      a_parole: "Il numero e è ciò a cui tende la crescita composta quando gli interessi si pagano sempre più spesso."
    },
    prerequisiti: [
      { id: 'limite-di-successione', perche: "Si definisce come limite." },
      { id: 'funzione-esponenziale', perche: "È la base più naturale per l'esponenziale." }
    ],
    parenti: []
  },
  {
    id: 'successione-di-cauchy', titolo: 'Successioni di Cauchy', tipo: 'concetto', area: 'analisi-reale', argomento: 'limiti', livello: 3,
    sinonimi: ['Cauchy', 'successione di Cauchy', 'completezza', 'convergenza senza limite noto'],
    domanda: "Si può sapere che una successione converge senza conoscerne il limite?",
    esempio: "Le approssimazioni 1; 1,4; 1,41; 1,414 della radice di 2 si stringono sempre di più tra loro. Tra le frazioni, però, non hanno un limite.",
    idea: "Una successione è di Cauchy se, da un certo punto in poi, i termini sono vicini tra loro quanto vuoi.\nNon serve sapere in anticipo dove vanno a finire.\nNei numeri reali, ogni successione di Cauchy converge: è un altro modo di dire che sono completi.\nNei razionali no: i termini possono stringersi intorno a un buco.\nCon questa idea si costruiscono i numeri reali e molti spazi dell'analisi.",
    perche_fa_pensare: "Si può riconoscere una meta dal modo in cui ci si avvicina, senza vederla. È un ragionamento sulla coerenza interna.",
    dove_si_usa: "Nella costruzione dei reali, negli spazi di funzioni, nei metodi numerici che ripetono un calcolo.",
    prerequisiti: [
      { id: 'limite-di-successione', perche: "Generalizza l'idea di successione convergente." },
      { id: 'completezza-dei-reali', perche: "Nei reali completi ogni successione di Cauchy converge." }
    ],
    parenti: []
  },

  // Continuità
  {
    id: 'funzione-continua', titolo: 'Funzione continua', tipo: 'concetto', area: 'analisi-reale', argomento: 'continuita', livello: 2,
    sinonimi: ['continuità', 'funzione continua', 'senza salti', 'discontinuità'],
    domanda: "Cosa vuol dire che una funzione non fa salti?",
    esempio: "La temperatura cambia con continuità: per passare da 10 a 20 gradi passa da tutti i valori intermedi. Il prezzo di una spedizione, invece, cambia a scatti.",
    idea: "Una funzione è continua in un punto se il suo limite in quel punto è uguale al suo valore.\nIn parole semplici, piccoli cambiamenti dell'ingresso producono piccoli cambiamenti del risultato.\nIl grafico di una funzione continua su un intervallo si disegna senza staccare la matita.\nPolinomi, esponenziali, seno e coseno sono continui.\nMolti teoremi importanti valgono solo per le funzioni continue.",
    perche_fa_pensare: "La natura sembra continua, ma la materia è fatta di atomi. La continuità è una proprietà del mondo o dei nostri modelli?",
    dove_si_usa: "Nei modelli fisici, nell'ingegneria dei controlli, nell'analisi dei segnali.",
    prerequisiti: [
      { id: 'limite-di-funzione', perche: "La continuità si definisce con il limite." }
    ],
    parenti: []
  },
  {
    id: 'teorema-valori-intermedi', titolo: 'Teorema dei valori intermedi', tipo: 'teorema', area: 'analisi-reale', argomento: 'continuita', livello: 2,
    sinonimi: ['valori intermedi', 'teorema degli zeri', 'Bolzano', 'teorema di Bolzano'],
    domanda: "Se una funzione passa da negativo a positivo, deve passare per lo zero?",
    esempio: "Alle 6 la temperatura è sotto zero, alle 12 è sopra. Allora in qualche istante è stata esattamente zero gradi.",
    idea: "Il teorema dei valori intermedi riguarda le funzioni continue su un intervallo.\nSe la funzione assume due valori, assume anche tutti i valori compresi tra loro.\nIn particolare, se cambia segno, si annulla almeno una volta.\nSembra evidente, ma richiede la [[completezza-dei-reali|completezza dei reali]].\nSui soli numeri razionali sarebbe falso.",
    perche_fa_pensare: "Un fatto che sembra scontato si regge su una proprietà profonda dei numeri. Senza la completezza, il teorema crolla.",
    dove_si_usa: "Nei metodi numerici per risolvere equazioni, come il metodo di bisezione.",
    prerequisiti: [
      { id: 'funzione-continua', perche: "Vale per le funzioni continue." }
    ],
    parenti: [
      { id: 'completezza-dei-reali', perche: "La dimostrazione usa la completezza dei reali." }
    ]
  },
  {
    id: 'teorema-di-weierstrass', titolo: 'Teorema di Weierstrass: massimo e minimo', tipo: 'teorema', area: 'analisi-reale', argomento: 'continuita', livello: 2,
    sinonimi: ['Weierstrass', 'massimo e minimo', 'teorema di Weierstrass', 'esistenza del massimo'],
    domanda: "Una funzione continua ha sempre un punto più alto?",
    esempio: "Fai una gita in montagna da un rifugio a un altro. C'è sempre un punto in cui sei stato più in alto che in tutti gli altri.",
    idea: "Una funzione continua su un intervallo chiuso e limitato ha sempre un massimo e un minimo.\nCioè esistono punti in cui raggiunge il valore più alto e quello più basso.\nServono tutte le ipotesi: su un intervallo aperto il massimo può mancare.\nIl teorema garantisce che il massimo esiste, ma non dice dove si trova.\nPer trovarlo servono altri strumenti, come le derivate.",
    perche_fa_pensare: "Sapere che una soluzione esiste, senza sapere dove, è comunque prezioso. Evita di cercare qualcosa che non c'è.",
    dove_si_usa: "Nei problemi di ottimizzazione e in molte dimostrazioni dell'analisi.",
    prerequisiti: [
      { id: 'funzione-continua', perche: "Vale per le funzioni continue." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-patologiche', titolo: 'Funzioni continue senza derivata in nessun punto', tipo: 'concetto', area: 'analisi-reale', argomento: 'continuita', livello: 3,
    sinonimi: ['funzione di Weierstrass', 'continua ma non derivabile', 'funzioni mostruose', 'curve senza tangente'],
    domanda: "Una curva può essere continua e non avere tangente in nessun punto?",
    esempio: "Il bordo di una costa frastagliata, ingrandito, mostra sempre nuove insenature. Alcune funzioni sono così a ogni scala.",
    idea: "Nel 1872 Weierstrass presentò una funzione continua ma senza derivata in nessun punto.\nIl suo grafico non ha salti, ma ha spigoli ovunque, a ogni ingrandimento.\nSi costruisce sommando infinite onde sempre più rapide e più piccole.\nAll'epoca molti matematici la considerarono un «mostro».\nOggi si sa che, in un senso preciso, la maggior parte delle funzioni continue è fatta così.",
    perche_fa_pensare: "L'intuizione diceva che una curva continua è quasi sempre liscia. L'intuizione si sbagliava, e i «mostri» erano la regola.",
    dove_si_usa: "Nello studio dei frattali, del moto browniano e dei segnali irregolari.",
    prerequisiti: [
      { id: 'funzione-continua', perche: "La funzione è continua." },
      { id: 'derivata', perche: "Mostra che la continuità non garantisce l'esistenza della derivata." },
      { id: 'serie', perche: "Si costruisce come somma infinita di onde." }
    ],
    parenti: [
      { id: 'frattali', perche: "Il grafico ha una struttura simile a ogni scala, come un frattale." }
    ]
  },

  // Derivate
  {
    id: 'derivata', titolo: 'Derivata', tipo: 'concetto', area: 'analisi-reale', argomento: 'derivate', livello: 2,
    sinonimi: ['derivata', 'velocità istantanea', 'tasso di variazione', 'pendenza della tangente', 'differenziale'],
    domanda: "Come si misura un cambiamento istantaneo?",
    esempio: "Il tachimetro dell'auto non mostra la velocità media del viaggio, ma quella di questo istante. Quel numero è una derivata.",
    idea: "La derivata misura quanto cambia una funzione in un preciso istante.\nSi ottiene come [[limite-di-funzione|limite]] del rapporto tra la variazione del risultato e quella dell'ingresso.\nGeometricamente è la pendenza della retta tangente al grafico.\nSe la derivata è positiva la funzione cresce, se è negativa cala.\nNewton e Leibniz la scoprirono in modo indipendente nel Seicento.",
    perche_fa_pensare: "La velocità in un istante sembra un paradosso: in un istante non ci si muove. Il limite risolve il paradosso di Zenone in un modo nuovo.",
    dove_si_usa: "In fisica, in economia, in ingegneria, ovunque si studi come cambia qualcosa.",
    formula: {
      latex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
      come_si_legge: "effe primo di x è uguale al limite, per h che tende a zero, di una frazione. Sopra: effe di x più h, meno effe di x. Sotto: h.",
      a_parole: "La derivata è il rapporto tra variazione del risultato e variazione dell'ingresso, quando questa diventa piccolissima."
    },
    prerequisiti: [
      { id: 'limite-di-funzione', perche: "La derivata è un limite." },
      { id: 'equazione-della-retta', perche: "È la pendenza di una retta, la tangente." }
    ],
    parenti: []
  },
  {
    id: 'regole-di-derivazione', titolo: 'Regole di derivazione', tipo: 'concetto', area: 'analisi-reale', argomento: 'derivate', livello: 2,
    sinonimi: ['regole di derivazione', 'derivate fondamentali', 'regola della catena', 'derivata del prodotto', 'calcolo delle derivate'],
    domanda: "Come si calcolano le derivate senza fare ogni volta un limite?",
    esempio: "La derivata di x al quadrato è 2x. Ma quella di x al quadrato per il seno di x? Una regola dice come combinare le due.",
    idea: "Le regole di derivazione permettono di derivare funzioni complicate partendo da quelle semplici.\nLa derivata di una somma è la somma delle derivate.\nPer il prodotto e il quoziente ci sono formule apposite.\nLa regola della catena dice come derivare una funzione di una funzione.\nCon una tabella di derivate di base e queste regole si derivano quasi tutte le funzioni che si incontrano.",
    perche_fa_pensare: "Una volta trovate le regole, un problema profondo diventa un calcolo meccanico. È la forza, e il rischio, di ogni formalismo.",
    dove_si_usa: "In fisica, in economia, nei programmi che calcolano derivate in automatico.",
    prerequisiti: [
      { id: 'derivata', perche: "Le regole servono a calcolare le derivate." }
    ],
    parenti: []
  },
  {
    id: 'massimi-minimi', titolo: 'Massimi e minimi con le derivate', tipo: 'concetto', area: 'analisi-reale', argomento: 'derivate', livello: 2,
    sinonimi: ['massimo', 'minimo', 'punti stazionari', 'studio di funzione', 'derivata nulla'],
    domanda: "Come si trova il punto più alto o più basso di una curva?",
    esempio: "Un'azienda cerca il prezzo che rende massimo il guadagno. Scrive il guadagno come funzione del prezzo e cerca dove la derivata si annulla.",
    idea: "Nei punti di massimo e di minimo interni, la derivata vale zero: la tangente è orizzontale.\nPer trovarli si cercano i punti in cui la derivata si annulla.\nNon tutti sono massimi o minimi: in alcuni la curva si appiattisce e poi continua a salire.\nIl segno della derivata prima e dopo il punto dice di che tipo è.\nBisogna controllare anche i bordi dell'intervallo, dove la derivata può non annullarsi.",
    perche_fa_pensare: "In cima a una collina, per un attimo, non si sale né si scende. È lì che la matematica cerca l'ottimo.",
    dove_si_usa: "In economia, in ingegneria, nella logistica, ovunque si voglia ottimizzare.",
    prerequisiti: [
      { id: 'regole-di-derivazione', perche: "Bisogna calcolare la derivata." },
      { id: 'teorema-di-weierstrass', perche: "Il teorema garantisce che massimo e minimo esistono." }
    ],
    parenti: [
      { id: 'problema-di-ottimizzazione', perche: "È lo strumento classico per i problemi di ottimizzazione." }
    ]
  },
  {
    id: 'teorema-del-valor-medio', titolo: 'Teorema del valor medio', tipo: 'teorema', area: 'analisi-reale', argomento: 'derivate', livello: 2,
    sinonimi: ['Lagrange', 'valor medio', 'teorema di Lagrange', 'teorema del valor medio', 'Rolle'],
    domanda: "Se in media sei andato a 100 all'ora, c'è stato un istante in cui andavi esattamente a 100?",
    esempio: "In autostrada il tutor misura la velocità media tra due portali. Se la media supera il limite, in almeno un istante andavi più veloce del limite.",
    idea: "Il teorema del valor medio riguarda una funzione continua su un intervallo e derivabile al suo interno.\nDice che esiste almeno un punto in cui la derivata è uguale alla pendenza media.\nCioè, da qualche parte, la tangente è parallela alla retta che unisce gli estremi.\nIl teorema garantisce che il punto esiste, ma non dice dove sia.\nÈ alla base di molte stime e dimostrazioni dell'analisi.",
    perche_fa_pensare: "Un fatto sul tutto, la media, garantisce un fatto su un istante. Globale e locale sono legati più di quanto sembri.",
    dove_si_usa: "Nel controllo della velocità con il tutor, nelle stime degli errori, nelle dimostrazioni.",
    prerequisiti: [
      { id: 'derivata', perche: "Parla della derivata in un punto." },
      { id: 'teorema-di-weierstrass', perche: "La dimostrazione usa il teorema di Weierstrass." }
    ],
    parenti: []
  },
  {
    id: 'derivata-seconda-convessita', titolo: 'Derivata seconda e convessità', tipo: 'concetto', area: 'analisi-reale', argomento: 'derivate', livello: 2,
    sinonimi: ['derivata seconda', 'concavità', 'convessità', 'accelerazione', 'flesso'],
    domanda: "Come si misura quanto una curva si piega?",
    esempio: "L'accelerazione di un'auto è la derivata della velocità, cioè la derivata seconda della posizione.",
    idea: "La derivata seconda è la derivata della derivata.\nMisura come cambia la pendenza, cioè quanto la curva si piega.\nSe è positiva la curva è convessa, rivolta verso l'alto come una coppa.\nSe è negativa la curva è concava, rivolta verso il basso.\nDove cambia segno ci sono i punti di flesso.",
    perche_fa_pensare: "Non conta solo se le cose crescono, ma se crescono sempre più in fretta o sempre più piano. È la differenza tra un'epidemia che rallenta e una che accelera.",
    dove_si_usa: "In fisica per l'accelerazione, in economia per i rendimenti, nell'ottimizzazione.",
    prerequisiti: [
      { id: 'regole-di-derivazione', perche: "Si calcola derivando due volte." }
    ],
    parenti: []
  },
  {
    id: 'polinomio-di-taylor', titolo: 'Polinomio di Taylor', tipo: 'concetto', area: 'analisi-reale', argomento: 'derivate', livello: 3,
    sinonimi: ['Taylor', 'polinomio di Taylor', 'sviluppo di Taylor', 'approssimazione polinomiale', 'Mac Laurin'],
    domanda: "Si può imitare una funzione complicata con un polinomio?",
    esempio: "Per angoli piccoli, misurati in radianti, il seno di un angolo è quasi uguale all'angolo stesso. È il primo termine del polinomio di Taylor del seno.",
    idea: "Il polinomio di Taylor approssima una funzione vicino a un punto con un polinomio.\nSi sceglie il polinomio che ha, in quel punto, lo stesso valore e le stesse derivate della funzione.\nPiù termini si usano, migliore è l'approssimazione vicino al punto.\nIl resto dice quanto si sbaglia, e si può stimare.\nLe calcolatrici usano idee simili per calcolare seni, logaritmi ed esponenziali.",
    perche_fa_pensare: "Tutta l'informazione su una funzione liscia sembra racchiusa nelle sue derivate in un solo punto. Ma è vero solo per alcune funzioni.",
    dove_si_usa: "Nelle calcolatrici, in fisica per le approssimazioni, nei metodi numerici.",
    formula: {
      latex: "f(x) \\approx f(a) + f'(a)(x-a) + \\frac{f''(a)}{2}(x-a)^2",
      come_si_legge: "effe di x circa uguale a effe di a, più effe primo di a per x meno a. Più effe secondo di a mezzi, per x meno a al quadrato.",
      a_parole: "Vicino al punto a, la funzione assomiglia a un polinomio. Il polinomio si costruisce con il valore e le derivate della funzione in a."
    },
    prerequisiti: [
      { id: 'derivata-seconda-convessita', perche: "Usa anche le derivate successive." },
      { id: 'monomi-polinomi', perche: "L'approssimazione è un polinomio." },
      { id: 'teorema-del-valor-medio', perche: "La stima dell'errore generalizza il teorema del valor medio." }
    ],
    parenti: []
  },

  // Integrali
  {
    id: 'integrale-di-riemann', titolo: 'Integrale definito', tipo: 'concetto', area: 'analisi-reale', argomento: 'integrali', livello: 2,
    sinonimi: ['integrale', 'integrale definito', 'area sotto la curva', 'Riemann', 'somme di Riemann'],
    domanda: "Come si misura l'area di una figura con i bordi curvi?",
    esempio: "Se conosci la velocità di un'auto in ogni istante, puoi ricavare la distanza percorsa. È l'area sotto il grafico della velocità.",
    idea: "L'integrale definito misura l'area compresa tra il grafico di una funzione e l'asse orizzontale.\nSi approssima l'area con tanti rettangoli sottili, e si sommano le loro aree.\nRendendo i rettangoli sempre più sottili, la somma si avvicina a un numero: l'integrale.\nLe aree sotto l'asse contano con il segno meno.\nBernhard Riemann ne diede una definizione rigorosa nell'Ottocento.",
    perche_fa_pensare: "Sommare infiniti pezzi infinitamente piccoli dà un numero finito e preciso. È l'idea di Archimede, finalmente resa rigorosa.",
    dove_si_usa: "In fisica per spazi, lavori e masse, in economia per i totali accumulati, in probabilità.",
    formula: {
      latex: '\\int_a^b f(x)\\,dx',
      come_si_legge: "integrale da a a b di effe di x in de x.",
      a_parole: "È l'area con segno tra il grafico di f e l'asse orizzontale, da a fino a b."
    },
    prerequisiti: [
      { id: 'area-e-perimetro', perche: "L'integrale estende l'idea di area." },
      { id: 'limite-di-successione', perche: "È il limite di somme di rettangoli." },
      { id: 'sommatoria', perche: "Le approssimazioni sono somme di molti termini." }
    ],
    parenti: []
  },
  {
    id: 'primitiva', titolo: 'Primitive e integrale indefinito', tipo: 'concetto', area: 'analisi-reale', argomento: 'integrali', livello: 2,
    sinonimi: ['primitiva', 'integrale indefinito', 'antiderivata', 'integrare'],
    domanda: "Si può risalire a una funzione conoscendo la sua derivata?",
    esempio: "Conosci la velocità di un'auto in ogni istante e vuoi la sua posizione. Cerchi una funzione la cui derivata è la velocità.",
    idea: "Una primitiva di una funzione è un'altra funzione che ha la prima come derivata.\nAd esempio, una primitiva di 2x è x al quadrato.\nSe una funzione ha una primitiva, ne ha infinite: differiscono per una costante.\nL'insieme di tutte le primitive si chiama integrale indefinito.\nTrovare primitive è più difficile che calcolare derivate, e a volte non si riesce con le funzioni elementari.",
    perche_fa_pensare: "Derivare è un calcolo meccanico, tornare indietro spesso è un'arte. Molte operazioni sono più semplici in un verso che nell'altro.",
    dove_si_usa: "In fisica per passare dalla velocità alla posizione, in ingegneria, in economia.",
    prerequisiti: [
      { id: 'regole-di-derivazione', perche: "Si cerca una funzione partendo dalla sua derivata." }
    ],
    parenti: []
  },
  {
    id: 'teorema-fondamentale-del-calcolo', titolo: 'Teorema fondamentale del calcolo', tipo: 'teorema', area: 'analisi-reale', argomento: 'integrali', livello: 2,
    sinonimi: ['teorema fondamentale del calcolo integrale', 'Torricelli-Barrow', 'Newton-Leibniz', 'derivata e integrale'],
    domanda: "Che legame c'è tra la velocità del cambiamento e l'accumulo?",
    esempio: "Per sapere quanta acqua è entrata in una vasca, non serve sommare goccia per goccia. Basta confrontare il livello all'inizio e alla fine.",
    idea: "Il teorema fondamentale del calcolo dice che derivata e integrale sono operazioni inverse.\nSe accumuli una funzione con l'integrale e poi derivi, ritrovi la funzione di partenza.\nPer calcolare un integrale definito basta trovare una primitiva.\nSi calcola la primitiva agli estremi e si fa la differenza.\nUnisce i due problemi centrali dell'analisi: le tangenti e le aree.",
    perche_fa_pensare: "Due problemi antichi e apparentemente diversi, misurare pendenze e misurare aree, si rivelano la stessa cosa vista da due lati.",
    dove_si_usa: "In ogni calcolo di integrali, in fisica, in ingegneria, in economia.",
    formula: {
      latex: "\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{dove } F' = f",
      come_si_legge: "integrale da a a b di effe di x in de x. È uguale a effe grande di b meno effe grande di a. Qui effe grande ha come derivata effe.",
      a_parole: "L'area sotto il grafico è la differenza tra i valori di una primitiva agli estremi."
    },
    prerequisiti: [
      { id: 'integrale-di-riemann', perche: "Riguarda l'integrale definito." },
      { id: 'primitiva', perche: "Calcola l'integrale con una primitiva." },
      { id: 'funzione-continua', perche: "Il teorema vale per le funzioni continue." }
    ],
    parenti: []
  },
  {
    id: 'integrali-impropri', titolo: 'Integrali su intervalli infiniti', tipo: 'concetto', area: 'analisi-reale', argomento: 'integrali', livello: 3,
    sinonimi: ['integrale improprio', 'integrali su intervalli illimitati', 'area infinita', 'convergenza di integrali'],
    domanda: "Una figura infinitamente lunga può avere un'area finita?",
    esempio: "La regione sotto la curva uno su x al quadrato, da 1 all'infinito, è infinitamente lunga. Eppure la sua area vale esattamente 1.",
    idea: "Un integrale improprio si calcola su un intervallo infinito, o su una funzione che diventa infinita.\nSi calcola l'integrale fino a un certo punto e poi si fa il limite.\nSe il limite esiste, l'integrale converge e l'area è finita.\nUno su x al quadrato ha area finita, uno su x no.\nLa differenza tra le due curve sembra piccola, ma è decisiva.",
    perche_fa_pensare: "Esiste un solido, la tromba di Torricelli, che si può riempire di vernice ma non verniciare all'esterno. L'infinito sfida il buon senso.",
    dove_si_usa: "In probabilità, in fisica per campi e potenziali, nell'analisi dei segnali.",
    prerequisiti: [
      { id: 'integrale-di-riemann', perche: "Estende l'integrale definito." },
      { id: 'limite-di-funzione', perche: "Si definisce con un limite." }
    ],
    parenti: []
  },

  // Serie
  {
    id: 'serie-geometrica', titolo: 'Serie geometrica', tipo: 'concetto', area: 'analisi-reale', argomento: 'serie-numeriche', livello: 2,
    sinonimi: ['serie geometrica', 'somma infinita', 'un mezzo più un quarto', 'progressione geometrica infinita'],
    domanda: "Un mezzo più un quarto più un ottavo, all'infinito, quanto fa?",
    esempio: "Mangi metà di una torta, poi metà di ciò che resta, poi ancora metà. Continuando per sempre, arrivi a una torta intera, non di più.",
    idea: "Una serie geometrica è la somma dei termini di una progressione geometrica, all'infinito.\nSe la ragione è compresa tra meno 1 e 1, la somma è un numero finito.\nVale il primo termine diviso uno meno la ragione.\nAd esempio, un mezzo più un quarto più un ottavo, e così via, fa esattamente 1.\nSe la ragione è più grande, la somma cresce senza limite.",
    perche_fa_pensare: "È la risposta matematica al paradosso di Achille e la tartaruga. Infiniti pezzi possono comporre un intero finito.",
    dove_si_usa: "Nel calcolo delle rendite e dei mutui, nei decimali periodici, in fisica.",
    formula: {
      latex: 'a + ar + ar^2 + \\cdots = \\frac{a}{1-r} \\qquad (|r| < 1)',
      come_si_legge: "a più a erre più a erre al quadrato, e così via, uguale a fratto uno meno erre. Vale quando erre è compreso tra meno uno e uno.",
      a_parole: "Se ogni termine è una frazione fissa del precedente, la somma infinita è finita."
    },
    prerequisiti: [
      { id: 'progressione-geometrica', perche: "Si sommano i termini di una progressione geometrica." },
      { id: 'limite-di-successione', perche: "La somma infinita è un limite." }
    ],
    parenti: []
  },
  {
    id: 'serie', titolo: 'Serie e convergenza', tipo: 'concetto', area: 'analisi-reale', argomento: 'serie-numeriche', livello: 3,
    sinonimi: ['serie numeriche', 'somma infinita', 'convergenza', 'serie convergente', 'serie divergente'],
    domanda: "Si può sommare all'infinito?",
    esempio: "Sommare infiniti numeri sembra impossibile. Ma si possono guardare le somme parziali e vedere se si stabilizzano.",
    idea: "Una serie è la somma di infiniti termini di una successione.\nSi definisce come limite delle somme parziali: i primi due termini, i primi tre, e così via.\nSe il limite esiste, la serie converge; altrimenti diverge.\nPerché converga, i termini devono tendere a zero, ma questo non basta.\nAlcune serie danno risultati diversi se si cambia l'ordine dei termini.",
    perche_fa_pensare: "Con l'infinito, anche la proprietà commutativa può smettere di valere. Le somme infinite chiedono prudenza.",
    dove_si_usa: "Nelle approssimazioni di funzioni, in fisica, in probabilità, in finanza.",
    prerequisiti: [
      { id: 'serie-geometrica', perche: "È il primo esempio di serie convergente." },
      { id: 'sommatoria', perche: "Le somme parziali si scrivono con la sommatoria." }
    ],
    parenti: []
  },
  {
    id: 'serie-armonica', titolo: 'La serie armonica diverge', tipo: 'teorema', area: 'analisi-reale', argomento: 'serie-numeriche', livello: 3,
    sinonimi: ['serie armonica', 'uno più un mezzo più un terzo', 'divergenza', 'Oresme'],
    domanda: "Una somma di termini sempre più piccoli può crescere all'infinito?",
    esempio: "1 più un mezzo più un terzo più un quarto, e così via. I termini diventano minuscoli, ma la somma supera qualsiasi numero, molto lentamente.",
    idea: "La serie armonica somma i reciproci dei numeri naturali.\nI suoi termini tendono a zero, eppure la somma cresce senza limite.\nLa dimostrazione raggruppa i termini in blocchi che valgono ciascuno almeno un mezzo.\nLa crescita è lentissima: per superare 100 servono più termini delle stelle dell'universo osservabile.\nMostra che termini che vanno a zero non bastano a garantire una somma finita.",
    perche_fa_pensare: "Una crescita così lenta da sembrare ferma arriva comunque ovunque. L'infinito non ha fretta.",
    dove_si_usa: "In informatica nell'analisi degli algoritmi, in teoria dei numeri, nei problemi di impilamento.",
    prerequisiti: [
      { id: 'serie', perche: "È l'esempio classico di serie divergente." }
    ],
    parenti: []
  },
  {
    id: 'serie-di-potenze', titolo: 'Serie di potenze e serie di Taylor', tipo: 'concetto', area: 'analisi-reale', argomento: 'serie-numeriche', livello: 3,
    sinonimi: ['serie di Taylor', 'serie di potenze', 'serie di Mac Laurin', 'sviluppo in serie', 'raggio di convergenza'],
    domanda: "Una funzione si può scrivere come un polinomio infinito?",
    esempio: "La funzione e alla x si scrive come una somma infinita. È 1 più x, più x al quadrato mezzi, più x al cubo sesti, e così via.",
    idea: "Una serie di potenze è un polinomio con infiniti termini.\nConverge per i valori di x vicini a un centro, entro un certo raggio di convergenza.\nLa serie di Taylor di una funzione è il suo polinomio di Taylor prolungato all'infinito.\nPer molte funzioni importanti, come esponenziale, seno e coseno, la serie coincide con la funzione.\nNon succede sempre: esistono funzioni lisce diverse dalla propria serie di Taylor.",
    perche_fa_pensare: "Una funzione intera racchiusa nelle sue derivate in un punto sembra magia. Ma è vero solo per le funzioni analitiche.",
    dove_si_usa: "In fisica, nei calcoli numerici, nella risoluzione delle equazioni differenziali.",
    formula: {
      latex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots',
      come_si_legge: "e alla x uguale somma, per n da zero a infinito, di x alla n fratto n fattoriale. Cioè uno più x più x al quadrato mezzi, e così via.",
      a_parole: "L'esponenziale è la somma infinita delle potenze di x, divise per i fattoriali."
    },
    prerequisiti: [
      { id: 'serie', perche: "È una serie i cui termini dipendono da x." },
      { id: 'polinomio-di-taylor', perche: "Prolunga all'infinito il polinomio di Taylor." }
    ],
    parenti: []
  },
  {
    id: 'convergenza-uniforme', titolo: 'Convergenza uniforme', tipo: 'concetto', area: 'analisi-reale', argomento: 'serie-numeriche', livello: 3,
    sinonimi: ['convergenza uniforme', 'convergenza puntuale', 'successioni di funzioni', 'limite di funzioni'],
    domanda: "Quando il limite di funzioni continue è ancora continuo?",
    esempio: "Le funzioni x, x al quadrato, x al cubo, e così via, tra 0 e 1 sono tutte continue. Il loro limite, invece, salta di colpo a 1 nell'estremo.",
    idea: "Una successione di funzioni può avvicinarsi a una funzione limite in due modi diversi.\nNella convergenza puntuale, ogni punto converge per conto suo, con i suoi tempi.\nNella convergenza uniforme, tutti i punti convergono insieme, con lo stesso grado di precisione.\nCon la convergenza uniforme, il limite di funzioni continue è continuo.\nCon quella puntuale no: possono comparire salti.",
    perche_fa_pensare: "Anche grandi matematici dell'Ottocento confusero i due tipi di convergenza. La distinzione nacque da errori, e li corresse.",
    dove_si_usa: "Nelle serie di Fourier, nei metodi numerici, nella teoria delle approssimazioni.",
    prerequisiti: [
      { id: 'funzione-continua', perche: "Riguarda la continuità del limite." }
    ],
    parenti: []
  },

  // Più variabili
  {
    id: 'funzioni-di-piu-variabili', titolo: 'Funzioni di più variabili', tipo: 'concetto', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['più variabili', 'funzioni di due variabili', 'superficie', 'curve di livello'],
    domanda: "Come si descrive una grandezza che dipende da molte altre?",
    esempio: "La temperatura in una stanza dipende dal punto in cui ti trovi, cioè da tre coordinate. È una funzione di tre variabili.",
    idea: "Una funzione di più variabili associa un numero a una coppia, una terna o una lista di numeri.\nCon due variabili il grafico è una superficie nello spazio, come un paesaggio di colline.\nSi può rappresentare anche con curve di livello, come nelle carte topografiche.\nMolte idee dell'analisi, come limite e continuità, si estendono a più variabili.\nMa compaiono fenomeni nuovi, perché ci si può avvicinare a un punto da infinite direzioni.",
    perche_fa_pensare: "Quasi nulla, nel mondo reale, dipende da una sola cosa. Le funzioni di più variabili sono il linguaggio della complessità.",
    dove_si_usa: "In meteorologia, in economia, in fisica, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'funzione', perche: "È una funzione con più ingressi." },
      { id: 'coordinate-nello-spazio', perche: "Il grafico vive nello spazio." }
    ],
    parenti: []
  },
  {
    id: 'derivate-parziali', titolo: 'Derivate parziali', tipo: 'concetto', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['derivata parziale', 'derivate parziali', 'differenziale', 'variazione rispetto a una variabile'],
    domanda: "Come cambia una grandezza se ne muovi un solo ingrediente?",
    esempio: "Il volume di una lattina dipende da raggio e altezza. Quanto cambia se aumenti solo il raggio, lasciando ferma l'altezza?",
    idea: "Una derivata parziale misura come cambia una funzione di più variabili quando ne varia una sola.\nLe altre variabili restano ferme, come se fossero costanti.\nSi calcola con le solite regole di derivazione.\nOgni variabile ha la sua derivata parziale.\nInsieme descrivono come la funzione cambia in ogni direzione, almeno per le funzioni abbastanza regolari.",
    perche_fa_pensare: "Isolare un fattore alla volta è un'idea semplice e potente. È lo stesso spirito degli esperimenti scientifici.",
    dove_si_usa: "In fisica, in economia per le variazioni marginali, nelle equazioni del calore e delle onde.",
    prerequisiti: [
      { id: 'funzioni-di-piu-variabili', perche: "Si derivano funzioni di più variabili." },
      { id: 'derivata', perche: "Si deriva rispetto a una variabile alla volta." }
    ],
    parenti: []
  },
  {
    id: 'gradiente', titolo: 'Gradiente', tipo: 'concetto', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['gradiente', 'direzione di massima pendenza', 'nabla', 'vettore gradiente'],
    domanda: "In quale direzione una salita è più ripida?",
    esempio: "Su una carta topografica, il gradiente in un punto indica la direzione in cui la montagna sale più in fretta. È sempre perpendicolare alle curve di livello.",
    idea: "Il gradiente di una funzione è il [[vettore]] che ha come componenti le sue derivate parziali.\nPunta nella direzione in cui la funzione cresce più rapidamente.\nLa sua lunghezza dice quanto è ripida quella crescita.\nÈ perpendicolare alle curve di livello.\nNei punti di massimo e di minimo interni il gradiente è nullo.",
    perche_fa_pensare: "Una sola freccia riassume come cambia un paesaggio in ogni direzione. Seguirla al contrario porta verso valle.",
    dove_si_usa: "Nell'apprendimento automatico, in fisica, nella grafica, nell'ottimizzazione.",
    prerequisiti: [
      { id: 'derivate-parziali', perche: "Le componenti sono le derivate parziali." },
      { id: 'vettore', perche: "Il gradiente è un vettore." }
    ],
    parenti: []
  },
  {
    id: 'teorema-funzione-implicita', titolo: 'Teorema della funzione implicita', tipo: 'teorema', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['funzione implicita', 'Dini', 'teorema del Dini', 'teorema della funzione implicita'],
    domanda: "Quando un'equazione in due variabili definisce una curva liscia?",
    esempio: "L'equazione della circonferenza lega x e y, ma non dice «y uguale a qualcosa». Eppure, vicino a molti punti, y dipende da x in modo regolare.",
    idea: "Spesso due variabili sono legate da un'equazione, non da una formula esplicita.\nIl teorema della funzione implicita dice quando, vicino a un punto, l'equazione definisce una funzione liscia.\nLa condizione riguarda una derivata parziale, che non deve annullarsi.\nNei punti in cui si annulla, la curva può avere angoli, incroci o tangenti verticali.\nÈ uno strumento fondamentale per studiare curve e superfici definite da equazioni.",
    perche_fa_pensare: "Una relazione può definire una dipendenza anche se non sappiamo scriverla. Esistere e saper scrivere sono cose diverse.",
    dove_si_usa: "In economia, in geometria, nello studio dei vincoli meccanici.",
    prerequisiti: [
      { id: 'derivate-parziali', perche: "La condizione del teorema riguarda le derivate parziali." }
    ],
    parenti: []
  },
  {
    id: 'integrale-multiplo', titolo: 'Integrali multipli', tipo: 'concetto', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['integrale doppio', 'integrale triplo', 'integrali multipli', 'volume sotto una superficie'],
    domanda: "Come si calcola il volume sotto una superficie?",
    esempio: "Vuoi sapere quanta neve è caduta su un campo. Devi sommare l'altezza della neve punto per punto, su tutta la superficie.",
    idea: "Un integrale multiplo estende l'integrale alle funzioni di più variabili.\nCon due variabili si calcola il volume sotto una superficie, con tre una massa o una carica totale.\nSi approssima la regione con tanti piccoli rettangoli o cubetti, e si sommano i contributi.\nSpesso si calcola come una successione di integrali semplici, una variabile alla volta.\nCambiare coordinate, ad esempio in polari, può semplificare molto il calcolo.",
    perche_fa_pensare: "Sommare su un'area o su un volume è come sommare su una riga, ripetuto. La complessità cresce, ma l'idea resta la stessa.",
    dove_si_usa: "In fisica per masse e cariche, in probabilità, in ingegneria.",
    prerequisiti: [
      { id: 'integrale-di-riemann', perche: "Estende l'integrale definito." },
      { id: 'funzioni-di-piu-variabili', perche: "Si integrano funzioni di più variabili." }
    ],
    parenti: []
  },
  {
    id: 'campo-vettoriale', titolo: 'Campi vettoriali', tipo: 'concetto', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['campo vettoriale', 'campo di forze', 'campo di velocità', 'flusso'],
    domanda: "Come si descrive il vento in ogni punto dello spazio?",
    esempio: "Una mappa meteo con tante frecce mostra direzione e intensità del vento in ogni punto. È un campo vettoriale.",
    idea: "Un campo vettoriale associa a ogni punto dello spazio un [[vettore]].\nOgni vettore può rappresentare una velocità, una forza o un flusso in quel punto.\nSi disegna con tante piccole frecce.\nSeguendo le frecce si ottengono le linee di flusso, come le traiettorie di foglie nel vento.\nI campi della fisica, come quello gravitazionale ed elettrico, sono campi vettoriali.",
    perche_fa_pensare: "Invece di pensare a oggetti che si muovono, si pensa a un'influenza diffusa ovunque. È uno dei grandi cambi di prospettiva della fisica.",
    dove_si_usa: "In meteorologia, in fisica, in fluidodinamica, nell'animazione al computer.",
    prerequisiti: [
      { id: 'vettore', perche: "In ogni punto c'è un vettore." },
      { id: 'funzioni-di-piu-variabili', perche: "Le componenti dipendono dalle coordinate del punto." }
    ],
    parenti: []
  },
  {
    id: 'teoremi-calcolo-vettoriale', titolo: 'Teoremi di Green, Gauss e Stokes', tipo: 'teorema', area: 'analisi-reale', argomento: 'piu-variabili', livello: 3,
    sinonimi: ['teorema della divergenza', 'teorema di Gauss', 'teorema di Stokes', 'teorema di Green', 'flusso e circuitazione'],
    domanda: "Si può sapere cosa succede dentro una regione guardando solo il suo bordo?",
    esempio: "Per sapere quanta acqua esce in totale da una zona, puoi sommare le sorgenti all'interno. Oppure misurare il flusso che attraversa il confine: il risultato è lo stesso.",
    idea: "I teoremi di Green, Gauss e Stokes collegano l'interno di una regione con il suo bordo.\nIl teorema della divergenza uguaglia il flusso uscente da una superficie chiusa al totale delle sorgenti all'interno.\nIl teorema di Stokes lega la rotazione di un campo su una superficie alla circolazione lungo il suo bordo.\nSono estensioni del [[teorema-fondamentale-del-calcolo|teorema fondamentale del calcolo]].\nSono il linguaggio matematico dell'elettromagnetismo e della fluidodinamica.",
    perche_fa_pensare: "Il bordo sa tutto dell'interno. Questa idea attraversa la matematica, dalla fisica alla topologia.",
    dove_si_usa: "In elettromagnetismo, in fluidodinamica, nella progettazione di antenne e motori.",
    prerequisiti: [
      { id: 'campo-vettoriale', perche: "Riguardano campi vettoriali." },
      { id: 'integrale-multiplo', perche: "Confrontano integrali su regioni e sui loro bordi." },
      { id: 'teorema-fondamentale-del-calcolo', perche: "Lo generalizzano a più dimensioni." },
      { id: 'gradiente', perche: "Usano operazioni costruite con le derivate parziali, come il gradiente." }
    ],
    parenti: []
  }
]);
