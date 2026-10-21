/* Teoria della misura e analisi funzionale */
Mappa.registra([
  // Misura e integrale di Lebesgue
  {
    id: 'misura', titolo: 'Misura di un insieme', tipo: 'concetto', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 3,
    sinonimi: ['misura', 'misura di Lebesgue', 'teoria della misura', 'insiemi di misura nulla', 'additività numerabile'],
    domanda: "Si può dare una misura a qualunque insieme?",
    esempio: "Quanto è «lungo» l'insieme delle frazioni tra 0 e 1? Sono infinite e ovunque, eppure la loro lunghezza totale è zero.",
    idea: "Una misura estende le idee di lunghezza, area e volume a insiemi molto più complicati.\nDeve essere additiva: la misura di pezzi separati è la somma delle loro misure.\nAnzi, deve valere anche per infiniti pezzi numerabili.\nCon la misura di Lebesgue, ogni insieme numerabile di punti ha misura zero.\nHenri Lebesgue ne pose le basi nella sua tesi del 1902.",
    perche_fa_pensare: "Un insieme può essere ovunque e non occupare spazio. L'intuizione della grandezza va rivista quando c'è di mezzo l'infinito.",
    dove_si_usa: "In probabilità, dove la probabilità è una misura, in analisi, in fisica, in statistica.",
    prerequisiti: [
      { id: 'insieme-delle-parti', perche: "Si misurano sottoinsiemi." },
      { id: 'area-e-perimetro', perche: "Generalizza lunghezze e aree." },
      { id: 'serie', perche: "Si sommano infinite misure con una serie." }
    ],
    parenti: []
  },
  {
    id: 'insieme-di-cantor', titolo: 'L\'insieme di Cantor', tipo: 'concetto', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 3,
    sinonimi: ['insieme di Cantor', 'polvere di Cantor', 'insieme ternario', 'Cantor'],
    domanda: "Un insieme può avere tanti punti quanti la retta e lunghezza zero?",
    esempio: "Prendi un segmento e togli il terzo centrale. Dai due pezzi rimasti togli ancora il terzo centrale, e così via all'infinito.",
    idea: "L'insieme di Cantor è ciò che resta di un segmento togliendo all'infinito i terzi centrali.\nLa lunghezza tolta in totale è 1, cioè tutto il segmento.\nEppure i punti che restano sono tanti quanti quelli della retta intera: non sono numerabili.\nL'insieme è autosimile: ogni sua parte somiglia all'intero.\nHa dimensione frattale circa 0,63, tra un insieme di punti e una linea.",
    perche_fa_pensare: "Un insieme senza lunghezza ma con infiniti punti, più che numerabili. Quantità e misura sono idee diverse.",
    dove_si_usa: "Come esempio fondamentale in analisi, topologia, sistemi dinamici e teoria dei frattali.",
    prerequisiti: [
      { id: 'serie-geometrica', perche: "La lunghezza tolta si calcola con una serie geometrica." },
      { id: 'insiemi-numerabili', perche: "Si confronta con gli insiemi numerabili." }
    ],
    parenti: [
      { id: 'frattali', perche: "È uno dei primi esempi di frattale." },
      { id: 'misura', perche: "Ha misura zero pur avendo moltissimi punti." }
    ]
  },
  {
    id: 'integrale-di-lebesgue', titolo: 'Integrale di Lebesgue', tipo: 'concetto', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 3,
    sinonimi: ['Lebesgue', 'integrale di Lebesgue', 'funzioni integrabili', 'integrazione astratta'],
    domanda: "Come si integrano funzioni troppo irregolari per Riemann?",
    esempio: "Per contare i soldi in un cassetto, Riemann li prende in ordine, uno alla volta. Lebesgue prima li divide per valore, poi conta quante monete ci sono di ciascun tipo.",
    idea: "L'integrale di Riemann divide l'asse orizzontale in intervalli.\nL'integrale di Lebesgue, invece, divide i valori della funzione.\nPer ogni valore, misura l'insieme dei punti in cui la funzione lo assume, con la [[misura]].\nCosì si integrano anche funzioni molto irregolari, come quella che vale 1 sulle frazioni e 0 altrove.\nDove entrambi esistono, i due integrali coincidono.",
    perche_fa_pensare: "Cambiare il modo di contare cambia ciò che si può contare. Lo stesso problema, guardato di traverso, diventa più semplice.",
    dove_si_usa: "In probabilità, in analisi di Fourier, in meccanica quantistica, in statistica.",
    prerequisiti: [
      { id: 'misura', perche: "Si basa sulla misura degli insiemi." },
      { id: 'integrale-di-riemann', perche: "Generalizza l'integrale di Riemann." }
    ],
    parenti: []
  },
  {
    id: 'teoremi-di-convergenza', titolo: 'Scambiare limite e integrale', tipo: 'teorema', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 4,
    sinonimi: ['convergenza dominata', 'convergenza monotona', 'lemma di Fatou', 'teoremi di passaggio al limite'],
    domanda: "Il limite degli integrali è l'integrale del limite?",
    esempio: "Una montagnola di sabbia sempre più stretta e alta, con area sempre 1, si schiaccia verso zero quasi ovunque. Il limite delle aree è 1, ma l'area del limite è 0.",
    idea: "Spesso serve calcolare l'integrale di un limite di funzioni.\nSarebbe comodo poter scambiare limite e integrale, ma non sempre è lecito.\nI teoremi di convergenza di Lebesgue dicono quando si può fare.\nIl più usato richiede che tutte le funzioni restino sotto una stessa funzione integrabile.\nCon l'integrale di Riemann, condizioni così semplici non bastano.",
    perche_fa_pensare: "Due operazioni naturali non sempre si scambiano. Capire quando lo fanno è gran parte del lavoro dell'analisi.",
    dove_si_usa: "In probabilità, in analisi, in fisica matematica, in statistica.",
    prerequisiti: [
      { id: 'integrale-di-lebesgue', perche: "Valgono per l'integrale di Lebesgue." },
      { id: 'convergenza-uniforme', perche: "Migliorano i risultati che richiedono convergenza uniforme." }
    ],
    parenti: []
  },
  {
    id: 'insiemi-non-misurabili', titolo: 'Insiemi non misurabili', tipo: 'teorema', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 4,
    sinonimi: ['insieme di Vitali', 'non misurabile', 'Vitali', 'limiti della misura'],
    domanda: "Esistono insiemi a cui non si può dare una lunghezza?",
    esempio: "Giuseppe Vitali costruì un insieme di numeri tra 0 e 1 a cui nessuna lunghezza ragionevole può essere assegnata.",
    idea: "Una misura ideale darebbe una lunghezza a ogni insieme, senza cambiare spostando l'insieme.\nNel 1905 Giuseppe Vitali mostrò che questo è impossibile.\nCostruì un insieme che, spostato in infiniti modi, ricopre il segmento senza sovrapporsi.\nNessuna lunghezza, né zero né positiva, è coerente con questa proprietà.\nLa costruzione usa l'[[assioma-della-scelta|assioma della scelta]].",
    perche_fa_pensare: "Non tutto si può misurare, nemmeno in teoria. E gli insiemi non misurabili non si possono descrivere esplicitamente.",
    dove_si_usa: "Nei fondamenti dell'analisi e della probabilità.",
    prerequisiti: [
      { id: 'misura', perche: "Mostra i limiti della misura." },
      { id: 'assioma-della-scelta', perche: "La costruzione usa l'assioma della scelta." }
    ],
    parenti: []
  },
  {
    id: 'banach-tarski', titolo: 'Paradosso di Banach-Tarski', tipo: 'teorema', area: 'misura-funzionale', argomento: 'misura-e-integrazione', livello: 4,
    sinonimi: ['Banach-Tarski', 'paradosso della sfera', 'duplicazione della sfera', 'decomposizione paradossale'],
    domanda: "Si può tagliare una palla e ricomporla in due palle uguali alla prima?",
    esempio: "Una palla piena si divide in cinque pezzi. Spostandoli e ruotandoli, senza deformarli, si ottengono due palle identiche a quella di partenza.",
    idea: "Stefan Banach e Alfred Tarski lo dimostrarono nel 1924.\nUna palla nello spazio si divide in un numero finito di pezzi.\nCon soli spostamenti e rotazioni, i pezzi si ricompongono in due palle uguali all'originale.\nNon è un trucco fisico: i pezzi sono insiemi non misurabili, che nessuna forbice può tagliare.\nLa dimostrazione usa l'assioma della scelta e la struttura del gruppo delle rotazioni.",
    perche_fa_pensare: "Un teorema vero sembra assurdo. Mostra che l'intuizione del volume non vale per insiemi abbastanza strani.",
    dove_si_usa: "Nei fondamenti della matematica, per capire il ruolo dell'assioma della scelta.",
    prerequisiti: [
      { id: 'insiemi-non-misurabili', perche: "I pezzi sono insiemi non misurabili." },
      { id: 'gruppo', perche: "Usa la struttura del gruppo delle rotazioni." }
    ],
    parenti: []
  },

  // Spazi di funzioni
  {
    id: 'spazio-normato', titolo: 'Spazi normati: la lunghezza di una funzione', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 3,
    sinonimi: ['norma', 'spazio normato', 'lunghezza di un vettore', 'distanza tra funzioni'],
    domanda: "Una funzione può essere un punto di uno spazio?",
    esempio: "Due registrazioni della stessa canzone sono simili ma non identiche. Si può misurare quanto sono «lontane» come si misura la distanza tra due punti.",
    idea: "Uno spazio normato è uno [[spazio-vettoriale|spazio vettoriale]] in cui ogni vettore ha una lunghezza, detta norma.\nLa distanza tra due vettori è la norma della loro differenza.\nSpesso i vettori sono funzioni: ogni funzione diventa un punto di uno spazio.\nAd esempio, la norma può essere il valore più grande della funzione, o l'area sotto il suo valore assoluto.\nNorme diverse danno nozioni diverse di vicinanza.",
    perche_fa_pensare: "Trattare una funzione intera come un singolo punto è un salto di astrazione. Ma permette di usare la geometria su oggetti infiniti.",
    dove_si_usa: "In analisi, nell'elaborazione dei segnali, nell'apprendimento automatico, nei metodi numerici.",
    prerequisiti: [
      { id: 'spazio-vettoriale', perche: "È uno spazio vettoriale con una lunghezza." },
      { id: 'spazio-metrico', perche: "La norma definisce una distanza." }
    ],
    parenti: []
  },
  {
    id: 'spazio-di-banach', titolo: 'Spazi di Banach', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 4,
    sinonimi: ['Banach', 'spazio di Banach', 'spazio completo', 'libro scozzese'],
    domanda: "Cosa serve perché uno spazio di funzioni non abbia buchi?",
    esempio: "Una successione di approssimazioni sempre più vicine tra loro dovrebbe avere un limite. Negli spazi di Banach lo ha sempre.",
    idea: "Uno spazio di Banach è uno spazio normato completo.\nCompleto vuol dire che ogni [[successione-di-cauchy|successione di Cauchy]] ha un limite nello spazio.\nÈ la stessa proprietà che distingue i reali dai razionali.\nMolti teoremi dell'analisi funzionale richiedono la completezza.\nStefan Banach sviluppò la teoria negli anni Venti, discutendo di matematica nei caffè di Leopoli.",
    perche_fa_pensare: "I matematici di Leopoli scrivevano i problemi aperti su un quaderno lasciato al Caffè Scozzese. Alcuni sono ancora irrisolti.",
    dove_si_usa: "In analisi, nelle equazioni differenziali, nell'ottimizzazione, in fisica matematica.",
    prerequisiti: [
      { id: 'spazio-normato', perche: "È uno spazio normato." },
      { id: 'successione-di-cauchy', perche: "La completezza riguarda le successioni di Cauchy." }
    ],
    parenti: []
  },
  {
    id: 'spazi-lp', titolo: 'Spazi Lp', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 4,
    sinonimi: ['spazi Lp', 'L2', 'funzioni a quadrato integrabile', 'energia di un segnale'],
    domanda: "Come si misura quanto è «grande» un segnale?",
    esempio: "L'energia di un suono si calcola integrando il quadrato della sua intensità nel tempo. I suoni con energia finita formano uno spazio.",
    idea: "Gli spazi Lp contengono le funzioni per cui una certa potenza del valore assoluto ha integrale finito.\nL'esponente p si sceglie: 1, 2 o un altro numero.\nLa norma è la radice p-esima di quell'integrale.\nSi usa l'[[integrale-di-lebesgue|integrale di Lebesgue]], che rende questi spazi completi.\nIl caso p uguale a 2 è speciale, perché ha anche un prodotto scalare.",
    perche_fa_pensare: "Due funzioni che differiscono solo in pochi punti sono considerate uguali. Per l'analisi, ciò che conta è il comportamento d'insieme.",
    dove_si_usa: "Nell'elaborazione dei segnali, in meccanica quantistica, in statistica, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'spazio-di-banach', perche: "Sono spazi di Banach." },
      { id: 'integrale-di-lebesgue', perche: "La norma usa l'integrale di Lebesgue." }
    ],
    parenti: []
  },
  {
    id: 'spazio-di-hilbert', titolo: 'Spazi di Hilbert', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 4,
    sinonimi: ['Hilbert', 'spazio di Hilbert', 'dimensione infinita', 'base ortonormale infinita'],
    domanda: "Si può fare geometria in infinite dimensioni?",
    esempio: "Un suono si scompone in note pure, ognuna perpendicolare alle altre. Le note sono come gli assi di uno spazio con infinite dimensioni.",
    idea: "Uno spazio di Hilbert è uno spazio con un [[prodotto-scalare|prodotto scalare]], completo, spesso di dimensione infinita.\nCi sono lunghezze, angoli e perpendicolarità, come nel piano.\nOgni elemento si scrive con coordinate rispetto a una base di vettori perpendicolari.\nLe coordinate possono essere infinite, come i coefficienti di una serie di Fourier.\nJohn von Neumann lo usò nel 1932 come ambiente matematico della meccanica quantistica.",
    perche_fa_pensare: "La geometria di Euclide sopravvive in infinite dimensioni. E proprio lì vive lo stato di ogni particella quantistica.",
    dove_si_usa: "In meccanica quantistica, nell'elaborazione dei segnali, in statistica, nell'apprendimento automatico.",
    prerequisiti: [
      { id: 'spazio-di-banach', perche: "È uno spazio di Banach con prodotto scalare." },
      { id: 'prodotto-scalare', perche: "Ha un prodotto scalare." },
      { id: 'ortogonalita', perche: "Usa basi di vettori perpendicolari." }
    ],
    parenti: [
      { id: 'serie-di-fourier', perche: "Le serie di Fourier sono coordinate in uno spazio di Hilbert." }
    ]
  },
  {
    id: 'operatore-lineare', titolo: 'Operatori e teoria spettrale', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 4,
    sinonimi: ['operatore', 'operatori lineari', 'spettro', 'teoria spettrale', 'operatori autoaggiunti'],
    domanda: "Cosa diventano le matrici in infinite dimensioni?",
    esempio: "Derivare è un'operazione che trasforma una funzione in un'altra, rispettando somme e multipli. È un operatore lineare.",
    idea: "Un operatore lineare è una trasformazione lineare tra spazi di funzioni.\nDerivare, integrare e moltiplicare per una funzione sono operatori.\nGli autovalori diventano lo spettro dell'operatore, che può essere un insieme continuo.\nIl teorema spettrale si estende a certi operatori in spazi di Hilbert.\nIn meccanica quantistica, ogni grandezza misurabile è un operatore, e i suoi possibili valori sono lo spettro.",
    perche_fa_pensare: "I colori della luce emessa da un atomo sono lo spettro di un operatore. La parola «spettro» è passata dalla fisica alla matematica e ritorno.",
    dove_si_usa: "In meccanica quantistica, nelle equazioni differenziali, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'spazio-di-hilbert', perche: "Agisce su spazi di Hilbert." },
      { id: 'applicazione-lineare', perche: "Generalizza le trasformazioni lineari." },
      { id: 'teorema-spettrale', perche: "Estende il teorema spettrale." }
    ],
    parenti: []
  },
  {
    id: 'teorema-punto-fisso-banach', titolo: 'Teorema delle contrazioni', tipo: 'teorema', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 3,
    sinonimi: ['punto fisso di Banach', 'contrazioni', 'teorema delle contrazioni', 'principio delle contrazioni'],
    domanda: "Quando ripetere un'operazione porta sempre allo stesso punto?",
    esempio: "Metti sul pavimento una piantina della stanza in cui ti trovi. Esiste un solo punto della piantina che sta esattamente sopra il punto che rappresenta.",
    idea: "Una contrazione è una funzione che avvicina sempre due punti qualsiasi, di almeno una frazione fissa.\nIl teorema dice che, in uno spazio metrico completo, una contrazione ha un solo punto fisso.\nIn più, iterando la funzione da qualsiasi punto, ci si avvicina al punto fisso.\nQuindi il teorema non solo garantisce l'esistenza, ma dà un modo per trovarlo.\nStefan Banach lo dimostrò nel 1922.",
    perche_fa_pensare: "A differenza di molti teoremi di esistenza, questo dice anche come costruire la soluzione. E con quale errore.",
    dove_si_usa: "Nei metodi numerici, nell'esistenza delle soluzioni delle equazioni differenziali, in economia, nei frattali.",
    formula: {
      latex: 'd(f(x), f(y)) \\le k\\, d(x, y), \\quad 0 \\le k < 1',
      come_si_legge: "la distanza tra effe di x ed effe di y. È minore o uguale a k per la distanza tra x e y, con k minore di uno.",
      a_parole: "La funzione accorcia tutte le distanze di almeno una frazione fissa."
    },
    prerequisiti: [
      { id: 'spazio-metrico', perche: "Si lavora in uno spazio metrico." },
      { id: 'successione-di-cauchy', perche: "Le iterazioni formano una successione di Cauchy." }
    ],
    parenti: [
      { id: 'iterazione-punti-fissi', perche: "Garantisce la convergenza delle iterazioni a un punto fisso." }
    ]
  },
  {
    id: 'distribuzioni', titolo: 'Distribuzioni: funzioni generalizzate', tipo: 'concetto', area: 'misura-funzionale', argomento: 'spazi-di-funzioni', livello: 4,
    sinonimi: ['distribuzioni', 'delta di Dirac', 'funzioni generalizzate', 'Laurent Schwartz'],
    domanda: "Come si descrive una massa concentrata in un solo punto?",
    esempio: "Un colpo di martello dura un istante, ma trasmette una spinta finita. Una funzione ordinaria non riesce a descriverlo.",
    idea: "Una distribuzione è un oggetto che generalizza le funzioni.\nNon si definisce dai suoi valori, ma da come agisce sulle funzioni lisce, integrandole.\nLa delta di Dirac rappresenta una massa unitaria concentrata in un punto.\nOgni distribuzione si può derivare, anche se corrisponde a una funzione con salti.\nLaurent Schwartz costruì la teoria negli anni Quaranta e ricevette la medaglia Fields.",
    perche_fa_pensare: "I fisici usavano la delta di Dirac con successo prima che avesse un senso matematico. La teoria ha poi dato ragione all'intuizione.",
    dove_si_usa: "In fisica, nelle equazioni differenziali, nell'elaborazione dei segnali, in ingegneria.",
    prerequisiti: [
      { id: 'integrale-di-lebesgue', perche: "Agiscono integrando funzioni." },
      { id: 'spazio-normato', perche: "Vivono in spazi di funzioni." },
      { id: 'derivata', perche: "Permettono di derivare ogni funzione." }
    ],
    parenti: []
  },

  // Analisi di Fourier
  {
    id: 'serie-di-fourier', titolo: 'Serie di Fourier', tipo: 'concetto', area: 'misura-funzionale', argomento: 'analisi-di-fourier', livello: 3,
    sinonimi: ['Fourier', 'serie di Fourier', 'armoniche', 'scomposizione in frequenze', 'fenomeno di Gibbs'],
    domanda: "Si può scomporre ogni segnale in onde semplici?",
    esempio: "Un accordo suonato al pianoforte è la somma di note pure. Un orecchio allenato riconosce le singole note dentro il suono complessivo.",
    idea: "Una serie di Fourier scrive una funzione periodica come somma di seni e coseni.\nOgni termine è un'onda pura con una frequenza multipla di quella di base.\nI coefficienti dicono quanto pesa ciascuna frequenza, e si calcolano con integrali.\nAnche funzioni con salti si possono scrivere così, come un'onda quadra.\nFourier le introdusse all'inizio dell'Ottocento per studiare la diffusione del calore.",
    perche_fa_pensare: "Molti matematici di allora non credevano che funzioni con salti fossero somme di onde lisce. La discussione costrinse a definire con precisione cosa sia una funzione.",
    dove_si_usa: "In acustica, nella musica elettronica, nell'elaborazione delle immagini, in fisica.",
    formula: {
      latex: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left( a_n \\cos nx + b_n \\sin nx \\right)',
      come_si_legge: "effe di x uguale a zero mezzi più una somma, per n da uno a infinito. Ogni termine è a n coseno di n x più b n seno di n x.",
      a_parole: "Una funzione periodica è una somma di onde pure, ognuna con il suo peso."
    },
    prerequisiti: [
      { id: 'funzioni-trigonometriche', perche: "Usa seni e coseni." },
      { id: 'serie', perche: "È una serie infinita." },
      { id: 'integrale-di-riemann', perche: "I coefficienti si calcolano con integrali." }
    ],
    parenti: []
  },
  {
    id: 'trasformata-di-fourier', titolo: 'Trasformata di Fourier', tipo: 'concetto', area: 'misura-funzionale', argomento: 'analisi-di-fourier', livello: 3,
    sinonimi: ['trasformata di Fourier', 'spettro delle frequenze', 'dominio delle frequenze', 'analisi spettrale'],
    domanda: "Quali frequenze compongono un suono qualsiasi?",
    esempio: "Un'app che riconosce le canzoni analizza le frequenze del suono che sente. Le confronta con quelle di milioni di brani.",
    idea: "La trasformata di Fourier estende le serie di Fourier ai segnali non periodici.\nTrasforma una funzione del tempo in una funzione della frequenza.\nIl risultato, lo spettro, dice quanto di ogni frequenza è presente nel segnale.\nSi può tornare indietro con la trasformata inversa, senza perdere informazione.\nUn segnale molto concentrato nel tempo è molto sparpagliato nelle frequenze, e viceversa.",
    perche_fa_pensare: "Lo stesso segnale si può guardare nel tempo o nelle frequenze. Ciò che è complicato in un mondo può essere semplice nell'altro.",
    dove_si_usa: "Nella risonanza magnetica, nella compressione JPEG e MP3, nelle telecomunicazioni, in meccanica quantistica.",
    formula: {
      latex: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\, e^{-2\\pi i x \\xi}\\, dx',
      come_si_legge: "effe cappuccio di csi uguale integrale da meno infinito a più infinito. Si integra effe di x per e alla meno due pi greco i x csi, in de x.",
      a_parole: "Per ogni frequenza, si misura quanto il segnale somiglia a un'onda pura di quella frequenza."
    },
    prerequisiti: [
      { id: 'serie-di-fourier', perche: "Estende le serie di Fourier." },
      { id: 'integrali-impropri', perche: "Si integra su tutta la retta." },
      { id: 'formula-di-eulero', perche: "Le onde si scrivono come esponenziali complessi." }
    ],
    parenti: []
  },
  {
    id: 'teorema-del-campionamento', titolo: 'Teorema del campionamento', tipo: 'teorema', area: 'misura-funzionale', argomento: 'analisi-di-fourier', livello: 3,
    sinonimi: ['campionamento', 'Nyquist', 'Nyquist-Shannon', 'frequenza di campionamento', 'aliasing'],
    domanda: "Quante volte al secondo bisogna misurare un suono per non perdere nulla?",
    esempio: "I CD audio misurano il suono 44100 volte al secondo. È poco più del doppio della frequenza più alta che l'orecchio umano sente.",
    idea: "Un segnale continuo si può ricostruire esattamente da campioni presi a intervalli regolari.\nServe una condizione: il segnale non deve contenere frequenze troppo alte.\nPrecisamente, bisogna campionare più del doppio della frequenza massima presente.\nSe si campiona troppo lentamente, le frequenze alte si travestono da basse: è l'aliasing.\nIl teorema è legato ai nomi di Nyquist e Shannon, ma fu trovato anche da altri.",
    perche_fa_pensare: "Un numero finito di misure al secondo contiene tutto un segnale continuo. Il digitale, a certe condizioni, non perde nulla.",
    dove_si_usa: "Nell'audio digitale, nella fotografia, nelle telecomunicazioni, negli strumenti medici.",
    formula: {
      latex: 'f_{\\text{campionamento}} > 2\\, f_{\\max}',
      come_si_legge: "la frequenza di campionamento deve essere maggiore del doppio della frequenza massima.",
      a_parole: "Bisogna misurare il segnale più del doppio delle volte rispetto alla sua oscillazione più rapida."
    },
    prerequisiti: [
      { id: 'trasformata-di-fourier', perche: "La dimostrazione usa la trasformata di Fourier." }
    ],
    parenti: [
      { id: 'bit', perche: "È il ponte tra segnali continui e informazione digitale." }
    ]
  }
]);
