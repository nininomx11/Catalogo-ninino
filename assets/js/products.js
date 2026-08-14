/* ---------------------------------------------------------------------------
   Ninino — datos centralizados del catálogo
   ---------------------------------------------------------------------------
   FUENTES
   · Nombre comercial, frase, edad, configuraciones y funciones ...... PDF final
   · Modelo, color, SKU, código de barras, pesos y caja .............. Excel
   · Apariencia, variantes y detalles físicos ........................ Fotografías

   No agregues aquí ningún dato que no esté confirmado en esas fuentes
   (precios, materiales, certificaciones, peso soportado, medidas del producto).
   Las medidas del Excel son SIEMPRE de la caja, nunca del producto.
--------------------------------------------------------------------------- */

const CONTACTO = {
  whatsapp: '5215519540241',
  telefono: '5519540241',
  email: 'nininomx@outlook.com',
  sitio: 'ninino.com'
};

const PRODUCTOS = [
  {
    slug: 'silla-alta-3-en-1', name: 'Silla alta 3 en 1', model: 'BH-522',
    tagline: 'Tres formas de acompañar su crecimiento', age: '6 meses – 3 años aprox.',
    keywords: ['silla alta', 'periquera alta', '3 en 1', 'comer'],
    colors: [{ id: 'gris', name: 'Gris', hex: '#B9BCBE', image: 'assets/images/products/bh-522/bh-522-silla-alta.webp' }],
    featuresTitle: '3 configuraciones de uso',
    features: [
      { name: 'Silla alta', image: 'assets/images/products/bh-522/bh-522-silla-alta.webp', alt: 'Silla alta 3 en 1 Ninino BH-522 en configuración de silla alta', position: '50% 50%' },
      { name: 'Configuración baja', image: 'assets/images/products/bh-522/bh-522-config-baja.webp', alt: 'Silla alta 3 en 1 Ninino BH-522 en configuración baja', position: '50% 50%' },
      { name: 'Modo móvil con ruedas', image: 'assets/images/products/bh-522/bh-522-modo-movil.webp', alt: 'Silla alta 3 en 1 Ninino BH-522 en modo móvil con ruedas', position: '50% 50%' }
    ],
    highlights: [
      { title: 'Arnés de 5 puntos', text: 'Mayor seguridad y sujeción durante su uso.' },
      { title: 'Almacenamiento inferior', text: 'Espacio práctico para guardar accesorios.' }
    ],
    sku: 'NIN-SILLAALTA-BH522-GRI', barcode: '7503061922104', weight: '3.8 kg', boxedWeight: '4.3 kg', boxDimensions: '43.5 × 24.5 × 41 cm',
    images: {
      hero: { src: 'assets/images/products/bh-522/bh-522-hero.webp', small: 'assets/images/products/bh-522/bh-522-hero-640.webp', alt: 'Bebé sentado en la silla alta 3 en 1 Ninino BH-522 durante la comida', position: '50% 45%' },
      gallery: [{ src: 'assets/images/products/bh-522/bh-522-arnes.webp', alt: 'Detalle del arnés de 5 puntos de la silla alta Ninino BH-522', position: '50% 50%', role: 'detalle' }]
    }
  },
  {
    slug: 'periquera', name: 'Periquera', model: 'BH-525', tagline: 'Lista para acompañar la hora de comer', age: '6 meses – 3 años aprox.',
    keywords: ['periquera', 'mesita', 'silla baja', 'comer'],
    colors: [{ id: 'gris', name: 'Gris', hex: '#B9BCBE', image: 'assets/images/products/bh-525/bh-525-periquera.webp' }],
    featuresTitle: '3 configuraciones de uso',
    features: [
      { name: 'Periquera', image: 'assets/images/products/bh-525/bh-525-periquera.webp', alt: 'Periquera Ninino BH-525 en configuración alta', position: '50% 50%' },
      { name: 'Silla baja', image: 'assets/images/products/bh-525/bh-525-silla-baja.webp', alt: 'Periquera Ninino BH-525 convertida en silla baja', position: '50% 50%' },
      { name: 'Mesita infantil', image: 'assets/images/products/bh-525/bh-525-mesita.webp', alt: 'Mesita infantil que forma parte de la periquera Ninino BH-525', position: '50% 50%' }
    ],
    highlights: [
      { title: 'Arnés de 5 puntos', text: 'Mayor seguridad y sujeción durante su uso.' },
      { title: 'Charola ajustable', text: 'Diferentes niveles para mayor comodidad.' }
    ],
    sku: 'NIN-PERIQUERA-BH525-GRI', barcode: '7503061922067', weight: '6.6 kg', boxedWeight: '7.4 kg', boxDimensions: '52 × 22 × 52 cm',
    images: {
      hero: { src: 'assets/images/products/bh-525/bh-525-hero.webp', small: 'assets/images/products/bh-525/bh-525-hero-640.webp', alt: 'Bebé sentado en la periquera Ninino BH-525', position: '50% 50%' },
      gallery: [
        { src: 'assets/images/products/bh-525/bh-525-medidas.webp', alt: 'Medidas verificadas de la periquera Ninino BH-525 en configuración alta, silla baja y mesa', position: '50% 50%', role: 'especificacion' },
        { src: 'assets/images/products/bh-525/bh-525-charola.webp', alt: 'Charola desmontable de la periquera Ninino BH-525', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-525/bh-525-arnes.webp', alt: 'Arnés de 5 puntos de la periquera Ninino BH-525', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-525/bh-525-mesa-silla.webp', alt: 'Periquera Ninino BH-525 configurada como silla baja y mesa infantil', position: '50% 50%', role: 'configuracion' }
      ]
    }
  },
  {
    slug: 'silla-escalonada', name: 'Silla escalonada', model: 'BH-524', tagline: 'Diseñada para acompañar su niñez', age: '10 meses – 5 años aprox.',
    keywords: ['silla escalonada', 'tippy trapp', 'crecedera', 'madera'],
    colors: [{ id: 'blanco', name: 'Blanco', hex: '#F2F0EC', image: 'assets/images/products/bh-524/bh-524-con-charola.webp' }],
    featuresTitle: '3 configuraciones de uso',
    features: [
      { name: 'Con charola', image: 'assets/images/products/bh-524/bh-524-con-charola.webp', alt: 'Silla escalonada Ninino BH-524 con charola', position: '50% 50%' },
      { name: 'Con asiento acolchado', image: 'assets/images/products/bh-524/bh-524-asiento-acolchado.webp', alt: 'Silla escalonada Ninino BH-524 con asiento acolchado', position: '50% 50%' },
      { name: 'Silla escalonada', image: 'assets/images/products/bh-524/bh-524-silla-escalonada.webp', alt: 'Silla escalonada Ninino BH-524 en su configuración de silla', position: '50% 50%' }
    ],
    highlights: [
      { title: 'Arnés de 5 puntos', text: 'Sujeción durante su uso.' },
      { title: 'Altura ajustable', text: 'Ideal para varias etapas y escenarios.' }
    ],
    sku: 'NIN-TIPPTRAPP-BH524-BLA', barcode: '7503061922012', weight: '9.8 kg', boxedWeight: '11.2 kg', boxDimensions: '85 × 43 × 13 cm',
    images: {
      hero: { src: 'assets/images/products/bh-524/bh-524-hero.webp', small: 'assets/images/products/bh-524/bh-524-hero-640.webp', alt: 'Niño sentado en la silla escalonada Ninino BH-524 junto a la mesa', position: '50% 40%' },
      gallery: [
        { src: 'assets/images/products/bh-524/bh-524-etapas.webp', alt: 'Etapas de uso de la silla escalonada Ninino BH-524', position: '50% 50%', role: 'configuracion' },
        { src: 'assets/images/products/bh-524/bh-524-medidas.webp', alt: 'Medidas verificadas de la silla escalonada Ninino BH-524', position: '50% 50%', role: 'especificacion' },
        { src: 'assets/images/products/bh-524/bh-524-charola.webp', alt: 'Detalle de la charola de la silla escalonada Ninino BH-524', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-524/bh-524-arnes.webp', alt: 'Detalle del arnés de la silla escalonada Ninino BH-524', position: '50% 50%', role: 'detalle' }
      ]
    }
  },
  {
    slug: 'banera-plegable', name: 'Bañera plegable', model: 'BH-327+212', modelAlt: 'BH-327', tagline: 'Perfecta para la hora del baño', age: '0 meses – 3 años aprox.',
    keywords: ['bañera', 'banera', 'tina', 'baño', 'plegable', 'bh-327'],
    colors: [
      { id: 'verde', name: 'Verde', hex: '#B9CC5E', sku: 'NIN-BATHTUB-BH327212-VER', barcode: '7503061922098', image: 'assets/images/products/bh-327/bh-327-verde.webp', alt: 'Bañera plegable Ninino BH-327 en color verde' },
      { id: 'rosa', name: 'Rosa', hex: '#E4B4CC', sku: 'NIN-BATHTUB-BH327212-ROS', barcode: '7503061922081', image: 'assets/images/products/bh-327/bh-327-rosa.webp', alt: 'Bañera plegable Ninino BH-327 en color rosa' },
      { id: 'amarillo', name: 'Amarillo', hex: '#F5C05C', sku: 'NIN-BATHTUB-BH327212-AMA', barcode: '7503061922074', image: 'assets/images/products/bh-327/bh-327-amarillo.webp', alt: 'Bañera plegable Ninino BH-327 en color amarillo' }
    ],
    featuresTitle: '3 variantes de color', features: [],
    highlights: [{ title: 'Plegable', text: 'Fácil de guardar.' }, { title: 'Cojín incluido', text: 'Una ayuda para su postura.' }],
    sku: 'Según variante', barcode: 'Según variante', weight: '1.4 kg', boxedWeight: '2.0 kg', boxDimensions: '49 × 10 × 81 cm',
    note: 'El modelo BH-327+212 corresponde al set de bañera; el peso y las medidas incluyen la pieza BH-212.',
    images: {
      hero: { src: 'assets/images/products/bh-327/bh-327-hero.webp', small: 'assets/images/products/bh-327/bh-327-hero-640.webp', alt: 'Bebé dentro de la bañera plegable Ninino en color amarillo', position: '50% 45%' },
      gallery: []
    }
  },
  {
    slug: 'escalera-wc', name: 'Escalera para WC', model: 'BH-153', tagline: 'Un paso más hacia su autonomía', age: '2+ años',
    keywords: ['escalera', 'wc', 'reductor', 'baño', 'entrenamiento'],
    colors: [
      { id: 'azul', name: 'Azul', hex: '#AFC6D8', sku: 'NIN-ESCALERA-BH153-AZU', barcode: '7503061922050', image: 'assets/images/products/bh-153/bh-153-azul.webp', alt: 'Escalera para WC Ninino BH-153 en color azul' },
      { id: 'rosa', name: 'Rosa', hex: '#EEB6C4', sku: 'NIN-ESCALERA-BH153-ROS', barcode: '7503061922043', image: 'assets/images/products/bh-153/bh-153-rosa.webp', alt: 'Escalera para WC Ninino BH-153 en color rosa' }
    ],
    featuresTitle: '2 variantes de color', features: [],
    highlights: [{ title: 'Material resistente', text: 'Materiales duraderos.' }, { title: 'Ajuste de altura', text: 'Se adapta a varios estilos de WC.' }],
    sku: 'Según variante', barcode: 'Según variante', weight: '1.7 kg', boxedWeight: '2.2 kg', boxDimensions: '32 × 13 × 40.2 cm',
    images: {
      hero: { src: 'assets/images/products/bh-153/bh-153-hero.webp', small: 'assets/images/products/bh-153/bh-153-hero-640.webp', alt: 'Niño usando la escalera para WC Ninino BH-153 en color azul', position: '55% 45%' },
      gallery: [
        { src: 'assets/images/products/bh-153/bh-153-asiento.webp', alt: 'Detalle del asiento ergonómico de la escalera para WC Ninino BH-153', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-153/bh-153-agarres.webp', alt: 'Detalle de los agarres laterales de la escalera para WC Ninino BH-153', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-153/bh-153-escalones.webp', alt: 'Detalle de los escalones antideslizantes de la escalera para WC Ninino BH-153', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-153/bh-153-protector.webp', alt: 'Detalle del protector frontal de la escalera para WC Ninino BH-153', position: '50% 50%', role: 'detalle' }
      ]
    }
  },
  {
    slug: 'scooter', name: 'Scooter', model: 'BH-810', tagline: 'Movimiento que se disfruta', age: '2+ años',
    keywords: ['scooter', 'montable', 'correpasillos', 'ruedas'],
    colors: [{ id: 'gris', name: 'Gris', hex: '#BFB6AC', image: 'assets/images/products/bh-810/bh-810-perfil.webp' }],
    featuresTitle: 'Funciones principales',
    features: [
      { name: 'Inclinación ergonómica', image: 'assets/images/products/bh-810/bh-810-perfil.webp', alt: 'Vista de perfil del scooter Ninino BH-810', position: '50% 50%' },
      { name: 'Botones con sonido', image: 'assets/images/products/bh-810/bh-810-botones.webp', alt: 'Detalle del volante con botones de sonido del scooter Ninino BH-810', position: '50% 50%' }
    ],
    highlights: [{ title: 'Giros 360°', text: '' }, { title: 'Llantas PU', text: 'Para un deslizamiento suave.' }],
    sku: 'NIN-SCOOTER-BH810-GRI', barcode: '7503061922029', weight: '3.2 kg', boxedWeight: '3.8 kg', boxDimensions: '70 × 31.5 × 39 cm',
    images: {
      hero: { src: 'assets/images/products/bh-810/bh-810-hero.webp', small: 'assets/images/products/bh-810/bh-810-hero-640.webp', alt: 'Niño montado en el scooter Ninino BH-810', position: '50% 55%' },
      gallery: [
        { src: 'assets/images/products/bh-810/bh-810-giro.webp', alt: 'Detalle del giro del volante del scooter Ninino BH-810', position: '50% 50%', role: 'detalle' },
        { src: 'assets/images/products/bh-810/bh-810-llanta.webp', alt: 'Detalle de la llanta de PU con luces del scooter Ninino BH-810', position: '50% 50%', role: 'detalle' }
      ]
    }
  },
  {
    slug: 'banera-termica', name: 'Bañera térmica', model: 'BH-221', tagline: 'Baños seguros y cómodos todos los días', age: '0 – 24 meses aprox.',
    keywords: ['bañera térmica', 'banera termica', 'termómetro', 'tina', 'baño'],
    colors: [{ id: 'gris', name: 'Gris', hex: '#C3C6C8', image: 'assets/images/products/bh-221/bh-221-respaldo.webp' }],
    featuresTitle: 'Funciones principales',
    features: [
      { name: 'Respaldo cómodo', image: 'assets/images/products/bh-221/bh-221-respaldo.webp', alt: 'Bebé recostado sobre el respaldo de la bañera térmica Ninino BH-221', position: '50% 50%' },
      { name: 'Plegable y compacta', image: 'assets/images/products/bh-221/bh-221-plegada.webp', alt: 'Bañera térmica Ninino BH-221 guardada plegada en la pared', position: '50% 50%' }
    ],
    highlights: [{ title: 'Termómetro digital', text: 'Monitorea la temperatura del agua al instante.' }, { title: 'Plegable y compacta', text: 'Fácil de guardar y transportar.' }],
    sku: 'NIN-BATHTUB-BH221-GRI', barcode: '7503061922036', weight: '0.6 kg', boxedWeight: '1.1 kg', boxDimensions: '30.5 × 9 × 54.5 cm',
    images: {
      hero: { src: 'assets/images/products/bh-221/bh-221-hero.webp', small: 'assets/images/products/bh-221/bh-221-hero-640.webp', alt: 'Bebé recostado en la bañera térmica Ninino BH-221 dentro de la tina', position: '50% 45%' },
      gallery: []
    }
  },
  {
    slug: 'periquera-plegable', name: 'Periquera plegable', model: 'BH-515', tagline: 'Práctica para cada comida', age: '6 meses – 2 años aprox.',
    keywords: ['periquera plegable', 'booster', 'silla de comer', 'portátil'],
    colors: [{ id: 'verde', name: 'Verde', hex: '#1F5F6B', image: 'assets/images/products/bh-515/bh-515-abierta.webp' }],
    featuresTitle: 'Funciones principales',
    features: [
      { name: 'Charola removible', image: 'assets/images/products/bh-515/bh-515-charola.webp', alt: 'Charola removible de la periquera plegable Ninino BH-515', position: '50% 50%' },
      { name: 'Asiento amplio', image: 'assets/images/products/bh-515/bh-515-abierta.webp', alt: 'Periquera plegable Ninino BH-515 abierta', position: '50% 50%' }
    ],
    highlights: [{ title: 'Arnés de 3 puntos', text: 'Sujeción ajustable durante su uso.' }, { title: 'Plegado compacto', text: 'Ocupa menos espacio al guardar.' }],
    sku: 'NIN-SCOM-BH515-VER', barcode: '7503061922005', weight: '2.3 kg', boxedWeight: '3.0 kg', boxDimensions: '43 × 14.5 × 44 cm',
    images: {
      hero: { src: 'assets/images/products/bh-515/bh-515-hero.webp', small: 'assets/images/products/bh-515/bh-515-hero-640.webp', alt: 'Bebé sentado en la periquera plegable Ninino BH-515', position: '50% 40%' },
      gallery: [
        { src: 'assets/images/products/bh-515/bh-515-plegada.webp', alt: 'Periquera plegable Ninino BH-515 completamente plegada', position: '50% 50%', role: 'producto' },
        { src: 'assets/images/products/bh-515/bh-515-transporte.webp', alt: 'Mamá trasladando la periquera plegable Ninino BH-515 ya plegada', position: '50% 50%', role: 'lifestyle' }
      ]
    }
  }
];