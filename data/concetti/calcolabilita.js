/* Calcolabilità e complessità */
Mappa.registra([
  // Algoritmi
  {
    id: 'algoritmo', titolo: 'Algoritmo', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 1,
    sinonimi: ['algoritmi', 'procedura', 'ricetta', 'programma', 'al-Khwarizmi'],
    domanda: "Cosa vuol dire risolvere un problema con una procedura?",
    esempio: "Una ricetta di cucina dice cosa fare, passo per passo, in un ordine preciso. Seguendola, chiunque ottiene la torta.",
    idea: "Un algoritmo è una sequenza finita di istruzioni precise per risolvere un problema.\nOgni passo deve essere chiaro, senza bisogno di intuizione o di scelte personali.\nDeve fermarsi dopo un numero finito di passi e dare un risultato.\nLa parola viene dal nome di al-Khwarizmi, matematico persiano vissuto a Baghdad nel nono secolo.\nGli algoritmi esistevano molto prima dei computer: quello di Euclide ha più di duemila anni.",
    perche_fa_pensare: "Se un problema si risolve con un algoritmo, lo può risolvere anche una macchina, senza capire nulla. Cosa resta, allora, del pensiero?",
    dove_si_usa: "In ogni programma per computer, nei navigatori, nei motori di ricerca, nelle procedure mediche.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'efficienza-algoritmi', titolo: 'Quanto è veloce un algoritmo', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 2,
    sinonimi: ['efficienza', 'costo di un algoritmo', 'notazione O grande', 'tempo di calcolo', 'crescita esponenziale'],
    domanda: "Perché alcuni programmi restano veloci anche con molti dati?",
    esempio: "Per trovare un nome in una rubrica di un milione di nomi in ordine, bastano circa 20 controlli. Aprendo a metà, poi ancora a metà, e così via.",
    idea: "L'efficienza di un algoritmo dice come cresce il suo tempo di calcolo quando i dati aumentano.\nNon conta il computer, ma il modo in cui cresce il numero di passi.\nUn algoritmo che cresce come il [[logaritmo]] dei dati resta velocissimo anche con miliardi di dati.\nUno che cresce in modo [[funzione-esponenziale|esponenziale]] diventa inutilizzabile già con poche decine di dati.\nPer questo un'idea migliore batte quasi sempre un computer più potente.",
    perche_fa_pensare: "La differenza tra possibile e impossibile, in pratica, non è tra risolvibile e irrisolvibile. È tra lento e lentissimo.",
    dove_si_usa: "Nella progettazione di programmi, motori di ricerca, database, videogiochi.",
    formula: {
      latex: '\\log_2 1\\,000\\,000 \\approx 20',
      come_si_legge: "logaritmo in base due di un milione, circa uguale a venti.",
      a_parole: "Dimezzando ogni volta, un milione di elementi si riduce a uno in circa venti passi."
    },
    prerequisiti: [
      { id: 'algoritmo', perche: "Misura il costo di un algoritmo." },
      { id: 'logaritmo', perche: "Gli algoritmi veloci crescono come un logaritmo." },
      { id: 'funzione-esponenziale', perche: "Gli algoritmi lenti crescono in modo esponenziale." }
    ],
    parenti: []
  },
  {
    id: 'ricerca-e-ordinamento', titolo: 'Cercare e ordinare', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 2,
    sinonimi: ['ordinamento', 'ricerca binaria', 'merge sort', 'quicksort', 'ordinare una lista'],
    domanda: "Qual è il modo più veloce di mettere in ordine un mazzo di carte?",
    esempio: "Dividi il mazzo a metà, ordina ciascuna metà, poi fondi le due metà confrontando la carta in cima. È l'ordinamento per fusione.",
    idea: "Cercare e ordinare sono tra i compiti più frequenti dei computer.\nIn una lista ordinata si cerca molto più in fretta, dimezzando ogni volta la parte da controllare.\nGli ordinamenti semplici confrontano ogni elemento con tutti gli altri, e diventano lenti con molti dati.\nGli ordinamenti veloci dividono il problema in parti, le ordinano e le ricompongono.\nSi dimostra che, usando solo confronti, non si può fare molto meglio di questi metodi veloci.",
    perche_fa_pensare: "Si può dimostrare che nessun metodo, nemmeno quelli non ancora inventati, può battere un certo limite. È sapere qualcosa su tutte le idee future.",
    dove_si_usa: "Nei motori di ricerca, nei database, nei fogli di calcolo, nelle classifiche.",
    prerequisiti: [
      { id: 'algoritmo', perche: "Sono algoritmi classici." }
    ],
    parenti: [
      { id: 'efficienza-algoritmi', perche: "Sono l'esempio tipico per confrontare l'efficienza degli algoritmi." }
    ]
  },
  {
    id: 'ricorsione', titolo: 'Algoritmi ricorsivi', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 2,
    sinonimi: ['ricorsione', 'ricorsivo', 'torre di Hanoi', 'divide et impera', 'chiamata ricorsiva'],
    domanda: "Si può risolvere un problema usando lo stesso problema, ma più piccolo?",
    esempio: "Nella torre di Hanoi devi spostare una pila di dischi. Sposti tutti i dischi tranne l'ultimo, poi l'ultimo, poi di nuovo gli altri sopra.",
    idea: "Un algoritmo ricorsivo risolve un problema riducendolo a versioni più piccole dello stesso problema.\nServe un caso base, abbastanza semplice da risolvere direttamente.\nSenza caso base, l'algoritmo non finirebbe mai.\nMolti problemi complicati diventano semplici se pensati in modo ricorsivo.\nLa ricorsione corrisponde all'[[induzione-matematica|induzione]] nelle dimostrazioni.",
    perche_fa_pensare: "Per risolvere un problema basta saperlo rimpicciolire. Sembra un trucco, ma è un modo di pensare potentissimo.",
    dove_si_usa: "Nella programmazione, nella grafica dei frattali, nell'analisi del linguaggio.",
    prerequisiti: [
      { id: 'algoritmo', perche: "È un modo di costruire algoritmi." },
      { id: 'definizione-ricorsiva', perche: "Traduce in procedura le definizioni ricorsive." }
    ],
    parenti: []
  },
  {
    id: 'pseudocasualita', titolo: 'Numeri pseudocasuali', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 3,
    sinonimi: ['pseudocasuale', 'generatore di numeri casuali', 'seme', 'casualità al computer'],
    domanda: "Un computer, che segue regole fisse, può produrre il caso?",
    esempio: "Quando un videogioco «tira i dadi», in realtà esegue un calcolo. Con lo stesso punto di partenza, darebbe sempre gli stessi numeri.",
    idea: "Un computer segue istruzioni precise, quindi non produce numeri davvero casuali.\nUsa invece formule che generano numeri apparentemente casuali, detti pseudocasuali.\nLa sequenza dipende da un valore iniziale, chiamato seme.\nUn buon generatore produce numeri che superano tutti i test statistici di casualità.\nPer la crittografia servono generatori speciali, imprevedibili anche per chi conosce i numeri precedenti.",
    perche_fa_pensare: "Se una sequenza sembra casuale a ogni test, che differenza c'è con il caso vero? La domanda tocca la definizione stessa di casualità.",
    dove_si_usa: "Nei videogiochi, nelle simulazioni scientifiche, in crittografia, nelle lotterie elettroniche.",
    prerequisiti: [
      { id: 'algoritmo', perche: "I numeri sono prodotti da un algoritmo." },
      { id: 'probabilita-frequentista', perche: "Devono comportarsi come frequenze casuali." }
    ],
    parenti: [
      { id: 'complessita-di-kolmogorov', perche: "Una sequenza davvero casuale non ha una descrizione più corta di sé stessa." }
    ]
  },
  {
    id: 'algoritmi-probabilistici', titolo: 'Algoritmi che usano il caso', tipo: 'concetto', area: 'calcolabilita', argomento: 'algoritmi', livello: 3,
    sinonimi: ['algoritmi probabilistici', 'algoritmi randomizzati', 'Las Vegas', 'Monte Carlo'],
    domanda: "Lanciare una moneta può aiutare a risolvere un problema?",
    esempio: "Per stimare quante persone in una città preferiscono un prodotto, non le intervisti tutte. Ne scegli mille a caso.",
    idea: "Un algoritmo probabilistico fa alcune scelte a caso durante il calcolo.\nSpesso è molto più semplice o più veloce di qualsiasi metodo senza caso conosciuto.\nIn cambio, può dare una risposta sbagliata con probabilità piccolissima, o metterci a volte più tempo.\nRipetendolo più volte, la probabilità di errore diventa trascurabile.\nI test di primalità usati in crittografia sono di questo tipo.",
    perche_fa_pensare: "Accettare una minima possibilità di errore può rendere facile un problema difficile. La certezza assoluta ha un prezzo.",
    dove_si_usa: "In crittografia, nelle simulazioni, nell'apprendimento automatico, nei database.",
    prerequisiti: [
      { id: 'probabilita-classica', perche: "Si calcola la probabilità di errore." },
      { id: 'efficienza-algoritmi', perche: "Il vantaggio è la velocità." }
    ],
    parenti: [
      { id: 'metodo-monte-carlo', perche: "Il metodo Monte Carlo usa il caso per fare calcoli." }
    ]
  },

  // Modelli di calcolo
  {
    id: 'automa-a-stati-finiti', titolo: 'Automi a stati finiti', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 3,
    sinonimi: ['automa', 'macchina a stati', 'automa finito', 'espressioni regolari'],
    domanda: "Qual è la macchina calcolatrice più semplice?",
    esempio: "Un distributore di bibite è sempre in uno stato: «in attesa», «ha ricevuto 50 centesimi», «ha ricevuto un euro». Ogni moneta lo fa passare a un altro stato.",
    idea: "Un automa a stati finiti è una macchina che si trova sempre in uno di pochi stati possibili.\nLegge dei simboli uno alla volta e, a ogni simbolo, cambia stato secondo regole fisse.\nNon ha memoria, a parte lo stato in cui si trova.\nAlla fine, lo stato dice se la sequenza letta è accettata o no.\nSi disegna come un [[grafo]]: gli stati sono punti, le regole sono frecce.",
    perche_fa_pensare: "Una macchina senza memoria sa fare più cose di quanto sembri. Ma alcune, come contare le parentesi, le restano impossibili.",
    dove_si_usa: "Nei distributori automatici, nei semafori, nella ricerca di testo, nei videogiochi.",
    prerequisiti: [
      { id: 'algoritmo', perche: "È un modello semplice di procedura." },
      { id: 'grafo', perche: "Si rappresenta con un grafo di stati." }
    ],
    parenti: []
  },
  {
    id: 'linguaggi-formali', titolo: 'Linguaggi formali e grammatiche', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 3,
    sinonimi: ['grammatica formale', 'gerarchia di Chomsky', 'linguaggio formale', 'sintassi', 'grammatiche'],
    domanda: "Come si descrivono con precisione le frasi permesse in un linguaggio?",
    esempio: "Un programma per computer deve rispettare regole rigide di scrittura. Una parentesi dimenticata, e il computer si rifiuta di eseguirlo.",
    idea: "Un linguaggio formale è un insieme di sequenze di simboli, costruite secondo regole precise.\nLe regole si chiamano grammatica.\nNoam Chomsky, negli anni Cinquanta, classificò le grammatiche in una gerarchia di potenza crescente.\nA ogni livello della gerarchia corrisponde un tipo di macchina capace di riconoscerlo.\nGli automi a stati finiti riconoscono il livello più semplice.",
    perche_fa_pensare: "Una teoria nata per capire il linguaggio umano è diventata la base dei linguaggi di programmazione.",
    dove_si_usa: "Nei compilatori dei linguaggi di programmazione, nell'elaborazione del linguaggio naturale, nella biologia del DNA.",
    prerequisiti: [
      { id: 'automa-a-stati-finiti', perche: "Gli automi riconoscono i linguaggi più semplici." },
      { id: 'insieme', perche: "Un linguaggio è un insieme di sequenze." }
    ],
    parenti: []
  },
  {
    id: 'macchina-di-turing', titolo: 'Macchina di Turing', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 3,
    sinonimi: ['Turing', 'macchina di Turing', 'Alan Turing', 'nastro infinito', 'modello di calcolo'],
    domanda: "Cos'è, in fondo, un computer?",
    esempio: "Immagina un impiegato con un quaderno infinito e una lista di regole. Legge una casella, scrive, si sposta di una casella e cambia stato d'animo.",
    idea: "La macchina di Turing è un modello teorico di calcolatore, proposto da Alan Turing nel 1936.\nHa un nastro infinito diviso in caselle e una testina che legge e scrive un simbolo alla volta.\nUna tabella di regole dice cosa fare in base allo stato e al simbolo letto.\nNonostante la semplicità, sa calcolare tutto ciò che sa calcolare un computer moderno.\nTuring la inventò per capire cosa vuol dire «calcolare», prima che esistessero i computer.",
    perche_fa_pensare: "Il modello teorico è arrivato prima della macchina reale. Tutti i computer di oggi sono, in fondo, macchine di Turing.",
    dove_si_usa: "In informatica teorica, per definire cosa si può calcolare e con quale sforzo.",
    prerequisiti: [
      { id: 'automa-a-stati-finiti', perche: "È un automa con in più un nastro di memoria infinito." }
    ],
    parenti: []
  },
  {
    id: 'macchina-universale', titolo: 'Macchina di Turing universale', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 3,
    sinonimi: ['macchina universale', 'computer programmabile', 'programma memorizzato', 'software'],
    domanda: "Può una sola macchina fare il lavoro di tutte le altre?",
    esempio: "Il tuo telefono è una calcolatrice, una macchina fotografica e un telefono. Cambia ruolo cambiando programma, non circuiti.",
    idea: "Una macchina di Turing universale può imitare qualsiasi altra macchina di Turing.\nBasta scriverle sul nastro la descrizione della macchina da imitare e i suoi dati.\nLa descrizione della macchina diventa un dato come un altro: è l'idea di programma.\nTuring la descrisse nello stesso articolo del 1936.\nÈ l'antenata teorica di ogni computer programmabile.",
    perche_fa_pensare: "Programmi e dati sono fatti della stessa sostanza. Questa idea semplice ha reso possibile tutto il software.",
    dove_si_usa: "In ogni computer, negli emulatori, nelle macchine virtuali.",
    prerequisiti: [
      { id: 'macchina-di-turing', perche: "Imita le macchine di Turing." }
    ],
    parenti: []
  },
  {
    id: 'tesi-di-church-turing', titolo: 'Tesi di Church-Turing', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 3,
    sinonimi: ['Church-Turing', 'tesi di Church', 'calcolabilità', 'funzioni calcolabili'],
    domanda: "Esiste una definizione precisa di «calcolabile»?",
    esempio: "Turing usò nastri e testine, Church usò funzioni astratte. Si scoprì che i due modelli calcolano esattamente le stesse cose.",
    idea: "La tesi di Church-Turing riguarda i procedimenti meccanici di calcolo.\nDice che tutto ciò che si calcola così si calcola anche con una macchina di Turing.\nNon è un teorema: collega un'idea intuitiva a una definizione precisa.\nLa sostiene un fatto sorprendente: tutti i modelli di calcolo proposti si sono rivelati equivalenti.\nAlonzo Church e Alan Turing la formularono, in modo indipendente, nel 1936.",
    perche_fa_pensare: "Una tesi che non si può dimostrare, ma che nessuno ha mai smentito. Somiglia più a una legge della natura che a un teorema.",
    dove_si_usa: "In informatica teorica e in filosofia della mente.",
    prerequisiti: [
      { id: 'macchina-di-turing', perche: "Usa la macchina di Turing come definizione di calcolo." }
    ],
    parenti: [
      { id: 'lambda-calcolo', perche: "Il lambda calcolo di Church è equivalente alle macchine di Turing." }
    ]
  },
  {
    id: 'lambda-calcolo', titolo: 'Lambda calcolo', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 4,
    sinonimi: ['lambda', 'Church', 'programmazione funzionale', 'funzioni anonime'],
    domanda: "Si può calcolare tutto usando solo funzioni?",
    esempio: "Nel lambda calcolo anche i numeri sono funzioni. Il numero 3 è «applica una funzione tre volte».",
    idea: "Il lambda calcolo è un modello di calcolo basato solo sulla definizione e sull'applicazione di funzioni.\nNon ci sono numeri, né memoria, né istruzioni: solo funzioni che prendono funzioni.\nEppure può calcolare tutto ciò che calcola una macchina di Turing.\nAlonzo Church lo inventò negli anni Trenta del Novecento.\nÈ alla base dei linguaggi di programmazione funzionale.",
    perche_fa_pensare: "Tutto il calcolo nasce da un unico gesto: applicare una funzione. È una forma estrema di economia.",
    dove_si_usa: "Nei linguaggi di programmazione funzionale, nella verifica dei programmi, nella logica.",
    prerequisiti: [
      { id: 'funzione', perche: "Tutto è costruito con le funzioni." },
      { id: 'ricorsione', perche: "La ripetizione si ottiene con la ricorsione." }
    ],
    parenti: []
  },
  {
    id: 'calcolo-quantistico', titolo: 'Calcolo quantistico', tipo: 'concetto', area: 'calcolabilita', argomento: 'modelli-di-calcolo', livello: 4,
    sinonimi: ['computer quantistico', 'qubit', 'informatica quantistica', 'sovrapposizione'],
    domanda: "Le leggi della fisica quantistica possono rendere il calcolo più potente?",
    esempio: "Un computer quantistico abbastanza grande potrebbe scomporre in fretta numeri enormi. Metterebbe in crisi buona parte della crittografia attuale.",
    idea: "Un computer quantistico usa i qubit, che seguono le leggi della [[meccanica-quantistica|meccanica quantistica]].\nUn qubit può trovarsi in una combinazione di 0 e 1, detta sovrapposizione.\nSi dice spesso che prova tutte le soluzioni insieme: in realtà è più sottile.\nIl calcolo sfrutta l'interferenza, che rinforza le risposte giuste e cancella le sbagliate.\nNon calcola nulla di nuovo rispetto a Turing, ma alcuni problemi diventano molto più veloci.",
    perche_fa_pensare: "Cosa si può calcolare in fretta dipende dalle leggi della fisica. L'informatica e la fisica si scoprono legate.",
    dove_si_usa: "Nella ricerca sulla crittografia, nella simulazione di molecole, nella ricerca sui materiali.",
    prerequisiti: [
      { id: 'complessita-computazionale', perche: "Il vantaggio si misura in complessità." },
      { id: 'meccanica-quantistica', perche: "Usa le leggi della meccanica quantistica." }
    ],
    parenti: []
  },

  // Limiti del calcolo
  {
    id: 'problema-della-fermata', titolo: 'Il problema della fermata', tipo: 'teorema', area: 'calcolabilita', argomento: 'limiti-del-calcolo', livello: 3,
    sinonimi: ['problema dell\'arresto', 'halting problem', 'indecidibilità', 'problemi indecidibili'],
    domanda: "Esistono problemi che nessun computer potrà mai risolvere?",
    esempio: "Sarebbe utile un programma che controlla se un altro programma si blocca in un ciclo infinito. Turing dimostrò che non può esistere.",
    idea: "Il problema della fermata chiede se un programma, con certi dati, prima o poi si ferma.\nTuring dimostrò nel 1936 che nessun algoritmo può rispondere correttamente per tutti i programmi.\nLa dimostrazione è per assurdo e usa una mossa diagonale, come quella di Cantor.\nSi costruisce un programma che fa il contrario di quello che il presunto controllore prevede su di lui.\nÈ il primo esempio di problema indecidibile.",
    perche_fa_pensare: "Esistono domande precise, con una risposta sì o no, che nessuna macchina saprà mai risolvere. Non per mancanza di potenza, ma per principio.",
    dove_si_usa: "Nella verifica dei programmi, in sicurezza informatica, in logica.",
    prerequisiti: [
      { id: 'macchina-universale', perche: "La dimostrazione usa una macchina che simula le altre." },
      { id: 'argomento-diagonale-cantor', perche: "Usa una mossa diagonale come quella di Cantor." }
    ],
    parenti: [
      { id: 'teoremi-di-incompletezza', perche: "Gödel e Turing mostrano, in due linguaggi diversi, lo stesso tipo di limite." }
    ]
  },
  {
    id: 'decimo-problema-di-hilbert', titolo: 'Il decimo problema di Hilbert', tipo: 'teorema', area: 'calcolabilita', argomento: 'limiti-del-calcolo', livello: 4,
    sinonimi: ['decimo problema', 'teorema di Matiyasevich', 'equazioni diofantee indecidibili', 'MRDP'],
    domanda: "Esiste un metodo per decidere se un'equazione ha soluzioni intere?",
    esempio: "Hilbert chiese un procedimento che, data un'equazione polinomiale, dicesse se ha soluzioni intere. La risposta, settant'anni dopo, fu: no.",
    idea: "Nel 1900 David Hilbert presentò un elenco di problemi aperti per il nuovo secolo.\nIl decimo chiedeva un metodo generale per le [[equazioni-diofantee|equazioni diofantee]].\nNel 1970 Jurij Matijasevič completò la dimostrazione che quel metodo non esiste.\nCostruì il risultato sul lavoro di Martin Davis, Hilary Putnam e Julia Robinson.\nL'idea chiave è che le equazioni diofantee possono imitare qualsiasi programma.",
    perche_fa_pensare: "Una domanda sui numeri interi, antica come Diofanto, si rivela legata ai limiti dei computer.",
    dove_si_usa: "In logica e teoria dei numeri, come confine tra ciò che si può e non si può decidere.",
    prerequisiti: [
      { id: 'problema-della-fermata', perche: "Si riduce al problema della fermata." },
      { id: 'equazioni-diofantee', perche: "Riguarda le equazioni diofantee." }
    ],
    parenti: []
  },

  // Complessità
  {
    id: 'complessita-computazionale', titolo: 'Complessità: tempo e memoria', tipo: 'concetto', area: 'calcolabilita', argomento: 'complessita', livello: 3,
    sinonimi: ['complessità computazionale', 'classi di complessità', 'tempo polinomiale', 'risorse di calcolo'],
    domanda: "Quali problemi si risolvono in un tempo ragionevole?",
    esempio: "Un problema risolvibile in teoria, ma che richiede più tempo dell'età dell'universo, in pratica è irrisolvibile.",
    idea: "La complessità computazionale studia quante risorse servono per risolvere un problema.\nLe risorse principali sono il tempo e la memoria.\nNon si studia un singolo algoritmo, ma il migliore possibile per quel problema.\nI problemi si raggruppano in classi di complessità.\nUna distinzione centrale è tra crescita polinomiale, considerata trattabile, ed esponenziale, considerata intrattabile.",
    perche_fa_pensare: "Sapere che un problema è risolvibile non basta. Bisogna sapere se è risolvibile prima della fine dell'universo.",
    dove_si_usa: "In crittografia, nell'ottimizzazione, nella progettazione di algoritmi.",
    prerequisiti: [
      { id: 'efficienza-algoritmi', perche: "Generalizza l'efficienza dei singoli algoritmi." },
      { id: 'macchina-di-turing', perche: "Il tempo si misura in passi di una macchina di Turing." }
    ],
    parenti: []
  },
  {
    id: 'classe-p', titolo: 'La classe P', tipo: 'concetto', area: 'calcolabilita', argomento: 'complessita', livello: 3,
    sinonimi: ['P', 'tempo polinomiale', 'problemi trattabili', 'classe P'],
    domanda: "Quali problemi si risolvono in fretta?",
    esempio: "Trovare il percorso più breve tra due città su una mappa stradale è un problema in P. Il navigatore lo risolve in un istante.",
    idea: "La classe P contiene i problemi che un algoritmo risolve in tempo polinomiale.\nCioè il tempo cresce come una potenza della quantità di dati, non in modo esponenziale.\nSono considerati i problemi «trattabili».\nOrdinare, cercare il percorso minimo, moltiplicare numeri sono problemi in P.\nIn realtà è più sottile: un polinomio di grado molto alto può essere lentissimo, ma in pratica succede di rado.",
    perche_fa_pensare: "Definire «veloce» con una formula precisa permette di dimostrare teoremi sulla velocità. Ma ogni definizione lascia fuori qualcosa.",
    dove_si_usa: "Nella classificazione dei problemi informatici e nella scelta degli algoritmi.",
    prerequisiti: [
      { id: 'complessita-computazionale', perche: "È una classe di complessità." }
    ],
    parenti: []
  },
  {
    id: 'classe-np', titolo: 'La classe NP', tipo: 'concetto', area: 'calcolabilita', argomento: 'complessita', livello: 3,
    sinonimi: ['NP', 'verifica veloce', 'problemi NP', 'certificato'],
    domanda: "Quali problemi hanno soluzioni facili da controllare?",
    esempio: "Risolvere un sudoku gigante può essere difficile. Ma se qualcuno ti dà la soluzione, controllarla è veloce.",
    idea: "La classe NP contiene i problemi le cui soluzioni si possono verificare in fretta.\nTrovare la soluzione può essere difficile, ma controllarla è facile.\nSudoku, orari scolastici e problemi di incastro sono in NP.\nOgni problema in P è anche in NP: se sai risolvere in fretta, sai anche controllare in fretta.\nLa sigla significa «polinomiale non deterministico», non «non polinomiale».",
    perche_fa_pensare: "Riconoscere una buona idea è più facile che averla. Questa intuizione quotidiana diventa una domanda matematica precisa.",
    dove_si_usa: "In crittografia, nella pianificazione, nella logistica, nella verifica dei circuiti.",
    prerequisiti: [
      { id: 'classe-p', perche: "Contiene la classe P." }
    ],
    parenti: []
  },
  {
    id: 'np-completezza', titolo: 'Problemi NP-completi', tipo: 'concetto', area: 'calcolabilita', argomento: 'complessita', livello: 3,
    sinonimi: ['NP-completo', 'teorema di Cook', 'SAT', 'riduzione', 'problemi più difficili di NP'],
    domanda: "Esistono problemi che contengono, in sé, tutti gli altri?",
    esempio: "Se trovassi un metodo veloce per il sudoku di qualsiasi grandezza, avresti un metodo veloce per migliaia di altri problemi.",
    idea: "Un problema NP-completo è un problema di NP difficile almeno quanto tutti gli altri problemi di NP.\nOgni problema di NP si può tradurre in esso.\nNel 1971 Stephen Cook dimostrò che il problema SAT è NP-completo: chiede se una formula logica può essere resa vera.\nSubito dopo si scoprì che migliaia di problemi pratici sono NP-completi.\nSe uno solo si risolvesse in fretta, si risolverebbero in fretta tutti.",
    perche_fa_pensare: "Migliaia di problemi diversi, dalla logistica alla biologia, sono in fondo lo stesso problema travestito.",
    dove_si_usa: "Nella logistica, nella pianificazione degli orari, nella progettazione di circuiti, in biologia.",
    prerequisiti: [
      { id: 'classe-np', perche: "Sono i problemi più difficili di NP." },
      { id: 'tavola-di-verita', perche: "Il primo esempio, SAT, riguarda formule logiche." }
    ],
    parenti: []
  },
  {
    id: 'p-contro-np', titolo: 'P contro NP', tipo: 'problema-aperto', area: 'calcolabilita', argomento: 'complessita', livello: 3,
    sinonimi: ['P uguale NP', 'P contro NP', 'problemi del millennio', 'P diverso da NP'],
    domanda: "Se una soluzione è facile da controllare, è anche facile da trovare?",
    esempio: "Se P fosse uguale a NP, trovare la dimostrazione di un teorema sarebbe facile quanto controllarla. La creatività diventerebbe meccanica.",
    idea: "Il problema chiede se le classi P e NP sono uguali.\nCioè se ogni problema con soluzioni facili da controllare ha anche soluzioni facili da trovare.\nQuasi tutti gli esperti pensano di no, ma nessuno l'ha dimostrato.\nÈ uno dei sette problemi del millennio, con un premio di un milione di dollari.\nSe P fosse uguale a NP, gran parte della crittografia attuale crollerebbe.",
    perche_fa_pensare: "Riguarda la differenza tra creare e riconoscere. Una domanda filosofica diventa un problema matematico preciso.",
    dove_si_usa: "In crittografia, che si basa sull'ipotesi che P sia diverso da NP, e in tutta l'informatica.",
    prerequisiti: [
      { id: 'np-completezza', perche: "Basta capire un solo problema NP-completo per rispondere." }
    ],
    parenti: []
  }
]);
