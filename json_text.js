// LUDOK UI-Elemente und Info-Texte
//
// Version 1.8.1, 9.2.2022
//
// Dr. Carl GmbH 2020

arrPopups = [
    {"id": 1,
    "parent": "Luftbelastung",
    "text_de": "<div class=\"i_header\">Aktuelle Luftbelastung</div>" +
               "<b>Wie ist die aktuelle Schadstoffbelastung der Luft in der Schweiz?</b>" +
               "<br><br>" +
               "Die Luftqualität der Schweiz wird seit Mitte der 1980er-Jahre stetig besser. Für viele Schadstoffe und an vielen Orten in der Schweiz werden die meisten Immissionsgrenzwerte " +
               "heute eingehalten. Die Belastungswerte von Schwefeldioxid (SO<sub>2</sub>) und Kohlenmonoxid (CO) sind in der Schweiz heutzutage so tief, dass bei diesen Belastungen keine schädlichen " +
               "Auswirkungen erwartet werden. Häufig und teilweise erheblich überschritten werden hingegen die Immissionsgrenzwerte für Ozon (grossräumig). Trotz der Verbesserungen in den " +
               "letzten Jahren werden die Immissionsgrenzwerte für Stickstoffdioxid (NO<sub>2</sub>) und Feinstaub (PM10/PM2.5) noch teilweise überschritten. Grund dafür sind die immer noch zu hohen " +
               "Mengen an ausgestossenen und freigesetzten Luftschadstoffen in der Schweiz und den Nachbarländern." +
               "<br><br>" +
               "Aktuelle Daten zur Luftqualität finden Sie auf der " +
               "<a href=\"https://cerclair.ch/aircheck\" target=\"_blank\">airCHeck App</a>" +
               ", in der MeteoSwiss App oder beim Bundesamt für Umwelt (BAFU) unter " +
               "<a href=\"https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/luftbelastung--aktuelle-daten.html\" target=\"_blank\">Luftbelastung: aktuelle Daten.</a>",
    "text_en": "<div class=\"i_header\">Current pollution</div>" +
                "<b>What is the current level of air pollution in Switzerland?</b>" +
                "<br><br>" +
                "Switzerland's air quality has been steadily improving since the mid-1980s. Most areas in Switzerland, for most pollutants, are currently in compliance with the air quality standards. " +
                "The levels of sulphur dioxide (SO<sub>2</sub>) and carbon monoxide (CO) pollution in Switzerland today are so low that harmful effects are not expected from these pollutants. However, " +
                "the standards for ozone are frequently, and sometimes considerably, exceeded (over large areas). Despite improvements in recent years, in some situations air quality standards " +
                "for nitrogen dioxide (NO<sub>2</sub>) and particulate matter (PM10/PM2.5) are still exceeded in areas exposed to traffic. This is due to the continued large quantities of these air pollutants " +
                "emitted and released in Switzerland and in neighboring countries." +
                "<br><br>" +
                "Current data on air quality can be found " +
                "on the <a href=\"https://cerclair.ch/aircheck\" target=\"_blank\">airCHeck App</a>" +
                ", in the MeteoSwiss app (see App stores on your mobile devices) or at the Federal Office for the Environment (FOEN) at air pollution " +
                "<a href=\"https://www.bafu.admin.ch/bafu/en/home/topics/air/state/data/air-pollution--real-time-data.html\" target=\"_blank\">Air pollution: real time data.</a>",
    "text_fr": "<div class=\"i_header\">Pollution actuel</div>" +
                "<b>Quel est le niveau actuel de la pollution de l'air en Suisse?</b>" +
                "<br><br>" +
                "La qualité de l'air en Suisse ne cesse de s'améliorer depuis le milieu des années 1980. Pour de nombreux polluants et en de nombreux endroits en Suisse, la plupart des valeurs limites " +
                "d'immission sont aujourd’hui respectées. Les niveaux de pollution au dioxyde de soufre (SO<sub>2</sub>) et au monoxyde de carbone (CO) sont aujourd'hui si faibles en Suisse que leurs effets nocifs " +
                "probables sont nuls. En revanche, les valeurs limites d'immission pour l'ozone sont fréquemment et parfois considérablement dépassées (en de maints endroits). En dépit des améliorations " +
                "constatées ces dernières années, les valeurs limites d'immission pour le dioxyde d'azote (NO<sub>2</sub>) et les poussières fines (PM10/PM2,5) sont encore dépassées dans certains cas. " +
                "Cela s'explique par les quantités encore excessives de polluants atmosphériques émis et rejetés en Suisse et dans les pays voisins. " +
                "<br><br>" +
                "Les données actuelles sur la qualité de l'air peuvent être consultées sur l'application " +
                "<a href=\"https://cerclair.ch/fr/aircheck\" target=\"_blank\">airCHeck App</a>" +
                ", sur l'application MeteoSwiss ou auprès de l'Office fédéral de l'environnement (OFEV) " +
                "<a href=\"https://www.bafu.admin.ch/bafu/fr/home/themes/air/etat/donnees/pollution-atmospherique--donnees-actuelles.html\" target=\"_blank\">Pollution atmosphérique: données actuelles.</a>",
    "text_it": "<div class=\"i_header\">Esposizione attuale</div>" +
                "<b>Qual è l'attuale livello di inquinamento atmosferico in Svizzera?</b>" +
                "<br><br>" +
                "La qualità dell'aria in Svizzera è in costante miglioramento dalla metà degli anni '80. Per molte sostanze inquinanti e in molti luoghi della Svizzera, la maggior parte dei valori " +
                "limite d’immissione sono ora rispettati. I livelli di diossido di zolfo (SO<sub>2</sub>) e di monossido di carbonio (CO) in Svizzera sono attualmente così bassi che non si prevedono " +
                "effetti nocivi da questi inquinanti. Al contrario, i valori limite d’immissione dell'ozono sono spesso e talvolta notevolmente superati (su grandi superfici). " +
                "Nonostante i miglioramenti degli ultimi anni, i valori limite d’immissione per il diossido di azoto (NO<sub>2</sub>) e le polveri sottili (PM10/PM2.5) sono ancora in parte superati. La ragione è da ricercarsi nei livelli ancora troppo elevati di inquinanti atmosferici emessi e rilasciati in Svizzera e nei paesi limitrofi. " +
                "<br><br>" +
                "I dati attuali sulla qualità dell'aria si trovano nell'app " +
                "<a href=\"https://cerclair.ch/it/aircheck\" target=\"_blank\">airCHeck</a>" +
                ", nell'app MeteoSwiss o presso l'Ufficio federale dell'ambiente (UFAM) al link " +
                "<a href=\"https://www.bafu.admin.ch/bafu/it/home/temi/aria/stato/dati/inquinamento-atmosferico--dati-attuali.html\" target=\"_blank\">Inquinamento dell'aria: dati attuali.</a>",
    },
      
    {"id": 2,
    "parent": "Grenzwerte",
    "text_de": "<div class=\"i_header\">Wirkschwellen und Grenzwerte</div>" +
               "<b>Welche gesetzlichen Grundlagen gibt es, bzw. wer bestimmt die Richtlinien?</b>" +
               "<br><br>" +
               "Die Weltgesundheitsorganisation (World Health Organisation, WHO) definiert in ihren " +
               "<a href=\"https://apps.who.int/iris/bitstream/handle/10665/346506/9789289056069-ger.pdf?sequence=1&isAllowed=y\" target=\"_blank\">Luftqualitätsrichtlinien</a> " +
               "Werte, unterhalb welcher keine oder nur geringe Auswirkungen " +
               "auf die Gesundheit erwartet werden. Diese Werte werden auf Basis der vorhandenen wissenschaftlichen Studien definiert und sollen den nationalen Behörden als Richtlinie " +
               "für die Festlegung von Grenzwerten dienen. Für die Auswirkungen der langfristigen Luftbelastung geht die Wissenschaft heute davon aus, dass keine Wirkschwellen bestehen. " +
               "Als «Wirkschwelle» bezeichnet man diejenige Konzentration eines Schadstoffes, ab der eine gesundheitsschädigende Auswirkung zu erwarten ist." +
               "<br><br>" +
               "In der Schweiz hat der Bundesrat in der " +
               "<a href=\"https://www.admin.ch/opc/de/classified-compilation/19850321/index.html\" target=\"_blank\">Luftreinhalte-Verordnung (LRV)</a> " +
               "für verschiedene gesundheitsschädigende Substanzen Grenzwerte (Immissionsgrenzwerte, IGW) definiert. " +
               "Die IGW wurden nach den Kriterien des Umweltschutzgesetzes so festgelegt, dass bei ihrer Einhaltung Menschen, Tiere, Pflanzen, Böden usw. im Allgemeinen vor schädlichen " +
               "und lästigen Auswirkungen der Luftschadstoffe geschützt sind. Die schweizerischen Grenzwerte stehen im Einklang mit den Werten, die von der WHO empfohlen werden." +
               "<br><br>" +
               "Die Belastungswerte von Schwefeldioxid (SO<sub>2</sub>) und Kohlenmonoxid (CO) liegen in der Schweiz deutlich unter den Immissions&shy;grenzwerten, sodass bei diesen Belastungen " +
               "keine schädlichen Wirkungen erwartet werden. Dagegen werden beim Stickstoffdioxid (NO<sub>2</sub>), beim bodennahen Ozon (O<sub>3</sub>) und beim Feinstaub die festgelegten " +
               "Grenzwerte teilweise überschritten. Die in der Schweiz gemessenen Belastungen, kombiniert mit den kleinen Risiken bedeuten für eine Einzelperson im Vergleich zu Lebensstilfaktoren " +
               "wie Rauchen, Ernährung oder Bewegungsmangel eine geringe Gefahr." +
               "<br><br>" +
               "Weitere Informationen zur Bedeutung der in der Schweiz gültigen Grenzwerte finden Sie im Faktenblatt " +
               "<a href=\"https://www.bafu.admin.ch/dam/bafu/de/dokumente/luft/fachinfo-daten/Immissionsgrenzwerte-LRV.pdf.download.pdf/Faktenblatt_Immissionsgrenzwerten_LRV_2019_D.pdf\" target=\"_blank\">" +
               "«Immissionsgrenzwerte der Luftreinhalte-Verordnung (LRV)»</a> (Download 0.6MB) des Bundesamts für Umwelt.",
    "text_en": "<div class=\"i_header\">Limit values</div>" +
               "<b>What is the legal basis, or who determines the guidelines?</b>" +
               "<br><br>" +
               "In the " +
               "<a href=\"https://apps.who.int/iris/bitstream/handle/10665/345334/9789240034433-eng.pdf?sequence=1&isAllowed=y\" target=\"_blank\">air quality guidelines</a>, " +
               "the World Health Organization (WHO) defines values below which no or only minor effects on health are expected. These values are defined based on existing scientific evidence, " +
               "and are intended to serve as a guideline for the national authorities when setting air quality standards. For the effects of long-term air pollution, the current scientific evidence " +
               "assumes that effect thresholds do not exist for most pollutants. An \"effect threshold\" is defined as the concentration of a pollutant below which a harmful effect on health is not expected. " +
               "<br><br>" +
               "In Switzerland, the Federal Council has defined air quality standards (immission limit values) for various substances that are harmful to health in the " +
               "<a href=\"https://www.admin.ch/opc/en/classified-compilation/19850321/index.html\" target=\"_blank\">Ordinance on Air Pollution Control (OAPC)</a>. " +
               "These standards have been defined according to the criteria of the Environmental Protection Act, in general offering protection from the harmful and annoying effects of air pollutants " +
               "to humans, animals, plants, soil, etc. The Swiss limit values are in line with the values recommended by the WHO." +
               "<br><br>" +
               "Today, the levels of sulphur dioxide (SO<sub>2</sub>) and carbon monoxide (CO) pollution in Switzerland are so low that harmful health effects are not expected from these pollutants. " +
               "The exposures measured in Switzerland combined with the associated small risks, translate into a low risk for an individual compared to harmful lifestyle factors such as smoking, " +
               "malnutrition or lack of exercise." +
               "<br><br>" +
               "Further information on Swiss air quality standards can be found in the fact sheet «Immission limit values of the Ordinance on Air Pollution Control (OAPC)» (" +
               "<a href=\"https://www.bafu.admin.ch/dam/bafu/de/dokumente/luft/fachinfo-daten/Immissionsgrenzwerte-LRV.pdf.download.pdf/Faktenblatt_Immissionsgrenzwerten_LRV_2019_D.pdf\" target=\"_blank\">" +
               "DE</a> or  <a href=\"https://www.bafu.admin.ch/dam/bafu/fr/dokumente/luft/fachinfo-daten/Immissionsgrenzwerte-LRV.pdf.download.pdf/Faktenblatt_Immissionsgrenzwerten_LRV_2019_F.pdf\" target=\"_blank\">" +
               "FR</a> download, 0.6 MB) of the Federal Office for the Environment.",
    "text_fr": "<div class=\"i_header\">Valeur limite</div>" +
                "<b>Quelles sont les bases juridiques, autrement dit et qui définit les lignes directrices?</b>" +
                "<br><br>" +
                "L'Organisation mondiale de la santé (OMS) définit dans ses " +
                "<a href=\"https://apps.who.int/iris/bitstream/handle/10665/346555/9789240035423-fre.pdf?sequence=1&isAllowed=y\" target=\"_blank\">lignes directrices sur la qualité de l’air</a>, " +
                "des valeurs en dessous desquelles les effets sur la santé sont nuls ou mineurs. Ces valeurs sont définies sur la base d'études scientifiques existantes et sont destinées à servir " +
                "de ligne directrice aux autorités nationales pour la fixation de valeurs limites. En ce qui concerne les effets de la pollution atmosphérique à long terme, les scientifiques " +
                "pensent aujourd'hui qu'il n'existe pas de seuils d'effet. Il faut entendre par «seuil d'effet» la concentration d'un polluant au-dessus de laquelle on peut s'attendre à un effet " +
                "nocif sur la santé." +
                "<br><br>" +
                "En Suisse, le Conseil fédéral a défini dans  " +
                "<a href=\"https://www.admin.ch/opc/fr/classified-compilation/19850321/index.html\" target=\"_blank\">l'ordonnance sur la protection de l'air (OPair)</a> " +
                "des valeurs limites d'immission (VLI) pour différentes substances nocives pour la santé. Les VLI ont été définies selon les critères de la loi sur la protection de l'environnement " +
                "de telle sorte que, si elles sont respectées, les humains, les animaux, les plantes, le sol, etc. sont en général protégés contre les pollutions atmosphériques nuisibles ou incommodantes. " +
                "<br><br>" +
                "Les niveaux de pollution au dioxyde de soufre (SO<sub>2</sub>) et au monoxyde de carbone (CO) en Suisse sont bien en dessous des valeurs limites d'immission, si bien qu'aucun effet nocif ne devrait " +
                "en résulter. En revanche, le dioxyde d'azote (NO<sub>2</sub>), l'ozone troposphérique (O3) et les poussières fines dépassent en partie les valeurs limites fixées. Les niveaux d'exposition " +
                "mesurés en Suisse, combinés aux faibles risques, signifient un risque faible pour un individu par rapport aux facteurs liés au mode de vie tels que le tabagisme, l'alimentation ou le manque d'exercice." +
                "<br><br>" +
                "Vous trouverez de plus amples informations sur la signification des valeurs limites en vigueur en Suisse dans la fiche d'information " +
                "<a href=\"https://www.bafu.admin.ch/dam/bafu/fr/dokumente/luft/fachinfo-daten/Immissionsgrenzwerte-LRV.pdf.download.pdf/Faktenblatt_Immissionsgrenzwerten_LRV_2019_F.pdf \" target=\"_blank\">" +
                "«Les valeurs limites d'immission de l'ordonnance sur la protection de l'air (OPair)» </a> (téléchargement 0.6 MB) de l'Office fédéral de l'environnement.",
    "text_it": "<div class=\"i_header\">Valori limite</div>" +
                "<b>Qual è la base giuridica o chi determina le linee guida?</b>" +
                "<br><br>" +
                "L'Organizzazione Mondiale della Sanità (OMS) definisce nelle sue " +
                "<a href=\"https://apps.who.int/iris/bitstream/handle/10665/345334/9789240034433-eng.pdf?sequence=1&isAllowed=y\" target=\"_blank\">Linee guida sulla qualità dell'aria</a>, " +
                "dei valori al di sotto dei quali non si prevedono effetti sulla salute o si prevedono solo effetti minori. Questi valori sono definiti sulla base di studi scientifici esistenti e fungono " +
                "da linea guida per le autorità nazionali nella fissazione dei valori limite. Per gli effetti dell'inquinamento atmosferico a lungo termine, la scienza oggi presuppone che non ci siano soglie " +
                "d’effetto. La \"soglia d’effetto\" è la concentrazione di un inquinante al di sopra della quale ci si aspetta un effetto nocivo sulla salute." +
                "<br><br>" +
                "In Svizzera, il Consiglio federale ha stabilito dei valori limite (Valori limite d'immissione, VLI) per diverse sostanze nocive per la salute nell’" +
                "<a href=\"https://www.admin.ch/opc/it/classified-compilation/19850321/index.html\" target=\"_blank\">Ordinanza contro l’inquinamento atmosferico (OIAt)</a> " +
                "I VLI sono stati stabiliti secondo i criteri della Legge sulla protezione dell'ambiente in modo tale che, se rispettati, le persone, gli animali, le piante, il suolo, ecc. sono generalmente " +
                "protetti dagli effetti nocivi e fastidiosi degli inquinanti atmosferici. I valori limite svizzeri sono in linea con i valori raccomandati dall'OMS." +
                "<br><br>" +
                "I livelli di diossido di zolfo (SO<sub>2</sub>) e di monossido di carbonio (CO) in Svizzera sono ben al di sotto dei valori limite d’immissione, per cui non si prevedono effetti nocivi derivanti " +
                "da questi inquinanti. Al contrario, i limiti fissati per il diossido di azoto (NO<sub>2</sub>), l'ozono a livello del suolo (O<sub>3</sub>) e le polveri sottili vengono talvolta superati. " +
                "Le esposizioni misurate in Svizzera, rappresentano un livello di rischio basso per un individuo rispetto a fattori legati allo stile di vita quali il fumo, un'alimentazione non equilibrata " +
                "o la mancanza di esercizio fisico." +
                "<br><br>" +
                "Ulteriori informazioni sull'importanza dei valori limite applicabili in Svizzera si trovano nel foglio informativo " +
                "<a href=\"https://www.bafu.admin.ch/dam/bafu/de/dokumente/luft/fachinfo-daten/Immissionsgrenzwerte-LRV.pdf.download.pdf/Faktenblatt_Immissionsgrenzwerten_LRV_2019_D.pdf\" target=\"_blank\">" +
                "Valori limite d’immissione previsti dall’ordinanza contro l’inquinamento atmosferico (OIAt)</a> (Tedesco Download 0.6 MB) dell'Ufficio federale dell'ambiente."
    },
    {"id": 3,
    "parent": "Quellen",
    "text_de": "<div class=\"i_header\">Quellen der Luftbelastung</div>" +
               "<b>Welche Quellen für die Schadstoffbelastung der Luft gibt es?</b>" +
               "<br><br>" +
               "Die Quellen der Luftbelastung sind je nach Schadstoff verschieden. Zu den Hauptverursachern zählen Verkehr, Feuerungen zu Heizzwecken, Industrie, Gewerbe und Landwirtschaft." +
               "<br><br>" +
               "Weitere Informationen finden Sie beim Bundesamt für Umwelt (BAFU) unter " +
               "<a href=\"https://www.bafu.admin.ch/bafu/de/home/themen/luft/inkuerze.html#1537492315\" target=\"_blank\">Luft: Das Wichtigste in Kürze.</a>",
    "text_en": "<div class=\"i_header\">Sources of pollutants</div>" +
                "<b>What are the sources of air pollution?</b>" +
                "<br><br>" +
                "The sources of air pollution vary depending on the pollutant. The main sources include traffic, heating systems, industry, commerce and agriculture." +
                "<br><br>" +
                "Further information can be found at the Federal Office for the Environment (FOEN) website under " +
                "<a href=\"https://www.bafu.admin.ch/bafu/en/home/topics/air/in-brief.html\" target=\"_blank\">Air: In brief.</a>",
    "text_fr": "<div class=\"i_header\">Source polluants</div>" +
                "<b>Quelles sont les sources de pollution de l'air?</b>" +
                "<br><br>" +
                "Les sources de pollution de l'air sont différentes selon le polluant. Les principales sources sont la trafic motorisé, les systèmes de chauffage, l'industrie, le commerce et l'agriculture. " +
                "<br><br>" +
                "Vous trouverez plus d’informations sur ce thème auprès de l'Office fédéral de l'environnement (OFEV) à l'adresse suivante: " +
                "<a href=\"https://www.bafu.admin.ch/bafu/fr/home/themes/air/en-bref.html\" target=\"_blank\">Air: En bref.</a>",
    "text_it": "<div class=\"i_header\">Fonti inquinanti</div>" +
                "<b>Quali sono le fonti di inquinamento dell’aria?</b>" +
                "<br><br>" +
                "Le fonti di inquinamento dell'aria sono diverse a seconda dell'inquinante. Le cause principali sono il traffico, i sistemi di riscaldamento, l'industria, il commercio e l'agricoltura. " +
                "<br><br>" +
                "Ulteriori informazioni possono essere richieste all'Ufficio federale dell'ambiente (UFAM) al link " +
                "<a href=\"https://www.bafu.admin.ch/bafu/it/home/temi/aria/in-breve.html\" target=\"_blank\">Aria: i fatti più importanti in breve.</a>"
    } ,
    {"id": 4,
    "parent": "Hintergrund",
    "text_de": "<div class=\"i_header\">Hintergrund</div>" +
               "<b>Wie werden Zusammenhänge zwischen Schadstoffen und gesundheitlichen Auswirkungen untersucht und beurteilt?</b>" +
               "<br><br>" +
               "Pro Tag atmet ein erwachsener Mensch 12'000 – 15’000 Liter Luft ein und aus. Durch Nase, Rachen und Luftröhre gelangen dabei neben dem lebenswichtigen Sauerstoff " +
               "auch Schadstoffe in unsere Lungen und gefährden damit nachweislich die Gesundheit." +
               "<br><br>" +
               "Das hier dargestellte Wissen basiert auf einer Vielzahl von Studien, die die Auswirkungen von Luftschadstoffen auf die menschliche Gesundheit in der Bevölkerung " +
               "(Epidemiologie) untersucht haben. Für die Beurteilung der ursächlichen Auswirkung der Luftschadstoffe werden zusätzlich experimentelle Studien an Mensch, Tier und Zellen herangezogen." +
               "<br><br>" +
               "Es werden Auswirkungen unterschieden, die durch kurzfristig (über Stunden oder Tage) und langfristig (über Monate und Jahre) erhöhte Schadstoffbelastung verursacht werden. " + 
               "Wobei die Auswirkungen der langfristigen Belastung schwerwiegender sind." +
               "<br><br>" +
               "Die Grafik beschränkt sich auf die ursächlichen und wahrscheinlich ursächlichen Auswirkungen gemäss Einschätzungen der US-amerikanischen Umweltbehörde (EPA). " +
               "Die EPA beurteilt den Zusammenhang zwischen einem Schadstoff und den möglichen gesundheitlichen Auswirkungen mit Hilfe einer fünfstufigen Skala. " +
               "Die Stufen «ursächlich» und «wahrscheinlich ursächlich» sind die beiden höchsten Stufen auf dieser Kausalitätsskala." +
               "<br><br>" +
               "Weitere Informationen zur Kausalitätsbeurteilung der Integrated Science Assessments (Englisch): " + 
               "<a href=\"https://cfpub.epa.gov/ncea/isa/recordisplay.cfm?deid=310244\" target=\"_blank\">«Preamble to the Integrated Science Assessments (ISA)»</a>." +
               "<br><br><br>" +
               "<b>Wie relevant sind die beschriebenen gesundheitlichen Auswirkungen für Sie?</b>" +
               "<br><br>" +
               "Eine Gefahr kann potentiell einen Schaden verursachen. Ein Risiko ist hingegen die Wahrscheinlichkeit, mit der eine Gefahr tatsächlich einen Schaden anrichten kann." +
               "<br><br>" +
               "Die der Luftverschmutzung angelasteten, gesundheitlichen Auswirkungen bzw. Risiken bewegen sich pro 10 Mikrogramm pro Kubikmeter Schadstoffkonzentration in der Regel im " +
               "ein- bis unteren zweistelligen Prozentbereich." +
               "<br><br>" +
               "Zum Beispiel ist eine langfristig erhöhte Belastung mit Feinstaub mit einer grösseren Sterblichkeit verbunden, diese ist 6% höher pro Zunahme der Belastung um 10 Mikrogramm " +
               "pro Kubikmeter Feinstaub (PM2.5). Die Gefahr für eine Einzelperson ist gegenüber anderen Lebensstilfaktoren wie zum Beispiel dem Rauchen geringer. " +
               "Auf Ebene der Bevölkerung – also aus Public Health-Sicht – ist diese Zunahme der Sterblichkeit aber bedeutend, da, im Gegensatz zum Rauchen, die gesamte Bevölkerung " +
               "von der Schadstoffbelastung betroffen ist. Umgerechnet auf die Schweizer Bevölkerung bedeutet diese kleine Risikozunahme, dass gemäss " +
               "<a href=\"https://www.eea.europa.eu\" target=\"_blank\">European Environment Agency</a> (Englisch) " +
               "in der Schweiz 3'700 Personen vorzeitig an den Folgen der erhöhten Feinstaubbelastung (PM2.5) in Jahr 2016 starben." +
               "<br><br>" +
               "Hinzu kommt, dass die persönliche Krankengeschichte und die individuelle Empfindlichkeit neben den gemessenen Schadstoffen in der Umgebung eine grosse Rolle spielen. " +
               "Je anfälliger (vulnerabler) eine Person ist, desto höher das Risiko, von den Auswirkungen betroffen zu sein. Wer bereits eine Lungenentzündung hat oder wessen Lunge noch " +
               "im Wachstum ist, ist anfälliger für die Auswirkungen schlechter Luft. Nicht alle Bevölkerungsgruppen reagieren also gleich auf Luftschadstoffe: Kinder, Kranke und Alte haben, " +
               "im Durchschnitt betrachtet, ein höheres Risiko.",
    "text_en": "<div class=\"i_header\">Background</div>" +
                "<b>How are associations between health effects and pollutants investigated and assessed?</b>" +
                "<br><br>" +
                "Every day, an adult breathes 12’000 – 15’000 litres of air. In addition to vital oxygen, pollutants also enter our lungs and airways through the nose and throat. " +
                "This has been shown to be harmful for health." +
                "<br><br>" +
                "The knowledge presented here is based on a large number of studies that have examined the effects of air pollutants on human health at the population level (epidemiology). " +
                "Experimental studies in humans, animals and cells are also used to assess the causal effects of air pollutants." +
                "<br><br>" +
                "A distinction is made between effects linked to short-term (over hours to days) and long-term (over months to years) exposure to air pollution. " +
                "Notably, effects of long-term elevated exposures to ambient air are more serious." +
                "<br><br>" +
                "The figure is limited to effects determined to be causal and likely to be causal as assessed by the US Environmental Protection Agency (EPA). The EPA assesses the relationship " +
                "between pollutants and potential health effects using a five-point scale. The levels \"causal\" and \"likely to be causal\" are the two highest levels on this causality scale." +
                "<br><br>" +
                "Further information on the causality assessment of the Integrated Science Assessments: " + 
                "<a href=\"https://cfpub.epa.gov/ncea/isa/recordisplay.cfm?deid=310244\" target=\"_blank\">«Preamble to the Integrated Science Assessments (ISA)»</a>." +
                "<br><br><br>" +
                "<b>How relevant are the described health effects for you?</b>" +
                "<br><br>" +
                "A hazard can potentially cause damage. A risk, on the other hand, is the probability with which a hazard can actually cause damage. It is the result of the hazard combined with the actual exposure." +
                "<br><br>" +
                "The risks associated with exposure to air pollution often range in the lower one to two-digit percentages (0.2-15%) per exposure difference of 10 micrograms per cubic meter pollutant concentration." +
                "<br><br>" +
                "For example, exposure to particulate matter is associated with higher mortality, i.e. 6% increase in risk per 10 microgram per cubic meter particulate matter (PM2.5) increase in long-term exposure. " +
                "The risk of air pollutants for individuals is lower compared to lifestyle factors such as smoking. However, at the population level - i.e. from a public health perspective - this small increase " +
                "in mortality is significant because, unlike smoking, the entire population is affected by air pollutants. Quantified for the Swiss population, and according to the " +
                "<a href=\"https://www.eea.europa.eu\" target=\"_blank\">European Environment Agency</a> " +
                "this small increase in risk means that 3’700 people in Switzerland died prematurely in 2016 as a result of exposure to particulate matter (PM2.5)." +
                "<br><br>" +
                "In addition, the personal medical history and individual sensitivity also play a major role. More susceptible (vulnerable) individuals typically have a higher risk of adverse effects. " +
                "People who already have pneumonia or whose lungs are still growing, for example, are more susceptible to the effects of polluted air. This means that not all population groups react " +
                "in the same way to air pollutants: children, sick people and elderly have, on average, a higher risk.",
    "text_fr": "<div class=\"i_header\">Scénario</div>" +
                "<b>Comment les relations entre les polluants et les effets sur la santé sont-elles étudiées et évaluées?</b>" +
                "<br><br>" +
                "Chaque jour, une personne adulte inspire et expire 12’000 à 15’000 litres d'air. C’est ainsi que, en plus de l'oxygène nécessaire à la vie, des polluants présentant un risque avéré " +
                "pour la santé pénètrent dans nos poumons par le nez, la gorge et la trachée." +
                "<br><br>" +
                "Les connaissances présentées ici se fondent sur un grand nombre d'études qui ont examiné les effets des polluants atmosphériques sur la santé humaine dans la population (épidémiologie). " +
                "Pour évaluer les effets causals des polluants atmosphériques, des études expérimentales menées sur des humains, des animaux et des cellules sont par ailleurs utilisées." +
                "<br><br>" +
                "Nous distinguons entre les effets causés par une pollution accrue à court terme (sur des heures ou des jours) et à long terme (sur des mois ou des années). " +
                "Les effets d'une pollution à long terme sont plus graves." +
                "<br><br>" +
                "Le graphique se limite aux effets dont la cause ou la cause probable est connue selon les estimations de l'Agence américaine de protection de l'environnement (EPA). " +
                "L'EPA évalue la relation entre un polluant et les effets potentiels sur la santé en utilisant une échelle comprenant cinq niveaux. Les niveaux «cause» et «cause probable» sont " +
                "les deux niveaux les plus élevés de cette échelle de causalité." +
                "<br><br>" +
                "L’on trouvera plus d'informations sur l'évaluation de la causalité des Integrated Science Assessments ici: " + 
                "<a href=\"https://cfpub.epa.gov/ncea/isa/recordisplay.cfm?deid=310244\" target=\"_blank\">«Preamble to the Integrated Science Assessments (ISA)» (anglais)</a>." +
                "<br><br><br>" +
                "<b>Dans quelle mesure les effets sur la santé décrits vous concernent-ils?</b>" +
                "<br><br>" +
                "Un danger peut potentiellement causer un dommage. Un risque, en revanche, est la probabilité qu’un danger puisse effectivement causer un dommage." +
                "<br><br>" +
                "Les effets ou les risques pour la santé attribués à la pollution de l'air sont généralement de l'ordre de un à deux chiffres par 10 microgrammes par mètre cube de concentration de polluant." +
                "<br><br>" +
                "Par exemple, l'exposition accrue à long terme aux poussières fines est associée à une mortalité plus élevée, celle-ci étant supérieure de 6 % pour 10 microgrammes par mètre cube de particules " +
                "(PM2,5). Le danger pour une personne donnée est moindre par rapport à d'autres facteurs liés au mode de vie, tels que le tabagisme. Cependant, au niveau de la population - c'est-à-dire d’un " +
                "point de vue de santé publique - cette augmentation de la mortalité est significative car, à la différence du tabagisme, toute la population est affectée par l’exposition à ce polluant. " +
                "Rapportée à la population suisse, cette faible augmentation du risque signifie que, selon " +
                "<a href=\"https://www.eea.europa.eu\" target=\"_blank\">European Environment Agency (anglais)</a> " +
                "3 700 personnes sont mortes prématurément en Suisse en 2016 du fait de l'augmentation de l’exposition aux poussières fines (PM2,5)." +
                "<br><br>" +
                "A cela s’ajoute que les antécédents médicaux personnels et la sensibilité individuelle jouent un rôle important en plus des polluants mesurés dans l'environnement. " +
                "Plus une personne est sensible (vulnérable), plus le risque qu’elle soit concernée par les effets est important. Les personnes déjà atteintes d’une pneumonie ou dont les poumons " +
                "sont encore en développement sont plus sensibles aux effets d’un air de mauvaise qualité. Cela signifie que tous les groupes de population ne réagissent pas de la même manière aux " +
                "polluants atmosphériques: les enfants, les malades et les personnes âgées sont, en moyenne, plus vulnérables.",
    "text_it": "<div class=\"i_header\">Scenario</div>" +
                "<b>Come vengono studiati e valutati i rapporti tra sostanze inquinanti ed effetti sulla salute?</b>" +
                "<br><br>" +
                "Ogni giorno, una persona adulta inspira ed espira 12’000 - 15’000 litri d'aria. Attraverso il naso, la gola e la trachea, oltre all'ossigeno vitale, entrano nei nostri polmoni anche " +
                "le sostanze inquinanti che, come è stato dimostrato, mettono in pericolo la nostra salute." +
                "<br><br>" +
                "Le conoscenze qui presentate si basano su un gran numero di studi che hanno esaminato gli effetti degli inquinanti atmosferici sulla salute umana nella popolazione (epidemiologia). " +
                "Per la valutazione degli effetti causali degli inquinanti atmosferici vengono utilizzati anche studi sperimentali su esseri umani, animali e cellule." +
                "<br><br>" +
                "Si distingue tra gli effetti causati dall'aumento dell'inquinamento a breve termine (in ore o giorni) e a lungo termine (in mesi e anni). Gli effetti dell'esposizione a lungo termine sono più gravi." +
                "<br><br>" +
                "La grafica si limita agli effetti causali e probabilmente causali, come stimato dall'Agenzia statunitense per la protezione dell'ambiente (EPA). L'EPA valuta la relazione tra un inquinante e i " +
                "potenziali effetti sulla salute utilizzando una scala a cinque livelli. I livelli \"causale\" e \"probabilmente causale\" sono i due livelli più alti di questa scala di causalità." +
                "<br><br>" +
                "Ulteriori informazioni sulla valutazione della causalità degli Integrated Science Assessments (inglese): " + 
                "<a href=\"https://cfpub.epa.gov/ncea/isa/recordisplay.cfm?deid=310244\" target=\"_blank\">«Preamble to the Integrated Science Assessments (ISA)»</a>." +
                "<br><br><br>" +
                "<b>Quanto sono rilevanti per voi gli effetti sulla salute descritti?</b>" +
                "<br><br>" +
                "Un pericolo può potenzialmente causare danni. Un rischio, invece, è la probabilità che un pericolo possa effettivamente causare danni." +
                "<br><br>" +
                "Gli effetti o i rischi per la salute attribuiti all'inquinamento dell'aria si situano solitamente nell’ordine di una singola cifra percentuale, o poco superiore, ogni 10 microgrammi per metro " +
                "cubo di concentrazione di inquinanti." +
                "<br><br>" +
                "Ad esempio, l'aumento dell'esposizione a lungo termine alle polveri sottili è associato ad una maggiore mortalità, che è del 6% in più ogni 10 microgrammi per metro cubo di polveri sottili (PM2.5). " +
                "Nonostante il rischio per il singolo individuo è inferiore rispetto ad altri fattori legati allo stile di vita, come per esempio il fumo, a livello di popolazione - cioè dal punto di vista della " +
                "salute pubblica - questo aumento della mortalità è significativo poiché, a differenza del fumo, l'intera popolazione è colpita dall'inquinamento. Questo piccolo aumento del rischio, se applicato " +
                "alla popolazione svizzera, secondo la " +
                "<a href=\"https://www.eea.europa.eu\" target=\"_blank\">European Environment Agency (inglese)</a>, " +
                "è la causa di 3'700 persone morte prematuramente nel 2016 a causa dell'esposizione alle polveri sottili (PM2.5)." +
                "<br><br>" +
                "Inoltre, giocano un ruolo importante anche la storia clinica personale e la sensibilità individuale: più una persona è suscettibile (vulnerabile), maggiore è il rischio di essere colpita " +
                "dagli effetti dell’inquinamento atmosferico. Ade esempio, le persone che hanno già la polmonite o i cui polmoni sono ancora in crescita sono più sensibili agli effetti dell'aria malsana. " +
                "Non tutti i gruppi di popolazione reagiscono infatti agli inquinanti atmosferici allo stesso modo: i bambini, i malati e gli anziani hanno, in media, un rischio maggiore."
    } ,
    {"id": 5,
    "parent": "Beitrag",
    "text_de": "<div class=\"i_header\">Was kann ich für eine gesunde Luft und Umwelt tun?</div>" +
               "<b>Was können Sie persönlich zu einer guten Luftqualität beitragen?</b>" +
               "<br><br>" +
               "Die Luftqualität ist ein Teil der Umwelt. Wer gerne etwas gegen die Luftbelastung tun möchte, um der Gesundheit und der Umwelt Sorge zu tragen, findet Anregungen auf den " +
               "Internetseiten des Bundesamts für Umwelt (BAFU), Cercl’Air oder beim Kanton Bern:" +
               "<br><br>" +
               "BAFU Broschüre (S. 12-15) <a href=\"https://www.bafu.admin.ch/bafu/de/home/themen/luft/publikationen-studien/publikationen/luftverschmutzung-und-gesundheit.html\" target=\"_blank\">" +
               "«Luftverschmutzung und Gesundheit»</a><br>" +
               "Cercl’Air: <a href=\"https://feinstaub.ch/mein-beitrag\" target=\"_blank\">Feinstaub</a><br>" + 
               "Cercl’Air: <a href=\"https://ozon-info.ch/mein-beitrag\" target=\"_blank\">Ozon</a><br>" +
               "Kanton Bern: <a href=\"https://www.vol.be.ch/vol/de/index/umwelt/luftreinhaltung/tipps_zur_luftreinhaltung.html\" target=\"_blank\">Tipps zur Luftreinhaltung</a><br>",
    "text_en": "<div class=\"i_header\">My Contribution</div>" +
                "<b>How you can contribute to good air quality</b>" +
                "<br><br>" +
                "Air quality is part of a healthy environment. Anyone who would like to do something about air pollution to protect health and the environment will find suggestions on the webpages " +
                "of FOEN, Cercl'Air or the Canton of Berne." +
                "<br><br>" +
                "BAFU Broschure «Air Pollution and Health» (p. 12-15) (" + 
                "<a href=\"https://www.bafu.admin.ch/bafu/de/home/themen/luft/publikationen-studien/publikationen/luftverschmutzung-und-gesundheit.html\" target=\"_blank\">German</a>/" +
                "<a href=\"https://www.bafu.admin.ch/bafu/fr/home/themes/air/publications-etudes/publications/pollution-de-l-air-et-sante.html\" target=\"_blank\">French/</a>" +
                "<a href=\"https://www.bafu.admin.ch/bafu/it/home/temi/aria/pubblicazioni-studi/pubblicazioni/inquinamento-atmosferico-e-salute.html\" target=\"_blank\">Italian</a>)<br>" +
                "Cercl’Air: Fine particulate matter (" + 
                "<a href=\"https://feinstaub.ch/mein-beitrag\" target=\"_blank\">German</a>/" + 
                "<a href=\"https://feinstaub.ch/fr/mein-beitrag\" target=\"_blank\">French</a>/" + 
                "<a href=\"https://feinstaub.ch/it/mein-beitrag\" target=\"_blank\">Italian</a>)<br>" + 
                "Cercl’Air: Ozone (" + 
                "<a href=\"https://ozon-info.ch/mein-beitrag\" target=\"_blank\">German</a>/" +
                "<a href=\"https://ozon-info.ch/fr/mein-beitrag\" target=\"_blank\">French</a>/" +
                "<a href=\"https://ozon-info.ch/it/mein-beitrag\" target=\"_blank\">Italian</a>)<br>" +
                "Canton of Bern: Tips on air pollution control (" + 
                "<a href=\"https://www.vol.be.ch/vol/de/index/umwelt/luftreinhaltung/tipps_zur_luftreinhaltung.html\" target=\"_blank\">German</a>/" +
                "<a href=\"https://www.vol.be.ch/vol/fr/index/umwelt/luftreinhaltung/tipps_zur_luftreinhaltung.html\" target=\"_blank\">French</a>/" +
                "<a href=\"https://www4.ti.ch/dt/da/spaas/uacer/temi/aria/aria/aria/\" target=\"_blank\">Italian</a>)",

    "text_fr": "<div class=\"i_header\">Ma contribution</div>" +
                "<b>Comment pouvez-vous contribuer personnellement à une bonne qualité de l'air?</b>" +
                "<br><br>" +
                "La qualité de l'air fait partie de l'environnement. Toute personne souhaitant agir contre la pollution atmosphérique pour protéger la santé et l'environnement trouvera des suggestions " +
                "sur les sites de l'Office fédéral de l'environnement (OFEV), de Cercl'Air ou du canton de Berne." +
                "<br><br>" +
                "Brochure de l'OFEV (p. 12-15) <a href=\"https://www.bafu.admin.ch/bafu/fr/home/themes/air/publications-etudes/publications/pollution-de-l-air-et-sante.html\" target=\"_blank\">" +
                "«Pollution de l'air et santé»</a><br>" +
                "Cercl’Air: <a href=\"https://feinstaub.ch/fr/mein-beitrag\" target=\"_blank\">Poussières fines</a><br>" + 
                "Cercl’Air: <a href=\"https://ozon-info.ch/fr/mein-beitrag\" target=\"_blank\">Ozone</a><br>" +
                "Canton de Berne: <a href=\"https://www.vol.be.ch/vol/fr/index/umwelt/luftreinhaltung/tipps_zur_luftreinhaltung.html\" target=\"_blank\">Astuces pour améliorer la qualité de l’air</a><br>",
    "text_it": "<div class=\"i_header\">Cosa posso fare</div>" +
                "<b>Come potete contribuire personalmente a una buona qualità dell'aria?</b>" +
                "<br><br>" +
                "La qualità dell'aria fa parte dell'ambiente. Chi desidera fare qualcosa per proteggere la salute e l'ambiente, può trovare suggerimenti sui siti web dell'Ufficio federale dell'ambiente " +
                "(UFAM), di Cercl'Air o del Cantone di Ticino." +
                "<br><br>" +
                "Opuscolo UFAM (p. 12-15) " +
                "<a href=\"https://www.bafu.admin.ch/bafu/it/home/temi/aria/pubblicazioni-studi/pubblicazioni/inquinamento-atmosferico-e-salute.html\" target=\"_blank\">" +
                "«Inquinamento atmosferico e salute»</a><br>" +
                "Cercl’Air: <a href=\"https://feinstaub.ch/it/mein-beitrag\" target=\"_blank\">Polveri sottili</a><br>" + 
                "Cercl’Air: <a href=\"https://ozon-info.ch/it/mein-beitrag\" target=\"_blank\">Ozono</a><br>" +
                "Cantone Ticino: <a href=\"https://www4.ti.ch/dt/da/spaas/uacer/temi/aria/aria/aria/\" target=\"_blank\">Consigli per il controllo dell'inquinamento atmosferico</a><br>"
    } ,
    {"id": 6,
    "parent": "Referenzen",
    "text_de": "<div class=\"i_header\">Referenzen</div>" +
               "Als Datengrundlage für die Infografik dienten die aktuellen integrierten Wissenschaftsanalysen der US-amerikanischen Umweltbehörde zu den Schadstoffen " +
               "Feinstaub PM10/PM2.5, Stickstoffdioxid NO<sub>2</sub>, Ozon O<sub>3</sub>, Schwefeldioxid SO<sub>2</sub> und Kohlenmonoxid CO " + 
               "<a href=\"https://www.epa.gov/isa\" target=\"_blank\">(www.epa.gov/isa)</a>." +
               "<br><br>" +
               "<ol>" +
               "<li>U.S. EPA. Integrated Science Assessment (ISA) for Particulate (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-19/188, 2019.</li>" +
               "<li>U.S. EPA. Integrated Science Assessment (ISA) for Oxides of Nitrogen – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-15/068, 2016.</li>" +
               "<li>U.S. EPA. Integrated Science Assessment (ISA) for Ozone and Related Photochemical Oxidants (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-20/012, 2020.</li>" +
               "<li>U.S. EPA. Integrated Science Assessment (ISA) for Sulfur Oxides – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-17/451, 2017.</li>" +
               "<li>U.S. EPA. Integrated Science Assessment (ISA) for Carbon Monoxide (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-09/019F, 2010.</li>" +
               "<li><a href=\"https://www.who.int/airpollution/publications/aqg2005/en/\" target=\"_blank\">WHO: Air Quality Guidelines – Global Update 2005</a></li>" +
               "</ol>",
    "text_en": "<div class=\"i_header\">References</div>" +
                "The data displayed in this interactive figure are based on the current Integrated Science Assessments by the US Environmental Protection Agency " + 
                "<a href=\"https://www.epa.gov/isa\" target=\"_blank\">(www.epa.gov/isa)</a>." +
                "<br><br>" +
                "<ol>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Particulate (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-19/188, 2019.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Oxides of Nitrogen – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-15/068, 2016.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Ozone and Related Photochemical Oxidants (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-20/012, 2020.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Sulfur Oxides – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-17/451, 2017.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Carbon Monoxide (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-09/019F, 2010.</li>" +
                "<li><a href=\"https://www.who.int/airpollution/publications/aqg2005/en/\" target=\"_blank\">WHO: Air Quality Guidelines – Global Update 2005</a></li>" +
                "</ol>",
    "text_fr": "<div class=\"i_header\">Références</div>" +
                "L’infographie se fonde sur les analyses scientifiques intégrées actuelles de l'Agence américaine de protection de l'environnement concernant les polluants: " +
                "poussières fines PM10/PM2,5, dioxyde d'azote NO<sub>2</sub>, ozone O<sub>3</sub>, dioxyde de soufre SO<sub>2</sub> et monoxyde de carbone CO " + 
                "<a href=\"https://www.epa.gov/isa\" target=\"_blank\">(www.epa.gov/isa)</a>." +
                "<br><br>" +
                "<ol>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Particulate (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-19/188, 2019.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Oxides of Nitrogen – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-15/068, 2016.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Ozone and Related Photochemical Oxidants (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-20/012, 2020.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Sulfur Oxides – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-17/451, 2017.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Carbon Monoxide (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-09/019F, 2010.</li>" +
                "<li><a href=\"https://www.who.int/airpollution/publications/aqg2005/en/\" target=\"_blank\">WHO: Air Quality Guidelines – Global Update 2005</a></li>" +
                "</ol>",
    "text_it": "<div class=\"i_header\">Riferimenti</div>" +
                "La base di dati per l'infografica è costituita dalle attuali analisi scientifiche integrate dell'Agenzia statunitense per la protezione dell'ambiente sulle sostanze inquinanti: " +
                "polveri sottili PM10/PM2.5, diossido di azoto NO<sub>2</sub>, ozono O<sub>3</sub>, biossido di zolfo SO<sub>2</sub> e monossido di carbonio CO " + 
                "<a href=\"https://www.epa.gov/isa\" target=\"_blank\">(www.epa.gov/isa)</a>." +
                "<br><br>" +
                "<ol>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Particulate (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-19/188, 2019.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Oxides of Nitrogen – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-15/068, 2016.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Ozone and Related Photochemical Oxidants (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-20/012, 2020.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Sulfur Oxides – Health Criteria (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-17/451, 2017.</li>" +
                "<li>U.S. EPA. Integrated Science Assessment (ISA) for Carbon Monoxide (Final Report). U.S. Environmental Protection Agency, Washington, DC, EPA/600/R-09/019F, 2010.</li>" +
                "<li><a href=\"https://www.who.int/airpollution/publications/aqg2005/en/\" target=\"_blank\">WHO: Air Quality Guidelines – Global Update 2005</a></li>" +
                "</ol>"
    } ,
    {"id": 7,
    "parent": "Impressum",
    "text_de": "<div class=\"i_header\">Impressum</div>" +
               "Diese interaktive Grafik ist eine Plattform mit Informationen zu den Gesundheitsfolgen von Luftverschmutzung. Es handelt sich um ein Projekt der vom Bundesamt für Umwelt (BAFU) " +
               "finanzierten Dokumentationsstelle Luft und Gesundheit (LUDOK) am Schweizerischen Tropen- und Public Health-Institut (Swiss TPH), welches zusammen mit Organisationen erarbeitet " +
               "wurde, namentlich:" +
               "<ul>" + 
               "<li>Bundesamt für Umwelt (Trägerorganisation)</li>" +
               "<li>Kantonale Behörden für Luftreinhaltung (Trägerorganisation)</li>" +
               "<li>Krebsliga Schweiz (Trägerorganisation)</li>" +
               "<li>LUNGE ZÜRICH (Trägerorganisation)</li>" +
               "<li>LerNetz</li>" +
               "</ul>" +
               "Konzept und Umsetzung: LUDOK<br>" +
               "Fachautoren: Meltem Kutlar Joss, Lara Stucki, Ron Kappeler und Zoe Roth<br>" +
               "Grafiker und Softwareentwickler: <a href=\"https://www.dr-carl.com\" target=\"_blank\">Dr. Carl GmbH</a>" +
               "<br><br>" +
               "Der Inhalt entspricht dem Wissensstand von 2020." +
               "<br><br>" +
               "Der Quellcode für die interaktive Grafik ist unter " +
               "<a href=\"https://github.com/swisstph/ap-health-effects\" target=\"_blank\">github.com/swisstph/ap-health-effects</a> " +
               "verfügbar. Die interaktive Grafik unterliegt der " +
               "<a href=\"https://www.gnu.org/licenses/agpl-3.0\" target=\"_blank\">GNU Affero General Public License (AGPL)</a> " +
               "(Englisch). Verwendung und Anpassungen der interaktiven Grafik ist erlaubt mit Angabe des Swiss TPH als Urheber und unter Einhaltung der AGPL Lizenzbedingungen. " +
               "Beiträge zu den Inhalten der Grafik nehmen wir unter " +
               "<A HREF=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;\">" +
               "&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;</A> " +
               "gerne entgegen.",
    "text_en": "<div class=\"i_header\">Imprint</div>" +
                "This interactive figure on health effects of ambient air pollution. It is a project of the Swiss Literature Database and Services on Health Effects of Ambient Air Pollution LUDOK " +
                "at the Swiss Tropical and Public Health Institute (Swiss TPH). It was jointly developed with the following partner organizations: " +
                "<ul>" + 
                "<li>Bundesamt für Umwelt (Trägerorganisation)</li>" +
                "<li>Kantonale Behörden für Luftreinhaltung (Trägerorganisation)</li>" +
                "<li>Krebsliga Schweiz (Trägerorganisation)</li>" +
                "<li>LUNGE ZÜRICH (Trägerorganisation)</li>" +
                "<li>LerNetz</li>" +
                "</ul>" +
                "Concept and implementation: LUDOK<br>" +
                "Authors: Meltem Kutlar Joss, Lara Stucki, Ron Kappeler und Zoe Roth<br>" +
                "Visual design and programming: <a href=\"https://www.dr-carl.com\" target=\"_blank\">Dr. Carl GmbH</a>" +
                "<br><br>" +
                "The content corresponds to the state of knowledge of 2020." +
                "<br><br>" +
                "The source code for the interactive figure is available at " +
                "<a href=\"https://github.com/swisstph/ap-health-effects\" target=\"_blank\">github.com/swisstph/ap-health-effects</a>. " +
                "The interactive figure is licensed under the " +
                "<a href=\"https://www.gnu.org/licenses/agpl-3.0\" target=\"_blank\">GNU Affero General Public License (AGPL)</a>. " +
                "The use and adaptation of the interactive figure is allowed with reference to Swiss TPH as the author and under compliance to the AGPL license conditions. Feedback and input are welcome at " +
                "<A HREF=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;\">" +
                "&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;</A>",
    "text_fr": "<div class=\"i_header\">Impressum</div>" +
                "Ce graphique interactif est une plateforme d'information sur les effets de la pollution atmosphérique sur la santé. Il s'agit d'un projet du Centre de documentation sur l’air et la santé (LUDOK) " +
                "de l'Institut Tropical et de Santé Publique Suisse (Swiss TPH), financé par l'Office fédéral de l'environnement (OFEV), qui a été développé en collaboration avec des organisations, à savoir:" +
                "<ul>" + 
                "<li>Office fédéral de l'environnement (organisation responsable)</li>" +
                "<li>Autorités cantonales chargées de la lutte contre la pollution atmosphérique (organisation responsable)</li>" +
                "<li>Ligue suisse contre le cancer (organisation responsable)</li>" +
                "<li>LUNGE ZÜRICH (organisation responsable)</li>" +
                "<li>LerNetz</li>" +
                "</ul>" +
                "Concept et réalisation: LUDOK<br>" +
                "Rédacteurs: Meltem Kutlar Joss, Lara Stucki, Ron Kappeler und Zoe Roth<br>" +
                "Graphiste et développeur du logiciel: <a href=\"https://www.dr-carl.com\" target=\"_blank\">Dr. Carl GmbH</a>" +
                "<br><br>" +
                "Le contenu correspond à l'état des connaissances en 2020." +
                "<br><br>" +
                "Le code source du graphique interactif est disponible à l'adresse suivante: " +
                "<a href=\"https://github.com/swisstph/ap-health-effects\" target=\"_blank\">github.com/swisstph/ap-health-effects</a>. " +
                "Le graphique interactif est fourni sous licence " +
                "<a href=\"https://www.gnu.org/licenses/agpl-3.0\" target=\"_blank\">GNU Affero General Public License (AGPL)</a>. " +
                "L'utilisation et les adaptations du graphique interactif sont autorisées à condition que Swiss TPH soit mentionné comme auteur et que les conditions de la licence AGPL soient respectées. " +
                "Les contributions au contenu du graphique sont les bienvenues à l'adresse suivante: " +
                "<A HREF=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;\">" +
                "&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;</A>",
    "text_it": "<div class=\"i_header\">Impressum</div>" +
                "Questo grafico interattivo è una piattaforma con informazioni sugli effetti dell'inquinamento atmosferico sulla salute. Si tratta di un progetto finanziato dall'Ufficio federale " +
                "dell'ambiente (BAFU) del Centro di documentazione e informazione (LUDOK) presso lo Swiss Tropical and Public Health Institute (Swiss TPH), che è stato sviluppato insieme alle " +
                "organizzazioni, ovvero:" +
                "<ul>" + 
                "<li>Ufficio federale dell'ambiente (organizzazione promotrice)</li>" +
                "<li>Autorità cantonali per la lotta contro l'inquinamento atmosferico (organizzazione promotrice)</li>" +
                "<li>Lega svizzera contro il cancro (organizzazione promotrice)</li>" +
                "<li>LUNGE ZÜRICH (organizzazione promotrice)</li>" +
                "<li>LerNetz</li>" +
                "</ul>" +
                "Concetto e realizzazione: LUDOK<br>" +
                "Autori specialisti: Meltem Kutlar Joss, Lara Stucki, Ron Kappeler und Zoe Roth<br>" +
                "Grafico e sviluppatore di software: <a href=\"https://www.dr-carl.com\" target=\"_blank\">Dr. Carl GmbH</a>" +
                "<br><br>" +
                "Il contenuto corrisponde allo stato delle conoscenze nel 2020." +
                "<br><br>" +
                "Il codice sorgente per la grafica interattiva è disponibile all'indirizzo " +
                "<a href=\"https://github.com/swisstph/ap-health-effects\" target=\"_blank\">github.com/swisstph/ap-health-effects</a>. " +
                "La grafica interattiva è soggetta alla " +
                "<a href=\"https://www.gnu.org/licenses/agpl-3.0\" target=\"_blank\">GNU Affero General Public License (AGPL)</a>. " +
                "L'utilizzo e l'adattamento della grafica interattiva è consentito con indicazione di Swiss TPH in qualità di autore e nel rispetto delle condizioni di licenza AGPL. " +
                "Per inviare contributi ai contenuti della grafica: " +
                "<A HREF=\"&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;\">" +
                "&#x6c;&#x75;&#x64;&#x6f;&#x6b;&#x40;&#x73;&#x77;&#x69;&#x73;&#x73;&#x74;&#x70;&#x68;&#x2e;&#x63;&#x68;</A>"
    }   
  ];
  	
  arrInfos = [
    {"id": 1,
    "parent": "Atemwege",
    "text_de": "<div class=\"i_header\">Atemwege</div>Lunge, Luftröhre",
    "text_en": "<div class=\"i_header\">Respiratory system</div>Lungs, windpipe (trachea), airways (bronchi and bronchioles), air sacs (alveoli)",
    "text_fr": "<div class=\"i_header\">Voies aériennes</div>Poumon, trachée",
    "text_it": "<div class=\"i_header\">Vie respiratorie</div>Polmoni, trachea",
    },
    {"id": 2,
    "parent": "Herz",
    "text_de": "<div class=\"i_header\">Herz/Kreislauf</div>Herz, Blutkreislauf",
    "text_en": "<div class=\"i_header\">Cardiovascular system</div>Heart, blood and blood vessels",
    "text_fr": "<div class=\"i_header\">Système cardiovasculaire</div>Cœur, circulation sanguine",
    "text_it": "<div class=\"i_header\">Sistema cardiovascolare</div>Cuore, circolazione sanguigna",
    },
    {"id": 3,
    "parent": "Nervensystem",
    "text_de": "<div class=\"i_header\">Nervensystem</div>Gehirn, Nervensystem",
    "text_en": "<div class=\"i_header\">Nervous system</div>Brain, nervous system",
    "text_fr": "<div class=\"i_header\">Système nerveux</div>Cerveau, système nerveux",
    "text_it": "<div class=\"i_header\">Sistema nervoso</div>Cervello, sistema nervoso",
    },
    {"id": 4,
    "parent": "Stoffwechsel",
    "text_de": "<div class=\"i_header\">Stoffwechsel/Immunsystem</div>Leber, Bauchspeicheldrüse, Immunabwehr",
    "text_en": "<div class=\"i_header\">Metabolism/Immune system</div>Liver, pancreas, immune defence",
    "text_fr": "<div class=\"i_header\">Métabolisme/système immunitaire</div>Foie, pancréas, défenses immunitaires",
    "text_it": "<div class=\"i_header\">Metabolismo/sistema immunitario</div>Fegato, pancreas, difesa immunitaria",
    },
    {"id": 5,
    "parent": "Sterblichkeit",
    "text_de": "<div class=\"i_header\">Sterblichkeit</div>Sterbefälle, Anzahl der Todesfälle im Verhältnis zur Bevölkerung",
    "text_en": "<div class=\"i_header\">Mortality</div>Deaths, number of deaths in relation to the population",
    "text_fr": "<div class=\"i_header\">Mortalité</div>Décès, nombre de décès rapporté à la population",
    "text_it": "<div class=\"i_header\">Mortalità</div>Decessi, numero di decessi in rapporto alla popolazione",
    },
    {"id": 6,
    "parent": "Notfaelle",
    "text_de": "<div class=\"i_header\">Notfälle</div>Notfallkonsultationen in Spitälern oder beim Hausarzt, Spitaleintritte aufgrund von Notfällen",
    "text_en": "<div class=\"i_header\">Emergencies</div>Emergency consultations in hospitals or with the family doctor, hospital admissions due to emergencies",
    "text_fr": "<div class=\"i_header\">Urgences</div>Consultations d'urgence dans les hôpitaux ou auprès du médecin de famille, admissions à l'hôpital pour cause d'urgence",
    "text_it": "<div class=\"i_header\">Emergenze</div>Consultazioni d’emergenza in ospedale o con il medico di famiglia, ricoveri ospedalieri per emergenze",
    },
    {"id": 7,
    "parent": "causally",
    "text_de": "<div class=\"i_header\">Ursächlich</div>" +
               "Es hat sich gezeigt, dass der Schadstoff bei relevanten Expositionen zu Auswirkungen auf die Gesundheit oder das Wohlergehen führt, und zwar auf der Grundlage von Studien, die mehrere Beweislinien (Zell-, Tier-, Human- und epidemiologischen Studien) umfassen." +
               "<br><br>" + 
               "Zufallsergebnisse, Störfaktoren und andere Verzerrungen können mit angemessener Wahrscheinlichkeit ausgeschlossen werden." +
               "<br><br>" + 
               "(In der Fachliteratur wird dafür der Begriff «kausal» verwendet.)",
    "text_en": "<div class=\"i_header\">Causal</div>" +
                "The pollutant has been shown to cause health or welfare effects at relevant levels of exposure, based on studies covering several lines of evidence (cellular, animal, human and epidemiological studies)." +
                "<br><br>" + 
                "Random results, confounders and other biases can be excluded with reasonable probability.",
    "text_fr": "<div class=\"i_header\">Cause</div>" +
                "Il a été prouvé que le polluant a des effets sur la santé ou le bien-être en cas d'expositions au niveau concerné, et ce sur la base d'études comprenant plusieurs types de preuves (études cellulaires, animales, humaines et épidémiologiques)." + 
                "<br><br>" +
                "Les résultats aléatoires, les facteurs perturbateurs et autres biais peuvent être exclus avec une probabilité raisonnable.",
    "text_it": "<div class=\"i_header\">Causale</div>" +
                "Sulla base di studi che coprono diverse linee di evidenza (studi cellulari, animali, umani ed epidemiologici), è stato dimostrato che l'inquinante provoca effetti sulla salute o sul benessere a livelli di esposizione rilevanti." + 
                "<br><br>" +
                "Risultati casuali, fattori di disturbo e altre distorsioni possono essere esclusi con un ragionevole grado di probabilità.",
    },
    {"id": 8,
    "parent": "likely",
    "text_de": "<div class=\"i_header\">Wahrscheinlich ursächlich</div>" +
               "Es gibt Studien, in denen die Ergebnisse nicht durch Zufallsergebnisse, Störfaktoren oder andere Verzerrungen erklärt werden, aber es bleiben Unsicherheiten in der Evidenz für Gesundheitseffekte insgesamt." +
               "<br><br>" + 
               "So ist z.B. der Einfluss von gleichzeitig auftretenden Schadstoffen schwer zu erfassen, oder die Evidenz in den verschiedenen wissenschaftlichen Disziplinen ist möglicherweise begrenzt oder inkonsistent." +
               "<br><br>" + 
               "(In der Fachliteratur wird dafür der Begriff «wahrscheinlich kausal» verwendet.)",
    "text_en": "<div class=\"i_header\">Likely causal</div>" +
                "There are studies in which the results cannot be explained by chance, confounders or other biases, but uncertainties remain in the overall evidence for health effects." +
                "<br><br>" + 
                "For example, the influence of concurrent pollutants is difficult to capture, or the evidence in different scientific disciplines may be limited or contradictory.",
    "text_fr": "<div class=\"i_header\">Cause probable</div>" + 
                "Il existe des études dont les résultats ne peuvent être expliqués par des résultats aléatoires, des facteurs perturbateurs ou d'autres biais, mais il demeure des incertitudes quant aux preuves des effets sur la santé en général." +
                "<br><br>" +
                "Par exemple, l'influence de polluants présents simultanément est difficile à évaluer, ou les preuves dans différentes disciplines scientifiques peuvent être limitées ou contradictoires.",
    "text_it": "<div class=\"i_header\">Probabilmente causale</div>" + 
                "Ci sono studi in cui i risultati non possono essere spiegati da risultati casuali, fattori di disturbo o altre distorsioni, ma rimangono incertezze nell'evidenza degli effetti sulla salute in generale." +
                "<br><br>" +
                "Ad esempio, l'influenza di inquinanti che si riscontrano simultaneamente è difficile da rilevare, o le prove nelle varie discipline scientifiche possono essere limitate o contraddittorie.",
    },
    {"id": 9,
    "parent": "causality_mobile",
    "text_de": "<div class=\"i_header\">Kausalität</div>" +
               "<b>Ursächlich</b>" +
               "<br><br>" + 
               "Es hat sich gezeigt, dass der Schadstoff bei relevanten Expositionen zu Auswirkungen auf die Gesundheit oder das Wohlergehen führt, und zwar auf der Grundlage von Studien, die mehrere Beweislinien (Zell-, Tier-, Human- und epidemiologischen Studien) umfassen." +
               "<br><br>" + 
               "Zufallsergebnisse, Störfaktoren und andere Verzerrungen können mit angemessener Wahrscheinlichkeit ausgeschlossen werden." +
               "<br><br>" + 
               "(In der Fachliteratur wird dafür der Begriff «kausal» verwendet.)" +
               "<br><br><br>" + 
               "<b>Wahrscheinlich ursächlich</b>" +
               "<br><br>" + 
               "Es gibt Studien, in denen die Ergebnisse nicht durch Zufallsergebnisse, Störfaktoren oder andere Verzerrungen erklärt werden, aber es bleiben Unsicherheiten in der Evidenz für Gesundheitseffekte insgesamt." +
               "<br><br>" + 
               "So ist z.B. der Einfluss von gleichzeitig auftretenden Schadstoffen schwer zu erfassen, oder die Evidenz in den verschiedenen wissenschaftlichen Disziplinen ist möglicherweise begrenzt oder inkonsistent." +
               "<br><br>" + 
               "(In der Fachliteratur wird dafür der Begriff «wahrscheinlich kausal» verwendet.)",
    "text_en": "<div class=\"i_header\">Causality</div>" +
                "<b>Causal</b>" +
                "<br><br>" + 
                "The pollutant has been shown to cause health or welfare effects at relevant levels of exposure, based on studies covering several lines of evidence (cellular, animal, human and epidemiological studies)." +
                "<br><br>" + 
                "Random results, confounders and other biases can be excluded with reasonable probability." +
                "<br><br><br>" + 
                "<b>Likely causal</b>" +
                "<br><br>" + 
                "There are studies in which the results cannot be explained by chance, confounders or other biases, but uncertainties remain in the overall evidence for health effects." +
                "<br><br>" + 
                "For example, the influence of concurrent pollutants is difficult to capture, or the evidence in different scientific disciplines may be limited or contradictory.",
    "text_fr": "<div class=\"i_header\">Causalité</div>" +
                "<b>Cause</b>" +
                "<br><br>" + 
                "Il a été prouvé que le polluant a des effets sur la santé ou le bien-être en cas d'expositions au niveau concerné, et ce sur la base d'études comprenant plusieurs types de preuves (études cellulaires, animales, humaines et épidémiologiques)." + 
                "<br><br>" +
                "Les résultats aléatoires, les facteurs perturbateurs et autres biais peuvent être exclus avec une probabilité raisonnable." + 
                "<br><br>" +
                "(Le terme de «cause» est utilisé dans la littérature scientifique dans ce cas)" +
                "<br><br><br>" + 
                "<b>Cause probable</b>" +
                "<br><br>" + 
                "Il existe des études dont les résultats ne peuvent être expliqués par des résultats aléatoires, des facteurs perturbateurs ou d'autres biais, mais il demeure des incertitudes quant aux preuves des effets sur la santé en général." +
                "<br><br>" +
                "Par exemple, l'influence de polluants présents simultanément est difficile à évaluer, ou les preuves dans différentes disciplines scientifiques peuvent être limitées ou contradictoires.",
    "text_it": "<div class=\"i_header\">Causalità</div>" +
                "<b>Causale</b>" +
                "Sulla base di studi che coprono diverse linee di evidenza (studi cellulari, animali, umani ed epidemiologici), è stato dimostrato che l'inquinante provoca effetti sulla salute o sul benessere a livelli di esposizione rilevanti." + 
                "<br><br>" +
                "Risultati casuali, fattori di disturbo e altre distorsioni possono essere esclusi con un ragionevole grado di probabilità." + 
                "<br><br>" +
                "(in questo caso è usato il termine \"causale\" nella letteratura tecnica)" +
                "<br><br><br>" + 
                "<b>Probabilmente causale</b>" +
                "<br><br>" + 
                "Ci sono studi in cui i risultati non possono essere spiegati da risultati casuali, fattori di disturbo o altre distorsioni, ma rimangono incertezze nell'evidenza degli effetti sulla salute in generale." +
                "<br><br>" +
                "Ad esempio, l'influenza di inquinanti che si riscontrano simultaneamente è difficile da rilevare, o le prove nelle varie discipline scientifiche possono essere limitate o contraddittorie.",
    },
    {"id": 10,
    "parent": "Kurzzeit",
    "text_de": "<div class=\"i_header\">Kurzzeit</div>" +
               "Effekte, welche mit kurzfristig erhöhter Belastung in Zusammenhang stehen<br>(über Stunden oder Tage)",
    "text_en": "<div class=\"i_header\">Short-term</div>Effects associated with short-term exposures (hours to days)",
    "text_fr": "<div class=\"i_header\">A court terme</div>Effets associés à une exposition accrue à court terme (sur plusieurs heures ou jours)",
    "text_it": "<div class=\"i_header\">A breve termine</div>Effetti associati all'aumento dell'esposizione a breve termine (in ore o giorni)",
    },
    {"id": 11,
    "parent": "Langzeit",
    "text_de": "<div class=\"i_header\">Langzeit</div>" +
               "Effekte, welche mit langfristig erhöhter Belastung in Zusammenhang stehen<br>(über Monate oder Jahre)",
    "text_en": "<div class=\"i_header\">Long-term</div>Effects associated with long-term exposures (over months to years)",
    "text_fr": "<div class=\"i_header\">Long terme</div>Effets associés à une exposition accrue à long terme (sur plusieurs mois ou années)",
    "text_it": "<div class=\"i_header\">A lungo termine</div>Effetti associati all'aumento dell'esposizione a lungo termine (in mesi o anni)",
    },
    {"id": 12,
    "parent": "Feinstaub",
    "text_de": "<div class=\"i_header\">Feinstaub</div>" +
               "Partikel kleiner als 10 bzw. 2.5 Mikrometer (PM10/PM2.5). Emissionen vor allem durch Verkehr oder Holzfeuerungen, (Wald-) Brände und sekundäre Bildung aus Vorläuferstoffen " +
               "(in der Fachliteratur wird dafür der Begriff «sekundärer Feinstaub» verwendet)",
    "text_en": "<div class=\"i_header\">Particulate matter</div>Particles smaller than 10 or 2.5 micrometres (PM10/PM2.5): Emissions mainly from traffic or household heating/wood burning, (forest) fires and formation from precursors such as nitrogen oxides and ammonia (the term \"secondary particulate matter\" is used in the technical literature)",
    "text_fr": "<div class=\"i_header\">Poussières fines</div>" +
                "Particules de moins de 10 ou de 2,5 micromètres (PM10/PM2,5) : émissions provenant principalement des moteurs, des chauffages, notamment des feux de bois, de l’industrie et à partir " +
                "de précurseurs tels que les oxydes d'azote, le soufre et l'ammoniac (dans la littérature technique, le terme de «poussières fines secondaires» est utilisé)",
    "text_it": "<div class=\"i_header\">Polveri sottili</div>" +
                "Particelle più piccole di 10 o 2,5 micrometri (PM10/PM2,5): emissioni derivanti principalmente dal traffico o dalle combustioni per il riscaldamento, incendi (forestali) e formazione " +
                "da precursori come gli ossidi di azoto e l'ammoniaca (per quest’ultime nella letteratura tecnica si usa il termine \“polveri sottili secondarie\")",
    },
    {"id": 13,
    "parent": "Ozon",
    "text_de": "<div class=\"i_header\">Ozon (O<sub>3</sub>)</div>" +
               "Gebildet durch Sonneneinstrahlung aus Vorläuferstoffen wie Stickstoffdioxid und flüchtige organische Verbindungen (VOC)",
    "text_en": "<div class=\"i_header\">Ozone (O<sub>3</sub>)</div>Formed by solar radiation from precursors such as nitrogen dioxide and volatile organic compounds (VOC)",
    "text_fr": "<div class=\"i_header\">Ozone (O<sub>3</sub>)</div>Formé par le rayonnement solaire à partir de précurseurs tels que le dioxyde d'azote et les composés organiques volatils (COV)",
    "text_it": "<div class=\"i_header\">Ozono (O<sub>3</sub>)</div>Formato da radiazioni solari provenienti da precursori come il biossido di azoto e composti organici volatili (COV)",
    },
    {"id": 14,
    "parent": "Stickstoffdioxid",
    "text_de": "<div class=\"i_header\">Stickstoffdioxid (NO<sub>2</sub>)</div>" +
               "Emissionen vorwiegend durch Verkehr und Feuerungen zu Heizzwecken",
    "text_en": "<div class=\"i_header\">Nitrogen dioxide (NO<sub>2</sub>)</div>Emissions mainly from road traffic and other fossil fuel combustion processes like heating",
    "text_fr": "<div class=\"i_header\">Dioxyde d'azote (NO<sub>2</sub>)</div>Émissions provenant principalement de la combustion dans les moteurs, les chauffages et l’industrie",
    "text_it": "<div class=\"i_header\">Diossido di azoto (NO<sub>2</sub>)</div>Emissioni derivanti principalmente dal traffico e dalle combustioni per il riscaldamento",
    },
    {"id": 15,
    "parent": "Schwefeldioxid",
    "text_de": "<div class=\"i_header\">Schwefeldioxid (SO<sub>2</sub>)</div>" +
               "Emissionen durch Verbrennung von schwefelhaltiger Kohle oder Erdöl",
    "text_en": "<div class=\"i_header\">Sulphur dioxide (SO<sub>2</sub>)</div>Emissions from combustions of sulphur containing coal or diesel",
    "text_fr": "<div class=\"i_header\">Dioxyde de soufre (SO<sub>2</sub>)</div>Émissions provenant de la combustion de charbon ou de produits pétroliers contenant du soufre",
    "text_it": "<div class=\"i_header\">Anidride solforosa (SO<sub>2</sub>)</div>Emissioni derivanti dalla combustione di carbone contenente zolfo o di petrolio",
    },
    {"id": 16,
    "parent": "Kohlenmonoxid",
    "text_de": "<div class=\"i_header\">Kohlenmonoxid (CO)</div>" +
               "Emissionen durch unvollständige Verbrennungen von kohlenstoffhaltigen Brennstoffen",
    "text_en": "<div class=\"i_header\">Carbon monoxide (CO)</div>Emissions from incomplete combustions of carbonaceous fuels",
    "text_fr": "<div class=\"i_header\">Monoxyde de carbone (CO)</div>Émissions dues à la combustion incomplète de divers combustibles ",
    "text_it": "<div class=\"i_header\">Monossido di carbonio (CO)</div>Emissioni derivanti dalla combustione incompleta di carburanti contenenti carbonio",
    },
  ];
  
   
