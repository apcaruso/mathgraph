/* Numeri e aritmetica */
Mappa.registra([
  // Contare
  {
    id: 'numeri-naturali', titolo: 'Numeri naturali', tipo: 'concetto', area: 'numeri', argomento: 'contare-e-naturali', livello: 1,
    sinonimi: ['naturali', 'numeri per contare', 'interi positivi', 'contare'],
    domanda: "Che cos'è, davvero, un numero come il tre?",
    esempio: "Tre mele, tre giorni e tre note musicali sono cose diversissime. Eppure hanno qualcosa in comune: il numero tre.",
    idea: "I numeri naturali sono quelli che usi per contare: 0, 1, 2, 3 e così via.\nOgni numero ha un successivo, quindi non esiste un numero più grande di tutti.\nContare vuol dire abbinare a ogni oggetto un numero, uno dopo l'altro.\nIl risultato non dipende dall'ordine in cui conti.\nAlcuni testi fanno partire i naturali da 1, altri da 0: è solo una convenzione.",
    perche_fa_pensare: "Il numero tre non è fatto di materia e non sta in nessun luogo. Eppure tutti lo riconoscono: dove esiste, allora?",
    dove_si_usa: "Ovunque si conti qualcosa: persone, giorni, passi di un programma.",
    prerequisiti: [],
    parenti: [
      { id: 'cardinalita', perche: "Contare è abbinare oggetti e numeri. La stessa idea, estesa agli insiemi infiniti, diventa la cardinalità." }
    ]
  },
  {
    id: 'zero', titolo: 'Lo zero', tipo: 'concetto', area: 'numeri', argomento: 'contare-e-naturali', livello: 1,
    sinonimi: ['0', 'nulla', 'numero zero'],
    domanda: "Come si può contare il niente?",
    esempio: "Se il frigorifero è vuoto, quante uova ci sono? Zero. Rispondi con un numero anche se non c'è nulla da contare.",
    idea: "Lo zero è il numero che indica l'assenza di quantità.\nPer molti secoli non è stato considerato un numero.\nHa due ruoli diversi.\nÈ un numero vero e proprio, con cui fare i conti.\nEd è una cifra che segna un posto vuoto, come in 205.",
    perche_fa_pensare: "Dare un nome e un simbolo al nulla è stato un salto enorme. Il niente diventa qualcosa con cui ragionare.",
    dove_si_usa: "Nella scrittura di ogni numero, nei bilanci in pareggio, nel punto di partenza di ogni misura.",
    prerequisiti: [
      { id: 'numeri-naturali', perche: "Lo zero si aggiunge ai numeri per contare: è la risposta a «quanti?» quando non c'è niente." }
    ],
    parenti: [
      { id: 'insieme', perche: "L'insieme vuoto, che non contiene nulla, è il cugino dello zero." }
    ]
  },
  {
    id: 'sistema-posizionale', titolo: 'Sistema posizionale', tipo: 'concetto', area: 'numeri', argomento: 'contare-e-naturali', livello: 1,
    sinonimi: ['notazione posizionale', 'cifre', 'sistema decimale', 'base dieci', 'valore posizionale', 'unità decine centinaia'],
    domanda: "Come si scrivono numeri enormi con solo dieci simboli?",
    esempio: "In 333 la stessa cifra vale trecento, trenta e tre. Cambia valore a seconda del posto che occupa.",
    idea: "In un sistema posizionale il valore di una cifra dipende dalla sua posizione.\nOgni posto verso sinistra vale dieci volte il precedente: unità, decine, centinaia.\nCosì bastano dieci cifre, da 0 a 9, per scrivere qualsiasi numero.\nLo zero serve a segnare i posti vuoti.\nI numeri romani, invece, non sono posizionali: per questo i calcoli con loro sono scomodi.",
    perche_fa_pensare: "Un'idea di scrittura ha reso i calcoli accessibili a tutti. A volte un buon simbolo vale quanto una scoperta.",
    dove_si_usa: "In ogni numero che scrivi: prezzi, date, contatori.",
    prerequisiti: [
      { id: 'zero', perche: "Lo zero tiene il posto quando una posizione è vuota, come in 101." }
    ],
    parenti: []
  },
  {
    id: 'basi-numeriche', titolo: 'Basi diverse da dieci (binario)', tipo: 'concetto', area: 'numeri', argomento: 'contare-e-naturali', livello: 2,
    sinonimi: ['binario', 'base due', 'sistema binario', 'esadecimale', 'basi di numerazione', 'base sedici'],
    domanda: "Perché proprio dieci cifre?",
    esempio: "Un computer scrive il numero cinque come 101. Si legge così: un quattro, nessun due e un uno.",
    idea: "La base è il numero di cifre che usi, e il fattore tra un posto e il successivo.\nNoi usiamo la base dieci, forse perché abbiamo dieci dita.\nIn base due ci sono solo due cifre, 0 e 1, e ogni posto vale il doppio del precedente.\nSi chiama sistema binario.\nLo stesso numero si può scrivere in qualsiasi base: cambia la scrittura, non la quantità.",
    perche_fa_pensare: "Il numero e il modo di scriverlo sono due cose diverse. Una quantità esiste prima di ogni scrittura.",
    dove_si_usa: "Nei computer, che lavorano in base due, e nei codici dei colori delle pagine web, scritti in base sedici.",
    prerequisiti: [
      { id: 'sistema-posizionale', perche: "È la stessa idea dei posti, con un numero di cifre diverso da dieci." },
      { id: 'potenze', perche: "Ogni posto vale una potenza della base: 1, 2, 4, 8 in base due." }
    ],
    parenti: [
      { id: 'bit', perche: "Una cifra binaria è proprio un bit, l'unità dell'informazione." }
    ]
  },

  // Le operazioni
  {
    id: 'addizione-sottrazione', titolo: 'Addizione e sottrazione', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['somma', 'addizione', 'sottrazione', 'differenza', 'più', 'meno'],
    domanda: "Cosa vuol dire mettere insieme e togliere?",
    esempio: "Hai 7 euro e ne spendi 3: te ne restano 4. Se poi ne trovi 2, arrivi a 6.",
    idea: "L'addizione mette insieme due quantità e dà il totale, chiamato somma.\nLa sottrazione toglie una quantità da un'altra e dà la differenza.\nSono operazioni inverse: una disfa ciò che fa l'altra.\nSommare è come contare in avanti, sottrarre come contare all'indietro.\nTra i numeri naturali, però, non puoi togliere 5 da 3: serve un nuovo tipo di numero.",
    perche_fa_pensare: "Da un'operazione impossibile nascono nuovi numeri. Spesso la matematica cresce proprio così.",
    dove_si_usa: "Nei conti di tutti i giorni: spesa, resto, saldo del conto, tempo che manca.",
    prerequisiti: [
      { id: 'numeri-naturali', perche: "Si somma e si sottrae partendo dai numeri per contare." }
    ],
    parenti: []
  },
  {
    id: 'moltiplicazione-divisione', titolo: 'Moltiplicazione e divisione', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['moltiplicazione', 'divisione', 'prodotto', 'quoziente', 'per', 'diviso', 'tabelline'],
    domanda: "Cosa c'è dietro il «per» e il «diviso»?",
    esempio: "Tre file di quattro sedie fanno dodici sedie. Dodici biscotti divisi tra quattro persone fanno tre biscotti a testa.",
    idea: "La moltiplicazione è un'addizione ripetuta: tre volte quattro è quattro più quattro più quattro.\nIl risultato si chiama prodotto.\nLa divisione chiede quante volte una quantità sta in un'altra, oppure come spartirla in parti uguali.\nIl risultato si chiama quoziente, e le due operazioni sono inverse.\nDividere 5 per zero è impossibile: nessun numero, moltiplicato per zero, dà 5.",
    perche_fa_pensare: "La moltiplicazione nasce come scorciatoia per contare. Poi si scopre che ha regole sue, valide anche dove contare non ha più senso.",
    dove_si_usa: "Nei prezzi per quantità, nelle ricette, nelle superfici, nella divisione di una spesa tra amici.",
    prerequisiti: [
      { id: 'addizione-sottrazione', perche: "La moltiplicazione è un'addizione ripetuta." }
    ],
    parenti: []
  },
  {
    id: 'proprieta-operazioni', titolo: 'Proprietà delle operazioni', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['proprietà commutativa', 'proprietà associativa', 'proprietà distributiva', 'commutativa', 'associativa', 'distributiva'],
    domanda: "Perché cambiando l'ordine dei fattori il prodotto non cambia?",
    esempio: "Per calcolare 25 per 7 per 4, conviene fare prima 25 per 4, cioè 100. Poi 100 per 7 fa 700.",
    idea: "Addizione e moltiplicazione seguono alcune regole sempre valide.\nCommutativa: puoi scambiare l'ordine, tre più cinque è come cinque più tre.\nAssociativa: puoi raggruppare i termini come preferisci.\nDistributiva: tre volte una somma è uguale alla somma dei tripli.\nLa sottrazione e la divisione, invece, non sono commutative.\nQueste regole permettono di fare i conti a mente in modo furbo.",
    perche_fa_pensare: "Sono regole che nessuno ha deciso: le scopri provando. Poi diventano il punto di partenza dell'algebra.",
    dove_si_usa: "Nel calcolo a mente, negli scontrini e in tutta l'algebra.",
    prerequisiti: [
      { id: 'moltiplicazione-divisione', perche: "Le proprietà riguardano soprattutto addizione e moltiplicazione." }
    ],
    parenti: []
  },
  {
    id: 'divisione-con-resto', titolo: 'Divisione con resto', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['resto', 'divisione intera', 'quoziente e resto'],
    domanda: "Cosa resta quando le parti non vengono uguali?",
    esempio: "Hai 17 biscotti e 5 amici. Ne dai 3 a testa e ne avanzano 2.",
    idea: "Dividere con resto vuol dire fare parti uguali il più grandi possibile e vedere cosa avanza.\nIl resto è sempre più piccolo del divisore, il numero per cui dividi.\nSe il resto è zero, la divisione è esatta.\nIl resto dice se e come un numero sta dentro un altro.",
    perche_fa_pensare: "A volte ciò che avanza è più interessante del risultato. Su questa idea si regge un'intera aritmetica: quella dell'orologio.",
    dove_si_usa: "Per sapere che giorno della settimana sarà fra 100 giorni, o quante scatole servono per un trasloco.",
    prerequisiti: [
      { id: 'moltiplicazione-divisione', perche: "È una divisione che tiene conto anche di ciò che avanza." }
    ],
    parenti: []
  },
  {
    id: 'potenze', titolo: 'Potenze', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['potenza', 'esponente', 'elevamento a potenza', 'quadrato', 'cubo', 'al quadrato'],
    domanda: "Come si scrive in breve una moltiplicazione ripetuta?",
    esempio: "Un foglio piegato a metà 10 volte ha 1024 strati: è il 2 moltiplicato per sé stesso 10 volte.",
    idea: "Una potenza è una moltiplicazione ripetuta dello stesso numero.\nIl numero si chiama base, le volte si chiamano esponente.\nDue alla terza vuol dire due per due per due, cioè otto.\nLe potenze crescono molto in fretta.\nPer convenzione, ogni numero diverso da zero elevato a zero fa 1.",
    perche_fa_pensare: "Raddoppiare sembra poco, ma ripetuto diventa enorme. La nostra intuizione fatica a seguire queste crescite.",
    dove_si_usa: "Negli interessi composti, nella crescita delle epidemie, nelle misure della memoria dei computer.",
    formula: {
      latex: 'a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ volte}}',
      come_si_legge: "a elevato alla n è uguale ad a per a per a, n volte.",
      a_parole: "Elevare un numero alla n vuol dire moltiplicarlo per sé stesso n volte."
    },
    prerequisiti: [
      { id: 'moltiplicazione-divisione', perche: "La potenza è una moltiplicazione ripetuta." }
    ],
    parenti: []
  },
  {
    id: 'radice-quadrata', titolo: 'Radice quadrata', tipo: 'concetto', area: 'numeri', argomento: 'quattro-operazioni', livello: 1,
    sinonimi: ['radice', 'quadrato perfetto', 'radice di'],
    domanda: "Quanto è lungo il lato di un quadrato di cui conosci l'area?",
    esempio: "Un terrazzo quadrato di 49 metri quadrati ha il lato di 7 metri, perché 7 per 7 fa 49.",
    idea: "La radice quadrata di un numero è il numero positivo che, moltiplicato per sé stesso, dà quel numero.\nÈ l'operazione inversa del quadrato.\nLa radice di 49 è 7, la radice di 2 è circa 1,414.\nAlcune radici sono numeri interi, molte non lo sono.\nTra i numeri reali, i numeri negativi non hanno radice quadrata.",
    perche_fa_pensare: "Chiedere la radice di 2 ha portato a scoprire numeri che non si possono scrivere come frazione.",
    dove_si_usa: "Nei calcoli di distanze, nella diagonale degli schermi, in statistica.",
    formula: {
      latex: '\\sqrt{49} = 7, \\qquad \\text{infatti } 7^2 = 49',
      come_si_legge: "radice quadrata di 49 uguale 7; infatti 7 al quadrato è uguale a 49.",
      a_parole: "La radice quadrata cerca il numero positivo che, moltiplicato per sé stesso, dà il numero di partenza."
    },
    prerequisiti: [
      { id: 'potenze', perche: "La radice disfa il quadrato, cioè la potenza con esponente due." }
    ],
    parenti: []
  },

  // Divisibilità e numeri primi
  {
    id: 'multipli-divisori', titolo: 'Multipli e divisori', tipo: 'concetto', area: 'numeri', argomento: 'divisibilita-e-primi', livello: 1,
    sinonimi: ['multiplo', 'divisore', 'divisibilità', 'criteri di divisibilità', 'divisibile'],
    domanda: "Quando un numero sta esattamente dentro un altro?",
    esempio: "Puoi disporre 12 sedie in file uguali da 1, 2, 3, 4, 6 o 12. Con 7 sedie, invece, solo in file da 1 o da 7.",
    idea: "Un numero è divisore di un altro se lo divide senza resto.\nIn quel caso il secondo è un multiplo del primo.\nAd esempio 3 è divisore di 12, e 12 è multiplo di 3.\nOgni numero ha come divisori almeno 1 e sé stesso.\nI multipli di un numero sono infiniti, i divisori sono in numero limitato.",
    perche_fa_pensare: "Guardare come i numeri si dividono tra loro rivela una struttura nascosta, come una parentela tra i numeri.",
    dove_si_usa: "Per formare squadre, organizzare turni, dividere una spesa in parti intere.",
    prerequisiti: [
      { id: 'divisione-con-resto', perche: "Un divisore è un numero che divide con resto zero." }
    ],
    parenti: []
  },
  {
    id: 'numeri-primi', titolo: 'Numeri primi', tipo: 'concetto', area: 'numeri', argomento: 'divisibilita-e-primi', livello: 1,
    sinonimi: ['primi', 'numero primo', 'primo', 'numeri composti'],
    domanda: "Quali sono i mattoni con cui si costruiscono tutti i numeri?",
    esempio: "Con 7 sedie puoi fare solo una fila da 7 o sette file da 1. Il 7 non si lascia spezzare in parti uguali: è primo.",
    idea: "Un numero primo è un numero maggiore di 1 che ha solo due divisori: 1 e sé stesso.\nI primi più piccoli sono 2, 3, 5, 7, 11 e 13.\nIl 2 è l'unico primo pari.\nGli altri numeri maggiori di 1 si chiamano composti.\nIl numero 1 non è primo, per convenzione e per comodità.",
    perche_fa_pensare: "I primi sembrano disposti a caso, eppure seguono leggi profonde. Molte domande su di loro sono ancora senza risposta.",
    dove_si_usa: "Nella crittografia che protegge pagamenti e messaggi online.",
    prerequisiti: [
      { id: 'multipli-divisori', perche: "Un primo si riconosce dai suoi divisori: ne ha solo due." }
    ],
    parenti: []
  },
  {
    id: 'fattorizzazione-in-primi', titolo: 'Scomposizione in fattori primi', tipo: 'teorema', area: 'numeri', argomento: 'divisibilita-e-primi', livello: 1,
    sinonimi: ['teorema fondamentale dell\'aritmetica', 'scomposizione in fattori', 'fattori primi', 'fattorizzazione'],
    domanda: "Ogni numero ha una sua «ricetta» unica?",
    esempio: "Il 60 si scompone in 2 per 2 per 3 per 5. Comunque tu proceda, arrivi sempre agli stessi fattori.",
    idea: "Ogni numero maggiore di 1 si scrive come prodotto di numeri primi.\nQuesta scrittura è unica, a parte l'ordine dei fattori.\nÈ il teorema fondamentale dell'aritmetica.\nPer trovare i fattori, dividi il numero per i primi più piccoli finché puoi.\nL'unicità non è scontata: esistono sistemi di numeri in cui viene meno.",
    perche_fa_pensare: "Ogni numero ha un'identità precisa, fatta di primi. È come se i numeri avessero un codice genetico.",
    dove_si_usa: "Per semplificare frazioni, trovare multipli comuni, e in crittografia.",
    formula: {
      latex: '60 = 2^2 \\cdot 3 \\cdot 5',
      come_si_legge: "sessanta uguale due al quadrato per tre per cinque.",
      a_parole: "Il 60 è il prodotto di due volte il primo 2, del primo 3 e del primo 5."
    },
    prerequisiti: [
      { id: 'numeri-primi', perche: "I primi sono i mattoni della scomposizione." }
    ],
    parenti: []
  },
  {
    id: 'mcd-mcm', titolo: 'Massimo comune divisore e minimo comune multiplo', tipo: 'concetto', area: 'numeri', argomento: 'divisibilita-e-primi', livello: 1,
    sinonimi: ['mcd', 'mcm', 'massimo comun divisore', 'minimo comune multiplo', 'massimo comune divisore'],
    domanda: "Dopo quanto tempo due ritmi diversi si ritrovano?",
    esempio: "Un autobus passa ogni 12 minuti, un altro ogni 18. Ripassano insieme dopo 36 minuti: è il loro minimo comune multiplo.",
    idea: "Il massimo comune divisore di due numeri è il più grande numero che li divide entrambi.\nIl minimo comune multiplo è il più piccolo numero che è multiplo di entrambi.\nPer 12 e 18 sono 6 e 36.\nSi trovano confrontando le scomposizioni in fattori primi.\nIl prodotto dei due numeri è uguale al prodotto di questi due valori.",
    perche_fa_pensare: "Due ritmi diversi prima o poi si ritrovano. La matematica sa dirti esattamente quando.",
    dove_si_usa: "Per sommare frazioni, organizzare turni, sincronizzare semafori e ingranaggi.",
    prerequisiti: [
      { id: 'fattorizzazione-in-primi', perche: "Si calcolano confrontando i fattori primi dei due numeri." }
    ],
    parenti: []
  },

  // Frazioni, decimali e proporzioni
  {
    id: 'frazioni', titolo: 'Frazioni', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['frazione', 'numeratore', 'denominatore', 'parti di un intero'],
    domanda: "Come si descrive una parte di un intero?",
    esempio: "Una pizza è tagliata in 8 fette. Se ne mangi 3, hai mangiato tre ottavi di pizza.",
    idea: "Una frazione indica una o più parti uguali di un intero.\nIl numero sotto, il denominatore, dice in quante parti dividi.\nIl numero sopra, il numeratore, dice quante parti prendi.\nUna frazione è anche una divisione: tre quarti è 3 diviso 4.\nFrazioni diverse possono indicare la stessa quantità, come un mezzo e due quarti.",
    perche_fa_pensare: "Una frazione è un numero o un'operazione? È tutte e due le cose, e questo doppio volto è la sua forza.",
    dove_si_usa: "Nelle ricette, negli sconti, nelle quote di una proprietà, nei ritmi musicali.",
    prerequisiti: [
      { id: 'moltiplicazione-divisione', perche: "Una frazione è una divisione scritta in un altro modo." }
    ],
    parenti: []
  },
  {
    id: 'operazioni-frazioni', titolo: 'Calcolare con le frazioni', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['somma di frazioni', 'prodotto di frazioni', 'semplificare frazioni', 'frazioni equivalenti', 'denominatore comune'],
    domanda: "Come si sommano pezzi tagliati in modo diverso?",
    esempio: "Mezza pizza più un terzo di pizza: dividi tutto in sesti. Fanno tre sesti più due sesti, cioè cinque sesti.",
    idea: "Per sommare due frazioni devi prima tagliarle in parti della stessa grandezza.\nCioè devi trovare un denominatore comune.\nPer moltiplicarle basta moltiplicare sopra con sopra e sotto con sotto.\nDividere per una frazione è come moltiplicare per la frazione capovolta.\nSemplificare vuol dire dividere sopra e sotto per lo stesso numero.",
    perche_fa_pensare: "Le regole delle frazioni sembrano arbitrarie, ma ognuna ha un perché. Scoprirlo cambia il rapporto con la matematica.",
    dove_si_usa: "Per adattare una ricetta, unire quote, calcolare uno sconto su un prezzo già scontato.",
    prerequisiti: [
      { id: 'frazioni', perche: "Si calcola con le frazioni dopo averle capite come parti di un intero." }
    ],
    parenti: [
      { id: 'mcd-mcm', perche: "Il minimo comune multiplo dà il denominatore comune più piccolo." }
    ]
  },
  {
    id: 'numeri-decimali', titolo: 'Numeri decimali', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['decimali', 'virgola', 'numeri con la virgola', 'cifre decimali'],
    domanda: "Cosa c'è dopo la virgola?",
    esempio: "Un prezzo di 2,35 euro vuol dire 2 euro, 3 decimi di euro e 5 centesimi.",
    idea: "I numeri decimali estendono il sistema posizionale a destra della virgola.\nLe cifre dopo la virgola valgono decimi, centesimi, millesimi.\nOgni frazione si può scrivere come decimale facendo la divisione.\nUn quarto, ad esempio, è 0,25.\nA volte le cifre dopo la virgola finiscono, a volte vanno avanti per sempre.",
    perche_fa_pensare: "Con i decimali puoi avvicinarti a una quantità quanto vuoi. Ma non sempre la raggiungi con un numero finito di cifre.",
    dove_si_usa: "Nei prezzi, nelle misure, nelle calcolatrici, nei voti.",
    prerequisiti: [
      { id: 'frazioni', perche: "Un decimale è un altro modo di scrivere una frazione." },
      { id: 'sistema-posizionale', perche: "Dopo la virgola i posti continuano: decimi, centesimi, millesimi." }
    ],
    parenti: []
  },
  {
    id: 'percentuali', titolo: 'Percentuali', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['percentuale', 'per cento', 'sconto', 'tasso'],
    domanda: "Perché si confronta tutto «su cento»?",
    esempio: "Uno sconto del 20 per cento su 50 euro vale 10 euro. Paghi 40 euro.",
    idea: "Una percentuale è una frazione con denominatore 100.\nIl 20 per cento vuol dire 20 parti su 100, cioè un quinto.\nServe a confrontare quantità di grandezza diversa con la stessa unità.\nAttenzione: aumentare del 10 per cento e poi diminuire del 10 per cento non riporta al valore iniziale.",
    perche_fa_pensare: "Le percentuali sembrano chiare, ma ingannano spesso. Un aumento del 100 per cento di un rischio minuscolo resta un rischio minuscolo.",
    dove_si_usa: "Negli sconti, nei tassi di interesse, nei sondaggi, nelle statistiche mediche.",
    prerequisiti: [
      { id: 'frazioni', perche: "Una percentuale è una frazione su cento." },
      { id: 'numeri-decimali', perche: "Il 20 per cento si scrive anche 0,20." }
    ],
    parenti: []
  },
  {
    id: 'rapporti-proporzioni', titolo: 'Rapporti e proporzioni', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['rapporto', 'proporzione', 'scala', 'in proporzione'],
    domanda: "Come si confrontano due grandezze?",
    esempio: "Su una mappa in scala 1 a 100.000, un centimetro corrisponde a un chilometro.",
    idea: "Un rapporto confronta due grandezze dividendo l'una per l'altra.\nUna proporzione dice che due rapporti sono uguali: ad esempio 2 sta a 3 come 4 sta a 6.\nNelle proporzioni, il prodotto dei due termini esterni è uguale al prodotto dei due interni.\nQuesto permette di trovare un termine sconosciuto.",
    perche_fa_pensare: "Due cose di grandezza diversa possono avere la stessa forma. Il rapporto cattura proprio ciò che resta uguale.",
    dove_si_usa: "Nelle mappe, nei modellini, nelle ricette, nelle miscele.",
    prerequisiti: [
      { id: 'frazioni', perche: "Un rapporto è una frazione tra due grandezze." }
    ],
    parenti: []
  },
  {
    id: 'proporzionalita', titolo: 'Proporzionalità diretta e inversa', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 1,
    sinonimi: ['proporzionalità diretta', 'proporzionalità inversa', 'direttamente proporzionale', 'inversamente proporzionale'],
    domanda: "Quando due grandezze crescono insieme?",
    esempio: "Il prezzo della frutta è proporzionale al peso. Il tempo di un viaggio è inversamente proporzionale alla velocità.",
    idea: "Due grandezze sono direttamente proporzionali se il loro rapporto resta costante.\nSe una raddoppia, raddoppia anche l'altra.\nSono inversamente proporzionali se resta costante il loro prodotto.\nIn quel caso, se una raddoppia, l'altra si dimezza.\nMolte relazioni reali non sono proporzionali, anche se a prima vista lo sembrano.",
    perche_fa_pensare: "Pensiamo spontaneamente in modo proporzionale, anche quando è sbagliato. Molti errori di giudizio nascono da qui.",
    dove_si_usa: "Nei prezzi al chilo, nei cambi di valuta, nei tempi di lavoro.",
    prerequisiti: [
      { id: 'rapporti-proporzioni', perche: "La proporzionalità è un rapporto che resta sempre lo stesso." }
    ],
    parenti: []
  },
  {
    id: 'numeri-razionali', titolo: 'Numeri razionali', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 2,
    sinonimi: ['razionali', 'frazioni positive e negative', 'insieme dei razionali'],
    domanda: "Basta una frazione per ogni quantità?",
    esempio: "Meno due gradi e mezzo, o un debito di tre quarti di euro: sono numeri razionali.",
    idea: "I numeri razionali sono tutti i numeri che si scrivono come frazione di due interi.\nIl denominatore non può essere zero.\nComprendono i numeri interi, positivi e negativi, e tutte le frazioni.\nIl loro sviluppo decimale finisce oppure si ripete all'infinito.\nCon i razionali puoi sempre sommare, sottrarre, moltiplicare e dividere, salvo dividere per zero.",
    perche_fa_pensare: "Per molto tempo si è pensato che ogni grandezza fosse una frazione. Scoprire che non è così fu uno shock.",
    dove_si_usa: "In ogni conto con frazioni, decimali finiti e numeri negativi.",
    prerequisiti: [
      { id: 'operazioni-frazioni', perche: "Con i razionali si calcola come con le frazioni." },
      { id: 'numeri-interi-relativi', perche: "I razionali comprendono anche le frazioni negative." }
    ],
    parenti: []
  },
  {
    id: 'densita-razionali', titolo: 'Tra due frazioni ce n\'è sempre un\'altra', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 2,
    sinonimi: ['densità dei razionali', 'razionali densi', 'densità'],
    domanda: "Tra due frazioni vicinissime c'è ancora spazio?",
    esempio: "Tra 0,1 e 0,11 c'è 0,105. Tra 0,1 e 0,105 c'è 0,1025. Puoi continuare per sempre.",
    idea: "Tra due numeri razionali diversi ce n'è sempre un altro, ad esempio la loro media.\nQuindi tra due razionali ce ne sono infiniti.\nSi dice che i razionali sono densi.\nEppure sulla retta restano dei buchi: punti che non corrispondono a nessuna frazione.",
    perche_fa_pensare: "Una cosa può essere fitta ovunque e comunque piena di buchi. È uno dei primi paradossi dell'infinito.",
    dove_si_usa: "Nelle misure: tra due valori puoi sempre trovarne uno intermedio più preciso.",
    prerequisiti: [
      { id: 'numeri-razionali', perche: "La proprietà riguarda i numeri razionali." }
    ],
    parenti: [
      { id: 'irrazionalita-radice-di-due', perche: "I buchi tra le frazioni sono i numeri irrazionali, come la radice di 2." }
    ]
  },
  {
    id: 'decimali-periodici', titolo: 'Decimali periodici', tipo: 'concetto', area: 'numeri', argomento: 'frazioni-e-proporzioni', livello: 2,
    sinonimi: ['periodico', 'numero periodico', 'zero virgola nove periodico', 'periodo', '0,999'],
    domanda: "Zero virgola nove periodico è uguale a uno?",
    esempio: "Un terzo è 0,333… con infinite cifre 3. Tre terzi sono 0,999…, ma tre terzi fanno anche 1.",
    idea: "Un decimale periodico ha un gruppo di cifre che si ripete all'infinito.\nOgni frazione dà un decimale finito oppure periodico.\nVale anche il contrario: ogni decimale periodico è una frazione.\nDa qui segue che 0,999… è esattamente 1, non un numero appena più piccolo.\nSono due scritture dello stesso numero.",
    perche_fa_pensare: "Molti si ribellano all'idea che 0,999… sia 1. La resistenza nasce dal pensare l'infinito come un processo che non finisce mai.",
    dove_si_usa: "Nel passaggio tra frazioni e decimali, e nelle calcolatrici che arrotondano.",
    prerequisiti: [
      { id: 'numeri-decimali', perche: "Il periodico è un decimale con infinite cifre che si ripetono." },
      { id: 'numeri-razionali', perche: "Ogni periodico corrisponde a una frazione." }
    ],
    parenti: [
      { id: 'serie-geometrica', perche: "0,999… è la somma infinita di 0,9 più 0,09 più 0,009, e così via." }
    ]
  },

  // Numeri negativi
  {
    id: 'numeri-interi-relativi', titolo: 'Numeri negativi', tipo: 'concetto', area: 'numeri', argomento: 'numeri-relativi', livello: 1,
    sinonimi: ['numeri negativi', 'interi relativi', 'interi', 'sotto zero', 'numeri con segno'],
    domanda: "Che senso ha un numero più piccolo di niente?",
    esempio: "Un termometro a meno 5 gradi, un conto in rosso di 200 euro, il piano meno uno di un garage.",
    idea: "I numeri negativi si ottengono mettendo un meno davanti ai naturali.\nInsieme a zero e ai positivi formano i numeri interi relativi.\nSulla retta stanno a sinistra dello zero.\nRendono sempre possibile la sottrazione: 3 meno 5 fa meno 2.\nLa distanza di un numero da zero si chiama [[valore-assoluto|valore assoluto]].",
    perche_fa_pensare: "Per molto tempo i negativi sono stati guardati con sospetto. Un numero «meno di niente» sembrava assurdo.",
    dove_si_usa: "Nelle temperature, nei bilanci, nelle quote sotto il livello del mare.",
    prerequisiti: [
      { id: 'addizione-sottrazione', perche: "Nascono per rendere sempre possibile la sottrazione." },
      { id: 'zero', perche: "Lo zero separa i numeri positivi da quelli negativi." }
    ],
    parenti: []
  },
  {
    id: 'regola-dei-segni', titolo: 'Regola dei segni', tipo: 'concetto', area: 'numeri', argomento: 'numeri-relativi', livello: 1,
    sinonimi: ['meno per meno', 'meno per meno fa più', 'segni', 'moltiplicazione con i negativi'],
    domanda: "Perché meno per meno fa più?",
    esempio: "Se qualcuno cancella tre tuoi debiti da 10 euro, il tuo saldo sale di 30 euro. Togliere un negativo è come aggiungere.",
    idea: "Quando moltiplichi due numeri, il segno del risultato segue una regola.\nSegni uguali danno un risultato positivo, segni diversi un risultato negativo.\nNon è una convenzione arbitraria.\nÈ l'unica scelta compatibile con la [[proprieta-operazioni|proprietà distributiva]].\nSe meno per meno facesse meno, le regole dei conti smetterebbero di funzionare.",
    perche_fa_pensare: "A volte una regola non si decide: si scopre che è l'unica coerente con le altre. La matematica ha meno libertà di quanto sembri.",
    dove_si_usa: "In ogni calcolo con numeri negativi, dall'algebra alla fisica.",
    prerequisiti: [
      { id: 'numeri-interi-relativi', perche: "La regola riguarda il prodotto tra numeri con segno." },
      { id: 'proprieta-operazioni', perche: "È la proprietà distributiva a obbligare meno per meno a fare più." }
    ],
    parenti: []
  },
  {
    id: 'valore-assoluto', titolo: 'Valore assoluto', tipo: 'concetto', area: 'numeri', argomento: 'numeri-relativi', livello: 2,
    sinonimi: ['modulo', 'distanza da zero'],
    domanda: "Quanto è lontano un numero da zero?",
    esempio: "Meno 4 gradi e più 4 gradi sono temperature diverse, ma distano entrambe 4 gradi dallo zero.",
    idea: "Il valore assoluto di un numero è la sua distanza da zero.\nSi ottiene togliendo il segno: il valore assoluto di meno 4 è 4.\nNon è mai negativo.\nLa distanza tra due numeri è il valore assoluto della loro differenza.\nQuesta idea di distanza torna in molte parti della matematica.",
    perche_fa_pensare: "Togliere il segno vuol dire guardare solo la grandezza, non la direzione. È una scelta di cosa conta.",
    dove_si_usa: "Per misurare errori, scarti dalla media, differenze di temperatura.",
    prerequisiti: [
      { id: 'numeri-interi-relativi', perche: "Il valore assoluto toglie il segno ai numeri negativi." }
    ],
    parenti: [
      { id: 'distanza-tra-punti', perche: "Anche sul piano la distanza dice quanto sono lontani due punti, senza segno." }
    ]
  },

  // Reali, complessi e oltre
  {
    id: 'irrazionalita-radice-di-due', titolo: 'La radice di 2 non è una frazione', tipo: 'teorema', area: 'numeri', argomento: 'numeri-reali-e-oltre', livello: 2,
    sinonimi: ['radice di 2 irrazionale', 'irrazionale', 'numeri irrazionali', 'incommensurabili', 'diagonale del quadrato'],
    domanda: "Ogni lunghezza si può misurare con una frazione?",
    esempio: "La diagonale di un quadrato di lato 1 è lunga la radice di 2. Nessuna frazione, per quanto precisa, la misura esattamente.",
    idea: "La radice di 2 non si può scrivere come frazione di due numeri interi.\nSi dimostra [[dimostrazione-per-assurdo|per assurdo]].\nSupponi che sia una frazione ridotta ai minimi termini.\nCon pochi passaggi, numeratore e denominatore risultano entrambi pari: una contraddizione.\nI numeri che non sono frazioni si chiamano irrazionali.",
    perche_fa_pensare: "La leggenda racconta che i pitagorici tennero segreta la scoperta. Vera o no, dice quanto turbasse: il mondo non era fatto solo di frazioni.",
    dove_si_usa: "Nei fogli A4: il rapporto tra il lato lungo e il lato corto è la radice di 2.",
    formula: {
      latex: '\\sqrt{2} \\neq \\frac{p}{q} \\quad \\text{per ogni coppia di interi } p, q',
      come_si_legge: "radice di due è diverso da p fratto q, per ogni coppia di interi p e q.",
      a_parole: "Non esistono due numeri interi il cui rapporto sia esattamente la radice di 2."
    },
    prerequisiti: [
      { id: 'radice-quadrata', perche: "Parla della radice quadrata di 2." },
      { id: 'numeri-razionali', perche: "Dimostra che la radice di 2 non è un numero razionale." },
      { id: 'dimostrazione-per-assurdo', perche: "La dimostrazione classica procede per assurdo." }
    ],
    parenti: [
      { id: 'teorema-di-pitagora', perche: "Pitagora dice che la diagonale di un quadrato di lato 1 è la radice di 2." }
    ]
  },
  {
    id: 'numeri-reali', titolo: 'Numeri reali', tipo: 'concetto', area: 'numeri', argomento: 'numeri-reali-e-oltre', livello: 2,
    sinonimi: ['reali', 'retta reale', 'retta dei numeri', 'continuo', 'irrazionali e razionali'],
    domanda: "Quali numeri servono per misurare ogni lunghezza?",
    esempio: "Ogni punto di un righello corrisponde a un numero. Alcuni sono frazioni, come 2,5. Altri no, come la radice di 2.",
    idea: "I numeri reali comprendono i razionali e gli irrazionali.\nCorrispondono a tutti i punti di una retta, senza buchi.\nOgni reale si può scrivere come decimale, finito o infinito.\nGli irrazionali hanno infinite cifre decimali che non si ripetono mai.\nIn realtà la loro costruzione precisa è più sottile di quanto sembri, e ha richiesto secoli.",
    perche_fa_pensare: "Quasi tutti i numeri reali non si possono descrivere con un numero finito di parole. Esistono davvero, o sono un'idealizzazione?",
    dove_si_usa: "In tutte le misure della fisica e dell'ingegneria, e in tutta l'analisi.",
    prerequisiti: [
      { id: 'irrazionalita-radice-di-due', perche: "Senza gli irrazionali la retta dei numeri avrebbe dei buchi." },
      { id: 'decimali-periodici', perche: "I razionali sono i decimali finiti o periodici; i reali li comprendono tutti, e altri ancora." }
    ],
    parenti: []
  },
  {
    id: 'numeri-complessi', titolo: 'Numeri complessi', tipo: 'concetto', area: 'numeri', argomento: 'numeri-reali-e-oltre', livello: 2,
    sinonimi: ['complessi', 'unità immaginaria', 'numeri immaginari', 'radice di meno uno', 'parte immaginaria'],
    domanda: "E se anche un numero negativo avesse una radice quadrata?",
    esempio: "Nessun numero reale, moltiplicato per sé stesso, dà meno 1. I complessi aggiungono un numero nuovo, chiamato i, che lo fa.",
    idea: "I numeri complessi nascono aggiungendo ai reali un numero i, il cui quadrato è meno 1.\nUn numero complesso ha una parte reale e una parte immaginaria, come 3 più 2i.\nSi calcola con le regole solite, ricordando che i per i fa meno 1.\nSi possono vedere come punti di un piano.\nCon loro, ogni [[equazione]] con [[monomi-polinomi|polinomi]] di grado almeno uno ha soluzione.",
    perche_fa_pensare: "Furono chiamati «immaginari» perché sembravano un trucco. Oggi la fisica quantistica non può farne a meno.",
    dove_si_usa: "In elettrotecnica, nell'elaborazione dei segnali e nella meccanica quantistica.",
    formula: {
      latex: 'i^2 = -1, \\qquad z = a + b\\,i',
      come_si_legge: "i al quadrato uguale meno uno; zeta uguale a più b per i.",
      a_parole: "Il numero i, moltiplicato per sé stesso, dà meno uno. Ogni numero complesso è una parte reale più un multiplo di i."
    },
    prerequisiti: [
      { id: 'numeri-reali', perche: "I complessi estendono i numeri reali." },
      { id: 'radice-quadrata', perche: "Nascono per dare una radice quadrata anche ai numeri negativi." }
    ],
    parenti: []
  },
  {
    id: 'quaternioni', titolo: 'Quaternioni', tipo: 'concetto', area: 'numeri', argomento: 'numeri-reali-e-oltre', livello: 3,
    sinonimi: ['quaternione', 'Hamilton', 'numeri ipercomplessi'],
    domanda: "Esistono numeri ancora più ricchi dei complessi?",
    esempio: "Nei videogiochi e nei droni, le rotazioni nello spazio si calcolano spesso con i quaternioni.",
    idea: "I quaternioni estendono i complessi con tre unità immaginarie, chiamate i, j e k.\nOgni quaternione ha quattro componenti.\nSi sommano e si moltiplicano, ma il prodotto non è commutativo: i per j è diverso da j per i.\nDescrivono in modo compatto le rotazioni nello spazio.\nLi scoprì William Rowan Hamilton nel 1843.",
    perche_fa_pensare: "Per avere numeri più ricchi bisogna rinunciare a una regola. Ogni estensione ha un prezzo.",
    dove_si_usa: "Nella grafica 3D, nella robotica e nel controllo dell'orientamento dei satelliti.",
    prerequisiti: [
      { id: 'numeri-complessi', perche: "I quaternioni estendono i complessi con altre unità immaginarie." }
    ],
    parenti: [
      { id: 'prodotto-vettoriale', perche: "Il prodotto vettoriale è nato in parte dalla moltiplicazione dei quaternioni." }
    ]
  },

  // Misura e stima
  {
    id: 'unita-di-misura', titolo: 'Grandezze e unità di misura', tipo: 'concetto', area: 'numeri', argomento: 'misura-e-stima', livello: 1,
    sinonimi: ['misura', 'unità di misura', 'grandezze', 'metro', 'sistema internazionale', 'equivalenze'],
    domanda: "Cosa vuol dire misurare una cosa?",
    esempio: "Dire che un tavolo è lungo 2 non basta: 2 metri, 2 piedi o 2 braccia? Serve un'unità.",
    idea: "Misurare vuol dire confrontare una grandezza con un'unità scelta come riferimento.\nIl risultato è un numero seguito dall'unità, come 2 metri.\nSe cambi unità cambia il numero, non la grandezza.\nOggi si usa quasi ovunque il Sistema internazionale: metro, chilogrammo, secondo.\nOgni misura reale ha un margine di errore.",
    perche_fa_pensare: "I numeri della fisica non sono numeri nudi. Portano con sé un'unità, cioè una scelta umana.",
    dove_si_usa: "In cucina, nei cantieri, in medicina, in ogni scienza sperimentale.",
    prerequisiti: [
      { id: 'numeri-decimali', perche: "Le misure si scrivono quasi sempre con i decimali." }
    ],
    parenti: []
  },
  {
    id: 'stime-approssimazioni', titolo: 'Arrotondare e stimare', tipo: 'concetto', area: 'numeri', argomento: 'misura-e-stima', livello: 1,
    sinonimi: ['stima', 'arrotondamento', 'approssimazione', 'calcolo a mente', 'più o meno'],
    domanda: "Quando conviene un numero quasi giusto?",
    esempio: "Al supermercato arrotondi 2,95 a 3 e 4,10 a 4. Sai subito che spenderai circa 7 euro.",
    idea: "Arrotondare vuol dire sostituire un numero con uno vicino e più comodo.\nStimare vuol dire calcolare in modo approssimato, per avere un'idea della risposta.\nUna buona stima dice se un risultato preciso è plausibile.\nPerò gli arrotondamenti accumulati possono produrre errori grandi.\nConta sapere di quanto ci si può sbagliare.",
    perche_fa_pensare: "La precisione assoluta quasi mai serve, e quasi mai è possibile. Sapere di quanto si sbaglia è già una forma di sapere.",
    dove_si_usa: "Nella spesa, nei preventivi, nel controllo dei risultati di una calcolatrice.",
    prerequisiti: [
      { id: 'numeri-decimali', perche: "Si arrotonda tagliando o correggendo le cifre decimali." }
    ],
    parenti: []
  },
  {
    id: 'notazione-scientifica', titolo: 'Notazione scientifica e ordini di grandezza', tipo: 'concetto', area: 'numeri', argomento: 'misura-e-stima', livello: 2,
    sinonimi: ['notazione esponenziale', 'ordine di grandezza', 'potenze di dieci', 'numeri grandissimi'],
    domanda: "Come si scrive un numero con venti zeri?",
    esempio: "La Terra dista dal Sole circa 150 milioni di chilometri. In notazione scientifica: 1,5 per 10 alla ottava chilometri.",
    idea: "La notazione scientifica scrive un numero come un decimale tra 1 e 10, moltiplicato per una potenza di 10.\nL'esponente dice di quanti posti spostare la virgola.\nUn esponente negativo indica numeri piccolissimi.\nL'ordine di grandezza è la potenza di 10 più vicina al numero.\nPermette di confrontare a colpo d'occhio quantità molto diverse.",
    perche_fa_pensare: "Tra un atomo e l'universo osservabile ci sono più di trenta ordini di grandezza. Senza questa notazione non potremmo nemmeno pensarli.",
    dove_si_usa: "In astronomia, chimica, biologia e sui display delle calcolatrici.",
    formula: {
      latex: '150\\,000\\,000 = 1{,}5 \\times 10^8',
      come_si_legge: "centocinquanta milioni uguale uno virgola cinque per dieci alla otto.",
      a_parole: "Un numero grande si scrive come un numero tra 1 e 10 moltiplicato per una potenza di dieci."
    },
    prerequisiti: [
      { id: 'potenze', perche: "Si basa sulle potenze di dieci." },
      { id: 'numeri-decimali', perche: "Il numero davanti alla potenza è un decimale." }
    ],
    parenti: [
      { id: 'stime-approssimazioni', perche: "L'ordine di grandezza è la stima più grossolana, e spesso la più utile." }
    ]
  },

  // Costruire i numeri
  {
    id: 'costruzione-interi-razionali', titolo: 'Interi e frazioni costruiti per equivalenza', tipo: 'concetto', area: 'numeri', argomento: 'costruzione-dei-numeri', livello: 3,
    sinonimi: ['classi di equivalenza', 'costruzione degli interi', 'costruzione dei razionali', 'coppie di numeri'],
    domanda: "Si possono costruire negativi e frazioni partendo dai numeri per contare?",
    esempio: "Un mezzo, due quarti e tre sesti sono scritture diverse. Le consideri lo stesso numero perché indicano la stessa quantità.",
    idea: "In matematica si costruiscono nuovi numeri a partire da quelli già noti.\nUna frazione si può vedere come una coppia di interi.\nDue coppie rappresentano lo stesso numero quando i prodotti incrociati sono uguali.\nIl numero razionale è l'intera famiglia di coppie equivalenti, detta classe di [[relazione-di-equivalenza|equivalenza]].\nAllo stesso modo un intero negativo nasce da coppie di naturali, pensate come differenze.",
    perche_fa_pensare: "Un numero diventa una famiglia di scritture che si equivalgono. Ciò che conta non è il simbolo, ma ciò che le scritture hanno in comune.",
    dove_si_usa: "Nei fondamenti della matematica e nei programmi di calcolo simbolico.",
    prerequisiti: [
      { id: 'relazione-di-equivalenza', perche: "Si raggruppano le coppie che rappresentano lo stesso numero." },
      { id: 'numeri-razionali', perche: "È il modo rigoroso di costruire i razionali." }
    ],
    parenti: []
  },
  {
    id: 'sezioni-di-dedekind', titolo: 'Costruire i reali: le sezioni di Dedekind', tipo: 'concetto', area: 'numeri', argomento: 'costruzione-dei-numeri', livello: 3,
    sinonimi: ['tagli di Dedekind', 'costruzione dei reali', 'Dedekind', 'sezioni'],
    domanda: "Come si costruisce un numero che non è una frazione?",
    esempio: "Metti in un gruppo le frazioni negative e quelle con quadrato minore di 2, nell'altro tutte le altre. Il confine tra i due gruppi è la radice di 2.",
    idea: "Una sezione di Dedekind divide i numeri razionali in due gruppi.\nTutti quelli del primo gruppo sono più piccoli di tutti quelli del secondo.\nA volte il confine è una frazione, a volte no.\nQuando non lo è, il taglio definisce un numero irrazionale.\nI numeri reali sono, per definizione, tutti questi tagli.",
    perche_fa_pensare: "Un numero viene definito dal posto in cui taglia gli altri. È un'idea di numero come posizione, più che come quantità.",
    dove_si_usa: "Nei fondamenti dell'analisi, per dimostrare con rigore le proprietà dei reali.",
    prerequisiti: [
      { id: 'numeri-razionali', perche: "Si tagliano in due gruppi i numeri razionali." },
      { id: 'completezza-dei-reali', perche: "La costruzione serve a garantire che i reali non abbiano buchi." }
    ],
    parenti: [
      { id: 'successione-di-cauchy', perche: "Un'altra costruzione dei reali usa successioni di frazioni che si stringono sempre di più." }
    ]
  },
  {
    id: 'costruzione-dei-naturali', titolo: 'Costruire i naturali con gli insiemi', tipo: 'concetto', area: 'numeri', argomento: 'costruzione-dei-numeri', livello: 4,
    sinonimi: ['numerali di von Neumann', 'naturali come insiemi', 'von Neumann'],
    domanda: "Si può costruire il numero tre partendo dal nulla?",
    esempio: "Lo zero è l'insieme vuoto. L'uno è l'insieme che contiene lo zero. Il due contiene lo zero e l'uno. E così via.",
    idea: "Nella teoria degli insiemi i numeri naturali si costruiscono a partire dall'insieme vuoto.\nOgni numero è l'insieme di tutti i numeri che lo precedono.\nCosì il tre contiene esattamente tre elementi.\nQuesta costruzione si deve a John von Neumann.\nMostra che bastano gli [[assiomi-zfc|assiomi degli insiemi]] per ottenere tutta l'aritmetica.",
    perche_fa_pensare: "Se i numeri si costruiscono dal vuoto, cosa sono davvero? Forse nient'altro che una struttura ben organizzata.",
    dove_si_usa: "Nei fondamenti della matematica e nei programmi che verificano le dimostrazioni.",
    prerequisiti: [
      { id: 'assiomi-zfc', perche: "La costruzione usa solo gli assiomi della teoria degli insiemi." },
      { id: 'assiomi-di-peano', perche: "Gli insiemi costruiti così soddisfano gli assiomi di Peano." }
    ],
    parenti: [
      { id: 'numeri-ordinali', perche: "La stessa costruzione, proseguita oltre i naturali, dà i numeri ordinali." }
    ]
  },
  {
    id: 'numeri-iperreali', titolo: 'Infinitesimi e analisi non standard', tipo: 'concetto', area: 'numeri', argomento: 'costruzione-dei-numeri', livello: 4,
    sinonimi: ['infinitesimi', 'analisi non standard', 'iperreali', 'Robinson', 'numeri infinitamente piccoli'],
    domanda: "Esistono davvero numeri infinitamente piccoli?",
    esempio: "Leibniz ragionava con quantità «infinitamente piccole» per calcolare le pendenze delle curve. Per secoli sembrò un trucco senza basi solide.",
    idea: "Gli iperreali estendono i reali con numeri infinitesimi e numeri infiniti.\nUn infinitesimo positivo è più piccolo di qualsiasi numero reale positivo.\nAbraham Robinson, negli anni Sessanta del Novecento, li rese rigorosi con la logica matematica.\nCon loro si può fare l'analisi senza la [[definizione-epsilon-delta|definizione rigorosa di limite]].\nI teoremi che si ottengono sono gli stessi dell'analisi classica.",
    perche_fa_pensare: "Un'idea scartata come confusa è tornata, tre secoli dopo, perfettamente rigorosa. Ciò che è «impossibile» dipende dagli strumenti.",
    dove_si_usa: "Nella ricerca sui fondamenti e in alcuni corsi di analisi che partono dagli infinitesimi.",
    prerequisiti: [
      { id: 'numeri-reali', perche: "Gli iperreali estendono i numeri reali." },
      { id: 'modelli-e-verita', perche: "La loro costruzione usa la teoria dei modelli, una parte della logica." },
      { id: 'limite-di-funzione', perche: "Offrono un altro modo di trattare i limiti." }
    ],
    parenti: [
      { id: 'definizione-epsilon-delta', perche: "Sono due strade diverse per rendere rigoroso il calcolo infinitesimale." }
    ]
  }
]);
