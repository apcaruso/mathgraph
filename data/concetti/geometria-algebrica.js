/* Geometria algebrica */
Mappa.registra([
  // Curve algebriche
  {
    id: 'curve-algebriche', titolo: 'Curve definite da equazioni', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'curve-e-intersezioni', livello: 2,
    sinonimi: ['curve algebriche', 'curva algebrica', 'grado di una curva', 'luogo degli zeri'],
    domanda: "Che forma ha un'equazione?",
    esempio: "L'equazione «x al quadrato più y al quadrato uguale 1» disegna una circonferenza. Cambiando i numeri e le potenze si ottengono curve di ogni forma.",
    idea: "Una curva algebrica è l'insieme dei punti che soddisfano un'equazione polinomiale in due variabili.\nRette e [[coniche]] sono le curve algebriche più semplici.\nIl grado del polinomio è anche il grado della curva.\nCon grado tre compaiono anelli, punte e incroci.\nLa geometria algebrica studia queste forme usando l'algebra dei polinomi.",
    perche_fa_pensare: "Un'equazione è una forma, e una forma è un'equazione. Cartesio ha aperto un ponte che si percorre ancora in entrambe le direzioni.",
    dove_si_usa: "Nella grafica al computer, nel disegno industriale, in crittografia, nella robotica.",
    prerequisiti: [
      { id: 'coniche', perche: "Le coniche sono le curve algebriche di grado due." },
      { id: 'monomi-polinomi', perche: "Le curve sono definite da polinomi." }
    ],
    parenti: []
  },
  {
    id: 'punti-singolari', titolo: 'Punti singolari', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'curve-e-intersezioni', livello: 3,
    sinonimi: ['singolarità', 'punto doppio', 'cuspide', 'nodo di una curva', 'punto singolare'],
    domanda: "Cosa succede nei punti in cui una curva si incrocia o fa una punta?",
    esempio: "Una curva a forma di pesce si incrocia nel punto della coda. Lì non c'è una sola retta tangente, ma due.",
    idea: "Un punto di una curva è singolare se lì la curva non ha una sola tangente ben definita.\nPuò essere un incrocio, detto nodo, o una punta, detta cuspide.\nNei punti singolari tutte le [[derivate-parziali|derivate parziali]] del polinomio si annullano.\nUna curva senza punti singolari si dice liscia.\nStudiare le singolarità, e come eliminarle, è un grande capitolo della geometria algebrica.",
    perche_fa_pensare: "I punti eccezionali, dove le regole si rompono, sono spesso i più interessanti. Lì si concentra l'informazione.",
    dove_si_usa: "Nella robotica, dove le singolarità sono posizioni da evitare, nella grafica e nell'ottica.",
    prerequisiti: [
      { id: 'curve-algebriche', perche: "Riguarda i punti delle curve algebriche." },
      { id: 'derivate-parziali', perche: "Si trovano annullando le derivate parziali." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-bezout', titolo: 'Teorema di Bézout sulle intersezioni', tipo: 'teorema', area: 'geometria-algebrica', argomento: 'curve-e-intersezioni', livello: 3,
    sinonimi: ['Bézout', 'teorema di Bézout', 'intersezione di curve', 'numero di intersezioni'],
    domanda: "In quanti punti si incontrano due curve?",
    esempio: "Una retta e una circonferenza si incontrano al massimo in 2 punti. Due coniche, al massimo in 4. Il teorema dice che sono esattamente così, contati bene.",
    idea: "Due curve algebriche di gradi m e n, senza parti in comune, si incontrano in m per n punti.\nPerché il conto torni sempre, bisogna fare tre accorgimenti.\nContare anche i punti con coordinate complesse e i punti all'infinito del piano proiettivo.\nE contare due volte i punti di tangenza, come radici doppie.\nÉtienne Bézout lo pubblicò nel 1779.",
    perche_fa_pensare: "Una legge semplice e perfetta si vede solo nel mondo giusto: complesso e proiettivo. Nel piano reale sembra avere eccezioni.",
    dove_si_usa: "Nella grafica al computer, nella robotica, nel calcolo simbolico.",
    formula: {
      latex: '\\#(C \\cap D) = m \\cdot n',
      come_si_legge: "il numero di punti comuni a ci e di è uguale a emme per enne.",
      a_parole: "Due curve di gradi m e n si incontrano in m per n punti, contati con le dovute regole."
    },
    prerequisiti: [
      { id: 'curve-algebriche', perche: "Riguarda curve algebriche." },
      { id: 'piano-proiettivo', perche: "Servono i punti all'infinito." },
      { id: 'numeri-complessi', perche: "Servono i punti con coordinate complesse." }
    ],
    parenti: [
      { id: 'teorema-fondamentale-algebra', perche: "Per una curva e una retta, è il teorema fondamentale dell'algebra." }
    ]
  },
  {
    id: 'genere-di-una-curva', titolo: 'Il genere: curve viste come superfici', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'curve-e-intersezioni', livello: 4,
    sinonimi: ['genere', 'genere di una curva', 'curve complesse', 'superfici di Riemann'],
    domanda: "Perché una curva complessa è in realtà una superficie?",
    esempio: "Con i numeri complessi, una cubica liscia diventa una superficie a forma di ciambella. Una retta diventa una sfera.",
    idea: "Se si ammettono coordinate complesse, una curva algebrica ha due dimensioni reali.\nDiventa quindi una superficie, chiusa se si aggiungono i punti all'infinito.\nIl suo numero di buchi si chiama genere.\nRette e coniche hanno genere zero, le cubiche lisce genere uno.\nIl genere controlla molte proprietà della curva, anche aritmetiche.",
    perche_fa_pensare: "Una curva di cui vediamo solo una linea è, in realtà, una superficie con buchi. Il disegno reale ne mostra solo una fetta.",
    dove_si_usa: "In geometria algebrica, in teoria dei numeri, in fisica teorica.",
    formula: {
      latex: 'g = \\frac{(d-1)(d-2)}{2}',
      come_si_legge: "gi uguale d meno uno per d meno due, fratto due.",
      a_parole: "Una curva piana liscia di grado d ha questo numero di buchi."
    },
    prerequisiti: [
      { id: 'curve-algebriche', perche: "Riguarda le curve algebriche." },
      { id: 'piano-complesso', perche: "Le coordinate diventano complesse." },
      { id: 'classificazione-superfici', perche: "Il genere classifica le superfici." }
    ],
    parenti: [
      { id: 'superfici-di-riemann', perche: "Una curva algebrica complessa è una superficie di Riemann." }
    ]
  },

  // Aritmetica delle curve
  {
    id: 'punti-razionali', titolo: 'Punti razionali su una curva', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'aritmetica-delle-curve', livello: 3,
    sinonimi: ['punti razionali', 'soluzioni razionali', 'geometria aritmetica', 'metodo delle corde'],
    domanda: "Quanti punti con coordinate razionali ha una curva?",
    esempio: "La circonferenza di raggio 1 ha infiniti punti con coordinate frazionarie, come tre quinti e quattro quinti. Ognuno dà una terna pitagorica.",
    idea: "Un punto razionale è un punto della curva con coordinate frazionarie.\nCercarli vuol dire risolvere un'[[equazioni-diofantee|equazione diofantea]].\nSu una conica, se c'è un punto razionale, ce ne sono infiniti.\nSi trovano tracciando rette razionali che passano per quel punto.\nPer le curve di grado più alto la situazione è molto più ricca e difficile.",
    perche_fa_pensare: "La geometria aiuta a risolvere problemi sui numeri interi. Tracciare rette diventa un modo di trovare soluzioni.",
    dove_si_usa: "In teoria dei numeri, in crittografia, nella costruzione di codici.",
    prerequisiti: [
      { id: 'curve-algebriche', perche: "Si cercano punti su curve algebriche." },
      { id: 'numeri-razionali', perche: "Le coordinate sono frazioni." },
      { id: 'equazioni-diofantee', perche: "È un modo geometrico di vedere le equazioni diofantee." }
    ],
    parenti: [
      { id: 'terne-pitagoriche', perche: "I punti razionali della circonferenza corrispondono alle terne pitagoriche." }
    ]
  },
  {
    id: 'curve-ellittiche', titolo: 'Curve ellittiche', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'aritmetica-delle-curve', livello: 3,
    sinonimi: ['curva ellittica', 'cubica', 'legge di gruppo', 'teorema di Mordell'],
    domanda: "Si possono «sommare» i punti di una curva?",
    esempio: "Su una curva ellittica, la retta per due punti incontra la curva in un terzo punto. Da questo si costruisce un modo di sommare i punti.",
    idea: "Una curva ellittica è una curva di grado tre, liscia, di genere uno.\nNonostante il nome, non è un'ellisse.\nI suoi punti si possono sommare con una costruzione geometrica fatta di rette.\nCon questa somma, i punti razionali formano un [[gruppo]].\nLouis Mordell dimostrò nel 1922 che bastano pochi punti per generarli tutti.",
    perche_fa_pensare: "Una curva che ha impegnato i matematici per secoli protegge oggi i pagamenti online. La matematica pura non sa a cosa servirà.",
    dove_si_usa: "In crittografia, nella fattorizzazione dei numeri, nella dimostrazione dell'ultimo teorema di Fermat.",
    formula: {
      latex: 'y^2 = x^3 + a x + b',
      come_si_legge: "y al quadrato uguale x al cubo più a x più b.",
      a_parole: "Una curva di terzo grado in questa forma, senza punti singolari."
    },
    prerequisiti: [
      { id: 'punti-razionali', perche: "Si studiano i loro punti razionali." },
      { id: 'gruppo', perche: "I punti formano un gruppo." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-faltings', titolo: 'Teorema di Faltings', tipo: 'teorema', area: 'geometria-algebrica', argomento: 'aritmetica-delle-curve', livello: 4,
    sinonimi: ['Faltings', 'congettura di Mordell', 'teorema di Faltings', 'curve di genere alto'],
    domanda: "Una curva complicata può avere infiniti punti razionali?",
    esempio: "Per ogni potenza n maggiore di 3, l'equazione di Fermat descrive una curva di genere almeno due. Quindi ha al massimo un numero finito di soluzioni essenzialmente diverse.",
    idea: "Il teorema di Faltings riguarda le curve di genere almeno due.\nDice che hanno solo un numero finito di punti razionali.\nIl genere, una proprietà della forma, decide quindi una questione sui numeri.\nGenere zero: nessuno o infiniti punti; genere uno: dipende; genere due o più: un numero finito.\nGerd Faltings lo dimostrò nel 1983, risolvendo una congettura di Mordell del 1922.",
    perche_fa_pensare: "La forma di una curva, contando i suoi buchi, dice quante soluzioni ha un'equazione sui numeri. Geometria e aritmetica sono intrecciate.",
    dove_si_usa: "In teoria dei numeri e in geometria aritmetica.",
    prerequisiti: [
      { id: 'genere-di-una-curva', perche: "L'ipotesi riguarda il genere della curva." },
      { id: 'punti-razionali', perche: "Riguarda i punti razionali." }
    ],
    parenti: []
  },

  // Varietà e schemi
  {
    id: 'varieta-algebrica', titolo: 'Varietà algebriche', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'varieta-algebriche', livello: 4,
    sinonimi: ['varietà algebrica', 'superfici algebriche', 'sistemi di equazioni polinomiali', 'luoghi di zeri'],
    domanda: "Come si studiano le forme usando solo l'algebra?",
    esempio: "Le posizioni possibili di un braccio robotico sono le soluzioni di un sistema di equazioni polinomiali. Formano una varietà algebrica.",
    idea: "Una varietà algebrica è l'insieme delle soluzioni di un sistema di equazioni polinomiali.\nPuò vivere in uno spazio con qualsiasi numero di dimensioni.\nCurve e superfici algebriche sono varietà di dimensione uno e due.\nLe equazioni che si annullano sulla varietà formano un [[ideale]].\nCosì la geometria della varietà si traduce nell'algebra dell'ideale.",
    perche_fa_pensare: "Forme che non si possono disegnare si studiano manipolando simboli. L'algebra vede dove l'occhio non arriva.",
    dove_si_usa: "In robotica, in crittografia, in fisica teorica, in statistica algebrica.",
    prerequisiti: [
      { id: 'curve-algebriche', perche: "Generalizza le curve algebriche." },
      { id: 'anello-dei-polinomi', perche: "Le equazioni sono polinomi." },
      { id: 'ideale', perche: "Ogni varietà corrisponde a un ideale." }
    ],
    parenti: []
  },
  {
    id: 'nullstellensatz', titolo: 'Teorema degli zeri di Hilbert', tipo: 'teorema', area: 'geometria-algebrica', argomento: 'varieta-algebriche', livello: 4,
    sinonimi: ['Nullstellensatz', 'teorema degli zeri', 'Hilbert', 'dizionario algebra-geometria'],
    domanda: "Le equazioni conoscono perfettamente le forme che descrivono?",
    esempio: "Immagina un sistema di equazioni senza soluzioni complesse. Combinando le equazioni si arriva sempre all'uguaglianza impossibile «1 uguale 0».",
    idea: "Il teorema degli zeri lega ideali di polinomi e varietà algebriche.\nVale quando si lavora con i numeri complessi, o con un campo simile.\nDice che un sistema di equazioni senza soluzioni produce sempre, combinandole, una contraddizione evidente.\nPiù in generale, dà un dizionario preciso tra geometria e algebra.\nDavid Hilbert lo dimostrò nel 1893.",
    perche_fa_pensare: "Ogni affermazione geometrica ha una traduzione algebrica, e viceversa. Due linguaggi diversi dicono esattamente le stesse cose.",
    dove_si_usa: "In geometria algebrica, nel calcolo simbolico, nella verifica automatica dei teoremi.",
    prerequisiti: [
      { id: 'varieta-algebrica', perche: "Collega varietà e ideali." },
      { id: 'campo', perche: "Vale su campi come quello dei complessi." }
    ],
    parenti: []
  },
  {
    id: 'schemi', titolo: 'Schemi', tipo: 'concetto', area: 'geometria-algebrica', argomento: 'varieta-algebriche', livello: 4,
    sinonimi: ['schemi', 'Grothendieck', 'geometria algebrica moderna', 'spettro di un anello'],
    domanda: "Si può fare geometria con qualsiasi sistema di numeri?",
    esempio: "Con gli schemi si può fare geometria sui numeri interi, come se i numeri primi fossero punti di una curva.",
    idea: "Gli schemi generalizzano le varietà algebriche.\nA ogni anello si associa uno spazio geometrico, i cui punti sono certi suoi ideali.\nCosì si può fare geometria con qualsiasi anello, anche con gli interi o con i campi finiti.\nAlexander Grothendieck costruì la teoria negli anni Sessanta, in migliaia di pagine.\nIl linguaggio usa molto la teoria delle categorie.",
    perche_fa_pensare: "Grothendieck preferiva costruire teorie così generali che i problemi si risolvessero quasi da soli. Lo chiamava il metodo del mare che sale.",
    dove_si_usa: "In geometria algebrica, in teoria dei numeri, nella dimostrazione dell'ultimo teorema di Fermat.",
    prerequisiti: [
      { id: 'varieta-algebrica', perche: "Generalizzano le varietà algebriche." },
      { id: 'categoria', perche: "La teoria è scritta nel linguaggio delle categorie." }
    ],
    parenti: []
  },
  {
    id: 'congettura-di-hodge', titolo: 'Congettura di Hodge', tipo: 'problema-aperto', area: 'geometria-algebrica', argomento: 'varieta-algebriche', livello: 4,
    sinonimi: ['Hodge', 'congettura di Hodge', 'cicli algebrici', 'problemi del millennio'],
    domanda: "Quali forme dentro una varietà si possono descrivere con equazioni?",
    esempio: "Dentro una varietà ci sono molte forme più piccole. La congettura chiede se certe forme, riconoscibili con la topologia, sono sempre fatte di pezzi descritti da equazioni.",
    idea: "La congettura di Hodge riguarda certe varietà algebriche complesse.\nLa topologia, con l'omologia, individua molte forme al loro interno.\nAlcune di queste forme si riconoscono con un criterio che usa le forme differenziali.\nLa congettura dice che queste forme speciali sono sempre combinazioni di sottovarietà algebriche.\nWilliam Hodge la propose nel 1950, ed è uno dei sette problemi del millennio.",
    perche_fa_pensare: "È forse il più difficile da spiegare dei problemi del millennio. Chiede se topologia e algebra vedono le stesse forme.",
    dove_si_usa: "È un problema di ricerca, al confine tra geometria, topologia e analisi.",
    prerequisiti: [
      { id: 'varieta-algebrica', perche: "Riguarda le varietà algebriche." },
      { id: 'omologia', perche: "Le forme sono classi di omologia." },
      { id: 'forme-differenziali', perche: "Il criterio di Hodge usa le forme differenziali." }
    ],
    parenti: []
  }
]);
