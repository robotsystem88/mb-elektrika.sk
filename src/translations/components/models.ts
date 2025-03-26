const models = {
  en: {
    title: 'Supported Models',
    subtitle: 'Expert service for premium car batteries',
    search: {
      placeholder: 'Search by model name...',
      notFound: 'No models found',
      filterByBrand: 'Filter by manufacturer',
      allBrands: 'All brands'
    },
    brands: {
      mercedes: 'Mercedes-Benz',
      bmw: 'BMW',
      porsche: 'Porsche',
      tesla: 'Tesla',
      smart: 'Smart',
      amg: 'Mercedes-AMG',
      eq: 'Mercedes-EQ'
    },
    classes: {
      i4_g26: {
        name: 'BMW i4 G26',
        brand: 'bmw',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      i7_g70: {
        name: 'BMW i7 G70',
        brand: 'bmw',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      ix_i20: {
        name: 'BMW iX i20',
        brand: 'bmw',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      taycan_y1: {
        name: 'Porsche Taycan',
        brand: 'porsche',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      panamera_971: {
        name: 'Porsche Panamera 971',
        brand: 'porsche',
        features: ['Hybrid system', 'High-voltage battery', 'Premium'],
        premium: true
      },
      cayenne_9ya: {
        name: 'Porsche Cayenne 9YA',
        brand: 'porsche',
        features: ['Hybrid system', 'High-voltage battery', 'Premium'],
        premium: true
      },
      model_s: {
        name: 'Tesla Model S',
        brand: 'tesla',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      model_3: {
        name: 'Tesla Model 3',
        brand: 'tesla',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      model_x: {
        name: 'Tesla Model X',
        brand: 'tesla',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      model_y: {
        name: 'Tesla Model Y',
        brand: 'tesla',
        features: ['High-voltage battery', 'Electric vehicle', 'Premium'],
        premium: true
      },
      // Mercedes-Benz Models
      a_177: {
        name: 'A Klasse W177',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      b_247: {
        name: 'B Klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      c_205: {
        name: 'C Klasse W205',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      c_206: {
        name: 'C Klasse W206',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      cla_118: {
        name: 'CLA Klasse W118',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      cla_174: {
        name: 'CLA Klasse W174',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      cle_236: {
        name: 'CLE Klasse W236',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      cls_257: {
        name: 'CLS Klasse W257',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      e_214: {
        name: 'E Klasse W214',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      g_463: {
        name: 'G Klasse W463',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      g_465: {
        name: 'G Klasse W465',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      glb_247: {
        name: 'GLB Klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      glc_254: {
        name: 'GLC Klasse W254',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      s_217: {
        name: 'S Klasse W217',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      v_447: {
        name: 'V Klasse W447',
        brand: 'mercedes',
        features: ['12V Lithium battery', 'Start-Stop'],
        premium: false
      },
      eqe_294: {
        name: 'EQE Klasse W294',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      eqe_295: {
        name: 'EQE SUV W295',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      eqb_243: {
        name: 'EQB Klasse W243',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      eqc_293: {
        name: 'EQC Klasse W293',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      eqs_296: {
        name: 'EQS Klasse W296',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      eqs_297: {
        name: 'EQS SUV W297',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      amg_298: {
        name: 'AMG Klasse W298',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      amg_gt_190: {
        name: 'AMG GT W190',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      amg_gt_192: {
        name: 'AMG GT W192',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      sls_197: {
        name: 'SLS AMG W197',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      sl_232: {
        name: 'SL Klasse W232',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      slk_172: {
        name: 'SLK Klasse W172',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      eq_fortwo: {
        name: 'Smart EQ fortwo',
        brand: 'smart',
        features: ['High-voltage battery', 'Electric vehicle'],
        premium: false
      },
      eq_forfour: {
        name: 'Smart EQ forfour',
        brand: 'smart',
        features: ['High-voltage battery', 'Electric vehicle'],
        premium: false
      },
      gt_w290_amg: {
        name: 'GT klasse W290 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      gt_w190_amg: {
        name: 'GT klasse W190 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      gle_w292_coupe: {
        name: 'GLE klasse W292 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      gle_w167: {
        name: 'GLE klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      gls_w167: {
        name: 'GLS klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      glc_w253_coupe: {
        name: 'GLC klasse W253 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      gla_w156: {
        name: 'GLA klasse W156',
        brand: 'mercedes',
        features: ['12V Lithium battery', 'Start-Stop'],
        premium: false
      },
      gla_w247: {
        name: 'GLA klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: false
      },
      eqa_w243: {
        name: 'EQA Klasse W243',
        brand: 'mercedes',
        features: ['Electric vehicle', 'High-voltage battery', 'Premium'],
        premium: true
      },
      e_w213: {
        name: 'E Klasse W213',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      e_w238: {
        name: 'E Klasse W238',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      s_w221: {
        name: 'S Klasse W221',
        brand: 'mercedes',
        features: ['12V Lithium battery', 'Start-Stop'],
        premium: true
      },
      s_w222: {
        name: 'S Klasse W222',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      s_w223: {
        name: 'S Klasse W223',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V Lithium battery', 'Start-Stop'],
        premium: true
      },
      v_w447: {
        name: 'V Klasse W447',
        brand: 'mercedes',
        features: ['12V Lithium battery', 'Start-Stop'],
        premium: false
      }
    },
    batteryTypes: {
      title: 'Battery Types',
      numbers: ['A000 982 03 23', 'A000 982 24 23', 'A000 982 33 23', 'A000 982 42 23']
    },
    notFound: 'Don\'t see your model? Contact us for assistance'
  },
  de: {
    title: 'Unterstützte Modelle',
    subtitle: 'Expertenservice für Premium-Fahrzeugbatterien',
    search: {
      placeholder: 'Nach Modellname suchen...',
      notFound: 'Keine Modelle gefunden',
      filterByBrand: 'Nach Hersteller filtern',
      allBrands: 'Alle Marken'
    },
    brands: {
      mercedes: 'Mercedes-Benz',
      bmw: 'BMW',
      porsche: 'Porsche',
      tesla: 'Tesla',
      smart: 'Smart',
      amg: 'Mercedes-AMG',
      eq: 'Mercedes-EQ'
    },
    classes: {
      i4_g26: {
        name: 'BMW i4 G26',
        brand: 'bmw',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      i7_g70: {
        name: 'BMW i7 G70',
        brand: 'bmw',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      ix_i20: {
        name: 'BMW iX i20',
        brand: 'bmw',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      taycan_y1: {
        name: 'Porsche Taycan',
        brand: 'porsche',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      panamera_971: {
        name: 'Porsche Panamera 971',
        brand: 'porsche',
        features: ['Hybridsystem', 'Hochvoltbatterie', 'Premium'],
        premium: true
      },
      cayenne_9ya: {
        name: 'Porsche Cayenne 9YA',
        brand: 'porsche',
        features: ['Hybridsystem', 'Hochvoltbatterie', 'Premium'],
        premium: true
      },
      model_s: {
        name: 'Tesla Model S',
        brand: 'tesla',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      model_3: {
        name: 'Tesla Model 3',
        brand: 'tesla',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      model_x: {
        name: 'Tesla Model X',
        brand: 'tesla',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      model_y: {
        name: 'Tesla Model Y',
        brand: 'tesla',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug', 'Premium'],
        premium: true
      },
      eq_fortwo: {
        name: 'Smart EQ fortwo',
        brand: 'smart',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug'],
        premium: false
      },
      eq_forfour: {
        name: 'Smart EQ forfour',
        brand: 'smart',
        features: ['Hochvoltbatterie', 'Elektrofahrzeug'],
        premium: false
      },
      gt_w290_amg: {
        name: 'GT klasse W290 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      gt_w190_amg: {
        name: 'GT klasse W190 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      gle_w292_coupe: {
        name: 'GLE klasse W292 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: false
      },
      gle_w167: {
        name: 'GLE klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: false
      },
      gls_w167: {
        name: 'GLS klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      glc_w253_coupe: {
        name: 'GLC klasse W253 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: false
      },
      gla_w156: {
        name: 'GLA klasse W156',
        brand: 'mercedes',
        features: ['Lithiebatterie 12V', 'Start-Stop'],
        premium: false
      },
      gla_w247: {
        name: 'GLA klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: false
      },
      eqa_w243: {
        name: 'EQA Klasse W243',
        brand: 'mercedes',
        features: ['Elektrofahrzeug', 'Hochvoltbatterie', 'Premium'],
        premium: true
      },
      e_w213: {
        name: 'E Klasse W213',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      e_w238: {
        name: 'E Klasse W238',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      s_w221: {
        name: 'S Klasse W221',
        brand: 'mercedes',
        features: ['Lithiebatterie 12V', 'Start-Stop'],
        premium: true
      },
      s_w222: {
        name: 'S Klasse W222',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      s_w223: {
        name: 'S Klasse W223',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Lithiebatterie 48V', 'Start-Stop'],
        premium: true
      },
      v_w447: {
        name: 'V Klasse W447',
        brand: 'mercedes',
        features: ['Lithiebatterie 12V', 'Start-Stop'],
        premium: false
      }
    },
    batteryTypes: {
      title: 'Batterietypen',
      numbers: ['A000 982 03 23', 'A000 982 24 23', 'A000 982 33 23', 'A000 982 42 23']
    },
    notFound: 'Ihr Modell nicht gefunden? Kontaktieren Sie uns'
  },
  ru: {
    title: 'Поддерживаемые модели',
    subtitle: 'Экспертное обслуживание премиальных автомобильных аккумуляторов',
    search: {
      placeholder: 'Поиск по названию модели...',
      notFound: 'Модели не найдены',
      filterByBrand: 'Фильтр по производителю',
      allBrands: 'Все марки'
    },
    brands: {
      mercedes: 'Mercedes-Benz',
      bmw: 'BMW',
      porsche: 'Porsche',
      tesla: 'Tesla',
      smart: 'Smart',
      amg: 'Mercedes-AMG',
      eq: 'Mercedes-EQ'
    },
    classes: {
      i4_g26: {
        name: 'BMW i4 G26',
        brand: 'bmw',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      i7_g70: {
        name: 'BMW i7 G70',
        brand: 'bmw',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      ix_i20: {
        name: 'BMW iX i20',
        brand: 'bmw',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      taycan_y1: {
        name: 'Porsche Taycan',
        brand: 'porsche',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      panamera_971: {
        name: 'Porsche Panamera 971',
        brand: 'porsche',
        features: ['Гибридная система', 'Высоковольтный аккумулятор', 'Премиум'],
        premium: true
      },
      cayenne_9ya: {
        name: 'Porsche Cayenne 9YA',
        brand: 'porsche',
        features: ['Гибридная система', 'Высоковольтный аккумулятор', 'Премиум'],
        premium: true
      },
      model_s: {
        name: 'Tesla Model S',
        brand: 'tesla',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      model_3: {
        name: 'Tesla Model 3',
        brand: 'tesla',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      model_x: {
        name: 'Tesla Model X',
        brand: 'tesla',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      model_y: {
        name: 'Tesla Model Y',
        brand: 'tesla',
        features: ['Высоковольтный аккумулятор', 'Электромобиль', 'Премиум'],
        premium: true
      },
      eq_fortwo: {
        name: 'Smart EQ fortwo',
        brand: 'smart',
        features: ['Высоковольтный аккумулятор', 'Электромобиль'],
        premium: false
      },
      eq_forfour: {
        name: 'Smart EQ forfour',
        brand: 'smart',
        features: ['Высоковольтный аккумулятор', 'Электромобиль'],
        premium: false
      },
      gt_w290_amg: {
        name: 'GT klasse W290 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      gt_w190_amg: {
        name: 'GT klasse W190 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      gle_w292_coupe: {
        name: 'GLE klasse W292 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: false
      },
      gle_w167: {
        name: 'GLE klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: false
      },
      gls_w167: {
        name: 'GLS klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      glc_w253_coupe: {
        name: 'GLC klasse W253 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: false
      },
      gla_w156: {
        name: 'GLA klasse W156',
        brand: 'mercedes',
        features: ['Литиевый аккумулятор 12V', 'Start-Stop'],
        premium: false
      },
      gla_w247: {
        name: 'GLA klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: false
      },
      eqa_w243: {
        name: 'EQA Klasse W243',
        brand: 'mercedes',
        features: ['Электромобиль', 'Высоковольтный аккумулятор', 'Премиум'],
        premium: true
      },
      e_w213: {
        name: 'E Klasse W213',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      e_w238: {
        name: 'E Klasse W238',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      s_w221: {
        name: 'S Klasse W221',
        brand: 'mercedes',
        features: ['Литиевый аккумулятор 12V', 'Start-Stop'],
        premium: true
      },
      s_w222: {
        name: 'S Klasse W222',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      s_w223: {
        name: 'S Klasse W223',
        brand: 'mercedes',
        features: ['48V EQ Boost', 'Литиевый аккумулятор 48V', 'Start-Stop'],
        premium: true
      },
      v_w447: {
        name: 'V Klasse W447',
        brand: 'mercedes',
        features: ['Литиевый аккумулятор 12V', 'Start-Stop'],
        premium: false
      }
    },
    batteryTypes: {
      title: 'Типы аккумуляторов',
      numbers: ['A000 982 03 23', 'A000 982 24 23', 'A000 982 33 23', 'A000 982 42 23']
    },
    notFound: 'Не нашли свою модель? Свяжитесь с нами'
  },
  sk: {
    title: 'Podporované modely',
    subtitle: 'Expertný servis pre prémiové autobatérie',
    search: {
      placeholder: 'Vyhľadávanie podľa názvu modelu...',
      notFound: 'Nenašli sa žiadne modely',
      filterByBrand: 'Filter podľa výrobcu',
      allBrands: 'Všetky značky'
    },
    brands: {
      mercedes: 'Mercedes-Benz',
      bmw: 'BMW',
      porsche: 'Porsche',
      tesla: 'Tesla',
      smart: 'Smart',
      amg: 'Mercedes-AMG',
      eq: 'Mercedes-EQ'
    },
    classes: {
      i4_g26: {
        name: 'BMW i4 G26',
        brand: 'bmw',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      i7_g70: {
        name: 'BMW i7 G70',
        brand: 'bmw',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      ix_i20: {
        name: 'BMW iX i20',
        brand: 'bmw',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      taycan_y1: {
        name: 'Porsche Taycan',
        brand: 'porsche',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      panamera_971: {
        name: 'Porsche Panamera 971',
        brand: 'porsche',
        features: ['Hybridný systém', 'Vysokonapäťová batéria', 'Premium'],
        premium: true
      },
      cayenne_9ya: {
        name: 'Porsche Cayenne 9YA',
        brand: 'porsche',
        features: ['Hybridný systém', 'Vysokonapäťová batéria', 'Premium'],
        premium: true
      },
      model_s: {
        name: 'Tesla Model S',
        brand: 'tesla',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      model_3: {
        name: 'Tesla Model 3',
        brand: 'tesla',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      model_x: {
        name: 'Tesla Model X',
        brand: 'tesla',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      model_y: {
        name: 'Tesla Model Y',
        brand: 'tesla',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo', 'Premium'],
        premium: true
      },
      eq_fortwo: {
        name: 'Smart EQ fortwo',
        brand: 'smart',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo'],
        premium: false
      },
      eq_forfour: {
        name: 'Smart EQ forfour',
        brand: 'smart',
        features: ['Vysokonapäťová batéria', 'Elektrické vozidlo'],
        premium: false
      },
      gt_w290_amg: {
        name: 'GT klasse W290 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      gt_w190_amg: {
        name: 'GT klasse W190 AMG',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      gle_w292_coupe: {
        name: 'GLE klasse W292 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: false
      },
      gle_w167: {
        name: 'GLE klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: false
      },
      gls_w167: {
        name: 'GLS klasse W167',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      glc_w253_coupe: {
        name: 'GLC klasse W253 coupe',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: false
      },
      gla_w156: {
        name: 'GLA klasse W156',
        brand: 'mercedes',
        features: ['12V lítiová batéria', 'Start-Stop'],
        premium: false
      },
      gla_w247: {
        name: 'GLA klasse W247',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: false
      },
      eqa_w243: {
        name: 'EQA Klasse W243',
        brand: 'mercedes',
        features: ['Elektrické vozidlo', 'Vysokonapäťová batéria', 'Premium'],
        premium: true
      },
      e_w213: {
        name: 'E Klasse W213',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      e_w238: {
        name: 'E Klasse W238',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      s_w221: {
        name: 'S Klasse W221',
        brand: 'mercedes',
        features: ['12V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      s_w222: {
        name: 'S Klasse W222',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      s_w223: {
        name: 'S Klasse W223',
        brand: 'mercedes',
        features: ['48V EQ Boost', '48V lítiová batéria', 'Start-Stop'],
        premium: true
      },
      v_w447: {
        name: 'V Klasse W447',
        brand: 'mercedes',
        features: ['12V lítiová batéria', 'Start-Stop'],
        premium: false
      }
    },
    batteryTypes: {
      title: 'Typy batérií',
      numbers: ['A000 982 03 23', 'A000 982 24 23', 'A000 982 33 23', 'A000 982 42 23']
    }
  }
};

export default models;

export { models }