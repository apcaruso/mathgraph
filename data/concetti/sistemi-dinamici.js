/* Sistemi dinamici e caos */
Mappa.registra([
  // Iterazione
  {
    id: 'sistema-dinamico', titolo: 'Sistema dinamico', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'iterazione', livello: 2,
    sinonimi: ['sistemi dinamici', 'evoluzione nel tempo', 'regola di evoluzione', 'orbita', 'traiettoria'],
    domanda: "Cosa succede se ripeti la stessa regola all'infinito?",
    esempio: "Pensa a un conto in banca con un interesse fisso. Ogni anno il saldo si calcola dal saldo precedente con la stessa regola. È un sistema dinamico.",
    idea: "Un sistema dinamico è uno stato che cambia nel tempo secondo una regola fissa.\nLa regola dice, dato lo stato di adesso, quale sarà lo stato successivo.\nIl tempo può avanzare a scatti, un passo alla volta, oppure in modo continuo.\nLa successione degli stati si chiama orbita o traiettoria.\nLa domanda centrale è: cosa succede a lungo andare?",
    perche_fa_pensare: "Regole semplici, ripetute, possono produrre comportamenti di complessità sorprendente. Il tempo amplifica tutto.",
    dove_si_usa: "In fisica, in ecologia, in economia, in meteorologia, nei videogiochi.",
    prerequisiti: [
      { id: 'funzione', perche: "La regola di evoluzione è una funzione." },
      { id: 'definizione-ricorsiva', perche: "Ogni stato si calcola dal precedente." }
    ],
    parenti: []
  },
  {
    id: 'iterazione-punti-fissi', titolo: 'Iterazione e punti fissi', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'iterazione', livello: 2,
    sinonimi: ['iterazione', 'punto fisso', 'punto fisso attrattivo', 'diagramma a ragnatela'],
    domanda: "Cosa succede se premi ripetutamente lo stesso tasto della calcolatrice?",
    esempio: "Scrivi un numero qualsiasi e premi più volte il tasto del coseno, in radianti. Il risultato si avvicina sempre a 0,739.",
    idea: "Iterare una funzione vuol dire applicarla al proprio risultato, ancora e ancora.\nUn punto fisso è un valore che la funzione lascia invariato.\nUn punto fisso è attrattivo se le iterazioni vicine si avvicinano a lui.\nÈ repulsivo se invece se ne allontanano.\nCon il grafico della funzione e la diagonale si disegna l'iterazione come una ragnatela.",
    perche_fa_pensare: "Ripetere un gesto può portare sempre allo stesso punto, da qualunque parte si parta. È un modo matematico di raggiungere l'equilibrio.",
    dove_si_usa: "Nei metodi numerici per risolvere equazioni, in economia, nei sistemi di controllo.",
    prerequisiti: [
      { id: 'sistema-dinamico', perche: "L'iterazione è il sistema dinamico più semplice." },
      { id: 'grafico-di-funzione', perche: "L'iterazione si disegna sul grafico." }
    ],
    parenti: []
  },
  {
    id: 'congettura-di-collatz', titolo: 'Congettura di Collatz', tipo: 'problema-aperto', area: 'sistemi-dinamici', argomento: 'iterazione', livello: 2,
    sinonimi: ['Collatz', 'problema 3n più 1', 'successione di Collatz', 'numeri chicchi di grandine'],
    domanda: "Una regola da scuola elementare può nascondere un mistero irrisolto?",
    esempio: "Parti da 6: è pari, dividi per 2 e ottieni 3. È dispari: triplica e aggiungi 1, ottieni 10. Poi 5, 16, 8, 4, 2, 1.",
    idea: "Si parte da un numero intero positivo.\nSe è pari lo si divide per 2, se è dispari lo si moltiplica per 3 e si aggiunge 1.\nLa congettura dice che, partendo da qualsiasi numero, prima o poi si arriva a 1.\nÈ stata verificata al computer per tutti i numeri fino a più di venti cifre.\nLothar Collatz la propose nel 1937, e nessuno l'ha ancora dimostrata.",
    perche_fa_pensare: "Paul Erdős disse che la matematica non era ancora pronta per problemi come questo. Una regola che chiunque capisce sfida i migliori strumenti.",
    dove_si_usa: "È un problema di ricerca pura, legato ai sistemi dinamici e alla teoria dei numeri.",
    prerequisiti: [
      { id: 'sistema-dinamico', perche: "È l'iterazione di una regola." },
      { id: 'divisione-con-resto', perche: "La regola dipende dal resto della divisione per 2." }
    ],
    parenti: []
  },
  {
    id: 'automi-cellulari', titolo: 'Automi cellulari', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'iterazione', livello: 2,
    sinonimi: ['automa cellulare', 'gioco della vita', 'Conway', 'regola 110', 'griglia di celle'],
    domanda: "Regole locali semplicissime possono creare forme che sembrano vive?",
    esempio: "Nel «gioco della vita» di Conway, ogni casella di una griglia è viva o morta. Nascono forme che si muovono, si replicano e si scontrano.",
    idea: "Un automa cellulare è una griglia di caselle, ognuna in uno di pochi stati.\nA ogni passo, ogni casella cambia stato guardando solo le caselle vicine.\nLa regola è la stessa per tutte le caselle.\nNel gioco della vita, inventato da John Conway nel 1970, nascono strutture che si muovono e interagiscono.\nAlcuni automi cellulari possono calcolare tutto ciò che calcola un computer.",
    perche_fa_pensare: "Un comportamento complesso può emergere da regole semplici, senza un progetto. Forse anche la vita funziona così.",
    dove_si_usa: "Nella simulazione del traffico, degli incendi, della crescita dei cristalli, in biologia.",
    prerequisiti: [
      { id: 'sistema-dinamico', perche: "È un sistema dinamico su una griglia." }
    ],
    parenti: [
      { id: 'macchina-di-turing', perche: "Alcuni automi cellulari possono imitare una macchina di Turing." }
    ]
  },
  {
    id: 'mappa-logistica', titolo: 'Mappa logistica', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'iterazione', livello: 3,
    sinonimi: ['mappa logistica', 'raddoppio del periodo', 'costante di Feigenbaum', 'Robert May'],
    domanda: "Una formula semplicissima può comportarsi in modo caotico?",
    esempio: "Una popolazione di insetti, anno dopo anno, segue una regola semplice. A seconda di un parametro, si stabilizza, oscilla tra due valori o salta in modo imprevedibile.",
    idea: "La mappa logistica è una versione a scatti della crescita logistica.\nLa popolazione dell'anno dopo dipende da quella di quest'anno con una formula di secondo grado.\nAumentando il tasso di crescita, il punto fisso diventa un ciclo di 2, poi di 4, poi di 8 valori.\nOltre un certo valore il comportamento diventa caotico.\nRobert May, nel 1976, mostrò quanto fosse sorprendente un modello così semplice.",
    perche_fa_pensare: "Un'equazione che sta in una riga produce caos. La complessità non richiede formule complicate.",
    dove_si_usa: "In ecologia, nello studio del caos, nei generatori di numeri pseudocasuali.",
    formula: {
      latex: 'x_{n+1} = r\\, x_n (1 - x_n)',
      come_si_legge: "x con n più uno uguale erre per x con n, per uno meno x con n.",
      a_parole: "La popolazione del prossimo anno dipende da quella attuale e da quanto spazio resta."
    },
    prerequisiti: [
      { id: 'iterazione-punti-fissi', perche: "Si studiano i punti fissi dell'iterazione." },
      { id: 'crescita-logistica', perche: "È la versione a scatti della crescita logistica." }
    ],
    parenti: []
  },

  // Spazio delle fasi e stabilità
  {
    id: 'spazio-delle-fasi', titolo: 'Spazio delle fasi', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'stabilita-e-fasi', livello: 3,
    sinonimi: ['spazio delle fasi', 'ritratto di fase', 'spazio degli stati', 'traiettorie'],
    domanda: "Come si disegna in una sola figura tutto il comportamento di un sistema?",
    esempio: "Lo stato di un pendolo è dato da posizione e velocità. Ogni stato è un punto su un piano, e il moto del pendolo disegna una curva chiusa.",
    idea: "Lo spazio delle fasi contiene tutti gli stati possibili di un sistema.\nOgni punto è uno stato, descritto da tutte le grandezze necessarie.\nL'evoluzione del sistema è una curva in questo spazio.\nDisegnando molte curve si ottiene il ritratto di fase, che mostra tutti i comportamenti possibili.\nPoincaré inventò questo modo geometrico di studiare le equazioni differenziali.",
    perche_fa_pensare: "Invece di risolvere le equazioni, si guarda la forma del loro flusso. È passare dalle formule alla geometria.",
    dove_si_usa: "In meccanica, in ecologia, nei circuiti elettrici, nella fisiologia del cuore.",
    prerequisiti: [
      { id: 'sistema-dinamico', perche: "Rappresenta gli stati di un sistema dinamico." },
      { id: 'sistemi-di-edo', perche: "Le curve sono le soluzioni dei sistemi di equazioni." }
    ],
    parenti: []
  },
  {
    id: 'equilibri-e-stabilita', titolo: 'Equilibri e stabilità', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'stabilita-e-fasi', livello: 3,
    sinonimi: ['equilibrio', 'stabilità', 'equilibrio stabile', 'equilibrio instabile', 'Lyapunov'],
    domanda: "Quando un equilibrio resiste a una spinta?",
    esempio: "Una biglia sul fondo di una ciotola torna giù se la sposti: equilibrio stabile. Una biglia in cima a una palla cade alla minima spinta: equilibrio instabile.",
    idea: "Un equilibrio è uno stato che non cambia nel tempo.\nÈ stabile se, spostando di poco il sistema, questo resta vicino o torna all'equilibrio.\nÈ instabile se una piccola spinta lo fa allontanare.\nSpesso la stabilità si capisce dagli [[autovalori-autovettori|autovalori]] del sistema linearizzato vicino all'equilibrio.\nAleksandr Lyapunov sviluppò la teoria della stabilità alla fine dell'Ottocento.",
    perche_fa_pensare: "Esistere non basta: un equilibrio instabile non si osserva mai in natura. Conta se sa resistere ai disturbi.",
    dove_si_usa: "Nell'ingegneria dei controlli, negli aerei, negli ecosistemi, in economia.",
    prerequisiti: [
      { id: 'spazio-delle-fasi', perche: "Gli equilibri sono punti dello spazio delle fasi." },
      { id: 'autovalori-autovettori', perche: "Gli autovalori decidono la stabilità." }
    ],
    parenti: []
  },
  {
    id: 'cicli-limite', titolo: 'Orbite periodiche e cicli limite', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'stabilita-e-fasi', livello: 3,
    sinonimi: ['ciclo limite', 'orbita periodica', 'oscillazioni autosostenute', 'Van der Pol'],
    domanda: "Perché il cuore batte sempre con lo stesso ritmo?",
    esempio: "Se il cuore accelera per uno spavento, dopo un po' torna al suo ritmo normale. Il suo battito è un ciclo limite.",
    idea: "Un'orbita periodica è una traiettoria che si ripete uguale dopo un certo tempo.\nNello spazio delle fasi è una curva chiusa.\nUn ciclo limite è un'orbita periodica isolata, che attira o respinge le traiettorie vicine.\nSe la attira, il sistema torna allo stesso ritmo anche dopo un disturbo.\nA differenza dell'oscillatore armonico, l'ampiezza non dipende dalla spinta iniziale.",
    perche_fa_pensare: "Alcuni sistemi hanno un ritmo proprio, che difendono dai disturbi. È una forma di memoria senza memoria.",
    dove_si_usa: "In cardiologia, nei circuiti elettronici, negli orologi biologici, nelle reazioni chimiche oscillanti.",
    prerequisiti: [
      { id: 'spazio-delle-fasi', perche: "Sono curve chiuse nello spazio delle fasi." }
    ],
    parenti: []
  },
  {
    id: 'biforcazioni', titolo: 'Biforcazioni', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'stabilita-e-fasi', livello: 3,
    sinonimi: ['biforcazione', 'punto di svolta', 'transizione', 'cambiamento qualitativo'],
    domanda: "Come può un piccolo cambiamento trasformare del tutto un sistema?",
    esempio: "Un rubinetto che perde: aprendolo pian piano, le gocce cadono regolari, poi a coppie, poi in modo irregolare. Ogni cambio di comportamento è una biforcazione.",
    idea: "Molti sistemi dipendono da un parametro, come una temperatura o un tasso di crescita.\nCambiando di poco il parametro, di solito il comportamento cambia di poco.\nA certi valori, però, il comportamento cambia in modo qualitativo: è una biforcazione.\nUn equilibrio può sparire, dividersi in due o trasformarsi in un'oscillazione.\nUna serie di biforcazioni può portare dall'ordine al caos.",
    perche_fa_pensare: "Un cambiamento lento e graduale può produrre un salto improvviso. Questo vale per i laghi, i climi, e forse le società.",
    dove_si_usa: "Nello studio del clima, degli ecosistemi, dei ponti, dei laser, delle epidemie.",
    prerequisiti: [
      { id: 'equilibri-e-stabilita', perche: "Una biforcazione cambia gli equilibri e la loro stabilità." },
      { id: 'iterazione-punti-fissi', perche: "Gli esempi più semplici sono iterazioni." }
    ],
    parenti: [
      { id: 'mappa-logistica', perche: "La mappa logistica mostra una cascata di biforcazioni." }
    ]
  },
  {
    id: 'poincare-bendixson', titolo: 'Teorema di Poincaré-Bendixson', tipo: 'teorema', area: 'sistemi-dinamici', argomento: 'stabilita-e-fasi', livello: 4,
    sinonimi: ['Poincaré-Bendixson', 'niente caos nel piano', 'sistemi nel piano'],
    domanda: "Perché nel piano non può esserci caos?",
    esempio: "Una traiettoria nel piano che non incontra equilibri e non scappa all'infinito finisce per girare su una curva chiusa. Non ha altra scelta.",
    idea: "Il teorema riguarda i sistemi di equazioni differenziali con due grandezze, cioè nel piano.\nSe una traiettoria resta in una regione limitata senza equilibri, si avvicina a un'orbita periodica.\nIl motivo è che, nel piano, le traiettorie non possono incrociarsi.\nUna curva chiusa divide il piano in un dentro e un fuori, come dice il teorema di Jordan.\nPer il caos servono quindi almeno tre dimensioni.",
    perche_fa_pensare: "La dimensione dello spazio decide se il caos è possibile. Nel piano c'è troppo poco spazio per disordinarsi.",
    dove_si_usa: "Nello studio dei sistemi biologici e chimici con due variabili.",
    prerequisiti: [
      { id: 'cicli-limite', perche: "Garantisce l'esistenza di cicli limite." },
      { id: 'teorema-curva-di-jordan', perche: "La dimostrazione usa il teorema della curva di Jordan." }
    ],
    parenti: [
      { id: 'caos-deterministico', perche: "Spiega perché il caos richiede almeno tre dimensioni." }
    ]
  },

  // Caos
  {
    id: 'effetto-farfalla', titolo: 'Effetto farfalla', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 2,
    sinonimi: ['effetto farfalla', 'sensibilità alle condizioni iniziali', 'Lorenz', 'imprevedibilità'],
    domanda: "Il battito d'ali di una farfalla può causare un uragano?",
    esempio: "Nel 1961 Edward Lorenz rifece una simulazione del tempo arrotondando un numero alla terza cifra decimale. Dopo poche settimane simulate, il risultato era del tutto diverso.",
    idea: "In alcuni sistemi, differenze minuscole nello stato iniziale crescono rapidamente.\nDopo un certo tempo, due situazioni quasi identiche diventano completamente diverse.\nSi chiama sensibilità alle condizioni iniziali.\nEdward Lorenz la scoprì per caso, studiando un modello dell'atmosfera.\nIl nome viene da una sua conferenza del 1972, sul battito d'ali di una farfalla in Brasile.",
    perche_fa_pensare: "Anche conoscendo perfettamente le leggi, non si può prevedere il futuro lontano. Basterebbe un errore piccolissimo nel presente.",
    dove_si_usa: "Nelle previsioni meteo, nello studio del clima, in astronomia, in economia.",
    prerequisiti: [
      { id: 'sistema-dinamico', perche: "È una proprietà di certi sistemi dinamici." }
    ],
    parenti: []
  },
  {
    id: 'caos-deterministico', titolo: 'Caos deterministico', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 3,
    sinonimi: ['caos', 'teoria del caos', 'sistemi caotici', 'imprevedibilità deterministica'],
    domanda: "Un sistema senza caso può essere imprevedibile?",
    esempio: "Un pendolo doppio, cioè un pendolo appeso a un altro, segue leggi precise. Eppure il suo moto sembra del tutto casuale.",
    idea: "Un sistema caotico segue regole precise, senza nessun elemento casuale.\nEppure il suo comportamento a lungo termine è imprevedibile.\nIl motivo è l'[[effetto-farfalla|effetto farfalla]]: ogni piccolo errore cresce in fretta.\nIn più, le traiettorie restano in una regione limitata e si mescolano di continuo.\nIl caos non è disordine totale: ha una struttura geometrica precisa.",
    perche_fa_pensare: "Determinismo e prevedibilità sembravano la stessa cosa. Il caos mostra che sono diversi.",
    dove_si_usa: "In meteorologia, in astronomia, nei battiti cardiaci, nella crittografia, nella fluidodinamica.",
    prerequisiti: [
      { id: 'effetto-farfalla', perche: "La sensibilità alle condizioni iniziali è l'ingrediente principale." },
      { id: 'iterazione-punti-fissi', perche: "Gli esempi più semplici di caos sono iterazioni." }
    ],
    parenti: []
  },
  {
    id: 'attrattore-di-lorenz', titolo: 'Attrattore di Lorenz', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 3,
    sinonimi: ['Lorenz', 'attrattore strano', 'farfalla di Lorenz', 'equazioni di Lorenz'],
    domanda: "Che forma ha il caos?",
    esempio: "Disegnando le soluzioni del modello di Lorenz si ottiene una figura simile alle ali di una farfalla. La traiettoria gira intorno a un'ala, poi all'altra, senza mai ripetersi.",
    idea: "Nel 1963 Lorenz semplificò un modello dell'atmosfera fino a tre sole equazioni.\nLe traiettorie si avvolgono su una figura a due ali, detta attrattore strano.\nTutte le traiettorie finiscono vicino a questa figura, ma non si ripetono mai.\nL'attrattore ha una struttura frattale.\nSolo nel 2002 Warwick Tucker dimostrò in modo rigoroso che è davvero un attrattore strano.",
    perche_fa_pensare: "Il caos ha una forma, ed è bella. L'imprevedibilità del singolo convive con l'ordine dell'insieme.",
    dove_si_usa: "Nello studio del caos, della convezione, dei laser, delle dinamo.",
    formula: {
      latex: "x' = \\sigma(y - x), \\quad y' = x(\\rho - z) - y, \\quad z' = x y - \\beta z",
      come_si_legge: "x primo uguale sigma per y meno x. y primo uguale x per ro meno z, meno y. zeta primo uguale x y meno beta zeta.",
      a_parole: "Tre equazioni semplici, con tre parametri, producono un moto caotico."
    },
    prerequisiti: [
      { id: 'caos-deterministico', perche: "È l'esempio classico di caos." },
      { id: 'spazio-delle-fasi', perche: "L'attrattore vive nello spazio delle fasi." }
    ],
    parenti: []
  },
  {
    id: 'problema-dei-tre-corpi', titolo: 'Problema dei tre corpi', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 3,
    sinonimi: ['tre corpi', 'problema dei tre corpi', 'Poincaré', 'meccanica celeste'],
    domanda: "Si può prevedere il moto di tre corpi che si attraggono?",
    esempio: "Il moto della Terra intorno al Sole si calcola con una formula esatta. Aggiungendo la Luna, una formula così non esiste più.",
    idea: "Due corpi che si attraggono con la gravità si muovono su ellissi, calcolabili con esattezza.\nCon tre corpi, invece, non esiste una formula generale semplice.\nStudiando questo problema, nel 1889 Henri Poincaré scoprì per primo il comportamento caotico.\nVinse un premio del re di Svezia, ma poi trovò un errore nel suo lavoro.\nCorreggendolo, capì che le orbite potevano essere di una complessità inimmaginabile.",
    perche_fa_pensare: "Il caos è stato scoperto in cielo, non in laboratorio. Proprio il sistema solare, simbolo dell'ordine, nasconde l'imprevedibile.",
    dove_si_usa: "In astronomia, nella navigazione spaziale, nello studio della stabilità del sistema solare.",
    prerequisiti: [
      { id: 'sistemi-di-edo', perche: "Il moto è descritto da un sistema di equazioni differenziali." },
      { id: 'leggi-di-newton', perche: "Usa le leggi di Newton e la gravitazione." }
    ],
    parenti: [
      { id: 'caos-deterministico', perche: "È il problema in cui il caos fu scoperto." }
    ]
  },
  {
    id: 'esponente-di-lyapunov', titolo: 'Esponente di Lyapunov', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 4,
    sinonimi: ['Lyapunov', 'esponente di Lyapunov', 'orizzonte di prevedibilità', 'divergenza delle traiettorie'],
    domanda: "Per quanto tempo si può prevedere un sistema caotico?",
    esempio: "Le previsioni del tempo sono affidabili per qualche giorno, ma non per un mese. L'esponente di Lyapunov dell'atmosfera spiega perché.",
    idea: "L'esponente di Lyapunov misura quanto in fretta si allontanano due traiettorie vicine.\nSe è positivo, la distanza cresce in modo esponenziale: il sistema è caotico.\nSe è negativo, le traiettorie si avvicinano: il sistema è stabile.\nDal suo valore si stima l'orizzonte di prevedibilità.\nMigliorare di dieci volte la precisione iniziale allunga questo orizzonte solo di poco.",
    perche_fa_pensare: "Esiste un limite alla previsione che nessun computer può superare. Raddoppiare la potenza di calcolo non raddoppia il futuro prevedibile.",
    dove_si_usa: "In meteorologia, nello studio del clima, in astronomia, nell'analisi dei segnali.",
    formula: {
      latex: '|\\delta(t)| \\approx e^{\\lambda t}\\, |\\delta_0|',
      come_si_legge: "il valore assoluto di delta di t è circa e alla lambda t per il valore assoluto di delta zero.",
      a_parole: "Un piccolo errore iniziale cresce in modo esponenziale, con velocità data da lambda."
    },
    prerequisiti: [
      { id: 'caos-deterministico', perche: "Misura il caos." },
      { id: 'logaritmo', perche: "Si calcola con un logaritmo della crescita." },
      { id: 'limite-di-successione', perche: "Si definisce come un limite nel tempo." }
    ],
    parenti: []
  },
  {
    id: 'teoria-ergodica', titolo: 'Teoria ergodica', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'caos', livello: 4,
    sinonimi: ['ergodicità', 'teoria ergodica', 'media temporale', 'Birkhoff', 'ipotesi ergodica'],
    domanda: "Una sola storia lunga dice tutto su un sistema?",
    esempio: "Per sapere quanto tempo una molecola di gas passa in un angolo della stanza, puoi seguirla a lungo. Oppure guardare tutte le molecole in un istante.",
    idea: "La teoria ergodica studia il comportamento medio dei sistemi dinamici su tempi lunghissimi.\nUn sistema è ergodico se una sola traiettoria, col tempo, esplora tutto lo spazio in modo uniforme.\nIn quel caso la media nel tempo è uguale alla media su tutti gli stati.\nGeorge Birkhoff dimostrò il teorema ergodico nel 1931.\nIl caos rende imprevedibile il singolo, ma l'ergodicità rende prevedibili le medie.",
    perche_fa_pensare: "Una sola vita lunga a sufficienza basterebbe a vedere tutto. È il ponte tra il destino del singolo e la statistica.",
    dove_si_usa: "In meccanica statistica, in teoria dei numeri, nei metodi Monte Carlo, in teoria dell'informazione.",
    prerequisiti: [
      { id: 'misura', perche: "Le medie sugli stati si calcolano con una misura." },
      { id: 'sistema-dinamico', perche: "Studia i sistemi dinamici a lungo termine." },
      { id: 'legge-dei-grandi-numeri', perche: "Il teorema ergodico generalizza la legge dei grandi numeri." }
    ],
    parenti: [
      { id: 'meccanica-statistica', perche: "Nasce dall'ipotesi ergodica di Boltzmann in meccanica statistica." }
    ]
  },

  // Frattali
  {
    id: 'frattali', titolo: 'Frattali e autosimilarità', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'frattali-e-dimensione', livello: 2,
    sinonimi: ['frattale', 'frattali', 'autosimilarità', 'fiocco di Koch', 'Mandelbrot'],
    domanda: "Quanto è lunga una costa?",
    esempio: "Un broccolo romanesco è fatto di cimette, ognuna fatta di cimette più piccole, simili all'intero. È un frattale naturale.",
    idea: "Un frattale è una forma che mostra dettagli simili a ogni scala di ingrandimento.\nSpesso ogni parte somiglia all'intero: si dice autosimilarità.\nMolti frattali si costruiscono ripetendo all'infinito una regola semplice.\nLa lunghezza di una costa frastagliata cresce quanto più è piccolo il righello usato.\nBenoît Mandelbrot coniò la parola «frattale» nel 1975.",
    perche_fa_pensare: "Nuvole, coste, alberi e polmoni non sono fatti di cerchi e rette. I frattali sono forse la vera geometria della natura.",
    dove_si_usa: "Nella grafica per paesaggi realistici, nelle antenne dei telefoni, in medicina, in geografia.",
    prerequisiti: [
      { id: 'similitudine', perche: "Le parti sono simili all'intero." },
      { id: 'definizione-ricorsiva', perche: "Si costruiscono ripetendo una regola." }
    ],
    parenti: []
  },
  {
    id: 'dimensione-frattale', titolo: 'Dimensione frattale', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'frattali-e-dimensione', livello: 3,
    sinonimi: ['dimensione frattale', 'dimensione di Hausdorff', 'dimensione non intera', 'box counting'],
    domanda: "Può una forma avere dimensione 1,26?",
    esempio: "La curva di Koch è più che una linea, ma meno che una superficie. La sua dimensione frattale è circa 1,26.",
    idea: "Ingrandendo un segmento di 3 volte, ottieni 3 copie; un quadrato, 9 copie; un cubo, 27.\nLa dimensione è l'esponente che lega l'ingrandimento al numero di copie.\nPer la curva di Koch, ingrandire di 3 dà 4 copie: la dimensione non è un numero intero.\nLa dimensione frattale misura quanto una forma riempie lo spazio.\nLa costa della Gran Bretagna ha una dimensione frattale di circa 1,25.",
    perche_fa_pensare: "La dimensione, che sembrava un numero intero per forza, può essere qualsiasi numero. Un'idea semplice ne esce trasformata.",
    dove_si_usa: "In geografia, in medicina per analizzare tessuti, nello studio dei materiali porosi, in finanza.",
    formula: {
      latex: 'D = \\frac{\\log N}{\\log s}',
      come_si_legge: "di uguale logaritmo di enne fratto logaritmo di esse.",
      a_parole: "Se ingrandendo s volte ottieni N copie, la dimensione è il rapporto tra i loro logaritmi."
    },
    prerequisiti: [
      { id: 'frattali', perche: "Misura i frattali." },
      { id: 'logaritmo', perche: "Si calcola con i logaritmi." }
    ],
    parenti: []
  },
  {
    id: 'insieme-di-mandelbrot', titolo: 'Insieme di Mandelbrot', tipo: 'concetto', area: 'sistemi-dinamici', argomento: 'frattali-e-dimensione', livello: 3,
    sinonimi: ['Mandelbrot', 'insieme di Mandelbrot', 'insiemi di Julia', 'frattale complesso'],
    domanda: "Come può una formula di una riga contenere una complessità infinita?",
    esempio: "Ingrandendo il bordo dell'insieme di Mandelbrot si trovano spirali, cavallucci marini e piccole copie dell'insieme intero, all'infinito.",
    idea: "Si prende un [[numeri-complessi|numero complesso]] c e si itera la regola: eleva al quadrato e aggiungi c.\nSi parte da zero e si guarda se i risultati restano limitati o scappano all'infinito.\nL'insieme di Mandelbrot contiene i valori di c per cui restano limitati.\nIl suo bordo è infinitamente complicato, con dettagli nuovi a ogni ingrandimento.\nLe prime immagini al computer risalgono a circa il 1980.",
    perche_fa_pensare: "Una regola minuscola genera un oggetto di complessità infinita. Esisteva già prima che qualcuno lo disegnasse?",
    dove_si_usa: "Nello studio dei sistemi dinamici complessi, nell'arte digitale, nella divulgazione.",
    formula: {
      latex: 'z_{n+1} = z_n^2 + c, \\qquad z_0 = 0',
      come_si_legge: "zeta con n più uno uguale zeta con n al quadrato più c, partendo da zeta zero uguale zero.",
      a_parole: "Si eleva al quadrato e si aggiunge c, ancora e ancora, partendo da zero."
    },
    prerequisiti: [
      { id: 'piano-complesso', perche: "Vive nel piano dei numeri complessi." },
      { id: 'iterazione-punti-fissi', perche: "Si costruisce iterando una funzione." },
      { id: 'frattali', perche: "Il suo bordo è un frattale." }
    ],
    parenti: []
  }
]);
