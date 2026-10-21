/* Probabilità */
Mappa.registra([
  // Probabilità elementare
  {
    id: 'evento', titolo: 'Esperimenti casuali ed eventi', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 1,
    sinonimi: ['eventi', 'esperimento casuale', 'spazio campionario', 'esiti', 'casi possibili'],
    domanda: "Come si descrive qualcosa che può succedere oppure no?",
    esempio: "Lanci un dado. «Esce un numero pari» è un evento: succede se esce 2, 4 o 6.",
    idea: "Un esperimento casuale è una situazione con più esiti possibili, di cui non sai prevedere quale capiterà.\nL'insieme di tutti gli esiti si chiama spazio campionario.\nUn evento è un sottoinsieme di esiti: si verifica se capita uno di quegli esiti.\nGli eventi si combinano come gli insiemi: «e», «o», «non».\nL'evento certo contiene tutti gli esiti, quello impossibile nessuno.",
    perche_fa_pensare: "Il caso è nel mondo o nella nostra ignoranza? Il lancio di un dado segue leggi fisiche precise, eppure lo chiamiamo casuale.",
    dove_si_usa: "Nei giochi, nelle assicurazioni, nelle previsioni del tempo, nei test medici.",
    prerequisiti: [
      { id: 'insieme', perche: "Gli eventi sono insiemi di esiti." }
    ],
    parenti: []
  },
  {
    id: 'probabilita-classica', titolo: 'Probabilità: casi favorevoli su casi possibili', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 1,
    sinonimi: ['probabilità', 'casi favorevoli', 'casi possibili', 'probabilità classica', 'Laplace'],
    domanda: "Si può misurare quanto è probabile una cosa?",
    esempio: "Con un dado onesto, la probabilità che esca 6 è un sesto: un caso favorevole su sei possibili.",
    idea: "La probabilità classica è il rapporto tra i casi favorevoli e i casi possibili.\nFunziona quando tutti i casi sono ugualmente probabili, come per un dado onesto.\nÈ un numero tra 0 e 1: 0 per l'impossibile, 1 per il certo.\nSi scrive spesso come frazione o come percentuale.\nIl difficile è decidere quando i casi sono davvero ugualmente probabili.",
    perche_fa_pensare: "La definizione usa «ugualmente probabili» per definire la probabilità. È un circolo, che ha spinto a cercare altre definizioni.",
    dove_si_usa: "Nei giochi d'azzardo, nelle lotterie, nei problemi di conteggio.",
    formula: {
      latex: 'P(E) = \\frac{\\text{casi favorevoli}}{\\text{casi possibili}}',
      come_si_legge: "probabilità di E uguale casi favorevoli fratto casi possibili.",
      a_parole: "La probabilità di un evento è la frazione dei casi possibili in cui l'evento si verifica."
    },
    prerequisiti: [
      { id: 'evento', perche: "Si contano i casi che formano l'evento." },
      { id: 'frazioni', perche: "La probabilità è una frazione." }
    ],
    parenti: []
  },
  {
    id: 'probabilita-frequentista', titolo: 'Probabilità come frequenza', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 1,
    sinonimi: ['frequenza relativa', 'probabilità frequentista', 'probabilità statistica', 'frequenza'],
    domanda: "Cosa vuol dire «probabile», se non si possono contare i casi?",
    esempio: "Non si può sapere in anticipo quante puntine da disegno cadranno con la punta in su. Si lanciano mille volte e si conta.",
    idea: "La probabilità frequentista è la frazione di volte in cui un evento si verifica, ripetendo l'esperimento molte volte.\nFunziona anche quando i casi non sono ugualmente probabili.\nPiù prove fai, più la frequenza tende a stabilizzarsi.\nQuesto fatto è descritto dalla [[legge-dei-grandi-numeri|legge dei grandi numeri]].\nNon si applica bene agli eventi unici, che non si possono ripetere.",
    perche_fa_pensare: "Qual è la probabilità che domani piova? Domani capita una volta sola: la frequenza, da sola, non basta.",
    dove_si_usa: "Nelle assicurazioni, negli studi clinici, nel controllo della qualità.",
    prerequisiti: [
      { id: 'probabilita-classica', perche: "Generalizza la probabilità classica." },
      { id: 'percentuali', perche: "Le frequenze si esprimono spesso in percentuale." }
    ],
    parenti: []
  },
  {
    id: 'probabilita-soggettiva', titolo: 'Probabilità come grado di fiducia', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 2,
    sinonimi: ['probabilità soggettiva', 'grado di fiducia', 'de Finetti', 'scommesse', 'probabilità bayesiana'],
    domanda: "La probabilità misura il mondo o quello che sappiamo?",
    esempio: "Un medico stima al 70 per cento che un paziente abbia una certa malattia. Non può ripetere il paziente mille volte: esprime una fiducia ragionata.",
    idea: "La probabilità soggettiva misura il grado di fiducia di una persona in un evento.\nSi può definire con le scommesse: quanto saresti disposto a scommettere, e a quali condizioni.\nDeve rispettare le stesse regole della probabilità, altrimenti si va incontro a perdite sicure.\nBruno de Finetti ne è stato uno dei principali teorici.\nCon il [[teorema-di-bayes|teorema di Bayes]], la fiducia si aggiorna quando arrivano nuovi dati.",
    perche_fa_pensare: "Se la probabilità è soggettiva, due persone possono dare valori diversi allo stesso evento. Eppure, con abbastanza dati, finiscono per avvicinarsi.",
    dove_si_usa: "In medicina, nelle previsioni economiche, nell'intelligenza artificiale, nei tribunali.",
    prerequisiti: [
      { id: 'probabilita-classica', perche: "Ne condivide le regole, ma ne cambia il significato." }
    ],
    parenti: [
      { id: 'teorema-di-bayes', perche: "Il teorema di Bayes dice come aggiornare la fiducia con i dati." }
    ]
  },
  {
    id: 'regole-della-probabilita', titolo: 'Regole della somma e del prodotto', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 2,
    sinonimi: ['regola della somma', 'regola del prodotto', 'eventi incompatibili', 'probabilità dell\'unione', 'evento complementare'],
    domanda: "Come si combinano le probabilità di eventi diversi?",
    esempio: "La probabilità di non fare 6 con un dado è uno meno un sesto, cioè cinque sesti.",
    idea: "La probabilità che un evento non succeda è uno meno la probabilità che succeda.\nSe due eventi non possono capitare insieme, la probabilità che capiti l'uno o l'altro è la somma.\nSe possono capitare insieme, bisogna togliere la probabilità che capitino entrambi.\nLa probabilità che due eventi capitino insieme si calcola con la regola del prodotto.\nQueste poche regole bastano per moltissimi calcoli.",
    perche_fa_pensare: "A volte conviene calcolare la probabilità del contrario. È un cambio di prospettiva che risolve molti problemi.",
    dove_si_usa: "Nel calcolo dei rischi, nei giochi, nell'affidabilità dei sistemi tecnici.",
    prerequisiti: [
      { id: 'probabilita-classica', perche: "Le regole valgono per le probabilità già definite." },
      { id: 'operazioni-insiemi', perche: "Le regole seguono le operazioni tra insiemi di esiti." }
    ],
    parenti: []
  },
  {
    id: 'paradosso-del-compleanno', titolo: 'Paradosso del compleanno', tipo: 'concetto', area: 'probabilita', argomento: 'probabilita-elementare', livello: 2,
    sinonimi: ['paradosso del compleanno', 'compleanni', 'stesso compleanno', 'collisioni'],
    domanda: "Quante persone servono perché due compiano gli anni lo stesso giorno?",
    esempio: "In una classe di 23 persone, è più probabile che no che due festeggino il compleanno lo stesso giorno.",
    idea: "Bastano 23 persone perché due compleanni uguali siano più probabili che no.\nSembra poco, perché pensiamo a una persona sola.\nMa ciò che conta sono le coppie: con 23 persone le coppie sono 253.\nConviene calcolare la probabilità del contrario: che tutti i compleanni siano diversi.\nCon 70 persone, la probabilità di due compleanni uguali supera il 99,9 per cento.",
    perche_fa_pensare: "La nostra intuizione conta le persone, la matematica conta le coppie. Molte coincidenze «incredibili» sono in realtà probabili.",
    dove_si_usa: "In crittografia, nello studio delle collisioni tra impronte digitali dei file.",
    prerequisiti: [
      { id: 'regole-della-probabilita', perche: "Si usa la regola del contrario." },
      { id: 'principio-di-moltiplicazione', perche: "Si contano i modi di avere compleanni tutti diversi." }
    ],
    parenti: [
      { id: 'funzioni-hash', perche: "Lo stesso calcolo stima quando due file diversi avranno la stessa impronta." }
    ]
  },

  // Probabilità condizionata
  {
    id: 'probabilita-condizionata', titolo: 'Probabilità condizionata', tipo: 'concetto', area: 'probabilita', argomento: 'condizionata-e-indipendenza', livello: 2,
    sinonimi: ['probabilità condizionata', 'dato che', 'sapendo che', 'condizionamento'],
    domanda: "Come cambia una probabilità quando si sa qualcosa in più?",
    esempio: "La probabilità che una carta sia un re è 4 su 52. Se sai che è una figura, diventa 4 su 12.",
    idea: "La probabilità condizionata è la probabilità di un evento sapendo che un altro si è verificato.\nSi calcola restringendo lo sguardo ai soli casi in cui il secondo evento è vero.\nIn pratica: la probabilità di entrambi, divisa per la probabilità della condizione.\nAttenzione: la probabilità di A sapendo B è diversa da quella di B sapendo A.\nConfonderle è un errore frequente, anche in tribunale e in medicina.",
    perche_fa_pensare: "Ogni informazione nuova cambia le probabilità. La probabilità non è una proprietà fissa delle cose, ma dipende da ciò che sai.",
    dove_si_usa: "Nei test medici, nelle previsioni, nei filtri antispam, nelle indagini.",
    formula: {
      latex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}',
      come_si_legge: "probabilità di A dato B uguale probabilità di A e B, fratto probabilità di B.",
      a_parole: "Tra i casi in cui B è vero, si guarda la frazione in cui è vero anche A."
    },
    prerequisiti: [
      { id: 'regole-della-probabilita', perche: "Si costruisce con le regole di base." }
    ],
    parenti: []
  },
  {
    id: 'eventi-indipendenti', titolo: 'Eventi indipendenti', tipo: 'concetto', area: 'probabilita', argomento: 'condizionata-e-indipendenza', livello: 2,
    sinonimi: ['indipendenza', 'eventi indipendenti', 'indipendenza statistica'],
    domanda: "Quando un evento non dice nulla su un altro?",
    esempio: "Il risultato di un lancio di moneta non influenza il successivo. Sapere che è uscita testa non cambia la probabilità del lancio dopo.",
    idea: "Due eventi sono indipendenti se sapere che uno è successo non cambia la probabilità dell'altro.\nIn quel caso, la probabilità che succedano entrambi è il prodotto delle due probabilità.\nDue lanci di moneta sono indipendenti, due estrazioni senza reinserimento no.\nIndipendenza non vuol dire incompatibilità: due eventi incompatibili, anzi, si influenzano molto.\nSupporre l'indipendenza quando non c'è porta a errori gravi.",
    perche_fa_pensare: "Molte crisi finanziarie sono nate supponendo indipendenti eventi che non lo erano. Un'ipotesi matematica può avere conseguenze enormi.",
    dove_si_usa: "Nel calcolo dei rischi, nei test di affidabilità, in genetica.",
    prerequisiti: [
      { id: 'probabilita-condizionata', perche: "L'indipendenza si definisce con la probabilità condizionata." }
    ],
    parenti: []
  },
  {
    id: 'teorema-di-bayes', titolo: 'Teorema di Bayes', tipo: 'teorema', area: 'probabilita', argomento: 'condizionata-e-indipendenza', livello: 2,
    sinonimi: ['Bayes', 'teorema di Bayes', 'probabilità inversa', 'falsi positivi', 'aggiornare le probabilità'],
    domanda: "Un test positivo vuol dire davvero essere malati?",
    esempio: "Una malattia colpisce 1 persona su 1000, e un test sbaglia nel 5 per cento dei casi. Se risulti positivo, la probabilità di essere malato è solo del 2 per cento circa.",
    idea: "Il teorema di Bayes collega la probabilità di A sapendo B con quella di B sapendo A.\nServe a «capovolgere» le probabilità condizionate.\nPermette di aggiornare una convinzione iniziale alla luce di nuovi dati.\nNell'esempio del test, il risultato sorprende perché la malattia è rara.\nIgnorare quanto è comune un evento è uno degli errori più diffusi nel ragionamento.",
    perche_fa_pensare: "Imparare dall'esperienza ha una formula precisa. È alla base di gran parte della statistica moderna e dell'intelligenza artificiale.",
    dove_si_usa: "Nei test medici, nei filtri antispam, nelle indagini giudiziarie, nell'apprendimento automatico.",
    formula: {
      latex: 'P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}',
      come_si_legge: "probabilità di A dato B uguale probabilità di B dato A per probabilità di A, fratto probabilità di B.",
      a_parole: "Per capovolgere una probabilità condizionata bisogna tener conto di quanto sono comuni i due eventi."
    },
    prerequisiti: [
      { id: 'probabilita-condizionata', perche: "Capovolge una probabilità condizionata." }
    ],
    parenti: []
  },
  {
    id: 'paradosso-di-monty-hall', titolo: 'Problema di Monty Hall', tipo: 'concetto', area: 'probabilita', argomento: 'condizionata-e-indipendenza', livello: 2,
    sinonimi: ['Monty Hall', 'tre porte', 'cambiare porta', 'problema delle tre porte'],
    domanda: "Conviene cambiare porta?",
    esempio: "Dietro una di tre porte c'è un'auto. Scegli una porta; il presentatore, che sa dove sta l'auto, ne apre un'altra vuota. Se cambi scelta, vinci due volte su tre.",
    idea: "Nel gioco ci sono tre porte e un solo premio.\nDopo la tua scelta, il presentatore apre sempre una porta vuota tra le altre due.\nSe cambi porta vinci con probabilità due terzi, se resti con probabilità un terzo.\nIl punto è che il presentatore sa dove sta il premio: la sua scelta porta informazione.\nMolte persone, anche matematici, hanno sbagliato questo problema.",
    perche_fa_pensare: "Quando ci sembra di avere due possibilità uguali, spesso non è così. L'informazione nascosta nelle azioni degli altri cambia le probabilità.",
    dove_si_usa: "Come esercizio di ragionamento, e per capire il valore dell'informazione nelle decisioni.",
    prerequisiti: [
      { id: 'probabilita-condizionata', perche: "Si risolve con la probabilità condizionata." }
    ],
    parenti: []
  },
  {
    id: 'fallacia-del-giocatore', titolo: 'Fallacia del giocatore', tipo: 'concetto', area: 'probabilita', argomento: 'condizionata-e-indipendenza', livello: 2,
    sinonimi: ['fallacia del giocatore', 'numeri ritardatari', 'ritardatari del lotto', 'gambler\'s fallacy'],
    domanda: "Un numero che non esce da tanto ha più probabilità di uscire?",
    esempio: "Al lotto, un numero che non esce da cento estrazioni viene chiamato «ritardatario». La sua probabilità di uscire è identica a quella di ogni altro numero.",
    idea: "La fallacia del giocatore è credere che il caso «compensi» i risultati passati.\nSe le prove sono indipendenti, il passato non influenza il futuro.\nUna moneta non ricorda di aver dato dieci volte testa.\nLa legge dei grandi numeri non dice che i risultati si pareggiano a breve.\nDice che, su moltissime prove, le frequenze si avvicinano alle probabilità.",
    perche_fa_pensare: "Il nostro cervello cerca schemi anche dove non ci sono. È utile per sopravvivere, ma costoso al tavolo da gioco.",
    dove_si_usa: "Nel gioco d'azzardo, negli investimenti, nella prevenzione delle dipendenze.",
    prerequisiti: [
      { id: 'eventi-indipendenti', perche: "Nasce dall'ignorare l'indipendenza delle prove." }
    ],
    parenti: [
      { id: 'legge-dei-grandi-numeri', perche: "La legge dei grandi numeri viene spesso fraintesa proprio in questo modo." }
    ]
  },

  // Variabili aleatorie
  {
    id: 'variabile-aleatoria', titolo: 'Variabile aleatoria', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['variabile casuale', 'variabile aleatoria', 'variabili aleatorie', 'distribuzione di probabilità'],
    domanda: "Come si descrive un numero che dipende dal caso?",
    esempio: "Lanci due dadi e guardi la somma. Il risultato è un numero tra 2 e 12, e ogni valore ha la sua probabilità.",
    idea: "Una variabile aleatoria è un numero che dipende dall'esito di un esperimento casuale.\nIn termini precisi, è una [[funzione]] che a ogni esito associa un numero.\nLa sua distribuzione dice con quale probabilità assume ciascun valore.\nPuò assumere valori isolati, come il numero di teste, o valori continui, come un'altezza.\nCon le variabili aleatorie si fanno calcoli sul caso.",
    perche_fa_pensare: "Il nome inganna: non è né una variabile né casuale, ma una funzione fissa. Il caso sta solo nell'esito di partenza.",
    dove_si_usa: "In statistica, in finanza, in fisica, nella valutazione dei rischi.",
    prerequisiti: [
      { id: 'evento', perche: "I valori dipendono dagli esiti di un esperimento." },
      { id: 'funzione', perche: "È una funzione dagli esiti ai numeri." }
    ],
    parenti: []
  },
  {
    id: 'valore-atteso', titolo: 'Valore atteso', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['speranza matematica', 'media', 'valore atteso', 'aspettativa', 'media pesata'],
    domanda: "Quanto ci si può aspettare di vincere, in media?",
    esempio: "Un biglietto costa 2 euro e vince 100 euro con probabilità uno su cento. In media vinci 1 euro a biglietto: quindi perdi 1 euro ogni volta.",
    idea: "Il valore atteso è la media dei valori di una variabile aleatoria, pesati con le loro probabilità.\nNon è per forza un valore che può uscire: il valore atteso di un dado è 3,5.\nÈ il valore attorno a cui si stabilizza la media di molte prove.\nNei giochi d'azzardo organizzati il valore atteso per il giocatore è negativo.\nPer decidere, però, il valore atteso non basta: conta anche il rischio.",
    perche_fa_pensare: "Molti comprano biglietti della lotteria sapendo che in media si perde. Le scelte umane non seguono solo il valore atteso.",
    dove_si_usa: "Nelle assicurazioni, nelle scommesse, negli investimenti, nelle decisioni aziendali.",
    formula: {
      latex: 'E[X] = \\sum_i x_i \\, P(X = x_i)',
      come_si_legge: "valore atteso di X uguale somma, per ogni i, di x i per la probabilità che X valga x i.",
      a_parole: "Si moltiplica ogni valore possibile per la sua probabilità, e si sommano i risultati."
    },
    prerequisiti: [
      { id: 'variabile-aleatoria', perche: "Si calcola su una variabile aleatoria." },
      { id: 'probabilita-classica', perche: "Ogni valore è pesato con la sua probabilità." }
    ],
    parenti: [
      { id: 'media-mediana-moda', perche: "È la versione probabilistica della media aritmetica." }
    ]
  },
  {
    id: 'varianza', titolo: 'Varianza', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['varianza', 'deviazione standard', 'scarto quadratico medio', 'rischio'],
    domanda: "Quanto si allontanano i risultati dalla media?",
    esempio: "Due investimenti rendono in media il 5 per cento. Uno oscilla tra 4 e 6, l'altro tra meno 20 e più 30. Hanno varianze molto diverse.",
    idea: "La varianza misura quanto i valori di una variabile aleatoria si allontanano dal valore atteso.\nÈ la media dei quadrati degli scarti dalla media.\nLa sua radice quadrata si chiama deviazione standard, ed è nella stessa unità dei dati.\nUna varianza piccola indica risultati concentrati, una grande risultati sparpagliati.\nIn finanza la varianza è una misura del rischio.",
    perche_fa_pensare: "Due situazioni con la stessa media possono essere completamente diverse. La media, da sola, nasconde l'incertezza.",
    dove_si_usa: "In finanza, nel controllo di qualità, nella statistica sperimentale.",
    prerequisiti: [
      { id: 'valore-atteso', perche: "Misura gli scarti dal valore atteso." }
    ],
    parenti: [
      { id: 'dispersione', perche: "La deviazione standard dei dati ne è la versione statistica." }
    ]
  },
  {
    id: 'distribuzione-binomiale', titolo: 'Distribuzione binomiale', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['binomiale', 'distribuzione binomiale', 'prove ripetute', 'Bernoulli', 'successi e insuccessi'],
    domanda: "Quante volte esce testa in dieci lanci?",
    esempio: "Un farmaco funziona sul 70 per cento dei pazienti. Su 10 pazienti, la binomiale dice quanto è probabile che funzioni su 7, su 8 o su tutti.",
    idea: "La distribuzione binomiale conta i successi in un numero fisso di prove indipendenti.\nOgni prova ha solo due esiti, successo o insuccesso, con la stessa probabilità ogni volta.\nLa probabilità di k successi su n prove usa i [[combinazioni|coefficienti binomiali]].\nIl numero medio di successi è n per la probabilità di successo.\nCon molte prove, la sua forma si avvicina a una campana.",
    perche_fa_pensare: "Dietro risultati che sembrano casuali c'è una forma precisa e prevedibile. Il caso ha una sua architettura.",
    dove_si_usa: "Negli studi clinici, nel controllo di qualità, nei sondaggi, in genetica.",
    formula: {
      latex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
      come_si_legge: "probabilità che X valga k uguale n su k, per p alla k. Il tutto per uno meno p, alla n meno k.",
      a_parole: "Si contano i modi di scegliere quali prove riescono, e si moltiplica per la probabilità di ciascun modo."
    },
    prerequisiti: [
      { id: 'combinazioni', perche: "Conta in quanti modi si possono distribuire i successi." },
      { id: 'eventi-indipendenti', perche: "Le prove sono indipendenti tra loro." },
      { id: 'variabile-aleatoria', perche: "Il numero di successi è una variabile aleatoria." }
    ],
    parenti: []
  },
  {
    id: 'distribuzione-di-poisson', titolo: 'Distribuzione di Poisson', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 3,
    sinonimi: ['Poisson', 'eventi rari', 'distribuzione di Poisson', 'arrivi casuali'],
    domanda: "Come si descrivono eventi rari che capitano a caso nel tempo?",
    esempio: "Un call center riceve in media 3 chiamate al minuto. La Poisson dice quanto è probabile riceverne 0, 5 o 10 in un minuto.",
    idea: "La distribuzione di Poisson descrive quante volte capita un evento raro in un intervallo di tempo o di spazio.\nVale quando gli eventi sono indipendenti e capitano in media con un ritmo costante.\nDipende da un solo numero: la media degli eventi nell'intervallo.\nSi ottiene come limite della binomiale, con moltissime prove e probabilità piccolissima.\nNella sua formula compare il [[numero-e|numero e]].",
    perche_fa_pensare: "Anche il caso puro produce raggruppamenti. Tre incidenti nella stessa settimana non provano, da soli, che qualcosa sia cambiato.",
    dove_si_usa: "Nei call center, negli ospedali, nel decadimento radioattivo, negli incidenti stradali.",
    prerequisiti: [
      { id: 'distribuzione-binomiale', perche: "È un caso limite della binomiale." },
      { id: 'numero-e', perche: "Nella formula compare il numero e." },
      { id: 'limite-di-successione', perche: "Si ottiene con un passaggio al limite." }
    ],
    parenti: []
  },
  {
    id: 'variabili-continue', titolo: 'Variabili continue e densità', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['variabile continua', 'densità di probabilità', 'funzione di densità', 'variabili aleatorie continue'],
    domanda: "Che probabilità ha un valore esatto, se i valori possibili sono infiniti?",
    esempio: "L'altezza di una persona scelta a caso può essere qualunque numero. La probabilità che sia esattamente 170,000… centimetri è zero.",
    idea: "Una variabile continua può assumere tutti i valori di un intervallo.\nOgni singolo valore ha probabilità zero.\nHanno senso, invece, le probabilità degli intervalli, come «tra 165 e 175 centimetri».\nSi descrivono con una curva di densità: la probabilità di un intervallo è l'area sotto la curva.\nPer calcolare quelle aree servono gli [[integrale-di-riemann|integrali]].",
    perche_fa_pensare: "Un evento di probabilità zero non è impossibile: un valore esatto esce comunque. Lo zero, qui, non vuol dire «mai».",
    dove_si_usa: "Per tempi, altezze, pesi, temperature e ogni grandezza che varia con continuità.",
    prerequisiti: [
      { id: 'variabile-aleatoria', perche: "È un tipo di variabile aleatoria." },
      { id: 'integrale-di-riemann', perche: "Le probabilità sono aree sotto una curva." }
    ],
    parenti: []
  },
  {
    id: 'distribuzione-normale', titolo: 'Distribuzione normale', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 2,
    sinonimi: ['gaussiana', 'curva a campana', 'distribuzione normale', 'Gauss', 'normale'],
    domanda: "Perché tante misure si distribuiscono a forma di campana?",
    esempio: "Raccogli molte misure: le altezze degli adulti di un paese, o gli errori di uno strumento. Disegnano una campana.",
    idea: "La distribuzione normale ha una densità a forma di campana, simmetrica intorno alla media.\nDipende da due numeri: la media, che ne fissa il centro, e la deviazione standard, che ne fissa la larghezza.\nCirca il 68 per cento dei valori sta entro una deviazione standard dalla media.\nCirca il 95 per cento sta entro due deviazioni standard.\nCompare ovunque grazie al [[teorema-del-limite-centrale|teorema del limite centrale]].",
    perche_fa_pensare: "Non tutto è normale: redditi, terremoti e crolli di borsa seguono distribuzioni con code molto più lunghe. Usare la campana dove non va bene è pericoloso.",
    dove_si_usa: "In statistica, nelle misure scientifiche, nel controllo di qualità, in finanza.",
    formula: {
      latex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
      come_si_legge: "effe di x uguale uno fratto sigma per radice di due pi greco. Il tutto per e elevato a: meno x meno mu al quadrato, fratto due sigma al quadrato.",
      a_parole: "La campana è più alta al centro, nella media mu, e si allarga tanto più quanto è grande sigma."
    },
    prerequisiti: [
      { id: 'variabili-continue', perche: "È una distribuzione continua." },
      { id: 'varianza', perche: "La larghezza della campana dipende dalla deviazione standard." },
      { id: 'funzione-esponenziale', perche: "Nella formula compare un esponenziale." }
    ],
    parenti: []
  },
  {
    id: 'paradosso-di-bertrand', titolo: 'Paradosso di Bertrand', tipo: 'concetto', area: 'probabilita', argomento: 'variabili-aleatorie', livello: 3,
    sinonimi: ['Bertrand', 'corda a caso', 'paradosso di Bertrand', 'scelta a caso'],
    domanda: "Cosa vuol dire, davvero, scegliere «a caso»?",
    esempio: "Scegli a caso una corda di un cerchio. Con che probabilità è più lunga del lato del triangolo equilatero inscritto? Secondo il metodo, viene un terzo, un mezzo o un quarto.",
    idea: "Joseph Bertrand propose il problema nel 1889.\nTre modi ragionevoli di scegliere una corda a caso danno tre risposte diverse.\nNessuno dei tre è sbagliato: ognuno descrive un esperimento casuale diverso.\nQuando gli esiti sono infiniti, «a caso» non ha un significato unico.\nBisogna specificare come si sceglie, cioè quale distribuzione si usa.",
    perche_fa_pensare: "Un'espressione che sembra chiara nasconde un'ambiguità profonda. Prima di calcolare, bisogna sapere di cosa si parla.",
    dove_si_usa: "Nella progettazione delle simulazioni e nella scelta dei modelli statistici.",
    prerequisiti: [
      { id: 'probabilita-classica', perche: "Mette in crisi l'idea di casi ugualmente probabili." },
      { id: 'variabili-continue', perche: "Le corde possibili sono infinite e variano con continuità." }
    ],
    parenti: []
  },

  // Teoremi limite
  {
    id: 'legge-dei-grandi-numeri', titolo: 'Legge dei grandi numeri', tipo: 'teorema', area: 'probabilita', argomento: 'teoremi-limite', livello: 2,
    sinonimi: ['legge dei grandi numeri', 'media campionaria', 'Bernoulli', 'convergenza delle frequenze'],
    domanda: "Perché il caso, su grandi numeri, diventa prevedibile?",
    esempio: "Un singolo lancio di moneta è imprevedibile. Su un milione di lanci, la frazione di teste sarà quasi certamente vicinissima a metà.",
    idea: "La legge dei grandi numeri dice che la media di molte prove indipendenti si avvicina al valore atteso.\nPiù prove fai, più la media si stabilizza.\nNon dice che i risultati si compensano: gli scarti assoluti possono anche crescere.\nDice che gli scarti diventano piccoli rispetto al numero di prove.\nÈ il motivo per cui assicurazioni e casinò possono prevedere i propri guadagni.",
    perche_fa_pensare: "Il singolo è imprevedibile, la massa no. Vale per le monete, ma anche per i comportamenti umani.",
    dove_si_usa: "Nelle assicurazioni, nei sondaggi, nei metodi di simulazione, nei casinò.",
    prerequisiti: [
      { id: 'valore-atteso', perche: "La media si avvicina al valore atteso." },
      { id: 'probabilita-frequentista', perche: "Giustifica l'idea di probabilità come frequenza." }
    ],
    parenti: []
  },
  {
    id: 'teorema-del-limite-centrale', titolo: 'Teorema del limite centrale', tipo: 'teorema', area: 'probabilita', argomento: 'teoremi-limite', livello: 3,
    sinonimi: ['limite centrale', 'teorema centrale del limite', 'somme di variabili', 'gaussiana'],
    domanda: "Perché la curva a campana compare ovunque?",
    esempio: "Lancia 100 dadi e somma i risultati, poi ripeti molte volte. Le somme si distribuiscono a campana, anche se ogni faccia di un dado è ugualmente probabile.",
    idea: "Il teorema del limite centrale riguarda la somma di molte variabili aleatorie indipendenti.\nQualunque sia la loro distribuzione, purché abbia varianza finita, la somma è vicina a una normale.\nPiù variabili sommi, più l'approssimazione migliora.\nPer questo le grandezze che nascono da molti piccoli effetti hanno spesso forma a campana.\nÈ la base di gran parte della statistica.",
    perche_fa_pensare: "Dal disordine di tanti piccoli effetti emerge una forma universale. È uno degli esempi più belli di ordine che nasce dal caso.",
    dove_si_usa: "Negli intervalli di confidenza, nei sondaggi, nelle misure scientifiche, in finanza.",
    prerequisiti: [
      { id: 'distribuzione-normale', perche: "La somma tende a una distribuzione normale." },
      { id: 'legge-dei-grandi-numeri', perche: "Precisa in che modo la media si avvicina al valore atteso." }
    ],
    parenti: []
  },

  // Fondamenti della probabilità
  {
    id: 'assiomi-di-kolmogorov', titolo: 'Assiomi della probabilità', tipo: 'concetto', area: 'probabilita', argomento: 'fondamenti-della-probabilita', livello: 3,
    sinonimi: ['Kolmogorov', 'assiomi della probabilità', 'probabilità assiomatica'],
    domanda: "Su quali regole poggia il calcolo delle probabilità?",
    esempio: "Che la probabilità sia una frequenza o una fiducia, deve comunque rispettare le stesse tre regole.",
    idea: "Nel 1933 Andrej Kolmogorov fondò la probabilità su pochi assiomi.\nOgni evento ha una probabilità tra 0 e 1, e l'evento certo ha probabilità 1.\nSe gli eventi sono incompatibili, la probabilità dell'unione è la somma delle probabilità.\nQuesto vale anche per infiniti eventi, purché si possano elencare.\nGli assiomi non dicono cosa sia la probabilità, ma come si comporta.",
    perche_fa_pensare: "Il dibattito su cosa sia davvero la probabilità resta aperto. Ma su come calcolarla, tutti sono d'accordo.",
    dove_si_usa: "In tutta la probabilità e la statistica moderne.",
    prerequisiti: [
      { id: 'regole-della-probabilita', perche: "Gli assiomi raccolgono le regole di base." },
      { id: 'metodo-assiomatico', perche: "È un sistema di assiomi." },
      { id: 'insieme-delle-parti', perche: "Gli eventi sono sottoinsiemi dello spazio degli esiti." }
    ],
    parenti: []
  },
  {
    id: 'probabilita-come-misura', titolo: 'Probabilità come misura', tipo: 'concetto', area: 'probabilita', argomento: 'fondamenti-della-probabilita', livello: 4,
    sinonimi: ['spazio di probabilità', 'probabilità e misura', 'sigma-algebra', 'teoria della misura'],
    domanda: "Cosa hanno in comune la probabilità e l'area di una superficie?",
    esempio: "Scegli a caso un punto in un quadrato. La probabilità che cada in una zona è la frazione di area che quella zona occupa.",
    idea: "Nella teoria moderna la probabilità è una [[misura]], come la lunghezza o l'area.\nUno spazio di probabilità è uno spazio di misura con misura totale 1.\nGli eventi sono gli insiemi misurabili.\nIl valore atteso diventa un [[integrale-di-lebesgue|integrale di Lebesgue]].\nCosì la probabilità eredita tutti gli strumenti dell'analisi.",
    perche_fa_pensare: "Il caso e lo spazio parlano la stessa lingua. Un'idea nata per misurare terreni misura anche l'incertezza.",
    dove_si_usa: "Nella ricerca in probabilità, nella finanza matematica, nella fisica statistica.",
    prerequisiti: [
      { id: 'assiomi-di-kolmogorov', perche: "Gli assiomi diventano le proprietà di una misura." },
      { id: 'misura', perche: "La probabilità è un tipo di misura." },
      { id: 'integrale-di-lebesgue', perche: "Il valore atteso è un integrale." }
    ],
    parenti: []
  },

  // Processi stocastici
  {
    id: 'passeggiata-aleatoria', titolo: 'Passeggiata aleatoria', tipo: 'concetto', area: 'probabilita', argomento: 'processi-stocastici', livello: 2,
    sinonimi: ['passeggiata casuale', 'random walk', 'cammino dell\'ubriaco', 'passeggiata aleatoria'],
    domanda: "Dove arriva chi cammina facendo passi a caso?",
    esempio: "A ogni lancio di moneta fai un passo avanti o indietro. Dopo 100 passi, di solito, sei a una decina di passi dalla partenza.",
    idea: "Una passeggiata aleatoria è una successione di passi, ciascuno in una direzione scelta a caso.\nIn media non ci si sposta, ma la distanza tipica dalla partenza cresce.\nCresce però lentamente: come la radice quadrata del numero di passi.\nIn una e in due dimensioni si torna quasi certamente al punto di partenza.\nIn tre dimensioni, invece, c'è una buona probabilità di non tornare mai.",
    perche_fa_pensare: "Si dice che un ubriaco ritrova sempre casa, mentre un uccello ubriaco può perdersi per sempre. La dimensione dello spazio cambia il destino.",
    dove_si_usa: "Nei prezzi di borsa, nella diffusione delle molecole, negli algoritmi di ricerca.",
    prerequisiti: [
      { id: 'eventi-indipendenti', perche: "I passi sono indipendenti tra loro." },
      { id: 'variabile-aleatoria', perche: "La posizione è una variabile aleatoria." }
    ],
    parenti: []
  },
  {
    id: 'catene-di-markov', titolo: 'Catene di Markov', tipo: 'concetto', area: 'probabilita', argomento: 'processi-stocastici', livello: 3,
    sinonimi: ['Markov', 'catena di Markov', 'processo di Markov', 'matrice di transizione', 'PageRank'],
    domanda: "Come si descrive un sistema che salta a caso tra stati, senza memoria?",
    esempio: "Il meteo di domani dipende in parte da quello di oggi, ma non da quello di una settimana fa. È un modello a catena di Markov.",
    idea: "Una catena di Markov è un sistema che passa a caso da uno stato all'altro.\nLa probabilità del prossimo stato dipende solo dallo stato attuale, non dalla storia passata.\nLe probabilità di passaggio si raccolgono in una [[matrice]].\nDopo molti passi, spesso la catena si stabilizza in un equilibrio.\nL'algoritmo PageRank, usato per ordinare le pagine web, si basa su questa idea.",
    perche_fa_pensare: "Dimenticare il passato rende i sistemi più semplici da studiare. Sorprendentemente, molti fenomeni reali si lasciano descrivere così.",
    dove_si_usa: "Nei motori di ricerca, nei suggerimenti di testo, in genetica, nelle code.",
    prerequisiti: [
      { id: 'probabilita-condizionata', perche: "Le transizioni sono probabilità condizionate." },
      { id: 'matrice', perche: "Le probabilità di passaggio formano una matrice." }
    ],
    parenti: [
      { id: 'metodo-delle-potenze', perche: "L'equilibrio di una catena si calcola spesso con il metodo delle potenze." }
    ]
  },
  {
    id: 'moto-browniano', titolo: 'Moto browniano', tipo: 'concetto', area: 'probabilita', argomento: 'processi-stocastici', livello: 4,
    sinonimi: ['moto browniano', 'Brown', 'processo di Wiener', 'Wiener', 'diffusione'],
    domanda: "Perché un granello di polline nell'acqua si muove a zigzag?",
    esempio: "Al microscopio, un granello di polline nell'acqua trema senza sosta. È urtato da miliardi di molecole d'acqua, troppo piccole per essere viste.",
    idea: "Il moto browniano è il movimento irregolare di una particella colpita da molte molecole invisibili.\nIn matematica è il limite di una passeggiata aleatoria con passi sempre più piccoli e frequenti.\nLa sua traiettoria è continua, ma così irregolare da non avere tangente in nessun punto.\nNel 1905 Einstein ne fece una teoria che permise di confermare l'esistenza degli atomi.\nNorbert Wiener ne diede una costruzione rigorosa negli anni Venti.",
    perche_fa_pensare: "Una traiettoria continua senza direzione in nessun punto sembra impossibile. La natura la mostra al microscopio.",
    dove_si_usa: "In fisica, in finanza, in biologia, nella modellazione della diffusione.",
    prerequisiti: [
      { id: 'passeggiata-aleatoria', perche: "È il limite di una passeggiata aleatoria." },
      { id: 'teorema-del-limite-centrale', perche: "Gli spostamenti hanno distribuzione normale." }
    ],
    parenti: []
  },
  {
    id: 'martingale', titolo: 'Martingale', tipo: 'concetto', area: 'probabilita', argomento: 'processi-stocastici', livello: 4,
    sinonimi: ['martingala', 'gioco equo', 'martingale', 'processo stocastico equo'],
    domanda: "Esiste una strategia che batte un gioco equo?",
    esempio: "Raddoppiare la puntata dopo ogni perdita sembra garantire una vincita. Con risorse limitate, prima o poi una serie di perdite svuota il portafoglio.",
    idea: "Una martingala è un processo casuale in cui, in media, il valore futuro è uguale a quello attuale.\nÈ il modello matematico di un gioco equo.\nUn teorema importante dice che nessuna strategia di arresto, entro limiti ragionevoli, rende vantaggioso un gioco equo.\nLe martingale servono anche a dimostrare molti risultati di probabilità.\nIl nome viene da una strategia di scommessa, quella del raddoppio.",
    perche_fa_pensare: "Molti hanno creduto di aver trovato il sistema per vincere al casinò. La matematica dimostra che, in un gioco equo, non esiste.",
    dove_si_usa: "In finanza matematica, nella teoria dei giochi d'azzardo, negli algoritmi casuali.",
    prerequisiti: [
      { id: 'probabilita-come-misura', perche: "La definizione rigorosa usa la probabilità come misura." },
      { id: 'probabilita-condizionata', perche: "Si basa sul valore atteso condizionato a ciò che si sa." }
    ],
    parenti: [
      { id: 'fallacia-del-giocatore', perche: "Entrambi mostrano che guardare il passato non rende vantaggioso un gioco equo." }
    ]
  },
  {
    id: 'calcolo-stocastico', titolo: 'Calcolo stocastico', tipo: 'concetto', area: 'probabilita', argomento: 'processi-stocastici', livello: 4,
    sinonimi: ['calcolo stocastico', 'Itô', 'equazioni differenziali stocastiche', 'Black-Scholes'],
    domanda: "Come si fa il calcolo differenziale su traiettorie casuali?",
    esempio: "Il prezzo di un'azione cambia in modo in parte prevedibile e in parte casuale. Il calcolo stocastico descrive entrambe le parti in una sola equazione.",
    idea: "Il calcolo stocastico estende derivate e integrali alle grandezze che cambiano in modo casuale.\nIl suo oggetto di base è il [[moto-browniano|moto browniano]].\nLe regole sono diverse da quelle usuali, perché le traiettorie sono troppo irregolari.\nKiyoshi Itô ne sviluppò gli strumenti fondamentali negli anni Quaranta.\nLe equazioni differenziali stocastiche descrivono sistemi soggetti a rumore.",
    perche_fa_pensare: "Si può calcolare con precisione dentro il caso. L'incertezza non impedisce di ragionare con rigore.",
    dove_si_usa: "In finanza, con il modello di Black-Scholes, in fisica, in biologia, nell'elaborazione dei segnali.",
    prerequisiti: [
      { id: 'moto-browniano', perche: "Il moto browniano è il mattone di base." },
      { id: 'equazione-differenziale', perche: "Estende le equazioni differenziali al caso casuale." },
      { id: 'integrale-di-lebesgue', perche: "Gli integrali stocastici si costruiscono con la teoria della misura." }
    ],
    parenti: []
  }
]);
