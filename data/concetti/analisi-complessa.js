/* Analisi complessa */
Mappa.registra([
  // Il piano complesso
  {
    id: 'piano-complesso', titolo: 'Il piano dei numeri complessi', tipo: 'concetto', area: 'analisi-complessa', argomento: 'geometria-dei-complessi', livello: 2,
    sinonimi: ['piano complesso', 'piano di Gauss', 'piano di Argand', 'modulo e argomento', 'forma trigonometrica'],
    domanda: "Cosa succede se i numeri diventano punti del piano?",
    esempio: "Moltiplicare per l'unità immaginaria i fa ruotare ogni punto di un quarto di giro intorno all'origine. Due volte di seguito: mezzo giro, cioè cambiare segno.",
    idea: "Ogni [[numeri-complessi|numero complesso]] si può disegnare come un punto del piano.\nLa parte reale è l'ascissa, la parte immaginaria è l'ordinata.\nSommare due numeri complessi vuol dire sommare due vettori.\nMoltiplicare vuol dire moltiplicare le distanze dall'origine e sommare gli angoli.\nCosì l'algebra dei complessi diventa geometria: rotazioni e ingrandimenti.",
    perche_fa_pensare: "Numeri che sembravano «immaginari» diventano concreti come punti su un foglio. Una rappresentazione giusta toglie il mistero.",
    dove_si_usa: "In elettrotecnica, nell'elaborazione dei segnali, nella grafica, in fisica.",
    prerequisiti: [
      { id: 'numeri-complessi', perche: "Rappresenta i numeri complessi." },
      { id: 'coordinate-polari', perche: "Distanza e angolo sono coordinate polari." }
    ],
    parenti: []
  },
  {
    id: 'formula-di-eulero', titolo: 'Formula di Eulero', tipo: 'teorema', area: 'analisi-complessa', argomento: 'geometria-dei-complessi', livello: 3,
    sinonimi: ['formula di Eulero', 'identità di Eulero', 'e alla i pi greco', 'esponenziale complesso'],
    domanda: "Cosa lega l'esponenziale alla trigonometria?",
    esempio: "Con la formula di Eulero, e alla i per pi greco, più 1, fa zero. In un'unica uguaglianza compaiono e, i, pi greco, 1 e 0.",
    idea: "La formula di Eulero collega la [[funzione-esponenziale|funzione esponenziale]] con seno e coseno.\nElevando e a un numero immaginario si ottiene un punto sulla circonferenza di raggio 1.\nL'esponente dice di quanto ruotare, misurato in radianti.\nCosì le rotazioni diventano potenze, e le formule della trigonometria diventano regole delle potenze.\nEulero la pubblicò nel 1748.",
    perche_fa_pensare: "Crescita esponenziale e oscillazione sembrano fenomeni opposti. Nel mondo dei numeri complessi sono la stessa cosa.",
    dove_si_usa: "In elettrotecnica, nell'elaborazione dei segnali, in meccanica quantistica, nella trasformata di Fourier.",
    formula: {
      latex: 'e^{i\\theta} = \\cos\\theta + i \\sin\\theta \\qquad e^{i\\pi} + 1 = 0',
      come_si_legge: "e alla i teta uguale coseno di teta più i seno di teta. In particolare, e alla i pi greco più uno uguale zero.",
      a_parole: "Elevare e a un numero immaginario vuol dire ruotare sulla circonferenza di raggio uno."
    },
    prerequisiti: [
      { id: 'piano-complesso', perche: "Il risultato è un punto del piano complesso." },
      { id: 'numero-e', perche: "Usa il numero e." },
      { id: 'funzioni-trigonometriche', perche: "Collega seno e coseno all'esponenziale." }
    ],
    parenti: [
      { id: 'serie-di-potenze', perche: "Si dimostra confrontando le serie di potenze di esponenziale, seno e coseno." }
    ]
  },
  {
    id: 'radici-dell-unita', titolo: 'Radici dell\'unità', tipo: 'concetto', area: 'analisi-complessa', argomento: 'geometria-dei-complessi', livello: 3,
    sinonimi: ['radici dell\'unità', 'radici n-esime', 'poligoni regolari', 'radici complesse di 1'],
    domanda: "Quanti numeri, elevati alla quinta, danno 1?",
    esempio: "Nei numeri reali, solo 1 elevato alla quinta dà 1. Nei complessi ce ne sono cinque, ai vertici di un pentagono regolare.",
    idea: "Le radici n-esime dell'unità sono i numeri complessi che, elevati alla n, danno 1.\nSono esattamente n.\nStanno sulla circonferenza di raggio 1, ai vertici di un poligono regolare con n lati.\nMoltiplicandole tra loro si resta tra di esse: formano un gruppo ciclico.\nGauss le usò per dimostrare che il poligono di 17 lati si costruisce con riga e compasso.",
    perche_fa_pensare: "Un'equazione algebrica disegna un poligono regolare. Algebra e geometria sono due facce della stessa moneta.",
    dove_si_usa: "Nella trasformata di Fourier veloce, in teoria dei numeri, nella teoria dei codici.",
    formula: {
      latex: 'z^n = 1 \\iff z = e^{2\\pi i k / n}, \\quad k = 0, 1, \\ldots, n-1',
      come_si_legge: "zeta alla n uguale uno se e solo se zeta è e alla due pi greco i k fratto n. Qui k va da zero a n meno uno.",
      a_parole: "Le soluzioni sono n punti equidistanti sulla circonferenza di raggio uno."
    },
    prerequisiti: [
      { id: 'formula-di-eulero', perche: "Si scrivono con la formula di Eulero." }
    ],
    parenti: [
      { id: 'poligoni', perche: "Sono i vertici di un poligono regolare." }
    ]
  },
  {
    id: 'logaritmo-complesso', titolo: 'Logaritmo complesso e funzioni a più valori', tipo: 'concetto', area: 'analisi-complessa', argomento: 'geometria-dei-complessi', livello: 3,
    sinonimi: ['logaritmo complesso', 'funzioni a più valori', 'taglio', 'ramo principale', 'polidromia'],
    domanda: "Perché il logaritmo di un numero complesso non è unico?",
    esempio: "Girando una volta intorno all'origine si torna allo stesso punto, ma l'angolo è cresciuto di un giro. Il logaritmo ricorda quante volte hai girato.",
    idea: "Il logaritmo complesso dovrebbe invertire l'esponenziale complesso.\nMa l'esponenziale ripete gli stessi valori a ogni giro completo.\nQuindi ogni numero complesso diverso da zero ha infiniti logaritmi, che differiscono di giri interi.\nPer avere una funzione vera si sceglie un «ramo» e si taglia il piano lungo una semiretta.\nLo stesso problema riguarda le radici quadrate e molte altre funzioni.",
    perche_fa_pensare: "Una funzione può dipendere non solo da dove sei, ma da che strada hai fatto per arrivarci. La storia conta.",
    dove_si_usa: "In analisi complessa, in fisica, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'formula-di-eulero', perche: "Inverte l'esponenziale complesso." },
      { id: 'logaritmo', perche: "Estende il logaritmo ai complessi." }
    ],
    parenti: []
  },

  // Funzioni olomorfe
  {
    id: 'funzione-complessa', titolo: 'Funzioni di variabile complessa', tipo: 'concetto', area: 'analisi-complessa', argomento: 'derivabilita-complessa', livello: 3,
    sinonimi: ['funzione complessa', 'funzioni di variabile complessa', 'colorazione del dominio', 'trasformazioni del piano complesso'],
    domanda: "Come si disegna una funzione che manda punti del piano in punti del piano?",
    esempio: "La funzione «eleva al quadrato» raddoppia gli angoli: trasforma un quarto di piano in mezzo piano.",
    idea: "Una funzione di variabile complessa associa a ogni numero complesso un altro numero complesso.\nPer disegnarne il grafico servirebbero quattro dimensioni.\nSi preferisce vederla come una trasformazione che deforma il piano.\nUn altro modo è colorare ogni punto secondo il valore che la funzione assume lì.\nPolinomi, esponenziale, seno e coseno si estendono naturalmente ai complessi.",
    perche_fa_pensare: "Una funzione che non si può disegnare si può comunque vedere, cambiando il modo di guardare.",
    dove_si_usa: "In fisica, in ingegneria, nella cartografia, nella grafica.",
    prerequisiti: [
      { id: 'piano-complesso', perche: "Ingresso e uscita sono punti del piano complesso." },
      { id: 'funzione', perche: "È una funzione tra numeri complessi." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-olomorfe', titolo: 'Funzioni olomorfe', tipo: 'concetto', area: 'analisi-complessa', argomento: 'derivabilita-complessa', livello: 3,
    sinonimi: ['olomorfa', 'funzione olomorfa', 'derivabile in senso complesso', 'funzione intera'],
    domanda: "Perché le funzioni complesse sono così rigide?",
    esempio: "Se conosci una funzione olomorfa su un piccolo segmento, la conosci ovunque. Nessuna funzione reale si comporta così.",
    idea: "Una funzione è olomorfa se ha [[derivata]] in senso complesso in ogni punto.\nSembra la stessa richiesta del caso reale, ma è molto più forte.\nIl rapporto incrementale deve avere lo stesso limite da tutte le infinite direzioni del piano.\nDi conseguenza, una funzione olomorfa ha automaticamente infinite derivate.\nÈ anche determinata in tutta la sua regione dai valori su un pezzo piccolissimo.",
    perche_fa_pensare: "Chiedere una sola derivata, nei complessi, regala tutto il resto. È uno dei fenomeni più sorprendenti dell'analisi.",
    dove_si_usa: "In fisica dei fluidi, in elettrostatica, in teoria dei numeri, nella teoria dei segnali.",
    prerequisiti: [
      { id: 'funzione-complessa', perche: "Sono funzioni di variabile complessa." },
      { id: 'derivata', perche: "Si chiede l'esistenza della derivata complessa." }
    ],
    parenti: []
  },
  {
    id: 'cauchy-riemann', titolo: 'Equazioni di Cauchy-Riemann', tipo: 'teorema', area: 'analisi-complessa', argomento: 'derivabilita-complessa', livello: 3,
    sinonimi: ['Cauchy-Riemann', 'condizioni di olomorfia', 'parte reale e parte immaginaria'],
    domanda: "Cosa devono rispettare parte reale e parte immaginaria di una funzione olomorfa?",
    esempio: "La parte reale e quella immaginaria di una funzione olomorfa sono come due coreografie legate. Se conosci una, l'altra è quasi determinata.",
    idea: "Una funzione complessa si può spezzare in parte reale e parte immaginaria, due funzioni di due variabili.\nLe equazioni di Cauchy-Riemann sono due condizioni sulle loro [[derivate-parziali|derivate parziali]].\nUna funzione regolare è olomorfa esattamente quando le rispetta.\nNe segue che parte reale e parte immaginaria soddisfano entrambe l'equazione di Laplace.\nSi chiamano funzioni armoniche, e descrivono equilibri fisici.",
    perche_fa_pensare: "La derivabilità complessa si traduce in fisica: correnti, campi elettrici e fluidi ideali sono funzioni olomorfe nascoste.",
    dove_si_usa: "In aerodinamica, in elettrostatica, nello studio dei flussi d'acqua.",
    formula: {
      latex: '\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}',
      come_si_legge: "derivata di u rispetto a x uguale derivata di v rispetto a y. Derivata di u rispetto a y uguale meno derivata di v rispetto a x.",
      a_parole: "Le variazioni della parte reale e di quella immaginaria sono legate come una rotazione di un quarto di giro."
    },
    prerequisiti: [
      { id: 'funzioni-olomorfe', perche: "Caratterizzano le funzioni olomorfe." },
      { id: 'derivate-parziali', perche: "Sono condizioni sulle derivate parziali." }
    ],
    parenti: [
      { id: 'equazione-di-laplace', perche: "Parte reale e parte immaginaria soddisfano l'equazione di Laplace." }
    ]
  },
  {
    id: 'mappe-conformi', titolo: 'Trasformazioni conformi', tipo: 'concetto', area: 'analisi-complessa', argomento: 'derivabilita-complessa', livello: 3,
    sinonimi: ['mappe conformi', 'trasformazioni conformi', 'conservare gli angoli', 'proiezione di Mercatore'],
    domanda: "Si può deformare una figura conservando tutti gli angoli?",
    esempio: "Nella carta di Mercatore la Groenlandia sembra grande come l'Africa. Le aree sono sbagliate, ma gli angoli sono giusti: per questo i navigatori la usavano.",
    idea: "Una trasformazione conforme conserva gli angoli tra le curve, anche se cambia lunghezze e aree.\nOgni funzione olomorfa con derivata non nulla è conforme.\nDa vicino, una trasformazione conforme è una rotazione con un ingrandimento.\nPermette di trasformare una regione complicata in una semplice, risolvere il problema lì e tornare indietro.\nCosì si studiavano le ali degli aerei, trasformandole in cerchi.",
    perche_fa_pensare: "Conservare gli angoli costringe a sacrificare le aree. Non si può avere tutto in una mappa piana del globo.",
    dove_si_usa: "Nella cartografia, in aerodinamica, in elettrostatica, nella grafica e nell'imaging medico.",
    prerequisiti: [
      { id: 'funzioni-olomorfe', perche: "Le funzioni olomorfe sono conformi." },
      { id: 'angolo', perche: "Conservano gli angoli." }
    ],
    parenti: []
  },
  {
    id: 'teorema-mappa-riemann', titolo: 'Teorema della mappa di Riemann', tipo: 'teorema', area: 'analisi-complessa', argomento: 'derivabilita-complessa', livello: 4,
    sinonimi: ['mappa di Riemann', 'teorema di uniformizzazione', 'regioni semplicemente connesse'],
    domanda: "Ogni regione senza buchi si può trasformare in un cerchio senza deformare gli angoli?",
    esempio: "Il contorno dell'Italia è molto frastagliato. Eppure esiste una trasformazione conforme che porta la penisola in un disco perfetto.",
    idea: "Il teorema riguarda le regioni del piano senza buchi, diverse dal piano intero.\nDice che ognuna si può trasformare in modo conforme nel disco di raggio 1.\nLa trasformazione è unica, se si fissano un punto e una direzione.\nIl bordo della regione può essere irregolarissimo, anche frattale.\nRiemann lo enunciò nel 1851; le prime dimostrazioni complete arrivarono circa cinquant'anni dopo.",
    perche_fa_pensare: "Tutte le regioni senza buchi, per quanto diverse, sono in fondo lo stesso disco. La rigidità delle funzioni olomorfe convive con una grande libertà.",
    dove_si_usa: "In analisi complessa, in fluidodinamica, nella grafica per spianare superfici.",
    prerequisiti: [
      { id: 'mappe-conformi', perche: "Garantisce l'esistenza di una mappa conforme." },
      { id: 'connessione', perche: "Le regioni devono essere connesse e senza buchi." }
    ],
    parenti: []
  },

  // Integrazione complessa
  {
    id: 'integrale-curvilineo-complesso', titolo: 'Integrali lungo un cammino', tipo: 'concetto', area: 'analisi-complessa', argomento: 'integrazione-complessa', livello: 3,
    sinonimi: ['integrale curvilineo', 'integrale di linea', 'integrale complesso', 'circuitazione'],
    domanda: "Cosa vuol dire integrare lungo una curva nel piano complesso?",
    esempio: "Integrando uno su zeta lungo un giro completo intorno all'origine si ottiene 2 pi greco i. Il risultato «conta» il giro.",
    idea: "Nei numeri reali si integra lungo un intervallo; nei complessi si integra lungo una curva.\nSi divide la curva in tanti piccoli pezzi.\nSi moltiplica il valore della funzione per il piccolo spostamento complesso, e si somma.\nIl risultato, in generale, dipende dalla strada scelta.\nPer le funzioni olomorfe, però, succede qualcosa di speciale.",
    perche_fa_pensare: "Lo stesso punto di partenza e di arrivo, con strade diverse, può dare risultati diversi. Oppure no, se la funzione è abbastanza buona.",
    dove_si_usa: "In analisi complessa, in fisica dei campi, nel calcolo di integrali reali difficili.",
    prerequisiti: [
      { id: 'funzione-complessa', perche: "Si integra una funzione complessa." },
      { id: 'integrale-di-riemann', perche: "Estende l'integrale definito." },
      { id: 'curve-parametriche', perche: "Si integra lungo una curva." }
    ],
    parenti: []
  },
  {
    id: 'teorema-integrale-cauchy', titolo: 'Teorema e formula integrale di Cauchy', tipo: 'teorema', area: 'analisi-complessa', argomento: 'integrazione-complessa', livello: 3,
    sinonimi: ['teorema di Cauchy', 'formula integrale di Cauchy', 'Cauchy', 'integrali su curve chiuse'],
    domanda: "Cosa si scopre girando intorno a un punto?",
    esempio: "Se conosci la temperatura sul bordo di una piastra in equilibrio, la conosci anche dentro. Le funzioni olomorfe sono così, in modo ancora più forte.",
    idea: "Il teorema di Cauchy dice che l'integrale di una funzione olomorfa su una curva chiusa vale zero.\nServe che la funzione sia olomorfa anche dentro la curva, senza buchi.\nLa formula integrale va oltre: i valori dentro la curva si calcolano da quelli sul bordo.\nNe seguono quasi tutte le proprietà delle funzioni olomorfe.\nAugustin-Louis Cauchy li dimostrò tra il 1825 e il 1831.",
    perche_fa_pensare: "Il bordo sa tutto dell'interno. È lo stesso tema dei teoremi di Green e Stokes, ma qui ancora più potente.",
    dove_si_usa: "In tutta l'analisi complessa, nel calcolo di integrali, in fisica.",
    formula: {
      latex: 'f(a) = \\frac{1}{2\\pi i} \\oint_{\\gamma} \\frac{f(z)}{z - a}\\, dz',
      come_si_legge: "effe di a uguale uno su due pi greco i, per un integrale lungo gamma. Si integra effe di zeta fratto zeta meno a, in de zeta.",
      a_parole: "Il valore di una funzione olomorfa in un punto è una media dei suoi valori su una curva intorno."
    },
    prerequisiti: [
      { id: 'integrale-curvilineo-complesso', perche: "Riguarda integrali lungo curve chiuse." },
      { id: 'funzioni-olomorfe', perche: "Vale per le funzioni olomorfe." }
    ],
    parenti: []
  },
  {
    id: 'funzioni-analitiche', titolo: 'Olomorfa vuol dire analitica', tipo: 'teorema', area: 'analisi-complessa', argomento: 'integrazione-complessa', livello: 3,
    sinonimi: ['funzioni analitiche', 'analiticità', 'sviluppo in serie di potenze', 'principio di identità'],
    domanda: "Una funzione olomorfa è sempre uguale alla sua serie di Taylor?",
    esempio: "Nei reali esistono funzioni lisce diverse dalla loro serie di Taylor. Nei complessi questo non può succedere a una funzione olomorfa.",
    idea: "Una funzione è analitica se, vicino a ogni punto, è uguale a una [[serie-di-potenze|serie di potenze]].\nDalla formula di Cauchy segue che ogni funzione olomorfa è analitica.\nE vale anche il contrario.\nPer questo, se due funzioni olomorfe coincidono su un segmento, coincidono ovunque.\nSi chiama principio di identità.",
    perche_fa_pensare: "Un pezzetto di funzione determina il tutto, come un frammento di DNA. Nessun'altra classe di funzioni è così rigida.",
    dove_si_usa: "In analisi, in fisica, nei metodi di approssimazione numerica.",
    prerequisiti: [
      { id: 'teorema-integrale-cauchy', perche: "Si dimostra con la formula di Cauchy." },
      { id: 'serie-di-potenze', perche: "Le funzioni analitiche sono serie di potenze." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-liouville', titolo: 'Teorema di Liouville', tipo: 'teorema', area: 'analisi-complessa', argomento: 'integrazione-complessa', livello: 3,
    sinonimi: ['Liouville', 'funzioni intere limitate', 'teorema di Liouville'],
    domanda: "Una funzione olomorfa su tutto il piano può restare sempre limitata?",
    esempio: "Il seno di un numero reale resta tra meno 1 e 1. Ma nei numeri complessi il seno cresce senza limite: deve farlo, per questo teorema.",
    idea: "Una funzione intera è una funzione olomorfa su tutto il piano complesso.\nIl teorema di Liouville dice che, se una funzione intera è limitata, è costante.\nCioè ogni funzione intera non costante deve diventare grande da qualche parte.\nLa dimostrazione usa la formula integrale di Cauchy su cerchi sempre più grandi.\nDa qui segue in poche righe il teorema fondamentale dell'algebra.",
    perche_fa_pensare: "Un teorema su funzioni limitate dimostra che ogni polinomio ha una radice. Le connessioni nascoste sono la forza dell'analisi complessa.",
    dove_si_usa: "In analisi complessa e nelle dimostrazioni di teoremi di algebra.",
    prerequisiti: [
      { id: 'teorema-integrale-cauchy', perche: "Si dimostra con la formula integrale di Cauchy." }
    ],
    parenti: []
  },
  {
    id: 'singolarita-e-residui', titolo: 'Singolarità e teorema dei residui', tipo: 'teorema', area: 'analisi-complessa', argomento: 'integrazione-complessa', livello: 3,
    sinonimi: ['residui', 'teorema dei residui', 'poli', 'singolarità', 'serie di Laurent'],
    domanda: "Come si calcola un integrale difficile girando intorno ai punti problematici?",
    esempio: "L'integrale di uno su uno più x al quadrato, su tutta la retta, vale pi greco. Con i residui si calcola in poche righe.",
    idea: "Una singolarità è un punto in cui una funzione non è olomorfa, ad esempio perché diventa infinita.\nIntorno a una singolarità isolata, la funzione ha un numero speciale chiamato residuo.\nIl teorema dei residui dice che l'integrale su una curva chiusa dipende solo dai residui all'interno.\nCosì integrali reali molto difficili si calcolano sommando pochi numeri.\nÈ uno degli strumenti più usati dagli ingegneri e dai fisici.",
    perche_fa_pensare: "Per calcolare un integrale sulla retta reale, si fa una deviazione nei complessi. A volte la strada più breve passa per un mondo immaginario.",
    dove_si_usa: "In fisica, in ingegneria dei controlli, nell'elaborazione dei segnali, in probabilità.",
    formula: {
      latex: '\\oint_{\\gamma} f(z)\\, dz = 2\\pi i \\sum_k \\operatorname{Res}(f, a_k)',
      come_si_legge: "l'integrale lungo gamma di effe di zeta in de zeta. È uguale a due pi greco i per la somma dei residui di effe nei punti a k.",
      a_parole: "Un integrale lungo una curva chiusa si riduce a una somma di residui nei punti singolari interni."
    },
    prerequisiti: [
      { id: 'teorema-integrale-cauchy', perche: "Generalizza il teorema di Cauchy." },
      { id: 'serie-di-potenze', perche: "I residui si leggono da sviluppi in serie." }
    ],
    parenti: [
      { id: 'integrali-impropri', perche: "Si usa per calcolare integrali impropri reali." }
    ]
  },

  // Prolungamento e superfici di Riemann
  {
    id: 'prolungamento-analitico', titolo: 'Prolungamento analitico', tipo: 'concetto', area: 'analisi-complessa', argomento: 'prolungamento-e-superfici', livello: 4,
    sinonimi: ['prolungamento analitico', 'estensione analitica', 'continuazione analitica', 'meno un dodicesimo'],
    domanda: "Fin dove si può estendere una funzione?",
    esempio: "La serie geometrica 1 più z più z al quadrato, e così via, converge solo per z vicino a zero. Ma la stessa funzione, uno su uno meno z, ha senso quasi ovunque.",
    idea: "Una funzione analitica definita in una piccola regione si può spesso estendere a una regione più grande.\nL'estensione, se esiste, è unica, per il principio di identità.\nCosì una formula valida solo in una zona diventa una funzione definita molto più in là.\nLa [[funzione-zeta-di-riemann|funzione zeta]] si estende così a quasi tutto il piano complesso.\nSi legge spesso che «1 più 2 più 3, e così via, fa meno un dodicesimo».\nIn realtà è più sottile: quella somma non converge, e meno un dodicesimo è il valore della zeta prolungata.",
    perche_fa_pensare: "Una funzione sa già, da un piccolo pezzo, come sarebbe ovunque. Estendere non è inventare, ma scoprire.",
    dove_si_usa: "In teoria dei numeri, in fisica teorica, in analisi.",
    prerequisiti: [
      { id: 'funzioni-analitiche', perche: "Si estendono le funzioni analitiche." }
    ],
    parenti: []
  },
  {
    id: 'superfici-di-riemann', titolo: 'Superfici di Riemann', tipo: 'concetto', area: 'analisi-complessa', argomento: 'prolungamento-e-superfici', livello: 4,
    sinonimi: ['superficie di Riemann', 'funzioni a più valori', 'rivestimento', 'Riemann'],
    domanda: "Dove vive una funzione che ha più valori?",
    esempio: "Il logaritmo complesso si può immaginare su una scala a chiocciola infinita. Ogni giro intorno all'origine sale di un piano.",
    idea: "Una funzione a più valori, come il logaritmo o la radice quadrata, non è una vera funzione sul piano.\nRiemann ebbe un'idea: cambiare lo spazio su cui è definita.\nSi costruisce una superficie a più fogli, in cui ogni valore ha il suo posto.\nSu quella superficie, la funzione diventa una funzione ordinaria e olomorfa.\nRiemann introdusse queste superfici nel 1851; divennero un ponte tra analisi, geometria e topologia.",
    perche_fa_pensare: "Se una funzione non si adatta al suo spazio, si cambia lo spazio. È un cambio di prospettiva tipico della matematica moderna.",
    dove_si_usa: "In geometria algebrica, in teoria delle stringhe, in teoria dei numeri.",
    prerequisiti: [
      { id: 'prolungamento-analitico', perche: "Il prolungamento lungo cammini diversi produce i fogli." },
      { id: 'superfici', perche: "Sono superfici nel senso della topologia." },
      { id: 'logaritmo-complesso', perche: "Il logaritmo è l'esempio tipico di funzione a più valori." }
    ],
    parenti: []
  }
]);