arrUI = [
    {"id": 1,
    "bez": "btn_Kurzzeit",
    "text_de": "Kurzzeit",
    "text_en": "Short-term",
    "text_fr": "A court terme",
    "text_it": "A breve termine",
    }, 
    {"id": 2,
    "bez": "btn_Langzeit",
    "text_de": "Langzeit",
    "text_en": "Long-term",
    "text_fr": "A long terme",
    "text_it": "A lungo termine",
    }, 				
    
    {"id": 3,
    "bez": "btn_Feinstaub",
    "text_de": "Fein<br>staub",
    "text_en": "Particulate Matter",
    "text_fr": "Poussières fines",
    "text_it": "Polveri sottili ",
    }, 
    {"id": 4,
    "bez": "btn_Ozon",
    "text_de": "Ozon",
    "text_en": "Ozone",
    "text_fr": "Ozone",
    "text_it": "Ozono",
    }, 
    {"id": 5,
    "bez": "btn_Stickstoffdioxid",
    "text_de": "Stickstoff<br>dioxid",
    "text_en": "Nitrogen dioxide",
    "text_fr": "Dioxyde d'azote",
    "text_it": "Diossido di azoto",
    }, 
    {"id": 6,
    "bez": "btn_Schwefeldioxid",
    "text_de": "Schwefel<br>dioxid",
    "text_en": "Sulphur dioxide",
    "text_fr": "Dioxyde de soufre",
    "text_it": "Diossido di zolfo",
    }, 
    {"id": 7,
    "bez": "btn_Kohlenmonoxid",
    "text_de": "Kohlen<br>monoxid",
    "text_en": "Carbon monoxide",
    "text_fr": "Monoxyde de carbone",
    "text_it": "Monossido di carbonio",
    }, 

    {"id": 11,
    "bez": "btn_Atemwege",
    "text_de": "Atemwege",
    "text_en": "Respiratory system",
    "text_fr": "Voies aériennes",
    "text_it": "Vie respiratorie",
    }, 
    {"id": 12,
    "bez": "btn_Herz",
    "text_de": "Herz-/Kreislaufsystem",
    "text_en": "Cardiovascular system",
    "text_fr": "Système cardiovasculaire",
    "text_it": "Sistema cardiovascolare",
    }, 
    {"id": 13,
    "bez": "btn_Nervensystem",
    "text_de": "Nervensystem",
    "text_en": "Nervous system",
    "text_fr": "Système nerveux",
    "text_it": "Sistema nervoso",
    }, 
    {"id": 14,
    "bez": "btn_Stoffwechsel",
    "text_de": "Stoffwechsel/Immunsystem",
    "text_en": "Metabolism/Immune system",
    "text_fr": "Métabolisme/système immunitaire",
    "text_it": "Metabolismo/sistema immunitario",
    }, 
    {"id": 15,
    "bez": "btn_Sterblichkeit",
    "text_de": "Sterblich<br>keit",
    "text_en": "Mortality",
    "text_fr": "Mortalité",
    "text_it": "Mortalità",
    }, 
    {"id": 16,
    "bez": "btn_Notfaelle",
    "text_de": "Notfälle",
    "text_en": "Emergen<br>cies",
    "text_fr": "Urgences",
    "text_it": "Emergenze",
    }, 			
     
    {"id": 21,
    "bez": "btn_Luftbelastung",
    "text_de": "Aktuelle Belastung",
    "text_en": "Current pollution",
    "text_fr": "Pollution actuel",
    "text_it": "Esposizione attuale",
    },
    {"id": 22,
    "bez": "btn_Grenzwerte",
    "text_de": "Grenz<br>werte",
    "text_en": "Limit values",
    "text_fr": "Valeur limite",
    "text_it": "Valori limite",
    }, 
    {"id": 23,
    "bez": "btn_Quellen",
    "text_de": "Schadstoff<br>quellen",
    "text_en": "Sources of pollutants",
    "text_fr": "Source polluants",
    "text_it": "Fonti inquinanti",
    }, 
    {"id": 24,
    "bez": "btn_Hintergrund",
    "text_de": "Hintergrund",
    "text_en": "Background",
    "text_fr": "Scénario",
    "text_it": "Scenario",
    }, 
    {"id": 25,
    "bez": "btn_Beitrag",
    "text_de": "Mein Beitrag",
    "text_en": "My Contribution",
    "text_fr": "Ma contribution",
    "text_it": "Cosa posso fare",
    }, 
    {"id": 26,
    "bez": "btn_Referenzen",
    "text_de": "Referenzen",
    "text_en": "References",
    "text_fr": "Références",
    "text_it": "Riferimenti",
    }, 
    {"id": 27,
    "bez": "btn_Impressum",
    "text_de": "Impressum",
    "text_en": "Imprint",
    "text_fr": "Impressum",
    "text_it": "Impressum",
    }, 

    {"id": 31,
    "bez": "leg_Kausalitaet",
    "text_de": "Kausalität",
    "text_en": "Causality",
    "text_fr": "Causalité",
    "text_it": "Causalità",
    }, 
    {"id": 32,
    "bez": "leg_ursaechlich",
    "text_de": "ursächlich",
    "text_en": "causal",
    "text_fr": "cause",
    "text_it": "causale",
    }, 
    {"id": 33,
    "bez": "leg_wahrscheinlich",
    "text_de": "wahrscheinlich ursächlich",
    "text_en": "likely causal",
    "text_fr": "cause probable",
    "text_it": "probabilmente causale",
    }, 

    {"id": 34,
    "bez": "txt_Intro",
    "text_de": "<b>Interaktive Grafik zu den Auswirkungen der Luftverschmutzung auf die Gesundheit</b>" +
                "<br><br>" +
                "Wir haben für Sie die ursächlichen und wahrscheinlich ursächlichen Gesundheitsfolgen der wichtigsten Schadstoffe in der Aussenluft zusammengetragen " + 
                "und in einer interaktiven Grafik aufbereitet." +
                "<ul>" +
                    "<li>Wählen Sie zwischen Kurzzeit- oder Langzeitbelastung aus</li>" +
                    "<li>Wählen Sie einen Schadstoff oder betroffenes Organ aus</li>" +
                "</ul>" +
		"<br><br>" +
		"Die Grafik ist in verschiedenen Sprachen verfügbar:" +
		"<a href=\"https://www.swisstph.ch/de/projects/ludok/healtheffects\"> DE</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/fr/projects/ludok/healtheffects\"> FR</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/effetti-sulla-salute\"> IT</a>" +
		" und" +		
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/healtheffects\"> EN</a>" +
		"." +
		"<br><br>" +
                "Am Fussende der Grafik finden Sie weitere Informationen.",
    "text_en": "<b>How do you use this interactive figure?</b>" +
                "<br><br>" +
                "We have compiled health effects of criteria pollutants in ambient air that are causal and likely to be causal in an interactive figure." +
                "<ul>" +
                    "<li>Choose between short-term or long-term exposure</li>" +
                    "<li>Next, choose an air pollutant or an affected organ system</li>" +
                "</ul>" +
		"<br><br>" +
		"The figureis available in different languages:" +
		"<a href=\"https://www.swisstph.ch/de/projects/ludok/healtheffects\"> DE</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/fr/projects/ludok/healtheffects\"> FR</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/effetti-sulla-salute\"> IT</a>" +
		" and" +		
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/healtheffects\"> EN</a>" +
		"." +
		"<br><br>" +
                "Find further information at the bottom of the figure.",
    "text_fr": "<b>Comment utiliser cette infographie?</b>" +
                "<br><br>" +
                "Nous avons établi pour vous une vue d’ensemble où vous pouvez observer les effets à court ou à long terme provoqués par les polluants de l’air " +
                "les plus importants sous forme d’un graphique interactif." +
                "<ul>" +
                    "<li>Choisissez si vous voulez observer les effets à court ou à long terme</li>" +
                    "<li>Choisissez un polluant ou un organe cible</li>" +
                "</ul>" +
		"<br><br>" +
		"Le graphique est disponible en plusieurs langues:" +
		"<a href=\"https://www.swisstph.ch/de/projects/ludok/healtheffects\"> DE</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/fr/projects/ludok/healtheffects\"> FR</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/effetti-sulla-salute\"> IT</a>" +
		" et" +		
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/healtheffects\"> EN</a>" +
		"." +
		"<br><br>" +
                "Au bas de la page, vous trouverez encore d’autres informations qui peuvent vous intéresser.",
    "text_it": "<b>Infografica interattiva sugli effetti dell’inquinamento dell’aria sulla salute</b>" +
                "<br><br>" +
                "Abbiamo raccolto per voi gli effetti causali e probabilmente causali sulla salute degli inquinanti più importanti nell'aria esterna e li abbiamo elaborati in una grafica interattiva." +
                "<ul>" +
                    "<li>Scegliete tra esposizione a breve o a lungo termine</li>" +
                    "<li>Scegliete l’inquinante o l’organo interessato</li>" +
                "</ul>" +
		"<br><br>" +
		"La grafica è disponibile in diverse lingue:" +
		"<a href=\"https://www.swisstph.ch/de/projects/ludok/healtheffects\"> DE</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/fr/projects/ludok/healtheffects\"> FR</a>" +
		"," +
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/effetti-sulla-salute\"> IT</a>" +
		" e" +		
		"<a href=\"https://www.swisstph.ch/en/projects/ludok/healtheffects\"> EN</a>" +
		"." +
		"<br><br>" +
                "Ai piedi dell’immagine trovate troverete maggiori informazioni."
    }, 

    {"id": 35,
    "bez": "txt_no_effects",
    "text_de": "Derzeit keine Effekte gesichert",
    "text_en": "No effects known",
    "text_fr": "Pour l’instant, aucun effet n’a été mis en évidence",
    "text_it": "Nessun effetto è attualmente garantito",
    }, 
    
]
