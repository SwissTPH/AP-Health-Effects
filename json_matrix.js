// LUDOK Data
//
// Dr. Carl GmbH 2020

arrNoxen = [
    {
        "id": 1,
        "noxe": "feinstaub",
        "noxe_de": "Feinstaub",
        "noxe_en": "Particulate matter",
        "noxe_fr": "Poussières fines",
        "noxe_it": "Polveri sottili",
        "noxe_tr": "Partikül Madde",
        "noxe_uk": "Зважені (тверді) частинки",
        "noxe_mn": "Тоосонцор",
    },
    {
        "id": 2,
        "noxe": "ozon",
        "noxe_de": "Ozon",
        "noxe_en": "Ozone",
        "noxe_fr": "Ozone",
        "noxe_it": "Ozono",
        "noxe_tr": "Ozon",
        "noxe_uk": "Озон",
        "noxe_mn": "Ozon",
    },
    {
        "id": 3,
        "noxe": "stickstoffdioxid",
        "noxe_de": "Stickstoffdioxid",
        "noxe_en": "Nitrogen dioxide",
        "noxe_fr": "Dioxyde d'azote",
        "noxe_it": "Diossido di azoto",
        "noxe_tr": "Azot dioksit",
        "noxe_uk": "Двоокис азоту",
        "noxe_mn": "Азотын давхар исэл",
    },
    {
        "id": 4,
        "noxe": "schwefeldioxid",
        "noxe_de": "Schwefeldioxid",
        "noxe_en": "Sulphur dioxide",
        "noxe_fr": "Dioxyde de soufre",
        "noxe_it": "Anidride solforosa",
        "noxe_tr": "Sülfür dioksit",
        "noxe_uk": "Двоокис сірки",
        "noxe_mn": "Хүхрийн давхар исэл",
    },
    {
        "id": 5,
        "noxe": "kohlenmonoxid",
        "noxe_de": "Kohlenmonoxid",
        "noxe_en": "Carbon monoxide",
        "noxe_fr": "Monoxyde de carbone",
        "noxe_it": "Monossido di carbonio",
        "noxe_tr": "Karbonmonoksit",
        "noxe_uk": "Окис вуглецю",
        "noxe_mn": "Нүүрстөрөгчийн дутуу исэл",
    }
];


arrOrgane = [
    {
        "id": 1,
        "organ": "atemwege",
        "organ_de": "Atemwege",
        "organ_en": "Respiratory system",
        "organ_fr": "Voies respiratoires",
        "organ_it": "Vie respiratorie",
        "organ_tr": "Solunum sistemi",
        "organ_uk": "Респіраторна система",
        "organ_mn": "Амьсгалын систем",
    },
    {
        "id": 2,
        "organ": "herz",
        "organ_de": "Herz-/Kreislaufsystem",
        "organ_en": "Cardiovascular system",
        "organ_fr": "Système cardiovasculaire",
        "organ_it": "Sistema cardiovascolare",
        "organ_tr": "Kardiyovasküler sistem",
        "organ_uk": "Серцево-судинна система",
        "organ_mn": "Зүрх судасны систем",
    },
    {
        "id": 3,
        "organ": "nervensystem",
        "organ_de": "Nervensystem",
        "organ_en": "Nervous system",
        "organ_fr": "Système nerveux",
        "organ_it": "Sistema nervoso",
        "organ_tr": "Sinir sistemi",
        "organ_uk": "Нервова система",
        "organ_mn": "Мэдрэлийн систем",
    },
    {
        "id": 4,
        "organ": "stoffwechsel",
        "organ_de": "Stoffwechsel/Immunsystem",
        "organ_en": "Metabolism/Immune system",
        "organ_fr": "Métabolisme/système immunitaire",
        "organ_it": "Metabolismo/sistema immunitario",
        "organ_tr": "Metabolizma/Bağışıklık sistemi",
        "organ_uk": "Метаболізм/імунна система",
        "organ_mn": "Бодисын солилцоо/Дархлааны систем",
    },
    {
        "id": 5,
        "organ": "sterblichkeit",
        "organ_de": "Sterblichkeit",
        "organ_en": "Mortality",
        "organ_fr": "Mortalité",
        "organ_it": "Mortalità",
        "organ_tr": "Ölüm",
        "organ_uk": "Смертність",
        "organ_mn": "Нас баралт",
    },
    {
        "id": 6,
        "organ": "notfaelle",
        "organ_de": "Notfälle",
        "organ_en": "Emergency",
        "organ_fr": "Urgences",
        "organ_it": "Emergenze",
        "organ_tr": "Acil durumlar",
        "organ_uk": "Надзвичайні ситуації",
        "organ_mn": "Амь тэнсэх тохиолдол",
    }
];


