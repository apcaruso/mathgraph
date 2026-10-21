/* Algebra lineare */
Mappa.registra([
  // Vettori
  {
    id: 'vettore', titolo: 'Vettore', tipo: 'concetto', area: 'algebra-lineare', argomento: 'vettori', livello: 2,
    sinonimi: ['vettori', 'freccia', 'grandezza vettoriale', 'componenti', 'modulo direzione verso'],
    domanda: "Come si descrive con i numeri uno spostamento?",
    esempio: "«Tre passi a est e quattro a nord» descrive uno spostamento. Si scrive come la coppia di numeri tre e quattro.",
    idea: "Un vettore è una grandezza che ha un'intensità, una direzione e un verso.\nSi disegna come una freccia.\nNel piano si descrive con due numeri, le sue componenti; nello spazio con tre.\nVelocità, forze e spostamenti sono vettori.\nLa temperatura invece no: è un solo numero, senza direzione.",
    perche_fa_pensare: "Una freccia e una coppia di numeri sono la stessa cosa vista in due modi. È il ponte tra geometria e algebra.",
    dove_si_usa: "In fisica, nella grafica al computer, nella navigazione, nei videogiochi.",
    prerequisiti: [
      { id: 'piano-cartesiano', perche: "Le componenti si leggono sugli assi del piano cartesiano." }
    ],
    parenti: []
  },
  {
    id: 'operazioni-vettori', titolo: 'Somma di vettori e multipli', tipo: 'concetto', area: 'algebra-lineare', argomento: 'vettori', livello: 2,
    sinonimi: ['somma di vettori', 'regola del parallelogramma', 'prodotto per uno scalare', 'combinazione di vettori'],
    domanda: "Cosa succede se si combinano due spostamenti?",
    esempio: "Una barca va verso nord, ma la corrente la spinge verso est. Il suo moto reale è la somma dei due vettori.",
    idea: "Due vettori si sommano mettendoli uno dopo l'altro, come due spostamenti.\nIn componenti, si sommano i numeri corrispondenti.\nGeometricamente la somma è la diagonale del parallelogramma formato dai due vettori.\nUn vettore si può anche moltiplicare per un numero: si allunga, si accorcia o si rovescia.\nQueste due operazioni sono la base di tutta l'algebra lineare.",
    perche_fa_pensare: "Con solo due operazioni semplici si costruisce una teoria enorme. Spesso la potenza viene da regole poche e chiare.",
    dove_si_usa: "In fisica per comporre le forze, nella navigazione, nella grafica.",
    prerequisiti: [
      { id: 'vettore', perche: "Si sommano e si moltiplicano vettori." }
    ],
    parenti: []
  },
  {
    id: 'prodotto-scalare', titolo: 'Prodotto scalare', tipo: 'concetto', area: 'algebra-lineare', argomento: 'vettori', livello: 2,
    sinonimi: ['prodotto scalare', 'prodotto interno', 'angolo tra vettori', 'perpendicolarità', 'dot product'],
    domanda: "Come si misura quanto due direzioni sono allineate?",
    esempio: "Spingi un carrello tenendo il manico inclinato. Solo la parte della forza diretta in avanti lo fa muovere: il prodotto scalare la misura.",
    idea: "Il prodotto scalare prende due vettori e restituisce un numero.\nSi calcola moltiplicando le componenti corrispondenti e sommando i risultati.\nÈ uguale al prodotto delle lunghezze per il coseno dell'angolo tra i vettori.\nSe i vettori sono perpendicolari, il prodotto scalare vale zero.\nPermette di misurare lunghezze e angoli usando solo i numeri.",
    perche_fa_pensare: "Un semplice calcolo con le componenti contiene tutta la geometria degli angoli. La trigonometria si nasconde dentro una somma di prodotti.",
    dove_si_usa: "In fisica per il lavoro di una forza, nella grafica per le luci, nei motori di ricerca per confrontare testi.",
    formula: {
      latex: '\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = |\\vec{u}|\\,|\\vec{v}| \\cos\\theta',
      come_si_legge: "u scalare v uguale u uno per v uno più u due per v due. È anche uguale alla lunghezza di u per la lunghezza di v per il coseno di teta.",
      a_parole: "Il prodotto scalare si calcola con le componenti e dice quanto due vettori puntano nella stessa direzione."
    },
    prerequisiti: [
      { id: 'operazioni-vettori', perche: "Si combinano le componenti dei vettori." },
      { id: 'seno-coseno', perche: "Il risultato dipende dal coseno dell'angolo." }
    ],
    parenti: []
  },
  {
    id: 'prodotto-vettoriale', titolo: 'Prodotto vettoriale', tipo: 'concetto', area: 'algebra-lineare', argomento: 'vettori', livello: 3,
    sinonimi: ['prodotto vettoriale', 'prodotto esterno', 'regola della mano destra', 'cross product'],
    domanda: "Come si trova una direzione perpendicolare a due direzioni date?",
    esempio: "Quando avviti una vite, la giri in un piano e lei avanza perpendicolare a quel piano. Il prodotto vettoriale descrive proprio questo.",
    idea: "Il prodotto vettoriale prende due vettori nello spazio e restituisce un terzo vettore.\nIl risultato è perpendicolare a entrambi.\nLa sua lunghezza è l'area del parallelogramma formato dai due vettori.\nIl verso si trova con la regola della mano destra.\nCambiando l'ordine dei fattori, il risultato cambia verso: non vale la proprietà commutativa.",
    perche_fa_pensare: "Esiste solo nello spazio a tre dimensioni, e in una versione speciale a sette. Il nostro spazio ha qualcosa di particolare.",
    dove_si_usa: "In fisica per i momenti delle forze e i campi magnetici, nella grafica 3D per le normali alle superfici.",
    prerequisiti: [
      { id: 'prodotto-scalare', perche: "Si confronta con il prodotto scalare, che dà un numero." },
      { id: 'coordinate-nello-spazio', perche: "È definito nello spazio a tre dimensioni." }
    ],
    parenti: []
  },

  // Matrici e sistemi lineari
  {
    id: 'matrice', titolo: 'Matrice', tipo: 'concetto', area: 'algebra-lineare', argomento: 'matrici-e-sistemi', livello: 3,
    sinonimi: ['matrici', 'tabella di numeri', 'righe e colonne', 'matrice quadrata'],
    domanda: "Come si organizzano molti numeri che lavorano insieme?",
    esempio: "Una foto digitale in bianco e nero è una tabella di numeri: ogni numero è la luminosità di un pixel. È una matrice.",
    idea: "Una matrice è una tabella rettangolare di numeri, disposti in righe e colonne.\nPuò contenere i coefficienti di un sistema di equazioni.\nPuò anche rappresentare una trasformazione, come una rotazione o un ingrandimento.\nDue matrici della stessa forma si sommano posto per posto.\nUna matrice con tante righe quante colonne si chiama quadrata.",
    perche_fa_pensare: "Una semplice tabella diventa un oggetto con cui fare calcoli. Dare un nome a un gruppo di numeri cambia il modo di pensarli.",
    dove_si_usa: "Nella grafica al computer, nell'intelligenza artificiale, in economia, nelle immagini digitali.",
    prerequisiti: [
      { id: 'operazioni-vettori', perche: "Righe e colonne di una matrice sono vettori." }
    ],
    parenti: []
  },
  {
    id: 'prodotto-di-matrici', titolo: 'Prodotto di matrici', tipo: 'concetto', area: 'algebra-lineare', argomento: 'matrici-e-sistemi', livello: 3,
    sinonimi: ['moltiplicazione di matrici', 'prodotto righe per colonne', 'composizione di trasformazioni'],
    domanda: "Cosa vuol dire moltiplicare due tabelle di numeri?",
    esempio: "Ruoti un'immagine e poi la ingrandisci. Il prodotto delle due matrici dà una sola matrice che fa entrambe le cose.",
    idea: "Il prodotto di matrici si calcola «righe per colonne».\nOgni elemento del risultato è il prodotto scalare di una riga della prima per una colonna della seconda.\nIl significato profondo è la composizione: fare una trasformazione e poi un'altra.\nIn generale l'ordine conta: il prodotto di matrici non è commutativo.\nInfatti ruotare e poi riflettere non dà lo stesso risultato di riflettere e poi ruotare.",
    perche_fa_pensare: "La regola righe per colonne sembra arbitraria, finché non si capisce che descrive trasformazioni in sequenza. Allora diventa inevitabile.",
    dove_si_usa: "Nella grafica al computer, nelle reti neurali, nei modelli economici.",
    prerequisiti: [
      { id: 'matrice', perche: "Si moltiplicano matrici." }
    ],
    parenti: []
  },
  {
    id: 'sistemi-lineari', titolo: 'Sistemi lineari e metodo di Gauss', tipo: 'concetto', area: 'algebra-lineare', argomento: 'matrici-e-sistemi', livello: 3,
    sinonimi: ['sistema lineare', 'metodo di Gauss', 'eliminazione di Gauss', 'riduzione a scala', 'sistemi di equazioni lineari'],
    domanda: "Come si risolvono cento equazioni con cento incognite?",
    esempio: "Una dieta deve dare quantità precise di proteine, grassi e zuccheri con tre alimenti. Le quantità giuste si trovano con un sistema lineare.",
    idea: "Un sistema lineare è un gruppo di equazioni di primo grado con le stesse incognite.\nIl metodo di Gauss elimina le incognite una alla volta, combinando le equazioni.\nAlla fine si ottiene una forma «a scala», che si risolve partendo dal fondo.\nUn sistema può avere una soluzione, nessuna o infinite.\nIl metodo era noto in Cina circa duemila anni fa, nel testo dei Nove capitoli.",
    perche_fa_pensare: "Un procedimento antico e meccanico resiste a tutto: oggi lo eseguono i computer su milioni di equazioni.",
    dove_si_usa: "In ingegneria per le strutture, nei circuiti elettrici, nelle previsioni meteo, in economia.",
    prerequisiti: [
      { id: 'sistemi-di-equazioni', perche: "Generalizza i sistemi a due incognite." },
      { id: 'matrice', perche: "I coefficienti si scrivono in una matrice." }
    ],
    parenti: []
  },
  {
    id: 'determinante', titolo: 'Determinante', tipo: 'concetto', area: 'algebra-lineare', argomento: 'matrici-e-sistemi', livello: 3,
    sinonimi: ['determinante', 'det', 'fattore di scala delle aree', 'matrice singolare'],
    domanda: "Di quanto una trasformazione ingrandisce le aree?",
    esempio: "Una trasformazione raddoppia la base di ogni rettangolo e ne triplica l'altezza. Le aree diventano sei volte più grandi: il determinante vale 6.",
    idea: "Il determinante è un numero associato a una matrice quadrata.\nDice di quanto la trasformazione corrispondente moltiplica le aree, o i volumi.\nSe è negativo, la trasformazione rovescia l'orientamento, come uno specchio.\nSe vale zero, la trasformazione schiaccia tutto su una dimensione più bassa.\nIn quel caso la trasformazione non si può invertire.",
    perche_fa_pensare: "Un solo numero riassume un fatto geometrico importante. Nato per risolvere sistemi, il determinante si rivela una misura di volume.",
    dove_si_usa: "Nella risoluzione dei sistemi, nel cambio di variabili negli integrali, nella grafica.",
    prerequisiti: [
      { id: 'prodotto-di-matrici', perche: "Il determinante di un prodotto è il prodotto dei determinanti." },
      { id: 'area-e-perimetro', perche: "Misura come cambiano le aree." }
    ],
    parenti: []
  },
  {
    id: 'matrice-inversa', titolo: 'Matrice inversa', tipo: 'concetto', area: 'algebra-lineare', argomento: 'matrici-e-sistemi', livello: 3,
    sinonimi: ['inversa', 'matrice invertibile', 'annullare una trasformazione'],
    domanda: "Si può annullare una trasformazione?",
    esempio: "Se un'immagine è stata ruotata di 30 gradi, la si rimette a posto ruotandola di 30 gradi al contrario. È la trasformazione inversa.",
    idea: "La matrice inversa annulla l'effetto di una matrice.\nMoltiplicando una matrice per la sua inversa si ottiene la matrice identità, che non cambia nulla.\nUna matrice ha l'inversa solo se il suo determinante è diverso da zero.\nCon l'inversa si risolve un sistema lineare in un colpo solo.\nNei calcoli al computer, però, si preferisce di solito il metodo di Gauss, più veloce e stabile.",
    perche_fa_pensare: "Non tutto si può disfare. Se una trasformazione schiaccia lo spazio, l'informazione persa non torna più.",
    dove_si_usa: "Nella grafica, nella robotica, in crittografia, in statistica.",
    prerequisiti: [
      { id: 'determinante', perche: "Il determinante dice se l'inversa esiste." },
      { id: 'sistemi-lineari', perche: "L'inversa si calcola risolvendo sistemi lineari." }
    ],
    parenti: []
  },

  // Spazi vettoriali
  {
    id: 'spazio-vettoriale', titolo: 'Spazio vettoriale', tipo: 'concetto', area: 'algebra-lineare', argomento: 'spazi-vettoriali', livello: 3,
    sinonimi: ['spazi vettoriali', 'spazio lineare', 'struttura lineare', 'sottospazio'],
    domanda: "Cosa hanno in comune frecce, polinomi e segnali sonori?",
    esempio: "Due suoni si possono sommare, e un suono si può rendere più forte. Con i suoni si fanno le stesse operazioni che si fanno con le frecce.",
    idea: "Uno spazio vettoriale è un insieme in cui si possono sommare gli elementi e moltiplicarli per numeri.\nLe operazioni devono rispettare alcune regole, come la proprietà commutativa della somma.\nGli elementi si chiamano vettori, anche se non sono frecce.\nPolinomi, funzioni e segnali formano spazi vettoriali.\nTutto ciò che si dimostra per gli spazi vettoriali vale per ognuno di essi.",
    perche_fa_pensare: "L'astrazione unisce cose che sembrano diversissime. Un teorema sulle frecce diventa un teorema sui suoni.",
    dove_si_usa: "In fisica, nell'elaborazione dei segnali, nell'intelligenza artificiale, in meccanica quantistica.",
    prerequisiti: [
      { id: 'operazioni-vettori', perche: "Generalizza la somma e i multipli dei vettori." }
    ],
    parenti: [
      { id: 'campo', perche: "I numeri per cui si moltiplicano i vettori formano un campo." }
    ]
  },
  {
    id: 'indipendenza-lineare', titolo: 'Combinazioni lineari e indipendenza', tipo: 'concetto', area: 'algebra-lineare', argomento: 'spazi-vettoriali', livello: 3,
    sinonimi: ['indipendenza lineare', 'combinazione lineare', 'dipendenza lineare', 'vettori indipendenti', 'span'],
    domanda: "Quando una direzione è davvero nuova?",
    esempio: "I colori di uno schermo si ottengono mescolando rosso, verde e blu. Nessuno dei tre si ottiene mescolando gli altri due.",
    idea: "Una combinazione lineare è una somma di vettori, ciascuno moltiplicato per un numero.\nDei vettori sono indipendenti se nessuno si ottiene come combinazione degli altri.\nOgni vettore indipendente aggiunge una direzione davvero nuova.\nSe invece uno dipende dagli altri, è superfluo.\nPer controllare l'indipendenza si risolve un sistema lineare.",
    perche_fa_pensare: "Distinguere l'informazione nuova da quella ripetuta è un problema di tutte le scienze. Qui ha una risposta precisa.",
    dove_si_usa: "Nella compressione dei dati, in statistica, nella risoluzione delle equazioni differenziali.",
    prerequisiti: [
      { id: 'spazio-vettoriale', perche: "Si parla di vettori in uno spazio vettoriale." },
      { id: 'sistemi-lineari', perche: "Si verifica risolvendo un sistema lineare." }
    ],
    parenti: []
  },
  {
    id: 'base-e-dimensione', titolo: 'Base e dimensione', tipo: 'concetto', area: 'algebra-lineare', argomento: 'spazi-vettoriali', livello: 3,
    sinonimi: ['base', 'dimensione', 'coordinate', 'base canonica', 'cambio di base'],
    domanda: "Cosa vuol dire, davvero, dimensione?",
    esempio: "Per indicare un punto su una mappa bastano due numeri: due direzioni indipendenti. Per un punto nello spazio ne servono tre.",
    idea: "Una base è un insieme di vettori indipendenti che, combinati, danno tutti i vettori dello spazio.\nOgni vettore si scrive in un solo modo come combinazione della base: i coefficienti sono le sue coordinate.\nUno spazio ha molte basi diverse.\nMa tutte hanno lo stesso numero di vettori: è la dimensione dello spazio.\nEsistono anche spazi di dimensione infinita, come quello di tutti i polinomi.",
    perche_fa_pensare: "La dimensione, che sembrava un'idea intuitiva, diventa un numero preciso. E si può parlare di spazi a cento dimensioni senza immaginarli.",
    dove_si_usa: "In grafica, in statistica, nell'apprendimento automatico, in fisica.",
    prerequisiti: [
      { id: 'indipendenza-lineare', perche: "Una base è fatta di vettori indipendenti." }
    ],
    parenti: [
      { id: 'spazi-a-n-dimensioni', perche: "La dimensione rende preciso lo spazio a n dimensioni." }
    ]
  },
  {
    id: 'ortogonalita', titolo: 'Ortogonalità e proiezioni', tipo: 'concetto', area: 'algebra-lineare', argomento: 'spazi-vettoriali', livello: 3,
    sinonimi: ['ortogonalità', 'proiezione ortogonale', 'base ortonormale', 'Gram-Schmidt', 'perpendicolari'],
    domanda: "Qual è il punto più vicino su una retta o su un piano?",
    esempio: "A mezzogiorno l'ombra di un palo cade dritta sotto di lui. L'ombra è la proiezione del palo sul terreno.",
    idea: "Due vettori sono ortogonali se il loro prodotto scalare vale zero: sono perpendicolari.\nLa proiezione ortogonale di un vettore su un piano è la sua «ombra» su quel piano.\nÈ anche il punto del piano più vicino al vettore.\nUna base fatta di vettori perpendicolari e di lunghezza uno rende i calcoli molto semplici.\nCon il metodo di Gram e Schmidt si costruisce sempre una base di questo tipo.",
    perche_fa_pensare: "Trovare la migliore approssimazione è un problema geometrico: proiettare. Questa idea regge buona parte della statistica.",
    dove_si_usa: "Nella regressione lineare, nella compressione di immagini e suoni, nel GPS.",
    prerequisiti: [
      { id: 'prodotto-scalare', perche: "L'ortogonalità si definisce con il prodotto scalare." },
      { id: 'base-e-dimensione', perche: "Si costruiscono basi di vettori perpendicolari." }
    ],
    parenti: []
  },
  {
    id: 'tensori', titolo: 'Tensori', tipo: 'concetto', area: 'algebra-lineare', argomento: 'spazi-vettoriali', livello: 4,
    sinonimi: ['tensore', 'calcolo tensoriale', 'algebra multilineare', 'prodotto tensoriale'],
    domanda: "Come si descrive una grandezza che dipende da più direzioni insieme?",
    esempio: "In un materiale sotto sforzo, la forza su una superficie dipende da come è orientata la superficie. Lo sforzo si descrive con un tensore.",
    idea: "Un tensore generalizza numeri, vettori e matrici.\nUn numero non dipende da direzioni, un vettore da una, una matrice lega due direzioni.\nUn tensore può legare tra loro tante direzioni quante servono.\nLa sua caratteristica è come cambiano le sue componenti quando si cambia sistema di riferimento.\nNell'informatica, «tensore» indica spesso solo una tabella di numeri a più indici: in realtà la nozione matematica è più sottile.",
    perche_fa_pensare: "Einstein dovette imparare il calcolo tensoriale per scrivere la relatività generale. Una teoria fisica attendeva il suo linguaggio.",
    dove_si_usa: "In relatività generale, in scienza dei materiali, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'applicazione-lineare', perche: "I tensori generalizzano le trasformazioni lineari." },
      { id: 'base-e-dimensione', perche: "Le componenti dipendono dalla base scelta." }
    ],
    parenti: [
      { id: 'metrica-riemanniana', perche: "La metrica di uno spazio curvo è un tensore." }
    ]
  },

  // Trasformazioni lineari
  {
    id: 'applicazione-lineare', titolo: 'Trasformazioni lineari', tipo: 'concetto', area: 'algebra-lineare', argomento: 'trasformazioni-lineari', livello: 3,
    sinonimi: ['applicazione lineare', 'trasformazione lineare', 'mappa lineare', 'operatore lineare', 'omomorfismo di spazi vettoriali'],
    domanda: "Quali trasformazioni lasciano dritte le rette?",
    esempio: "Ruotare, ingrandire o inclinare un'immagine sono trasformazioni lineari. Le righe dritte restano dritte e il centro resta fermo.",
    idea: "Una trasformazione lineare è una funzione tra spazi vettoriali che rispetta somme e multipli.\nTrasformare una somma dà la somma delle trasformate.\nGeometricamente manda rette in rette e lascia fermo l'origine.\nScelta una base, ogni trasformazione lineare si scrive come una [[matrice]].\nComporre due trasformazioni corrisponde a moltiplicare le loro matrici.",
    perche_fa_pensare: "Molti fenomeni non sono lineari, ma da vicino lo sembrano. Per questo la linearità è il primo strumento di quasi ogni scienza.",
    dove_si_usa: "Nella grafica al computer, nelle reti neurali, in fisica, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'spazio-vettoriale', perche: "Trasforma vettori di uno spazio vettoriale." },
      { id: 'matrice', perche: "Si rappresenta con una matrice." },
      { id: 'funzione', perche: "È una funzione con proprietà speciali." }
    ],
    parenti: [
      { id: 'trasformazioni-del-piano', perche: "Rotazioni, simmetrie e omotetie centrate nell'origine sono trasformazioni lineari." }
    ]
  },
  {
    id: 'teorema-rango-nullita', titolo: 'Teorema del rango', tipo: 'teorema', area: 'algebra-lineare', argomento: 'trasformazioni-lineari', livello: 3,
    sinonimi: ['rango', 'nucleo', 'immagine', 'teorema della dimensione', 'nullità'],
    domanda: "Quanta informazione perde una trasformazione?",
    esempio: "L'ombra di un oggetto sul pavimento perde l'altezza. Dalle tre dimensioni ne restano due, e una si perde.",
    idea: "Una trasformazione lineare può schiacciare alcune direzioni fino a zero: formano il nucleo.\nLe direzioni che sopravvivono formano l'immagine; la sua dimensione si chiama rango.\nIl teorema dice che le dimensioni di nucleo e immagine sommate danno la dimensione di partenza.\nCiò che si perde e ciò che resta, insieme, fanno il tutto.\nDa qui si ricava quante soluzioni ha un sistema lineare.",
    perche_fa_pensare: "È una legge di conservazione delle dimensioni. Niente si crea: ciò che non arriva è finito nel nucleo.",
    dove_si_usa: "Nell'analisi dei sistemi lineari, nella compressione dei dati, in teoria dei codici.",
    prerequisiti: [
      { id: 'applicazione-lineare', perche: "Riguarda una trasformazione lineare." },
      { id: 'base-e-dimensione', perche: "Confronta dimensioni." }
    ],
    parenti: []
  },

  // Autovalori e decomposizioni
  {
    id: 'autovalori-autovettori', titolo: 'Autovalori e autovettori', tipo: 'concetto', area: 'algebra-lineare', argomento: 'autovalori-e-decomposizioni', livello: 3,
    sinonimi: ['autovalore', 'autovettore', 'direzioni invarianti', 'polinomio caratteristico', 'eigenvalue'],
    domanda: "Quali direzioni una trasformazione non cambia?",
    esempio: "Quando ruoti un mappamondo, l'asse che passa per i poli non cambia direzione. È un autovettore della rotazione.",
    idea: "Un autovettore è un vettore che la trasformazione non devia: lo allunga o lo accorcia soltanto.\nIl fattore di allungamento si chiama autovalore.\nGli autovalori si trovano risolvendo un'equazione con il [[determinante]].\nConoscere autovalori e autovettori rivela la struttura nascosta di una trasformazione.\nAd esempio dicono se un sistema, ripetendo la trasformazione, cresce, si spegne o oscilla.",
    perche_fa_pensare: "In un sistema che cambia, cercare ciò che non cambia è spesso la chiave. Gli autovettori sono le direzioni privilegiate.",
    dove_si_usa: "Nel PageRank di Google, in meccanica quantistica, nello studio delle vibrazioni dei ponti.",
    prerequisiti: [
      { id: 'applicazione-lineare', perche: "Riguarda una trasformazione lineare." },
      { id: 'determinante', perche: "Gli autovalori si calcolano con il determinante." }
    ],
    parenti: [
      { id: 'catene-di-markov', perche: "L'equilibrio di una catena di Markov è un autovettore di autovalore uno." }
    ]
  },
  {
    id: 'diagonalizzazione', titolo: 'Diagonalizzazione', tipo: 'concetto', area: 'algebra-lineare', argomento: 'autovalori-e-decomposizioni', livello: 3,
    sinonimi: ['matrice diagonale', 'diagonalizzabile', 'base di autovettori', 'cambio di base'],
    domanda: "Si può guardare una trasformazione dal punto di vista più semplice?",
    esempio: "Un'immagine viene allungata lungo una diagonale. Se usi quella diagonale come asse, la trasformazione diventa un semplice allungamento.",
    idea: "Diagonalizzare una matrice vuol dire trovare una base fatta di autovettori.\nIn quella base la matrice diventa diagonale: numeri solo sulla diagonale, zeri altrove.\nUna matrice diagonale agisce allungando ogni asse per conto suo.\nCosì calcolare potenze della matrice diventa semplicissimo.\nNon tutte le matrici sono diagonalizzabili: alcune ruotano o «scivolano».",
    perche_fa_pensare: "Lo stesso problema può essere complicato o semplice a seconda del punto di vista. Scegliere le coordinate giuste è metà del lavoro.",
    dove_si_usa: "Nello studio di sistemi che evolvono nel tempo, nelle equazioni differenziali, in statistica.",
    prerequisiti: [
      { id: 'autovalori-autovettori', perche: "Si usa una base di autovettori." },
      { id: 'base-e-dimensione', perche: "Significa cambiare base." }
    ],
    parenti: []
  },
  {
    id: 'teorema-spettrale', titolo: 'Teorema spettrale', tipo: 'teorema', area: 'algebra-lineare', argomento: 'autovalori-e-decomposizioni', livello: 3,
    sinonimi: ['matrici simmetriche', 'spettro', 'teorema spettrale', 'assi principali'],
    domanda: "Quali trasformazioni hanno sempre direzioni perpendicolari privilegiate?",
    esempio: "Un'ellisse ha due assi perpendicolari, uno lungo e uno corto. Il teorema spettrale garantisce che assi così esistono sempre, anche in più dimensioni.",
    idea: "Il teorema spettrale riguarda le matrici simmetriche, uguali alla propria riflessa sulla diagonale.\nDice che si possono sempre diagonalizzare.\nIn più, gli autovettori si possono scegliere tutti perpendicolari tra loro.\nGli autovalori sono numeri reali.\nGeometricamente, ogni matrice simmetrica allunga lo spazio lungo assi perpendicolari.",
    perche_fa_pensare: "Una semplice simmetria della tabella garantisce una struttura geometrica perfetta. La simmetria, ancora una volta, porta ordine.",
    dove_si_usa: "In meccanica quantistica, in statistica, nell'ingegneria delle vibrazioni.",
    prerequisiti: [
      { id: 'diagonalizzazione', perche: "Garantisce la diagonalizzazione." },
      { id: 'ortogonalita', perche: "Gli autovettori sono perpendicolari." }
    ],
    parenti: [
      { id: 'meccanica-quantistica', perche: "Le grandezze misurabili della meccanica quantistica sono operatori a cui si applica il teorema spettrale." }
    ]
  },
  {
    id: 'decomposizione-svd', titolo: 'Decomposizione ai valori singolari', tipo: 'teorema', area: 'algebra-lineare', argomento: 'autovalori-e-decomposizioni', livello: 4,
    sinonimi: ['valori singolari', 'decomposizione ai valori singolari', 'SVD', 'fattorizzazione di matrici'],
    domanda: "Ogni trasformazione è fatta di rotazioni e allungamenti?",
    esempio: "Una foto si può approssimare tenendo solo i valori singolari più grandi. Con pochi numeri si ottiene un'immagine quasi identica.",
    idea: "La decomposizione ai valori singolari scompone qualsiasi matrice in tre pezzi.\nUna rotazione, poi allungamenti lungo assi perpendicolari, poi un'altra rotazione.\nI fattori di allungamento si chiamano valori singolari.\nVale per tutte le matrici, anche rettangolari, a differenza della diagonalizzazione.\nTenere solo i valori singolari più grandi dà la migliore approssimazione possibile della matrice.",
    perche_fa_pensare: "Ogni trasformazione lineare, per quanto complicata, è fatta degli stessi tre gesti semplici. È una specie di tavola periodica delle matrici.",
    dove_si_usa: "Nella compressione delle immagini, nei sistemi di raccomandazione, nell'analisi dei dati.",
    prerequisiti: [
      { id: 'teorema-spettrale', perche: "Si dimostra applicando il teorema spettrale." }
    ],
    parenti: [
      { id: 'analisi-componenti-principali', perche: "L'analisi delle componenti principali si calcola con questa decomposizione." }
    ]
  },
  {
    id: 'forma-di-jordan', titolo: 'Forma canonica di Jordan', tipo: 'teorema', area: 'algebra-lineare', argomento: 'autovalori-e-decomposizioni', livello: 4,
    sinonimi: ['Jordan', 'forma canonica', 'blocchi di Jordan', 'matrici non diagonalizzabili'],
    domanda: "Cosa si può fare con le matrici che non si diagonalizzano?",
    esempio: "Un'inclinazione orizzontale, come le lettere in corsivo, ha una sola direzione fissa. Non si diagonalizza, ma ha comunque una forma standard.",
    idea: "Non tutte le matrici si possono diagonalizzare.\nLa forma di Jordan è la cosa più vicina a una matrice diagonale che si può sempre ottenere.\nÈ fatta di blocchi: gli autovalori sulla diagonale e alcuni 1 appena sopra.\nOgni blocco descrive un allungamento combinato con uno «scivolamento».\nVale sempre se si lavora con i numeri complessi.",
    perche_fa_pensare: "Anche ciò che non si semplifica del tutto si può classificare. Capire le eccezioni completa la teoria.",
    dove_si_usa: "Nello studio dei sistemi di equazioni differenziali e nella teoria del controllo.",
    prerequisiti: [
      { id: 'diagonalizzazione', perche: "Estende la diagonalizzazione." },
      { id: 'anello-dei-polinomi', perche: "La dimostrazione usa la fattorizzazione dei polinomi." }
    ],
    parenti: []
  }
]);
