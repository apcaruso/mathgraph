/* Teoria dei numeri */
Mappa.registra([
  // Numeri primi
  {
    id: 'crivello-di-eratostene', titolo: 'Crivello di Eratostene', tipo: 'concetto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 1,
    sinonimi: ['crivello', 'Eratostene', 'setaccio', 'trovare i numeri primi'],
    domanda: "Come si trovano tutti i numeri primi fino a cento?",
    esempio: "Scrivi i numeri da 2 a 100. Cancella i multipli di 2, poi quelli di 3, poi quelli di 5 e di 7. Restano solo i primi.",
    idea: "Il crivello di Eratostene è un metodo per elencare i numeri primi fino a un certo limite.\nSi parte da 2, che è primo, e si cancellano tutti i suoi multipli.\nIl primo numero rimasto è primo: si cancellano i suoi multipli, e così via.\nAlla fine restano soltanto i numeri primi.\nEratostene era uno studioso greco del terzo secolo avanti Cristo, che misurò anche la circonferenza della Terra.",
    perche_fa_pensare: "Invece di controllare ogni numero, si eliminano quelli che non vanno bene. A volte è più facile escludere che trovare.",
    dove_si_usa: "Nei programmi che generano tabelle di numeri primi, e come primo esempio di algoritmo.",
    prerequisiti: [
      { id: 'numeri-primi', perche: "Serve a trovare i numeri primi." }
    ],
    parenti: [
      { id: 'algoritmo', perche: "È uno dei più antichi algoritmi conosciuti." }
    ]
  },
  {
    id: 'infinita-dei-primi', titolo: 'I numeri primi sono infiniti', tipo: 'teorema', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 2,
    sinonimi: ['infinità dei primi', 'teorema di Euclide', 'quanti sono i primi', 'primi infiniti'],
    domanda: "I numeri primi finiscono, prima o poi?",
    esempio: "Prendi i primi 2, 3 e 5. Moltiplicali e aggiungi 1: ottieni 31. Nessuno dei tre divide 31, quindi c'è un primo che non era nella lista.",
    idea: "Euclide dimostrò, circa 2300 anni fa, che i numeri primi sono infiniti.\nSupponi per assurdo di avere la lista completa dei primi.\nMoltiplicali tutti e aggiungi 1.\nIl numero ottenuto, diviso per ciascun primo della lista, dà resto 1.\nQuindi i suoi fattori primi non sono nella lista, che allora non era completa.",
    perche_fa_pensare: "Con poche righe si dimostra un fatto su infiniti numeri, senza poterli mai controllare tutti. È una delle dimostrazioni più belle della storia.",
    dove_si_usa: "In teoria dei numeri e in crittografia, che ha bisogno di primi sempre nuovi e sempre più grandi.",
    prerequisiti: [
      { id: 'fattorizzazione-in-primi', perche: "Ogni numero ha almeno un fattore primo." },
      { id: 'dimostrazione-per-assurdo', perche: "La dimostrazione è per assurdo." }
    ],
    parenti: []
  },
  {
    id: 'numeri-perfetti', titolo: 'Numeri perfetti', tipo: 'concetto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 2,
    sinonimi: ['numero perfetto', 'primi di Mersenne', 'somma dei divisori', '6 e 28'],
    domanda: "Quali numeri sono la somma dei propri divisori?",
    esempio: "I divisori di 6, escluso 6, sono 1, 2 e 3. La loro somma è proprio 6. Anche 28 ha questa proprietà.",
    idea: "Un numero è perfetto se è uguale alla somma dei suoi divisori, escluso sé stesso.\nI primi numeri perfetti sono 6, 28, 496 e 8128.\nEuclide trovò un modo per costruirli a partire da certi numeri primi, oggi detti primi di Mersenne.\nEulero dimostrò che tutti i numeri perfetti pari si ottengono in quel modo.\nNon si sa se esistano numeri perfetti dispari, né se i numeri perfetti siano infiniti.",
    perche_fa_pensare: "Una domanda che un bambino capisce resta aperta da più di duemila anni. I numeri interi nascondono misteri semplici e profondi.",
    dove_si_usa: "Nella ricerca dei più grandi numeri primi conosciuti, che sono quasi sempre primi di Mersenne.",
    prerequisiti: [
      { id: 'multipli-divisori', perche: "Si sommano i divisori di un numero." },
      { id: 'potenze', perche: "La costruzione di Euclide usa le potenze di 2." }
    ],
    parenti: []
  },
  {
    id: 'congettura-di-goldbach', titolo: 'Congettura di Goldbach', tipo: 'problema-aperto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 2,
    sinonimi: ['Goldbach', 'somma di due primi', 'congettura forte di Goldbach', 'numeri pari'],
    domanda: "Ogni numero pari è la somma di due primi?",
    esempio: "4 è 2 più 2. 10 è 3 più 7. 100 è 47 più 53. Funziona per ogni numero pari mai controllato.",
    idea: "La congettura di Goldbach dice che ogni numero pari maggiore di 2 è la somma di due numeri primi.\nChristian Goldbach la propose a Eulero in una lettera del 1742.\nÈ stata verificata con i computer per tutti i numeri pari fino a 18 cifre.\nNessuno, però, è mai riuscito a dimostrarla.\nUna versione più debole, con tre primi per i numeri dispari, è stata dimostrata nel 2013.",
    perche_fa_pensare: "Miliardi di verifiche non sono una dimostrazione. In matematica, un solo controesempio basterebbe a far cadere tutto.",
    dove_si_usa: "È un problema di ricerca pura, che ha stimolato nuovi metodi in teoria dei numeri.",
    prerequisiti: [
      { id: 'numeri-primi', perche: "Parla di somme di numeri primi." }
    ],
    parenti: []
  },
  {
    id: 'congettura-dei-primi-gemelli', titolo: 'Congettura dei primi gemelli', tipo: 'problema-aperto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 2,
    sinonimi: ['primi gemelli', 'coppie di primi', 'Yitang Zhang', 'distanza tra primi'],
    domanda: "Esistono infinite coppie di primi che distano solo 2?",
    esempio: "3 e 5, 11 e 13, 41 e 43 sono primi gemelli. Se ne trovano anche tra numeri con centinaia di migliaia di cifre.",
    idea: "Due numeri primi sono gemelli se la loro differenza è 2.\nLa congettura dice che le coppie di primi gemelli sono infinite.\nNon è ancora stata dimostrata.\nNel 2013 Yitang Zhang dimostrò che esistono infinite coppie di primi a distanza minore di 70 milioni.\nIn seguito, una collaborazione aperta online ha abbassato quella distanza a 246.",
    perche_fa_pensare: "Da 70 milioni a 246 c'è un salto enorme, ma da 246 a 2 forse serve un'idea del tutto nuova. A volte l'ultimo passo è il più difficile.",
    dove_si_usa: "È un problema di ricerca pura sulla distribuzione dei numeri primi.",
    prerequisiti: [
      { id: 'infinita-dei-primi', perche: "Raffina la domanda: non solo infiniti primi, ma infinite coppie vicine." }
    ],
    parenti: [
      { id: 'congettura-di-goldbach', perche: "Entrambe chiedono come i primi si combinano tra loro con somme e differenze." }
    ]
  },
  {
    id: 'test-di-primalita', titolo: 'Test di primalità', tipo: 'concetto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 3,
    sinonimi: ['primalità', 'test di Miller-Rabin', 'AKS', 'verificare se un numero è primo'],
    domanda: "Come si capisce se un numero di trecento cifre è primo?",
    esempio: "Per creare una chiave sicura, il tuo telefono cerca numeri primi di centinaia di cifre. Li verifica in una frazione di secondo.",
    idea: "Provare tutti i divisori è impossibile per numeri molto grandi.\nI test di primalità usano proprietà dei primi, come il [[piccolo-teorema-di-fermat|piccolo teorema di Fermat]].\nAlcuni test sono probabilistici: possono sbagliare, ma con probabilità piccolissima.\nNel 2002 tre ricercatori indiani trovarono un test veloce e sempre corretto.\nCapire se un numero è primo è molto più facile che trovarne i fattori.",
    perche_fa_pensare: "Si può sapere con certezza che un numero non è primo senza conoscere nessuno dei suoi divisori. Sapere che qualcosa esiste è diverso dal saperlo trovare.",
    dove_si_usa: "Nella generazione delle chiavi crittografiche, ogni volta che apri un sito protetto.",
    prerequisiti: [
      { id: 'piccolo-teorema-di-fermat', perche: "Molti test si basano su questo teorema." },
      { id: 'algoritmo', perche: "Un test di primalità è un algoritmo." }
    ],
    parenti: [
      { id: 'algoritmi-probabilistici', perche: "I test più usati sono algoritmi probabilistici." },
      { id: 'classe-p', perche: "Nel 2002 si è dimostrato che riconoscere i primi è un problema della classe P." }
    ]
  },
  {
    id: 'fattorizzazione-di-grandi-numeri', titolo: 'Il problema di scomporre grandi numeri', tipo: 'concetto', area: 'teoria-numeri', argomento: 'primi-e-distribuzione', livello: 3,
    sinonimi: ['fattorizzazione', 'scomporre grandi numeri', 'fattorizzazione intera', 'algoritmo di Shor'],
    domanda: "Perché è così difficile scomporre un numero grande in fattori primi?",
    esempio: "Moltiplicare due primi di cento cifre richiede un istante. Ritrovarli partendo dal prodotto richiederebbe, con i metodi noti, tempi enormi.",
    idea: "Ogni numero si scompone in fattori primi in un solo modo, ma trovarli può essere difficilissimo.\nPer numeri di centinaia di cifre, i migliori metodi conosciuti richiederebbero tempi lunghissimi.\nNessuno ha mai dimostrato che un metodo veloce non esista.\nSu questa difficoltà si basa la sicurezza della crittografia [[rsa|RSA]].\nUn computer quantistico abbastanza grande potrebbe scomporre i numeri in fretta, con l'algoritmo di Shor.",
    perche_fa_pensare: "La sicurezza di molte comunicazioni si basa su un problema che crediamo difficile, ma che nessuno ha dimostrato difficile.",
    dove_si_usa: "In crittografia, per valutare quanto sono sicure le chiavi.",
    prerequisiti: [
      { id: 'fattorizzazione-in-primi', perche: "Si cercano i fattori primi di un numero." },
      { id: 'complessita-computazionale', perche: "La difficoltà si misura con la complessità degli algoritmi." }
    ],
    parenti: [
      { id: 'test-di-primalita', perche: "Capire se un numero è primo è facile, trovarne i fattori no." }
    ]
  },

  // Aritmetica modulare
  {
    id: 'algoritmo-di-euclide', titolo: 'Algoritmo di Euclide', tipo: 'concetto', area: 'teoria-numeri', argomento: 'congruenze', livello: 2,
    sinonimi: ['Euclide', 'algoritmo euclideo', 'calcolo del massimo comune divisore', 'divisioni successive'],
    domanda: "Come si trova il massimo comune divisore senza scomporre i numeri?",
    esempio: "Prendi 48 e 18. 48 diviso 18 dà resto 12. 18 diviso 12 dà resto 6. 12 diviso 6 dà resto 0. Il massimo comune divisore è 6.",
    idea: "L'algoritmo di Euclide calcola il massimo comune divisore di due numeri.\nSi divide il più grande per il più piccolo e si tiene il resto.\nPoi si ripete con il numero più piccolo e il resto.\nQuando il resto diventa zero, l'ultimo resto non nullo è il massimo comune divisore.\nCompare negli Elementi di Euclide ed è uno degli algoritmi più antichi ancora in uso.",
    perche_fa_pensare: "Un procedimento di oltre duemila anni fa gira ancora, ogni giorno, nei computer di tutto il mondo.",
    dove_si_usa: "In crittografia, nella semplificazione di frazioni, nei programmi di calcolo.",
    prerequisiti: [
      { id: 'mcd-mcm', perche: "Calcola il massimo comune divisore." },
      { id: 'divisione-con-resto', perche: "Si basa su divisioni con resto ripetute." }
    ],
    parenti: [
      { id: 'algoritmo', perche: "È l'esempio classico di algoritmo." }
    ]
  },
  {
    id: 'identita-di-bezout', titolo: 'Identità di Bézout', tipo: 'teorema', area: 'teoria-numeri', argomento: 'congruenze', livello: 3,
    sinonimi: ['Bézout', 'identità di Bezout', 'combinazione intera', 'algoritmo di Euclide esteso'],
    domanda: "Con due misurini da 3 e 5 litri, si può misurare un litro esatto?",
    esempio: "Riempi due volte il misurino da 3 litri e versalo in quello da 5. Avanza esattamente 1 litro.",
    idea: "L'identità di Bézout riguarda due numeri interi e il loro massimo comune divisore.\nDice che il massimo comune divisore si scrive sempre come somma di multipli dei due numeri.\nI multipli possono essere anche negativi.\nPer 3 e 5, ad esempio, 1 è due volte 3 meno una volta 5.\nI coefficienti si trovano ripercorrendo all'indietro l'[[algoritmo-di-euclide|algoritmo di Euclide]].",
    perche_fa_pensare: "Un enigma da indovinelli, i travasi con i misurini, è un teorema di teoria dei numeri.",
    dove_si_usa: "In crittografia, per calcolare gli inversi modulari nelle chiavi RSA.",
    formula: {
      latex: '\\text{MCD}(a,b) = a x + b y \\quad \\text{con } x, y \\text{ interi}',
      come_si_legge: "il massimo comune divisore di a e b è uguale ad a per x più b per y. Qui x e y sono numeri interi.",
      a_parole: "Il massimo comune divisore di due numeri si ottiene sommando multipli interi dei due numeri."
    },
    prerequisiti: [
      { id: 'algoritmo-di-euclide', perche: "I coefficienti si trovano con l'algoritmo di Euclide." },
      { id: 'numeri-interi-relativi', perche: "I coefficienti possono essere negativi." }
    ],
    parenti: []
  },
  {
    id: 'aritmetica-modulare', titolo: 'Aritmetica dell\'orologio (congruenze)', tipo: 'concetto', area: 'teoria-numeri', argomento: 'congruenze', livello: 2,
    sinonimi: ['congruenze', 'modulo', 'aritmetica dell\'orologio', 'resti', 'mod'],
    domanda: "Cosa succede se i numeri girano in tondo, come le ore?",
    esempio: "Sono le 10 e devi aspettare 5 ore. Non saranno le 15 sull'orologio a lancette, ma le 3. Hai contato «modulo 12».",
    idea: "Nell'aritmetica modulare si contano i numeri in cerchio, ripartendo da zero dopo un certo valore.\nQuel valore si chiama modulo.\nDue numeri sono congruenti se danno lo stesso resto nella divisione per il modulo.\nSomme e prodotti si possono calcolare usando solo i resti.\nGauss la rese uno strumento sistematico nel 1801.",
    perche_fa_pensare: "Guardare solo i resti fa perdere informazione, eppure rivela strutture nascoste. Dimenticare il superfluo aiuta a vedere.",
    dove_si_usa: "In crittografia, nei codici di controllo come quello del codice fiscale, nei calendari.",
    prerequisiti: [
      { id: 'divisione-con-resto', perche: "Si lavora con i resti delle divisioni." }
    ],
    parenti: [
      { id: 'cifrario-di-cesare', perche: "Il cifrario di Cesare sposta le lettere in modo circolare, come l'aritmetica modulare." }
    ]
  },
  {
    id: 'piccolo-teorema-di-fermat', titolo: 'Piccolo teorema di Fermat', tipo: 'teorema', area: 'teoria-numeri', argomento: 'congruenze', livello: 3,
    sinonimi: ['Fermat', 'piccolo teorema', 'teorema di Fermat sulle congruenze', 'test di Fermat'],
    domanda: "Cosa succede se si elevano i numeri a una potenza prima?",
    esempio: "2 alla quinta fa 32, e 32 diviso 5 dà resto 2. Con un numero primo al posto di 5, il resto torna sempre il numero di partenza.",
    idea: "Il piccolo teorema di Fermat riguarda un numero primo p e un qualsiasi numero intero.\nSe elevi il numero alla p e dividi per p, ottieni come resto il numero di partenza.\nFermat lo enunciò nel 1640, senza dimostrarlo.\nLa prima dimostrazione pubblicata è di Eulero.\nSe un numero non rispetta questa proprietà, sicuramente non è primo.",
    perche_fa_pensare: "Un teorema nato dalla curiosità pura oggi protegge i pagamenti online. Nessuno, allora, poteva prevederlo.",
    dove_si_usa: "Nei test di primalità e nella crittografia RSA.",
    formula: {
      latex: 'a^p \\equiv a \\pmod{p}',
      come_si_legge: "a alla p è congruo ad a modulo p.",
      a_parole: "Se p è primo, a alla p e a danno lo stesso resto nella divisione per p."
    },
    prerequisiti: [
      { id: 'aritmetica-modulare', perche: "È un teorema sui resti." },
      { id: 'numeri-primi', perche: "Vale quando il modulo è un numero primo." },
      { id: 'potenze', perche: "Riguarda le potenze." }
    ],
    parenti: [
      { id: 'teorema-di-lagrange', perche: "È un caso particolare del teorema di Lagrange sui gruppi." }
    ]
  },
  {
    id: 'funzione-phi-di-eulero', titolo: 'Funzione di Eulero e teorema di Eulero', tipo: 'teorema', area: 'teoria-numeri', argomento: 'congruenze', livello: 3,
    sinonimi: ['phi di Eulero', 'funzione totiente', 'teorema di Eulero', 'numeri coprimi'],
    domanda: "Quanti numeri non hanno divisori in comune con un numero dato?",
    esempio: "Tra 1 e 10, i numeri senza divisori in comune con 10 sono 1, 3, 7 e 9. Sono quattro.",
    idea: "La funzione di Eulero conta quanti numeri, da 1 a n, non hanno divisori in comune con n.\nPer un numero primo p, sono tutti tranne p: quindi p meno 1.\nIl teorema di Eulero generalizza il piccolo teorema di Fermat a moduli qualsiasi.\nUsa la funzione di Eulero come esponente.\nÈ il cuore matematico della crittografia [[rsa|RSA]].",
    perche_fa_pensare: "Un conteggio semplice sui numeri piccoli governa le potenze di numeri enormi. Piccolo e grande sono legati.",
    dove_si_usa: "Nella crittografia RSA, per costruire la chiave pubblica e quella privata.",
    prerequisiti: [
      { id: 'piccolo-teorema-di-fermat', perche: "Il teorema di Eulero lo generalizza." },
      { id: 'mcd-mcm', perche: "Si contano i numeri con massimo comune divisore uguale a 1." }
    ],
    parenti: []
  },
  {
    id: 'teorema-cinese-del-resto', titolo: 'Teorema cinese del resto', tipo: 'teorema', area: 'teoria-numeri', argomento: 'congruenze', livello: 3,
    sinonimi: ['teorema cinese', 'resti cinesi', 'Sunzi', 'sistemi di congruenze'],
    domanda: "Conoscendo i resti di una divisione per 3, per 5 e per 7, si ritrova il numero?",
    esempio: "Un numero diviso per 3 dà resto 2, per 5 dà resto 3, per 7 dà resto 2. Il più piccolo è 23.",
    idea: "Il teorema cinese del resto riguarda i resti di un numero rispetto a più moduli.\nSe i moduli non hanno divisori in comune, i resti individuano il numero.\nPrecisamente, lo individuano a meno di multipli del prodotto dei moduli.\nIl problema compare in un testo cinese di matematica di circa 1600 anni fa.\nPermette di spezzare un calcolo grande in tanti calcoli piccoli.",
    perche_fa_pensare: "Un numero si può descrivere con i suoi resti, come un oggetto con le sue ombre da diverse direzioni.",
    dove_si_usa: "In crittografia per accelerare i calcoli, nei calendari, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'aritmetica-modulare', perche: "Riguarda sistemi di congruenze." },
      { id: 'identita-di-bezout', perche: "La soluzione si costruisce con l'identità di Bézout." }
    ],
    parenti: []
  },
  {
    id: 'reciprocita-quadratica', titolo: 'Legge di reciprocità quadratica', tipo: 'teorema', area: 'teoria-numeri', argomento: 'congruenze', livello: 4,
    sinonimi: ['reciprocità quadratica', 'residui quadratici', 'teorema aureo', 'simbolo di Legendre'],
    domanda: "Quando un numero è un quadrato, nell'aritmetica dell'orologio?",
    esempio: "Modulo 7, i quadrati danno come resti solo 0, 1, 2 e 4. Il numero 3 non è mai il resto di un quadrato.",
    idea: "Un numero è un residuo quadratico se è il resto di un quadrato rispetto a un certo modulo.\nLa legge di reciprocità lega due numeri primi diversi, p e q.\nSapere se p è un quadrato modulo q dice se q è un quadrato modulo p.\nFu intuita da Eulero e Legendre e dimostrata per la prima volta da Gauss nel 1796.\nGauss la chiamò «teorema aureo» e ne trovò in tutto otto dimostrazioni diverse.",
    perche_fa_pensare: "Due domande che sembrano indipendenti hanno risposte legate in modo misterioso. Cercare di capire perché ha generato secoli di matematica.",
    dove_si_usa: "In teoria dei numeri, nei test di primalità, in crittografia.",
    prerequisiti: [
      { id: 'piccolo-teorema-di-fermat', perche: "Le dimostrazioni usano il piccolo teorema di Fermat." }
    ],
    parenti: []
  },

  // Equazioni diofantee
  {
    id: 'equazioni-diofantee', titolo: 'Equazioni diofantee', tipo: 'concetto', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 2,
    sinonimi: ['equazione diofantea', 'Diofanto', 'soluzioni intere', 'equazioni in numeri interi'],
    domanda: "Quali equazioni hanno soluzioni con numeri interi?",
    esempio: "Hai solo monete da 5 e da 7 centesimi. Puoi pagare esattamente 24 centesimi? Sì: due da 5 e due da 7.",
    idea: "Un'equazione diofantea è un'equazione di cui si cercano solo le soluzioni intere.\nPrendono il nome da Diofanto di Alessandria, matematico greco dell'antichità.\nAlcune hanno infinite soluzioni, altre nessuna.\nLe equazioni di primo grado si risolvono con l'[[algoritmo-di-euclide|algoritmo di Euclide]].\nPer quelle di grado più alto non esiste un metodo generale: lo dice il [[decimo-problema-di-hilbert|decimo problema di Hilbert]].",
    perche_fa_pensare: "Chiedere soluzioni intere rende un problema molto più difficile. Le restrizioni, a volte, creano la profondità.",
    dove_si_usa: "In crittografia, nei problemi di pianificazione, nei problemi con oggetti che non si possono dividere.",
    prerequisiti: [
      { id: 'equazioni-di-primo-grado', perche: "Il caso più semplice è un'equazione di primo grado." },
      { id: 'numeri-interi-relativi', perche: "Si cercano soluzioni intere." }
    ],
    parenti: []
  },
  {
    id: 'terne-pitagoriche', titolo: 'Terne pitagoriche', tipo: 'concetto', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 2,
    sinonimi: ['terna pitagorica', '3 4 5', 'triangoli rettangoli interi', 'Plimpton 322'],
    domanda: "Quali triangoli rettangoli hanno tutti i lati interi?",
    esempio: "Un triangolo con lati 3, 4 e 5 è rettangolo. Gli antichi costruttori usavano una corda con 12 nodi per tracciare angoli retti.",
    idea: "Una terna pitagorica è un gruppo di tre numeri interi che rispettano il [[teorema-di-pitagora|teorema di Pitagora]].\nEsempi sono 3, 4, 5 e 5, 12, 13.\nLe terne pitagoriche sono infinite.\nEsiste una formula, già nota a Euclide, che le produce tutte.\nUna tavoletta babilonese di quasi quattromila anni fa sembra elencarne molte.",
    perche_fa_pensare: "Una domanda geometrica diventa una domanda sui numeri interi. E da qui nasce l'ultimo teorema di Fermat.",
    dove_si_usa: "In edilizia per tracciare angoli retti, nei problemi di geometria, in teoria dei numeri.",
    formula: {
      latex: 'a^2 + b^2 = c^2',
      come_si_legge: "a al quadrato più b al quadrato uguale c al quadrato.",
      a_parole: "Tre numeri interi tali che la somma dei quadrati dei primi due sia il quadrato del terzo."
    },
    prerequisiti: [
      { id: 'teorema-di-pitagora', perche: "Sono le soluzioni intere del teorema di Pitagora." },
      { id: 'equazioni-diofantee', perche: "Si cercano soluzioni intere di un'equazione." }
    ],
    parenti: []
  },
  {
    id: 'ultimo-teorema-di-fermat', titolo: 'Ultimo teorema di Fermat', tipo: 'teorema', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 3,
    sinonimi: ['Fermat', 'teorema di Fermat-Wiles', 'Andrew Wiles', 'grande teorema di Fermat'],
    domanda: "Esistono cubi che sommati danno un cubo?",
    esempio: "Ci sono infiniti quadrati che sommati danno un quadrato, come 9 più 16 uguale 25. Con i cubi, invece, non funziona mai.",
    idea: "Il teorema dice che la somma di due cubi non è mai un cubo, se i numeri sono interi positivi.\nVale lo stesso per tutte le potenze più grandi del quadrato.\nIntorno al 1637 Fermat scrisse a margine di un libro di avere una dimostrazione, che non ci stava.\nPer più di 350 anni nessuno riuscì a dimostrarlo.\nAndrew Wiles lo dimostrò nel 1994, collegando le [[curve-ellittiche|curve ellittiche]] alle [[forme-modulari|forme modulari]].",
    perche_fa_pensare: "Un enunciato da scuola media ha richiesto la matematica più avanzata del Novecento. Probabilmente Fermat si sbagliava sulla sua dimostrazione.",
    dove_si_usa: "La dimostrazione ha creato strumenti oggi centrali nella teoria dei numeri.",
    formula: {
      latex: 'x^n + y^n = z^n \\quad \\text{non ha soluzioni intere positive per } n > 2',
      come_si_legge: "x alla n più y alla n uguale z alla n. Non ha soluzioni intere positive quando n è maggiore di due.",
      a_parole: "Nessuna potenza oltre il quadrato si può scrivere come somma di due potenze uguali."
    },
    prerequisiti: [
      { id: 'terne-pitagoriche', perche: "Generalizza la domanda delle terne pitagoriche alle potenze più alte." }
    ],
    parenti: [
      { id: 'curve-ellittiche', perche: "La dimostrazione passa attraverso le curve ellittiche." },
      { id: 'forme-modulari', perche: "Il punto chiave è legare le curve ellittiche alle forme modulari." },
      { id: 'interi-algebrici', perche: "I primi tentativi di dimostrazione portarono a inventare gli interi algebrici." }
    ]
  },
  {
    id: 'equazione-di-pell', titolo: 'Equazione di Pell', tipo: 'concetto', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 3,
    sinonimi: ['Pell', 'equazione di Pell-Fermat', 'Brahmagupta', 'metodo chakravala'],
    domanda: "Quali quadrati sono quasi multipli di un altro quadrato?",
    esempio: "3 al quadrato fa 9, e 2 per 2 al quadrato fa 8: la differenza è 1. Per 61 al posto di 2, la soluzione più piccola ha dieci cifre.",
    idea: "L'equazione di Pell chiede due numeri interi.\nIl quadrato del primo, meno n volte il quadrato del secondo, deve dare 1.\nSe n non è un quadrato, le soluzioni sono infinite, ma possono essere enormi anche per n piccolo.\nI matematici indiani Brahmagupta e Bhaskara la studiarono secoli prima dell'Europa.\nIl nome è dovuto a un errore di Eulero: John Pell non se ne occupò quasi.",
    perche_fa_pensare: "Una soluzione minuscola per un numero e una gigantesca per il suo vicino. I numeri interi non si comportano con regolarità.",
    dove_si_usa: "Nelle approssimazioni delle radici quadrate con frazioni, e in teoria algebrica dei numeri.",
    formula: {
      latex: 'x^2 - n\\,y^2 = 1',
      come_si_legge: "x al quadrato meno n per y al quadrato uguale uno.",
      a_parole: "Si cercano due interi il cui rapporto approssima molto bene la radice di n."
    },
    prerequisiti: [
      { id: 'equazioni-diofantee', perche: "È un'equazione diofantea di secondo grado." },
      { id: 'irrazionalita-radice-di-due', perche: "Le soluzioni approssimano radici irrazionali." }
    ],
    parenti: [
      { id: 'frazioni-continue', perche: "Le soluzioni si trovano con le frazioni continue." }
    ]
  },
  {
    id: 'frazioni-continue', titolo: 'Frazioni continue', tipo: 'concetto', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 3,
    sinonimi: ['frazione continua', 'approssimazioni razionali', '355 su 113', 'migliori approssimazioni'],
    domanda: "Qual è la frazione che approssima meglio pi greco?",
    esempio: "22 settimi approssima pi greco con due decimali giusti. 355 su 113 ne ha sei giusti, con numeri ancora piccoli.",
    idea: "Una frazione continua scrive un numero come un intero più una frazione.\nIl denominatore di quella frazione è a sua volta un intero più una frazione, e così via.\nSi calcola come l'[[algoritmo-di-euclide|algoritmo di Euclide]] e, troncandola, dà le migliori approssimazioni del numero con frazioni.\nI numeri razionali hanno frazioni continue finite, gli irrazionali infinite.\nLa sezione aurea ha la frazione continua più semplice di tutte: solo 1, all'infinito.",
    perche_fa_pensare: "La sezione aurea è il numero più difficile da approssimare con frazioni. In un certo senso è il più irrazionale di tutti.",
    dove_si_usa: "Nei calendari per gli anni bisestili, negli ingranaggi, nelle approssimazioni numeriche.",
    prerequisiti: [
      { id: 'algoritmo-di-euclide', perche: "Si calcolano con lo stesso procedimento." },
      { id: 'numeri-reali', perche: "Ogni numero reale ha una frazione continua." }
    ],
    parenti: [
      { id: 'sezione-aurea', perche: "La sezione aurea ha la frazione continua fatta di soli 1." }
    ]
  },
  {
    id: 'congettura-bsd', titolo: 'Congettura di Birch e Swinnerton-Dyer', tipo: 'problema-aperto', area: 'teoria-numeri', argomento: 'soluzioni-intere', livello: 4,
    sinonimi: ['Birch e Swinnerton-Dyer', 'BSD', 'problemi del millennio', 'rango delle curve ellittiche'],
    domanda: "Quante soluzioni razionali ha una curva ellittica?",
    esempio: "Alcune curve ellittiche hanno solo pochi punti con coordinate frazionarie. Altre ne hanno infiniti. Come capirlo in anticipo?",
    idea: "Una [[curve-ellittiche|curva ellittica]] può avere un numero finito o infinito di punti con coordinate razionali.\nNegli anni Sessanta Birch e Swinnerton-Dyer fecero esperimenti con uno dei primi computer.\nNotarono un legame tra quei punti e una funzione simile alla zeta di Riemann.\nLa congettura dice che il comportamento di quella funzione in un punto rivela quante soluzioni ci sono.\nÈ uno dei sette problemi del millennio, con un premio di un milione di dollari.",
    perche_fa_pensare: "La congettura è nata dagli esperimenti al computer, non da una dimostrazione. Anche la matematica, a volte, procede per osservazione.",
    dove_si_usa: "È un problema di ricerca, legato alla crittografia con le curve ellittiche.",
    prerequisiti: [
      { id: 'curve-ellittiche', perche: "Riguarda i punti razionali delle curve ellittiche." },
      { id: 'funzione-zeta-di-riemann', perche: "Usa funzioni costruite come la zeta di Riemann." }
    ],
    parenti: []
  },

  // Teoria analitica dei numeri
  {
    id: 'teorema-dei-numeri-primi', titolo: 'Teorema dei numeri primi', tipo: 'teorema', area: 'teoria-numeri', argomento: 'teoria-analitica-dei-numeri', livello: 3,
    sinonimi: ['distribuzione dei primi', 'densità dei primi', 'Hadamard', 'de la Vallée Poussin', 'quanti primi ci sono'],
    domanda: "Quanti numeri primi ci sono fino a un milione?",
    esempio: "Fino a 100 ci sono 25 primi, fino a un milione 78498. La formula del teorema prevede circa 72 mila: l'errore relativo si riduce sempre di più.",
    idea: "I numeri primi diventano sempre più rari, ma in modo prevedibile.\nIl teorema dice quanti primi ci sono, circa, fino a un numero dato.\nSono più o meno quel numero diviso il suo [[logaritmo]] naturale.\nGauss lo intuì da ragazzo, studiando tabelle di numeri primi.\nFu dimostrato nel 1896, in modo indipendente, da Hadamard e de la Vallée Poussin.",
    perche_fa_pensare: "Ogni singolo primo sembra capitare a caso. Ma tutti insieme seguono una legge precisa, come gli atomi di un gas.",
    dove_si_usa: "In crittografia, per stimare quanto è facile trovare primi grandi.",
    formula: {
      latex: '\\pi(x) \\sim \\frac{x}{\\ln x}',
      come_si_legge: "pi greco di x è asintotico a x fratto logaritmo naturale di x. Qui pi greco di x indica quanti primi ci sono fino a x.",
      a_parole: "Il numero di primi fino a x è circa x diviso il logaritmo di x. La stima migliora al crescere di x."
    },
    prerequisiti: [
      { id: 'infinita-dei-primi', perche: "Precisa quanti sono i primi, sapendo che sono infiniti." },
      { id: 'logaritmo', perche: "La stima usa il logaritmo naturale." },
      { id: 'limite-di-successione', perche: "L'approssimazione migliora al limite." }
    ],
    parenti: []
  },
  {
    id: 'funzione-zeta-di-riemann', titolo: 'Funzione zeta di Riemann', tipo: 'concetto', area: 'teoria-numeri', argomento: 'teoria-analitica-dei-numeri', livello: 4,
    sinonimi: ['zeta di Riemann', 'funzione zeta', 'prodotto di Eulero', 'problema di Basilea'],
    domanda: "Come può una funzione sapere dove sono i numeri primi?",
    esempio: "Somma 1, un quarto, un nono, un sedicesimo, e così via con i reciproci dei quadrati. Eulero scoprì che il totale è pi greco al quadrato diviso 6.",
    idea: "La funzione zeta somma i reciproci di tutti i numeri naturali, elevati a una certa potenza.\nEulero scoprì che la stessa funzione si scrive come prodotto su tutti i numeri primi.\nQuesto la lega profondamente alla distribuzione dei primi.\nNel 1859 Riemann la estese ai [[numeri-complessi|numeri complessi]].\nI punti in cui si annulla controllano gli scarti dei primi dalla loro distribuzione media.",
    perche_fa_pensare: "Una somma sui numeri e un prodotto sui primi sono la stessa cosa. È la fattorizzazione unica, travestita da analisi.",
    dove_si_usa: "In teoria dei numeri, in fisica, nello studio delle matrici casuali.",
    formula: {
      latex: '\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p \\text{ primo}} \\frac{1}{1 - p^{-s}}',
      come_si_legge: "zeta di esse uguale somma, per n da uno a infinito, di uno su n alla esse. È anche uguale al prodotto, su tutti i primi p, di uno fratto uno meno p alla meno esse.",
      a_parole: "La somma sui numeri naturali è uguale a un prodotto sui numeri primi."
    },
    prerequisiti: [
      { id: 'serie', perche: "Si definisce come una serie." },
      { id: 'prolungamento-analitico', perche: "Riemann la estende con il prolungamento analitico." },
      { id: 'fattorizzazione-in-primi', perche: "Il prodotto di Eulero viene dalla fattorizzazione unica." }
    ],
    parenti: [
      { id: 'serie-armonica', perche: "Per esponente 1 diventa la serie armonica." }
    ]
  },
  {
    id: 'ipotesi-di-riemann', titolo: 'Ipotesi di Riemann', tipo: 'problema-aperto', area: 'teoria-numeri', argomento: 'teoria-analitica-dei-numeri', livello: 4,
    sinonimi: ['Riemann', 'zeri della zeta', 'retta critica', 'problemi del millennio'],
    domanda: "Dove si annulla la funzione zeta?",
    esempio: "I primi miliardi di zeri della funzione zeta, calcolati al computer, stanno tutti su una stessa retta. Ma questo non è una dimostrazione.",
    idea: "L'ipotesi di Riemann riguarda i punti in cui la [[funzione-zeta-di-riemann|funzione zeta]] si annulla.\nDice che tutti gli zeri non banali stanno su una retta precisa del piano complesso.\nRiemann la formulò nel 1859, quasi di passaggio.\nSe fosse vera, sapremmo con grande precisione come sono distribuiti i numeri primi.\nÈ uno dei sette problemi del millennio, ed è considerata da molti il più importante problema aperto.",
    perche_fa_pensare: "Migliaia di teoremi cominciano con «se l'ipotesi di Riemann è vera». Un intero edificio poggia su una congettura.",
    dove_si_usa: "In teoria dei numeri; molti risultati sui primi dipendono da essa.",
    prerequisiti: [
      { id: 'funzione-zeta-di-riemann', perche: "Riguarda gli zeri della funzione zeta." },
      { id: 'teorema-dei-numeri-primi', perche: "Precisa l'errore nel teorema dei numeri primi." }
    ],
    parenti: []
  },

  // Teoria algebrica dei numeri
  {
    id: 'numeri-algebrici-trascendenti', titolo: 'Numeri algebrici e trascendenti', tipo: 'concetto', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 3,
    sinonimi: ['numeri algebrici', 'numeri trascendenti', 'Liouville', 'trascendenza'],
    domanda: "Ogni numero è soluzione di un'equazione con coefficienti interi?",
    esempio: "La radice di 2 risolve l'equazione «x al quadrato meno 2 uguale zero». Pi greco, invece, non risolve nessuna equazione di questo tipo.",
    idea: "Un numero è algebrico se è soluzione di un'equazione polinomiale con coefficienti interi.\nFrazioni e radici sono numeri algebrici.\nUn numero che non lo è si chiama trascendente.\nLiouville costruì i primi numeri trascendenti nel 1844.\nPoco dopo Cantor dimostrò che quasi tutti i numeri reali sono trascendenti, anche se è difficile indicarne uno.",
    perche_fa_pensare: "I numeri che sappiamo scrivere sono una minoranza infinitesimale. Quasi tutti i numeri sono trascendenti, e quasi nessuno lo sappiamo dimostrare.",
    dove_si_usa: "Nei problemi di costruzione geometrica e in teoria dei numeri.",
    prerequisiti: [
      { id: 'numeri-reali', perche: "Classifica i numeri reali." },
      { id: 'monomi-polinomi', perche: "Si definisce con le equazioni polinomiali." }
    ],
    parenti: [
      { id: 'insiemi-numerabili', perche: "I numeri algebrici sono numerabili, i reali no: quindi i trascendenti sono la maggioranza." }
    ]
  },
  {
    id: 'trascendenza-di-pi-ed-e', titolo: 'π ed e sono trascendenti', tipo: 'teorema', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 4,
    sinonimi: ['trascendenza di pi greco', 'Lindemann', 'Hermite', 'pi greco trascendente', 'e trascendente'],
    domanda: "Perché non si può costruire un quadrato con la stessa area di un cerchio?",
    esempio: "Per duemila anni si è cercato di costruire, con riga e compasso, un quadrato grande quanto un cerchio. Nel 1882 si è scoperto che è impossibile.",
    idea: "Charles Hermite dimostrò nel 1873 che il numero e è trascendente.\nFerdinand von Lindemann, nel 1882, dimostrò lo stesso per pi greco.\nCon riga e compasso si costruiscono solo certi numeri algebrici.\nQuindi la lunghezza pi greco non si può costruire.\nCosì si chiuse il problema antico della quadratura del cerchio.",
    perche_fa_pensare: "Dimostrare che una cosa è impossibile richiede di capire tutte le strade possibili. È più difficile che trovarne una.",
    dove_si_usa: "Nella storia delle costruzioni geometriche e in teoria dei numeri.",
    prerequisiti: [
      { id: 'numeri-algebrici-trascendenti', perche: "Dimostra che due numeri sono trascendenti." },
      { id: 'pi-greco', perche: "Riguarda pi greco." },
      { id: 'numero-e', perche: "Riguarda il numero e." }
    ],
    parenti: [
      { id: 'problemi-classici-impossibili', perche: "Chiude il problema della quadratura del cerchio." }
    ]
  },
  {
    id: 'interi-algebrici', titolo: 'Interi algebrici e fattorizzazione unica', tipo: 'concetto', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 4,
    sinonimi: ['interi algebrici', 'ideali', 'Kummer', 'Dedekind', 'campi di numeri'],
    domanda: "La scomposizione in primi è sempre unica?",
    esempio: "Se si aggiunge agli interi la radice di meno 5, il numero 6 si scompone in due modi diversi. Non solo 2 per 3, ma anche in un altro prodotto.",
    idea: "Gli interi algebrici estendono i numeri interi, aggiungendo certe radici.\nIn questi nuovi sistemi si può ancora parlare di fattori primi.\nMa in alcuni la scomposizione in fattori non è più unica.\nNell'Ottocento questo errore nascosto fece fallire alcune dimostrazioni dell'ultimo teorema di Fermat.\nKummer e Dedekind ripararono il problema inventando i numeri ideali, poi chiamati ideali.",
    perche_fa_pensare: "Una proprietà che sembrava ovvia per tutti i numeri si rivela un privilegio degli interi. Accorgersene ha creato l'algebra moderna.",
    dove_si_usa: "In teoria dei numeri e in crittografia.",
    prerequisiti: [
      { id: 'numeri-algebrici-trascendenti', perche: "Sono numeri algebrici di tipo speciale." },
      { id: 'fattorizzazione-unica-anelli', perche: "Si chiede se la fattorizzazione resta unica." }
    ],
    parenti: []
  },
  {
    id: 'interi-p-adici', titolo: 'Numeri p-adici', tipo: 'concetto', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 4,
    sinonimi: ['p-adici', 'numeri p-adici', 'Hensel', 'valore assoluto p-adico'],
    domanda: "Si può misurare la distanza tra numeri in un modo diverso?",
    esempio: "Nei numeri 2-adici, 1 più 2 più 4 più 8, e così via all'infinito, fa meno 1. Le potenze di 2 diventano sempre più «piccole».",
    idea: "Di solito due numeri sono vicini se la loro differenza è piccola.\nNei numeri p-adici, invece, sono vicini se la differenza è divisibile per una grande potenza di un primo p.\nCon questa distanza si completano i razionali in un modo diverso dai reali.\nKurt Hensel li introdusse alla fine dell'Ottocento.\nUn teorema dice che reali e p-adici sono gli unici modi ragionevoli di completare i razionali.",
    perche_fa_pensare: "La distanza abituale non è l'unica possibile. Cambiandola, si apre un mondo di numeri in cui le regole sembrano rovesciate.",
    dove_si_usa: "In teoria dei numeri, nella dimostrazione dell'ultimo teorema di Fermat, in alcuni modelli della fisica.",
    prerequisiti: [
      { id: 'aritmetica-modulare', perche: "Si costruiscono con i resti per potenze di un primo." },
      { id: 'successione-di-cauchy', perche: "Si ottengono completando i razionali, come i reali." },
      { id: 'serie', perche: "Si scrivono come serie infinite di potenze di p." }
    ],
    parenti: [
      { id: 'numeri-reali', perche: "Reali e p-adici sono i due modi di completare i razionali." }
    ]
  },
  {
    id: 'forme-modulari', titolo: 'Forme modulari', tipo: 'concetto', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 4,
    sinonimi: ['forma modulare', 'funzioni modulari', 'semipiano superiore', 'modularità'],
    domanda: "Una funzione può avere infinite simmetrie?",
    esempio: "Immagina un pavimento di piastrelle sempre più piccole verso il bordo, ripetute all'infinito. Le simmetrie di una forma modulare sono di questo tipo.",
    idea: "Le forme modulari sono funzioni di variabile complessa con moltissime simmetrie.\nSono definite su metà del piano complesso.\nI loro coefficienti contengono informazioni sui numeri interi.\nAd esempio, dicono in quanti modi un numero si scrive come somma di quadrati.\nIl legame tra forme modulari e curve ellittiche è stato la chiave dell'ultimo teorema di Fermat.\nCompaiono anche in fisica teorica.",
    perche_fa_pensare: "Funzioni di analisi complessa, apparentemente lontane, sanno cose profonde sui numeri interi. Le connessioni nascoste sono il cuore della matematica.",
    dove_si_usa: "In teoria dei numeri, in teoria delle stringhe, nello studio dei reticoli.",
    prerequisiti: [
      { id: 'funzioni-olomorfe', perche: "Sono funzioni olomorfe." },
      { id: 'gruppo', perche: "Le simmetrie formano un gruppo." }
    ],
    parenti: []
  },
  {
    id: 'programma-di-langlands', titolo: 'Programma di Langlands', tipo: 'problema-aperto', area: 'teoria-numeri', argomento: 'teoria-algebrica-dei-numeri', livello: 4,
    sinonimi: ['Langlands', 'congetture di Langlands', 'grande teoria unificata della matematica', 'corrispondenza di Langlands'],
    domanda: "Esiste un dizionario tra aree lontane della matematica?",
    esempio: "Per l'ultimo teorema di Fermat si è usato un legame tra curve ellittiche e forme modulari. È un piccolo caso del programma di Langlands.",
    idea: "Il programma di Langlands è un insieme di congetture che collegano teoria dei numeri, algebra e analisi.\nRobert Langlands lo propose nel 1967, in una lettera ad André Weil.\nPrevede un dizionario tra oggetti algebrici, come le equazioni, e oggetti analitici con molte simmetrie.\nAlcune parti sono state dimostrate, altre restano aperte.\nNel 2024 un gruppo guidato da Dennis Gaitsgory ha annunciato la dimostrazione di una versione geometrica.",
    perche_fa_pensare: "È stato chiamato una «grande teoria unificata» della matematica. Suggerisce che la matematica sia una sola, vista da tanti lati.",
    dove_si_usa: "È un programma di ricerca che orienta buona parte della teoria dei numeri moderna.",
    prerequisiti: [
      { id: 'forme-modulari', perche: "Le forme modulari sono il primo esempio degli oggetti analitici del programma." },
      { id: 'teoria-di-galois', perche: "Il lato algebrico usa i gruppi di Galois." },
      { id: 'rappresentazioni-di-gruppi', perche: "Il dizionario parla di rappresentazioni di gruppi." }
    ],
    parenti: [
      { id: 'ultimo-teorema-di-fermat', perche: "La dimostrazione dell'ultimo teorema di Fermat usa un caso del programma." }
    ]
  }
]);