arrEffekte = [
    {
        "id": 1,
        "effekt_de": "Asthma",
        "effekt_en": "Asthma",
        "effekt_fr": "Asthme",
        "effekt_it": "Asma",
        "effekt_tr": "Astım",
        "effekt_uk": "Астма",
        "effekt_mn": "Астма",
        "organ": "atemwege"
    },
    {
        "id": 2,
        "effekt_de": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_en": "Respiratory/airway symptoms e.g. wheeze",
        "effekt_fr": "Symptômes des voies respira&shy;toires, p. ex. respiration sifflante",
        "effekt_it": "Sintomi respiratori, ad es. respiro sibilante",
        "effekt_tr": "Solunum/solunum yolu semptomları örn. Hırıltı",
        "effekt_uk": "Респіраторні/дихальні симптоми, наприклад хрипіння",
        "effekt_mn": "Амьсгалын замын өвчний шинж тэмдгүүд, жишээлбэл: хэржигнэх",
        "organ": "atemwege"
    },
    {
        "id": 3,
        "effekt_de": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_en": "Exacerbation  of the disease, increase in symptoms or medication in patients with asthma",
        "effekt_fr": "Aggravation de la maladie, augmentation des symptômes ou du traitement chez les patients asthmatiques",
        "effekt_it": "Peggioramento della malattia, più sintomi o farmaci nei pazienti con asma",
        "effekt_tr": "Astımlı hastalarda hastalığın alevlenmesi, semptomların artması veya ilaç tedavisi",
        "effekt_uk": "Загострення хвороби, посилення симптомів або лікування хворих на астму",
        "effekt_mn": "Астма өвчин даамжрах: өвчний шинж тэмдгүүд болон эмийн эмчилгээний хэрэгцээ нэмэгдэх",
        "organ": "atemwege"
    },
    {
        "id": 4,
        "effekt_de": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_en": "Lung function decline in patients with asthma",
        "effekt_fr": "Fonction pulmonaire réduite chez les patients asthmatiques",
        "effekt_it": "Funzione polmonare ridotta nei pazienti con asma",
        "effekt_tr": "Astımlı hastalarda akciğer fonksiyonlarında azalma",
        "effekt_uk": "Зниження функції легень у хворих на астму",
        "effekt_mn": "Астматай өвчтөнүүдийн уушгины үйл ажиллагаа доройтох",
        "organ": "atemwege"
    },
    {
        "id": 5,
        "effekt_de": "Verschlechterung der Erkrankung oder mehr Symptome bei Patienten mit COPD",
        "effekt_en": "Worsening of the disease or increase in symptoms in patients with COPD",
        "effekt_fr": "Aggravation de la maladie ou aug&shy;mentation des symptômes chez les patients atteints de BPCO",
        "effekt_it": "Peggioramento della malattia o più sintomi in pazienti con COPD",
        "effekt_tr": "KOAH hastalarında hastalığın kötüleşmesi veya semptomların artması",
        "effekt_uk": "Погіршення хвороби або посилення симптомів у хворих на ХОЗЛ",
        "effekt_mn": "Уушигны архаг бөглөрөөт өвчин даамжрах эсвэл өвчний шинж тэмдэг нэмэгдэх",
        "organ": "atemwege"
    },
    {
        "id": 6,
        "effekt_de": "Mehr Symptome bei Allergikern",
        "effekt_en": "Increase in symptoms for allergy patients",
        "effekt_fr": "Augmentation des symptômes chez les personnes allergiques",
        "effekt_it": "Più sintomi per chi soffre di allergie",
        "effekt_tr": "Alerji hastalarında semptomlarda artış",
        "effekt_uk": "Посилення симптомів у хворих на алергію",
        "effekt_mn": "Харшилтай өвчтөнүүдийн шинж тэмдгүүд нэмэгдэх",
        "organ": "atemwege"
    },
    {
        "id": 7,
        "effekt_de": "Chronische Bronchitis",
        "effekt_en": "Chronic bronchitis",
        "effekt_fr": "Bronchite chronique",
        "effekt_it": "Bronchite cronica",
        "effekt_tr": "Kronik bronşit",
        "effekt_uk": "Хронічний Бронхіт",
        "effekt_mn": "Архаг бронхит",
        "organ": "atemwege"
    },
    {
        "id": 8,
        "effekt_de": "Lungenfunktion verringert",
        "effekt_en": "Lung function decline",
        "effekt_fr": "Réduction de la fonction pulmonaire",
        "effekt_it": "Funzione polmonare ridotta",
        "effekt_tr": "Akciğer fonksiyonunda azalma",
        "effekt_uk": "Зниження функції легень",
        "effekt_mn": "Уушгины үйл ажиллагаа буурах",
        "organ": "atemwege"
    },
    {
        "id": 9,
        "effekt_de": "Lungenwachstum verringert",
        "effekt_en": "Impaired Lung growth",
        "effekt_fr": "Réduction de la croissance des poumons",
        "effekt_it": "Crescita polmonare ridotta",
        "effekt_tr": "Uyumsuz akciğer büyümesi",
        "effekt_uk": "Порушення зростання легень",
        "effekt_mn": "Уушгины өсөлт алдагдах",
        "organ": "atemwege"
    },
    {
        "id": 10,
        "effekt_de": "Beschleunigte Abnahme der Lungenfunktion",
        "effekt_en": "Accelerated decline in lung function",
        "effekt_fr": "Accélération de la diminution de la fonction pulmonaire",
        "effekt_it": "Riduzione accelerata della funzione polmonare",
        "effekt_tr": "Akciğer fonksiyonunda hızlı düşüş",
        "effekt_uk": "Прискорене зниження функції легень",
        "effekt_mn": "Уушгины үйл ажиллагааны хурдацтай буурах",
        "organ": "atemwege"
    },
    {
        "id": 33,
        "effekt_de": "Bronchitis",
        "effekt_en": "Bronchitis",
        "effekt_fr": "Bronchite",
        "effekt_it": "Bronchite",
        "effekt_tr": "Bronşit",
        "effekt_uk": "Бронхіт",
        "effekt_mn": "Бронхит",
        "organ": "atemwege"
    },
    {
        "id": 11,
        "effekt_de": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_en": "Airway/respiratory inflammation, inflammatory reaction",
        "effekt_fr": "Inflammation des voies respira&shy;toires, réaction inflammatoire",
        "effekt_it": "Infiammazione delle vie aeree, reazione infiammatoria",
        "effekt_tr": "Hava yolu/solunum iltihabı, inflamatuar reaksiyon",
        "effekt_uk": "Запалення дихальних шляхів/респіраторної системи, запальна реакція",
        "effekt_mn": "Амьсгалын замын үрэвсэл, үрэвслийн урвал",
        "organ": "atemwege"
    },
    {
        "id": 12,
        "effekt_de": "Entstehung von Lungenkrebs",
        "effekt_en": "Development of lung cancer",
        "effekt_fr": "Développement d’un cancer du poumon",
        "effekt_it": "Sviluppo di cancro ai polmoni",
        "effekt_tr": "Akciğer kanseri gelişimi",
        "effekt_uk": "Розвиток раку легень",
        "effekt_mn": "Уушгины хорт хавдар хүндрэх",
        "organ": "atemwege"
    },
    {
        "id": 13,
        "effekt_de": "Arteriosklerose",
        "effekt_en": "Atherosclerosis",
        "effekt_fr": "Artériosclérose",
        "effekt_it": "Arteriosclerosi",
        "effekt_tr": "Koroner arter hastalığı",
        "effekt_uk": "Атеросклероз",
        "effekt_mn": "Артерийн судасны хатуурал ",
        "organ": "herz"
    },
    {
        "id": 14,
        "effekt_de": "Bluthochdruck",
        "effekt_en": "Hypertension",
        "effekt_fr": "Hypertension artérielle",
        "effekt_it": "Ipertensione arteriosa",
        "effekt_tr": "Kan basıncı, hipertansiyon",
        "effekt_uk": "Підвищення артеріального тиску",
        "effekt_mn": "Цусны даралт ихсэх",
        "organ": "herz"
    },
    {
        "id": 15,
        "effekt_de": "Herzrhythmusvariabilität",
        "effekt_en": "Arrhythmia",
        "effekt_fr": "Arythmies cardiaques",
        "effekt_it": "Variabilità della frequenza cardiaca",
        "effekt_tr": "Aritmi",
        "effekt_uk": "Аритмія",
        "effekt_mn": "Хэм алдагдах",
        "organ": "herz"
    },
    {
        "id": 16,
        "effekt_de": "Blutgerinnung",
        "effekt_en": "Blood coagulation",
        "effekt_fr": "Coagulation du sang",
        "effekt_it": "Coagulazione del sangue",
        "effekt_tr": "Kan pıhtılaşması",
        "effekt_uk": "Коагуляція крові",
        "effekt_mn": "Цусны бүлэгнэлт",
        "organ": "herz"
    },
    {
        "id": 17,
        "effekt_de": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
        "effekt_en": "Sugar- and metabolic disorders/diseases (e.g. diabetes)",
        "effekt_fr": "Troubles/maladies du métabolisme des sucres et des graisses (p. ex., diabète)",
        "effekt_it": "Disturbi/malattie del metabolismo degli zuccheri e dei grassi (ad es. diabete)",
        "effekt_tr": "Şeker ve metabolik bozukluklar/hastalıklar (örn. Diyabet)",
        "effekt_uk": "Розлади/захворювання, пов’язані з рівнем глюкози та метаболізмом (наприклад, діабет)",
        "effekt_mn": "Бодисын солилцооны эмгэг/өвчин (жишээлбэл: чихрийн шижин)",
        "organ": "stoffwechsel"
    },
    {
        "id": 19,
        "effekt_de": "Verringerte Immunabwehr",
        "effekt_en": "Decline in immune defence",
        "effekt_fr": "Réduction des défenses immunitaires",
        "effekt_it": "Difesa immunitaria ridotta",
        "effekt_tr": "Bağışıklık ve savunma sisteminde azalma",
        "effekt_uk": "Зниження імунного захисту",
        "effekt_mn": "Дархлаа муудах",
        "organ": "stoffwechsel"
    },
    {
        "id": 20,
        "effekt_de": "Gehirnvolumen (Weisse Masse) reduziert",
        "effekt_en": "Brain volume (white matter) decline",
        "effekt_fr": "Réduction du volume du cerveau (masse blanche)",
        "effekt_it": "Volume del cervello (massa bianca) ridotto",
        "effekt_tr": "Beyin hacminde (beyaz madde) azalma",
        "effekt_uk": "Зменшення об'єму мозку (білої речовини)",
        "effekt_mn": "Тархины эзэлхүүн (цагаан бодис) буурах",
        "organ": "nervensystem"
    },
    {
        "id": 21,
        "effekt_de": "Abnahme der kognitiven Leistung (Demenz)",
        "effekt_en": "Cognitive performance decline (dementia)",
        "effekt_fr": "Diminution des performances cognitives (démence)",
        "effekt_it": "Diminuzione delle prestazioni cognitive (demenza)",
        "effekt_tr": "Bilişsel performans düşüşü (demans)",
        "effekt_uk": "Зниження когнітивних функцій (деменція)",
        "effekt_mn": "Танин мэдэхүйн үйл ажиллагаа буурах (зөнөх өвчин))",
        "organ": "nervensystem"
    },
    {
        "id": 22,
        "effekt_de": "Krankheitsbedingte Sterblichkeit",
        "effekt_en": "Non-accidental mortality",
        "effekt_fr": "Mortalité due à la maladie",
        "effekt_it": "Mortalità dovuta a malattia ",
        "effekt_tr": "Kaza kaynaklı olmayan ölüm",
        "effekt_uk": "Смертність (не включаючи нещасні випадки)",
        "effekt_mn": "Гэнэтийн бус нас баралт",
        "organ": "sterblichkeit"
    },
    {
        "id": 23,
        "effekt_de": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_en": "Mortality due to cardiovascular disease",
        "effekt_fr": "Mortalité due à des maladies cardiovasculaires",
        "effekt_it": "Mortalità dovuta a malattie cardiovascolari",
        "effekt_tr": "Kardiyovasküler kaynaklı ölüm",
        "effekt_uk": "Смертність: серцево-судинні захворювання",
        "effekt_mn": "Зүрх судасны өвчний улмаас",
        "organ": "sterblichkeit"
    },
    {
        "id": 24,
        "effekt_de": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_en": "Mortality due to respiratory diseases",
        "effekt_fr": "Mortalité due à des maladies des voies respiratoires",
        "effekt_it": "Mortalità a causa di malattie respiratorie",
        "effekt_tr": "Solunum hastalıkları kaynaklı ölüm",
        "effekt_uk": "Смертність: захворювання дихальних шляхів",
        "effekt_mn": "Амьсгалын замын өвчний улмаас",
        "organ": "sterblichkeit"
    },
    {
        "id": 25,
        "effekt_de": "Sterblichkeit wegen Asthma",
        "effekt_en": "Mortality due to asthma",
        "effekt_fr": "Mortalité due à l'asthme",
        "effekt_it": "Mortalità a causa di asma",
        "effekt_tr": "Ölüm: astım",
        "effekt_uk": "Смертність: астма",
        "effekt_mn": "Астма өвчний улмаас",
        "organ": "sterblichkeit"
    },
    {
        "id": 26,
        "effekt_de": "Sterblichkeit wegen COPD",
        "effekt_en": "Mortality due to COPD",
        "effekt_fr": "Mortalité due à la BPCO",
        "effekt_it": "Mortalità a causa di COPD",
        "effekt_tr": "Ölüm: KOAH",
        "effekt_uk": "Смертність: ХОЗЛ",
        "effekt_mn": "Уушны архаг бөглөрөлт өвчний улмаас",
        "organ": "sterblichkeit"
    },
    {
        "id": 27,
        "effekt_de": "Sterblichkeit wegen Lungenkrebs",
        "effekt_en": "Mortality due to lung cancer",
        "effekt_fr": "Mortalité due au cancer du poumon",
        "effekt_it": "Mortalità a causa di cancro ai polmoni",
        "effekt_tr": "Ölüm: akciğer kanseri",
        "effekt_uk": "Смертність: рак легень",
        "effekt_mn": "Уушгины хорт хавдрын улмаас",
        "organ": "sterblichkeit"
    },
    {
        "id": 28,
        "effekt_de": "Sterblichkeit wegen Atemwegsinfektionen",
        "effekt_en": "Mortality due to respiratory (tract) infection",
        "effekt_fr": "Mortalité due aux infections des voies respiratoires",
        "effekt_it": "Mortalità a causa di infezioni delle vie respiratorie",
        "effekt_tr": "Ölüm: solunum yolu enfeksiyonu",
        "effekt_uk": "Смертність: інфекції дихальних шляхів",
        "effekt_mn": "Амьсгалын замын халдварын улмаас",
        "organ": "sterblichkeit",
    },
    {
        "id": 33,
        "effekt_de": "Totgeburt",
        "effekt_mn": "Ургын амьгүй төрөлт",
        "organ": "sterblichkeit"
    },
    {
        "id": 29,
        "effekt_de": "Notfälle wegen Atemwegserkrankungen",
        "effekt_en": "Emergency due to respiratory diseases",
        "effekt_fr": "Urgences dues à des maladies respiratoires",
        "effekt_it": "Emergenze a causa di malattie respiratorie",
        "effekt_tr": "Solunum hastalıkları kaynaklı acil durum",
        "effekt_uk": "Надзвичайна ситуація через респіраторні захворювання",
        "effekt_mn": "Амьсгалын замын өвчний улмаас",
        "organ": "notfaelle"
    },
    {
        "id": 30,
        "effekt_de": "Notfälle wegen Asthma",
        "effekt_en": "Emergency due to asthma",
        "effekt_fr": "Urgences dues à l'asthme",
        "effekt_it": "Emergenze a causa di asma",
        "effekt_tr": "Astım kaynaklı acil durum",
        "effekt_uk": "Надзвичайна ситуація через астму",
        "effekt_mn": "Астма өвчний улмаас",
        "organ": "notfaelle"
    },
    {
        "id": 31,
        "effekt_de": "Notfälle wegen COPD",
        "effekt_en": "Emergency due to COPD",
        "effekt_fr": "Urgences dues à la BPCO",
        "effekt_it": "Emergenze a causa di COPD",
        "effekt_tr": "KOAH kaynaklı acil durum",
        "effekt_uk": "Надзвичайна ситуація через ХОЗЛ",
        "effekt_mn": "Уушгины архаг бөглөрөлт өвчний улмаас",
        "organ": "notfaelle"
    },
    {
        "id": 32,
        "effekt_de": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_en": "Emergency due to cardiovascular diseases",
        "effekt_fr": "Urgences dues aux maladies cardiovasculaires",
        "effekt_it": "Emergenze a causa di malattie cardiovascolari",
        "effekt_tr": "Kardiyovasküler hastalıklar kaynaklı acil durum",
        "effekt_uk": "Надзвичайна ситуація через серцево-судинні захворювання",
        "effekt_mn": "Зүрх судасны өвчний улмаас",
        "organ": "notfaelle"
    }
];


