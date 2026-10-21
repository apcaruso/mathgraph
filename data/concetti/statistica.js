/* Statistica */
Mappa.registra([
  // Statistica descrittiva
  {
    id: 'dati-e-variabili', titolo: 'Dati e variabili statistiche', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 1,
    sinonimi: ['dati', 'variabile statistica', 'popolazione', 'unità statistica', 'dati qualitativi', 'dati quantitativi'],
    domanda: "Cosa sono, esattamente, i dati?",
    esempio: "In un questionario chiedi età, città di nascita e numero di figli. Ogni domanda è una variabile, ogni persona un'unità statistica.",
    idea: "La statistica studia dati raccolti su un gruppo, chiamato popolazione.\nOgni elemento del gruppo si chiama unità statistica.\nOgni caratteristica osservata è una variabile: un numero, come l'età, o una categoria, come il colore preferito.\nIl tipo di variabile decide quali calcoli hanno senso.\nNon ha senso, ad esempio, fare la media delle città di nascita.",
    perche_fa_pensare: "I dati non parlano da soli: qualcuno ha deciso cosa misurare e cosa ignorare. Ogni dato è anche una scelta.",
    dove_si_usa: "Nei censimenti, nelle ricerche di mercato, in medicina, nello sport.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'grafici-statistici', titolo: 'Rappresentare i dati con i grafici', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 1,
    sinonimi: ['istogramma', 'grafico a barre', 'grafico a torta', 'diagramma', 'rappresentazione dei dati'],
    domanda: "Come si mostrano tanti dati con un'immagine?",
    esempio: "Un istogramma delle età dei clienti di un negozio mostra a colpo d'occhio se sono soprattutto giovani o anziani.",
    idea: "Un grafico statistico rappresenta i dati con forme e lunghezze.\nI grafici a barre confrontano categorie, gli istogrammi mostrano come si distribuiscono i numeri.\nI grafici a torta mostrano le parti di un tutto, ma rendono difficile confrontare fette simili.\nUn grafico onesto parte da zero quando confronta altezze, e non distorce le proporzioni.\nUn buon grafico rende visibile ciò che le tabelle nascondono.",
    perche_fa_pensare: "Lo stesso dato, disegnato in modi diversi, può raccontare storie opposte. Saper leggere un grafico è una difesa contro la manipolazione.",
    dove_si_usa: "Nei giornali, nelle presentazioni, nei referti, nei cruscotti aziendali.",
    prerequisiti: [
      { id: 'dati-e-variabili', perche: "Si rappresentano i dati raccolti." },
      { id: 'percentuali', perche: "Molti grafici mostrano percentuali." }
    ],
    parenti: []
  },
  {
    id: 'media-mediana-moda', titolo: 'Media, mediana e moda', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 1,
    sinonimi: ['media', 'mediana', 'moda', 'media aritmetica', 'valore centrale', 'indici di posizione'],
    domanda: "Qual è il valore «tipico» di un gruppo di numeri?",
    esempio: "In un'azienda nove dipendenti guadagnano 1500 euro e il titolare 30000. La media è 4350 euro, la mediana 1500: quale descrive meglio l'azienda?",
    idea: "La media aritmetica è la somma dei valori divisa per il loro numero.\nLa mediana è il valore che sta a metà, dopo aver messo i dati in ordine.\nLa moda è il valore più frequente.\nLa media risente molto dei valori estremi, la mediana no.\nScegliere l'indice giusto dipende dai dati e dalla domanda che ci si pone.",
    perche_fa_pensare: "«In media» può nascondere grandi disuguaglianze. Un solo numero non racconta mai tutta la storia.",
    dove_si_usa: "Nei redditi, nei voti, nei tempi di attesa, nelle statistiche sportive.",
    prerequisiti: [
      { id: 'dati-e-variabili', perche: "Si calcolano sui dati raccolti." },
      { id: 'frazioni', perche: "La media è una divisione." }
    ],
    parenti: []
  },
  {
    id: 'dispersione', titolo: 'Variabilità e deviazione standard', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 2,
    sinonimi: ['deviazione standard', 'scarto quadratico medio', 'varianza dei dati', 'variabilità', 'campo di variazione'],
    domanda: "Quanto sono sparpagliati i dati?",
    esempio: "Due città hanno la stessa temperatura media annuale. In una le stagioni sono miti, nell'altra le estati sono torride e gli inverni gelidi.",
    idea: "La dispersione misura quanto i dati si allontanano dal loro valore centrale.\nLa misura più usata è la deviazione standard.\nSi calcolano gli scarti dalla media, si elevano al quadrato, si fa la media e si prende la radice.\nUna deviazione standard piccola indica dati concentrati, una grande dati sparpagliati.\nSenza una misura di dispersione, la media racconta solo metà della storia.",
    perche_fa_pensare: "Il mondo è fatto di differenze. La dispersione è il modo in cui la statistica le prende sul serio.",
    dove_si_usa: "Nel controllo di qualità, in finanza, nelle misure di laboratorio.",
    prerequisiti: [
      { id: 'media-mediana-moda', perche: "Gli scarti si misurano dalla media." },
      { id: 'radice-quadrata', perche: "La deviazione standard è una radice quadrata." }
    ],
    parenti: []
  },
  {
    id: 'correlazione', titolo: 'Correlazione', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 2,
    sinonimi: ['correlazione', 'coefficiente di correlazione', 'grafico a dispersione', 'associazione tra variabili'],
    domanda: "Come si misura quanto due grandezze vanno insieme?",
    esempio: "Disegni un punto per ogni persona, con altezza e peso. I punti salgono verso destra: le due grandezze sono correlate.",
    idea: "Due variabili sono correlate se tendono a crescere o a calare insieme.\nIl coefficiente di correlazione è un numero tra meno 1 e 1.\nVicino a 1 indica che crescono insieme, vicino a meno 1 che una cresce quando l'altra cala.\nVicino a 0 indica che non c'è un legame lineare, ma potrebbe esserci un legame di altro tipo.\nSi visualizza bene con un grafico a punti.",
    perche_fa_pensare: "Una correlazione forte invita a cercare una spiegazione. Ma la spiegazione potrebbe non essere quella che sembra.",
    dove_si_usa: "In medicina, in economia, nelle scienze sociali, nell'analisi dei mercati.",
    prerequisiti: [
      { id: 'dispersione', perche: "Il coefficiente usa le deviazioni standard." },
      { id: 'piano-cartesiano', perche: "Si visualizza con punti sul piano." }
    ],
    parenti: []
  },
  {
    id: 'correlazione-non-causalita', titolo: 'Correlazione non vuol dire causalità', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 2,
    sinonimi: ['correlazione e causalità', 'causa ed effetto', 'variabile confondente', 'correlazione spuria'],
    domanda: "Se due cose vanno insieme, una causa l'altra?",
    esempio: "Nei mesi in cui si vendono più gelati ci sono più annegamenti. I gelati non causano annegamenti: in entrambi i casi la causa è il caldo.",
    idea: "Due variabili correlate non sono per forza legate da causa ed effetto.\nPuò esserci una terza variabile che le influenza entrambe, detta confondente.\nPuò darsi che la causa vada al contrario di come sembra.\nOppure la correlazione può essere una coincidenza, soprattutto se si cercano molti legami.\nPer dimostrare una causa servono di solito esperimenti controllati.",
    perche_fa_pensare: "Il nostro cervello vede cause ovunque. Distinguere correlazione e causa è una delle abilità più utili del pensiero critico.",
    dove_si_usa: "In medicina, nelle politiche pubbliche, nel giornalismo, nell'analisi dei dati.",
    prerequisiti: [
      { id: 'correlazione', perche: "Riguarda il significato di una correlazione." }
    ],
    parenti: []
  },
  {
    id: 'paradosso-di-simpson', titolo: 'Paradosso di Simpson', tipo: 'concetto', area: 'statistica', argomento: 'statistica-descrittiva', livello: 2,
    sinonimi: ['Simpson', 'paradosso di Simpson', 'inversione delle tendenze', 'dati aggregati'],
    domanda: "Una tendenza può invertirsi quando si uniscono i dati?",
    esempio: "Un ospedale salva più pazienti di un altro sia tra i casi gravi sia tra quelli lievi. Eppure, nel totale, sembra peggiore: riceve molti più casi gravi.",
    idea: "Il paradosso di Simpson si ha quando una tendenza presente in ogni gruppo si inverte nei dati complessivi.\nSuccede quando i gruppi hanno dimensioni molto diverse.\nLa media complessiva mescola gruppi con composizioni differenti.\nNon è un errore di calcolo: tutti i numeri sono corretti.\nPer interpretare i dati bisogna capire quale suddivisione è quella giusta.",
    perche_fa_pensare: "Gli stessi dati possono sostenere conclusioni opposte. Senza un ragionamento sulle cause, i numeri non bastano.",
    dove_si_usa: "Negli studi medici, nelle statistiche sui concorsi, nella valutazione di scuole e ospedali.",
    prerequisiti: [
      { id: 'percentuali', perche: "Si confrontano percentuali di gruppi diversi." },
      { id: 'media-mediana-moda', perche: "Nasce dal modo in cui si calcolano le medie complessive." }
    ],
    parenti: [
      { id: 'correlazione-non-causalita', perche: "Entrambi mostrano che i dati, da soli, non rivelano le cause." }
    ]
  },

  // Campioni ed esperimenti
  {
    id: 'campionamento', titolo: 'Campione e popolazione', tipo: 'concetto', area: 'statistica', argomento: 'campioni-ed-esperimenti', livello: 2,
    sinonimi: ['campione', 'campione casuale', 'popolazione', 'campionamento casuale', 'sondaggio'],
    domanda: "Si può conoscere il tutto guardando una parte?",
    esempio: "Per sapere se una minestra è salata non serve mangiarla tutta. Basta un cucchiaio, purché sia ben mescolata.",
    idea: "Un campione è una parte della popolazione scelta per studiarla.\nSe il campione è scelto a caso, rappresenta bene la popolazione, in media.\nLa precisione dipende soprattutto dalla grandezza del campione, non da quella della popolazione.\nPer questo un sondaggio su mille persone può descrivere un intero paese, con un certo margine di errore.\nUn campione scelto male, invece, può ingannare anche se è enorme.",
    perche_fa_pensare: "Sembra incredibile che mille persone dicano qualcosa su milioni. La chiave è il caso: proprio il caso garantisce la rappresentatività.",
    dove_si_usa: "Nei sondaggi, nel controllo di qualità, negli studi medici, nelle indagini sociali.",
    prerequisiti: [
      { id: 'dati-e-variabili', perche: "Si raccolgono dati su una parte della popolazione." },
      { id: 'probabilita-classica', perche: "Il campione si sceglie a caso." }
    ],
    parenti: []
  },
  {
    id: 'distorsioni-campionamento', titolo: 'Distorsioni del campione', tipo: 'concetto', area: 'statistica', argomento: 'campioni-ed-esperimenti', livello: 2,
    sinonimi: ['bias', 'distorsione', 'bias di selezione', 'campione non rappresentativo', 'bias di sopravvivenza'],
    domanda: "Come può un campione ingannare?",
    esempio: "Si racconta che in guerra si studiassero i fori sugli aerei rientrati, per decidere dove rinforzarli. Ma i punti critici erano quelli senza fori: gli aerei colpiti lì non tornavano.",
    idea: "Una distorsione è un errore sistematico nel modo in cui si raccolgono i dati.\nAd esempio si intervistano solo le persone più raggiungibili, o solo chi decide di rispondere.\nC'è anche la distorsione di sopravvivenza: si osservano solo i casi sopravvissuti a una selezione.\nAumentare il campione non corregge una distorsione: la ripete in grande.\nPer riconoscerla bisogna chiedersi chi manca nei dati.",
    perche_fa_pensare: "I dati che vediamo non sono tutti i dati. Spesso la parte più importante è quella che manca.",
    dove_si_usa: "Nei sondaggi, nelle recensioni online, negli studi sulle aziende e sugli investimenti di successo.",
    prerequisiti: [
      { id: 'campionamento', perche: "Riguarda il modo in cui si sceglie il campione." }
    ],
    parenti: []
  },
  {
    id: 'esperimenti-randomizzati', titolo: 'Esperimenti controllati e randomizzati', tipo: 'concetto', area: 'statistica', argomento: 'campioni-ed-esperimenti', livello: 2,
    sinonimi: ['studio randomizzato', 'gruppo di controllo', 'randomizzazione', 'placebo', 'sperimentazione clinica'],
    domanda: "Come si dimostra che una cura funziona davvero?",
    esempio: "Metà dei volontari, scelti a sorte, riceve il farmaco, l'altra metà una pillola finta. Se il primo gruppo guarisce di più, il merito è del farmaco.",
    idea: "In un esperimento controllato si confronta un gruppo trattato con un gruppo di controllo.\nL'assegnazione ai gruppi avviene a sorte: è la randomizzazione.\nCosì le altre differenze tra le persone si distribuiscono in modo equilibrato tra i gruppi.\nSpesso né i pazienti né i medici sanno chi riceve cosa, per evitare suggestioni.\nÈ il modo più affidabile per stabilire una relazione di causa.",
    perche_fa_pensare: "Usare il caso per arrivare alla certezza sembra paradossale. Eppure è proprio il caso a eliminare i pregiudizi.",
    dove_si_usa: "Negli studi clinici, in agricoltura, nella valutazione delle politiche, nei test dei siti web.",
    prerequisiti: [
      { id: 'campionamento', perche: "I gruppi si formano con un'estrazione casuale." },
      { id: 'correlazione-non-causalita', perche: "Servono proprio a distinguere la causa dalla semplice correlazione." }
    ],
    parenti: []
  },
  {
    id: 'inferenza-causale', titolo: 'Inferenza causale', tipo: 'concetto', area: 'statistica', argomento: 'campioni-ed-esperimenti', livello: 4,
    sinonimi: ['causalità', 'grafi causali', 'Pearl', 'controfattuali', 'inferenza causale'],
    domanda: "Si possono scoprire le cause anche senza esperimenti?",
    esempio: "Non si può assegnare a caso il fumo alle persone. Eppure si è stabilito che il fumo causa il cancro, combinando dati osservati e ragionamento sulle cause.",
    idea: "L'inferenza causale studia come ricavare relazioni di causa ed effetto dai dati.\nUsa diagrammi in cui le frecce indicano chi influenza chi: sono [[grafo|grafi]] orientati.\nDai diagrammi si capisce quali variabili bisogna tenere sotto controllo e quali no.\nPermette anche di ragionare su domande controfattuali: cosa sarebbe successo se.\nJudea Pearl e altri ne hanno costruito la teoria negli ultimi decenni.",
    perche_fa_pensare: "Per molto tempo la statistica ha evitato di parlare di cause. Oggi la causalità ha un suo linguaggio matematico preciso.",
    dove_si_usa: "In epidemiologia, in economia, nelle politiche pubbliche, nell'intelligenza artificiale.",
    prerequisiti: [
      { id: 'esperimenti-randomizzati', perche: "Estende le idee degli esperimenti ai dati osservati." },
      { id: 'probabilita-condizionata', perche: "Le relazioni si esprimono con probabilità condizionate." },
      { id: 'grafo', perche: "Le cause si rappresentano con grafi orientati." }
    ],
    parenti: []
  },

  // Inferenza statistica
  {
    id: 'stimatori', titolo: 'Stimare un valore sconosciuto', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['stima', 'stimatore', 'stima puntuale', 'media campionaria', 'errore standard'],
    domanda: "Come si indovina un valore che non si può misurare per intero?",
    esempio: "Non puoi pesare tutti i pesci di un lago. Peschi un campione e usi il peso medio del campione come stima del peso medio di tutti.",
    idea: "Uno stimatore è una regola per calcolare, dai dati di un campione, un valore della popolazione.\nLa media del campione, ad esempio, stima la media della popolazione.\nUna stima cambia da campione a campione: è essa stessa una [[variabile-aleatoria|variabile aleatoria]].\nUn buon stimatore non sbaglia in modo sistematico e ha poca variabilità.\nL'errore standard misura quanto la stima oscilla tra un campione e l'altro.",
    perche_fa_pensare: "Ogni numero che leggiamo nei dati è una stima, con un margine di errore. Dimenticarlo porta a conclusioni troppo sicure.",
    dove_si_usa: "Nei sondaggi, nelle stime del PIL, negli studi ecologici, nel controllo di qualità.",
    prerequisiti: [
      { id: 'campionamento', perche: "Le stime si calcolano dai campioni." },
      { id: 'varianza', perche: "La qualità della stima si misura con la varianza." }
    ],
    parenti: []
  },
  {
    id: 'intervallo-di-confidenza', titolo: 'Intervallo di confidenza', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['intervallo di confidenza', 'margine di errore', 'forchetta', 'livello di confidenza'],
    domanda: "Come si dice quanto è incerta una stima?",
    esempio: "Un sondaggio dà un partito al 30 per cento, con un margine di 3 punti. L'intervallo va dal 27 al 33 per cento.",
    idea: "Un intervallo di confidenza è un intervallo di valori costruito intorno a una stima.\nIl metodo è pensato per contenere il valore vero in una certa quota dei casi, come il 95 per cento.\nPiù il campione è grande, più l'intervallo è stretto.\nAttenzione: non vuol dire che il valore vero ha il 95 per cento di probabilità di stare in quell'intervallo specifico.\nVuol dire che il metodo, usato molte volte, ci prende 95 volte su 100.",
    perche_fa_pensare: "La differenza tra la probabilità di un metodo e quella di un singolo risultato è sottile. Perfino molti ricercatori la confondono.",
    dove_si_usa: "Nei sondaggi, nelle ricerche mediche, nelle misure scientifiche.",
    prerequisiti: [
      { id: 'stimatori', perche: "L'intervallo si costruisce intorno a una stima." },
      { id: 'teorema-del-limite-centrale', perche: "Spesso si usa l'approssimazione con la distribuzione normale." }
    ],
    parenti: []
  },
  {
    id: 'test-di-ipotesi', titolo: 'Test di ipotesi e valore p', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['test statistico', 'valore p', 'p-value', 'ipotesi nulla', 'significatività', 'statisticamente significativo'],
    domanda: "Quando un risultato è troppo strano per essere solo un caso?",
    esempio: "Una moneta dà 60 teste su 100 lanci. È truccata, o è stata solo fortuna? Il test calcola quanto sarebbe raro un risultato così con una moneta onesta.",
    idea: "Un test di ipotesi parte da un'ipotesi nulla, di solito «non c'è nessun effetto».\nPoi calcola quanto sarebbe raro, se l'ipotesi nulla fosse vera, ottenere dati come quelli osservati o più estremi.\nQuesta probabilità si chiama valore p.\nSe il valore p è molto piccolo, si conclude che l'ipotesi nulla è poco credibile.\nUn valore p piccolo non misura la probabilità che l'ipotesi sia vera, né l'importanza dell'effetto.",
    perche_fa_pensare: "Il valore p è uno dei concetti più usati e più fraintesi della scienza. Spesso viene scambiato per ciò che non è.",
    dove_si_usa: "Negli studi clinici, in psicologia, in economia, nel controllo di qualità.",
    prerequisiti: [
      { id: 'stimatori', perche: "Il test usa stime calcolate dai dati." },
      { id: 'probabilita-condizionata', perche: "Il valore p è una probabilità calcolata supponendo vera l'ipotesi nulla." },
      { id: 'distribuzione-normale', perche: "Molti test usano la distribuzione normale." }
    ],
    parenti: []
  },
  {
    id: 'confronti-multipli', titolo: 'Confronti multipli e riproducibilità', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['confronti multipli', 'p-hacking', 'crisi della riproducibilità', 'falsi positivi', 'correzione di Bonferroni'],
    domanda: "Cosa succede se si fanno moltissimi test?",
    esempio: "Testa 20 cibi per vedere se causano il mal di testa. Anche se nessuno lo causa, in media uno risulterà «significativo» per puro caso.",
    idea: "Ogni test ha una piccola probabilità di dare un falso allarme.\nSe fai molti test, i falsi allarmi diventano quasi inevitabili.\nCercare tra tanti confronti finché non ne esce uno significativo si chiama, in inglese, p-hacking.\nPer difendersi si correggono le soglie, o si dichiara prima quali test si faranno.\nIl problema ha contribuito alla cosiddetta crisi della riproducibilità in molte scienze.",
    perche_fa_pensare: "Se cerchi abbastanza, trovi sempre qualcosa. Il vero lavoro è capire se quel qualcosa esiste davvero.",
    dove_si_usa: "In medicina, in genetica, in psicologia, nell'analisi di grandi quantità di dati.",
    prerequisiti: [
      { id: 'test-di-ipotesi', perche: "Riguarda l'uso ripetuto dei test di ipotesi." }
    ],
    parenti: []
  },
  {
    id: 'verosimiglianza', titolo: 'Massima verosimiglianza', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['massima verosimiglianza', 'verosimiglianza', 'likelihood', 'stimatore di massima verosimiglianza'],
    domanda: "Quale spiegazione rende più probabili i dati osservati?",
    esempio: "Una moneta dà 7 teste su 10 lanci. Quale moneta truccata rende più probabile questo risultato? Quella che dà testa nel 70 per cento dei casi.",
    idea: "La verosimiglianza misura quanto un valore dei parametri rende probabili i dati osservati.\nIl metodo della massima verosimiglianza sceglie il valore che rende i dati più probabili.\nPer trovarlo si cerca il massimo di una funzione, spesso con le [[massimi-minimi|derivate]].\nÈ uno dei metodi di stima più usati.\nCon molti dati dà stime molto accurate, in condizioni abbastanza generali.",
    perche_fa_pensare: "La verosimiglianza non è la probabilità che un'ipotesi sia vera. Dice solo quanto l'ipotesi spiega bene ciò che abbiamo visto.",
    dove_si_usa: "In genetica, in econometria, nell'apprendimento automatico, in astronomia.",
    prerequisiti: [
      { id: 'stimatori', perche: "È un metodo per costruire stimatori." },
      { id: 'massimi-minimi', perche: "Si cerca il massimo di una funzione." }
    ],
    parenti: []
  },
  {
    id: 'statistica-bayesiana', titolo: 'Statistica bayesiana', tipo: 'concetto', area: 'statistica', argomento: 'inferenza', livello: 3,
    sinonimi: ['statistica bayesiana', 'bayesiano', 'probabilità a priori', 'probabilità a posteriori', 'inferenza bayesiana'],
    domanda: "Come si aggiorna ciò che si crede quando arrivano nuovi dati?",
    esempio: "Un nuovo ristorante ha una sola recensione, a cinque stelle. Non ti fidi del tutto: parti da un'idea media e la correggi poco, finché non arrivano altre recensioni.",
    idea: "La statistica bayesiana tratta i valori sconosciuti come incerti, con una loro distribuzione di probabilità.\nSi parte da una distribuzione a priori, che riassume ciò che si sa prima dei dati.\nCon il [[teorema-di-bayes|teorema di Bayes]] la si aggiorna in una distribuzione a posteriori.\nCon pochi dati conta molto il punto di partenza, con molti dati contano soprattutto i dati.\nIl risultato è una descrizione completa dell'incertezza, non un solo numero.",
    perche_fa_pensare: "Scegliere il punto di partenza sembra soggettivo. Ma rendere esplicite le proprie ipotesi è più onesto che nasconderle.",
    dove_si_usa: "In medicina, nei filtri antispam, nell'intelligenza artificiale, nelle previsioni elettorali.",
    prerequisiti: [
      { id: 'teorema-di-bayes', perche: "Il teorema di Bayes è il motore dell'aggiornamento." },
      { id: 'stimatori', perche: "Affronta lo stesso problema della stima, in un altro modo." },
      { id: 'probabilita-soggettiva', perche: "Interpreta la probabilità come grado di fiducia." }
    ],
    parenti: []
  },

  // Modelli e apprendimento automatico
  {
    id: 'regressione-lineare', titolo: 'Regressione lineare e minimi quadrati', tipo: 'concetto', area: 'statistica', argomento: 'modelli-e-apprendimento', livello: 3,
    sinonimi: ['regressione', 'minimi quadrati', 'retta di regressione', 'modello lineare'],
    domanda: "Qual è la retta che meglio descrive una nuvola di punti?",
    esempio: "Hai i dati di superficie e prezzo di molte case. La retta di regressione stima quanto costa, in media, un metro quadro in più.",
    idea: "La regressione lineare cerca la retta che passa più vicina a un insieme di punti.\nIl metodo dei minimi quadrati sceglie la retta che rende minima la somma dei quadrati delle distanze verticali.\nLa pendenza della retta dice di quanto cambia, in media, una variabile quando l'altra aumenta di uno.\nPermette di fare previsioni, ma è rischioso usarla lontano dai dati osservati.\nUna buona retta non dimostra un legame di causa.",
    perche_fa_pensare: "Una retta semplifica la realtà, e proprio per questo la rende comprensibile. Il problema è non dimenticare cosa si è lasciato fuori.",
    dove_si_usa: "In economia, in medicina, nelle previsioni di vendita, nella taratura degli strumenti.",
    prerequisiti: [
      { id: 'correlazione', perche: "Descrive con una retta il legame tra due variabili correlate." },
      { id: 'equazione-della-retta', perche: "Il risultato è l'equazione di una retta." },
      { id: 'massimi-minimi', perche: "Si rende minima la somma dei quadrati degli errori." }
    ],
    parenti: [
      { id: 'ortogonalita', perche: "I minimi quadrati sono una proiezione ortogonale dei dati." }
    ]
  },
  {
    id: 'overfitting', titolo: 'Sovradattamento', tipo: 'concetto', area: 'statistica', argomento: 'modelli-e-apprendimento', livello: 3,
    sinonimi: ['sovradattamento', 'overfitting', 'modello troppo complesso', 'generalizzazione'],
    domanda: "Un modello può imparare troppo?",
    esempio: "Uno studente che impara a memoria le risposte di un vecchio esame va benissimo su quell'esame. Ma fallisce davanti a domande nuove.",
    idea: "Il sovradattamento capita quando un modello si adatta troppo ai dati con cui è stato costruito.\nImpara anche il rumore e le coincidenze, non solo le regolarità vere.\nSui dati vecchi sembra perfetto, su quelli nuovi sbaglia molto.\nPer accorgersene si tengono da parte dei dati, mai usati per costruire il modello, e lo si prova su quelli.\nSpesso un modello più semplice prevede meglio di uno più complicato.",
    perche_fa_pensare: "Spiegare tutto non è la stessa cosa che capire. Un buon modello sa cosa ignorare.",
    dove_si_usa: "Nell'apprendimento automatico, nelle previsioni economiche, nella ricerca scientifica.",
    prerequisiti: [
      { id: 'regressione-lineare', perche: "Il problema si vede già con modelli di regressione troppo flessibili." }
    ],
    parenti: []
  },
  {
    id: 'analisi-componenti-principali', titolo: 'Analisi delle componenti principali', tipo: 'concetto', area: 'statistica', argomento: 'modelli-e-apprendimento', livello: 3,
    sinonimi: ['pca', 'componenti principali', 'riduzione della dimensionalità', 'analisi fattoriale'],
    domanda: "Come si riassumono dati con moltissime variabili?",
    esempio: "Di ogni studente hai i voti in dieci materie. Spesso due sole direzioni, come «materie scientifiche» e «materie umanistiche», spiegano quasi tutte le differenze.",
    idea: "L'analisi delle componenti principali trova le direzioni in cui i dati variano di più.\nLa prima componente è la direzione di massima variabilità, la seconda la successiva, e così via.\nTenendo solo le prime componenti si riducono molte variabili a poche, perdendo poca informazione.\nIn matematica, le componenti sono gli autovettori di una matrice che riassume le correlazioni.\nPer questo si basa sul [[teorema-spettrale|teorema spettrale]].",
    perche_fa_pensare: "Dietro tanti numeri ci sono spesso poche cause nascoste. Trovarle è una forma di comprensione.",
    dove_si_usa: "In genetica, in finanza, nel riconoscimento dei volti, nella visualizzazione dei dati.",
    prerequisiti: [
      { id: 'teorema-spettrale', perche: "Le componenti sono gli autovettori di una matrice simmetrica." },
      { id: 'correlazione', perche: "Si parte dalle correlazioni tra le variabili." }
    ],
    parenti: []
  },
  {
    id: 'apprendimento-automatico', titolo: 'Apprendimento automatico', tipo: 'concetto', area: 'statistica', argomento: 'modelli-e-apprendimento', livello: 3,
    sinonimi: ['machine learning', 'apprendimento automatico', 'intelligenza artificiale', 'modelli predittivi', 'addestramento'],
    domanda: "Una macchina può imparare dai dati?",
    esempio: "Un filtro antispam non segue regole scritte a mano. Ha visto milioni di messaggi etichettati e ha imparato a riconoscere quelli indesiderati.",
    idea: "L'apprendimento automatico costruisce modelli che migliorano le loro previsioni grazie ai dati.\nInvece di scrivere le regole, si sceglie una famiglia di modelli con molti parametri da regolare.\nI parametri si regolano riducendo gli errori sugli esempi, spesso con la [[discesa-del-gradiente|discesa del gradiente]].\nIl vero obiettivo è prevedere bene su dati nuovi, evitando il sovradattamento.\nÈ statistica applicata su grande scala, con molta potenza di calcolo.",
    perche_fa_pensare: "Un modello può prevedere bene senza che nessuno capisca perché. È conoscenza, o solo abilità?",
    dove_si_usa: "Nei traduttori automatici, nel riconoscimento vocale, nelle diagnosi mediche, nei suggerimenti online.",
    prerequisiti: [
      { id: 'discesa-del-gradiente', perche: "I parametri si regolano con metodi come la discesa del gradiente." },
      { id: 'overfitting', perche: "Bisogna evitare che il modello impari a memoria." }
    ],
    parenti: []
  },
  {
    id: 'reti-neurali', titolo: 'Reti neurali', tipo: 'concetto', area: 'statistica', argomento: 'modelli-e-apprendimento', livello: 4,
    sinonimi: ['reti neurali', 'deep learning', 'apprendimento profondo', 'neuroni artificiali', 'intelligenza artificiale'],
    domanda: "Come fa un programma a riconoscere un volto?",
    esempio: "Una rete neurale riceve i pixel di una foto. Strato dopo strato combina linee, forme e parti, fino a riconoscere un volto.",
    idea: "Una rete neurale è un modello fatto di molte unità semplici, organizzate in strati.\nOgni unità fa una somma pesata dei valori che riceve e la trasforma con una funzione.\nI pesi sono milioni, o anche miliardi, e si regolano con la discesa del gradiente.\nCon molti strati, la rete costruisce rappresentazioni sempre più astratte dei dati.\nIl nome viene da un'analogia, molto alla lontana, con i neuroni del cervello.",
    perche_fa_pensare: "Sappiamo costruirle e addestrarle, ma spesso non sappiamo spiegare perché funzionano così bene. È una sfida aperta anche per la matematica.",
    dove_si_usa: "Nel riconoscimento di immagini e voci, nella traduzione, nei modelli che generano testi e immagini.",
    prerequisiti: [
      { id: 'apprendimento-automatico', perche: "È una famiglia di modelli di apprendimento automatico." },
      { id: 'prodotto-di-matrici', perche: "Ogni strato calcola un prodotto tra matrici." }
    ],
    parenti: []
  }
]);
