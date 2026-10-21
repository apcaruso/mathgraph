/* Analisi numerica */
Mappa.registra([
  // Errori e numeri nel computer
  {
    id: 'errore-di-approssimazione', titolo: 'Errori di approssimazione', tipo: 'concetto', area: 'analisi-numerica', argomento: 'errori-e-calcolatori', livello: 2,
    sinonimi: ['errore', 'errore assoluto', 'errore relativo', 'cifre significative', 'arrotondamento'],
    domanda: "Quanto ci si può fidare di un risultato calcolato?",
    esempio: "Sbagliare di un metro sulla distanza Milano-Roma è un errore piccolissimo. Sbagliare di un metro sull'altezza di una persona è enorme.",
    idea: "Quasi ogni calcolo reale contiene errori: nelle misure, negli arrotondamenti, nei metodi.\nL'errore assoluto è la differenza tra il valore calcolato e quello vero.\nL'errore relativo è l'errore assoluto diviso il valore vero, e conta di più.\nGli errori si possono propagare e sommare lungo un calcolo lungo.\nL'analisi numerica studia come tenerli sotto controllo.",
    perche_fa_pensare: "Un risultato senza una stima dell'errore è a metà. Sapere quanto si sbaglia è una forma di conoscenza.",
    dove_si_usa: "In ogni calcolo scientifico, nell'ingegneria, nelle misure di laboratorio, nella finanza.",
    prerequisiti: [
      { id: 'stime-approssimazioni', perche: "Parte dall'idea di approssimazione." },
      { id: 'numeri-reali', perche: "I valori veri sono spesso numeri reali con infinite cifre." }
    ],
    parenti: []
  },
  {
    id: 'numeri-in-virgola-mobile', titolo: 'Numeri nel computer: la virgola mobile', tipo: 'concetto', area: 'analisi-numerica', argomento: 'errori-e-calcolatori', livello: 2,
    sinonimi: ['virgola mobile', 'floating point', 'precisione macchina', 'doppia precisione', 'errore di arrotondamento'],
    domanda: "Perché per un computer 0,1 più 0,2 non fa esattamente 0,3?",
    esempio: "Chiedi a molti linguaggi di programmazione di calcolare 0,1 più 0,2. Rispondono 0,30000000000000004.",
    idea: "Un computer conserva i numeri con un numero fisso di cifre binarie.\nUsa una specie di [[notazione-scientifica|notazione scientifica]] in base 2, detta virgola mobile.\nCosì rappresenta numeri piccolissimi e grandissimi, ma con circa 16 cifre decimali di precisione.\nNumeri come 0,1 non hanno una scrittura finita in base 2, quindi vengono arrotondati.\nGli arrotondamenti sono minuscoli, ma in certi calcoli si accumulano.",
    perche_fa_pensare: "Il computer, simbolo della precisione, sbaglia quasi sempre un pochino. Saperlo è indispensabile per usarlo bene.",
    dove_si_usa: "In ogni programma che fa calcoli: simulazioni, grafica, finanza, intelligenza artificiale.",
    prerequisiti: [
      { id: 'notazione-scientifica', perche: "È una notazione scientifica in base 2." },
      { id: 'basi-numeriche', perche: "I numeri sono scritti in base 2." },
      { id: 'errore-di-approssimazione', perche: "Introduce errori di arrotondamento." }
    ],
    parenti: []
  },
  {
    id: 'condizionamento-stabilita', titolo: 'Condizionamento e stabilità', tipo: 'concetto', area: 'analisi-numerica', argomento: 'errori-e-calcolatori', livello: 3,
    sinonimi: ['condizionamento', 'stabilità numerica', 'problema mal condizionato', 'numero di condizionamento'],
    domanda: "Perché alcuni calcoli amplificano i piccoli errori?",
    esempio: "Cambiare di pochissimo un coefficiente di certi polinomi sposta le loro radici di tantissimo. Nessun metodo può evitarlo: è il problema a essere fragile.",
    idea: "Un problema è mal condizionato se piccoli cambiamenti nei dati producono grandi cambiamenti nel risultato.\nIl condizionamento dipende dal problema, non dal metodo usato per risolverlo.\nUn metodo è stabile se non aggiunge errori molto più grandi di quelli inevitabili.\nUn metodo instabile può rovinare anche un problema ben condizionato.\nServono entrambi: un problema ben posto e un metodo stabile.",
    perche_fa_pensare: "Alcuni problemi sono fragili per natura, e nessun computer li può salvare. Capire la fragilità viene prima di calcolare.",
    dove_si_usa: "Nei calcoli ingegneristici, nella statistica, nelle previsioni, nella grafica.",
    prerequisiti: [
      { id: 'errore-di-approssimazione', perche: "Studia come si propagano gli errori." },
      { id: 'derivata', perche: "La sensibilità ai dati si misura con le derivate." }
    ],
    parenti: []
  },

  // Risolvere equazioni con il calcolo
  {
    id: 'metodo-di-bisezione', titolo: 'Metodo di bisezione', tipo: 'concetto', area: 'analisi-numerica', argomento: 'equazioni-numeriche', livello: 2,
    sinonimi: ['bisezione', 'dicotomia', 'metodo di bisezione', 'dimezzare l\'intervallo'],
    domanda: "Come si trova la soluzione di un'equazione dimezzando ogni volta?",
    esempio: "Indovina un numero tra 1 e 1000 con domande «è più grande o più piccolo?». Dimezzando ogni volta, ti bastano 10 domande.",
    idea: "Il metodo di bisezione cerca un punto in cui una funzione continua si annulla.\nSi parte da un intervallo in cui la funzione cambia segno.\nSi guarda il punto di mezzo e si tiene la metà in cui il segno cambia ancora.\nOgni passo dimezza l'intervallo, quindi l'errore.\nFunziona grazie al [[teorema-valori-intermedi|teorema dei valori intermedi]].",
    perche_fa_pensare: "Un metodo lento ma infallibile. A volte la sicurezza vale più della velocità.",
    dove_si_usa: "Nei programmi di calcolo, nella ricerca di errori nel software, nei giochi di indovinelli.",
    prerequisiti: [
      { id: 'teorema-valori-intermedi', perche: "Il teorema garantisce che la soluzione sta nell'intervallo." },
      { id: 'algoritmo', perche: "È un algoritmo." }
    ],
    parenti: []
  },
  {
    id: 'metodo-di-newton', titolo: 'Metodo di Newton', tipo: 'concetto', area: 'analisi-numerica', argomento: 'equazioni-numeriche', livello: 3,
    sinonimi: ['Newton', 'metodo di Newton-Raphson', 'metodo delle tangenti', 'calcolo delle radici quadrate'],
    domanda: "Come si avvicina a una soluzione seguendo le tangenti?",
    esempio: "Per calcolare la radice di 2, parti da 1. A ogni passo fai la media tra il numero e 2 diviso il numero. Dopo pochi passi hai molti decimali giusti.",
    idea: "Il metodo di Newton cerca gli zeri di una funzione usando le tangenti.\nDa un punto, si traccia la tangente al grafico e si vede dove taglia l'asse orizzontale.\nQuel punto è la nuova approssimazione, e si ripete.\nVicino alla soluzione, il numero di cifre corrette circa raddoppia a ogni passo.\nSe si parte lontano, però, può saltare in modo imprevedibile.",
    perche_fa_pensare: "Colorando ogni punto di partenza secondo la soluzione raggiunta, compaiono disegni frattali. Un metodo semplice nasconde una geometria infinita.",
    dove_si_usa: "Nelle calcolatrici, nell'ottimizzazione, nei programmi di simulazione, nella grafica.",
    formula: {
      latex: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
      come_si_legge: "x con n più uno uguale x con n meno una frazione. Sopra c'è effe di x con n, sotto effe primo di x con n.",
      a_parole: "Il nuovo punto è dove la tangente nel punto precedente taglia l'asse orizzontale."
    },
    prerequisiti: [
      { id: 'derivata', perche: "Usa la derivata per costruire la tangente." },
      { id: 'iterazione-punti-fissi', perche: "È un'iterazione che converge a un punto fisso." }
    ],
    parenti: [
      { id: 'frattali', perche: "Le regioni di partenza che portano a ogni soluzione hanno bordi frattali." }
    ]
  },
  {
    id: 'risoluzione-numerica-sistemi', titolo: 'Grandi sistemi lineari al computer', tipo: 'concetto', area: 'analisi-numerica', argomento: 'equazioni-numeriche', livello: 3,
    sinonimi: ['sistemi lineari numerici', 'metodi iterativi', 'matrici sparse', 'fattorizzazione LU'],
    domanda: "Come si risolvono sistemi con milioni di equazioni?",
    esempio: "Le previsioni meteo risolvono sistemi con milioni di incognite più volte al giorno. Il metodo di Gauss, così com'è, sarebbe troppo lento.",
    idea: "I problemi reali producono spesso sistemi lineari enormi.\nDi solito le loro matrici hanno quasi tutti gli elementi uguali a zero: si dicono sparse.\nI metodi diretti, come una versione furba del metodo di Gauss, sono precisi ma costosi.\nI metodi iterativi partono da una soluzione approssimata e la migliorano passo dopo passo.\nScegliere il metodo giusto dipende dalla struttura della matrice e dal suo condizionamento.",
    perche_fa_pensare: "Gran parte del tempo dei supercomputer serve a risolvere sistemi lineari. Il problema più semplice dell'algebra è anche il più usato.",
    dove_si_usa: "Nelle previsioni meteo, nell'ingegneria strutturale, nei motori di ricerca, nella grafica.",
    prerequisiti: [
      { id: 'sistemi-lineari', perche: "Risolve sistemi lineari." },
      { id: 'condizionamento-stabilita', perche: "Il condizionamento decide la precisione raggiungibile." }
    ],
    parenti: []
  },
  {
    id: 'metodo-delle-potenze', titolo: 'Calcolare autovalori: il metodo delle potenze', tipo: 'concetto', area: 'analisi-numerica', argomento: 'equazioni-numeriche', livello: 3,
    sinonimi: ['metodo delle potenze', 'calcolo degli autovalori', 'PageRank', 'iterazione di matrici'],
    domanda: "Come si trova l'autovettore principale di una matrice enorme?",
    esempio: "Google calcolava l'importanza delle pagine web con un autovettore di una matrice con miliardi di righe. Lo trovava moltiplicando ripetutamente un vettore per la matrice.",
    idea: "Il metodo delle potenze moltiplica ripetutamente un vettore per una matrice.\nDopo molti passi, il vettore punta nella direzione dell'autovettore con l'autovalore più grande.\nLe altre direzioni crescono più lentamente e diventano trascurabili.\nÈ un metodo semplice, che richiede solo moltiplicazioni.\nFunziona bene anche con matrici enormi e sparse.",
    perche_fa_pensare: "Ripetendo la stessa operazione, la direzione dominante emerge da sola. Il tempo filtra l'essenziale.",
    dove_si_usa: "Nei motori di ricerca, nelle reti sociali, nell'analisi dei dati, nelle catene di Markov.",
    prerequisiti: [
      { id: 'autovalori-autovettori', perche: "Calcola un autovettore." },
      { id: 'iterazione-punti-fissi', perche: "È un'iterazione che converge." }
    ],
    parenti: []
  },

  // Approssimare e simulare
  {
    id: 'interpolazione', titolo: 'Interpolazione', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 3,
    sinonimi: ['interpolazione', 'polinomio interpolante', 'spline', 'fenomeno di Runge'],
    domanda: "Come si disegna una curva che passa per punti dati?",
    esempio: "I caratteri che leggi sullo schermo sono disegnati con curve che passano per pochi punti di controllo. Ingrandendoli restano lisci.",
    idea: "Interpolare vuol dire trovare una funzione che passa esattamente per punti dati.\nPer n punti esiste sempre un polinomio di grado al massimo n meno 1 che li attraversa.\nCon molti punti, però, un polinomio di grado alto può oscillare in modo esagerato ai bordi.\nSi preferiscono allora le spline: pezzi di polinomi di grado basso, raccordati in modo liscio.\nLe spline prendono il nome dalle asticelle flessibili usate dai disegnatori navali.",
    perche_fa_pensare: "Passare esattamente per tutti i punti non vuol dire descriverli bene. A volte la precisione eccessiva peggiora le cose.",
    dove_si_usa: "Nei caratteri tipografici, nella grafica, nell'animazione, nel disegno industriale.",
    prerequisiti: [
      { id: 'monomi-polinomi', perche: "Si usano polinomi." },
      { id: 'sistemi-lineari', perche: "I coefficienti si trovano risolvendo un sistema lineare." }
    ],
    parenti: [
      { id: 'polinomio-di-taylor', perche: "Anche Taylor approssima con polinomi, ma usando derivate in un punto invece di valori in molti punti." }
    ]
  },
  {
    id: 'integrazione-numerica', titolo: 'Integrazione numerica', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 3,
    sinonimi: ['integrazione numerica', 'regola dei trapezi', 'regola di Simpson', 'quadratura'],
    domanda: "Come si calcola un integrale quando non si trova la primitiva?",
    esempio: "Per misurare l'area di un lago su una mappa, la dividi in strisce sottili e approssimi ognuna con un trapezio.",
    idea: "Molti integrali non si calcolano con una formula, perché la primitiva non si scrive con funzioni note.\nL'integrazione numerica approssima l'area con figure semplici.\nLa regola dei trapezi usa trapezi; quella di Simpson usa archi di parabola.\nPiù le strisce sono sottili, più l'approssimazione è buona.\nI metodi migliori scelgono con cura dove valutare la funzione.",
    perche_fa_pensare: "La teoria dice che l'integrale esiste, il calcolo numerico lo trova. Le due cose sono diverse, e servono entrambe.",
    dove_si_usa: "In fisica, in statistica, in ingegneria, nella grafica 3D, in finanza.",
    formula: {
      latex: "\\int_a^b f(x)\\,dx \\approx \\frac{b-a}{2}\\,\\bigl(f(a) + f(b)\\bigr)",
      come_si_legge: "integrale da a a b di effe di x in de x. È circa uguale a b meno a mezzi, per effe di a più effe di b.",
      a_parole: "L'area sotto la curva si approssima con quella di un trapezio."
    },
    prerequisiti: [
      { id: 'integrale-di-riemann', perche: "Approssima l'integrale definito." },
      { id: 'interpolazione', perche: "Le regole integrano un polinomio interpolante." }
    ],
    parenti: []
  },
  {
    id: 'metodo-di-eulero', titolo: 'Metodo di Eulero', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 3,
    sinonimi: ['metodo di Eulero', 'Runge-Kutta', 'simulazione numerica', 'passo temporale'],
    domanda: "Come si simula il futuro un passo alla volta?",
    esempio: "Un videogioco calcola la posizione di una palla trenta volte al secondo. A ogni passo usa la velocità attuale per spostarla un po'.",
    idea: "Il metodo di Eulero risolve in modo approssimato un'[[equazione-differenziale|equazione differenziale]].\nParte dallo stato iniziale e calcola come sta cambiando.\nAvanza di un piccolo passo di tempo, come se il cambiamento restasse costante.\nPoi ripete dal nuovo stato.\nPiù il passo è piccolo, minore è l'errore; metodi più raffinati, come Runge-Kutta, fanno molto meglio.",
    perche_fa_pensare: "Ogni simulazione al computer, dal meteo ai videogiochi, nasce da questa idea semplice: un piccolo passo alla volta.",
    dove_si_usa: "Nei videogiochi, nelle simulazioni fisiche, nelle previsioni meteo, nella biologia.",
    formula: {
      latex: 'y_{n+1} = y_n + h\\, f(t_n, y_n)',
      come_si_legge: "y con n più uno uguale y con n più acca per effe. Effe è calcolata in t con n e y con n.",
      a_parole: "Il nuovo stato è quello vecchio più un passo h moltiplicato per la velocità di cambiamento."
    },
    prerequisiti: [
      { id: 'equazione-differenziale', perche: "Risolve equazioni differenziali." },
      { id: 'errore-di-approssimazione', perche: "Si studia l'errore che accumula." }
    ],
    parenti: []
  },
  {
    id: 'metodo-monte-carlo', titolo: 'Metodo Monte Carlo', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 3,
    sinonimi: ['Monte Carlo', 'simulazione casuale', 'ago di Buffon', 'Ulam', 'simulazione stocastica'],
    domanda: "Si può calcolare pi greco lanciando freccette?",
    esempio: "Lancia a caso tante freccette su un quadrato con un cerchio dentro. La frazione che cade nel cerchio, per 4, si avvicina a pi greco.",
    idea: "Il metodo Monte Carlo usa numeri casuali per calcolare quantità che non dipendono dal caso.\nSi simulano molti esperimenti casuali e si fa la media dei risultati.\nLa [[legge-dei-grandi-numeri|legge dei grandi numeri]] garantisce che la media si avvicina al valore vero.\nL'errore cala lentamente: per una cifra in più servono cento volte più prove.\nMa funziona bene anche in moltissime dimensioni, dove altri metodi falliscono.",
    perche_fa_pensare: "Il caso diventa uno strumento di precisione. Fu sviluppato negli anni Quaranta da Stanisław Ulam e John von Neumann, e prende il nome dal casinò.",
    dove_si_usa: "In fisica delle particelle, in finanza, nella grafica fotorealistica, nelle previsioni del rischio.",
    formula: {
      latex: '\\text{errore} \\propto \\frac{1}{\\sqrt{N}}',
      come_si_legge: "l'errore è proporzionale a uno fratto la radice di enne.",
      a_parole: "Con N prove, l'errore cala come uno diviso la radice quadrata di N."
    },
    prerequisiti: [
      { id: 'legge-dei-grandi-numeri', perche: "La media converge per la legge dei grandi numeri." },
      { id: 'integrale-di-riemann', perche: "Spesso si usa per calcolare integrali." },
      { id: 'pseudocasualita', perche: "Usa numeri pseudocasuali." }
    ],
    parenti: []
  },
  {
    id: 'fft', titolo: 'Trasformata di Fourier veloce', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 3,
    sinonimi: ['FFT', 'trasformata veloce', 'Cooley-Tukey', 'analisi spettrale numerica'],
    domanda: "Come si calcolano in fretta le frequenze di un segnale?",
    esempio: "Il tuo telefono analizza le frequenze della tua voce migliaia di volte al secondo. Senza un algoritmo veloce non ce la farebbe.",
    idea: "Calcolare le frequenze di un segnale campionato richiede, in modo diretto, un numero di operazioni pari al quadrato dei campioni.\nLa trasformata di Fourier veloce ne usa molte meno: circa i campioni per il loro logaritmo.\nDivide il segnale a metà, trasforma le due metà e le ricombina usando le [[radici-dell-unita|radici dell'unità]].\nJames Cooley e John Tukey la pubblicarono nel 1965.\nSi scoprì poi che Gauss aveva avuto un'idea simile intorno al 1805.",
    perche_fa_pensare: "Un'idea algoritmica ha reso possibile l'audio digitale, le telecomunicazioni e l'imaging medico. È considerata uno degli algoritmi più importanti del Novecento.",
    dove_si_usa: "Nell'audio e nel video digitale, nel wifi e nei cellulari, nella risonanza magnetica, in astronomia.",
    prerequisiti: [
      { id: 'trasformata-di-fourier', perche: "Calcola la trasformata di Fourier." },
      { id: 'efficienza-algoritmi', perche: "Il vantaggio è nell'efficienza." },
      { id: 'radici-dell-unita', perche: "Usa le simmetrie delle radici dell'unità." }
    ],
    parenti: []
  },
  {
    id: 'elementi-finiti', titolo: 'Metodo degli elementi finiti', tipo: 'concetto', area: 'analisi-numerica', argomento: 'approssimare-e-simulare', livello: 4,
    sinonimi: ['elementi finiti', 'FEM', 'mesh', 'simulazione strutturale'],
    domanda: "Come si calcola la resistenza di un ponte prima di costruirlo?",
    esempio: "Prima di un crash test reale, le case automobilistiche simulano l'urto al computer. L'auto è divisa in milioni di piccoli pezzi.",
    idea: "Il metodo degli elementi finiti risolve equazioni alle derivate parziali su forme complicate.\nDivide l'oggetto in tanti piccoli pezzi semplici, come triangoli o tetraedri.\nSu ogni pezzo approssima la soluzione con una funzione semplice.\nCollegando i pezzi, il problema diventa un grande sistema lineare.\nSi basa sulle [[soluzioni-deboli|soluzioni deboli]], che si adattano bene a questo approccio.",
    perche_fa_pensare: "Ogni edificio, aereo e automobile moderni è stato prima costruito al computer, a pezzetti. La matematica è diventata un laboratorio virtuale.",
    dove_si_usa: "Nell'ingegneria civile, aeronautica e automobilistica, in medicina, in geofisica.",
    prerequisiti: [
      { id: 'soluzioni-deboli', perche: "Si basa sulla formulazione debole delle equazioni." },
      { id: 'risoluzione-numerica-sistemi', perche: "Porta a grandi sistemi lineari." }
    ],
    parenti: []
  }
]);
