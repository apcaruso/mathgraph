/* Informazione e crittografia */
Mappa.registra([
  // Misurare l'informazione
  {
    id: 'bit', titolo: 'Il bit', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'misurare-l-informazione', livello: 1,
    sinonimi: ['bit', 'byte', 'cifra binaria', 'unità di informazione', 'zero e uno'],
    domanda: "Qual è la più piccola quantità di informazione?",
    esempio: "Nel gioco delle venti domande si risponde solo sì o no. Ogni risposta, se la domanda è ben scelta, dà un bit di informazione.",
    idea: "Un bit è l'informazione che si ottiene dalla risposta a una domanda sì o no, con due esiti ugualmente probabili.\nSi scrive con una cifra binaria: 0 oppure 1.\nCon due bit si distinguono 4 possibilità, con tre bit 8, e così via raddoppiando.\nOtto bit formano un byte, abbastanza per una lettera dell'alfabeto.\nTesti, immagini, suoni e video, nei computer, sono lunghe sequenze di bit.",
    perche_fa_pensare: "Ogni informazione, anche una sinfonia, si può ridurre a una serie di sì e no. Il significato si perde, ma il messaggio resta.",
    dove_si_usa: "In ogni dispositivo digitale, nelle telecomunicazioni, nella misura della memoria.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'entropia-di-shannon', titolo: 'Entropia di Shannon', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'misurare-l-informazione', livello: 3,
    sinonimi: ['entropia', 'quantità di informazione', 'Shannon', 'sorpresa', 'incertezza'],
    domanda: "Si può misurare quanta informazione c'è in un messaggio?",
    esempio: "Se ti dicono che domani nel deserto non pioverà, impari poco. Se ti dicono che pioverà, impari molto: era inatteso.",
    idea: "Claude Shannon, nel 1948, propose di misurare l'informazione con la sorpresa.\nUn evento raro porta molta informazione, uno prevedibile ne porta poca.\nL'entropia è la sorpresa media di una sorgente di messaggi, misurata in bit.\nÈ massima quando tutti i simboli sono ugualmente probabili.\nIl significato del messaggio non conta: conta solo quanto era prevedibile.",
    perche_fa_pensare: "Shannon ha separato l'informazione dal significato. Così ha potuto misurarla, e ha fondato l'era digitale.",
    dove_si_usa: "Nella compressione dei dati, nelle telecomunicazioni, nell'apprendimento automatico, in biologia.",
    formula: {
      latex: 'H = -\\sum_{i} p_i \\log_2 p_i',
      come_si_legge: "acca uguale meno la somma, su tutti gli i, di p i. Ogni p i è moltiplicato per il suo logaritmo in base due.",
      a_parole: "L'entropia è la media della sorpresa di ogni simbolo, pesata con la sua probabilità."
    },
    prerequisiti: [
      { id: 'bit', perche: "L'entropia si misura in bit." },
      { id: 'logaritmo', perche: "La sorpresa si misura con un logaritmo." },
      { id: 'valore-atteso', perche: "L'entropia è una sorpresa media." }
    ],
    parenti: []
  },
  {
    id: 'complessita-di-kolmogorov', titolo: 'Complessità di Kolmogorov', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'misurare-l-informazione', livello: 4,
    sinonimi: ['Kolmogorov', 'complessità algoritmica', 'descrizione più corta', 'casualità algoritmica', 'Chaitin'],
    domanda: "Quanto è lunga la descrizione più breve di una cosa?",
    esempio: "Un milione di cifre «01» ripetute si descrive in poche parole. Un milione di cifre ottenute lanciando una moneta, invece, no.",
    idea: "La complessità di Kolmogorov di una sequenza è la lunghezza del programma più corto che la produce.\nUna sequenza regolare ha complessità bassa, perché si descrive in breve.\nUna sequenza davvero casuale ha complessità alta: non c'è modo di riassumerla.\nFu introdotta negli anni Sessanta da Kolmogorov, Solomonoff e Chaitin, in modo indipendente.\nNon esiste un algoritmo che calcoli la complessità di ogni sequenza.",
    perche_fa_pensare: "Dà una definizione precisa di «casuale»: ciò che non si può comprimere. Ma è una definizione che nessun computer può applicare sempre.",
    dove_si_usa: "In informatica teorica, nella filosofia della scienza, nello studio della casualità.",
    prerequisiti: [
      { id: 'macchina-universale', perche: "La lunghezza si misura in programmi per una macchina universale." },
      { id: 'entropia-di-shannon', perche: "È una versione dell'entropia per una singola sequenza." }
    ],
    parenti: [
      { id: 'problema-della-fermata', perche: "La complessità non si può calcolare, per lo stesso motivo del problema della fermata." }
    ]
  },

  // Compressione e correzione degli errori
  {
    id: 'compressione-dati', titolo: 'Compressione dei dati', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 2,
    sinonimi: ['compressione', 'file ZIP', 'compressione con perdita', 'compressione senza perdita', 'JPEG', 'MP3'],
    domanda: "Come si fa a far stare un file in meno spazio?",
    esempio: "Nel codice Morse la lettera E, la più usata in inglese, è un solo punto. Le lettere rare hanno codici più lunghi.",
    idea: "Comprimere vuol dire scrivere gli stessi dati con meno bit.\nSi sfruttano le regolarità: ripetizioni, simboli frequenti, parti prevedibili.\nLa compressione senza perdita, come i file ZIP, permette di ricostruire tutto esattamente.\nQuella con perdita, come JPEG e MP3, butta via dettagli che occhi e orecchie notano poco.\nUn messaggio del tutto casuale non si può comprimere.",
    perche_fa_pensare: "Comprimere è capire: per riassumere qualcosa bisogna trovarne la struttura. Ciò che non si comprime non ha struttura.",
    dove_si_usa: "Nelle foto, nella musica, nei video in streaming, negli archivi di file.",
    prerequisiti: [
      { id: 'bit', perche: "Si riduce il numero di bit." },
      { id: 'probabilita-frequentista', perche: "Si sfruttano le frequenze dei simboli." }
    ],
    parenti: []
  },
  {
    id: 'codice-di-huffman', titolo: 'Codice di Huffman', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 3,
    sinonimi: ['Huffman', 'codifica di Huffman', 'codice a lunghezza variabile', 'albero di Huffman'],
    domanda: "Qual è il modo migliore di dare codici corti alle lettere frequenti?",
    esempio: "In un testo italiano la lettera A compare molto più spesso della Q. Darle un codice più corto fa risparmiare spazio.",
    idea: "Il codice di Huffman assegna a ogni simbolo una sequenza di bit, più corta per i simboli più frequenti.\nSi costruisce un [[alberi|albero]] unendo ogni volta i due simboli meno frequenti.\nNessun codice è l'inizio di un altro, quindi il messaggio si decodifica senza ambiguità.\nTra i codici di questo tipo, è il più efficiente possibile.\nDavid Huffman lo inventò nel 1952, da studente, per evitare un esame finale.",
    perche_fa_pensare: "Uno studente ha trovato, per un compito, il metodo ottimo che il suo professore cercava da anni.",
    dove_si_usa: "Nei formati ZIP, JPEG e MP3, come passo finale della compressione.",
    prerequisiti: [
      { id: 'compressione-dati', perche: "È un metodo di compressione." },
      { id: 'alberi', perche: "Il codice si costruisce con un albero." }
    ],
    parenti: []
  },
  {
    id: 'teorema-codifica-sorgente', titolo: 'Teorema della codifica di sorgente', tipo: 'teorema', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 3,
    sinonimi: ['codifica di sorgente', 'primo teorema di Shannon', 'limite della compressione'],
    domanda: "Fino a che punto si può comprimere un messaggio?",
    esempio: "Nessun programma, per quanto furbo, può comprimere senza perdite tutti i file. Alcuni, anzi, diventerebbero più lunghi.",
    idea: "Il teorema della codifica di sorgente fissa un limite alla compressione senza perdita.\nIn media, non si può usare meno bit per simbolo dell'[[entropia-di-shannon|entropia]] della sorgente.\nE ci si può avvicinare a quel limite quanto si vuole.\nL'entropia, quindi, è la vera quantità di informazione contenuta nei messaggi.\nShannon lo dimostrò nel 1948.",
    perche_fa_pensare: "Un limite preciso, dimostrato, che nessuna tecnologia futura potrà superare. La matematica dice cosa è impossibile anche agli ingegneri.",
    dove_si_usa: "Nella progettazione di formati di compressione e di sistemi di trasmissione.",
    prerequisiti: [
      { id: 'entropia-di-shannon', perche: "Il limite è l'entropia." },
      { id: 'compressione-dati', perche: "Riguarda la compressione." }
    ],
    parenti: []
  },
  {
    id: 'codici-correttori', titolo: 'Codici che correggono gli errori', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 2,
    sinonimi: ['codici correttori', 'correzione degli errori', 'ridondanza', 'bit di parità', 'codici a rilevazione d\'errore'],
    domanda: "Come si ricostruisce un messaggio rovinato?",
    esempio: "Un QR code si legge anche se è in parte strappato o sporco. Contiene informazione in più che permette di ricostruire i pezzi mancanti.",
    idea: "Un codice correttore aggiunge al messaggio un po' di informazione in più, in modo calcolato.\nSe durante la trasmissione alcuni bit si rovinano, la parte aggiunta permette di accorgersene.\nI codici migliori permettono anche di correggere gli errori, senza chiedere di rispedire.\nIl più semplice è ripetere tutto tre volte e scegliere la maggioranza, ma spreca molto spazio.\nI codici moderni sono molto più efficienti.",
    perche_fa_pensare: "La ridondanza, che di solito sembra uno spreco, qui diventa protezione. Anche le lingue umane sono ridondanti per lo stesso motivo.",
    dove_si_usa: "Nei QR code, nei CD, nei telefoni cellulari, nelle sonde spaziali, nelle memorie dei computer.",
    prerequisiti: [
      { id: 'bit', perche: "Si aggiungono bit di controllo." }
    ],
    parenti: []
  },
  {
    id: 'codici-di-hamming', titolo: 'Codici di Hamming', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 3,
    sinonimi: ['Hamming', 'codice di Hamming', 'distanza di Hamming', 'bit di controllo'],
    domanda: "Come si trova esattamente quale bit è sbagliato?",
    esempio: "Con 4 bit di messaggio e 3 bit di controllo si corregge qualsiasi errore su un singolo bit. Ripetere tre volte il messaggio richiederebbe 12 bit.",
    idea: "I codici di Hamming aggiungono pochi bit di controllo, ciascuno su un gruppo diverso di bit del messaggio.\nSe un bit è sbagliato, i controlli che falliscono indicano esattamente quale.\nCosì l'errore si corregge senza ripetere il messaggio.\nIl calcolo usa [[matrice|matrici]] e l'aritmetica dei resti modulo 2.\nRichard Hamming li inventò nel 1950, stanco degli errori del suo calcolatore durante i fine settimana.",
    perche_fa_pensare: "Un fastidio quotidiano ha dato vita a un'intera teoria. I problemi pratici sono spesso la scintilla della matematica.",
    dove_si_usa: "Nelle memorie dei computer, nelle telecomunicazioni, nei satelliti.",
    prerequisiti: [
      { id: 'codici-correttori', perche: "È un codice correttore." },
      { id: 'matrice', perche: "Il codice si descrive con una matrice." },
      { id: 'aritmetica-modulare', perche: "I calcoli si fanno modulo 2." }
    ],
    parenti: [
      { id: 'campi-finiti', perche: "I bit con l'aritmetica modulo 2 formano un campo finito." }
    ]
  },
  {
    id: 'capacita-del-canale', titolo: 'Teorema della capacità di canale', tipo: 'teorema', area: 'informazione-crittografia', argomento: 'compressione-e-codici', livello: 4,
    sinonimi: ['capacità di canale', 'secondo teorema di Shannon', 'canale rumoroso', 'limite di Shannon'],
    domanda: "Quanta informazione si può trasmettere su una linea disturbata?",
    esempio: "Una connessione internet ha una velocità massima che dipende dal disturbo sulla linea. Shannon calcolò esattamente quel limite.",
    idea: "Ogni canale di comunicazione con disturbi ha una capacità massima, misurata in bit al secondo.\nShannon dimostrò che sotto quella velocità si può trasmettere con errori piccoli quanto si vuole.\nBasta usare codici correttori abbastanza lunghi e ben scelti.\nSopra quella velocità, invece, gli errori sono inevitabili.\nPer decenni nessuno seppe costruire codici vicini al limite; ci si riuscì solo negli anni Novanta.",
    perche_fa_pensare: "Shannon dimostrò che codici perfetti esistono, senza saperli costruire. Gli ingegneri hanno impiegato quarant'anni per raggiungerli.",
    dove_si_usa: "Nei telefoni cellulari, nel wifi, nelle comunicazioni con le sonde spaziali.",
    formula: {
      latex: 'C = B \\log_2\\!\\left(1 + \\frac{S}{N}\\right)',
      come_si_legge: "ci uguale bi per logaritmo in base due di uno più esse su enne.",
      a_parole: "La capacità cresce con la larghezza di banda e con il rapporto tra segnale e disturbo."
    },
    prerequisiti: [
      { id: 'entropia-di-shannon', perche: "La capacità si definisce con l'entropia." },
      { id: 'probabilita-condizionata', perche: "Il disturbo si descrive con probabilità condizionate." },
      { id: 'codici-correttori', perche: "Il limite si raggiunge con codici correttori." }
    ],
    parenti: []
  },

  // Crittografia classica
  {
    id: 'cifrario-di-cesare', titolo: 'Cifrari a sostituzione', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-classica', livello: 1,
    sinonimi: ['cifrario di Cesare', 'sostituzione', 'cifrario', 'codice segreto', 'spostare le lettere'],
    domanda: "Come si nasconde un messaggio?",
    esempio: "Giulio Cesare spostava ogni lettera di tre posti nell'alfabeto: la A diventava D, la B diventava E. «Ciao» diventava «Fldr».",
    idea: "Un cifrario a sostituzione sostituisce ogni lettera con un'altra, sempre la stessa.\nNel cifrario di Cesare ogni lettera si sposta di un numero fisso di posti nell'alfabeto.\nCi sono solo 25 spostamenti possibili, quindi si rompe provandoli tutti.\nUna sostituzione qualsiasi ha un numero enorme di chiavi possibili, con 27 cifre.\nEppure anche questa si rompe facilmente, con l'analisi delle frequenze.",
    perche_fa_pensare: "Avere moltissime chiavi possibili non basta per la sicurezza. Il nemico non prova tutte le chiavi: cerca le debolezze.",
    dove_si_usa: "Nei giochi enigmistici, nei rompicapo, e come primo esempio di crittografia.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'analisi-delle-frequenze', titolo: 'Rompere un cifrario con le frequenze', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-classica', livello: 2,
    sinonimi: ['analisi delle frequenze', 'crittoanalisi', 'al-Kindi', 'frequenza delle lettere'],
    domanda: "Come si legge un messaggio cifrato senza conoscere la chiave?",
    esempio: "In italiano le lettere più frequenti sono le vocali E, A, I, O. Se in un messaggio cifrato la lettera più comune è la X, probabilmente sta per una di queste.",
    idea: "In ogni lingua, le lettere compaiono con frequenze tipiche.\nUn cifrario a sostituzione cambia le lettere, ma non le loro frequenze.\nContando le lettere del messaggio cifrato, si indovina a cosa corrispondono.\nIl metodo fu descritto dallo studioso arabo al-Kindi nel nono secolo.\nPer resistere, i cifrari successivi dovettero mescolare le frequenze.",
    perche_fa_pensare: "La statistica rompe i segreti: anche un messaggio nascosto lascia tracce della lingua in cui è scritto.",
    dove_si_usa: "Nella storia della crittografia, nei giochi enigmistici, nell'analisi dei testi.",
    prerequisiti: [
      { id: 'cifrario-di-cesare', perche: "Rompe i cifrari a sostituzione." },
      { id: 'probabilita-frequentista', perche: "Usa le frequenze delle lettere." }
    ],
    parenti: []
  },
  {
    id: 'cifrario-di-vernam', titolo: 'Il cifrario perfetto', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-classica', livello: 2,
    sinonimi: ['cifrario di Vernam', 'blocco monouso', 'one-time pad', 'segretezza perfetta'],
    domanda: "Esiste un cifrario impossibile da rompere?",
    esempio: "Due spie hanno lo stesso quaderno di lettere casuali. Ogni messaggio usa una pagina nuova, che poi viene distrutta.",
    idea: "Nel cifrario di Vernam la chiave è una sequenza casuale lunga quanto il messaggio.\nOgni lettera, o ogni bit, viene combinata con il pezzo corrispondente della chiave.\nSe la chiave è davvero casuale e usata una sola volta, il messaggio cifrato non rivela nulla.\nShannon dimostrò che è un cifrario perfetto, e che ogni cifrario perfetto richiede chiavi così lunghe.\nIl problema pratico è scambiarsi in segreto chiavi tanto lunghe.",
    perche_fa_pensare: "La sicurezza perfetta esiste, ma costa moltissimo. Tutta la crittografia moderna è un compromesso tra sicurezza e praticità.",
    dove_si_usa: "Nelle comunicazioni diplomatiche e militari più delicate, come la linea diretta tra Mosca e Washington.",
    prerequisiti: [
      { id: 'cifrario-di-cesare', perche: "È un cifrario a spostamento con una chiave diversa per ogni lettera." },
      { id: 'bit', perche: "Nella versione moderna si combinano bit." }
    ],
    parenti: []
  },
  {
    id: 'crittografia-a-chiave-segreta', titolo: 'Crittografia a chiave segreta', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-classica', livello: 2,
    sinonimi: ['crittografia simmetrica', 'chiave segreta', 'AES', 'Enigma', 'cifrario a blocchi'],
    domanda: "Come si protegge un messaggio con una chiave condivisa?",
    esempio: "Quando salvi un file con una password, il computer lo cifra con una chiave segreta. Solo chi ha la stessa chiave può aprirlo.",
    idea: "Nella crittografia a chiave segreta, la stessa chiave serve per cifrare e per decifrare.\nMittente e destinatario devono conoscerla entrambi, e tenerla nascosta.\nI cifrari moderni, come AES, mescolano i bit in molti passaggi, in modo che le frequenze spariscano.\nSono velocissimi e, per quanto si sa, sicuri.\nIl problema è come scambiarsi la chiave senza che altri la vedano.",
    perche_fa_pensare: "Nella Seconda guerra mondiale, rompere la macchina Enigma cambiò il corso della guerra. Matematici polacchi e britannici, tra cui Alan Turing, ebbero un ruolo decisivo.",
    dove_si_usa: "Nei dischi cifrati, nelle reti wifi, nelle connessioni HTTPS dopo lo scambio della chiave.",
    prerequisiti: [
      { id: 'analisi-delle-frequenze', perche: "I cifrari moderni sono progettati per resistere all'analisi delle frequenze." }
    ],
    parenti: []
  },

  // Crittografia moderna
  {
    id: 'funzioni-unidirezionali', titolo: 'Funzioni facili da calcolare e difficili da invertire', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['funzioni unidirezionali', 'funzione a senso unico', 'botola', 'trapdoor', 'one-way'],
    domanda: "Esistono operazioni facili in un verso e difficili nell'altro?",
    esempio: "Mescolare due colori di vernice è facile. Separare di nuovo i due colori partendo dal miscuglio è praticamente impossibile.",
    idea: "Una funzione unidirezionale si calcola in fretta, ma è difficilissimo risalire all'ingresso partendo dal risultato.\nMoltiplicare due numeri primi grandi è facile, scomporre il prodotto sembra difficile.\nAlcune hanno una «botola»: chi conosce un segreto le inverte facilmente.\nSono il fondamento di tutta la crittografia moderna.\nNessuno ha mai dimostrato che esistano davvero: lo si crede, ma è legato al problema [[p-contro-np|P contro NP]].",
    perche_fa_pensare: "La sicurezza di internet poggia su funzioni che crediamo difficili da invertire. Ma nessuno l'ha mai dimostrato.",
    dove_si_usa: "In tutta la crittografia moderna: password, firme digitali, pagamenti online.",
    prerequisiti: [
      { id: 'funzione-inversa', perche: "Il punto è che la funzione inversa è difficile da calcolare." },
      { id: 'complessita-computazionale', perche: "«Difficile» si misura con la complessità." }
    ],
    parenti: [
      { id: 'p-contro-np', perche: "Se P fosse uguale a NP, non esisterebbero funzioni unidirezionali." }
    ]
  },
  {
    id: 'crittografia-a-chiave-pubblica', titolo: 'Crittografia a chiave pubblica', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['crittografia asimmetrica', 'chiave pubblica', 'chiave privata', 'Diffie e Hellman'],
    domanda: "Come si condivide un segreto con uno sconosciuto?",
    esempio: "Immagina un lucchetto aperto che chiunque può chiudere, ma che solo tu puoi aprire con la tua chiave. Distribuisci i lucchetti, tieni la chiave.",
    idea: "Nella crittografia a chiave pubblica ognuno ha due chiavi: una pubblica e una privata.\nLa chiave pubblica serve a cifrare e può essere data a chiunque.\nSolo la chiave privata permette di decifrare.\nCosì due persone che non si sono mai incontrate possono comunicare in segreto.\nWhitfield Diffie e Martin Hellman presentarono l'idea nel 1976.",
    perche_fa_pensare: "Per millenni si è creduto che per comunicare in segreto servisse prima un segreto condiviso. Era falso.",
    dove_si_usa: "Nei siti protetti da HTTPS, nelle app di messaggistica, nelle firme digitali.",
    prerequisiti: [
      { id: 'funzioni-unidirezionali', perche: "Si basa su funzioni con una botola segreta." },
      { id: 'crittografia-a-chiave-segreta', perche: "Risolve il problema dello scambio delle chiavi segrete." }
    ],
    parenti: []
  },
  {
    id: 'diffie-hellman', titolo: 'Scambio di chiavi Diffie-Hellman', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['Diffie-Hellman', 'scambio di chiavi', 'logaritmo discreto', 'accordo sulla chiave'],
    domanda: "Si può concordare una chiave segreta parlando in pubblico?",
    esempio: "Due persone partono da un colore comune e aggiungono ciascuna un colore segreto. Si scambiano i miscugli, aggiungono di nuovo il proprio segreto e ottengono lo stesso colore.",
    idea: "Lo scambio di Diffie-Hellman permette a due persone di creare una chiave comune comunicando in pubblico.\nOgnuno sceglie un numero segreto e invia all'altro una potenza costruita con esso, in [[aritmetica-modulare|aritmetica modulare]].\nCombinando ciò che riceve con il proprio segreto, ognuno ottiene lo stesso numero.\nChi ascolta vede solo le potenze, e risalire ai segreti è molto difficile.\nÈ il problema del logaritmo discreto.",
    perche_fa_pensare: "Due persone costruiscono un segreto comune davanti a tutti, senza mai dirselo. Sembra un trucco di magia, ma è aritmetica.",
    dove_si_usa: "Nelle connessioni HTTPS, nelle reti private virtuali, nelle app di messaggistica cifrata.",
    formula: {
      latex: '(g^a)^b \\equiv (g^b)^a \\pmod{p}',
      come_si_legge: "g alla a, tutto alla b, è congruo a g alla b, tutto alla a, modulo p.",
      a_parole: "L'ordine in cui si applicano i due segreti non cambia il risultato."
    },
    prerequisiti: [
      { id: 'crittografia-a-chiave-pubblica', perche: "È la prima idea di crittografia a chiave pubblica." },
      { id: 'aritmetica-modulare', perche: "Usa potenze in aritmetica modulare." }
    ],
    parenti: []
  },
  {
    id: 'rsa', titolo: 'Crittografia RSA', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['RSA', 'Rivest Shamir Adleman', 'chiave pubblica RSA', 'cifrario RSA'],
    domanda: "Come si costruisce un lucchetto che tutti possono chiudere ma solo uno può aprire?",
    esempio: "La chiave pubblica contiene il prodotto di due primi enormi. Per ricavare la chiave privata bisognerebbe trovare quei due primi.",
    idea: "RSA è un sistema di crittografia a chiave pubblica, inventato nel 1977 da Rivest, Shamir e Adleman.\nSi scelgono due numeri primi enormi e si pubblica il loro prodotto, insieme a un esponente.\nPer cifrare, si eleva il messaggio a quell'esponente in aritmetica modulare.\nPer decifrare serve un altro esponente, che si calcola solo conoscendo i due primi.\nFunziona grazie al [[funzione-phi-di-eulero|teorema di Eulero]].",
    perche_fa_pensare: "Un teorema di Eulero del Settecento protegge oggi miliardi di transazioni. La matematica pura ha tempi lunghi, ma arriva.",
    dove_si_usa: "Nei siti protetti, nelle firme digitali, nelle carte d'identità elettroniche.",
    formula: {
      latex: 'c \\equiv m^e \\pmod{n}, \\qquad m \\equiv c^d \\pmod{n}',
      come_si_legge: "c è congruo a m alla e modulo n. E m è congruo a c alla d modulo n.",
      a_parole: "Si cifra con una potenza pubblica e si decifra con una potenza segreta."
    },
    prerequisiti: [
      { id: 'crittografia-a-chiave-pubblica', perche: "È un sistema a chiave pubblica." },
      { id: 'funzione-phi-di-eulero', perche: "Funziona grazie al teorema di Eulero." },
      { id: 'fattorizzazione-di-grandi-numeri', perche: "La sicurezza dipende dalla difficoltà di scomporre il prodotto." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-hash', titolo: 'Funzioni hash crittografiche', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['hash', 'impronta digitale', 'SHA', 'checksum', 'funzione di hash'],
    domanda: "Come si dà a un file un'impronta digitale unica?",
    esempio: "Un sito non conserva la tua password, ma la sua impronta. Quando accedi, calcola l'impronta di ciò che scrivi e la confronta.",
    idea: "Una funzione hash trasforma un dato di qualsiasi lunghezza in un'impronta di lunghezza fissa.\nCambiando anche una sola lettera del dato, l'impronta cambia completamente.\nDall'impronta è impossibile, in pratica, risalire al dato.\nDue dati diversi con la stessa impronta esistono per forza, ma sono difficilissimi da trovare.\nLo garantisce il [[principio-dei-cassetti|principio dei cassetti]]: le impronte sono meno dei dati possibili.",
    perche_fa_pensare: "Si può verificare che due file sono identici senza confrontarli. Basta confrontare due brevi impronte.",
    dove_si_usa: "Nella conservazione delle password, nelle firme digitali, nelle criptovalute, nel controllo dei file scaricati.",
    prerequisiti: [
      { id: 'funzioni-unidirezionali', perche: "Una funzione hash è unidirezionale." },
      { id: 'principio-dei-cassetti', perche: "Spiega perché le collisioni esistono." }
    ],
    parenti: []
  },
  {
    id: 'firma-digitale', titolo: 'Firma digitale', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 3,
    sinonimi: ['firma digitale', 'firma elettronica', 'certificato digitale', 'autenticazione'],
    domanda: "Come si dimostra che un documento digitale l'hai scritto proprio tu?",
    esempio: "Quando il tuo telefono installa un aggiornamento, controlla la firma digitale del produttore. Così sa che nessuno l'ha modificato.",
    idea: "Una firma digitale usa la crittografia a chiave pubblica al contrario.\nIl firmatario calcola l'impronta del documento e la elabora con la sua chiave privata.\nChiunque può verificare la firma con la chiave pubblica.\nSe il documento viene modificato anche di poco, la verifica fallisce.\nA differenza di una firma a mano, non si può copiare su un altro documento.",
    perche_fa_pensare: "Una firma digitale è più sicura di una firma a mano, anche se è solo un numero. La fiducia diventa matematica.",
    dove_si_usa: "Nelle firme elettroniche dei documenti, negli aggiornamenti software, nei siti protetti, nelle criptovalute.",
    prerequisiti: [
      { id: 'crittografia-a-chiave-pubblica', perche: "Usa una coppia di chiavi pubblica e privata." },
      { id: 'funzioni-hash', perche: "Si firma l'impronta del documento." }
    ],
    parenti: []
  },
  {
    id: 'crittografia-curve-ellittiche', titolo: 'Crittografia con le curve ellittiche', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 4,
    sinonimi: ['curve ellittiche', 'crittografia ellittica', 'chiavi corte', 'logaritmo discreto ellittico'],
    domanda: "Si può avere la stessa sicurezza con chiavi più corte?",
    esempio: "Una chiave di 256 bit su curve ellittiche protegge quanto una chiave RSA di oltre 3000 bit. Per un telefono, è un grande risparmio.",
    idea: "Sui punti di una [[curve-ellittiche|curva ellittica]] si può definire una specie di somma.\nRipetendo la somma molte volte si ottiene un'operazione facile da fare e difficile da disfare.\nSi usa al posto delle potenze nello scambio di Diffie-Hellman e nelle firme.\nLe chiavi sono molto più corte, a parità di sicurezza.\nNeal Koblitz e Victor Miller proposero l'idea nel 1985, in modo indipendente.",
    perche_fa_pensare: "Le curve ellittiche erano studiate per pura curiosità, dai tempi di Diofanto. Oggi stanno in ogni telefono.",
    dove_si_usa: "Nei telefoni, nelle connessioni HTTPS, nelle criptovalute, nei passaporti elettronici.",
    prerequisiti: [
      { id: 'curve-ellittiche', perche: "Usa la somma tra punti di una curva ellittica." },
      { id: 'diffie-hellman', perche: "Rifà lo scambio di Diffie-Hellman sulla curva." },
      { id: 'campi-finiti', perche: "La curva si considera su un campo finito." }
    ],
    parenti: []
  },
  {
    id: 'dimostrazioni-a-conoscenza-zero', titolo: 'Dimostrazioni a conoscenza zero', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 4,
    sinonimi: ['conoscenza zero', 'zero knowledge', 'prova interattiva', 'caverna di Ali Babà'],
    domanda: "Si può dimostrare di conoscere un segreto senza rivelarlo?",
    esempio: "Una grotta ad anello ha una porta magica in fondo. Esci sempre dal lato che un amico sceglie a caso. Così lo convinci che conosci la parola magica, senza mai dirgliela.",
    idea: "Una dimostrazione a conoscenza zero convince qualcuno che un'affermazione è vera senza rivelare nient'altro.\nDi solito è un dialogo: chi verifica fa domande a caso, chi dimostra risponde.\nChi bluffa verrebbe scoperto quasi certamente dopo molte domande.\nEppure, alla fine, chi verifica non ha imparato nulla sul segreto.\nShafi Goldwasser, Silvio Micali e Charles Rackoff introdussero l'idea nel 1985.",
    perche_fa_pensare: "Mette in discussione cosa sia una dimostrazione: si può essere convinti senza aver capito il perché.",
    dove_si_usa: "Nelle criptovalute, nei sistemi di identità digitale, nel voto elettronico.",
    prerequisiti: [
      { id: 'crittografia-a-chiave-pubblica', perche: "Fa parte della crittografia moderna." },
      { id: 'classe-np', perche: "Esistono per tutti i problemi di NP." },
      { id: 'probabilita-condizionata', perche: "La fiducia cresce con la probabilità che un bluff venga scoperto." }
    ],
    parenti: [
      { id: 'dimostrazione', perche: "Allarga l'idea di dimostrazione a un dialogo probabilistico." }
    ]
  },
  {
    id: 'algoritmo-di-shor', titolo: 'Algoritmo di Shor', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 4,
    sinonimi: ['Shor', 'fattorizzazione quantistica', 'algoritmo quantistico', 'Peter Shor'],
    domanda: "Un computer quantistico può rompere la crittografia attuale?",
    esempio: "Immagina un computer quantistico abbastanza grande. Con l'algoritmo di Shor troverebbe in poche ore i due primi nascosti in una chiave RSA.",
    idea: "Nel 1994 Peter Shor trovò un algoritmo quantistico che scompone i numeri in fattori molto in fretta.\nTrasforma la fattorizzazione nella ricerca di un periodo, cioè di una ripetizione nascosta.\nIl periodo si trova con una versione quantistica della [[trasformata-di-fourier|trasformata di Fourier]].\nLo stesso metodo rompe anche Diffie-Hellman e le curve ellittiche.\nI computer quantistici attuali, però, sono ancora troppo piccoli e imprecisi per usarlo su chiavi reali.",
    perche_fa_pensare: "Un algoritmo scritto per una macchina che ancora non esiste ha già cambiato la crittografia. Ci si prepara a un futuro possibile.",
    dove_si_usa: "Nella ricerca sui computer quantistici e nella pianificazione della sicurezza informatica.",
    prerequisiti: [
      { id: 'calcolo-quantistico', perche: "Funziona su un computer quantistico." },
      { id: 'fattorizzazione-di-grandi-numeri', perche: "Risolve il problema della fattorizzazione." },
      { id: 'trasformata-di-fourier', perche: "Usa una trasformata di Fourier quantistica." }
    ],
    parenti: []
  },
  {
    id: 'crittografia-post-quantistica', titolo: 'Crittografia post-quantistica', tipo: 'concetto', area: 'informazione-crittografia', argomento: 'crittografia-moderna', livello: 4,
    sinonimi: ['post-quantistica', 'crittografia resistente ai quanti', 'reticoli', 'crittografia basata sui reticoli'],
    domanda: "Come si protegge un segreto da un computer quantistico?",
    esempio: "Qualcuno potrebbe registrare oggi messaggi cifrati, per decifrarli tra vent'anni con un computer quantistico. Per questo si cambia crittografia già ora.",
    idea: "La crittografia post-quantistica usa problemi che dovrebbero restare difficili anche per i computer quantistici.\nMolti metodi si basano sui reticoli, griglie regolari di punti in molte dimensioni.\nTrovare il punto del reticolo più vicino a un punto dato sembra difficilissimo, anche con algoritmi quantistici.\nNel 2024 sono stati pubblicati i primi standard ufficiali americani di questo tipo.\nI browser e le app di messaggistica hanno già iniziato ad adottarli.",
    perche_fa_pensare: "Si cambia la sicurezza del mondo prima che la minaccia esista davvero. È matematica al servizio della prudenza.",
    dove_si_usa: "Nei browser, nelle app di messaggistica, nei sistemi governativi e bancari.",
    prerequisiti: [
      { id: 'algoritmo-di-shor', perche: "Nasce per resistere all'algoritmo di Shor." },
      { id: 'rsa', perche: "Sostituisce sistemi come RSA." }
    ],
    parenti: []
  }
]);
