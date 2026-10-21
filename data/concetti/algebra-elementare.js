/* Algebra elementare */
Mappa.registra([
  // Calcolo letterale e polinomi
  {
    id: 'variabile', titolo: 'Lettere e variabili', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 1,
    sinonimi: ['lettera', 'incognita', 'variabili', 'calcolo letterale', 'x'],
    domanda: "Perché in matematica si usano le lettere?",
    esempio: "Il prezzo di n caffè da 1,20 euro è n per 1,20. Con una lettera scrivi una regola valida per qualsiasi numero di caffè.",
    idea: "Una variabile è una lettera che sta al posto di un numero.\nPuò indicare un numero qualsiasi, oppure un numero che non conosci ancora.\nNel secondo caso si chiama incognita.\nCon le lettere si scrivono regole generali, valide per tutti i numeri insieme.\nSi calcola con le lettere usando le stesse [[proprieta-operazioni|proprietà]] dei numeri.",
    perche_fa_pensare: "Una lettera permette di ragionare su infiniti numeri in un colpo solo. È stato uno dei salti più grandi della storia del pensiero.",
    dove_si_usa: "Nelle formule dei fogli di calcolo, nella fisica, nella programmazione.",
    prerequisiti: [
      { id: 'proprieta-operazioni', perche: "Si calcola con le lettere usando le proprietà delle operazioni." }
    ],
    parenti: []
  },
  {
    id: 'espressione-algebrica', titolo: 'Espressioni letterali', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 1,
    sinonimi: ['espressioni letterali', 'espressione', 'calcolo letterale', 'sostituire i valori'],
    domanda: "Come si scrive un calcolo che vale per tutti i numeri?",
    esempio: "Il perimetro di un rettangolo è due volte la base più due volte l'altezza. Con le lettere b e h diventa un'espressione valida per ogni rettangolo.",
    idea: "Un'espressione algebrica combina numeri e lettere con le operazioni.\nNon è vera né falsa: è un calcolo in attesa di valori.\nSe sostituisci le lettere con numeri, ottieni un risultato.\nDue espressioni che danno sempre lo stesso risultato si dicono equivalenti.\nSemplificare un'espressione vuol dire riscriverla in una forma equivalente più corta.",
    perche_fa_pensare: "Un'espressione è come una ricetta: descrive il procedimento senza ancora cucinare.",
    dove_si_usa: "Nelle formule di geometria, economia, fisica e nei fogli di calcolo.",
    prerequisiti: [
      { id: 'variabile', perche: "Un'espressione contiene lettere al posto dei numeri." },
      { id: 'potenze', perche: "Nelle espressioni compaiono spesso potenze, come il quadrato di una lettera." }
    ],
    parenti: []
  },
  {
    id: 'monomi-polinomi', titolo: 'Monomi e polinomi', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 2,
    sinonimi: ['polinomio', 'monomio', 'grado di un polinomio', 'polinomi', 'coefficiente'],
    domanda: "Quali espressioni si possono sommare e moltiplicare come numeri?",
    esempio: "Un'azienda calcola il costo così: 5 volte il quadrato della produzione, più 3 volte la produzione, più 100. È un polinomio.",
    idea: "Un monomio è un prodotto tra un numero e lettere elevate a potenze, come 3 per x al quadrato.\nUn polinomio è una somma di monomi.\nIl grado di un polinomio è l'esponente più alto della lettera.\nSomma, differenza e prodotto di polinomi sono ancora polinomi.\nSono le funzioni più semplici dopo quelle costanti.",
    perche_fa_pensare: "Con i polinomi si può approssimare quasi ogni curva. Un mattone semplice costruisce forme molto complesse.",
    dove_si_usa: "Nella grafica al computer, nei modelli economici, nell'approssimazione di funzioni.",
    formula: {
      latex: 'P(x) = 5x^2 + 3x + 100',
      come_si_legge: "pi di x uguale cinque x al quadrato più tre x più cento.",
      a_parole: "Un polinomio di secondo grado: tre monomi sommati, con la lettera elevata al massimo alla seconda."
    },
    prerequisiti: [
      { id: 'espressione-algebrica', perche: "Un polinomio è un tipo particolare di espressione algebrica." }
    ],
    parenti: []
  },
  {
    id: 'prodotti-notevoli', titolo: 'Prodotti notevoli', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 2,
    sinonimi: ['quadrato di un binomio', 'differenza di quadrati', 'cubo di un binomio', 'prodotti notevoli'],
    domanda: "Ci sono moltiplicazioni che conviene conoscere a memoria?",
    esempio: "Per calcolare 21 per 19 a mente, pensa a 20 più 1 per 20 meno 1. Fa 400 meno 1, cioè 399.",
    idea: "I prodotti notevoli sono moltiplicazioni tra polinomi che si incontrano spessissimo.\nIl quadrato di una somma è il quadrato del primo, più il doppio prodotto, più il quadrato del secondo.\nLa somma per la differenza degli stessi termini dà la differenza dei loro quadrati.\nSono scorciatoie, ma hanno anche un significato geometrico.\nAd esempio il quadrato di una somma si vede dividendo un quadrato in quattro pezzi.",
    perche_fa_pensare: "Una regola algebrica può essere anche un disegno. Algebra e geometria raccontano la stessa cosa in due lingue.",
    dove_si_usa: "Nel calcolo a mente, nella scomposizione dei polinomi, nella risoluzione delle equazioni.",
    formula: {
      latex: '(a+b)^2 = a^2 + 2ab + b^2, \\qquad (a+b)(a-b) = a^2 - b^2',
      come_si_legge: "a più b, al quadrato, uguale ad a al quadrato più due a b più b al quadrato. Poi: a più b, per a meno b, uguale ad a al quadrato meno b al quadrato.",
      a_parole: "Il quadrato di una somma ha un termine in più del previsto, il doppio prodotto. La somma per la differenza dà la differenza dei quadrati."
    },
    prerequisiti: [
      { id: 'monomi-polinomi', perche: "Sono moltiplicazioni tra polinomi." }
    ],
    parenti: []
  },
  {
    id: 'scomposizione-polinomi', titolo: 'Scomposizione dei polinomi', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 2,
    sinonimi: ['scomporre', 'fattorizzare un polinomio', 'raccoglimento', 'scomposizione in fattori'],
    domanda: "Si può spezzare un polinomio in pezzi più semplici?",
    esempio: "x al quadrato meno 9 si scrive come x più 3 per x meno 3. Così è chiaro che si annulla quando x vale 3 o meno 3.",
    idea: "Scomporre un polinomio vuol dire scriverlo come prodotto di polinomi più semplici.\nÈ l'operazione inversa della moltiplicazione.\nSi usano il raccoglimento a fattor comune e i prodotti notevoli letti al contrario.\nUn prodotto vale zero solo se vale zero almeno uno dei fattori.\nPer questo la scomposizione aiuta a risolvere le equazioni.",
    perche_fa_pensare: "Come i numeri si scompongono in primi, anche i polinomi hanno i loro mattoni. La stessa idea ritorna in contesti diversi.",
    dove_si_usa: "Nella risoluzione delle equazioni, nello studio del segno, nella semplificazione dei calcoli.",
    prerequisiti: [
      { id: 'prodotti-notevoli', perche: "Molte scomposizioni sono prodotti notevoli letti al contrario." }
    ],
    parenti: [
      { id: 'fattorizzazione-in-primi', perche: "Scomporre un polinomio somiglia a scomporre un numero in fattori primi." }
    ]
  },
  {
    id: 'divisione-polinomi', titolo: 'Divisione tra polinomi e teorema del resto', tipo: 'concetto', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 2,
    sinonimi: ['divisione tra polinomi', 'regola di Ruffini', 'teorema del resto', 'radici di un polinomio', 'Ruffini', 'zeri di un polinomio'],
    domanda: "Si può dividere un polinomio per un altro, come si fa con i numeri?",
    esempio: "Se un polinomio vale zero quando x è uguale a 2, allora è divisibile per x meno 2. Lo sai senza fare la divisione.",
    idea: "I polinomi si possono dividere come i numeri, ottenendo un quoziente e un resto.\nIl resto ha sempre grado più basso del divisore.\nIl teorema del resto dice che, dividendo per x meno a, il resto è il valore del polinomio in a.\nQuindi a è una radice, cioè uno zero del polinomio, se e solo se la divisione è esatta.\nLa regola di Ruffini è un modo rapido per fare queste divisioni.",
    perche_fa_pensare: "Numeri e polinomi si comportano in modo sorprendentemente simile. L'algebra astratta nasce proprio da somiglianze come questa.",
    dove_si_usa: "Nella ricerca delle soluzioni delle equazioni e nei codici che correggono gli errori.",
    prerequisiti: [
      { id: 'monomi-polinomi', perche: "Si dividono polinomi." },
      { id: 'divisione-con-resto', perche: "Funziona come la divisione con resto tra numeri." }
    ],
    parenti: [
      { id: 'algoritmo-di-euclide', perche: "Grazie alla divisione con resto, l'algoritmo di Euclide funziona anche con i polinomi." }
    ]
  },
  {
    id: 'teorema-fondamentale-algebra', titolo: 'Teorema fondamentale dell\'algebra', tipo: 'teorema', area: 'algebra-elementare', argomento: 'calcolo-letterale', livello: 3,
    sinonimi: ['teorema fondamentale dell\'algebra', 'radici complesse', 'ogni polinomio ha una radice', 'Gauss'],
    domanda: "Ogni equazione con i polinomi ha una soluzione?",
    esempio: "L'equazione x al quadrato più 1 uguale a zero non ha soluzioni reali. Tra i complessi ne ha due: i e meno i.",
    idea: "Ogni polinomio di grado almeno uno ha almeno una radice tra i [[numeri-complessi|numeri complessi]].\nNe segue che un polinomio di grado n si scompone in n fattori di primo grado.\nQuindi ha esattamente n radici, contando quelle ripetute.\nIl teorema garantisce che le soluzioni esistono, ma non dice come trovarle.\nNonostante il nome, tutte le dimostrazioni note usano almeno un'idea dell'analisi.",
    perche_fa_pensare: "Con i complessi i numeri «bastano»: nessuna equazione polinomiale chiede numeri ancora nuovi. È come se il viaggio fosse finito.",
    dove_si_usa: "Nell'ingegneria dei controlli, nell'elaborazione dei segnali, in tutta l'algebra.",
    prerequisiti: [
      { id: 'numeri-complessi', perche: "Le radici esistono sempre, ma tra i numeri complessi." },
      { id: 'divisione-polinomi', perche: "Trovata una radice, si divide il polinomio e si continua." }
    ],
    parenti: [
      { id: 'teorema-di-liouville', perche: "Una delle dimostrazioni più eleganti usa il teorema di Liouville dell'analisi complessa." }
    ]
  },

  // Equazioni e disequazioni
  {
    id: 'equazione', titolo: 'Equazione', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 1,
    sinonimi: ['equazioni', 'uguaglianza', 'incognita', 'soluzione'],
    domanda: "Come si trova un numero che non si conosce?",
    esempio: "Un numero più 5 fa 12. Quale numero? È un'equazione, e la soluzione è 7.",
    idea: "Un'equazione è un'uguaglianza che contiene una o più [[variabile|incognite]].\nRisolverla vuol dire trovare i valori che la rendono vera.\nQuei valori si chiamano soluzioni.\nUn'equazione può avere una soluzione, molte, infinite o nessuna.\nPer controllare una soluzione basta sostituirla e fare il conto.",
    perche_fa_pensare: "Trovare una soluzione è spesso difficile, controllarla è rapido. Questa differenza è al cuore di un grande problema aperto dell'informatica.",
    dove_si_usa: "In ogni problema in cui si cerca una quantità sconosciuta: prezzi, tempi, dosi.",
    prerequisiti: [
      { id: 'variabile', perche: "L'incognita è una variabile di cui si cerca il valore." }
    ],
    parenti: [
      { id: 'p-contro-np', perche: "Trovare soluzioni è difficile, controllarle è rapido: P contro NP chiede se questa differenza sia inevitabile." }
    ]
  },
  {
    id: 'modellizzare-con-equazioni', titolo: 'Tradurre un problema in equazione', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 1,
    sinonimi: ['problemi con le equazioni', 'mettere in equazione', 'problemi', 'tradurre in equazione'],
    domanda: "Come si trasforma un problema a parole in matematica?",
    esempio: "Marco ha il triplo dell'età di sua figlia, e insieme hanno 48 anni. Chiami e l'età della figlia: e più tre e fa 48, quindi la figlia ha 12 anni.",
    idea: "Tradurre un problema in equazione vuol dire dare un nome alle quantità sconosciute.\nPoi si scrivono i legami tra le quantità come uguaglianze.\nSi risolve l'equazione con le regole dell'algebra.\nInfine si controlla che la soluzione abbia senso nel problema di partenza.\nLa parte più difficile, di solito, è la traduzione, non il calcolo.",
    perche_fa_pensare: "Il passaggio dalle parole ai simboli è un atto creativo. Due persone possono tradurre lo stesso problema in modi diversi.",
    dove_si_usa: "Nella vita di tutti i giorni, in economia, in ingegneria: ovunque un problema si possa misurare.",
    prerequisiti: [
      { id: 'equazione', perche: "Il problema diventa un'equazione da risolvere." }
    ],
    parenti: []
  },
  {
    id: 'principi-di-equivalenza', titolo: 'Principi di equivalenza', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 1,
    sinonimi: ['principi di equivalenza', 'portare dall\'altra parte', 'bilancia', 'trasportare i termini'],
    domanda: "Cosa si può fare a un'equazione senza cambiarne le soluzioni?",
    esempio: "Una bilancia in equilibrio resta in equilibrio se aggiungi lo stesso peso su entrambi i piatti.",
    idea: "Un'equazione è come una bilancia in equilibrio.\nSe aggiungi o togli la stessa quantità da entrambi i lati, le soluzioni non cambiano.\nAnche moltiplicare o dividere entrambi i lati per lo stesso numero diverso da zero le lascia uguali.\nCon questi passaggi si isola l'incognita.\n«Portare un termine dall'altra parte cambiando segno» è solo una scorciatoia di questi principi.",
    perche_fa_pensare: "Una regola meccanica imparata a memoria diventa chiara quando se ne vede il perché. Qui il perché è una bilancia.",
    dove_si_usa: "In ogni risoluzione di equazioni e nelle formule inverse.",
    prerequisiti: [
      { id: 'equazione', perche: "Sono le mosse lecite per risolvere un'equazione." }
    ],
    parenti: []
  },
  {
    id: 'equazioni-di-primo-grado', titolo: 'Equazioni di primo grado', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 1,
    sinonimi: ['equazioni lineari', 'primo grado', 'equazione di primo grado'],
    domanda: "Come si risolve un'equazione in cui l'incognita compare senza potenze?",
    esempio: "Un taxi chiede 3 euro alla partenza e 2 euro al chilometro. Con 15 euro, quanti chilometri puoi fare? 3 più 2 volte k fa 15, quindi 6 chilometri.",
    idea: "Un'equazione di primo grado ha l'incognita elevata al massimo alla prima.\nSi può sempre ricondurre alla forma: un numero per x uguale a un altro numero.\nSe il numero davanti a x non è zero, c'è una sola soluzione.\nSi trova con i [[principi-di-equivalenza|principi di equivalenza]], isolando x.\nSul piano cartesiano corrisponde al punto in cui una retta raggiunge un'altezza fissata.",
    perche_fa_pensare: "Molti fenomeni, visti da vicino, si comportano in modo lineare. Per questo le equazioni più semplici sono anche tra le più utili.",
    dove_si_usa: "Nei conti di costi, tempi, consumi e in ogni proporzione.",
    prerequisiti: [
      { id: 'principi-di-equivalenza', perche: "Si risolve applicando i principi di equivalenza." },
      { id: 'espressione-algebrica', perche: "I due lati dell'equazione sono espressioni algebriche." }
    ],
    parenti: []
  },
  {
    id: 'sistemi-di-equazioni', titolo: 'Sistemi di equazioni', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 2,
    sinonimi: ['sistema', 'sistemi lineari', 'due equazioni due incognite', 'metodo di sostituzione'],
    domanda: "Come si trovano più numeri sconosciuti insieme?",
    esempio: "Due panini e un caffè costano 7 euro, un panino e un caffè 4 euro. Confrontando le due situazioni scopri che un panino costa 3 euro.",
    idea: "Un sistema è un insieme di equazioni che devono valere tutte insieme.\nDi solito servono tante equazioni quante sono le incognite.\nSi risolve per sostituzione, ricavando un'incognita e sostituendola, oppure sottraendo le equazioni.\nUn sistema può avere una soluzione, infinite o nessuna.\nCon due incognite, ogni equazione è una retta e la soluzione è il loro punto d'incontro.",
    perche_fa_pensare: "Le informazioni prese da sole non bastano, insieme sì. Un sistema è un modo di incrociare indizi.",
    dove_si_usa: "Nella pianificazione della produzione, nei bilanci, nella navigazione satellitare.",
    prerequisiti: [
      { id: 'equazioni-di-primo-grado', perche: "Ogni equazione del sistema è di solito di primo grado." }
    ],
    parenti: []
  },
  {
    id: 'equazioni-di-secondo-grado', titolo: 'Equazioni di secondo grado', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 2,
    sinonimi: ['equazione di secondo grado', 'formula risolutiva', 'discriminante', 'delta', 'equazioni quadratiche'],
    domanda: "Come si risolve un'equazione in cui l'incognita compare al quadrato?",
    esempio: "Un'aiuola rettangolare ha un lato più lungo dell'altro di 2 metri e un'area di 24 metri quadrati. Un'equazione di secondo grado dice che i lati misurano 4 e 6 metri.",
    idea: "Un'equazione di secondo grado contiene l'incognita al quadrato.\nPuò avere due soluzioni reali, una sola o nessuna.\nLo decide il discriminante, un numero calcolato dai coefficienti.\nLe soluzioni si trovano con una formula risolutiva, nota da molti secoli.\nSul piano, le soluzioni sono i punti in cui una [[parabola]] taglia l'asse orizzontale.",
    perche_fa_pensare: "Quando il discriminante è negativo, le soluzioni richiedono numeri nuovi: i numeri complessi.",
    dove_si_usa: "Nelle traiettorie dei proiettili, nei problemi di aree, nei calcoli di ottimizzazione.",
    formula: {
      latex: 'ax^2 + bx + c = 0 \\quad\\Rightarrow\\quad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      come_si_legge: "a x al quadrato più b x più c uguale a zero. Allora x è uguale a meno b, più o meno la radice di b al quadrato meno quattro a c. Il tutto diviso per due a.",
      a_parole: "Le soluzioni si ottengono dai tre coefficienti dell'equazione. Il numero sotto la radice, il discriminante, dice quante soluzioni reali ci sono."
    },
    prerequisiti: [
      { id: 'equazioni-di-primo-grado', perche: "Il primo passo è saper risolvere equazioni più semplici." },
      { id: 'scomposizione-polinomi', perche: "Spesso si risolve scomponendo il polinomio in due fattori." },
      { id: 'radice-quadrata', perche: "La formula risolutiva contiene una radice quadrata." }
    ],
    parenti: []
  },
  {
    id: 'equazioni-di-grado-superiore', titolo: 'Equazioni di terzo e quarto grado', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 3,
    sinonimi: ['equazione di terzo grado', 'equazione cubica', 'formula di Cardano', 'Tartaglia', 'equazione di quarto grado'],
    domanda: "Esiste una formula per tutte le equazioni?",
    esempio: "Nel Cinquecento i matematici italiani si sfidavano in gare pubbliche: vinceva chi risolveva più equazioni di terzo grado.",
    idea: "Per le equazioni di terzo e quarto grado esistono formule risolutive, come per il secondo grado.\nLe trovarono matematici italiani del Cinquecento, tra cui Tartaglia, Cardano e Ferrari.\nLe formule sono lunghe e usano radici quadrate e cubiche.\nA volte, per arrivare a soluzioni reali, bisogna passare dai [[numeri-complessi|numeri complessi]].\nPer il quinto grado, invece, una formula generale di questo tipo non esiste.",
    perche_fa_pensare: "I numeri complessi non sono nati per capriccio. Comparivano a metà dei calcoli, anche quando le soluzioni finali erano reali.",
    dove_si_usa: "Nella storia della matematica, e oggi nei programmi di calcolo simbolico.",
    prerequisiti: [
      { id: 'equazioni-di-secondo-grado', perche: "Le formule generalizzano quella di secondo grado." },
      { id: 'numeri-complessi', perche: "A metà del calcolo possono comparire numeri complessi." }
    ],
    parenti: []
  },
  {
    id: 'disequazioni', titolo: 'Disequazioni', tipo: 'concetto', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 2,
    sinonimi: ['disequazione', 'maggiore', 'minore', 'disuguaglianze', 'intervalli'],
    domanda: "Come si trovano tutti i numeri che rispettano un limite?",
    esempio: "Un'offerta telefonica costa 10 euro più 5 centesimi al minuto. Con 20 euro puoi parlare al massimo 200 minuti: va bene ogni durata fino a 200.",
    idea: "Una disequazione è come un'equazione, ma con «minore» o «maggiore» al posto di «uguale».\nLe sue soluzioni di solito non sono pochi numeri, ma interi intervalli.\nSi risolve con regole simili a quelle delle equazioni.\nC'è un'eccezione importante: se moltiplichi per un numero negativo, il verso si inverte.\nCon le disequazioni si descrivono vincoli e limiti.",
    perche_fa_pensare: "Nella vita reale si cercano più spesso limiti che valori esatti. Le disequazioni sono la matematica dei vincoli.",
    dove_si_usa: "Nei budget, nelle dosi massime dei farmaci, nella programmazione lineare.",
    prerequisiti: [
      { id: 'equazioni-di-primo-grado', perche: "Si risolve con tecniche simili a quelle delle equazioni." }
    ],
    parenti: []
  },
  {
    id: 'disuguaglianza-am-gm', titolo: 'Disuguaglianza tra media aritmetica e media geometrica', tipo: 'teorema', area: 'algebra-elementare', argomento: 'equazioni-e-disequazioni', livello: 2,
    sinonimi: ['media aritmetica', 'media geometrica', 'disuguaglianza delle medie', 'am-gm'],
    domanda: "Perché il quadrato è il rettangolo più «conveniente»?",
    esempio: "Con 20 metri di rete recinti un rettangolo. L'area più grande la ottieni con un quadrato di lato 5: 25 metri quadrati.",
    idea: "La media aritmetica di due numeri positivi è la loro somma divisa per due.\nLa media geometrica è la radice quadrata del loro prodotto.\nLa disuguaglianza dice che la media geometrica non supera mai quella aritmetica.\nLe due medie sono uguali solo quando i due numeri sono uguali.\nPer questo, a perimetro fissato, il rettangolo di area massima è il quadrato.",
    perche_fa_pensare: "L'equilibrio, spesso, è anche l'ottimo. Una semplice disuguaglianza lo dimostra.",
    dove_si_usa: "Nei problemi di ottimizzazione, in economia e nella stima dei rendimenti medi.",
    formula: {
      latex: '\\frac{a+b}{2} \\geq \\sqrt{ab} \\qquad (a, b \\geq 0)',
      come_si_legge: "a più b, fratto due, è maggiore o uguale alla radice di a per b. Qui a e b sono positivi o nulli.",
      a_parole: "La media aritmetica di due numeri positivi non è mai più piccola della loro media geometrica."
    },
    prerequisiti: [
      { id: 'disequazioni', perche: "È una disuguaglianza tra due espressioni." },
      { id: 'radice-quadrata', perche: "La media geometrica è una radice quadrata." }
    ],
    parenti: [
      { id: 'problema-di-ottimizzazione', perche: "Risolve senza calcoli lunghi alcuni problemi di massimo e di minimo." }
    ]
  },

  // Funzioni elementari
  {
    id: 'grafico-di-funzione', titolo: 'Grafico di una funzione', tipo: 'concetto', area: 'algebra-elementare', argomento: 'funzioni-elementari', livello: 2,
    sinonimi: ['grafico', 'rappresentazione grafica', 'curva', 'disegno di una funzione'],
    domanda: "Come si vede, con un'occhiata, il comportamento di una funzione?",
    esempio: "Il grafico della temperatura di una giornata mostra a colpo d'occhio l'ora più calda e quella più fredda.",
    idea: "Il grafico di una funzione è l'insieme dei punti che hanno come coordinate un valore e il suo risultato.\nSi disegna sul [[piano-cartesiano|piano cartesiano]]: il valore in orizzontale, il risultato in verticale.\nUn grafico mostra dove la funzione cresce, dove cala, dove ha massimi e minimi.\nOgni retta verticale incontra il grafico al massimo una volta.\nÈ un ponte tra l'algebra e la geometria.",
    perche_fa_pensare: "Trasformare una regola in un'immagine cambia il modo di pensarla. Vediamo cose che nella formula restavano nascoste.",
    dove_si_usa: "Nei giornali, nei referti medici, nelle analisi di borsa e nei sondaggi.",
    prerequisiti: [
      { id: 'funzione', perche: "Si rappresenta una funzione." },
      { id: 'piano-cartesiano', perche: "Il grafico si disegna sul piano cartesiano." }
    ],
    parenti: []
  },
  {
    id: 'funzione-esponenziale', titolo: 'Funzione esponenziale', tipo: 'concetto', area: 'algebra-elementare', argomento: 'funzioni-elementari', livello: 2,
    sinonimi: ['esponenziale', 'crescita esponenziale', 'potenza con esponente variabile'],
    domanda: "Cosa vuol dire crescere «in modo esponenziale»?",
    esempio: "Una colonia di batteri raddoppia ogni ora. Dopo 10 ore è circa mille volte più grande, dopo 20 ore circa un milione di volte.",
    idea: "Nella funzione esponenziale la variabile sta all'esponente, come in 2 alla x.\nOgni volta che x aumenta di 1, il valore si moltiplica per la stessa base.\nSe la base è maggiore di 1, la crescita accelera sempre di più.\nSe la base è tra 0 e 1, il valore cala e si avvicina a zero senza mai toccarlo.\nLa base più importante in matematica è il [[numero-e|numero e]].",
    perche_fa_pensare: "La crescita esponenziale sembra lenta, poi esplode. Il nostro istinto la sottovaluta quasi sempre, come si è visto con le epidemie.",
    dove_si_usa: "Negli interessi composti, nelle epidemie, nel decadimento radioattivo.",
    prerequisiti: [
      { id: 'potenze', perche: "È una potenza in cui varia l'esponente." },
      { id: 'grafico-di-funzione', perche: "Il suo grafico mostra la crescita accelerata." }
    ],
    parenti: []
  },
  {
    id: 'logaritmo', titolo: 'Logaritmo', tipo: 'concetto', area: 'algebra-elementare', argomento: 'funzioni-elementari', livello: 2,
    sinonimi: ['logaritmi', 'log', 'logaritmo naturale', 'scala logaritmica'],
    domanda: "A quale potenza bisogna elevare un numero per ottenerne un altro?",
    esempio: "Il logaritmo in base 10 di 1000 è 3, perché 10 alla terza fa 1000. Dice, all'incirca, quante cifre ha un numero.",
    idea: "Il logaritmo è l'operazione inversa della potenza.\nIl logaritmo in base b di un numero dice a quale esponente elevare b per ottenere quel numero.\nTrasforma le moltiplicazioni in somme: il logaritmo di un prodotto è la somma dei logaritmi.\nCresce molto lentamente.\nPer questo le scale logaritmiche rendono confrontabili grandezze molto diverse.",
    perche_fa_pensare: "Molti dei nostri sensi percepiscono in modo all'incirca logaritmico. Un suono dieci volte più intenso non ci sembra dieci volte più forte.",
    dove_si_usa: "Nei decibel, nella scala dei terremoti, nel pH, nell'analisi degli algoritmi.",
    formula: {
      latex: '\\log_b x = y \\iff b^y = x',
      come_si_legge: "logaritmo in base b di x uguale y se e solo se b elevato alla y è uguale a x.",
      a_parole: "Il logaritmo è l'esponente a cui elevare la base per ottenere il numero."
    },
    prerequisiti: [
      { id: 'funzione-esponenziale', perche: "Il logaritmo disfa l'esponenziale." },
      { id: 'funzione-inversa', perche: "È la funzione inversa dell'esponenziale." }
    ],
    parenti: []
  },

  // Successioni
  {
    id: 'successione', titolo: 'Successioni', tipo: 'concetto', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['successioni', 'sequenza', 'sequenza di numeri', 'termine n-esimo'],
    domanda: "Come si descrive una lista di numeri che non finisce mai?",
    esempio: "Il saldo di un conto alla fine di ogni mese forma una successione: primo mese, secondo mese, terzo mese…",
    idea: "Una successione è una lista infinita e ordinata di numeri.\nOgni numero si chiama termine e ha una posizione: primo, secondo, terzo.\nIn modo preciso, è una [[funzione]] che a ogni numero naturale associa un numero.\nSi definisce con una formula per il termine n-esimo, o con una regola che porta da un termine al successivo.\nStudiare dove «va a finire» una successione porta all'idea di limite.",
    perche_fa_pensare: "Una lista che non finisce può comunque avere una meta. È il primo passo per domare l'infinito.",
    dove_si_usa: "Nelle rate di un mutuo, nelle misure ripetute nel tempo, nei programmi che ripetono un calcolo.",
    prerequisiti: [
      { id: 'funzione', perche: "Una successione è una funzione definita sui numeri naturali." },
      { id: 'numeri-naturali', perche: "Le posizioni dei termini sono numeri naturali." }
    ],
    parenti: []
  },
  {
    id: 'sommatoria', titolo: 'Il simbolo di sommatoria', tipo: 'concetto', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['sommatoria', 'sigma', 'simbolo di somma', 'somma di molti termini'],
    domanda: "Come si scrive in breve una somma di moltissimi termini?",
    esempio: "La somma dei primi cento numeri si scrive come «somma di k, per k che va da 1 a 100». Una riga al posto di cento numeri.",
    idea: "La sommatoria è un simbolo che indica la somma di molti termini costruiti con la stessa regola.\nSi indica con la lettera greca sigma maiuscola.\nSotto e sopra il simbolo si scrivono il primo e l'ultimo valore di un indice.\nAccanto si scrive la regola che dà ogni termine.\nNon cambia la matematica: è solo una scrittura compatta.",
    perche_fa_pensare: "Un buon simbolo libera la mente dal superfluo. Ragionare su una riga è più comodo che ragionare su cento numeri.",
    dove_si_usa: "In statistica, in fisica, in informatica, ovunque compaiano somme lunghe.",
    formula: {
      latex: '\\sum_{k=1}^{100} k = 1 + 2 + 3 + \\cdots + 100',
      come_si_legge: "sommatoria per k che va da 1 a 100 di k. È uguale a uno più due più tre, fino a cento.",
      a_parole: "Il simbolo sigma riassume la somma di tutti i numeri da 1 a 100."
    },
    prerequisiti: [
      { id: 'successione', perche: "Si sommano i termini di una successione." },
      { id: 'addizione-sottrazione', perche: "È una somma, scritta in forma compatta." }
    ],
    parenti: []
  },
  {
    id: 'progressione-aritmetica', titolo: 'Progressione aritmetica', tipo: 'concetto', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['progressione aritmetica', 'differenza costante', 'crescita lineare'],
    domanda: "Cosa succede se a ogni passo aggiungi sempre la stessa quantità?",
    esempio: "Metti da parte 50 euro al mese. Il totale cresce di 50 euro a ogni mese: 50, 100, 150, 200…",
    idea: "Una progressione aritmetica è una successione in cui ogni termine si ottiene aggiungendo una quantità fissa al precedente.\nLa quantità fissa si chiama ragione.\nIl termine n-esimo è il primo termine più n meno 1 volte la ragione.\nSul grafico, i termini stanno su una retta.\nÈ il modello della crescita lineare.",
    perche_fa_pensare: "Aggiungere sempre la stessa cosa sembra il modo più naturale di crescere. Ma molti fenomeni reali crescono in modo molto diverso.",
    dove_si_usa: "Nei risparmi costanti, nelle file di posti a teatro, negli orari dei mezzi pubblici.",
    prerequisiti: [
      { id: 'successione', perche: "È un tipo particolare di successione." }
    ],
    parenti: []
  },
  {
    id: 'somma-di-gauss', titolo: 'La somma dei primi numeri naturali', tipo: 'teorema', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['somma dei primi n numeri', 'Gauss', 'somma di una progressione aritmetica', 'numeri triangolari'],
    domanda: "Come si sommano i numeri da 1 a 100 senza fare cento addizioni?",
    esempio: "Si racconta che il giovane Gauss sommò i numeri da 1 a 100 in pochi istanti. Accoppiò 1 con 100, 2 con 99, e così via: 50 coppie da 101 fanno 5050.",
    idea: "Per sommare i numeri da 1 a n basta accoppiarli: il primo con l'ultimo, il secondo con il penultimo.\nOgni coppia dà la stessa somma, n più 1.\nLe coppie sono la metà di n.\nQuindi la somma è n per n più 1, diviso 2.\nLo stesso trucco funziona per ogni [[progressione-aritmetica|progressione aritmetica]].",
    perche_fa_pensare: "Un problema lungo diventa breve se lo guardi dal lato giusto. Spesso la matematica è l'arte di cambiare punto di vista.",
    dove_si_usa: "Nel calcolo del costo degli algoritmi, nei conteggi, nelle rate crescenti.",
    formula: {
      latex: '1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}',
      come_si_legge: "uno più due più eccetera più n è uguale a n per n più uno, fratto due.",
      a_parole: "La somma dei primi n numeri è il numero di coppie per il valore di ogni coppia."
    },
    prerequisiti: [
      { id: 'progressione-aritmetica', perche: "I numeri da 1 a n formano una progressione aritmetica." },
      { id: 'sommatoria', perche: "La somma si scrive con il simbolo di sommatoria." }
    ],
    parenti: [
      { id: 'induzione-matematica', perche: "La formula si può dimostrare anche per induzione." }
    ]
  },
  {
    id: 'progressione-geometrica', titolo: 'Progressione geometrica', tipo: 'concetto', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['progressione geometrica', 'rapporto costante', 'raddoppio', 'crescita geometrica'],
    domanda: "Cosa succede se a ogni passo moltiplichi sempre per lo stesso numero?",
    esempio: "Una leggenda racconta di un chicco di riso sulla prima casella di una scacchiera, due sulla seconda, quattro sulla terza. Sull'ultima casella ne servirebbero più di nove miliardi di miliardi.",
    idea: "Una progressione geometrica è una successione in cui ogni termine si ottiene moltiplicando il precedente per un numero fisso.\nIl numero fisso si chiama ragione.\nSe la ragione è maggiore di 1, i termini crescono sempre più in fretta.\nSe è tra 0 e 1, i termini si rimpiccioliscono verso zero.\nÈ la versione «a passi» della crescita esponenziale.",
    perche_fa_pensare: "Moltiplicare invece di aggiungere cambia tutto. Dopo pochi passi le due crescite non sono più nemmeno paragonabili.",
    dove_si_usa: "Negli interessi composti, nelle catene di contagio, nella diluizione dei farmaci.",
    prerequisiti: [
      { id: 'successione', perche: "È un tipo particolare di successione." },
      { id: 'potenze', perche: "Il termine n-esimo contiene una potenza della ragione." }
    ],
    parenti: [
      { id: 'funzione-esponenziale', perche: "È la versione a passi interi della funzione esponenziale." }
    ]
  },
  {
    id: 'definizione-ricorsiva', titolo: 'Definizioni ricorsive', tipo: 'concetto', area: 'algebra-elementare', argomento: 'successioni-e-progressioni', livello: 2,
    sinonimi: ['ricorsione', 'ricorsivo', 'definizione per ricorrenza', 'relazione di ricorrenza'],
    domanda: "Si può definire qualcosa usando la cosa stessa?",
    esempio: "Il fattoriale di 5 è 5 per il fattoriale di 4. Il fattoriale di 4 è 4 per il fattoriale di 3. E così via, fino al fattoriale di 1, che vale 1.",
    idea: "Una definizione ricorsiva dice come ottenere ogni termine a partire dai precedenti.\nServono due parti: uno o più valori di partenza e una regola per andare avanti.\nNon è un circolo vizioso, perché ogni passo si appoggia su qualcosa di già definito.\nMolte successioni importanti si definiscono così.\nÈ anche il modo di funzionare di molti programmi.",
    perche_fa_pensare: "Definire qualcosa in termini di sé stesso sembra un trucco. Funziona perché si scende sempre verso un punto di partenza.",
    dove_si_usa: "In informatica, nei frattali, nei modelli di popolazione.",
    prerequisiti: [
      { id: 'successione', perche: "Definisce una successione un termine alla volta." }
    ],
    parenti: []
  }
]);
