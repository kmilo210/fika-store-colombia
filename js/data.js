/* =========================================================================
   FIKA STORE — DATOS DEL CATÁLOGO
   =========================================================================
   Este es el ÚNICO archivo que necesitas editar para:
   - Crear o renombrar categorías (colecciones)
   - Agregar, editar o eliminar productos
   - Configurar ciudades y valores de envío
   - Editar reseñas de clientes y logos de métodos de pago

   No necesitas tocar el HTML, CSS ni el resto del JS.
   Lee el README.md para instrucciones paso a paso con ejemplos.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) CATEGORÍAS / COLECCIONES
------------------------------------------------------------------------- */
const CATEGORIES = [
  { slug: "cuadros-parejas",  name: "Cuadros para Parejas",  image: "images/Banner_Cat_Parejas_2.png" },
  { slug: "cuadros-albumes",  name: "Cuadros de Álbumes",    image: "images/Banner_Álbumes.png" },
  { slug: "cuadros-diplomas", name: "Cuadros Diplomas",      image: "images/Banner_Diplomas.png" },
  { slug: "cuadros-mama",     name: "Cuadros para Mamá",     image: "images/Banner_Mamá.png" },
  { slug: "cuadros-papa",     name: "Cuadros para Papá",     image: "images/Banner_Papá.png" }
];

