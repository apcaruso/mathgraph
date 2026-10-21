/* Logica e fondamenti */
Mappa.registra([
  // Logica delle proposizioni
  {
    id: 'proposizione', titolo: 'Proposizione', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 1,
    sinonimi: ['enunciato', 'affermazione', 'vero o falso', 'proposizioni'],
    domanda: "Quali frasi possono essere vere o false?",
    esempio: "«Roma è in Italia» è vera. «7 è pari» è falsa. «Chiudi la porta» non è né vera né falsa: è un ordine.",
    idea: "Una proposizione è una frase che è vera oppure falsa, senza vie di mezzo.\nLe domande, gli ordini e le esclamazioni non sono proposizioni.\nNemmeno «x è maggiore di 3» lo è, finché non sai quanto vale x.\nLa logica studia come le proposizioni si combinano e come se ne ricavano altre.\nNon le interessa di cosa parlano, ma solo la loro forma.",
    perche_fa_pensare: "Esistono frasi che non riescono a essere né vere né false, come «questa frase è falsa». Il confine è meno netto di quanto sembri.",
    dove_si_usa: "Nei circuiti dei computer, nei motori di ricerca, nei contratti scritti con precisione.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'connettivi-logici', titolo: 'Connettivi logici: e, o, non', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 1,
    sinonimi: ['congiunzione', 'disgiunzione', 'negazione', 'operatori logici', 'and or not'],
    domanda: "Come si costruiscono frasi complesse a partire da frasi semplici?",
    esempio: "«Piove e fa freddo» è vera solo se sono vere tutte e due le parti. Per «piove o fa freddo» basta che lo sia una.",
    idea: "I connettivi logici uniscono proposizioni per formarne di nuove.\nI principali sono «e», «o» e «non».\n«A e B» è vera solo se sono vere entrambe.\n«A o B» è vera se almeno una delle due è vera.\nIn logica la «o» non esclude che lo siano tutte e due.\n«Non A» è vera quando A è falsa.",
    perche_fa_pensare: "La «o» della lingua di tutti i giorni è ambigua: a volte esclude, a volte no. La logica deve scegliere, e sceglie con precisione.",
    dove_si_usa: "Nei circuiti elettronici, nelle ricerche online, nei filtri dei fogli di calcolo.",
    prerequisiti: [
      { id: 'proposizione', perche: "I connettivi uniscono proposizioni." }
    ],
    parenti: [
      { id: 'operazioni-insiemi', perche: "«E» corrisponde all'intersezione, «o» all'unione, «non» al complemento." }
    ]
  },
  {
    id: 'implicazione', titolo: 'Implicazione: se… allora', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 1,
    sinonimi: ['se allora', 'condizionale', 'implica', 'conseguenza'],
    domanda: "Cosa vuol dire, esattamente, «se… allora»?",
    esempio: "«Se piove, la strada è bagnata.» Non dice nulla su cosa succede quando non piove: la strada può essere bagnata per altri motivi.",
    idea: "Un'implicazione collega due proposizioni: «se A, allora B».\nÈ falsa solo in un caso: quando A è vera e B è falsa.\nSe A è falsa, l'implicazione è considerata vera, qualunque cosa dica B.\nAttenzione a non invertirla: «se A allora B» non vuol dire «se B allora A».\nÈ il mattone di ogni ragionamento matematico.",
    perche_fa_pensare: "Dire che «se la Luna è di formaggio, allora 2 più 2 fa 5» è vero suona strano. Eppure è la scelta che fa funzionare la logica.",
    dove_si_usa: "Nelle regole dei programmi, nei regolamenti, nelle diagnosi mediche.",
    prerequisiti: [
      { id: 'connettivi-logici', perche: "L'implicazione è un connettivo, e si può riscrivere con «o» e «non»." }
    ],
    parenti: []
  },
  {
    id: 'tavola-di-verita', titolo: 'Tavole di verità', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 2,
    sinonimi: ['tavole di verità', 'tabella di verità', 'valori di verità', 'tautologia'],
    domanda: "Come si controlla una frase complicata in tutti i casi possibili?",
    esempio: "Per «A o non B» ci sono quattro casi: A e B vere, solo A vera, solo B vera, nessuna. Una tabella li elenca tutti.",
    idea: "Una tavola di verità elenca tutti i casi possibili per le proposizioni di partenza.\nPer ogni caso indica se la frase composta è vera o falsa.\nCon due proposizioni i casi sono quattro, con tre sono otto.\nUna frase vera in tutti i casi si chiama tautologia.\nCon le tavole puoi verificare se due frasi dicono la stessa cosa.",
    perche_fa_pensare: "Il ragionamento diventa un calcolo meccanico, che anche una macchina può fare. Allora che cosa resta, del pensare?",
    dove_si_usa: "Nel progetto dei circuiti digitali e nel controllo delle condizioni nei programmi.",
    prerequisiti: [
      { id: 'implicazione', perche: "Le tavole mostrano in quali casi un'implicazione è vera, e lo stesso per «e», «o», «non»." }
    ],
    parenti: []
  },
  {
    id: 'condizione-necessaria-sufficiente', titolo: 'Condizione necessaria e condizione sufficiente', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 2,
    sinonimi: ['condizione necessaria', 'condizione sufficiente', 'se e solo se', 'necessario e sufficiente'],
    domanda: "Che differenza c'è tra «serve» e «basta»?",
    esempio: "Avere il biglietto serve per salire sul treno, ma non basta: il treno deve anche esserci. Vincere la lotteria basta per essere ricchi, ma non serve.",
    idea: "Se A implica B, si dice che A è condizione sufficiente per B.\nE che B è condizione necessaria per A.\nSufficiente vuol dire che basta; necessario vuol dire che non se ne può fare a meno.\nQuando valgono entrambe le direzioni si dice «se e solo se».\nConfondere le due cose è uno degli errori di ragionamento più comuni.",
    perche_fa_pensare: "Molte discussioni pubbliche si inceppano su questo punto. Una causa può servire senza bastare.",
    dove_si_usa: "Nei teoremi, nelle leggi, nei requisiti di un bando, nelle diagnosi.",
    prerequisiti: [
      { id: 'implicazione', perche: "Necessario e sufficiente sono due modi di leggere un'implicazione." }
    ],
    parenti: []
  },
  {
    id: 'paradosso-del-mentitore', titolo: 'Paradosso del mentitore', tipo: 'concetto', area: 'logica', argomento: 'logica-proposizionale', livello: 2,
    sinonimi: ['mentitore', 'questa frase è falsa', 'Epimenide', 'autoriferimento', 'paradosso'],
    domanda: "Una frase può dire di sé stessa che è falsa?",
    esempio: "«Questa frase è falsa.» Se è vera, allora è falsa. Se è falsa, allora è vera.",
    idea: "Il paradosso del mentitore nasce da una frase che parla di sé stessa.\nNon si riesce ad assegnarle un valore di verità senza contraddirsi.\nIl problema è l'autoriferimento: una frase che giudica la propria verità.\nLa logica moderna lo evita separando il linguaggio da quello che parla del linguaggio.\nLa stessa idea, usata con cura, porta ai [[teoremi-di-incompletezza|teoremi di incompletezza]].",
    perche_fa_pensare: "Un gioco di parole antico ha messo in crisi l'idea stessa di verità. A volte i paradossi indicano dove sono i limiti di un sistema.",
    dove_si_usa: "In logica, in filosofia del linguaggio e nello studio dei limiti dei computer.",
    prerequisiti: [
      { id: 'proposizione', perche: "Mette alla prova l'idea che ogni proposizione sia vera o falsa." }
    ],
    parenti: [
      { id: 'paradosso-di-russell', perche: "Anche Russell costruisce un oggetto che parla di sé stesso, e ottiene una contraddizione." },
      { id: 'teoremi-di-incompletezza', perche: "Gödel trasforma il mentitore in una frase vera ma non dimostrabile." }
    ]
  },

  // Metodi di dimostrazione
  {
    id: 'dimostrazione', titolo: 'Dimostrazione', tipo: 'concetto', area: 'logica', argomento: 'metodi-di-dimostrazione', livello: 1,
    sinonimi: ['dimostrare', 'prova', 'ragionamento deduttivo', 'deduzione'],
    domanda: "Come si convince qualcuno senza lasciare dubbi?",
    esempio: "Che la somma di due numeri pari sia pari non lo provi con mille esempi. Lo dimostri: un pari è un doppio, e la somma di due doppi è ancora un doppio.",
    idea: "Una dimostrazione è una catena di passaggi che porta da premesse accettate a una conclusione.\nOgni passaggio segue dai precedenti con regole logiche precise.\nGli esempi, anche moltissimi, non bastano a dimostrare un'affermazione generale.\nUna volta dimostrato, un teorema resta vero per sempre, a partire da quelle premesse.\nÈ ciò che distingue la matematica dalle altre scienze.",
    perche_fa_pensare: "Una dimostrazione dà una certezza che l'esperienza non può dare. Ma è certezza su che cosa: sul mondo, o sulle regole che abbiamo scelto?",
    dove_si_usa: "In tutta la matematica, nella verifica dei programmi e nei protocolli di sicurezza.",
    prerequisiti: [
      { id: 'implicazione', perche: "Ogni passo di una dimostrazione è un'implicazione." }
    ],
    parenti: []
  },
  {
    id: 'controesempio', titolo: 'Controesempio', tipo: 'concetto', area: 'logica', argomento: 'metodi-di-dimostrazione', livello: 1,
    sinonimi: ['contro esempio', 'smentire', 'confutare'],
    domanda: "Quanti esempi servono per smentire una regola?",
    esempio: "«Tutti i numeri dispari sono primi.» Basta il 9, che è dispari ma non è primo, per smentirla.",
    idea: "Un controesempio è un caso particolare che smentisce un'affermazione generale.\nPer dimostrare che una regola vale sempre serve una dimostrazione.\nPer dimostrare che non vale sempre basta un solo controesempio.\nCercare controesempi è un buon modo per mettere alla prova un'idea.\nSe non se ne trovano, forse l'idea è vera, e conviene provare a dimostrarla.",
    perche_fa_pensare: "Mille conferme non bastano, una smentita sì. È un'asimmetria che riguarda anche la scienza.",
    dove_si_usa: "In matematica, nei test dei programmi, nel controllo delle teorie scientifiche.",
    prerequisiti: [
      { id: 'proposizione', perche: "Un controesempio rende falsa una proposizione generale." }
    ],
    parenti: [
      { id: 'dimostrazione', perche: "Dimostrare e confutare sono le due facce del lavoro matematico." }
    ]
  },
  {
    id: 'dimostrazione-per-assurdo', titolo: 'Dimostrazione per assurdo', tipo: 'concetto', area: 'logica', argomento: 'metodi-di-dimostrazione', livello: 2,
    sinonimi: ['per assurdo', 'reductio ad absurdum', 'riduzione all\'assurdo', 'contraddizione'],
    domanda: "Si può dimostrare una cosa supponendo il contrario?",
    esempio: "Vuoi dimostrare che non esiste un numero naturale più grande di tutti. Supponi che esista: aggiungendo 1 ne trovi uno più grande. Contraddizione.",
    idea: "Nella dimostrazione per assurdo supponi che la tesi sia falsa.\nPoi ragioni correttamente fino ad arrivare a una contraddizione.\nSe da un'ipotesi segue una cosa impossibile, l'ipotesi era sbagliata.\nQuindi la tesi è vera.\nÈ lo strumento di alcuni dei teoremi più famosi.",
    perche_fa_pensare: "Si dimostra che qualcosa esiste senza mostrarlo. Non tutti i matematici accettano questo modo di ragionare.",
    dove_si_usa: "Nei teoremi sui numeri primi, sull'infinito e sui limiti del calcolo.",
    prerequisiti: [
      { id: 'dimostrazione', perche: "È un tipo particolare di dimostrazione." },
      { id: 'connettivi-logici', perche: "Si basa sulla negazione: una cosa e il suo contrario non possono essere vere insieme." }
    ],
    parenti: []
  },
  {
    id: 'induzione-matematica', titolo: 'Principio di induzione', tipo: 'concetto', area: 'logica', argomento: 'metodi-di-dimostrazione', livello: 2,
    sinonimi: ['induzione', 'principio di induzione', 'effetto domino', 'passo induttivo'],
    domanda: "Come si dimostra una cosa per infiniti numeri con un numero finito di passi?",
    esempio: "Immagina una fila infinita di tessere del domino. Cade tutta se cade la prima e se ogni tessera, cadendo, fa cadere la successiva.",
    idea: "Il principio di induzione serve a dimostrare che una proprietà vale per tutti i numeri naturali.\nSi controllano due cose.\nPrimo: la proprietà vale per il numero di partenza.\nSecondo: se vale per un numero, vale anche per il successivo.\nAllora vale per tutti, come in una fila di domino.",
    perche_fa_pensare: "Con due passaggi finiti si raggiunge un'infinità di casi. L'infinito diventa maneggevole.",
    dove_si_usa: "In matematica e in informatica, per dimostrare che un programma ripetitivo fa ciò che deve.",
    prerequisiti: [
      { id: 'dimostrazione', perche: "È un metodo di dimostrazione." },
      { id: 'numeri-naturali', perche: "Si applica ai numeri naturali, uno dopo l'altro." }
    ],
    parenti: [
      { id: 'definizione-ricorsiva', perche: "Definire un passo alla volta e dimostrare un passo alla volta sono la stessa idea." },
      { id: 'ricorsione', perche: "Un algoritmo ricorsivo si dimostra corretto per induzione." }
    ]
  },
  {
    id: 'dimostrazione-assistita', titolo: 'Dimostrazioni verificate dal computer', tipo: 'concetto', area: 'logica', argomento: 'metodi-di-dimostrazione', livello: 3,
    sinonimi: ['dimostrazione al computer', 'verifica formale', 'assistenti di prova', 'proof assistant', 'Lean', 'Coq'],
    domanda: "Ci si può fidare di una dimostrazione controllata da un computer?",
    esempio: "Nel 1976 il teorema dei quattro colori fu dimostrato con l'aiuto di un computer, che controllò moltissimi casi. All'inizio molti matematici erano a disagio.",
    idea: "Un assistente di prova è un programma che controlla ogni passaggio di una dimostrazione.\nLa dimostrazione va scritta in un linguaggio formale, senza lasciare nulla di sottinteso.\nIl programma accetta solo passaggi conformi alle regole logiche.\nCosì si verificano dimostrazioni lunghissime, impossibili da controllare a mano.\nResta da fidarsi del programma che controlla, che però è piccolo e verificabile.",
    perche_fa_pensare: "Una dimostrazione serve a convincere o a capire? Una prova controllata dal computer può convincere senza far capire.",
    dove_si_usa: "Nella verifica di processori, di software critico e di teoremi difficili.",
    prerequisiti: [
      { id: 'dimostrazione', perche: "Rende completamente esplicita una dimostrazione." },
      { id: 'algoritmo', perche: "Il controllo è eseguito da un programma." },
      { id: 'logica-del-primo-ordine', perche: "Le dimostrazioni sono scritte in un linguaggio logico formale." }
    ],
    parenti: [
      { id: 'teorema-dei-quattro-colori', perche: "Fu il primo grande teorema dimostrato con l'aiuto di un computer." },
      { id: 'teoria-omotopica-dei-tipi', perche: "È uno dei fondamenti su cui si costruiscono alcuni assistenti di prova." }
    ]
  },

  // Insiemi
  {
    id: 'insieme', titolo: 'Insieme', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 1,
    sinonimi: ['insiemi', 'elemento', 'appartenenza', 'insieme vuoto', 'collezione'],
    domanda: "Cosa vuol dire raccogliere delle cose in un tutto?",
    esempio: "I giorni della settimana formano un insieme di sette elementi. L'insieme dei mesi con 32 giorni è vuoto.",
    idea: "Un insieme è una raccolta di oggetti, chiamati elementi.\nUn insieme è determinato dai suoi elementi: l'ordine e le ripetizioni non contano.\nPer ogni oggetto, deve essere chiaro se appartiene o no all'insieme.\nL'insieme senza elementi si chiama insieme vuoto.\nQuasi tutta la matematica moderna si può costruire a partire dagli insiemi.",
    perche_fa_pensare: "Un concetto così elementare è diventato il fondamento di tutto. Ma, come si scoprì, nasconde anche dei paradossi.",
    dove_si_usa: "Nei database, nelle ricerche con filtri, nella probabilità e in ogni definizione matematica.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'operazioni-insiemi', titolo: 'Unione, intersezione e complemento', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 1,
    sinonimi: ['unione', 'intersezione', 'complemento', 'differenza tra insiemi', 'diagrammi di Venn'],
    domanda: "Come si combinano due gruppi di cose?",
    esempio: "Pensa a chi parla inglese e a chi parla francese. L'intersezione è chi parla entrambe le lingue, l'unione chi ne parla almeno una.",
    idea: "L'unione di due insiemi contiene gli elementi che stanno in almeno uno dei due.\nL'intersezione contiene gli elementi che stanno in entrambi.\nIl complemento contiene ciò che non sta nell'insieme, dentro un universo fissato.\nSi rappresentano bene con i diagrammi di Venn, fatti di cerchi che si sovrappongono.\nQueste operazioni seguono regole simili a quelle dei numeri.",
    perche_fa_pensare: "Unire, intersecare, escludere: sono gesti del pensiero quotidiano. La matematica li rende precisi.",
    dove_si_usa: "Nei filtri di ricerca, nelle interrogazioni dei database, nei calcoli di probabilità.",
    prerequisiti: [
      { id: 'insieme', perche: "Le operazioni producono nuovi insiemi a partire da insiemi dati." }
    ],
    parenti: []
  },
  {
    id: 'sottoinsieme', titolo: 'Sottoinsieme', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 1,
    sinonimi: ['sottoinsiemi', 'inclusione', 'contenuto in', 'parte di un insieme'],
    domanda: "Quando un insieme sta dentro un altro?",
    esempio: "I numeri pari sono un sottoinsieme dei numeri naturali: ogni numero pari è anche un numero naturale.",
    idea: "Un insieme A è sottoinsieme di B se ogni elemento di A è anche elemento di B.\nSi dice che A è incluso in B.\nOgni insieme è sottoinsieme di sé stesso.\nL'insieme vuoto è sottoinsieme di ogni insieme.\nDue insiemi sono uguali quando ciascuno è sottoinsieme dell'altro.",
    perche_fa_pensare: "Che il vuoto stia dentro ogni insieme sembra strano. Segue però dalla logica: non c'è nessun elemento che possa smentirlo.",
    dove_si_usa: "Nelle classificazioni, nelle categorie dei negozi online, nelle definizioni matematiche.",
    prerequisiti: [
      { id: 'insieme', perche: "Si confrontano gli elementi di due insiemi." }
    ],
    parenti: []
  },
  {
    id: 'insieme-delle-parti', titolo: 'Insieme delle parti', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 2,
    sinonimi: ['insieme potenza', 'tutti i sottoinsiemi', 'parti di un insieme'],
    domanda: "Quanti gruppi diversi si possono formare con gli elementi di un insieme?",
    esempio: "Con tre amici puoi formare 8 gruppi diversi, contando il gruppo vuoto e quello con tutti e tre.",
    idea: "L'insieme delle parti di un insieme è l'insieme di tutti i suoi sottoinsiemi.\nComprende l'insieme vuoto e l'insieme stesso.\nSe l'insieme ha n elementi, i sottoinsiemi sono 2 alla n.\nOgni elemento, infatti, può esserci o non esserci: due scelte per ciascuno.\nL'insieme delle parti è sempre più grande dell'insieme di partenza, anche nel caso infinito.",
    perche_fa_pensare: "Da questa semplice costruzione nasce una scala infinita di infiniti sempre più grandi.",
    dove_si_usa: "In combinatoria, in probabilità e in informatica, quando si considerano tutte le combinazioni di opzioni.",
    formula: {
      latex: '|\\mathcal{P}(A)| = 2^{|A|}',
      come_si_legge: "il numero di elementi dell'insieme delle parti di A è uguale a 2 elevato al numero di elementi di A.",
      a_parole: "Un insieme con n elementi ha 2 alla n sottoinsiemi."
    },
    prerequisiti: [
      { id: 'sottoinsieme', perche: "È formato da tutti i sottoinsiemi." },
      { id: 'potenze', perche: "Il numero dei sottoinsiemi è una potenza di due." }
    ],
    parenti: []
  },
  {
    id: 'prodotto-cartesiano', titolo: 'Prodotto cartesiano e coppie ordinate', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 2,
    sinonimi: ['coppie ordinate', 'coppia ordinata', 'prodotto di insiemi'],
    domanda: "Come si descrivono tutte le combinazioni di due scelte?",
    esempio: "Primo: pasta o riso. Secondo: carne, pesce o verdure. Il menù completo ha 6 combinazioni, una per ogni coppia.",
    idea: "Una coppia ordinata è formata da due elementi presi in un certo ordine.\nL'ordine conta: la coppia (1, 2) è diversa da (2, 1).\nIl prodotto cartesiano di A e B contiene tutte queste coppie.\nIn ogni coppia, il primo elemento viene da A e il secondo da B.\nSe A ha 2 elementi e B ne ha 3, il prodotto ne ha 6.\nIl nome viene da Cartesio, che indicò i punti del piano con coppie di numeri.",
    perche_fa_pensare: "Un punto del piano diventa una coppia di numeri. Da questo legame nasce la geometria analitica.",
    dove_si_usa: "Nelle tabelle, nei fogli di calcolo, nelle coordinate geografiche.",
    prerequisiti: [
      { id: 'insieme', perche: "Si combinano gli elementi di due insiemi." }
    ],
    parenti: [
      { id: 'piano-cartesiano', perche: "Il piano cartesiano è il prodotto cartesiano della retta dei numeri con sé stessa." }
    ]
  },
  {
    id: 'paradosso-di-russell', titolo: 'Paradosso di Russell', tipo: 'concetto', area: 'logica', argomento: 'insiemi', livello: 3,
    sinonimi: ['Russell', 'antinomia di Russell', 'paradosso del barbiere', 'insieme di tutti gli insiemi'],
    domanda: "Esiste l'insieme di tutti gli insiemi che non contengono sé stessi?",
    esempio: "In un villaggio il barbiere rade tutti e soli quelli che non si radono da soli. Chi rade il barbiere? Qualunque risposta porta a una contraddizione.",
    idea: "Considera l'insieme di tutti gli insiemi che non contengono sé stessi.\nSe contiene sé stesso, allora per definizione non dovrebbe contenersi.\nSe non contiene sé stesso, allora dovrebbe contenersi.\nQuindi un insieme del genere non può esistere.\nBertrand Russell lo scoprì nel 1901: non si può formare un insieme con qualsiasi proprietà.",
    perche_fa_pensare: "Il paradosso fece crollare il primo tentativo di fondare la matematica sulla logica. Le idee più semplici possono essere le più pericolose.",
    dove_si_usa: "Nei fondamenti della matematica e nella progettazione dei linguaggi di programmazione.",
    prerequisiti: [
      { id: 'insieme', perche: "Riguarda gli insiemi che contengono altri insiemi." },
      { id: 'dimostrazione-per-assurdo', perche: "Mostra che un certo insieme non può esistere, perché porterebbe a una contraddizione." }
    ],
    parenti: [
      { id: 'teorema-di-cantor', perche: "Usa la stessa mossa diagonale: un oggetto costruito per essere diverso da tutti." },
      { id: 'logicismo', perche: "Fu proprio questo paradosso a mettere in crisi il progetto logicista." }
    ]
  },

  // Relazioni e funzioni
  {
    id: 'relazione', titolo: 'Relazione', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 2,
    sinonimi: ['relazioni', 'relazione binaria', 'legame tra elementi'],
    domanda: "Come si descrive un legame tra le cose?",
    esempio: "«Essere genitore di» lega alcune persone ad altre. «Essere divisore di» lega 3 a 12, ma non 5 a 12.",
    idea: "Una relazione tra due insiemi dice quali coppie di elementi sono collegate.\nIn termini precisi, è un sottoinsieme del [[prodotto-cartesiano|prodotto cartesiano]].\nUna relazione può legare un elemento a molti altri, o a nessuno.\nAlcune relazioni hanno proprietà speciali, come la simmetria o la transitività.\nLe funzioni sono relazioni particolari.",
    perche_fa_pensare: "Molte cose si capiscono meglio guardando i loro legami invece delle cose stesse.",
    dove_si_usa: "Nei database relazionali, nelle reti sociali, negli alberi genealogici.",
    prerequisiti: [
      { id: 'prodotto-cartesiano', perche: "Una relazione è un insieme di coppie ordinate." }
    ],
    parenti: [
      { id: 'funzione', perche: "Una funzione è una relazione in cui ogni elemento di partenza ha un solo corrispondente." }
    ]
  },
  {
    id: 'relazione-di-equivalenza', titolo: 'Relazione di equivalenza', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 3,
    sinonimi: ['equivalenza', 'classi di equivalenza', 'insieme quoziente', 'riflessiva simmetrica transitiva'],
    domanda: "Quando due cose diverse si possono considerare «la stessa»?",
    esempio: "Due date distanti esattamente una settimana cadono nello stesso giorno della settimana. Per il calendario settimanale sono equivalenti.",
    idea: "Una relazione di equivalenza dice in modo preciso che due cose sono uguali sotto un certo aspetto.\nDeve avere tre proprietà: riflessiva, simmetrica e transitiva.\nRiflessiva: ogni cosa è equivalente a sé stessa.\nSimmetrica: se A equivale a B, B equivale ad A. Transitiva: se A equivale a B e B a C, A equivale a C.\nUna relazione di equivalenza divide l'insieme in gruppi separati, chiamati classi.",
    perche_fa_pensare: "Astrarre vuol dire decidere cosa ignorare. Le classi di equivalenza fanno proprio questo, in modo esatto.",
    dove_si_usa: "Nella costruzione dei numeri, nell'aritmetica dell'orologio, nelle classificazioni.",
    prerequisiti: [
      { id: 'relazione', perche: "È una relazione con tre proprietà speciali." }
    ],
    parenti: []
  },
  {
    id: 'relazione-d-ordine', titolo: 'Relazione d\'ordine', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 3,
    sinonimi: ['ordine', 'ordinamento', 'ordine parziale', 'ordine totale', 'minore o uguale'],
    domanda: "Cosa vuol dire mettere delle cose in ordine?",
    esempio: "I numeri si ordinano per grandezza. Le persone di un albero genealogico si ordinano per discendenza, ma due cugini non vengono uno prima dell'altro.",
    idea: "Una relazione d'ordine dice quando un elemento viene «prima» di un altro.\nDeve essere riflessiva, transitiva e antisimmetrica: se A precede B e B precede A, sono uguali.\nSe due elementi qualsiasi sono sempre confrontabili, l'ordine si dice totale.\nAltrimenti si dice parziale, come per l'inclusione tra insiemi.\nGli ordini servono a parlare di massimi, minimi e classifiche.",
    perche_fa_pensare: "Non tutto si può mettere in fila. Riconoscere un ordine parziale evita di forzare classifiche che non esistono.",
    dove_si_usa: "Negli algoritmi di ordinamento, nella pianificazione delle attività, nelle preferenze.",
    prerequisiti: [
      { id: 'relazione', perche: "È una relazione con proprietà particolari." }
    ],
    parenti: []
  },
  {
    id: 'funzione', titolo: 'Funzione', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 2,
    sinonimi: ['funzioni', 'applicazione', 'corrispondenza', 'mappa', 'dominio', 'codominio'],
    domanda: "Come si descrive una regola che a ogni cosa associa un risultato?",
    esempio: "A ogni persona corrisponde la sua data di nascita. A ogni prodotto corrisponde il suo prezzo.",
    idea: "Una funzione associa a ogni elemento di un insieme di partenza un solo elemento di un insieme di arrivo.\nL'insieme di partenza si chiama dominio, quello di arrivo codominio.\nUna funzione può essere data da una formula, da una tabella o da una regola a parole.\nElementi diversi possono avere lo stesso risultato.\nUn elemento, però, non può averne due.",
    perche_fa_pensare: "L'idea di funzione ha reso possibile pensare il cambiamento e la dipendenza. È forse il concetto più usato della matematica.",
    dove_si_usa: "In ogni formula della fisica, nei fogli di calcolo, nei programmi.",
    prerequisiti: [
      { id: 'insieme', perche: "Una funzione collega gli elementi di due insiemi." }
    ],
    parenti: []
  },
  {
    id: 'funzione-iniettiva-suriettiva', titolo: 'Funzioni iniettive, suriettive e biiettive', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 2,
    sinonimi: ['iniettiva', 'suriettiva', 'biiettiva', 'biunivoca', 'corrispondenza biunivoca', 'biiezione'],
    domanda: "Quando una funzione abbina gli elementi uno a uno?",
    esempio: "In un teatro pieno, a ogni spettatore corrisponde un posto e a ogni posto uno spettatore. Senza contare, sai che sono tanti quanti.",
    idea: "Una funzione è iniettiva se elementi diversi hanno sempre risultati diversi.\nÈ suriettiva se ogni elemento di arrivo è raggiunto da qualche elemento di partenza.\nSe è entrambe le cose si chiama biiettiva, o corrispondenza biunivoca.\nUna biiezione abbina perfettamente gli elementi dei due insiemi.\nPer questo dice che i due insiemi hanno lo stesso numero di elementi.",
    perche_fa_pensare: "Si può sapere che due gruppi sono grandi uguali senza contarli. Basta abbinarli.",
    dove_si_usa: "Nei codici di identificazione, nella crittografia, nel confronto tra infiniti.",
    prerequisiti: [
      { id: 'funzione', perche: "Sono proprietà che una funzione può avere o non avere." }
    ],
    parenti: []
  },
  {
    id: 'funzione-inversa', titolo: 'Funzione inversa e composizione', tipo: 'concetto', area: 'logica', argomento: 'relazioni-e-funzioni', livello: 2,
    sinonimi: ['inversa', 'composizione di funzioni', 'funzione composta', 'invertibile'],
    domanda: "Si può sempre tornare indietro?",
    esempio: "Se cambi euro in dollari e poi dollari in euro, allo stesso cambio, ritrovi la cifra di partenza.",
    idea: "La composizione applica due funzioni una dopo l'altra.\nLa funzione inversa disfa ciò che fa una funzione: riporta ogni risultato al suo punto di partenza.\nComporre una funzione con la sua inversa non cambia nulla.\nSolo le funzioni biiettive hanno un'inversa.\nAd esempio il [[logaritmo]] è l'inversa dell'esponenziale.",
    perche_fa_pensare: "Molte operazioni sono facili in un verso e difficili nell'altro. Su questa asimmetria si fonda la crittografia moderna.",
    dove_si_usa: "Nelle conversioni di unità, nella decifratura dei messaggi, nella risoluzione delle equazioni.",
    prerequisiti: [
      { id: 'funzione-iniettiva-suriettiva', perche: "Una funzione ha l'inversa solo se è biiettiva." }
    ],
    parenti: []
  },

  // Infinito e cardinalità
  {
    id: 'infinito-potenziale-attuale', titolo: 'Infinito potenziale e infinito attuale', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 2,
    sinonimi: ['infinito', 'infinito potenziale', 'infinito attuale', 'Aristotele', 'senza fine'],
    domanda: "L'infinito è un processo che non finisce o una cosa compiuta?",
    esempio: "Puoi sempre aggiungere 1 a un numero: è un infinito che si allunga. Oppure puoi pensare a tutti i numeri insieme, già dati: è un infinito completo.",
    idea: "Già Aristotele distingueva due modi di pensare l'infinito.\nL'infinito potenziale è un processo che si può sempre continuare, senza fine.\nL'infinito attuale è una totalità infinita, pensata come già completa.\nPer secoli i matematici hanno accettato soprattutto il primo.\nCon Cantor, alla fine dell'Ottocento, l'infinito attuale è entrato a pieno titolo nella matematica.",
    perche_fa_pensare: "Possiamo davvero pensare a infiniti oggetti tutti insieme? La risposta divide ancora i filosofi.",
    dove_si_usa: "Nella teoria degli insiemi, nell'analisi e nei dibattiti sui fondamenti.",
    prerequisiti: [
      { id: 'numeri-naturali', perche: "La successione dei naturali è il primo esempio di infinito." }
    ],
    parenti: [
      { id: 'paradossi-di-zenone', perche: "Zenone mise alla prova l'idea di infinito con il movimento." }
    ]
  },
  {
    id: 'cardinalita', titolo: 'Cardinalità: confrontare la grandezza degli insiemi', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 2,
    sinonimi: ['cardinalità', 'numero di elementi', 'grandezza di un insieme', 'equipotenza'],
    domanda: "Come si confronta la grandezza di due insiemi, anche infiniti?",
    esempio: "In una sala da ballo ogni uomo balla con una donna, e nessuno resta solo. Allora gli uomini sono tanti quanti le donne.",
    idea: "La cardinalità di un insieme misura quanti elementi ha.\nPer gli insiemi finiti è un numero naturale.\nDue insiemi hanno la stessa cardinalità se esiste una [[funzione-iniettiva-suriettiva|corrispondenza biunivoca]] tra loro.\nQuesta definizione funziona anche per gli insiemi infiniti.\nE porta a scoperte sorprendenti.",
    perche_fa_pensare: "Con questa definizione, i numeri pari sono tanti quanti tutti i naturali. Una parte può essere grande quanto il tutto.",
    dove_si_usa: "In combinatoria, in informatica teorica, nella teoria degli insiemi.",
    prerequisiti: [
      { id: 'funzione-iniettiva-suriettiva', perche: "Si confrontano gli insiemi abbinandone gli elementi uno a uno." }
    ],
    parenti: []
  },
  {
    id: 'albergo-di-hilbert', titolo: 'L\'albergo di Hilbert', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 2,
    sinonimi: ['Hilbert', 'hotel di Hilbert', 'albergo infinito', 'paradosso dell\'albergo'],
    domanda: "Un albergo pieno può accogliere un nuovo ospite?",
    esempio: "Un albergo ha infinite stanze, tutte occupate. Arriva un ospite: ognuno si sposta nella stanza successiva, e la stanza 1 si libera.",
    idea: "L'albergo di Hilbert è un esperimento mentale sugli insiemi infiniti.\nAnche se è pieno, può ospitare un nuovo cliente: basta spostare tutti di una stanza.\nPuò ospitare persino infiniti nuovi clienti, spostando ognuno nella stanza di numero doppio.\nCon gli insiemi infiniti, le regole del finito non valgono più.\nUn insieme infinito può avere la stessa grandezza di una sua parte.",
    perche_fa_pensare: "L'intuizione costruita sul finito ci inganna davanti all'infinito. Serve una logica nuova, e un po' di coraggio.",
    dove_si_usa: "Come introduzione all'infinito, nella divulgazione e nella didattica.",
    prerequisiti: [
      { id: 'infinito-potenziale-attuale', perche: "Tratta un infinito già completo: tutte le stanze occupate insieme." },
      { id: 'cardinalita', perche: "Ogni spostamento è una corrispondenza biunivoca tra stanze." }
    ],
    parenti: []
  },
  {
    id: 'insiemi-numerabili', titolo: 'Insiemi numerabili', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 3,
    sinonimi: ['numerabile', 'infinito numerabile', 'aleph zero', 'contabile'],
    domanda: "Quali infiniti si possono mettere in fila?",
    esempio: "Le frazioni sembrano molte più dei naturali. Eppure si possono elencare tutte, una dopo l'altra, con un percorso a zig-zag.",
    idea: "Un insieme è numerabile se i suoi elementi si possono elencare in una lista: primo, secondo, terzo, e così via.\nCioè se ha la stessa cardinalità dei numeri naturali.\nGli interi sono numerabili, e anche le frazioni.\nPersino le soluzioni di tutte le equazioni con coefficienti interi formano un insieme numerabile.\nÈ l'infinito più piccolo.",
    perche_fa_pensare: "Elencare le frazioni sembra impossibile, finché qualcuno trova il percorso giusto. Il punto di vista giusto cambia tutto.",
    dove_si_usa: "In informatica teorica: tutti i programmi possibili formano un insieme numerabile.",
    prerequisiti: [
      { id: 'albergo-di-hilbert', perche: "L'albergo mostra cosa vuol dire abbinare un infinito ai numeri naturali." },
      { id: 'numeri-razionali', perche: "Il risultato sorprendente è che anche le frazioni sono numerabili." }
    ],
    parenti: []
  },
  {
    id: 'argomento-diagonale-cantor', titolo: 'Argomento diagonale di Cantor', tipo: 'teorema', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 3,
    sinonimi: ['diagonale di Cantor', 'Cantor', 'reali non numerabili', 'non numerabile', 'metodo diagonale'],
    domanda: "Esistono infiniti più grandi di altri?",
    esempio: "Prova a elencare tutti i numeri tra 0 e 1. Costruisci un numero nuovo che, al posto n, ha una cifra diversa dall'n-esimo numero della lista. Quel numero non è nella lista.",
    idea: "Cantor dimostrò che i numeri reali non sono numerabili.\nSupponi di avere una lista di tutti i reali tra 0 e 1.\nCambiando una cifra di ciascun numero lungo la diagonale, costruisci un numero diverso da tutti.\nQuindi la lista non era completa, e nessuna lista può esserlo.\nServe qualche cautela con scritture come 0,4999…, ma l'idea regge.\nGli infiniti, dunque, non sono tutti uguali.",
    perche_fa_pensare: "Alcuni contemporanei di Cantor rifiutarono il suo lavoro. Oggi la mossa diagonale è una delle idee più feconde della matematica.",
    dove_si_usa: "Nella teoria degli insiemi e nei limiti del calcolo, come il problema della fermata.",
    prerequisiti: [
      { id: 'insiemi-numerabili', perche: "Dimostra che i reali non sono numerabili." },
      { id: 'numeri-reali', perche: "Riguarda la scrittura decimale dei numeri reali." },
      { id: 'dimostrazione-per-assurdo', perche: "Suppone che la lista esista e arriva a una contraddizione." }
    ],
    parenti: [
      { id: 'teoremi-di-incompletezza', perche: "Gödel usa una mossa diagonale simile per costruire la sua frase." }
    ]
  },
  {
    id: 'teorema-di-cantor', titolo: 'Teorema di Cantor', tipo: 'teorema', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 3,
    sinonimi: ['Cantor', 'insieme delle parti più grande', 'infiniti sempre più grandi'],
    domanda: "Esiste un infinito più grande di tutti?",
    esempio: "Con tre oggetti si formano otto gruppi. Con infiniti oggetti, i gruppi possibili sono un infinito ancora più grande.",
    idea: "Il teorema di Cantor dice che l'[[insieme-delle-parti|insieme delle parti]] è sempre più grande dell'insieme di partenza.\nVale anche per gli insiemi infiniti.\nLa dimostrazione usa un'idea diagonale: un sottoinsieme costruito per essere diverso da tutti quelli abbinati.\nPartendo dai naturali e ripetendo, si ottiene una scala infinita di infiniti.\nQuindi non esiste un infinito più grande di tutti.",
    perche_fa_pensare: "Non c'è un ultimo gradino. L'infinito stesso è inesauribile.",
    dove_si_usa: "Nei fondamenti della matematica e nell'informatica teorica.",
    prerequisiti: [
      { id: 'insieme-delle-parti', perche: "Confronta un insieme con l'insieme dei suoi sottoinsiemi." },
      { id: 'argomento-diagonale-cantor', perche: "Usa la stessa mossa diagonale." }
    ],
    parenti: []
  },
  {
    id: 'numeri-ordinali', titolo: 'Numeri ordinali', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 4,
    sinonimi: ['ordinali', 'omega', 'ordinali transfiniti', 'buon ordinamento'],
    domanda: "Cosa viene dopo tutti i numeri naturali?",
    esempio: "Metti in fila tutti i numeri naturali e poi, in fondo, ancora un elemento. Quel posto in fondo è il primo ordinale infinito, più uno.",
    idea: "I numeri ordinali indicano posizioni in una fila, anche infinita.\nDopo tutti i naturali viene il primo ordinale infinito, chiamato omega.\nPoi omega più uno, omega più due, e così via, senza fine.\nL'aritmetica degli ordinali è strana: uno più omega è omega, ma omega più uno è più grande.\nServono a contare i passi di costruzioni infinite e a dimostrare risultati per induzione.",
    perche_fa_pensare: "Si può continuare a contare oltre l'infinito. Nel transfinito, contare posizioni e misurare grandezze diventano cose diverse.",
    dove_si_usa: "In logica, per misurare la forza delle teorie, e nella teoria degli insiemi.",
    prerequisiti: [
      { id: 'relazione-d-ordine', perche: "Gli ordinali descrivono un tipo speciale di ordine." },
      { id: 'induzione-matematica', perche: "L'induzione si estende oltre i naturali, lungo gli ordinali." },
      { id: 'insiemi-numerabili', perche: "Il primo ordinale infinito corrisponde ai naturali." }
    ],
    parenti: []
  },
  {
    id: 'cardinali-transfiniti', titolo: 'Cardinali infiniti', tipo: 'concetto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 4,
    sinonimi: ['cardinali infiniti', 'aleph', 'numeri transfiniti', 'aleph zero', 'aleph uno'],
    domanda: "Come si chiamano i diversi infiniti?",
    esempio: "La grandezza dei naturali si indica con aleph-zero. La grandezza dei numeri reali è un infinito più grande.",
    idea: "I numeri cardinali misurano la grandezza degli insiemi, anche infiniti.\nIl più piccolo cardinale infinito è quello dei naturali, chiamato aleph-zero.\nDopo vengono aleph-uno, aleph-due, e così via.\nLa grandezza dei reali è maggiore di aleph-zero.\nQuale aleph sia, esattamente, è una domanda famosa.",
    perche_fa_pensare: "Dare nomi agli infiniti sembra un'audacia. Eppure con questi nomi si fanno calcoli precisi.",
    dove_si_usa: "Nella teoria degli insiemi e nei fondamenti della matematica.",
    prerequisiti: [
      { id: 'teorema-di-cantor', perche: "Il teorema garantisce che esistono infiniti sempre più grandi." },
      { id: 'numeri-ordinali', perche: "Gli aleph si costruiscono a partire dagli ordinali." }
    ],
    parenti: []
  },
  {
    id: 'ipotesi-del-continuo', titolo: 'Ipotesi del continuo', tipo: 'problema-aperto', area: 'logica', argomento: 'infinito-e-cardinalita', livello: 4,
    sinonimi: ['continuo', 'Cohen', 'primo problema di Hilbert', 'infiniti intermedi'],
    domanda: "Esiste un infinito a metà strada tra quello dei naturali e quello dei reali?",
    esempio: "I naturali sono infiniti, i reali sono un infinito più grande. C'è qualcosa in mezzo? Cantor pensava di no, ma non riuscì a dimostrarlo.",
    idea: "L'ipotesi del continuo afferma che non esistono infiniti intermedi tra i naturali e i reali.\nFu il primo dei famosi problemi posti da Hilbert nel 1900.\nGödel mostrò che non si può confutare con gli assiomi usuali della teoria degli insiemi.\nCohen, nel 1963, mostrò che non si può nemmeno dimostrare.\nÈ [[indipendenza-logica|indipendente]] dagli assiomi: resta aperto se sia «vera» in un senso più profondo.",
    perche_fa_pensare: "Se gli assiomi non decidono, esiste comunque una risposta giusta? Qui la domanda matematica diventa filosofica.",
    dove_si_usa: "Nella ricerca sui fondamenti e nella teoria degli insiemi.",
    prerequisiti: [
      { id: 'cardinali-transfiniti', perche: "Confronta le grandezze di due infiniti." },
      { id: 'assiomi-zfc', perche: "La domanda si pone dentro gli assiomi usuali della teoria degli insiemi." },
      { id: 'indipendenza-logica', perche: "La risposta di Gödel e Cohen è che l'ipotesi è indipendente dagli assiomi." }
    ],
    parenti: []
  },

  // Logica dei predicati
  {
    id: 'quantificatori', titolo: 'Quantificatori: per ogni, esiste', tipo: 'concetto', area: 'logica', argomento: 'logica-dei-predicati', livello: 2,
    sinonimi: ['per ogni', 'esiste', 'quantificatore universale', 'quantificatore esistenziale', 'tutti', 'qualcuno'],
    domanda: "Come si parla con precisione di «tutti» e di «qualcuno»?",
    esempio: "«Ogni persona ha una madre» è diverso da «esiste una madre di tutte le persone». Scambiare l'ordine cambia completamente il senso.",
    idea: "I quantificatori dicono per quanti elementi vale una proprietà.\n«Per ogni» afferma che vale per tutti gli elementi.\n«Esiste» afferma che vale per almeno uno.\nNegare «per ogni» vuol dire affermare che esiste un caso contrario.\nL'ordine dei quantificatori conta moltissimo.",
    perche_fa_pensare: "Molte frasi ambigue diventano chiare solo quando si decide l'ordine di «tutti» e «qualcuno».",
    dove_si_usa: "In ogni definizione matematica, nelle interrogazioni dei database, nei contratti.",
    prerequisiti: [
      { id: 'proposizione', perche: "I quantificatori trasformano proprietà in proposizioni vere o false." }
    ],
    parenti: [
      { id: 'controesempio', perche: "Per negare un «per ogni» basta un controesempio." }
    ]
  },
  {
    id: 'logica-del-primo-ordine', titolo: 'Logica del primo ordine', tipo: 'concetto', area: 'logica', argomento: 'logica-dei-predicati', livello: 3,
    sinonimi: ['logica dei predicati', 'calcolo dei predicati', 'logica formale', 'linguaggio formale'],
    domanda: "Si può scrivere la matematica in un linguaggio senza ambiguità?",
    esempio: "«Ogni numero ha un successivo» si scrive con simboli precisi. Si legge: per ogni x esiste un y che è il successivo di x.",
    idea: "La logica del primo ordine è un linguaggio formale per scrivere affermazioni matematiche.\nUsa variabili, [[quantificatori]], [[connettivi-logici|connettivi]] e simboli per relazioni e funzioni.\nHa regole precise per costruire le frasi e per dedurne altre.\n«Primo ordine» vuol dire che i quantificatori riguardano gli elementi, non gli insiemi di elementi.\nQuasi tutta la matematica si può scrivere in questo linguaggio.",
    perche_fa_pensare: "Ridurre il ragionamento a simboli rende possibile studiarlo come un oggetto matematico. La logica guarda sé stessa.",
    dove_si_usa: "Nei database, nell'intelligenza artificiale simbolica, nella verifica del software.",
    prerequisiti: [
      { id: 'quantificatori', perche: "Aggiunge i quantificatori alla logica delle proposizioni." },
      { id: 'tavola-di-verita', perche: "Eredita i connettivi e il loro significato." }
    ],
    parenti: []
  },
  {
    id: 'modelli-e-verita', titolo: 'Verità e dimostrabilità: i modelli', tipo: 'concetto', area: 'logica', argomento: 'logica-dei-predicati', livello: 4,
    sinonimi: ['teoria dei modelli', 'semantica', 'verità e dimostrabilità', 'modello', 'interpretazione'],
    domanda: "Essere vero ed essere dimostrabile sono la stessa cosa?",
    esempio: "«Ogni elemento ha un inverso nella moltiplicazione» è vera tra i razionali diversi da zero, falsa tra gli interi. Dipende dal mondo in cui la interpreti.",
    idea: "Un modello è un mondo matematico in cui si interpretano i simboli di una teoria.\nUna frase è vera in un modello se descrive correttamente quel mondo.\nLa dimostrabilità, invece, riguarda solo i simboli e le regole di deduzione.\nUna teoria può avere modelli molto diversi tra loro.\nSe una frase è vera in alcuni modelli e falsa in altri, gli assiomi non bastano a deciderla.",
    perche_fa_pensare: "La verità dipende dal mondo, la dimostrazione dalle regole. Capire come si incontrano è uno dei grandi temi della logica.",
    dove_si_usa: "Nella logica matematica, nell'informatica teorica, nella verifica dei programmi.",
    prerequisiti: [
      { id: 'logica-del-primo-ordine', perche: "I modelli danno un significato alle frasi del linguaggio formale." },
      { id: 'metodo-assiomatico', perche: "Un modello è un mondo in cui valgono certi assiomi." }
    ],
    parenti: [
      { id: 'coerenza-geometrie-non-euclidee', perche: "Un modello della geometria iperbolica ne dimostrò la coerenza." }
    ]
  },
  {
    id: 'teorema-di-completezza', titolo: 'Teorema di completezza di Gödel', tipo: 'teorema', area: 'logica', argomento: 'logica-dei-predicati', livello: 4,
    sinonimi: ['completezza di Gödel', 'teorema di completezza', 'Gödel'],
    domanda: "Tutto ciò che è vero in ogni caso si può dimostrare?",
    esempio: "Supponi che una conseguenza valga in ogni mondo che rispetta certi assiomi. Allora esiste una dimostrazione scritta che la ricava da quegli assiomi.",
    idea: "Il teorema di completezza fu dimostrato da Kurt Gödel nel 1929.\nRiguarda la [[logica-del-primo-ordine|logica del primo ordine]].\nDice che una frase vera in tutti i modelli di una teoria si può dimostrare dagli assiomi.\nQuindi le regole di deduzione non perdono nessuna conseguenza logica.\nNon contraddice l'incompletezza, che riguarda frasi vere in alcuni modelli ma non in tutti.",
    perche_fa_pensare: "Lo stesso Gödel dimostrò prima che la logica è completa, poi che l'aritmetica è incompleta. Le due cose convivono.",
    dove_si_usa: "Nei fondamenti della matematica e nei programmi che dimostrano teoremi in automatico.",
    prerequisiti: [
      { id: 'modelli-e-verita', perche: "Collega la verità nei modelli con la dimostrabilità." }
    ],
    parenti: []
  },

  // Assiomi e fondamenti
  {
    id: 'metodo-assiomatico', titolo: 'Assiomi e metodo assiomatico', tipo: 'concetto', area: 'logica', argomento: 'assiomi-e-fondamenti', livello: 2,
    sinonimi: ['assiomi', 'assioma', 'postulati', 'sistema assiomatico', 'deduzione da assiomi'],
    domanda: "Da dove partono le dimostrazioni?",
    esempio: "Gli scacchi hanno regole che non si discutono: si accettano e si gioca. Gli assiomi sono le regole del gioco della matematica.",
    idea: "Un assioma è un'affermazione accettata senza dimostrazione, come punto di partenza.\nNel metodo assiomatico tutte le altre affermazioni si ricavano dagli assiomi con dimostrazioni.\nEuclide organizzò così la geometria più di duemila anni fa.\nOggi gli assiomi non si considerano verità evidenti, ma scelte di partenza.\nAssiomi diversi danno teorie diverse.",
    perche_fa_pensare: "Se gli assiomi sono scelte, la matematica parla del mondo o di sé stessa? Il dibattito è aperto.",
    dove_si_usa: "In tutta la matematica moderna, nella fisica teorica e nella progettazione dei linguaggi di programmazione.",
    prerequisiti: [
      { id: 'dimostrazione', perche: "Gli assiomi sono il punto di partenza delle dimostrazioni." }
    ],
    parenti: []
  },
  {
    id: 'assiomi-di-peano', titolo: 'Assiomi di Peano', tipo: 'concetto', area: 'logica', argomento: 'assiomi-e-fondamenti', livello: 3,
    sinonimi: ['Peano', 'assiomi dell\'aritmetica', 'aritmetica di Peano', 'successore'],
    domanda: "Quali regole bastano per descrivere i numeri naturali?",
    esempio: "C'è un primo numero. Ogni numero ha un successivo. Numeri diversi hanno successivi diversi. Il primo non è successivo di nessuno.",
    idea: "Gli assiomi di Peano descrivono i numeri naturali con poche regole.\nC'è un numero iniziale, lo zero, e ogni numero ha un successivo.\nNumeri diversi hanno successivi diversi, e lo zero non è il successivo di nessuno.\nL'ultimo assioma è il [[induzione-matematica|principio di induzione]].\nCon queste regole si definiscono addizione e moltiplicazione, e si ricava l'aritmetica.",
    perche_fa_pensare: "Se poche regole bastano a descrivere i numeri, il numero è la cosa o la struttura? Molti filosofi scelgono la struttura.",
    dove_si_usa: "Nei fondamenti della matematica e nei linguaggi di programmazione che definiscono i numeri.",
    prerequisiti: [
      { id: 'numeri-naturali', perche: "Descrivono i numeri naturali." },
      { id: 'induzione-matematica', perche: "L'induzione è uno degli assiomi." },
      { id: 'metodo-assiomatico', perche: "È un sistema di assiomi." }
    ],
    parenti: []
  },
  {
    id: 'assiomi-zfc', titolo: 'Assiomi di Zermelo-Fraenkel', tipo: 'concetto', area: 'logica', argomento: 'assiomi-e-fondamenti', livello: 4,
    sinonimi: ['zfc', 'Zermelo-Fraenkel', 'teoria assiomatica degli insiemi', 'assiomi degli insiemi'],
    domanda: "Su quali regole poggia tutta la matematica moderna?",
    esempio: "Esiste l'insieme vuoto. Da due insiemi se ne forma uno che li contiene. Ogni insieme ha l'insieme dei suoi sottoinsiemi. Sono alcuni degli assiomi.",
    idea: "Gli assiomi di Zermelo-Fraenkel sono le regole standard della teoria degli insiemi.\nDicono quali insiemi esistono e come se ne costruiscono di nuovi.\nSono scelti per evitare paradossi come quello di Russell.\nQuasi tutta la matematica si può ricavare da questi assiomi.\nDi solito si aggiunge l'[[assioma-della-scelta|assioma della scelta]]: insieme formano il sistema di assiomi più usato.",
    perche_fa_pensare: "Nessuno sa dimostrare, restando dentro questi assiomi, che non portino a contraddizioni. Ci si fida perché finora hanno retto.",
    dove_si_usa: "Nei fondamenti della matematica e nei sistemi di verifica delle dimostrazioni.",
    prerequisiti: [
      { id: 'paradosso-di-russell', perche: "Gli assiomi nascono per evitare paradossi come quello di Russell." },
      { id: 'logica-del-primo-ordine', perche: "Sono scritti nel linguaggio della logica del primo ordine." },
      { id: 'insieme-delle-parti', perche: "Uno degli assiomi garantisce che l'insieme delle parti esista." }
    ],
    parenti: []
  },
  {
    id: 'assioma-della-scelta', titolo: 'Assioma della scelta', tipo: 'concetto', area: 'logica', argomento: 'assiomi-e-fondamenti', livello: 4,
    sinonimi: ['scelta', 'assioma di scelta', 'lemma di Zorn', 'Zermelo'],
    domanda: "Si può sempre scegliere un elemento da ogni insieme, anche quando gli insiemi sono infiniti?",
    esempio: "Da infinite paia di scarpe puoi scegliere la sinistra di ogni paio: c'è una regola. Da infinite paia di calzini identici, nessuna regola funziona. L'assioma dice che una scelta esiste comunque.",
    idea: "L'assioma della scelta afferma che da ogni famiglia di insiemi non vuoti si può scegliere un elemento per ciascuno.\nPer famiglie finite non serve un assioma: si sceglie un elemento alla volta.\nPer famiglie infinite, invece, gli altri assiomi non lo garantiscono.\nÈ indipendente dagli altri assiomi della teoria degli insiemi.\nPermette di dimostrare molti teoremi utili, ma anche risultati che sembrano paradossali.",
    perche_fa_pensare: "Esiste qualcosa che nessuno sa costruire? L'assioma della scelta dice di sì, e la maggior parte dei matematici lo accetta.",
    dove_si_usa: "In analisi, in algebra e in topologia, spesso senza che lo si noti.",
    prerequisiti: [
      { id: 'assiomi-zfc', perche: "È un assioma aggiunto alla teoria degli insiemi di base." }
    ],
    parenti: [
      { id: 'banach-tarski', perche: "Il paradosso di Banach-Tarski è la sua conseguenza più sorprendente." }
    ]
  },

  // Limiti della dimostrazione
  {
    id: 'programma-di-hilbert', titolo: 'Programma di Hilbert', tipo: 'concetto', area: 'logica', argomento: 'limiti-della-dimostrazione', livello: 3,
    sinonimi: ['Hilbert', 'formalizzazione', 'coerenza della matematica', 'fondazione della matematica'],
    domanda: "Si può dimostrare una volta per tutte che la matematica non contiene contraddizioni?",
    esempio: "All'inizio del Novecento i paradossi avevano scosso la fiducia nei fondamenti. Hilbert propose un piano per mettere tutto al sicuro.",
    idea: "Il programma di Hilbert voleva scrivere tutta la matematica in sistemi formali, fatti di simboli e regole.\nPoi voleva dimostrare, con metodi elementari e sicuri, che quei sistemi non portano a contraddizioni.\nCosì la matematica avrebbe avuto basi certe.\nI [[teoremi-di-incompletezza|teoremi di Gödel]], nel 1931, mostrarono che il piano non poteva riuscire così com'era.\nLe sue idee, però, hanno dato vita alla logica moderna.",
    perche_fa_pensare: "Un fallimento può essere fecondo. Dal piano di Hilbert sono nate la logica moderna e l'informatica teorica.",
    dove_si_usa: "Nella logica matematica e, indirettamente, nella teoria della calcolabilità.",
    prerequisiti: [
      { id: 'formalismo', perche: "Il programma è il progetto concreto della visione formalista." }
    ],
    parenti: []
  },
  {
    id: 'indipendenza-logica', titolo: 'Enunciati indipendenti dagli assiomi', tipo: 'concetto', area: 'logica', argomento: 'limiti-della-dimostrazione', livello: 4,
    sinonimi: ['indipendenza', 'indecidibile', 'enunciato indipendente', 'né dimostrabile né confutabile'],
    domanda: "Esistono domande a cui gli assiomi non sanno rispondere?",
    esempio: "Il quinto postulato di Euclide non segue dagli altri quattro. Esistono geometrie coerenti in cui vale e geometrie in cui non vale.",
    idea: "Un enunciato è indipendente da un sistema di assiomi se non si può né dimostrare né confutare.\nPer mostrarlo si costruiscono due modelli degli assiomi.\nIn uno l'enunciato è vero, nell'altro è falso.\nIl quinto postulato e l'[[ipotesi-del-continuo|ipotesi del continuo]] sono gli esempi più famosi.\nL'indipendenza è a sua volta un teorema: si sa con certezza che gli assiomi non bastano.",
    perche_fa_pensare: "Scoprire che una domanda non ha risposta negli assiomi è comunque una risposta. A volte la matematica può scegliere.",
    dove_si_usa: "Nella teoria degli insiemi, in geometria e in logica.",
    prerequisiti: [
      { id: 'modelli-e-verita', perche: "Si dimostra costruendo modelli diversi degli stessi assiomi." }
    ],
    parenti: [
      { id: 'quinto-postulato', perche: "Il quinto postulato fu il primo enunciato riconosciuto come indipendente." }
    ]
  },
  {
    id: 'teoremi-di-incompletezza', titolo: 'Teoremi di incompletezza di Gödel', tipo: 'teorema', area: 'logica', argomento: 'limiti-della-dimostrazione', livello: 4,
    sinonimi: ['Gödel', 'incompletezza', 'teorema di Gödel', 'primo teorema di incompletezza', 'secondo teorema di incompletezza'],
    domanda: "Esistono verità matematiche che non si possono dimostrare?",
    esempio: "Gödel costruì una frase dell'aritmetica che, in un certo senso, dice: «io non sono dimostrabile». Se il sistema è coerente, quella frase è vera ma non dimostrabile.",
    idea: "Kurt Gödel dimostrò nel 1931 due teoremi sui sistemi di assiomi capaci di esprimere l'aritmetica.\nIl primo: se il sistema è coerente, esistono frasi che non si possono né dimostrare né confutare.\nIl secondo: un sistema del genere non può dimostrare la propria coerenza.\nValgono per ogni sistema di questo tipo con regole controllabili in modo meccanico.\nNon dicono che la matematica sia incerta, ma che nessun sistema la esaurisce.",
    perche_fa_pensare: "La mente umana è più di una macchina che segue regole? Molti hanno usato Gödel per dire di sì, ma la conclusione è controversa.",
    dove_si_usa: "In logica, in filosofia della matematica e nello studio dei limiti dei computer.",
    prerequisiti: [
      { id: 'logica-del-primo-ordine', perche: "I teoremi riguardano sistemi scritti in un linguaggio formale." },
      { id: 'assiomi-di-peano', perche: "Valgono per i sistemi che contengono l'aritmetica di Peano." },
      { id: 'programma-di-hilbert', perche: "Mostrarono che il programma di Hilbert non poteva riuscire così com'era." }
    ],
    parenti: []
  },

  // Filosofia della matematica
  {
    id: 'platonismo', titolo: 'Platonismo matematico', tipo: 'concetto', area: 'logica', argomento: 'filosofia-della-matematica', livello: 2,
    sinonimi: ['Platone', 'realismo matematico', 'mondo delle idee', 'la matematica si scopre'],
    domanda: "Gli oggetti matematici esistono anche senza di noi?",
    esempio: "Il numero 7 era primo anche prima che esistessero gli esseri umani? Molti matematici rispondono di sì, senza esitare.",
    idea: "Il platonismo sostiene che gli oggetti matematici esistono davvero, fuori dallo spazio e dal tempo.\nI matematici non li inventano: li scoprono, come esploratori.\nIl nome viene da Platone e dal suo mondo delle idee.\nSpiega bene perché tutti arrivano agli stessi risultati.\nResta difficile capire come conosciamo oggetti che non possiamo toccare né vedere.",
    perche_fa_pensare: "Se i numeri esistono, dove sono? E se non esistono, perché funzionano così bene?",
    dove_si_usa: "Nella filosofia della matematica, e nel modo in cui molti matematici vivono il proprio lavoro.",
    prerequisiti: [],
    parenti: [
      { id: 'irragionevole-efficacia', perche: "Se la matematica esiste per conto suo, la sua efficacia nel mondo diventa un mistero da spiegare." }
    ]
  },
  {
    id: 'formalismo', titolo: 'Formalismo', tipo: 'concetto', area: 'logica', argomento: 'filosofia-della-matematica', livello: 3,
    sinonimi: ['formalisti', 'matematica come gioco di simboli', 'Hilbert'],
    domanda: "E se la matematica fosse solo un gioco di simboli?",
    esempio: "Negli scacchi non ha senso chiedersi se l'alfiere «esiste davvero». Conta solo che si muova secondo le regole.",
    idea: "Il formalismo vede la matematica come manipolazione di simboli secondo regole fissate.\nLe domande sull'esistenza degli oggetti matematici perdono importanza.\nConta che il sistema sia coerente, cioè che non porti a contraddizioni.\nDavid Hilbert ne fu il sostenitore più noto.\nI teoremi di Gödel hanno mostrato i limiti di questa visione nella sua forma più ambiziosa.",
    perche_fa_pensare: "Se è solo un gioco, perché descrive il mondo così bene? È la domanda che il formalismo lascia aperta.",
    dove_si_usa: "Nei fondamenti della matematica e nell'informatica, dove si lavora proprio con simboli e regole.",
    prerequisiti: [
      { id: 'metodo-assiomatico', perche: "Il formalismo porta all'estremo il metodo assiomatico." }
    ],
    parenti: [
      { id: 'platonismo', perche: "Sono due risposte opposte alla domanda su cosa siano gli oggetti matematici." }
    ]
  },
  {
    id: 'logicismo', titolo: 'Logicismo', tipo: 'concetto', area: 'logica', argomento: 'filosofia-della-matematica', livello: 3,
    sinonimi: ['logicisti', 'Frege', 'Russell', 'Principia Mathematica', 'matematica come logica'],
    domanda: "La matematica è solo logica travestita?",
    esempio: "Frege voleva ridurre il concetto di numero a idee puramente logiche. Il due, all'incirca, sarebbe «la proprietà comune a tutte le coppie».",
    idea: "Il logicismo sostiene che la matematica si riduce alla logica.\nGottlob Frege e Bertrand Russell cercarono di ricavare l'aritmetica da principi logici.\nIl [[paradosso-di-russell|paradosso di Russell]] mostrò che il sistema di Frege era contraddittorio.\nRussell e Whitehead ripresero il progetto nei Principia Mathematica, con molte complicazioni.\nOggi il logicismo puro è poco diffuso, ma ha contribuito a creare la logica moderna.",
    perche_fa_pensare: "Se la matematica fosse solo logica, ogni teorema sarebbe vero per definizione. Ma allora perché scoprirli è così difficile?",
    dove_si_usa: "In filosofia della matematica e nella storia della logica.",
    prerequisiti: [
      { id: 'metodo-assiomatico', perche: "Il logicismo cerca assiomi puramente logici." },
      { id: 'insieme', perche: "Si appoggia su un'idea molto generale di insieme." }
    ],
    parenti: []
  },
  {
    id: 'intuizionismo', titolo: 'Intuizionismo e matematica costruttiva', tipo: 'concetto', area: 'logica', argomento: 'filosofia-della-matematica', livello: 3,
    sinonimi: ['costruttivismo', 'matematica costruttiva', 'Brouwer', 'intuizionisti', 'terzo escluso'],
    domanda: "Basta dimostrare che una cosa non può non esistere per dire che esiste?",
    esempio: "Un intuizionista non accetta che un numero esista solo perché la sua inesistenza porta a una contraddizione. Vuole vedere come costruirlo.",
    idea: "L'intuizionismo vede la matematica come costruzione della mente umana.\nUn oggetto esiste solo se si sa come costruirlo.\nPer questo rifiuta alcune dimostrazioni [[dimostrazione-per-assurdo|per assurdo]] e il principio del terzo escluso.\nIl terzo escluso dice che ogni affermazione è vera o falsa.\nLuitzen Brouwer fondò questa scuola all'inizio del Novecento.",
    perche_fa_pensare: "Rinunciare a una regola logica sembra una perdita. Ma le dimostrazioni costruttive dicono di più: danno anche il metodo.",
    dove_si_usa: "In informatica: una dimostrazione costruttiva si può trasformare in un programma.",
    prerequisiti: [
      { id: 'dimostrazione-per-assurdo', perche: "Rifiuta alcuni usi della dimostrazione per assurdo." },
      { id: 'infinito-potenziale-attuale', perche: "Accetta l'infinito solo come processo che si costruisce, non come totalità compiuta." }
    ],
    parenti: [
      { id: 'topos', perche: "I topos sono mondi matematici in cui la logica naturale è quella intuizionista." }
    ]
  }
]);