arrMatrix = [
    {
        "id": 1011,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 1012,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "l"
    },
    {
        "id": 1013,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 1014,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Lungenwachstum verringert",
        "effekt_typ": "l"
    },
    {
        "id": 1015,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Beschleunigte Abnahme der Lungenfunktion",
        "effekt_typ": "l"
    },
    {
        "id": 1019,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Bronchitis",
        "effekt_typ": "l"
    },
    {
        "id": 1016,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "l",
        "effekt_zusatz_de": "(Kinder)",
        "effekt_zusatz_en": "(children)",
        "effekt_zusatz_fr": "(l'enfant)",
        "effekt_zusatz_it": "(bambini)",
        "effekt_zusatz_tr": "(çocuklar)",
        "effekt_zusatz_uk": "(діти)",
        "effekt_zusatz_mn": "(хүүхэд)",
    },
    {
        "id": 1017,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Entstehung von Lungenkrebs",
        "effekt_typ": "l"
    },
    {
        "id": 1018,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "l"
    },

    {
        "id": 1021,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "herz",
        "effekt": "Arteriosklerose",
        "effekt_typ": "c"
    },
    {
        "id": 1022,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "herz",
        "effekt": "Bluthochdruck",
        "effekt_typ": "c"
    },
    {
        "id": 1023,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "herz",
        "effekt": "Herzrhythmusvariabilität",
        "effekt_typ": "c"
    },
    {
        "id": 1024,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "herz",
        "effekt": "Blutgerinnung",
        "effekt_typ": "c"
    },

    {
        "id": 1031,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "nervensystem",
        "effekt": "Gehirnvolumen (Weisse Masse) reduziert",
        "effekt_typ": "l"
    },
    {
        "id": 1032,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "nervensystem",
        "effekt": "Abnahme der kognitiven Leistung (Demenz)",
        "effekt_typ": "l"
    },

    {
        "id": 1051,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Krankheitsbedingte Sterblichkeit",
        "effekt_typ": "c"
    },
    {
        "id": 1052,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "c"
    },
    {
        "id": 1053,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "c",
        "effekt_zusatz_de": "(kardiopulmonär)",
        "effekt_zusatz_en": "(cardiopulmonary)",
        "effekt_zusatz_fr": "(cardiopulmonaire)",
        "effekt_zusatz_it": "(cardiopolmonare)",
        "effekt_zusatz_tr": "(kardiyopulmoner)",
        "effekt_zusatz_uk": "(серцево-легеневі)",
        "effekt_zusatz_mn": "(зүрх судасны)",
    },
    {
        "id": 1054,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 1055,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen COPD",
        "effekt_typ": "l"
    },
    {
        "id": 1056,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Lungenkrebs",
        "effekt_typ": "c"
    },
    {
        "id": 1057,
        "noxe": "feinstaub",
        "noxe_zeit": "l",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegsinfektionen",
        "effekt_typ": "l"
    },
    {
        "id": 1058,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Totgeburt",
        "effekt_typ": "L",
        "nur_in": [ "mn" ],
    },

    {
        "id": 2011,
        "noxe": "ozon",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 2012,
        "noxe": "ozon",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 2013,
        "noxe": "ozon",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Mehr Symptome bei Allergikern",
        "effekt_typ": "l"
    },
    /*
    {"id": 2041,
    "noxe": "ozon",
    "noxe_zeit": "l",
    "organ": "stoffwechsel",
    "effekt": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
    "effekt_typ": "l"
    },
    {"id": 2051,
    "noxe": "ozon",
    "noxe_zeit": "l",
    "organ": "sterblichkeit",
    "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
    "effekt_typ": "l"
    },
    {"id": 2061,
    "noxe": "ozon",
    "noxe_zeit": "l",
    "organ": "notfaelle",
    "effekt": "Notfälle wegen Asthma",
    "effekt_typ": "l"
    },
  */

    {
        "id": 3011,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 3012,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 3013,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Chronische Bronchitis",
        "effekt_typ": "l"
    },
    {
        "id": 3014,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "l"
    },
    {
        "id": 3015,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "l",
        "organ": "atemwege",
        "effekt": "Lungenwachstum verringert",
        "effekt_typ": "l"
    },

// Kurzzeit

    {
        "id": 1111,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "l"
    },
    {
        "id": 1112,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung oder mehr Symptome bei Patienten mit COPD",
        "effekt_typ": "l"
    },
    {
        "id": 1113,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "l"
    },
    {
        "id": 1114,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "l"
    },
    {
        "id": 1121,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "herz",
        "effekt": "Bluthochdruck",
        "effekt_typ": "c"
    },
    {
        "id": 1122,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "herz",
        "effekt": "Herzrhythmusvariabilität",
        "effekt_typ": "c"
    },
    {
        "id": 1141,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "stoffwechsel",
        "effekt": "Verringerte Immunabwehr",
        "effekt_typ": "l"
    },
    {
        "id": 1151,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "sterblichkeit",
        "effekt": "Krankheitsbedingte Sterblichkeit",
        "effekt_typ": "c"
    },
    {
        "id": 1152,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "c"
    },
    {
        "id": 1153,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "l"
    },
    {
        "id": 1161,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Atemwegserkrankungen",
        "effekt_typ": "l"
    },
    {
        "id": 1162,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen COPD",
        "effekt_typ": "l"
    },
    {
        "id": 1163,
        "noxe": "feinstaub",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "c"
    },

    {
        "id": 2111,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "c"
    },
    {
        "id": 2112,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 2113,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "c"
    },
    {
        "id": 2114,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "c"
    },
    {
        "id": 2141,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "stoffwechsel",
        "effekt": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
        "effekt_typ": "l"
    },
    {
        "id": 2161,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Atemwegserkrankungen",
        "effekt_typ": "c"
    },
    {
        "id": 2162,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 2163,
        "noxe": "ozon",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen COPD",
        "effekt_typ": "c"
    },

    {
        "id": 3111,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "c"
    },
    {
        "id": 3112,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 3113,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 3151,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "k",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "c"
    },
    {
        "id": 3161,
        "noxe": "stickstoffdioxid",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "c"
    },

    {
        "id": 4111,
        "noxe": "schwefeldioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 4112,
        "noxe": "schwefeldioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_typ": "c"
    },
    {
        "id": 4113,
        "noxe": "schwefeldioxid",
        "noxe_zeit": "k",
        "organ": "atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "c",
        "effekt_zusatz_de": "(Empfindliche Personen)",
        "effekt_zusatz_en": "(Susceptible persons)",
        "effekt_zusatz_fr": "(personnes sensibles)",
        "effekt_zusatz_it": "(persone sensibili)",
        "effekt_zusatz_tr": "(duyarlı kişiler)",
        "effekt_zusatz_uk": "(сприйнятливі особи)",
        "effekt_zusatz_mn": "(мэдрэмтгий хүмүүс)",
    },
    {
        "id": 4151,
        "noxe": "schwefeldioxid",
        "noxe_zeit": "k",
        "organ": "sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "c"
    },
    {
        "id": 4161,
        "noxe": "schwefeldioxid",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "c",
        "effekt_zusatz_de": "(Kinder, 65+)",
        "effekt_zusatz_en": "(children, 65 years and older)",
        "effekt_zusatz_fr": "(enfants, 65+/personnes âgées)",
        "effekt_zusatz_it": "(bambini, 65+/gli anziani)",
        "effekt_zusatz_tr": "(çocuk, 65+/yaşlı)",
        "effekt_zusatz_uk": "(діти, 65 років і старше)",
        "effekt_zusatz_mn": "(хүүхэд болон 65+ насныхан)",
    },

    {
        "id": 5161,
        "noxe": "kohlenmonoxid",
        "noxe_zeit": "k",
        "organ": "notfaelle",
        "effekt": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "l"
    }

];