/* -------------------------------------------------------------------------
   2) PRODUCTOS
   -------------------------------------------------------------------------
   - id: identificador único (no repetir, ej: "p11")
   - name: nombre del producto
   - price: precio en pesos, solo número
   - category: debe coincidir EXACTO con un "slug" de CATEGORIES
   - images: LISTA de fotos del producto (mínimo 1). La primera es la
     imagen principal que se ve en las tarjetas y galerías.
   - description: texto de la página del producto
   - bestseller: true/false → aparece en "Los más vendidos"
------------------------------------------------------------------------- */
const PRODUCTS = [


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Parejas
   
  ------------------------------------------------------------------------- */
  {
    id: "1001",
    name: "Cuadro con Foto y Canción Spotify",
    price: 34000,
    category: "cuadros-parejas",
    images: [
      "images/Parejas/M1/1001_Ikea_M1.png",
      "images/Parejas/M4/1001_Ikea_M4.png",
      "images/MedidasCuadroIkea.png"
    ],
    description: "Convierte una canción especial en un recuerdo único. Este cuadro personalizado combina tu foto favorita con la canción y artista que elijas, creando un detalle original y emotivo para regalar. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• Título de la canción y artista.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "1002",
    name: "Cuadro con Canción y Frase",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1002_Ikea_M1.png", "images/Parejas/M4/1002_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Haz de una canción y una foto un recuerdo inolvidable. Este cuadro personalizado combina tu fotografía favorita, la canción que elijas y una frase especial para crear un regalo único y emotivo. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• Título de la canción y artista.\n• 1 frase corta.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1003",
    name: "Cuadro Collage Corazón",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1003_Ikea_M1.png", "images/Parejas/M4/1003_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne hasta 16 de tus fotos favoritas, acompañadas de los nombres, una fecha importante y un mensaje corto para crear un detalle único y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres.\n• Fecha especial.\n• 1 mensaje corto.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "1004",
    name: "Cuadro Fecha + 3 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1004_Ikea_M1.png", "images/Parejas/M4/1004_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle sencillo y lleno de significado para celebrar una fecha especial. Este cuadro personalizado combina tres fotografías con una fecha importante, creando un recuerdo único para conservar esos momentos para siempre. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• Fecha especial.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1005",
    name: "Cuadro Fecha + 4 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1005_Ikea_M1.png", "images/Parejas/M4/1005_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo único para celebrar el amor y una fecha especial. Este cuadro personalizado reúne cuatro fotografías de la pareja, su fecha especial y sus nombres, creando un detalle romántico para conservar sus mejores momentos. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 4 fotos.\n• Fecha especial.\n• Nombres de la pareja.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1006",
    name: "Cuadro Fecha + 8 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1006_Ikea_M1.png", "images/Parejas/M4/1006_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Celebra su historia de amor con un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne ocho fotografías, una fecha importante y un mensaje especial para crear un detalle romántico y único. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n• Fecha especial.\n• 1 mensaje.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1007",
    name: "Cuadro Iniciales + 3 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1007_Ikea_M1.png", "images/Parejas/M4/1007_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar una conexión única. Este cuadro personalizado combina tres fotografías con las iniciales de dos personas, creando un recuerdo sencillo, elegante y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• 2 letras iniciales.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1008",
    name: "Cuadro Buscador de Google",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1008_Ikea_M1.png", "images/Parejas/M4/1008_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo personalizado inspirado en tus momentos más especiales. Este cuadro combina seis fotografías con un título único, creando un detalle original y emotivo para regalar a alguien especial. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 6 fotos.\n• 1 título.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1009",
    name: "Cuadro Calendario #1",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1009_Ikea_M1.png", "images/Parejas/M4/1009_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Haz de una fecha especial un recuerdo inolvidable. Este cuadro personalizado combina tu fotografía favorita con la fecha más importante para ti, resaltada en un diseño de calendario elegante y emotivo. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• 1 fecha especial.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "1010",
    name: "Cuadro Calendario #2",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1010_Ikea_M1.png", "images/Parejas/M4/1010_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Convierte una fecha especial en un recuerdo único para celebrar el amor. Este cuadro personalizado combina una fotografía especial, una fecha importante y una frase corta en un diseño elegante y emotivo. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• 1 fecha especial.\n• Nombres de la pareja.\n• 1 frase corta.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1011",
    name: "Cuadro Collage Calendario",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1011_Ikea_M1.png", "images/Parejas/M4/1011_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Cuenta la historia de tu amor a través de tus recuerdos favoritos. Este cuadro personalizado reúne hasta 18 fotografías y una fecha especial, creando un collage único para recordar esos momentos que hacen parte de su historia. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 18 fotos.\n• 1 fecha especial.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1012",
    name: "Cuadro Collage Canción",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1012_Ikea_M1.png", "images/Parejas/M4/1012_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle lleno de recuerdos y música para celebrar el amor. Este cuadro personalizado reúne hasta 16 fotografías, los nombres de la pareja y la canción que quieren dedicar, creando un regalo único y especial. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres de la pareja.\n• Título de la canción a dedicar.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1013",
    name: "Cuadro Frase + 12 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1013_Ikea_M1.png", "images/Parejas/M4/1013_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo lleno de momentos especiales para celebrar a esa persona que llegó para mejorar tu vida. Este cuadro personalizado reúne hasta 12 fotografías y un mensaje corto, creando un regalo único y lleno de amor. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 12 fotos.\n• 1 mensaje corto.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1014",
    name: "Cuadro Infinito Calendario",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1014_Ikea_M1.png", "images/Parejas/M4/1014_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Celebra el amor con un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne ocho fotografías, los nombres de la pareja, una fecha importante y una frase corta, creando un regalo único y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n• Los dos nombres.\n• 1 fecha especial.\n• 1 frase corta.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1015",
    name: "Cuadro InstaLove con Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1015_Ikea_M1.png", "images/Parejas/M4/1015_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un pedacito de su propio InstaLove. Este cuadro personalizado recrea el estilo de un perfil de Instagram para convertir sus recuerdos y su historia de amor en un detalle único y original. ❤️📱\n\n📸 Para personalizarlo necesitamos:\n\n• 7 fotos.\n• 1 fecha especial.\n• Nombres de la pareja \n• Tiempo que lleva la relación.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1016",
    name: "Cuadro Superhéroes de Amor",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1016_Ikea_M1.png", "images/Parejas/M4/1016_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un amor digno de una historia de superhéroes. Este cuadro personalizado combina tus mejores recuerdos con un diseño inspirado en Marvel, creando un regalo original para celebrar un amor que puede con todo. ❤️🦸‍♂️🦸‍♀️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: true,
    seo: false
  },
  {
    id: "1017",
    name: "Cuadro Mensaje + 3 Fotos",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1017_Ikea_M1.png", "images/Parejas/M4/1017_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo para celebrar una historia de amor y todos los momentos que han compartido. Este cuadro personalizado combina tus fotografías favoritas con un mensaje especial y una fecha importante, creando un regalo romántico y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• 1 mensaje.\n• 1 fecha especial.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1018",
    name: "Cuadro Noticia de Amor",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1018_Ikea_M1.png", "images/Parejas/M4/1018_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Una noticia de amor que merece ser contada. Este cuadro personalizado presenta su historia como una portada especial, combinando sus mejores recuerdos, creando un detalle romántico y único. ❤️📰\n\n📸 Para personalizarlo necesitamos:\n\n• 2 fotos.\n• Nombres de la pareja.\n• 1 fecha especial.\n• 1 canción para dedicar.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "1019",
    name: "Cuadro Significado de Amor",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1019_Ikea_M1.png", "images/Parejas/M4/1019_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un diseño elegante para convertir sus mejores recuerdos en una historia de amor. Este cuadro personalizado reúne nueve fotografías y un mensaje especial que puedes cambiar para hacerlo completamente único. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 9 fotos.\n• 1 mensaje personalizado.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1020",
    name: "Cuadro Corazón + Canción Spotify",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1020_Ikea_M1.png", "images/Parejas/M4/1020_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Un recuerdo lleno de amor, fotografías y música. Este cuadro personalizado reúne los mejores momentos de la pareja junto con una canción para dedicar, creando un detalle único y romántico. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres de la pareja.\n• 1 fecha especial.\n• 1 canción para dedicar.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "1021",
    name: "Cuadro Estilo Netflix",
    price: 34000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1021_Ikea_M1.png", "images/Parejas/M4/1021_Ikea_M4.png", "images/MedidasCuadroIkea.png"],
    description: "Convierte su historia de amor en una producción digna de Netflix. Este cuadro personalizado recrea el estilo de una plataforma de streaming, combinando sus fotografías, nombres y un mensaje especial para crear un regalo original y único. ❤️🎬\n\n📸 Para personalizarlo necesitamos:\n\n• 7 fotos.\n• Nombres de la pareja.\n• 1 mensaje.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: false
  },


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Mamá
   
  ------------------------------------------------------------------------- */
  {
    id: "mama-01",
    name: "Cuadro Para Mamá REF-01",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_01_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 1 Foto.\n• Nombre de la mamá \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-02",
    name: "Cuadro Para Mamá REF-02",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_02_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-03",
    name: "Cuadro Para Mamá REF-03",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_03_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-04",
    name: "Cuadro Para Mamá REF-04",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_04_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-05",
    name: "Cuadro Para Mamá REF-05",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_05_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-06",
    name: "Cuadro Para Mamá REF-06",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_06_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-07",
    name: "Cuadro Para Mamá REF-07",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_07_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 1 Foto. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-08",
    name: "Cuadro Para Mamá REF-08",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_08_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Nombre de la mamá \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-09",
    name: "Cuadro Para Mamá REF-09",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_09_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Nombre de la mamá \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-10",
    name: "Cuadro Para Mamá REF-10",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_10_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 3 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-11",
    name: "Cuadro Para Mamá REF-11",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_11_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 8 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-12",
    name: "Cuadro Para Mamá REF-12",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_12_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 5 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-13",
    name: "Cuadro Para Mamá REF-13",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_14_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-14",
    name: "Cuadro Para Mamá REF-14",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_15_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 11 Fotos. \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-15",
    name: "Cuadro Para Mamá REF-15",
    price: 34000,
    category: "cuadros-mama",
    images: ["images/Mamá/M3/Mamá_16_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Mensaje Personalizado \n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },

  /* -------------------------------------------------------------------------
   
  Categoria: Diplomas
   
  ------------------------------------------------------------------------- */
  {
    id: "diploma-mama-01",
    name: "Diploma a la Mejor Mamá",
    price: 34000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_1.png", "images/MedidasCuadroIkea.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá. \n• Nombre de quien entrega el diploma.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "diploma-mama-02",
    name: "Diploma Reconocimiento Mamá",
    price: 34000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_2.png", "images/MedidasCuadroIkea.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "diploma-mama-foto",
    name: "Diploma Mejor Mamá con Foto",
    price: 34000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_Foto.png", "images/MedidasCuadroIkea.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá.\n• 1 foto.\n• Nombre de quien entrega el diploma.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Papá
   
  ------------------------------------------------------------------------- */
  {
    id: "papa-01",
    name: "Cuadro Para Papá REF-01",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_01_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 3 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-02",
    name: "Cuadro Para Papá REF-02",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_02_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-03",
    name: "Cuadro Para Papá REF-03",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_03_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-04",
    name: "Cuadro Para Papá REF-04",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_04_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-05",
    name: "Cuadro Para Papá REF-05",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_05_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 12 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-06",
    name: "Cuadro Para Papá REF-06",
    price: 34000,
    category: "cuadros-papa",
    images: ["images/Papá/M3/Papá_06_M3.png", "images/MedidasCuadroIkea.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n\n📏 Medidas: 24 × 33 cm\n⚒️ Materiales: Madera sintética y acrílico protector.\n🚚 Envío: 2 a 5 días hábiles.",
    bestseller: false,
    seo: true
  },

  





];

/* -------------------------------------------------------------------------
   3) CIUDADES Y VALORES DE ENVÍO
   -------------------------------------------------------------------------
   Esta es tu "base de datos" de ciudades. Agrega, edita o elimina las
   ciudades a las que despachas, con el valor del envío según la forma de
   pago del envío (anticipado o contraentrega). El carrito usa esta lista
   para calcular el costo automáticamente según lo que elija el cliente.
   - name: nombre de la ciudad (se muestra en el selector)
   - shippingPrepaid: costo de envío si el cliente paga el envío anticipado
   - shippingCOD: costo de envío si el cliente paga el envío contraentrega
------------------------------------------------------------------------- */
const CITIES = [
  { name: "Bogotá",       shippingPrepaid: 16500, shippingCOD: 18500 },
  { name: "Medellín",     shippingPrepaid: 10500, shippingCOD: 12500 },
  { name: "Cali",         shippingPrepaid: 10000, shippingCOD: 10000 },
  { name: "Barranquilla", shippingPrepaid: 16500, shippingCOD: 18500 },
  { name: "Cartagena",    shippingPrepaid: 16500, shippingCOD: 18500 },
  { name: "Bucaramanga",  shippingPrepaid: 16500, shippingCOD: 18500 },
  { name: "Pereira",      shippingPrepaid: 16500, shippingCOD: 18500 },
  { name: "Caldas Antioquia", shippingPrepaid: 10500, shippingCOD: 12500 },
  { name: "Otra ciudad",  shippingPrepaid: 16500, shippingCOD: 18500 }
];

/* -------------------------------------------------------------------------
   4) MÉTODOS DE PAGO (sección "Pagos seguros" en el Inicio)
   -------------------------------------------------------------------------
   Reemplaza el "logo" por la ruta de tu imagen real cuando la tengas
   (guárdala en la carpeta images/, por ejemplo images/logo-nequi.png).
------------------------------------------------------------------------- */
const PAYMENT_METHODS = [
  { name: "Nequi",        logo: "images/LogosPagos/Nequi_Logo_2.png" },
  { name: "Bancolombia",  logo: "images/LogosPagos/Bancolombia_Logo.png" },
  { name: "Daviplata",    logo: "images/LogosPagos/Daviplata_Logo.png" },
  { name: "Bre-B",        logo: "images/LogosPagos/Bre-B_Logo.png" },
  { name: "PayPal",       logo: "images/LogosPagos/Paypal_Logo.png" }
];

/* -------------------------------------------------------------------------
   5) RESEÑAS DE CLIENTES (sección "Lo que dicen nuestros clientes")
   -------------------------------------------------------------------------
   - stars: número del 1 al 5
   - photo: foto del cliente (opcional, puedes dejar el placeholder)
------------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Mariana C.",
    photo: "images/reviewer-1.svg",
    stars: 5,
    comment: "El cuadro quedó hermoso, la calidad superó lo que esperaba y llegó en buen tiempo. ¡Totalmente recomendados!"
  },
  {
    name: "Julián R.",
    photo: "images/reviewer-2.svg",
    stars: 5,
    comment: "Pedí un cuadro para el cumpleaños de mi mamá y le encantó. La atención por WhatsApp fue súper rápida."
  },
  {
    name: "Andrea L.",
    photo: "images/reviewer-3.svg",
    stars: 5,
    comment: "Muy buen producto y llegó a tiempo a mi ciudad. Lo volvería a pedir sin duda."
  }
];

/* -------------------------------------------------------------------------
   6) DATOS GENERALES DEL NEGOCIO
------------------------------------------------------------------------- */
const STORE = {
  name: "Fika Store Colombia",
  logo: "images/LogoFikaStore.svg",
  shippingText: "Cuadros Personalizados con Envíos a Colombia ",
  whatsappNumber: "573159159677", // sin "+" y sin espacios
  instagram: "fika_store_col",
  tiktok: "fika_store_col",
  bannerImage: "images/Banner_Inicio_Fika.png",
  bannerTitle: "Cuadros que cuentan tu historia",
  bannerSubtitle: "Personalizados, hechos con amor",
  codTitle: "Valor del Envío Contraentrega",
  codText: "Manejamos envíos a toda Colombia con la opción de pago contraentrega del envío: Pagas el valor del envío cuando recibes tu pedido en la puerta de tu casa"
};
