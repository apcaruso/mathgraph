/*
 * Struttura della mappa: famiglie di aree, aree, argomenti e grandi domande.
 * I concetti stanno in data/concetti/<area>.js.
 */
Mappa.struttura({

  // Le famiglie raggruppano aree vicine. Servono per colori e legenda.
  famiglie: [
    { id: 'fondamenti', titolo: 'Fondamenti' },
    { id: 'numeri-e-algebra', titolo: 'Numeri e algebra' },
    { id: 'geometria', titolo: 'Geometria e spazio' },
    { id: 'analisi', titolo: 'Analisi e cambiamento' },
    { id: 'discreto-e-caso', titolo: 'Discreto e caso' },
    { id: 'calcolo-e-applicazioni', titolo: 'Calcolo e applicazioni' }
  ],

  aree: [
    // Fondamenti
    { id: 'logica', titolo: 'Logica e fondamenti', breve: 'Logica', famiglia: 'fondamenti',
      domanda: 'Cosa rende sicuro un ragionamento?',
      descrizione: 'Studia le regole del ragionamento corretto, gli insiemi e gli assiomi. È il terreno su cui poggia il resto della matematica.' },
    { id: 'categorie', titolo: 'Teoria delle categorie', breve: 'Categorie', famiglia: 'fondamenti',
      domanda: 'Cosa resta se guardi solo i collegamenti tra le cose?',
      descrizione: 'Studia le strutture attraverso le trasformazioni che le collegano. È un linguaggio comune a molte aree.' },

    // Numeri e algebra
    { id: 'numeri', titolo: 'Numeri e aritmetica', breve: 'Aritmetica', famiglia: 'numeri-e-algebra',
      domanda: 'Cosa vuol dire contare e misurare?',
      descrizione: 'Dai numeri per contare fino ai numeri reali e complessi. Qui nascono le operazioni, le frazioni e i numeri primi.' },
    { id: 'algebra-elementare', titolo: 'Algebra elementare', breve: 'Algebra', famiglia: 'numeri-e-algebra',
      domanda: 'Come si ragiona su un numero che non si conosce?',
      descrizione: 'Usa le lettere per parlare di numeri qualsiasi. Insegna a risolvere equazioni e a descrivere relazioni con le funzioni.' },
    { id: 'teoria-numeri', titolo: 'Teoria dei numeri', breve: 'Teoria dei numeri', famiglia: 'numeri-e-algebra',
      domanda: 'Quali segreti nascondono i numeri interi?',
      descrizione: 'Studia i numeri interi, in particolare i numeri primi. Contiene alcuni dei problemi aperti più famosi.' },
    { id: 'algebra-astratta', titolo: 'Algebra astratta', breve: 'Strutture', famiglia: 'numeri-e-algebra',
      domanda: 'Cosa hanno in comune calcoli molto diversi?',
      descrizione: 'Studia le regole del calcolo in sé, al di là dei numeri. Gruppi, anelli e campi descrivono simmetrie e strutture.' },
    { id: 'algebra-lineare', titolo: 'Algebra lineare', breve: 'Algebra lineare', famiglia: 'numeri-e-algebra',
      domanda: 'Come si lavora con molte grandezze insieme?',
      descrizione: 'Studia vettori, matrici e trasformazioni che conservano le rette. È uno degli strumenti più usati in scienza e tecnologia.' },

    // Geometria e spazio
    { id: 'geometria-euclidea', titolo: 'Geometria euclidea e trigonometria', breve: 'Geometria', famiglia: 'geometria',
      domanda: 'Quali proprietà hanno le forme?',
      descrizione: 'La geometria di Euclide: punti, rette, triangoli, cerchi e solidi. Include la trigonometria, che collega angoli e lunghezze.' },
    { id: 'geometria-analitica', titolo: 'Geometria analitica', breve: 'Coordinate', famiglia: 'geometria',
      domanda: 'Si può trasformare una figura in un\'equazione?',
      descrizione: 'Unisce geometria e algebra grazie alle coordinate. Rette, cerchi e coniche diventano equazioni.' },
    { id: 'geometrie-non-euclidee', titolo: 'Geometrie non euclidee e proiettive', breve: 'Altre geometrie', famiglia: 'geometria',
      domanda: 'La geometria di Euclide è l\'unica possibile?',
      descrizione: 'Studia geometrie in cui le parallele si comportano in modo diverso, e la geometria della prospettiva. Ha cambiato l\'idea di verità in matematica.' },
    { id: 'topologia', titolo: 'Topologia', breve: 'Topologia', famiglia: 'geometria',
      domanda: 'Cosa resta di una forma se la deformi senza strapparla?',
      descrizione: 'Studia le proprietà che non cambiano con le deformazioni continue. Per la topologia una tazza e una ciambella sono la stessa forma.' },
    { id: 'geometria-differenziale', titolo: 'Geometria differenziale', breve: 'Curvatura', famiglia: 'geometria',
      domanda: 'Come si misura uno spazio curvo?',
      descrizione: 'Usa le derivate per studiare curve, superfici e spazi curvi. È il linguaggio della relatività generale.' },
    { id: 'geometria-algebrica', titolo: 'Geometria algebrica', breve: 'Geometria algebrica', famiglia: 'geometria',
      domanda: 'Che forma hanno le soluzioni di un\'equazione?',
      descrizione: 'Studia le figure definite da equazioni con polinomi. Collega geometria, algebra e teoria dei numeri.' },

    // Analisi e cambiamento
    { id: 'analisi-reale', titolo: 'Analisi reale', breve: 'Analisi', famiglia: 'analisi',
      domanda: 'Come si ragiona sull\'infinitamente piccolo?',
      descrizione: 'Limiti, derivate, integrali e serie. Studia con precisione il cambiamento e l\'accumulo.' },
    { id: 'analisi-complessa', titolo: 'Analisi complessa', breve: 'Analisi complessa', famiglia: 'analisi',
      domanda: 'Cosa succede se le funzioni lavorano con i numeri complessi?',
      descrizione: 'Studia le funzioni di variabile complessa. Sono molto più rigide e sorprendenti di quelle reali.' },
    { id: 'equazioni-differenziali', titolo: 'Equazioni differenziali', breve: 'Equazioni differenziali', famiglia: 'analisi',
      domanda: 'Come si prevede un\'evoluzione conoscendo solo le sue regole di cambiamento?',
      descrizione: 'Studia le equazioni che legano una grandezza alla sua velocità di cambiamento. Descrivono moto, calore, onde e popolazioni.' },
    { id: 'misura-funzionale', titolo: 'Teoria della misura e analisi funzionale', breve: 'Misura', famiglia: 'analisi',
      domanda: 'Cosa vuol dire misurare, e cosa succede in infinite dimensioni?',
      descrizione: 'La teoria della misura rende precisi lunghezza, area e probabilità. L\'analisi funzionale tratta le funzioni come punti di uno spazio.' },
    { id: 'sistemi-dinamici', titolo: 'Sistemi dinamici e caos', breve: 'Caos', famiglia: 'analisi',
      domanda: 'Si può prevedere un sistema che segue regole precise?',
      descrizione: 'Studia come evolvono nel tempo i sistemi che seguono una regola. Include il caos e i frattali.' },

    // Discreto e caso
    { id: 'combinatoria', titolo: 'Combinatoria e teoria dei grafi', breve: 'Grafi', famiglia: 'discreto-e-caso',
      domanda: 'In quanti modi si può fare una cosa?',
      descrizione: 'Studia come contare e come organizzare oggetti finiti. La teoria dei grafi studia le reti di collegamenti.' },
    { id: 'probabilita', titolo: 'Probabilità', breve: 'Probabilità', famiglia: 'discreto-e-caso',
      domanda: 'Si può ragionare con precisione sull\'incertezza?',
      descrizione: 'Dà regole precise per ragionare sul caso. Spiega perché, su grandi numeri, il caso diventa prevedibile.' },
    { id: 'statistica', titolo: 'Statistica', breve: 'Statistica', famiglia: 'discreto-e-caso',
      domanda: 'Cosa si può imparare dai dati?',
      descrizione: 'Raccoglie, riassume e interpreta i dati. Dice anche quanto ci si può fidare delle conclusioni.' },
    { id: 'teoria-giochi', titolo: 'Teoria dei giochi', breve: 'Giochi', famiglia: 'discreto-e-caso',
      domanda: 'Come si decide bene quando anche gli altri decidono?',
      descrizione: 'Studia le decisioni di più persone che si influenzano a vicenda. Si usa in economia, biologia e politica.' },

    // Calcolo e applicazioni
    { id: 'calcolabilita', titolo: 'Calcolabilità e complessità', breve: 'Calcolabilità', famiglia: 'calcolo-e-applicazioni',
      domanda: 'Cosa si può calcolare, e quanto costa farlo?',
      descrizione: 'Studia cosa può fare un algoritmo e quanto tempo gli serve. Dimostra che alcuni problemi non hanno una soluzione automatica.' },
    { id: 'analisi-numerica', titolo: 'Analisi numerica', breve: 'Calcolo numerico', famiglia: 'calcolo-e-applicazioni',
      domanda: 'Come si calcola con un computer ciò che non ha una formula?',
      descrizione: 'Progetta metodi per approssimare le soluzioni con il calcolo. Studia anche quanto sono affidabili i risultati.' },
    { id: 'ottimizzazione', titolo: 'Ottimizzazione e ricerca operativa', breve: 'Ottimizzazione', famiglia: 'calcolo-e-applicazioni',
      domanda: 'Come si trova la scelta migliore?',
      descrizione: 'Cerca il massimo o il minimo di qualcosa rispettando dei vincoli. La ricerca operativa applica queste idee a problemi concreti.' },
    { id: 'informazione-crittografia', titolo: 'Teoria dell\'informazione e crittografia', breve: 'Informazione', famiglia: 'calcolo-e-applicazioni',
      domanda: 'Come si misura, si trasmette e si protegge un messaggio?',
      descrizione: 'La teoria dell\'informazione misura quanta informazione c\'è in un messaggio. La crittografia lo protegge da chi non deve leggerlo.' },
    { id: 'fisica-matematica', titolo: 'Matematica e fisica', breve: 'Fisica', famiglia: 'calcolo-e-applicazioni',
      domanda: 'Come si scrivono le leggi della natura?',
      descrizione: 'Raccoglie le idee matematiche nate dalla fisica e quelle che la fisica usa. Dalle leggi del moto alla meccanica quantistica.' }
  ],

  // La descrizione degli argomenti si scrive nella fase dei contenuti.
  argomenti: [
    // Logica e fondamenti
    { id: 'logica-proposizionale', area: 'logica', titolo: 'Logica delle proposizioni', domanda: 'Quando un ragionamento è corretto?', descrizione: "Proposizioni, connettivi e implicazione: le regole di base del ragionamento corretto." },
    { id: 'metodi-di-dimostrazione', area: 'logica', titolo: 'Metodi di dimostrazione', domanda: 'Come si convince qualcuno senza lasciare dubbi?', descrizione: "I modi per dimostrare: diretto, per assurdo, per induzione, con un controesempio o con il computer." },
    { id: 'insiemi', area: 'logica', titolo: 'Insiemi', domanda: 'Cosa vuol dire raccogliere delle cose in un tutto?', descrizione: "Insiemi, sottoinsiemi e operazioni: il linguaggio comune di tutta la matematica moderna." },
    { id: 'relazioni-e-funzioni', area: 'logica', titolo: 'Relazioni e funzioni', domanda: 'Come si collegano gli elementi di due insiemi?', descrizione: "Come si collegano gli elementi di due insiemi: relazioni, equivalenze, ordini e funzioni." },
    { id: 'infinito-e-cardinalita', area: 'logica', titolo: 'Infinito e cardinalità', domanda: 'Esistono infiniti più grandi di altri?', descrizione: "Come si confrontano gli insiemi infiniti, e perché non tutti gli infiniti sono uguali." },
    { id: 'logica-dei-predicati', area: 'logica', titolo: 'Logica dei predicati', domanda: 'Come si ragiona su «tutti» e su «qualcuno»?', descrizione: "Quantificatori, linguaggi formali e il rapporto tra verità e dimostrazione." },
    { id: 'assiomi-e-fondamenti', area: 'logica', titolo: 'Assiomi e fondamenti', domanda: 'Su cosa poggia tutta la matematica?', descrizione: "Gli assiomi su cui si costruiscono l'aritmetica e la teoria degli insiemi." },
    { id: 'limiti-della-dimostrazione', area: 'logica', titolo: 'Limiti della dimostrazione', domanda: 'Ci sono verità che nessuna dimostrazione può raggiungere?', descrizione: "Ciò che le dimostrazioni non possono raggiungere: indipendenza e incompletezza." },
    { id: 'filosofia-della-matematica', area: 'logica', titolo: 'Filosofia della matematica', domanda: 'Gli oggetti matematici esistono davvero?', descrizione: "Le grandi risposte alla domanda su che cosa sia, davvero, la matematica." },

    // Teoria delle categorie
    { id: 'categorie-e-funtori', area: 'categorie', titolo: 'Categorie e funtori', domanda: 'Cosa si scopre guardando le frecce invece degli oggetti?', descrizione: "Oggetti, frecce e traduzioni tra aree della matematica." },
    { id: 'costruzioni-universali', area: 'categorie', titolo: 'Costruzioni universali', domanda: 'Si può descrivere un oggetto solo attraverso le sue relazioni?', descrizione: "Descrivere gli oggetti attraverso le loro relazioni con tutti gli altri." },
    { id: 'categorie-e-fondamenti', area: 'categorie', titolo: 'Categorie e fondamenti', domanda: 'Le categorie possono fare da fondamento alla matematica?', descrizione: "Universi matematici alternativi agli insiemi, con logiche e uguaglianze nuove." },

    // Numeri e aritmetica
    { id: 'contare-e-naturali', area: 'numeri', titolo: 'Contare', domanda: 'Cosa vuol dire contare?', descrizione: "I numeri per contare, lo zero e il modo di scriverli con poche cifre." },
    { id: 'quattro-operazioni', area: 'numeri', titolo: 'Le operazioni', domanda: 'Cosa fanno davvero le operazioni?', descrizione: "Le quattro operazioni, le potenze e le regole che seguono sempre." },
    { id: 'divisibilita-e-primi', area: 'numeri', titolo: 'Divisibilità e numeri primi', domanda: 'Di quali mattoni sono fatti i numeri?', descrizione: "Multipli, divisori e numeri primi: i mattoni con cui si scompone ogni numero." },
    { id: 'frazioni-e-proporzioni', area: 'numeri', titolo: 'Frazioni, decimali e proporzioni', domanda: 'Come si divide un intero in parti?', descrizione: "Frazioni, decimali, percentuali e proporzioni: come si descrivono le parti e i confronti." },
    { id: 'numeri-relativi', area: 'numeri', titolo: 'Numeri negativi', domanda: 'Che senso ha un numero più piccolo di zero?', descrizione: "I numeri negativi, la regola dei segni e la distanza da zero." },
    { id: 'numeri-reali-e-oltre', area: 'numeri', titolo: 'Reali, complessi e oltre', domanda: 'Ci sono numeri che non sono frazioni?', descrizione: "Dai numeri che non sono frazioni fino ai complessi e ai quaternioni." },
    { id: 'misura-e-stima', area: 'numeri', titolo: 'Misura e stima', domanda: 'Quanto è grande, più o meno?', descrizione: "Unità di misura, arrotondamenti e ordini di grandezza." },
    { id: 'costruzione-dei-numeri', area: 'numeri', titolo: 'Costruire i numeri', domanda: 'Si possono costruire tutti i numeri partendo da quasi niente?', descrizione: "Come la matematica moderna costruisce ogni tipo di numero a partire dagli insiemi." },

    // Algebra elementare
    { id: 'calcolo-letterale', area: 'algebra-elementare', titolo: 'Calcolo letterale e polinomi', domanda: 'Perché usare lettere al posto dei numeri?', descrizione: "Lettere al posto dei numeri, espressioni e polinomi: le regole per calcolare in generale." },
    { id: 'equazioni-e-disequazioni', area: 'algebra-elementare', titolo: 'Equazioni e disequazioni', domanda: 'Come si trova un numero sconosciuto?', descrizione: "Come si trovano i numeri sconosciuti e come si descrivono i limiti." },
    { id: 'funzioni-elementari', area: 'algebra-elementare', titolo: 'Funzioni elementari', domanda: 'Come si descrive una grandezza che dipende da un\'altra?', descrizione: "Grafici, esponenziali e logaritmi: le funzioni che si incontrano ovunque." },
    { id: 'successioni-e-progressioni', area: 'algebra-elementare', titolo: 'Successioni', domanda: 'Come si descrive una sequenza infinita di numeri?', descrizione: "Liste infinite di numeri: progressioni, somme e definizioni passo dopo passo." },

    // Teoria dei numeri
    { id: 'primi-e-distribuzione', area: 'teoria-numeri', titolo: 'Numeri primi', domanda: 'Come sono distribuiti i numeri primi?', descrizione: "I mattoni dei numeri interi: quanti sono, come trovarli, e le domande ancora aperte." },
    { id: 'congruenze', area: 'teoria-numeri', titolo: 'Aritmetica modulare', domanda: 'Cosa succede se i numeri girano in tondo, come le ore?', descrizione: "L'aritmetica dei resti, dall'orologio alla crittografia." },
    { id: 'soluzioni-intere', area: 'teoria-numeri', titolo: 'Equazioni diofantee', domanda: 'Quali equazioni hanno soluzioni con numeri interi?', descrizione: "Equazioni di cui si cercano solo soluzioni intere, da Pitagora a Fermat." },
    { id: 'teoria-analitica-dei-numeri', area: 'teoria-numeri', titolo: 'Teoria analitica dei numeri', domanda: 'Cosa c\'entra l\'analisi con i numeri interi?', descrizione: "Come gli strumenti dell'analisi rivelano la distribuzione dei numeri primi." },
    { id: 'teoria-algebrica-dei-numeri', area: 'teoria-numeri', titolo: 'Teoria algebrica dei numeri', domanda: 'Come si allarga l\'idea di numero intero?', descrizione: "Nuovi sistemi di numeri che allargano gli interi, e i ponti verso il resto della matematica." },

    // Algebra astratta
    { id: 'strutture-algebriche', area: 'algebra-astratta', titolo: 'Strutture algebriche', domanda: 'Cosa resta di un calcolo se togli i numeri?', descrizione: "Le regole del calcolo staccate dai numeri, dal vero e falso alle mosse di un rompicapo." },
    { id: 'gruppi', area: 'algebra-astratta', titolo: 'Gruppi', domanda: 'Cosa hanno in comune tutte le simmetrie?', descrizione: "La matematica della simmetria: gruppi, sottogruppi e il modo in cui agiscono." },
    { id: 'anelli-e-campi', area: 'algebra-astratta', titolo: 'Anelli e campi', domanda: 'Quali regole servono per fare i conti?', descrizione: "Sistemi in cui si somma e si moltiplica, con o senza la possibilità di dividere." },
    { id: 'equazioni-e-simmetrie', area: 'algebra-astratta', titolo: 'Teoria di Galois', domanda: 'Perché alcune equazioni non hanno una formula risolutiva?', descrizione: "Le simmetrie delle soluzioni, e perché alcune equazioni e costruzioni sono impossibili." },

    // Algebra lineare
    { id: 'vettori', area: 'algebra-lineare', titolo: 'Vettori', domanda: 'Come si descrivono con i numeri una direzione e un\'intensità?', descrizione: "Frecce che diventano numeri: somme, angoli e direzioni perpendicolari." },
    { id: 'matrici-e-sistemi', area: 'algebra-lineare', titolo: 'Matrici e sistemi lineari', domanda: 'Come si risolvono molte equazioni insieme?', descrizione: "Tabelle di numeri per risolvere molte equazioni insieme e descrivere trasformazioni." },
    { id: 'spazi-vettoriali', area: 'algebra-lineare', titolo: 'Spazi vettoriali', domanda: 'Cosa vuol dire, davvero, dimensione?', descrizione: "Cosa hanno in comune frecce, polinomi e segnali, e cosa vuol dire dimensione." },
    { id: 'trasformazioni-lineari', area: 'algebra-lineare', titolo: 'Trasformazioni lineari', domanda: 'Quali trasformazioni lasciano dritte le rette?', descrizione: "Le trasformazioni che rispettano somme e multipli, e quanto spazio perdono." },
    { id: 'autovalori-e-decomposizioni', area: 'algebra-lineare', titolo: 'Autovalori e decomposizioni', domanda: 'Quali direzioni una trasformazione non cambia?', descrizione: "Le direzioni che una trasformazione non devia, e come scomporla nei suoi gesti semplici." },

    // Geometria euclidea e trigonometria
    { id: 'enti-e-postulati', area: 'geometria-euclidea', titolo: 'Enti fondamentali e postulati', domanda: 'Da dove si comincia a costruire la geometria?', descrizione: "Punti, rette, angoli e i postulati di Euclide: le fondamenta della geometria." },
    { id: 'triangoli-e-poligoni', area: 'geometria-euclidea', titolo: 'Triangoli e poligoni', domanda: 'Perché il triangolo è così importante?', descrizione: "Le figure a lati dritti, dal triangolo ai poligoni regolari, con i loro teoremi più famosi." },
    { id: 'misura-delle-figure', area: 'geometria-euclidea', titolo: 'Lunghezze e aree', domanda: 'Come si misura una figura piana?', descrizione: "Perimetri, aree e il numero pi greco: come si misurano le figure piane." },
    { id: 'geometria-solida', area: 'geometria-euclidea', titolo: 'Geometria nello spazio', domanda: 'Come è fatto lo spazio a tre dimensioni?', descrizione: "Solidi, volumi e poliedri regolari, fino alle dimensioni più alte." },
    { id: 'trasformazioni-e-similitudine', area: 'geometria-euclidea', titolo: 'Trasformazioni e similitudine', domanda: 'Cosa resta uguale quando sposti o ingrandisci una figura?', descrizione: "Movimenti, simmetrie e ingrandimenti: ciò che cambia e ciò che resta uguale." },
    { id: 'trigonometria', area: 'geometria-euclidea', titolo: 'Trigonometria', domanda: 'Come si misura una distanza che non si può raggiungere?', descrizione: "Seno, coseno e i loro teoremi: angoli e lunghezze legati dai numeri." },

    // Geometria analitica
    { id: 'coordinate', area: 'geometria-analitica', titolo: 'Coordinate', domanda: 'Come si trasforma un punto in una coppia di numeri?', descrizione: "Il piano cartesiano e gli altri modi di dare ai punti un nome fatto di numeri." },
    { id: 'rette-e-luoghi', area: 'geometria-analitica', titolo: 'Rette e luoghi geometrici', domanda: 'Come si scrive una figura come equazione?', descrizione: "Rette, circonferenze e curve scritte come equazioni." },
    { id: 'sezioni-coniche', area: 'geometria-analitica', titolo: 'Coniche', domanda: 'Cosa hanno in comune un\'orbita, un faro e una fontana?', descrizione: "Parabole, ellissi e iperboli: le curve che nascono tagliando un cono." },
    { id: 'spazio-e-dimensioni', area: 'geometria-analitica', titolo: 'Spazio e dimensioni', domanda: 'Si può descrivere uno spazio con più di tre dimensioni?', descrizione: "Coordinate nello spazio a tre dimensioni, e oltre." },

    // Geometrie non euclidee e proiettive
    { id: 'parallele-e-curvatura', area: 'geometrie-non-euclidee', titolo: 'Geometrie non euclidee', domanda: 'Cosa succede se le parallele non sono uniche?', descrizione: "Geometrie coerenti in cui le parallele sono infinite o non esistono." },
    { id: 'geometria-proiettiva', area: 'geometrie-non-euclidee', titolo: 'Geometria proiettiva', domanda: 'Cosa resta vero in un disegno in prospettiva?', descrizione: "La geometria della prospettiva, con i punti all'infinito presi sul serio." },
    { id: 'classificare-le-geometrie', area: 'geometrie-non-euclidee', titolo: 'Che cos\'è una geometria', domanda: 'Quante geometrie esistono, e cosa le distingue?', descrizione: "Cosa rende una geometria tale, e come le si mette in ordine con le trasformazioni." },

    // Topologia
    { id: 'idee-topologiche', area: 'topologia', titolo: 'Forme deformabili', domanda: 'Cosa resta di una forma se la puoi deformare a piacere?', descrizione: "Forme che si possono deformare senza strappare, e ciò che resta uguale." },
    { id: 'spazi-topologici', area: 'topologia', titolo: 'Spazi topologici', domanda: 'Cosa vuol dire, in generale, essere vicini?', descrizione: "Vicinanza, continuità e compattezza dette nel modo più generale." },
    { id: 'superfici-e-invarianti', area: 'topologia', titolo: 'Superfici e invarianti', domanda: 'Come si contano i buchi di una forma?', descrizione: "Contare vertici, spigoli e facce per riconoscere le superfici." },
    { id: 'topologia-algebrica', area: 'topologia', titolo: 'Topologia algebrica', domanda: 'Si può usare l\'algebra per distinguere le forme?', descrizione: "Gruppi e numeri che distinguono le forme, fino alla congettura di Poincaré." },
    { id: 'teoria-dei-nodi', area: 'topologia', titolo: 'Nodi', domanda: 'Quando due nodi sono davvero diversi?', descrizione: "Curve annodate nello spazio, e come dimostrare che un nodo non si scioglie." },

    // Geometria differenziale
    { id: 'curve-e-superfici', area: 'geometria-differenziale', titolo: 'Curve e superfici', domanda: 'Quanto è curva una curva?', descrizione: "Misurare la curvatura di curve e superfici, e cosa dice sulla loro forma." },
    { id: 'varieta-e-metriche', area: 'geometria-differenziale', titolo: 'Varietà e geometria riemanniana', domanda: 'Come si misura dentro uno spazio curvo?', descrizione: "Spazi curvi di qualsiasi dimensione, con distanze e curvature misurate dall'interno." },
    { id: 'simmetrie-continue-e-forme', area: 'geometria-differenziale', titolo: 'Forme, gruppi di Lie e fibrati', domanda: 'Come si descrivono simmetrie che variano con continuità?', descrizione: "Integrali su spazi curvi, simmetrie continue e spazi attaccati ad altri spazi." },

    // Geometria algebrica
    { id: 'curve-e-intersezioni', area: 'geometria-algebrica', titolo: 'Curve algebriche', domanda: 'Che forma ha un\'equazione?', descrizione: "Curve definite da polinomi, i loro incroci e i loro buchi." },
    { id: 'aritmetica-delle-curve', area: 'geometria-algebrica', titolo: 'Aritmetica delle curve', domanda: 'Quanti punti con coordinate razionali ha una curva?', descrizione: "Punti con coordinate frazionarie: dove la geometria incontra i numeri interi." },
    { id: 'varieta-algebriche', area: 'geometria-algebrica', titolo: 'Varietà e schemi', domanda: 'Come si studiano le forme usando solo l\'algebra?', descrizione: "Forme definite da sistemi di equazioni, studiate con l'algebra pura." },

    // Analisi reale
    { id: 'limiti', area: 'analisi-reale', titolo: 'Limiti', domanda: 'Cosa vuol dire avvicinarsi senza mai arrivare?', descrizione: "Il concetto di limite e la completezza dei numeri reali, cuore di tutta l'analisi." },
    { id: 'continuita', area: 'analisi-reale', titolo: 'Continuità', domanda: 'Cosa vuol dire che una funzione non fa salti?', descrizione: "Funzioni senza salti e i grandi teoremi che garantiscono l'esistenza di soluzioni." },
    { id: 'derivate', area: 'analisi-reale', titolo: 'Derivate', domanda: 'Come si misura un cambiamento istantaneo?', descrizione: "La misura del cambiamento istantaneo, e come usarla per trovare massimi e approssimazioni." },
    { id: 'integrali', area: 'analisi-reale', titolo: 'Integrali', domanda: 'Come si somma un\'infinità di pezzi piccolissimi?', descrizione: "La misura dell'accumulo e il suo legame con le derivate." },
    { id: 'serie-numeriche', area: 'analisi-reale', titolo: 'Serie', domanda: 'Si può sommare all\'infinito?', descrizione: "Somme infinite: quando danno un numero finito, e quando no." },
    { id: 'piu-variabili', area: 'analisi-reale', titolo: 'Più variabili', domanda: 'Come cambia una grandezza che dipende da molte altre?', descrizione: "Derivate, integrali e campi per grandezze che dipendono da molte variabili." },

    // Analisi complessa
    { id: 'geometria-dei-complessi', area: 'analisi-complessa', titolo: 'Il piano complesso', domanda: 'Cosa succede se i numeri diventano punti del piano?', descrizione: "I numeri complessi come punti del piano, dove moltiplicare vuol dire ruotare." },
    { id: 'derivabilita-complessa', area: 'analisi-complessa', titolo: 'Funzioni olomorfe', domanda: 'Perché le funzioni complesse sono così rigide?', descrizione: "Funzioni con derivata complessa: rigide, conformi e sorprendenti." },
    { id: 'integrazione-complessa', area: 'analisi-complessa', titolo: 'Integrazione complessa', domanda: 'Cosa si scopre girando intorno a un punto?', descrizione: "Integrali lungo curve chiuse e quello che il bordo dice dell'interno." },
    { id: 'prolungamento-e-superfici', area: 'analisi-complessa', titolo: 'Prolungamento e superfici di Riemann', domanda: 'Fin dove si può estendere una funzione?', descrizione: "Estendere le funzioni oltre il loro dominio e dare una casa alle funzioni a più valori." },

    // Equazioni differenziali
    { id: 'equazioni-ordinarie', area: 'equazioni-differenziali', titolo: 'Equazioni differenziali ordinarie', domanda: 'Si può prevedere il futuro sapendo solo come cambia il presente?', descrizione: "Leggi di cambiamento scritte con le derivate, e cosa dicono sul futuro." },
    { id: 'edo-lineari-e-sistemi', area: 'equazioni-differenziali', titolo: 'Equazioni lineari e sistemi', domanda: 'Come si studiano più grandezze che cambiano insieme?', descrizione: "Oscillazioni, sovrapposizioni e grandezze che si influenzano a vicenda." },
    { id: 'derivate-parziali-edp', area: 'equazioni-differenziali', titolo: 'Equazioni alle derivate parziali', domanda: 'Come si diffondono calore, onde e segnali?', descrizione: "Calore, onde, equilibri e fluidi: fenomeni che cambiano nello spazio e nel tempo." },

    // Teoria della misura e analisi funzionale
    { id: 'misura-e-integrazione', area: 'misura-funzionale', titolo: 'Misura e integrale di Lebesgue', domanda: 'Si può dare una misura a qualunque insieme?', descrizione: "Lunghezze e aree per insiemi strani, un integrale più potente e i suoi paradossi." },
    { id: 'spazi-di-funzioni', area: 'misura-funzionale', titolo: 'Spazi di funzioni', domanda: 'Una funzione può essere un punto di uno spazio?', descrizione: "Funzioni come punti di spazi infiniti, con lunghezze, angoli e trasformazioni." },
    { id: 'analisi-di-fourier', area: 'misura-funzionale', titolo: 'Analisi di Fourier', domanda: 'Si può scomporre ogni segnale in onde semplici?', descrizione: "Scomporre segnali in onde pure, e ricostruirli da poche misure." },

    // Sistemi dinamici e caos
    { id: 'iterazione', area: 'sistemi-dinamici', titolo: 'Iterazione', domanda: 'Cosa succede se ripeti la stessa regola all\'infinito?', descrizione: "Regole ripetute all'infinito, dai punti fissi ai misteri irrisolti." },
    { id: 'stabilita-e-fasi', area: 'sistemi-dinamici', titolo: 'Spazio delle fasi e stabilità', domanda: 'Quando un equilibrio resiste a una spinta?', descrizione: "Disegnare tutti i comportamenti di un sistema e capire quali equilibri resistono." },
    { id: 'caos', area: 'sistemi-dinamici', titolo: 'Caos', domanda: 'Un sistema senza caso può essere imprevedibile?', descrizione: "Sistemi senza caso che diventano imprevedibili, e la struttura nascosta del loro disordine." },
    { id: 'frattali-e-dimensione', area: 'sistemi-dinamici', titolo: 'Frattali', domanda: 'Quanto è lunga una costa?', descrizione: "Forme con dettagli a ogni scala e dimensioni che non sono numeri interi." },

    // Combinatoria e teoria dei grafi
    { id: 'contare', area: 'combinatoria', titolo: 'Contare', domanda: 'Come si contano le possibilità senza elencarle tutte?', descrizione: "Le regole per contare scelte, file e gruppi senza doverli elencare." },
    { id: 'tecniche-combinatorie', area: 'combinatoria', titolo: 'Tecniche combinatorie', domanda: 'Quali idee permettono di contare ciò che sembra incontabile?', descrizione: "Idee potenti per contare: cassetti, inclusione-esclusione, successioni e funzioni generatrici." },
    { id: 'grafi', area: 'combinatoria', titolo: 'Grafi', domanda: 'Cosa si capisce guardando solo i collegamenti?', descrizione: "Reti di punti e collegamenti, dalle mappe ai navigatori." },
    { id: 'ordine-nel-disordine', area: 'combinatoria', titolo: 'Ordine nel disordine', domanda: 'Il disordine completo è impossibile?', descrizione: "Strutture che compaiono per forza, e il caso usato come strumento di dimostrazione." },

    // Probabilità
    { id: 'probabilita-elementare', area: 'probabilita', titolo: 'Probabilità elementare', domanda: 'Si può misurare l\'incertezza?', descrizione: "Eventi, casi possibili e i diversi modi di intendere la probabilità." },
    { id: 'condizionata-e-indipendenza', area: 'probabilita', titolo: 'Probabilità condizionata', domanda: 'Come cambia una probabilità quando sappiamo qualcosa in più?', descrizione: "Come cambiano le probabilità quando si sa qualcosa in più." },
    { id: 'variabili-aleatorie', area: 'probabilita', titolo: 'Variabili aleatorie', domanda: 'Come si descrive un numero che dipende dal caso?', descrizione: "Numeri che dipendono dal caso, con le loro medie, varianze e distribuzioni." },
    { id: 'teoremi-limite', area: 'probabilita', titolo: 'Teoremi limite', domanda: 'Perché il caso, su grandi numeri, diventa prevedibile?', descrizione: "Perché, su grandi numeri, il caso diventa regolare e prevedibile." },
    { id: 'fondamenti-della-probabilita', area: 'probabilita', titolo: 'Fondamenti della probabilità', domanda: 'Su cosa poggia il calcolo delle probabilità?', descrizione: "Gli assiomi della probabilità e il suo legame con la teoria della misura." },
    { id: 'processi-stocastici', area: 'probabilita', titolo: 'Processi stocastici', domanda: 'Come evolve il caso nel tempo?', descrizione: "Il caso che si svolge nel tempo: passeggiate, catene e moto browniano." },

    // Statistica
    { id: 'statistica-descrittiva', area: 'statistica', titolo: 'Statistica descrittiva', domanda: 'Come si riassumono tanti dati in pochi numeri?', descrizione: "Come si riassumono e si rappresentano i dati, e quali trappole evitare." },
    { id: 'campioni-ed-esperimenti', area: 'statistica', titolo: 'Campioni ed esperimenti', domanda: 'Si può conoscere il tutto guardando una parte?', descrizione: "Come si raccolgono dati affidabili e come si scoprono le cause." },
    { id: 'inferenza', area: 'statistica', titolo: 'Inferenza statistica', domanda: 'Quanto ci si può fidare di una conclusione tratta dai dati?', descrizione: "Come si passa dai dati di un campione a conclusioni sulla popolazione, con il giusto grado di incertezza." },
    { id: 'modelli-e-apprendimento', area: 'statistica', titolo: 'Modelli e apprendimento automatico', domanda: 'Una macchina può imparare dai dati?', descrizione: "Modelli che descrivono i dati, e macchine che imparano da essi." },

    // Teoria dei giochi
    { id: 'giochi-strategici', area: 'teoria-giochi', titolo: 'Giochi strategici', domanda: 'Come si sceglie quando il risultato dipende anche dagli altri?', descrizione: "Situazioni in cui il risultato dipende dalle scelte di tutti, e i dilemmi che ne nascono." },
    { id: 'equilibri', area: 'teoria-giochi', titolo: 'Equilibri', domanda: 'Esiste una scelta da cui nessuno vuole spostarsi?', descrizione: "Combinazioni di scelte da cui nessuno vuole spostarsi, e quando esistono." },
    { id: 'cooperazione-ed-evoluzione', area: 'teoria-giochi', titolo: 'Cooperazione ed evoluzione', domanda: 'Perché e quando conviene cooperare?', descrizione: "Come nasce la cooperazione, tra persone e tra esseri viventi." },
    { id: 'giochi-in-sequenza', area: 'teoria-giochi', titolo: 'Giochi in sequenza', domanda: 'Esiste sempre una strategia vincente?', descrizione: "Giochi a turni, strategie vincenti e il ragionamento all'indietro." },
    { id: 'scelte-collettive', area: 'teoria-giochi', titolo: 'Scelte collettive', domanda: 'Si può decidere in modo giusto tutti insieme?', descrizione: "Votare, abbinare e mettere all'asta: regole per decidere tutti insieme." },

    // Calcolabilità e complessità
    { id: 'algoritmi', area: 'calcolabilita', titolo: 'Algoritmi', domanda: 'Cosa vuol dire risolvere un problema con una procedura?', descrizione: "Procedure precise per risolvere problemi, e come misurarne la velocità." },
    { id: 'modelli-di-calcolo', area: 'calcolabilita', titolo: 'Modelli di calcolo', domanda: 'Cos\'è, in fondo, un computer?', descrizione: "Macchine ideali che definiscono cosa vuol dire calcolare." },
    { id: 'limiti-del-calcolo', area: 'calcolabilita', titolo: 'Limiti del calcolo', domanda: 'Esistono problemi che nessun computer potrà mai risolvere?', descrizione: "Problemi precisi che nessun computer potrà mai risolvere." },
    { id: 'complessita', area: 'calcolabilita', titolo: 'Complessità', domanda: 'Quali problemi si risolvono in un tempo ragionevole?', descrizione: "Quali problemi si risolvono in un tempo ragionevole, e la grande domanda aperta su P e NP." },

    // Analisi numerica
    { id: 'errori-e-calcolatori', area: 'analisi-numerica', titolo: 'Errori e numeri nel computer', domanda: 'Quanto ci si può fidare di un risultato calcolato?', descrizione: "Come i computer rappresentano i numeri, e come si controllano gli errori." },
    { id: 'equazioni-numeriche', area: 'analisi-numerica', titolo: 'Risolvere equazioni con il calcolo', domanda: 'Come si risolve un\'equazione che non ha una formula?', descrizione: "Metodi che si avvicinano alla soluzione passo dopo passo." },
    { id: 'approssimare-e-simulare', area: 'analisi-numerica', titolo: 'Approssimare e simulare', domanda: 'Come si simula il futuro un passo alla volta?', descrizione: "Curve, integrali e simulazioni calcolati con il computer." },

    // Ottimizzazione e ricerca operativa
    { id: 'ottimo-e-vincoli', area: 'ottimizzazione', titolo: 'Obiettivi e vincoli', domanda: 'Come si sceglie il meglio tra infinite possibilità?', descrizione: "Scrivere una decisione come obiettivo e vincoli, e scendere verso la soluzione migliore." },
    { id: 'programmazione-lineare-e-flussi', area: 'ottimizzazione', titolo: 'Programmazione lineare', domanda: 'Come si distribuiscono risorse limitate?', descrizione: "Risorse limitate, vertici ottimi e problemi gemelli." },
    { id: 'ricerca-operativa', area: 'ottimizzazione', titolo: 'Ricerca operativa', domanda: 'Come si organizzano al meglio percorsi, carichi e attese?', descrizione: "Percorsi, carichi, attese: problemi pratici difficili e i modi per affrontarli." },
    { id: 'curve-ottimali', area: 'ottimizzazione', titolo: 'Calcolo delle variazioni', domanda: 'Quale curva è la migliore?', descrizione: "Le figure e le curve migliori, dalla regina Didone alle leggi della fisica." },

    // Teoria dell'informazione e crittografia
    { id: 'misurare-l-informazione', area: 'informazione-crittografia', titolo: 'Misurare l\'informazione', domanda: 'Si può misurare quanta informazione c\'è in un messaggio?', descrizione: "Bit, sorpresa e casualità: l'informazione diventa un numero." },
    { id: 'compressione-e-codici', area: 'informazione-crittografia', titolo: 'Compressione e correzione degli errori', domanda: 'Come si trasmette un messaggio in modo breve e senza errori?', descrizione: "Scrivere i messaggi in meno spazio e proteggerli dagli errori." },
    { id: 'crittografia-classica', area: 'informazione-crittografia', titolo: 'Crittografia classica', domanda: 'Come si nasconde un messaggio?', descrizione: "Cifrari antichi e moderni con una chiave condivisa, e come si rompono." },
    { id: 'crittografia-moderna', area: 'informazione-crittografia', titolo: 'Crittografia moderna', domanda: 'Come si condivide un segreto con uno sconosciuto?', descrizione: "Chiavi pubbliche, firme e impronte digitali: la matematica che protegge internet." },

    // Matematica e fisica
    { id: 'modelli', area: 'fisica-matematica', titolo: 'Modelli', domanda: 'Cosa vuol dire descrivere il mondo con un\'equazione?', descrizione: "Descrivere il mondo con equazioni, e perché funziona così bene." },
    { id: 'meccanica', area: 'fisica-matematica', titolo: 'Meccanica', domanda: 'Perché le cose si muovono come si muovono?', descrizione: "Forze, energia e orbite: la prima grande teoria matematica della natura." },
    { id: 'simmetrie-e-campi', area: 'fisica-matematica', titolo: 'Simmetrie e campi', domanda: 'Perché alcune quantità non cambiano mai?', descrizione: "Simmetrie che diventano leggi di conservazione e forze fondamentali." },
    { id: 'spazio-e-tempo', area: 'fisica-matematica', titolo: 'Spazio e tempo', domanda: 'Che forma ha l\'universo?', descrizione: "Tempo relativo, spaziotempo curvo e la geometria dell'universo." },
    { id: 'caso-nella-fisica', area: 'fisica-matematica', titolo: 'Probabilità nella fisica', domanda: 'Perché la fisica ha bisogno del caso?', descrizione: "Entropia, stati quantistici e il ruolo irriducibile della probabilità." }
  ],

  // Percorsi tematici trasversali. Le frasi di raccordo si scrivono nella fase 4.
  grandiDomande: [
    { id: 'numero', titolo: 'Cos\'è un numero?',
      descrizione: "Contare sembra la cosa più semplice del mondo. Eppure l'idea di numero si è allargata per millenni, spinta ogni volta da un problema nuovo. Questo percorso segue quell'allargamento, fino a chiedersi cosa sia, in fondo, un numero.",
      passi: [
        { id: 'numeri-naturali' },
        { id: 'zero', raccordo: "I naturali servono a contare oggetti. Per dire che non ce n'è nessuno serve un numero nuovo: lo zero." },
        { id: 'sistema-posizionale', raccordo: "Lo zero non indica solo il niente. Segna anche un posto vuoto, e permette di scrivere ogni numero con dieci cifre." },
        { id: 'numeri-interi-relativi', raccordo: "Con i naturali non sempre si può sottrarre. Per calcolare «tre meno cinque» servono i numeri negativi." },
        { id: 'frazioni', raccordo: "Con gli interi non sempre si può dividere. Per spartire una pizza tra tre persone servono le frazioni." },
        { id: 'numeri-razionali', raccordo: "Le frazioni, positive e negative, formano un unico sistema. Lì si somma, si sottrae, si moltiplica e si divide sempre." },
        { id: 'irrazionalita-radice-di-due', raccordo: "Sembra che le frazioni bastino a misurare tutto. Ma la diagonale di un quadrato sfugge a ogni frazione." },
        { id: 'numeri-reali', raccordo: "Per misurare ogni lunghezza bisogna riempire i buchi tra le frazioni. Nascono così i numeri reali." },
        { id: 'numeri-complessi', raccordo: "Nei reali, nessun numero al quadrato dà meno uno. Inventare quel numero apre un mondo nuovo." },
        { id: 'quaternioni', raccordo: "I numeri complessi sono punti del piano. Hamilton cercò per anni numeri simili per lo spazio, e trovò i quaternioni." },
        { id: 'assiomi-di-peano', raccordo: "Dopo tanti allargamenti viene un dubbio: cosa sono, davvero, i numeri da cui siamo partiti? Peano risponde con pochi assiomi." },
        { id: 'costruzione-dei-naturali', raccordo: "Gli assiomi dicono come si comportano i naturali, ma non cosa sono. Con gli insiemi si possono costruire dal nulla." },
        { id: 'sezioni-di-dedekind', raccordo: "Anche i reali si possono costruire, partendo dalle frazioni. Dedekind lo fece tagliando la retta in due parti." },
        { id: 'interi-p-adici', raccordo: "I reali completano le frazioni usando la distanza abituale. Misurando la distanza in un altro modo, nascono numeri diversi." },
        { id: 'numeri-iperreali', raccordo: "Per secoli si è parlato di numeri infinitamente piccoli senza saperli definire. Nel Novecento sono diventati numeri veri e propri." }
      ] },
    { id: 'infinito', titolo: 'Cos\'è l\'infinito?',
      descrizione: "L'infinito ha spaventato e affascinato i filosofi per millenni. La matematica ha imparato a maneggiarlo con precisione, e ha scoperto infiniti di grandezze diverse. Questo percorso va dai paradossi antichi alle domande ancora aperte.",
      passi: [
        { id: 'paradossi-di-zenone' },
        { id: 'infinito-potenziale-attuale', raccordo: "Zenone mette in difficoltà con infiniti passi. Aristotele distinse un infinito che non finisce mai da un infinito già tutto presente." },
        { id: 'infinita-dei-primi', raccordo: "Il primo grande teorema sull'infinito è antico. Euclide dimostrò che i numeri primi non finiscono mai." },
        { id: 'limite-di-successione', raccordo: "Per trattare con precisione i processi infiniti serve uno strumento. Il limite descrive dove porta una successione senza fine." },
        { id: 'serie-geometrica', raccordo: "Con i limiti si dà senso a una somma infinita. La serie geometrica risponde finalmente a Zenone." },
        { id: 'serie-armonica', raccordo: "Non tutte le somme infinite danno un numero finito. La serie armonica cresce senza limite, anche se i suoi termini diventano minuscoli." },
        { id: 'albergo-di-hilbert', raccordo: "Finora l'infinito era un processo. Hilbert lo immagina come un oggetto già completo: un albergo con infinite stanze." },
        { id: 'insiemi-numerabili', raccordo: "Nell'albergo di Hilbert c'è sempre posto per nuovi ospiti, se si possono mettere in fila. Questi insiemi si chiamano numerabili." },
        { id: 'argomento-diagonale-cantor', raccordo: "Sembra che ogni insieme infinito si possa mettere in fila. Cantor dimostrò che i numeri reali non ci riescono." },
        { id: 'insieme-di-cantor', raccordo: "I reali sono più che numerabili. L'insieme di Cantor mostra che può esserlo anche un insieme di lunghezza zero." },
        { id: 'teorema-di-cantor', raccordo: "Esiste un infinito più grande dei reali? Il teorema di Cantor dice che, dopo ogni infinito, ce n'è sempre uno più grande." },
        { id: 'cardinali-transfiniti', raccordo: "Gli infiniti di grandezze diverse si possono mettere in ordine. Nascono così i cardinali infiniti." },
        { id: 'ipotesi-del-continuo', raccordo: "Tra l'infinito dei naturali e quello dei reali c'è qualcosa in mezzo? Gli assiomi usuali non bastano a deciderlo." },
        { id: 'piano-proiettivo', raccordo: "L'infinito non è solo una questione di quantità. In geometria si aggiungono punti all'infinito, dove le parallele si incontrano." },
        { id: 'numeri-iperreali', raccordo: "L'ultimo passo torna ai numeri. Esistono sistemi con quantità infinite e infinitamente piccole, trattate come numeri qualsiasi." }
      ] },
    { id: 'certezza', titolo: 'Cosa vuol dire essere certi?',
      descrizione: "In matematica, una volta dimostrato, un teorema resta vero per sempre. Ma da dove viene questa certezza, e quali sono i suoi limiti? Questo percorso va dalle frasi vere o false fino ai confini di ciò che si può dimostrare.",
      passi: [
        { id: 'proposizione' },
        { id: 'implicazione', raccordo: "Una proposizione è vera o falsa. Il ragionamento comincia quando si collegano le proposizioni: se vale questa, allora vale quella." },
        { id: 'dimostrazione', raccordo: "Mettendo in fila molte implicazioni si ottiene una dimostrazione. È la catena che porta dalle premesse alla conclusione." },
        { id: 'controesempio', raccordo: "Per dimostrare una frase generale serve un ragionamento. Per smentirla basta un solo caso contrario." },
        { id: 'dimostrazione-per-assurdo', raccordo: "A volte la strada diretta è chiusa. Allora si suppone il contrario e si arriva a una contraddizione." },
        { id: 'induzione-matematica', raccordo: "Come si dimostra una cosa per infiniti numeri? L'induzione lo fa con due soli passi, come una fila di tessere del domino." },
        { id: 'metodo-assiomatico', raccordo: "Ogni dimostrazione parte da qualcosa. Gli assiomi sono le premesse accettate senza dimostrazione, da cui deriva tutto il resto." },
        { id: 'postulati-di-euclide', raccordo: "Il primo grande esempio di metodo assiomatico sono gli Elementi di Euclide. La geometria nasce da cinque postulati." },
        { id: 'quinto-postulato', raccordo: "Il quinto postulato sembrava meno evidente degli altri. Per duemila anni si cercò di ricavarlo dai primi quattro." },
        { id: 'coerenza-geometrie-non-euclidee', raccordo: "Negando il quinto postulato nascono geometrie nuove. Beltrami dimostrò che sono coerenti quanto quella di Euclide." },
        { id: 'paradosso-di-russell', raccordo: "Se gli assiomi possono cambiare, su cosa poggia la certezza? Gli insiemi sembravano una base solida, finché Russell vi trovò un paradosso." },
        { id: 'assiomi-zfc', raccordo: "Per evitare i paradossi, la teoria degli insiemi fu ricostruita con assiomi scelti con cura." },
        { id: 'programma-di-hilbert', raccordo: "Con assiomi precisi, Hilbert sperava di dimostrare una volta per tutte che la matematica è coerente e completa." },
        { id: 'teoremi-di-incompletezza', raccordo: "Il sogno di Hilbert si scontrò con un limite. Gödel dimostrò che in ogni sistema abbastanza potente esistono verità non dimostrabili." },
        { id: 'problema-della-fermata', raccordo: "Pochi anni dopo, Turing trovò un limite simile per i calcoli. Nessun programma può prevedere se ogni altro programma si fermerà." },
        { id: 'dimostrazione-assistita', raccordo: "Alcune dimostrazioni moderne sono troppo lunghe per essere controllate a mano. Oggi i computer ne verificano ogni passo." },
        { id: 'dimostrazioni-a-conoscenza-zero', raccordo: "L'ultimo passo cambia il significato di dimostrare. Si può convincere qualcuno di una verità senza rivelare nient'altro." }
      ] },
    { id: 'scoperta-o-invenzione', titolo: 'La matematica si scopre o si inventa?',
      descrizione: "I teoremi esistono prima che qualcuno li dimostri, oppure li creiamo noi? È una delle domande più antiche della filosofia della matematica. Questo percorso presenta le risposte principali e i fatti che le mettono alla prova.",
      passi: [
        { id: 'platonismo' },
        { id: 'numeri-complessi', raccordo: "Se la matematica si scopre, cosa scopriamo? I numeri complessi sembravano un'invenzione assurda, eppure si sono rivelati indispensabili." },
        { id: 'quinto-postulato', raccordo: "Anche la geometria sembrava una descrizione dello spazio reale. Il quinto postulato fu il primo a incrinare questa certezza." },
        { id: 'geometria-iperbolica', raccordo: "Negando il quinto postulato, Lobačevskij e Bolyai costruirono una geometria diversa. Era un'invenzione o una scoperta?" },
        { id: 'coerenza-geometrie-non-euclidee', raccordo: "La nuova geometria non contiene contraddizioni. Quindi esistono più geometrie possibili, tutte coerenti." },
        { id: 'formalismo', raccordo: "Se le geometrie possono essere diverse, forse la matematica è un gioco di simboli e regole. È la risposta del formalismo." },
        { id: 'logicismo', raccordo: "Un'altra risposta vede nella matematica solo logica pura. Frege e Russell cercarono di ricavare l'aritmetica dalla logica." },
        { id: 'paradosso-di-russell', raccordo: "Il progetto di Frege incontrò un ostacolo inatteso. Russell trovò una contraddizione nel suo sistema." },
        { id: 'intuizionismo', raccordo: "Una terza risposta dice che la matematica è una costruzione della mente. L'intuizionismo accetta solo ciò che si può costruire." },
        { id: 'teoremi-di-incompletezza', raccordo: "I teoremi di Gödel colpiscono le tre scuole in modi diversi. Nessun sistema formale cattura tutte le verità dell'aritmetica." },
        { id: 'ipotesi-del-continuo', raccordo: "Se una domanda non si può decidere, ha comunque una risposta? L'ipotesi del continuo mette alla prova le diverse filosofie." },
        { id: 'programma-di-langlands', raccordo: "A volte aree lontane si rivelano legate in profondità. Il programma di Langlands sembra la scoperta di un ordine nascosto." },
        { id: 'irragionevole-efficacia', raccordo: "L'ultimo indizio viene dalla fisica. Una matematica nata per curiosità descrive il mondo con una precisione sorprendente." }
      ] },
    { id: 'spazio', titolo: 'Cos\'è lo spazio?',
      descrizione: "Lo spazio sembra semplicemente il contenitore di tutto ciò che esiste. La matematica ha scoperto molti spazi possibili: curvi, deformabili, con più dimensioni. Questo percorso va dalla geometria di Euclide allo spaziotempo di Einstein.",
      passi: [
        { id: 'punto-retta-piano' },
        { id: 'postulati-di-euclide', raccordo: "Punti, rette e piani sono gli elementi di base. Euclide fissò le regole del loro comportamento in cinque postulati." },
        { id: 'piano-cartesiano', raccordo: "Cartesio ebbe un'idea nuova: dare a ogni punto due numeri. Così la geometria diventa algebra." },
        { id: 'spazi-a-n-dimensioni', raccordo: "Se un punto del piano è una coppia di numeri, perché fermarsi a tre? Con le coordinate si parla di spazi con molte dimensioni." },
        { id: 'quinto-postulato', raccordo: "Torniamo a Euclide. Il suo quinto postulato, sulle parallele, nasconde una scelta che non era obbligata." },
        { id: 'geometria-sferica', raccordo: "Sulla superficie di una sfera le parallele non esistono. È il primo esempio di una geometria diversa da quella di Euclide." },
        { id: 'geometria-iperbolica', raccordo: "All'opposto, esiste una geometria con infinite parallele. Lo spazio può curvarsi in due modi diversi." },
        { id: 'piano-proiettivo', raccordo: "Un'altra strada aggiunge punti all'infinito. Nel piano proiettivo due rette si incontrano sempre." },
        { id: 'programma-di-erlangen', raccordo: "Con tante geometrie diverse serve un modo per metterle in ordine. Klein propose di classificarle con i gruppi di trasformazioni." },
        { id: 'deformazione-continua', raccordo: "Se si permette di piegare e stirare, resta solo la forma più essenziale. È lo sguardo della topologia." },
        { id: 'nastro-di-moebius', raccordo: "La topologia rivela forme sorprendenti. Il nastro di Möbius, ad esempio, ha un solo lato." },
        { id: 'spazio-topologico', raccordo: "Per studiare queste forme in generale serve una definizione astratta di vicinanza. Nasce così lo spazio topologico." },
        { id: 'theorema-egregium', raccordo: "Torniamo alle superfici curve. Gauss scoprì che la curvatura si può misurare stando dentro la superficie." },
        { id: 'varieta-topologica', raccordo: "Se la curvatura si misura dall'interno, non serve uno spazio esterno. Le varietà sono spazi che, da vicino, sembrano piatti." },
        { id: 'relativita-generale', raccordo: "L'ultimo passo porta alla fisica. Per Einstein lo spaziotempo è una varietà curva, e la sua curvatura è la gravità." }
      ] },
    { id: 'caso', titolo: 'Cos\'è il caso?',
      descrizione: "Lanciare un dado, prevedere il tempo, misurare un elettrone: ogni volta entra in gioco il caso. Ma cos'è, davvero, il caso? Questo percorso va dalle prime regole della probabilità fino al caso nella fisica.",
      passi: [
        { id: 'probabilita-classica' },
        { id: 'probabilita-frequentista', raccordo: "Contare i casi favorevoli funziona per dadi e monete. Per la pioggia di domani serve un'altra idea: la frequenza." },
        { id: 'probabilita-soggettiva', raccordo: "Alcuni eventi accadono una volta sola, come l'esito di un'elezione. Allora la probabilità diventa un grado di fiducia." },
        { id: 'probabilita-condizionata', raccordo: "Qualunque sia l'interpretazione, la probabilità cambia quando si impara qualcosa di nuovo. È la probabilità condizionata." },
        { id: 'teorema-di-bayes', raccordo: "Il teorema di Bayes dice come aggiornare le convinzioni di fronte ai dati. È il cuore dell'imparare dall'esperienza." },
        { id: 'eventi-indipendenti', raccordo: "A volte sapere una cosa non cambia nulla sull'altra. Quegli eventi si dicono indipendenti." },
        { id: 'fallacia-del-giocatore', raccordo: "L'indipendenza va contro l'intuizione. Dopo cinque teste, molti credono che la croce sia più probabile." },
        { id: 'legge-dei-grandi-numeri', raccordo: "Il singolo lancio è imprevedibile. Ma su molti lanci emerge una regolarità precisa." },
        { id: 'distribuzione-normale', raccordo: "Molte grandezze casuali si distribuiscono secondo la stessa forma a campana. È la distribuzione normale." },
        { id: 'teorema-del-limite-centrale', raccordo: "Perché la campana compare così spesso? Il teorema del limite centrale spiega che nasce sommando molti piccoli effetti casuali." },
        { id: 'paradosso-di-bertrand', raccordo: "Prima di calcolare bisogna dire con precisione cosa vuol dire «a caso». Il paradosso di Bertrand mostra che non è scontato." },
        { id: 'test-di-ipotesi', raccordo: "Con la probabilità si possono giudicare dati reali. Il test di ipotesi chiede se un risultato può essere dovuto al caso." },
        { id: 'effetto-farfalla', raccordo: "Finora il caso era un dato di partenza. Ma anche sistemi senza caso possono diventare imprevedibili." },
        { id: 'caos-deterministico', raccordo: "L'effetto farfalla rende il futuro imprevedibile anche con leggi precise. È il caos deterministico." },
        { id: 'pseudocasualita', raccordo: "Se regole precise possono sembrare casuali, un computer può imitare il caso. Nascono così i numeri pseudocasuali." },
        { id: 'complessita-di-kolmogorov', raccordo: "Quando una sequenza è davvero casuale? Kolmogorov propose una risposta: quando non si può descrivere in modo più breve." },
        { id: 'meccanica-quantistica', raccordo: "L'ultima domanda riguarda la natura stessa. In meccanica quantistica il caso sembra irriducibile, non dovuto alla nostra ignoranza." }
      ] },
    { id: 'calcolo', titolo: 'Cosa si può calcolare?',
      descrizione: "I computer sembrano capaci di tutto. Ma esistono problemi che nessuna macchina potrà mai risolvere, e altri che richiederebbero tempi impossibili. Questo percorso va dall'idea di algoritmo ai grandi problemi aperti dell'informatica.",
      passi: [
        { id: 'algoritmo' },
        { id: 'algoritmo-di-euclide', raccordo: "Un algoritmo è una procedura precisa. Uno dei più antichi, ancora in uso, è quello di Euclide." },
        { id: 'efficienza-algoritmi', raccordo: "Non basta che un algoritmo funzioni: deve anche essere veloce. Si misura come cresce il tempo quando crescono i dati." },
        { id: 'ricorsione', raccordo: "Molti algoritmi veloci riducono un problema a versioni più piccole dello stesso problema." },
        { id: 'macchina-di-turing', raccordo: "Per capire cosa si può calcolare serve una definizione precisa di calcolo. Turing propose una macchina ideale semplicissima." },
        { id: 'tesi-di-church-turing', raccordo: "Altri modelli di calcolo sono stati proposti, e calcolano tutti le stesse cose. Da qui nasce una tesi coraggiosa." },
        { id: 'macchina-universale', raccordo: "Una sola macchina di Turing può imitare tutte le altre. È l'idea teorica del computer programmabile." },
        { id: 'problema-della-fermata', raccordo: "Una macchina universale esegue ogni programma. Ma non può prevedere se ogni programma prima o poi si fermerà." },
        { id: 'decimo-problema-di-hilbert', raccordo: "Il limite di Turing si ritrova anche nei numeri. Non esiste un metodo generale per decidere se un'equazione ha soluzioni intere." },
        { id: 'complessita-computazionale', raccordo: "Tra i problemi risolvibili, alcuni richiedono tempi impossibili. La complessità misura quanto costa davvero risolverli." },
        { id: 'classe-p', raccordo: "I problemi che si risolvono in un tempo ragionevole formano una prima grande famiglia." },
        { id: 'classe-np', raccordo: "Per altri problemi è facile controllare una soluzione, ma forse non trovarla." },
        { id: 'np-completezza', raccordo: "Dentro questa famiglia ci sono problemi che contengono tutti gli altri. Se uno si risolvesse in fretta, si risolverebbero tutti." },
        { id: 'p-contro-np', raccordo: "Arriviamo alla grande domanda: trovare è difficile quanto controllare? Nessuno lo sa ancora." },
        { id: 'funzioni-unidirezionali', raccordo: "La difficoltà, a volte, è utile. La crittografia si basa su operazioni facili in un verso e difficili nell'altro." },
        { id: 'calcolo-quantistico', raccordo: "L'ultimo passo cambia la fisica del calcolo. Un computer quantistico renderebbe facili alcuni problemi che oggi sono difficili." }
      ] },
    { id: 'cambiamento', titolo: 'Cos\'è il cambiamento?',
      descrizione: "Tutto cambia: i pianeti si muovono, le popolazioni crescono, il caffè si raffredda. La matematica ha trovato un linguaggio per descrivere il cambiamento istante per istante. Questo percorso va dai paradossi di Zenone fino al caos.",
      passi: [
        { id: 'paradossi-di-zenone' },
        { id: 'funzione', raccordo: "Per parlare di cambiamento serve un modo di legare una grandezza a un'altra, come la posizione al tempo." },
        { id: 'grafico-di-funzione', raccordo: "Una funzione si può disegnare. Il grafico mostra a colpo d'occhio come una grandezza cambia." },
        { id: 'limite-di-funzione', raccordo: "Per capire cosa succede in un istante bisogna guardare cosa succede vicino. È l'idea di limite." },
        { id: 'derivata', raccordo: "Con il limite si definisce la velocità in un istante. È la derivata, la misura del cambiamento." },
        { id: 'integrale-di-riemann', raccordo: "Il problema opposto è sommare tanti piccoli cambiamenti. Lo fa l'integrale." },
        { id: 'teorema-fondamentale-del-calcolo', raccordo: "Derivata e integrale sembrano idee diverse. Un teorema mostra che sono una l'inversa dell'altra." },
        { id: 'equazione-differenziale', raccordo: "Spesso si conosce la regola del cambiamento, ma non la grandezza stessa. Trovarla vuol dire risolvere un'equazione differenziale." },
        { id: 'crescita-esponenziale', raccordo: "L'equazione più semplice dice: cresci in proporzione a quanto sei. La risposta è la crescita esponenziale." },
        { id: 'leggi-di-newton', raccordo: "Newton scrisse le leggi del moto come equazioni differenziali. La velocità cambia a causa delle forze." },
        { id: 'oscillatore-armonico', raccordo: "Una molla tira indietro una massa che si allontana. Le leggi di Newton danno un'oscillazione regolare." },
        { id: 'equazione-del-calore', raccordo: "Il cambiamento può avvenire anche nello spazio, non solo nel tempo. Così si diffonde la temperatura." },
        { id: 'sistema-dinamico', raccordo: "Tutti questi esempi hanno qualcosa in comune: uno stato e una regola per farlo evolvere." },
        { id: 'spazio-delle-fasi', raccordo: "Invece di seguire una sola storia, si possono disegnare tutte insieme. Nasce lo spazio delle fasi." },
        { id: 'equilibri-e-stabilita', raccordo: "Nello spazio delle fasi alcuni punti restano fermi. Ci si chiede se resistono a una piccola spinta." },
        { id: 'caos-deterministico', raccordo: "Non tutti i sistemi tendono a un equilibrio o a un ritmo regolare. Alcuni diventano caotici." },
        { id: 'determinismo', raccordo: "Se le leggi sono precise, il futuro è già scritto? Il caos mostra che determinismo e prevedibilità sono cose diverse." }
      ] },
    { id: 'simmetria', titolo: 'Cos\'è la simmetria?',
      descrizione: "Un fiocco di neve, un cristallo, un'equazione, una legge della fisica: tutti possono avere simmetrie. La matematica ha scoperto che le simmetrie hanno una struttura propria, quella dei gruppi. Questo percorso va dalle figure alle forze fondamentali.",
      passi: [
        { id: 'isometrie' },
        { id: 'simmetria', raccordo: "Spostare, ruotare e riflettere sono movimenti rigidi. Una figura è simmetrica se uno di questi la lascia uguale." },
        { id: 'tassellazioni', raccordo: "Le simmetrie possono ripetersi all'infinito. Le tassellazioni ricoprono il piano con forme che si ripetono." },
        { id: 'solidi-platonici', raccordo: "Nello spazio, le forme più simmetriche sono i solidi regolari. Sono soltanto cinque." },
        { id: 'gruppo', raccordo: "Le simmetrie di una figura si possono combinare tra loro. La struttura che ne nasce si chiama gruppo." },
        { id: 'gruppi-di-simmetria', raccordo: "Ogni figura ha il suo gruppo di simmetria. Contarne gli elementi dice quanto è simmetrica." },
        { id: 'gruppo-simmetrico', raccordo: "Anche rimescolare degli oggetti è una simmetria. Tutte le permutazioni insieme formano un gruppo." },
        { id: 'equazioni-di-grado-superiore', raccordo: "Le permutazioni compaiono in un luogo inatteso. Le soluzioni di un'equazione si possono scambiare tra loro." },
        { id: 'teoria-di-galois', raccordo: "Per il terzo e il quarto grado esistono formule. Galois capì che il segreto sta nelle simmetrie delle soluzioni." },
        { id: 'insolubilita-quintica', raccordo: "Con la teoria di Galois si capisce perché, dal quinto grado in poi, una formula generale non esiste." },
        { id: 'classificazione-gruppi-semplici', raccordo: "Come i numeri si scompongono in primi, i gruppi finiti si scompongono in gruppi semplici. Oggi sono tutti classificati." },
        { id: 'programma-di-erlangen', raccordo: "Le simmetrie servono anche a definire le geometrie. Klein propose che ogni geometria sia lo studio di un gruppo." },
        { id: 'gruppi-di-lie', raccordo: "Un cerchio ha infinite simmetrie, che variano con continuità. Formano un nuovo tipo di gruppo." },
        { id: 'teorema-di-noether', raccordo: "Le simmetrie continue delle leggi fisiche hanno una conseguenza profonda. Emmy Noether dimostrò che producono leggi di conservazione." },
        { id: 'teorie-di-gauge', raccordo: "L'ultimo passo porta alle forze fondamentali. Nella fisica moderna nascono da simmetrie che variano da punto a punto." }
      ] },
    { id: 'mondo-fisico', titolo: 'Perché la matematica descrive così bene il mondo fisico?',
      descrizione: "Equazioni scritte su un foglio prevedono il moto dei pianeti e il comportamento degli atomi. Perché la matematica funziona così bene? Questo percorso segue alcuni grandi successi, e si chiude con la domanda ancora aperta.",
      passi: [
        { id: 'modello-matematico' },
        { id: 'analisi-dimensionale', raccordo: "Prima ancora delle equazioni, le unità di misura impongono vincoli. Da questi vincoli si ricavano molte informazioni." },
        { id: 'coniche', raccordo: "I Greci studiarono le coniche per pura curiosità geometrica. Duemila anni dopo, si sarebbero rivelate le orbite dei pianeti." },
        { id: 'leggi-di-newton', raccordo: "Per descrivere il moto serviva una matematica nuova. Newton inventò il calcolo e scrisse le leggi del moto." },
        { id: 'gravitazione-e-orbite', raccordo: "Dalle leggi del moto e dalla gravitazione, Newton ricavò le orbite ellittiche scoperte da Keplero." },
        { id: 'equazioni-di-maxwell', raccordo: "Due secoli dopo, Maxwell racchiuse elettricità e magnetismo in poche equazioni. Ne uscì la previsione delle onde radio." },
        { id: 'curvatura-riemanniana', raccordo: "Nel frattempo, i matematici studiavano spazi curvi senza pensare alla fisica. Riemann ne descrisse la curvatura." },
        { id: 'relativita-generale', raccordo: "Einstein trovò nella geometria di Riemann il linguaggio per la gravità. La curvatura dello spaziotempo è la gravità." },
        { id: 'numeri-complessi', raccordo: "Anche i numeri complessi erano nati per curiosità algebrica. Il loro ruolo più importante nella fisica doveva ancora arrivare." },
        { id: 'meccanica-quantistica', raccordo: "In meccanica quantistica, gli stati della materia sono vettori con componenti complesse. Senza i numeri complessi, la teoria non si scrive." },
        { id: 'teorema-di-noether', raccordo: "Perché certe grandezze si conservano sempre? Il teorema di Noether le lega alle simmetrie delle leggi." },
        { id: 'teorie-di-gauge', raccordo: "Le simmetrie spiegano anche le forze. Le teorie di gauge descrivono le forze fondamentali della fisica delle particelle." },
        { id: 'irragionevole-efficacia', raccordo: "Dopo tanti successi resta la domanda iniziale. Il fisico Eugene Wigner la chiamò l'irragionevole efficacia della matematica." }
      ] }
  ]
});
