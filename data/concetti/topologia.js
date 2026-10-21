/* Topologia */
Mappa.registra([
  // Forme deformabili
  {
    id: 'deformazione-continua', titolo: 'Deformare senza strappare', tipo: 'concetto', area: 'topologia', argomento: 'idee-topologiche', livello: 1,
    sinonimi: ['topologia', 'deformazione', 'geometria della gomma', 'tazza e ciambella', 'proprietà topologiche'],
    domanda: "Cosa resta di una forma se la puoi deformare a piacere?",
    esempio: "Una tazza di plastilina si può modellare fino a diventare una ciambella, senza strappi né incollature. Per la topologia, sono la stessa forma.",
    idea: "La topologia studia le proprietà delle forme che non cambiano quando le si deforma.\nSi può stirare, piegare, schiacciare, ma non strappare né incollare.\nLunghezze, angoli e curvature non contano più.\nConta invece, ad esempio, quanti buchi ha una forma, o se è fatta di un pezzo solo.\nPer questo la topologia è chiamata a volte «geometria della gomma».",
    perche_fa_pensare: "Dimenticando quasi tutto di una forma, resta qualcosa di essenziale. La topologia cerca l'anima delle forme.",
    dove_si_usa: "Nelle mappe della metropolitana, in biologia molecolare, in fisica, nell'analisi dei dati.",
    prerequisiti: [],
    parenti: [
      { id: 'ponti-di-konigsberg', perche: "Il problema dei ponti è considerato uno dei primi ragionamenti topologici." }
    ]
  },
  {
    id: 'nastro-di-moebius', titolo: 'Nastro di Möbius', tipo: 'concetto', area: 'topologia', argomento: 'idee-topologiche', livello: 2,
    sinonimi: ['Möbius', 'nastro di Moebius', 'superficie con un solo lato', 'superficie non orientabile'],
    domanda: "Può una superficie avere un solo lato?",
    esempio: "Prendi una striscia di carta, girane un'estremità di mezzo giro e incolla le due estremità. Una formica può percorrerla tutta senza mai scavalcare il bordo.",
    idea: "Il nastro di Möbius è una superficie con un solo lato e un solo bordo.\nSi ottiene unendo le estremità di una striscia dopo mezzo giro.\nSe provi a colorarne un lato, finisci per colorarlo tutto.\nTagliandolo lungo la linea centrale non si divide in due, ma diventa un unico nastro più lungo.\nFu descritto nel 1858 da August Möbius e, in modo indipendente, da Johann Listing.",
    perche_fa_pensare: "Un oggetto che chiunque può costruire con carta e colla sfida l'idea di «sopra» e «sotto». L'intuizione va educata.",
    dove_si_usa: "Nei nastri trasportatori che si consumano in modo uniforme, nell'arte, nel simbolo del riciclo.",
    prerequisiti: [
      { id: 'deformazione-continua', perche: "È un esempio classico di proprietà topologica." }
    ],
    parenti: []
  },
  {
    id: 'superfici', titolo: 'Superfici: sfera, toro e bottiglia di Klein', tipo: 'concetto', area: 'topologia', argomento: 'idee-topologiche', livello: 2,
    sinonimi: ['superfici', 'sfera', 'toro', 'ciambella', 'bottiglia di Klein'],
    domanda: "Quante forme diverse può avere una superficie chiusa?",
    esempio: "Un pallone, una ciambella e un pretzel con tre buchi sono superfici diverse. Nessuna si deforma nelle altre.",
    idea: "Una superficie è una forma che, vista da vicino, sembra un pezzo di piano.\nLa sfera e il toro, cioè la ciambella, sono gli esempi più semplici.\nSi distinguono contando i buchi: la sfera non ne ha, il toro ne ha uno.\nEsistono anche superfici con un solo lato, come la bottiglia di Klein.\nLa bottiglia di Klein non si può costruire nello spazio senza farla attraversare sé stessa.",
    perche_fa_pensare: "Una formica su una superficie enorme non saprebbe dire se vive su una sfera o su un toro. Anche noi, sulla Terra, abbiamo dovuto scoprirlo.",
    dove_si_usa: "Nella grafica 3D, nei videogiochi, in cosmologia per la forma dell'universo.",
    prerequisiti: [
      { id: 'nastro-di-moebius', perche: "Il nastro di Möbius è il mattone delle superfici con un solo lato." }
    ],
    parenti: []
  },

  // Spazi topologici
  {
    id: 'spazio-metrico', titolo: 'Spazio metrico', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['metrica', 'distanza', 'spazio metrico', 'distanza del taxi', 'disuguaglianza triangolare'],
    domanda: "Cosa vuol dire, in generale, misurare una distanza?",
    esempio: "A Manhattan, per andare da un incrocio all'altro devi seguire le strade a griglia. La distanza «del taxi» è diversa da quella in linea d'aria.",
    idea: "Uno spazio metrico è un insieme in cui è definita una distanza tra due elementi qualsiasi.\nLa distanza non è mai negativa, ed è zero solo tra un elemento e sé stesso.\nÈ simmetrica: da A a B è come da B ad A.\nVale la disuguaglianza triangolare: una deviazione non accorcia mai la strada.\nCon queste regole si possono misurare distanze tra parole, funzioni o sequenze genetiche.",
    perche_fa_pensare: "La distanza abituale è solo una tra tante possibili. Ogni modo di misurare crea una geometria diversa.",
    dove_si_usa: "Nei correttori ortografici, nella genetica, nei motori di ricommandazione, nell'analisi.",
    prerequisiti: [
      { id: 'distanza-tra-punti', perche: "Generalizza la distanza tra punti del piano." },
      { id: 'funzione', perche: "La distanza è una funzione di due elementi." }
    ],
    parenti: []
  },
  {
    id: 'spazio-topologico', titolo: 'Spazio topologico', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['topologia', 'aperti', 'insiemi aperti', 'intorni', 'spazio topologico'],
    domanda: "Cosa vuol dire, in generale, essere vicini?",
    esempio: "Per dire che una funzione è continua basta sapere quali punti sono «vicini», senza misurare quanto. La topologia conserva solo questo.",
    idea: "Uno spazio topologico è un insieme con una nozione di vicinanza, anche senza distanze.\nLa vicinanza si descrive scegliendo certi sottoinsiemi, detti aperti.\nGli aperti devono rispettare poche regole, ad esempio che l'unione di aperti sia un aperto.\nOgni spazio metrico è uno spazio topologico, ma non viceversa.\nFelix Hausdorff diede una definizione di questo tipo nel 1914.",
    perche_fa_pensare: "Togliendo i numeri dalla distanza resta un'idea più astratta e più potente. A volte meno informazione vuol dire più generalità.",
    dove_si_usa: "In tutta l'analisi e la geometria moderne, e in informatica teorica.",
    prerequisiti: [
      { id: 'spazio-metrico', perche: "Generalizza gli spazi metrici." },
      { id: 'insieme-delle-parti', perche: "Gli aperti sono una famiglia di sottoinsiemi." }
    ],
    parenti: []
  },
  {
    id: 'continuita-topologica', titolo: 'Continuità secondo la topologia', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['funzione continua', 'continuità', 'applicazione continua', 'controimmagine di aperti'],
    domanda: "Cosa vuol dire «senza salti» quando non ci sono numeri?",
    esempio: "Una mappa della metropolitana sposta le stazioni, ma conserva quali sono vicine. È una deformazione continua della città.",
    idea: "In topologia, una funzione è continua se manda punti vicini in punti vicini.\nIn termini precisi: la controimmagine di ogni aperto deve essere un aperto.\nPer i numeri reali, questa definizione coincide con quella dell'analisi.\nMa funziona in qualsiasi spazio topologico, anche senza distanze.\nLe funzioni continue sono le «frecce» naturali tra spazi topologici.",
    perche_fa_pensare: "Una definizione nata per le funzioni numeriche si rivela più semplice e più generale se si guarda solo alla vicinanza.",
    dove_si_usa: "In analisi, in geometria, in fisica, in informatica teorica.",
    prerequisiti: [
      { id: 'spazio-topologico', perche: "Si definisce tra spazi topologici." },
      { id: 'funzione-continua', perche: "Generalizza la continuità dell'analisi." }
    ],
    parenti: []
  },
  {
    id: 'omeomorfismo', titolo: 'Omeomorfismo', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['omeomorfismo', 'spazi omeomorfi', 'equivalenza topologica', 'stessa forma topologica'],
    domanda: "Quando due forme sono «la stessa» per la topologia?",
    esempio: "Un quadrato e un cerchio sono omeomorfi: si può deformare l'uno nell'altro. Un cerchio e un otto no: l'otto ha un punto di incrocio.",
    idea: "Un omeomorfismo è una corrispondenza biunivoca tra due spazi, continua in entrambe le direzioni.\nDue spazi omeomorfi sono indistinguibili per la topologia.\nPer dimostrare che due spazi non sono omeomorfi si cercano proprietà diverse.\nAd esempio: il numero di pezzi, di buchi, o cosa succede togliendo un punto.\nQueste proprietà si chiamano invarianti topologici.",
    perche_fa_pensare: "Dimostrare che due cose sono uguali basta trovare una trasformazione. Dimostrare che sono diverse richiede di trovare cosa nessuna trasformazione può cambiare.",
    dove_si_usa: "In topologia, in fisica, nella grafica, nell'analisi delle forme.",
    prerequisiti: [
      { id: 'continuita-topologica', perche: "È una funzione continua con inversa continua." },
      { id: 'funzione-inversa', perche: "Deve avere una funzione inversa." },
      { id: 'deformazione-continua', perche: "Rende precisa l'idea di deformazione." }
    ],
    parenti: []
  },
  {
    id: 'compattezza', titolo: 'Compattezza', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['compatto', 'compattezza', 'chiuso e limitato', 'Heine-Borel'],
    domanda: "Cosa rende «finito» uno spazio infinito?",
    esempio: "Un segmento con i suoi estremi è compatto. La retta intera no: ci si può allontanare per sempre. Un segmento senza estremi nemmeno: ci si avvicina a un bordo che manca.",
    idea: "La compattezza è una proprietà degli spazi che li fa comportare quasi come insiemi finiti.\nNella retta e nello spazio, compatto vuol dire chiuso e limitato.\nIn uno spazio compatto, ogni successione ha una parte che converge.\nSu uno spazio compatto, ogni funzione continua ha massimo e minimo.\nLa definizione generale, con gli aperti, è più astratta ma vale ovunque.",
    perche_fa_pensare: "L'infinito si può domare: alcuni spazi infiniti si lasciano trattare come se fossero finiti. È uno degli strumenti più potenti dell'analisi.",
    dove_si_usa: "In analisi, in ottimizzazione, in geometria, in logica.",
    prerequisiti: [
      { id: 'spazio-topologico', perche: "È una proprietà degli spazi topologici." }
    ],
    parenti: [
      { id: 'teorema-di-weierstrass', perche: "Il teorema di Weierstrass vale perché l'intervallo chiuso è compatto." }
    ]
  },
  {
    id: 'connessione', titolo: 'Spazi connessi', tipo: 'concetto', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['connessione', 'connesso', 'connesso per archi', 'un pezzo solo'],
    domanda: "Cosa vuol dire, con precisione, essere «tutto d'un pezzo»?",
    esempio: "L'Italia continentale è connessa: si va da ogni città a ogni altra senza lasciare la terra. L'Italia con le isole non lo è.",
    idea: "Uno spazio è connesso se non si può dividere in due parti aperte separate.\nUna versione più intuitiva: è connesso per archi se due punti qualsiasi si uniscono con un cammino.\nUn intervallo della retta è connesso, due intervalli staccati no.\nLe funzioni continue mandano spazi connessi in spazi connessi.\nDa qui segue il teorema dei valori intermedi.",
    perche_fa_pensare: "Un'idea che ogni bambino capisce richiede una definizione sottile. Esistono spazi connessi in cui non si può andare da un punto all'altro con un cammino.",
    dove_si_usa: "In analisi, nella teoria dei grafi, nella robotica per pianificare i movimenti.",
    prerequisiti: [
      { id: 'spazio-topologico', perche: "È una proprietà degli spazi topologici." }
    ],
    parenti: [
      { id: 'teorema-valori-intermedi', perche: "Il teorema dei valori intermedi segue dalla connessione degli intervalli." }
    ]
  },
  {
    id: 'teorema-curva-di-jordan', titolo: 'Teorema della curva di Jordan', tipo: 'teorema', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['Jordan', 'curva di Jordan', 'curva chiusa semplice', 'dentro e fuori'],
    domanda: "Una curva chiusa divide sempre il piano in un dentro e un fuori?",
    esempio: "Per sapere se un punto è dentro un labirinto chiuso, traccia una semiretta dal punto. Se attraversa il bordo un numero dispari di volte, sei dentro.",
    idea: "Una curva chiusa semplice è una curva che torna al punto di partenza senza mai incrociarsi.\nIl teorema dice che divide il piano in esattamente due parti: una limitata, dentro, e una illimitata, fuori.\nLa curva è il bordo di entrambe le parti.\nSembra evidente, ma le curve possono essere molto irregolari, perfino frattali.\nCamille Jordan lo enunciò nel 1887; la prima dimostrazione ritenuta completa è del 1905.",
    perche_fa_pensare: "Le affermazioni più evidenti possono essere le più difficili da dimostrare. L'evidenza non è una dimostrazione.",
    dove_si_usa: "Nella grafica al computer, nei sistemi di mappe, nell'analisi complessa.",
    prerequisiti: [
      { id: 'connessione', perche: "Le due parti sono connesse." },
      { id: 'curve-parametriche', perche: "Riguarda curve chiuse." },
      { id: 'omeomorfismo', perche: "Una curva chiusa semplice è omeomorfa a una circonferenza." }
    ],
    parenti: []
  },
  {
    id: 'teorema-punto-fisso-brouwer', titolo: 'Teorema del punto fisso di Brouwer', tipo: 'teorema', area: 'topologia', argomento: 'spazi-topologici', livello: 3,
    sinonimi: ['Brouwer', 'punto fisso', 'teorema di Brouwer', 'punto che non si muove'],
    domanda: "Mescolando il caffè, c'è sempre un punto che torna al suo posto?",
    esempio: "Appallottoli una mappa della tua città e la posi sul tavolo, dentro la città. C'è sempre un punto della mappa esattamente sopra il luogo che rappresenta.",
    idea: "Il teorema riguarda le funzioni continue da un disco pieno in sé stesso.\nDice che c'è sempre almeno un punto che resta fermo, detto punto fisso.\nVale anche per palle piene in dimensioni più alte.\nIl teorema garantisce che il punto esiste, ma non dice dove sia.\nLuitzen Brouwer lo dimostrò intorno al 1910.",
    perche_fa_pensare: "Brouwer stesso, in seguito, criticò le dimostrazioni che garantiscono l'esistenza senza costruire l'oggetto. Il suo teorema più famoso era di quel tipo.",
    dove_si_usa: "In economia per l'esistenza degli equilibri, in teoria dei giochi, nelle equazioni differenziali.",
    prerequisiti: [
      { id: 'continuita-topologica', perche: "Riguarda funzioni continue." },
      { id: 'compattezza', perche: "Il disco pieno è compatto." }
    ],
    parenti: [
      { id: 'teorema-valori-intermedi', perche: "In una dimensione, il teorema segue dai valori intermedi." },
      { id: 'teorema-punto-fisso-banach', perche: "Anche Banach garantisce un punto fisso, ma con ipotesi diverse e un modo per trovarlo." }
    ]
  },

  // Superfici e invarianti
  {
    id: 'formula-di-eulero-poliedri', titolo: 'Formula di Eulero per i poliedri', tipo: 'teorema', area: 'topologia', argomento: 'superfici-e-invarianti', livello: 2,
    sinonimi: ['formula di Eulero', 'vertici spigoli facce', 'poliedri', 'V meno S più F'],
    domanda: "Cosa hanno in comune tutti i poliedri senza buchi?",
    esempio: "Un cubo ha 8 vertici, 12 spigoli e 6 facce: 8 meno 12 più 6 fa 2. Prova con una piramide: 5 meno 8 più 5, ancora 2.",
    idea: "Per ogni poliedro senza buchi, vale una relazione tra vertici, spigoli e facce.\nVertici meno spigoli più facce fa sempre 2.\nNon conta la forma, né quante facce ci sono.\nEulero la pubblicò a metà Settecento.\nÈ uno dei primi risultati topologici: resta vera se si deforma il poliedro.",
    perche_fa_pensare: "Un numero resta uguale per forme diversissime. È un primo indizio che le forme hanno proprietà nascoste più profonde della geometria.",
    dove_si_usa: "Nella grafica 3D, nella chimica delle molecole a gabbia, nella teoria dei grafi.",
    formula: {
      latex: 'V - S + F = 2',
      come_si_legge: "vu meno esse più effe uguale due.",
      a_parole: "Vertici meno spigoli più facce dà sempre due, per ogni poliedro senza buchi."
    },
    prerequisiti: [
      { id: 'solidi', perche: "Riguarda i poliedri." }
    ],
    parenti: []
  },
  {
    id: 'caratteristica-di-eulero', titolo: 'Caratteristica di Eulero', tipo: 'concetto', area: 'topologia', argomento: 'superfici-e-invarianti', livello: 3,
    sinonimi: ['caratteristica di Eulero', 'invariante di Eulero', 'genere', 'numero di buchi'],
    domanda: "Come si contano i buchi di una forma?",
    esempio: "Disegna sul toro, la ciambella, una rete di vertici, spigoli e facce. Vertici meno spigoli più facce fa 0, non 2.",
    idea: "La caratteristica di Eulero generalizza la formula di Eulero a ogni superficie.\nSi divide la superficie in poligoni e si calcola vertici meno spigoli più facce.\nIl risultato non dipende da come si divide, ma solo dalla superficie.\nPer la sfera vale 2, per il toro 0, e cala di 2 per ogni buco in più.\nÈ un invariante topologico: superfici con caratteristica diversa non sono omeomorfe.",
    perche_fa_pensare: "Un conteggio fatto in modo arbitrario dà sempre lo stesso numero. Quel numero sa qualcosa della forma che nessun disegno mostra.",
    dove_si_usa: "In topologia, nella grafica 3D, in fisica, nell'analisi delle immagini.",
    formula: {
      latex: '\\chi = V - S + F = 2 - 2g',
      come_si_legge: "chi uguale vu meno esse più effe, uguale due meno due gi. Qui gi è il numero di buchi.",
      a_parole: "Per una superficie con un solo lato e g buchi, la caratteristica di Eulero vale due meno due volte g."
    },
    prerequisiti: [
      { id: 'formula-di-eulero-poliedri', perche: "Generalizza la formula di Eulero." },
      { id: 'superfici', perche: "Si calcola per le superfici." }
    ],
    parenti: []
  },
  {
    id: 'classificazione-superfici', titolo: 'Classificazione delle superfici', tipo: 'teorema', area: 'topologia', argomento: 'superfici-e-invarianti', livello: 3,
    sinonimi: ['classificazione delle superfici', 'superfici chiuse', 'genere', 'orientabilità'],
    domanda: "Si possono elencare tutte le superfici chiuse?",
    esempio: "Ogni superficie chiusa a due lati è una sfera con un certo numero di manici. Una tazza ha un manico, un pretzel tre.",
    idea: "Il teorema elenca tutte le superfici chiuse, cioè limitate e senza bordo.\nQuelle con due lati sono sfere con manici: sfera, toro, toro con due buchi, e così via.\nQuelle con un solo lato si ottengono aggiungendo alla sfera dei nastri di Möbius.\nDue superfici sono omeomorfe se hanno lo stesso numero di lati e la stessa caratteristica di Eulero.\nLa classificazione fu completata nei primi decenni del Novecento.",
    perche_fa_pensare: "Infinite forme possibili si riducono a un elenco semplice. Raramente la matematica ottiene una classificazione così completa.",
    dove_si_usa: "In topologia, in geometria, in fisica teorica.",
    prerequisiti: [
      { id: 'caratteristica-di-eulero', perche: "Le superfici si distinguono con la caratteristica di Eulero." },
      { id: 'omeomorfismo', perche: "Classifica le superfici a meno di omeomorfismo." },
      { id: 'nastro-di-moebius', perche: "Le superfici con un solo lato contengono nastri di Möbius." }
    ],
    parenti: []
  },
  {
    id: 'teorema-palla-pelosa', titolo: 'Teorema della palla pelosa', tipo: 'teorema', area: 'topologia', argomento: 'superfici-e-invarianti', livello: 3,
    sinonimi: ['palla pelosa', 'campo vettoriale sulla sfera', 'pettinare una palla', 'Poincaré-Hopf'],
    domanda: "Si può pettinare una palla pelosa senza lasciare un ciuffo?",
    esempio: "In ogni istante, da qualche parte sulla Terra, il vento orizzontale è nullo. Lo garantisce questo teorema.",
    idea: "Il teorema riguarda le frecce disegnate su una sfera, tangenti alla superficie e che variano con continuità.\nDice che almeno una freccia deve essere nulla.\nIn altre parole, non si può pettinare una palla pelosa senza creare un ciuffo o una riga.\nSu un toro, invece, si può pettinare tutto.\nLa differenza dipende dalla caratteristica di Eulero della superficie.",
    perche_fa_pensare: "Un fatto sul vento della Terra segue dalla forma del pianeta, senza nessuna fisica. La topologia impone limiti alla natura.",
    dove_si_usa: "In meteorologia, nella grafica al computer, nella fisica dei plasmi.",
    prerequisiti: [
      { id: 'superfici', perche: "Riguarda la sfera e le altre superfici." },
      { id: 'continuita-topologica', perche: "Le frecce variano con continuità." },
      { id: 'vettore', perche: "Le frecce sono vettori tangenti." }
    ],
    parenti: [
      { id: 'caratteristica-di-eulero', perche: "Il teorema dipende dalla caratteristica di Eulero della sfera." }
    ]
  },

  // Topologia algebrica
  {
    id: 'gruppo-fondamentale', titolo: 'Omotopia e gruppo fondamentale', tipo: 'concetto', area: 'topologia', argomento: 'topologia-algebrica', livello: 4,
    sinonimi: ['gruppo fondamentale', 'omotopia', 'cammini chiusi', 'lacci', 'semplicemente connesso'],
    domanda: "Si può usare l'algebra per distinguere le forme?",
    esempio: "Su una sfera, un elastico chiuso si può sempre stringere fino a un punto. Su una ciambella, un elastico che gira intorno al buco no.",
    idea: "Il gruppo fondamentale studia i cammini chiusi, o lacci, in uno spazio.\nDue lacci sono equivalenti se si può deformare l'uno nell'altro restando nello spazio.\nPercorrere un laccio dopo l'altro è un'operazione: i lacci formano un [[gruppo]].\nSulla sfera il gruppo ha un solo elemento; sul toro registra quante volte si gira intorno ai due cerchi.\nHenri Poincaré lo introdusse nel 1895.",
    perche_fa_pensare: "Per distinguere due forme, si traducono in gruppi e si confrontano i gruppi. Un problema geometrico diventa algebrico.",
    dove_si_usa: "In topologia, in fisica teorica, nella robotica, nell'analisi complessa.",
    prerequisiti: [
      { id: 'omeomorfismo', perche: "Il gruppo fondamentale è un invariante topologico." },
      { id: 'gruppo', perche: "I lacci formano un gruppo." }
    ],
    parenti: []
  },
  {
    id: 'omologia', titolo: 'Omologia', tipo: 'concetto', area: 'topologia', argomento: 'topologia-algebrica', livello: 4,
    sinonimi: ['omologia', 'numeri di Betti', 'buchi in dimensione superiore', 'analisi topologica dei dati'],
    domanda: "Come si contano i buchi di ogni dimensione?",
    esempio: "Una ciambella ha due buchi a una dimensione, i due giri, e una cavità interna. L'omologia li conta tutti.",
    idea: "L'omologia associa a ogni spazio una serie di gruppi, uno per ogni dimensione.\nOgni gruppo conta, in un certo senso, i buchi di quella dimensione.\nIn dimensione zero conta i pezzi, in dimensione uno i giri, in dimensione due le cavità.\nÈ più facile da calcolare del gruppo fondamentale.\nLa caratteristica di Eulero si ricava dai numeri forniti dall'omologia.",
    perche_fa_pensare: "L'idea di «buco», che sembra vaga, diventa un oggetto algebrico preciso. E si applica anche a spazi che non possiamo immaginare.",
    dove_si_usa: "Nell'analisi topologica dei dati, nelle reti di sensori, in fisica, in biologia.",
    prerequisiti: [
      { id: 'caratteristica-di-eulero', perche: "Generalizza la caratteristica di Eulero." },
      { id: 'gruppo-quoziente', perche: "I gruppi di omologia sono gruppi quoziente." },
      { id: 'gruppo-fondamentale', perche: "Il primo gruppo di omologia è legato al gruppo fondamentale." }
    ],
    parenti: []
  },
  {
    id: 'varieta-topologica', titolo: 'Varietà topologiche', tipo: 'concetto', area: 'topologia', argomento: 'topologia-algebrica', livello: 4,
    sinonimi: ['varietà', 'spazio localmente euclideo', 'atlante', 'carte locali', 'manifold'],
    domanda: "Cosa hanno in comune la superficie della Terra e lo spazio dell'universo?",
    esempio: "La Terra è una sfera, ma ogni carta stradale locale la mostra piatta. Un atlante intero, fatto di tante carte, descrive tutta la superficie.",
    idea: "Una varietà è uno spazio che, visto da vicino, sembra uno spazio ordinario di una certa dimensione.\nUna superficie è una varietà di dimensione 2.\nLo spazio in cui viviamo potrebbe essere una varietà di dimensione 3 con una forma globale complicata.\nSi descrive con un atlante di carte locali che si sovrappongono.\nRiemann ne gettò le basi nel 1854.",
    perche_fa_pensare: "Vediamo solo il nostro intorno, che sembra piatto. La forma globale del mondo può essere ben diversa da quella locale.",
    dove_si_usa: "In relatività generale, in robotica, nell'apprendimento automatico, in cosmologia.",
    prerequisiti: [
      { id: 'omeomorfismo', perche: "Ogni pezzo è omeomorfo a uno spazio ordinario." },
      { id: 'spazi-a-n-dimensioni', perche: "Le varietà possono avere qualsiasi dimensione." }
    ],
    parenti: []
  },
  {
    id: 'congettura-di-poincare', titolo: 'Congettura di Poincaré', tipo: 'teorema', area: 'topologia', argomento: 'topologia-algebrica', livello: 4,
    sinonimi: ['Poincaré', 'Perelman', 'sfera a tre dimensioni', 'problemi del millennio', 'geometrizzazione'],
    domanda: "Come si riconosce una sfera in tre dimensioni?",
    esempio: "Un astronauta lancia una corda intorno all'universo e la riporta indietro. Se ogni corda si può sempre stringere a un punto, l'universo ha la forma di una sfera a tre dimensioni.",
    idea: "Una sfera ordinaria è l'unica superficie chiusa su cui ogni laccio si stringe a un punto.\nNel 1904 Poincaré chiese se valga lo stesso per le varietà di dimensione 3.\nPer quasi un secolo il problema resistette, e divenne uno dei problemi del millennio.\nGrigori Perelman lo risolse nel 2003, usando il [[flusso-di-ricci|flusso di Ricci]].\nRifiutò sia la medaglia Fields sia il premio da un milione di dollari.",
    perche_fa_pensare: "Il primo problema del millennio risolto è stato chiuso da un matematico che non voleva premi. La matematica, per lui, bastava a sé stessa.",
    dove_si_usa: "In topologia e in geometria; aiuta a capire le possibili forme dell'universo.",
    prerequisiti: [
      { id: 'varieta-topologica', perche: "Riguarda le varietà di dimensione 3." },
      { id: 'gruppo-fondamentale', perche: "L'ipotesi riguarda il gruppo fondamentale." }
    ],
    parenti: [
      { id: 'flusso-di-ricci', perche: "La dimostrazione usa il flusso di Ricci." }
    ]
  },

  // Nodi
  {
    id: 'nodi', titolo: 'Nodi matematici', tipo: 'concetto', area: 'topologia', argomento: 'teoria-dei-nodi', livello: 2,
    sinonimi: ['nodi', 'teoria dei nodi', 'nodo banale', 'nodo a trifoglio'],
    domanda: "Quando due nodi sono davvero diversi?",
    esempio: "Fai un nodo semplice in una corda e poi unisci le due estremità. Per quanto tu lo muova, non riuscirai a scioglierlo senza tagliare.",
    idea: "Un nodo matematico è una curva chiusa nello spazio, senza estremità libere.\nDue nodi sono uguali se si può deformare l'uno nell'altro senza tagliare la corda.\nIl nodo più semplice è il cerchio: è il nodo «sciolto».\nIl nodo a trifoglio è il nodo vero più semplice.\nNell'Ottocento si catalogarono i nodi pensando, a torto, che spiegassero gli atomi.",
    perche_fa_pensare: "Una teoria nata da un'idea fisica sbagliata è diventata matematica profonda. E un secolo dopo è tornata utile alla fisica.",
    dove_si_usa: "In biologia per il DNA, in chimica, in fisica teorica.",
    prerequisiti: [
      { id: 'deformazione-continua', perche: "I nodi si confrontano deformandoli." }
    ],
    parenti: []
  },
  {
    id: 'invarianti-dei-nodi', titolo: 'Invarianti dei nodi', tipo: 'concetto', area: 'topologia', argomento: 'teoria-dei-nodi', livello: 3,
    sinonimi: ['polinomio di Jones', 'polinomio di Alexander', 'invarianti', 'tricolorabilità'],
    domanda: "Come si dimostra che un nodo non si può sciogliere?",
    esempio: "Il trifoglio si può colorare con tre colori secondo certe regole, il cerchio senza nodi no. Quindi il trifoglio non si scioglie.",
    idea: "Un invariante di un nodo è un numero, o un altro oggetto, che non cambia deformando il nodo.\nSe due nodi hanno invarianti diversi, sono sicuramente diversi.\nSe hanno invarianti uguali, possono comunque essere diversi.\nMolti invarianti sono polinomi calcolati dal disegno del nodo.\nNel 1984 Vaughan Jones scoprì un nuovo polinomio, che aprì legami inattesi con la fisica.",
    perche_fa_pensare: "Per dimostrare che una cosa è impossibile si trova un numero che non cambia. È una strategia che attraversa tutta la matematica.",
    dove_si_usa: "In biologia molecolare, per studiare come gli enzimi annodano il DNA, e in fisica quantistica.",
    prerequisiti: [
      { id: 'nodi', perche: "Distinguono i nodi." },
      { id: 'monomi-polinomi', perche: "Molti invarianti sono polinomi." }
    ],
    parenti: []
  }
]);
