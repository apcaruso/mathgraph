/* Teoria dei giochi */
Mappa.registra([
  // Giochi strategici
  {
    id: 'gioco-strategico', titolo: 'Gioco strategico: giocatori, strategie, esiti', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 1,
    sinonimi: ['teoria dei giochi', 'gioco', 'giocatori', 'strategia', 'interazione strategica'],
    domanda: "Come si sceglie quando il risultato dipende anche dagli altri?",
    esempio: "Due negozi vicini decidono i prezzi. Il guadagno di ciascuno dipende anche dal prezzo scelto dall'altro.",
    idea: "In teoria dei giochi, un «gioco» è ogni situazione in cui più persone scelgono e il risultato dipende da tutti.\nI giocatori sono chi decide.\nLe strategie sono le scelte possibili di ciascuno.\nGli esiti dicono quanto guadagna ciascuno per ogni combinazione di scelte.\nLa teoria nacque con John von Neumann e Oskar Morgenstern, nel 1944.",
    perche_fa_pensare: "Per scegliere bene bisogna immaginare cosa sceglieranno gli altri, che a loro volta immaginano te. È un gioco di specchi.",
    dove_si_usa: "In economia, in politica, in biologia, nelle trattative, nella sicurezza informatica.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'matrice-dei-pagamenti', titolo: 'Tabella dei guadagni', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 2,
    sinonimi: ['matrice dei pagamenti', 'tabella dei guadagni', 'forma normale', 'payoff'],
    domanda: "Come si rappresenta un gioco in modo che si veda tutto insieme?",
    esempio: "Due amici scelgono tra cinema e teatro. Una tabella con due righe e due colonne mostra quanto è contento ciascuno in ogni caso.",
    idea: "Un gioco tra due persone si può scrivere in una tabella.\nLe righe sono le strategie del primo giocatore, le colonne quelle del secondo.\nIn ogni casella ci sono i guadagni dei due giocatori per quella combinazione.\nCosì si confrontano tutte le possibilità con un colpo d'occhio.\nI guadagni possono essere soldi, punti o anche solo preferenze.",
    perche_fa_pensare: "Mettere una decisione in tabella costringe a dire con chiarezza cosa si vuole. Spesso è già metà della soluzione.",
    dove_si_usa: "In economia, nelle analisi strategiche, nell'insegnamento della teoria dei giochi.",
    prerequisiti: [
      { id: 'gioco-strategico', perche: "Rappresenta un gioco strategico." }
    ],
    parenti: []
  },
  {
    id: 'strategia-dominante', titolo: 'Strategia dominante', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 2,
    sinonimi: ['strategia dominante', 'strategia dominata', 'scelta migliore comunque', 'eliminazione delle strategie dominate'],
    domanda: "Esiste una scelta migliore qualunque cosa facciano gli altri?",
    esempio: "Se pioverà, l'ombrello serve. Se non pioverà, portarlo costa poco. Se per te vale così in ogni caso, portarlo è una strategia dominante.",
    idea: "Una strategia è dominante se è la migliore per te, qualunque cosa scelgano gli altri.\nSe ne hai una, non devi nemmeno indovinare le mosse altrui.\nUna strategia è dominata se un'altra è sempre migliore.\nUn giocatore razionale non sceglie mai una strategia dominata.\nEliminando le strategie dominate, a volte un gioco si risolve da solo.",
    perche_fa_pensare: "Quando esiste, la strategia dominante toglie ogni dubbio. Ma, come mostra il dilemma del prigioniero, può portare tutti a un risultato peggiore.",
    dove_si_usa: "In economia, nelle aste, nella progettazione delle regole di voto.",
    prerequisiti: [
      { id: 'matrice-dei-pagamenti', perche: "Si confrontano i guadagni nella tabella." }
    ],
    parenti: []
  },
  {
    id: 'gioco-a-somma-zero', titolo: 'Giochi a somma zero', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 2,
    sinonimi: ['somma zero', 'gioco competitivo', 'somma non zero', 'conflitto puro'],
    domanda: "Quando il guadagno di uno è sempre la perdita dell'altro?",
    esempio: "Nel poker, quello che vinci tu lo perdono gli altri giocatori. Il totale delle vincite e delle perdite è zero.",
    idea: "In un gioco a somma zero, ciò che un giocatore guadagna l'altro lo perde.\nGli interessi sono completamente opposti: non c'è spazio per accordi vantaggiosi.\nScacchi, poker e molti sport sono giochi a somma zero.\nMolte situazioni reali, invece, non lo sono: si può vincere o perdere tutti insieme.\nConfondere i due tipi di gioco porta spesso a scelte sbagliate.",
    perche_fa_pensare: "Molte persone vedono ogni interazione come una gara a somma zero. La teoria dei giochi mostra che spesso è un errore.",
    dove_si_usa: "Nei giochi da tavolo, negli sport, nelle strategie militari, nella sicurezza informatica.",
    prerequisiti: [
      { id: 'matrice-dei-pagamenti', perche: "Si riconosce dai guadagni nella tabella." }
    ],
    parenti: []
  },
  {
    id: 'dilemma-del-prigioniero', titolo: 'Dilemma del prigioniero', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 2,
    sinonimi: ['prigioniero', 'dilemma', 'cooperare o tradire', 'dilemma sociale'],
    domanda: "Perché due persone razionali possono finire entrambe peggio?",
    esempio: "Due complici sono interrogati separatamente. Se tacciono, prendono un anno. Se uno accusa l'altro, esce libero e l'altro prende dieci anni.",
    idea: "Nel dilemma del prigioniero, ognuno dei due ha convenienza a tradire, qualunque cosa faccia l'altro.\nTradire è una strategia dominante.\nMa se entrambi tradiscono, stanno peggio che se avessero cooperato.\nLa scelta razionale per il singolo porta a un risultato peggiore per tutti.\nIl gioco fu studiato nel 1950 da due ricercatori americani; Albert Tucker gli diede il nome e la storia.",
    perche_fa_pensare: "Mette in crisi l'idea che il bene comune nasca automaticamente dalle scelte individuali. Fiducia e regole cambiano il gioco.",
    dove_si_usa: "Nella corsa agli armamenti, nella concorrenza tra aziende, negli accordi sul clima, in biologia.",
    prerequisiti: [
      { id: 'strategia-dominante', perche: "Tradire è una strategia dominante." }
    ],
    parenti: []
  },
  {
    id: 'tragedia-dei-beni-comuni', titolo: 'Tragedia dei beni comuni', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-strategici', livello: 2,
    sinonimi: ['beni comuni', 'tragedia dei commons', 'sfruttamento eccessivo', 'Hardin', 'Ostrom'],
    domanda: "Perché le risorse di tutti rischiano di essere sprecate?",
    esempio: "In un lago, ogni pescatore guadagna di più pescando di più. Ma se tutti lo fanno, i pesci finiscono e nessuno pesca più.",
    idea: "La tragedia dei beni comuni è un dilemma del prigioniero con molti giocatori.\nOgnuno guadagna sfruttando di più una risorsa condivisa.\nIl danno, invece, si divide tra tutti.\nCosì la risorsa viene consumata più di quanto converrebbe a chiunque.\nGarrett Hardin rese famosa l'idea nel 1968; Elinor Ostrom mostrò poi che molte comunità sanno evitarla con regole condivise.",
    perche_fa_pensare: "Il problema non è la cattiveria, ma la struttura del gioco. Cambiare le regole può riuscire dove gli appelli falliscono.",
    dove_si_usa: "Nella gestione della pesca, dell'acqua, del clima, del traffico.",
    prerequisiti: [
      { id: 'dilemma-del-prigioniero', perche: "È un dilemma del prigioniero con molti giocatori." }
    ],
    parenti: []
  },

  // Equilibri
  {
    id: 'equilibrio-di-nash', titolo: 'Equilibrio di Nash', tipo: 'concetto', area: 'teoria-giochi', argomento: 'equilibri', livello: 2,
    sinonimi: ['Nash', 'equilibrio', 'John Nash', 'nessuno vuole cambiare'],
    domanda: "Esiste una scelta da cui nessuno vuole spostarsi?",
    esempio: "Tutti guidano a destra. Nessuno ha interesse a guidare a sinistra da solo. Anche tutti a sinistra sarebbe un equilibrio.",
    idea: "Un equilibrio di Nash è una combinazione di scelte in cui nessuno ha interesse a cambiare da solo.\nOgni giocatore sta facendo il meglio possibile, date le scelte degli altri.\nUn gioco può avere più equilibri, e non sempre il migliore viene raggiunto.\nNel dilemma del prigioniero l'unico equilibrio è che entrambi tradiscano.\nJohn Nash introdusse l'idea nel 1950, quando era uno studente di dottorato.",
    perche_fa_pensare: "Un equilibrio non è per forza buono: è solo stabile. Molte situazioni sociali restano bloccate in equilibri che nessuno vorrebbe.",
    dove_si_usa: "In economia, in politica, in biologia, nella progettazione delle reti di traffico.",
    prerequisiti: [
      { id: 'strategia-dominante', perche: "Generalizza l'idea di scelta migliore date le scelte altrui." }
    ],
    parenti: []
  },
  {
    id: 'strategie-miste', titolo: 'Strategie miste', tipo: 'concetto', area: 'teoria-giochi', argomento: 'equilibri', livello: 3,
    sinonimi: ['strategia mista', 'scegliere a caso', 'randomizzare', 'carta forbice sasso'],
    domanda: "Perché a volte conviene scegliere a caso?",
    esempio: "Nei calci di rigore, il portiere che si butta sempre a destra viene battuto facilmente. Conviene essere imprevedibili.",
    idea: "Una strategia mista consiste nello scegliere a caso tra più strategie, con probabilità fissate.\nServe quando essere prevedibili è uno svantaggio.\nIn carta, forbice, sasso la strategia migliore è scegliere ogni mossa con probabilità un terzo.\nLe probabilità giuste rendono l'avversario indifferente tra le sue scelte.\nCosì l'avversario non ha modo di approfittare delle tue abitudini.",
    perche_fa_pensare: "Il caso, che sembra il contrario della razionalità, diventa la scelta più razionale. Essere imprevedibili è una strategia.",
    dove_si_usa: "Nello sport, nei controlli di sicurezza, nel poker, nei controlli fiscali a campione.",
    prerequisiti: [
      { id: 'equilibrio-di-nash', perche: "Permettono di trovare equilibri dove non ce ne sono di semplici." },
      { id: 'valore-atteso', perche: "Si confronta il guadagno medio." }
    ],
    parenti: []
  },
  {
    id: 'teorema-minimax', titolo: 'Teorema minimax', tipo: 'teorema', area: 'teoria-giochi', argomento: 'equilibri', livello: 3,
    sinonimi: ['minimax', 'von Neumann', 'valore del gioco', 'minimizzare la perdita massima'],
    domanda: "Esiste una strategia sicura in un gioco competitivo?",
    esempio: "In un gioco a somma zero, cerchi la strategia che ti garantisce di più nel caso peggiore. Anche l'avversario fa lo stesso.",
    idea: "Il teorema minimax riguarda i giochi a somma zero tra due giocatori.\nOgnuno cerca la strategia che rende minima la sua perdita peggiore possibile.\nIl teorema dice che, con le strategie miste, i due calcoli portano allo stesso valore.\nQuel valore si chiama valore del gioco: è ciò che ciascuno può garantirsi.\nJohn von Neumann lo dimostrò nel 1928, ed è considerato l'atto di nascita della teoria dei giochi.",
    perche_fa_pensare: "In un conflitto puro, la prudenza perfetta di entrambi porta a un punto d'incontro preciso. Il pessimismo diventa equilibrio.",
    dove_si_usa: "Nei programmi che giocano a scacchi o a dama, nella sicurezza, in economia.",
    formula: {
      latex: '\\max_{x} \\min_{y} \\; x^{T} A\\, y \\;=\\; \\min_{y} \\max_{x} \\; x^{T} A\\, y',
      come_si_legge: "il massimo su x del minimo su y di x trasposto A y. È uguale al minimo su y del massimo su x della stessa quantità.",
      a_parole: "Il meglio che puoi garantirti è uguale al peggio che l'avversario può importi."
    },
    prerequisiti: [
      { id: 'strategie-miste', perche: "Il teorema vale con le strategie miste." },
      { id: 'gioco-a-somma-zero', perche: "Riguarda i giochi a somma zero." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-nash', titolo: 'Teorema di esistenza di Nash', tipo: 'teorema', area: 'teoria-giochi', argomento: 'equilibri', livello: 4,
    sinonimi: ['teorema di Nash', 'esistenza dell\'equilibrio', 'punto fisso', 'Nobel per l\'economia'],
    domanda: "Ogni gioco ha almeno un equilibrio?",
    esempio: "Carta, forbice, sasso non ha un equilibrio con scelte fisse. Ma ne ha uno se ognuno sceglie a caso, un terzo per mossa.",
    idea: "Il teorema di Nash riguarda i giochi con un numero finito di giocatori e di strategie.\nDice che ognuno di questi giochi ha almeno un equilibrio.\nL'equilibrio può richiedere strategie miste.\nLa dimostrazione usa il [[teorema-punto-fisso-brouwer|teorema del punto fisso di Brouwer]].\nIl teorema dice che l'equilibrio esiste, ma non come trovarlo in fretta.\nNash ricevette il premio Nobel per l'economia nel 1994.",
    perche_fa_pensare: "Un teorema di topologia, sui punti fissi, garantisce un fatto sul comportamento umano. La matematica pura arriva lontano.",
    dove_si_usa: "In economia, in biologia evolutiva, nella progettazione dei mercati.",
    prerequisiti: [
      { id: 'strategie-miste', perche: "L'equilibrio può richiedere strategie miste." },
      { id: 'teorema-punto-fisso-brouwer', perche: "La dimostrazione usa il punto fisso di Brouwer." }
    ],
    parenti: []
  },

  // Cooperazione ed evoluzione
  {
    id: 'giochi-ripetuti', titolo: 'Giochi ripetuti e cooperazione', tipo: 'concetto', area: 'teoria-giochi', argomento: 'cooperazione-ed-evoluzione', livello: 3,
    sinonimi: ['gioco ripetuto', 'occhio per occhio', 'tit for tat', 'torneo di Axelrod', 'reputazione'],
    domanda: "Perché e quando conviene cooperare?",
    esempio: "Con un negoziante che non rivedrai mai potresti essere tentato di imbrogliare. Con quello sotto casa, conviene essere onesti.",
    idea: "In un gioco ripetuto, gli stessi giocatori si incontrano molte volte.\nCosì il tradimento di oggi può essere punito domani.\nLa cooperazione può diventare conveniente anche per chi pensa solo al proprio interesse.\nNei tornei organizzati da Robert Axelrod intorno al 1980 vinse una strategia semplice: «occhio per occhio».\nComincia cooperando, poi ripete la mossa precedente dell'altro.",
    perche_fa_pensare: "La fiducia non serve solo a essere buoni: è una strategia vincente quando ci si rivede. Il futuro rende possibile la cooperazione.",
    dove_si_usa: "Nei rapporti commerciali, nelle relazioni internazionali, in biologia, nelle recensioni online.",
    prerequisiti: [
      { id: 'dilemma-del-prigioniero', perche: "Si ripete il dilemma del prigioniero." }
    ],
    parenti: []
  },
  {
    id: 'teoria-evolutiva-dei-giochi', titolo: 'Teoria evolutiva dei giochi', tipo: 'concetto', area: 'teoria-giochi', argomento: 'cooperazione-ed-evoluzione', livello: 3,
    sinonimi: ['giochi evolutivi', 'falchi e colombe', 'strategia evolutivamente stabile', 'Maynard Smith'],
    domanda: "Gli animali giocano a giochi senza saperlo?",
    esempio: "In una popolazione, alcuni animali lottano sempre per il cibo, altri si ritirano. Quale comportamento si diffonde dipende da quanti fanno l'uno o l'altro.",
    idea: "La teoria evolutiva dei giochi applica i giochi alle popolazioni di esseri viventi.\nLe strategie sono comportamenti ereditari, non scelte ragionate.\nChi guadagna di più ha più figli, e la sua strategia si diffonde.\nUna strategia evolutivamente stabile non può essere invasa da comportamenti diversi.\nJohn Maynard Smith e George Price introdussero l'idea nel 1973.",
    perche_fa_pensare: "L'equilibrio di Nash compare anche dove nessuno ragiona. La selezione naturale «calcola» le strategie al posto degli individui.",
    dove_si_usa: "In biologia, in ecologia, nello studio dei virus, nelle scienze sociali.",
    prerequisiti: [
      { id: 'giochi-ripetuti', perche: "Le popolazioni giocano lo stesso gioco per molte generazioni." },
      { id: 'equilibrio-di-nash', perche: "Le strategie stabili sono equilibri di Nash." },
      { id: 'sistema-dinamico', perche: "L'evoluzione delle strategie è un sistema dinamico." }
    ],
    parenti: [
      { id: 'modello-preda-predatore', perche: "Entrambi descrivono popolazioni che si influenzano a vicenda nel tempo." }
    ]
  },
  {
    id: 'valore-di-shapley', titolo: 'Giochi cooperativi e valore di Shapley', tipo: 'concetto', area: 'teoria-giochi', argomento: 'cooperazione-ed-evoluzione', livello: 3,
    sinonimi: ['Shapley', 'valore di Shapley', 'giochi cooperativi', 'divisione equa', 'coalizioni'],
    domanda: "Come si divide in modo giusto un guadagno ottenuto insieme?",
    esempio: "Tre amici prendono un taxi insieme, ma scendono in punti diversi. Quanto deve pagare ciascuno?",
    idea: "Nei giochi cooperativi i giocatori formano gruppi e si dividono il guadagno comune.\nIl valore di Shapley propone una divisione basata sul contributo di ciascuno.\nSi immaginano i giocatori che entrano nel gruppo uno alla volta, in tutti gli ordini possibili.\nOgnuno riceve, in media, quanto il suo arrivo aumenta il guadagno.\nLloyd Shapley lo propose nel 1953 e dimostrò che è l'unica divisione con alcune proprietà di equità.",
    perche_fa_pensare: "La giustizia, che sembra una questione di opinioni, si può tradurre in pochi principi precisi. E da essi segue una sola risposta.",
    dove_si_usa: "Nella divisione dei costi, nella politica, nell'intelligenza artificiale per spiegare le decisioni dei modelli.",
    prerequisiti: [
      { id: 'gioco-strategico', perche: "È un modo diverso di studiare un gioco." },
      { id: 'permutazioni', perche: "Si considerano tutti gli ordini di arrivo." },
      { id: 'valore-atteso', perche: "Il valore è una media dei contributi." }
    ],
    parenti: []
  },

  // Giochi in sequenza
  {
    id: 'induzione-a-ritroso', titolo: 'Ragionare all\'indietro', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-in-sequenza', livello: 2,
    sinonimi: ['induzione a ritroso', 'ragionare all\'indietro', 'albero del gioco', 'giochi sequenziali'],
    domanda: "Come si sceglie la prima mossa pensando all'ultima?",
    esempio: "Ci sono 21 fiammiferi e a turno se ne tolgono da 1 a 3. Chi prende l'ultimo perde. Ragionando dalla fine si scopre come vincere sempre.",
    idea: "Nei giochi in cui si muove a turno, si può ragionare partendo dalla fine.\nSi guarda quale mossa conviene nell'ultimo turno.\nSapendo questo, si sceglie la mossa migliore nel penultimo turno, e così via fino all'inizio.\nIl gioco si rappresenta come un albero di mosse possibili.\nIl metodo funziona bene, ma con giochi grandi l'albero diventa enorme.",
    perche_fa_pensare: "Per decidere il primo passo bisogna immaginare l'ultimo. In certi giochi, però, le persone reali non ragionano così, e fanno bene.",
    dove_si_usa: "Nelle trattative, nei giochi da tavolo, nella pianificazione, nei programmi che giocano.",
    prerequisiti: [
      { id: 'gioco-strategico', perche: "Si applica ai giochi a turni." },
      { id: 'alberi', perche: "Le mosse formano un albero." }
    ],
    parenti: []
  },
  {
    id: 'nim', titolo: 'Il gioco del Nim', tipo: 'concetto', area: 'teoria-giochi', argomento: 'giochi-in-sequenza', livello: 2,
    sinonimi: ['Nim', 'gioco dei fiammiferi', 'somma nim', 'Bouton', 'giochi combinatori'],
    domanda: "Si può vincere sempre a un gioco di fiammiferi?",
    esempio: "Ci sono tre mucchi di fiammiferi. A turno si toglie quanti fiammiferi si vuole da un solo mucchio. Chi prende l'ultimo vince.",
    idea: "Nel Nim, i giocatori tolgono a turno oggetti da alcuni mucchi.\nNel 1901 Charles Bouton trovò la strategia vincente completa.\nSi scrivono le grandezze dei mucchi in [[basi-numeriche|base 2]] e si combinano le cifre in un modo particolare.\nSe il risultato è zero, chi deve muovere perde, se l'avversario gioca bene.\nUn teorema successivo mostra che molti altri giochi sono, in fondo, il Nim travestito.",
    perche_fa_pensare: "Un gioco da bar nasconde la numerazione binaria. E diventa la chiave per un'intera famiglia di giochi.",
    dove_si_usa: "Nella teoria dei giochi combinatori, in informatica, nei rompicapo.",
    prerequisiti: [
      { id: 'induzione-a-ritroso', perche: "Le posizioni vincenti si trovano ragionando all'indietro." },
      { id: 'basi-numeriche', perche: "La strategia usa la numerazione in base 2." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-zermelo', titolo: 'Teorema di Zermelo sugli scacchi', tipo: 'teorema', area: 'teoria-giochi', argomento: 'giochi-in-sequenza', livello: 3,
    sinonimi: ['Zermelo', 'scacchi', 'giochi a informazione perfetta', 'strategia vincente'],
    domanda: "Negli scacchi esiste una strategia perfetta?",
    esempio: "Nel tris, chi gioca bene non perde mai: la partita finisce sempre pari. Il teorema dice che anche negli scacchi c'è un esito già deciso.",
    idea: "Il teorema di Zermelo riguarda i giochi a turni, finiti, senza caso e in cui tutto è visibile.\nIn questi giochi, uno dei giocatori può sempre garantirsi la vittoria, oppure entrambi possono garantirsi il pareggio.\nVale per scacchi, dama e tris.\nErnst Zermelo pubblicò il risultato nel 1913.\nPer gli scacchi non si sa quale dei tre casi sia vero: l'albero delle partite è troppo grande.",
    perche_fa_pensare: "Gli scacchi sono, in teoria, un gioco già risolto. In pratica, nessun computer potrà mai esplorarne tutte le partite.",
    dove_si_usa: "Nella teoria dei giochi e nei programmi che giocano a scacchi e dama.",
    prerequisiti: [
      { id: 'induzione-a-ritroso', perche: "La dimostrazione ragiona all'indietro." }
    ],
    parenti: []
  },

  // Scelte collettive
  {
    id: 'sistemi-di-voto', titolo: 'Sistemi di voto e paradosso di Condorcet', tipo: 'concetto', area: 'teoria-giochi', argomento: 'scelte-collettive', livello: 2,
    sinonimi: ['paradosso di Condorcet', 'sistemi elettorali', 'voto', 'maggioranza', 'ballottaggio'],
    domanda: "Il voto a maggioranza dà sempre un vincitore chiaro?",
    esempio: "Tre gruppi uguali di elettori ordinano tre candidati. Il primo gruppo preferisce A, poi B, poi C. Il secondo B, C, A. Il terzo C, A, B. A batte B, B batte C, ma C batte A.",
    idea: "Ci sono molti modi di trasformare le preferenze degli elettori in una decisione.\nSistemi diversi possono dare vincitori diversi con gli stessi voti.\nIl marchese di Condorcet notò nel 1785 un paradosso.\nLe preferenze della maggioranza possono girare in cerchio, come in carta, forbice, sasso.\nIn quel caso non esiste un candidato che batta tutti gli altri.",
    perche_fa_pensare: "«La volontà della maggioranza» può non esistere. Il modo di contare i voti è una scelta, e influenza il risultato.",
    dove_si_usa: "Nelle elezioni, nelle votazioni di comitati, nelle classifiche, nei premi.",
    prerequisiti: [],
    parenti: []
  },
  {
    id: 'teorema-di-arrow', titolo: 'Teorema di impossibilità di Arrow', tipo: 'teorema', area: 'teoria-giochi', argomento: 'scelte-collettive', livello: 3,
    sinonimi: ['Arrow', 'teorema di Arrow', 'impossibilità', 'scelta sociale', 'dittatore'],
    domanda: "Esiste un sistema di voto perfetto?",
    esempio: "Un comitato vota tra tre progetti. Togliere un progetto perdente non dovrebbe cambiare il vincitore. Eppure, con molti sistemi, succede.",
    idea: "Il teorema di Arrow riguarda i sistemi che mettono in classifica tre o più opzioni partendo dalle classifiche degli elettori.\nArrow elencò alcune richieste ragionevoli per un sistema giusto.\nAd esempio: se tutti preferiscono A a B, anche il risultato deve farlo.\nIl teorema dimostra che nessun sistema le soddisfa tutte, tranne una dittatura.\nKenneth Arrow lo dimostrò nel 1951 e ricevette poi il premio Nobel per l'economia.",
    perche_fa_pensare: "Non si tratta di trovare il sistema giusto: è dimostrato che non esiste. Ogni sistema di voto è un compromesso.",
    dove_si_usa: "In scienze politiche, in economia, nella progettazione dei sistemi elettorali.",
    prerequisiti: [
      { id: 'sistemi-di-voto', perche: "Riguarda i sistemi di voto." },
      { id: 'relazione-d-ordine', perche: "Le preferenze sono classifiche, cioè ordini." }
    ],
    parenti: []
  },
  {
    id: 'matrimoni-stabili', titolo: 'Abbinamenti stabili', tipo: 'teorema', area: 'teoria-giochi', argomento: 'scelte-collettive', livello: 2,
    sinonimi: ['matrimoni stabili', 'algoritmo di Gale-Shapley', 'abbinamento stabile', 'stable matching'],
    domanda: "Come si formano coppie in modo che nessuno voglia scappare?",
    esempio: "Ogni anno, negli Stati Uniti, migliaia di neolaureati in medicina vengono assegnati agli ospedali con un algoritmo di questo tipo.",
    idea: "Due gruppi, ad esempio studenti e scuole, hanno ciascuno una lista di preferenze sull'altro gruppo.\nUn abbinamento è stabile se non c'è una coppia che preferirebbe stare insieme piuttosto che con chi le è toccato.\nDavid Gale e Lloyd Shapley dimostrarono nel 1962 che un abbinamento stabile esiste sempre.\nLo trova un algoritmo semplice: un gruppo propone, l'altro accetta provvisoriamente o rifiuta.\nShapley e Alvin Roth ricevettero per questo il Nobel per l'economia nel 2012.",
    perche_fa_pensare: "Un algoritmo semplice può risolvere un problema sociale complesso. Ma chi propone ha un vantaggio: anche le regole hanno conseguenze.",
    dove_si_usa: "Nell'assegnazione di studenti alle scuole, di medici agli ospedali, nei trapianti di rene.",
    prerequisiti: [
      { id: 'algoritmo', perche: "La soluzione si trova con un algoritmo." }
    ],
    parenti: []
  },
  {
    id: 'aste', titolo: 'Aste e disegno di meccanismi', tipo: 'concetto', area: 'teoria-giochi', argomento: 'scelte-collettive', livello: 3,
    sinonimi: ['aste', 'asta di Vickrey', 'disegno di meccanismi', 'asta al secondo prezzo'],
    domanda: "Come si progettano regole che spingono tutti a dire la verità?",
    esempio: "In un'asta in busta chiusa, vince l'offerta più alta ma paga il prezzo della seconda. Così a ciascuno conviene offrire quanto vale davvero l'oggetto.",
    idea: "Il disegno di meccanismi rovescia la teoria dei giochi.\nInvece di studiare un gioco dato, si progettano le regole per ottenere un buon risultato.\nNell'asta al secondo prezzo, dire il proprio vero valore è una strategia dominante.\nWilliam Vickrey la studiò nel 1961.\nOggi aste progettate con cura assegnano le frequenze dei telefoni e gli spazi pubblicitari online.",
    perche_fa_pensare: "Non serve chiedere alle persone di essere sincere. Basta costruire regole in cui la sincerità conviene.",
    dove_si_usa: "Nelle aste delle frequenze radio, nella pubblicità su internet, nelle borse elettriche.",
    prerequisiti: [
      { id: 'strategia-dominante', perche: "Le buone regole rendono dominante la sincerità." },
      { id: 'valore-atteso', perche: "I partecipanti confrontano guadagni attesi." }
    ],
    parenti: []
  }
]);
