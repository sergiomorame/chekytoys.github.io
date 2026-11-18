/* =============================================================================
 *  CHEKYTOYS · Catálogo de juguetes
 * -----------------------------------------------------------------------------
 *  Para agregar un juguete copia un bloque { ... } y cambia sus datos.
 *    name, price, image, category, description  -> obligatorios
 *    featured: true   -> aparece primero con la etiqueta "¡Nuevo!"
 *    stock: 0         -> se muestra como AGOTADO
 *    brand: 'Mattel'  -> (opcional) marca. Si no lo pones se detecta sola por
 *                        el nombre (Barbie, Nerf, Play-Doh, Hot Wheels...)
 *  Categorías: 'Muñecas y Cocinas', 'Juegos de Mesa', 'Figuras de Acción',
 *              'Carros, Pistas y Construcción', 'Play-Doh', 'Bebe'
 * ========================================================================== */

const STORE_CONFIG = {
  name: "Chekytoys",
  whatsappNumber: "527291080492", // código de país + número
  currency: "MXN"
};

// Base de datos de productos (simulada)
const products = [
    {
        id: '1',
        name: 'Barbie Ciclista',
        price: 650.00,
        image: 'img/1.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: '¡A rodar! Barbie lista para la aventura en bicicleta. Diversión sobre ruedas.'
    },
    {
        id: '1',
        name: 'Barbie Dentista',
        price: 600.00,
        image: 'img/2.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: '¡Sonrisas saludables! Barbie enseña la importancia de cuidar los dientes. Incluye accesorios.'
    },
    {
        id: '1',
        name: 'Princess Rosa',
        price: 320.00,
        image: 'img/3.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Hermosa muñeca Princesa Rosa. ¡Vive un cuento de hadas!'
    },
    {
        id: '1',
        name: 'Mermaid Rosa',
        price: 320.00,
        image: 'img/4.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Sirenita Rosa. ¡Magia bajo el mar! Perfecta para la hora del baño.'
    },
    {
        id: '1',
        name: 'Princess Azul',
        price: 320.00,
        image: 'img/5.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Elegante muñeca Princesa Azul. ¡Lista para el baile real!'
    },
    {
        id: '1',
        name: 'Mermaid Azul',
        price: 320.00,
        image: 'img/6.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Sirena Azul. Brillo y fantasía en el agua. ¡Colecciona las dos!'
    },
    {
        id: '1',
        name: 'Muñeca Florecita',
        price: 200.00,
        image: 'img/7.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Adorable muñeca con un lindo traje de flor. ¡Ternura y color!'
    },
    {
        id: '1',
        name: 'Nancy Playa',
        price: 250.00,
        image: 'img/8.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nancy, lista para el sol y la arena. ¡Tu mejor amiga para el verano!'
    },
    {
        id: '1',
        name: 'Baby Alive',
        price: 550.00,
        image: 'img/9.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: '¡Cuida a tu bebé! Muñeca interactiva. Come, moja y ríe de verdad.'
    },
    {
        id: '1',
        name: 'Barbie Color Reveal',
        price: 460.00,
        image: 'img/10.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: '¡Sorpresa de color! Descubre qué Barbie te tocó al meterla al agua.'
    },
    {
        id: '1',
        name: 'Muñeca Elsa',
        price: 320.00,
        image: 'img/11.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La Reina de Arendelle. ¡Canta y vive la magia de la nieve con Elsa!'
    },
    {
        id: '1',
        name: 'Muñeca Ana',
        price: 320.00,
        image: 'img/12.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La optimista Princesa Ana. ¡Aventuras congeladas y mucha diversión!'
    },
    {
        id: '1',
        name: 'Nenuco Conejito',
        price: 470.00,
        image: 'img/13.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco con un suave y tierno disfraz de conejo. ¡Súper abrazable!'
    },
    {
        id: '1',
        name: 'Nenuco Panda',
        price: 470.00,
        image: 'img/14.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco disfrazado de un adorable panda. ¡El más tierno de la colección!.'
    },
    {
        id: '1',
        name: 'Muñeca Rainbow',
        price: 490.00,
        image: 'img/15.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Arcoíris llena de color y estilo. ¡Moda y brillo!.'
    },
    {
        id: '1',
        name: 'Muñeca Beauty',
        price: 200.00,
        image: 'img/16.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Beauty. Vístela, péinala y crea looks increíbles.'
    },
    {
        id: '1',
        name: 'Nenuco Cumpleaños',
        price: 700.00,
        image: 'img/17.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco celebra su cumpleaños. ¡Incluye pastel y accesorios de fiesta!'
    },
    {
        id: '1',
        name: 'Nenuco Lagrimitas',
        price: 550.00,
        image: 'img/18.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco de verdad llora. ¡Cuídalo y dale mucho amor!'
    },
    {
        id: '1',
        name: 'Barbie Magic',
        price: 550.00,
        image: 'img/19.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La magia de Barbie. ¡Descubre su secreto! Incluye accesorios sorpresa.'
    },
    {
        id: '1',
        name: 'Nancy Hollywood',
        price: 1100.00,
        image: 'img/20.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: '¡Estrella de cine! Nancy lista para la alfombra roja y los flashes.'
    },
    {
        id: '1',
        name: 'Barbie Alberca',
        price: 550.00,
        image: 'img/21.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie en traje de baño. ¡Lista para saltar a la piscina y jugar!'
    },
    {
        id: '1',
        name: 'Princess Bella',
        price: 400.00,
        image: 'img/22.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Bella. ¡Vive la historia de la Bella y la Bestia!'
    },
    {
        id: '1',
        name: 'Nenuco Olaf',
        price: 500.00,
        image: 'img/23.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco con el divertido disfraz del muñeco de nieve Olaf. ¡Muy suave!'
    },
    {
        id: '1',
        name: 'Muñeca Winter',
        price: 180.00,
        image: 'img/26.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca de invierno con abrigo y accesorios para la nieve. ¡Elegancia invernal!'
    },
    {
        id: '1',
        name: 'Barbie Skipper',
        price: 500.00,
        image: 'img/27.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Hermana de Barbie. ¡Cuida y juega con la muñeca canguro Skipper!'
    },
    {
        id: '2',
        name: 'Nenuco Care',
        price: 900.00,
        image: 'img/28.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Set de cuidado completo para tu Nenuco. ¡Sé la mejor mamá o papá!'
    },
    {
        id: '2',
        name: 'Casa Bluey',
        price: 1000.00,
        image: 'img/29.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La casa familiar de Bluey para recrear las aventuras de la serie.'
    },
    {
        id: '2',
        name: 'Juego de Mesa Hijos vs Padres',
        price: 300.00,
        image: 'img/30.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: '¡Diversión familiar! Batalla de ingenio en el juego Hijos vs Padres.'
    },
    
    {
        id: '2',
        name: 'Pulgas Locas',
        price: 490.00,
        image: 'img/31.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Clásico juego de habilidad. ¡Atrapa las pulgas antes que nadie!'
    },
    {
        id: '2',
        name: 'Juego de Aventura',
        price: 300.00,
        image: 'img/32.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Emocionante juego de mesa. ¡Explora, arriésgate y gana!'
    },
    {
        id: '2',
        name: 'Juego destreza',
        price: 600.00,
        image: 'img/33.jpg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Desafía tus reflejos con este juego de destreza. ¡Ideal para toda la familia!'
    },
    {
        id: '3',
        name: 'Multijuegos',
        price: 220.00,
        image: 'img/34.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
         stock: 0, // 👈 AGOTADO
        description: 'Caja con varios juegos de mesa clásicos. ¡Diversión garantizada!'
    },
    {
        id: '4',
        name: 'Monopoly Gamer',
        price: 500.00,
        image: 'img/35.jpeg',
        category: 'Juegos de Mesa',
         stock: 0, // 👈 AGOTADOXDE4321`12345 V3
        featured: false,
        description: 'La versión gamer del Monopoly. ¡Compra, vende y juega en modo arcade!'
    },
    {
        id: '4',
        name: 'Multijuegos Disney',
        price: 220.00,
        image: 'img/36.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        stock: 0, // 👈 AGOTADO
        description: 'Clásicos juegos de mesa con tus personajes favoritos de Disney.'
    },
     {
        id: '4',
        name: 'Turista Disney',
        price: 220.00,
        image: 'img/37.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'El clásico Turista (Monopoly) con el mágico toque de Disney.'
    },
     {
        id: '4',
        name: 'Play-Doh Dentista',
        price: 380.00,
        image: 'img/38.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea divertidas muelas y dientes. ¡Sé un dentista con Play-Doh!'
    },
     {
        id: '4',
        name: 'Hedbanz',
        price: 300.00,
        image: 'img/39.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: '¡Adivina qué eres! El divertido juego de la banda en la cabeza.'
    },
     {
        id: '4',
        name: 'Peluche Bluey',
        price: 450.00,
        image: 'img/40.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'El suave y tierno peluche de Bluey. ¡Ideal para abrazar!'

    },
     {
        id: '4',
        name: 'Bright Start',
        price: 600.00,
        image: 'img/41.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Juguete de estimulación Bright Start. ¡Desarrollo y diversión!'
    },
     {
        id: '4',
        name: 'Nerf',
        price: 220.00,
        image: 'img/42.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'El clásico lanzador Nerf. ¡Apunta y lanza! Acción sin límites.'
    },
     {
        id: '4',
        name: 'Mascara Zurg',
        price: 400.00,
        image: 'img/43.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Máscara de Zurg, el villano de Toy Story. ¡Sé el Emperador Malvado!'
    },
     {
        id: '4',
        name: 'Nerf Dinosaurio',
        price: 260.00,
        image: 'img/44.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Lanzador Nerf con diseño de dinosaurio. ¡Poder jurásico!'
    }
    ,
     {
        id: '4',
        name: 'Set de Arte Baby Yoda',
        price: 65.00,
        image: 'img/45.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Kit de arte para pintar y crear con el adorable Baby Yoda (Grogu).'
    },
     {
        id: '4',
        name: 'Patin Dragon Ball',
        price: 550.00,
        image: 'img/46.jpg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Patín Scooter con diseño de Dragon Ball. ¡El más rápido de la galaxia!'
    },
     {
        id: '4',
        name: 'Spiderman',
        price: 220.00,
        image: 'img/47.jpg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Figura de acción del Hombre Araña. ¡Lanza telarañas y salva la ciudad!'
    }
    ,
     {
        id: '4',
        name: 'Gimnasio Delux',
        price: 1100.00,
        image: 'img/48.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Gimnasio de actividades de lujo para bebés. ¡Estimulación y juego!'
    }
    ,
     {
        id: '4',
        name: 'Nenuco Cuna',
        price: 1200.00,
        image: 'img/49.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Cuna para tu Nenuco. ¡Acuéstalo y arrúllalo!'
    },
     {
        id: '4',
        name: 'Silla bebé Baby Disney',
        price: 500.00,
        image: 'img/50.jpeg',
        category: 'Bebe',
        featured: false,
        description: '¡Ternura mágica!'
    },
     {
        id: '4',
        name: 'Nerf Trio',
        price: 195.00,
        image: 'img/51.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Set de 3 lanzadores Nerf. ¡Triple diversión y acción!'
    },
     {
        id: '4',
        name: 'Caja Dinosaurios',
        price: 440.00,
        image: 'img/52.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Caja con figuras variadas de dinosaurios y un tapete. ¡Aventura prehistórica!'
    }
    ,
     {
        id: '4',
        name: 'Nerf Dinosaurio',
        price: 300.00,
        image: 'img/53.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Lanzador Nerf grande con temática de dinosaurio. ¡Ruge la diversión!'
    }
    ,
     {
        id: '4',
        name: 'Dinosaurio',
        price: 200.00,
        image: 'img/54.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Figura de dinosaurio realista. ¡Colecciona todos los modelos!'
    }
    ,
     {
        id: '4',
        name: 'Movil Peluche',
        price: 1000.00,
        image: 'img/55.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Móvil para cuna con dulces peluches. ¡Música y relajación!'
    },
     {
        id: '4',
        name: 'Pista Dinosaurio',
        price: 750.00,
        image: 'img/56.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Arma tu propia pista con obstáculos de dinosaurios. ¡Carreras jurásicas!'
    },
     {
        id: '4',
        name: 'Play-Doh Sand c/u',
        price: 70.00,
        image: 'img/57.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Arena mágica Play-Doh. ¡Moldea sin ensuciar! (Precio por unidad).'
    },
     {
        id: '4',
        name: 'Orbeez',
        price: 70.00,
        image: 'img/58.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Perlas de agua Orbeez. ¡Sensoriales y divertidas!'
    },
     {
        id: '4',
        name: 'Personajes Bluey',
        price: 450.00,
        image: 'img/59.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Set de figuras de los personajes de Bluey. ¡Colecciónalos todos!'
    },
     {
        id: '4',
        name: 'Play-Doh animales',
        price: 550.00,
        image: 'img/60.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Set Play-Doh para crear divertidos animales de plastilina.'
    },
     {
        id: '4',
        name: 'Casa Ternurines',
        price: 400.00,
        image: 'img/61.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Casa de los Ternurines. ¡Muebles, figuras y mucha diversión en familia!'
    },
     {
        id: '4',
        name: 'Kinetic Sand',
        price: 190.00,
        image: 'img/62.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Arena cinética. ¡Nunca se seca! Moldea y juega sin parar.'
    },
     {
        id: '4',
        name: 'Ternurin Pastel',
        price: 230.00,
        image: 'img/63.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Figura de Ternurin con accesorios de cumpleanos'
    },
     {
        id: '4',
        name: 'Maleta Perrito',
        price: 500.00,
        image: 'img/64.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Maleta con un tierno perrito de juguete y accesorios para cuidarlo.'
    },
     {
        id: '4',
        name: 'Play-Doh Avion',
        price: 330.00,
        image: 'img/65.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea formas y figuras divertidas con el set Play-Doh Avión.'
    },
    {
        id: '4',
        name: 'Barbie con perrito',
        price: 600.00,
        image: 'img/66.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie lista para un paseo con su adorable perrito. ¡Amigos inseparables!'
    },
    {
        id: '4',
        name: 'Princess Rapunzel',
        price: 330.00,
        image: 'img/67.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La princesa de la larga cabellera. ¡Vive su mágica aventura con Rapunzel!'
    },
    {
        id: '4',
        name: 'Princess Cenicienta',
        price: 330.00,
        image: 'img/68.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Cenicienta. El sueño de cristal que se hizo realidad. ¡Magia y elegancia!'
    },
    {
        id: '4',
        name: 'Nerf Series Infinite 80x',
        price: 520.00,
        image: 'img/69.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Lanzador Nerf de gran capacidad. ¡80 dardos! Diversión infinita.'
    },
    {
        id: '4',
        name: 'Juego de Mesa Basta',
        price: 550.00,
        image: 'img/70.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: '¡Clásico de palabras! Juego Basta para desafiar tu agilidad mental y vocabulario.'
    },
    {
        id: '4',
        name: 'Nerft 10x',
        price: 450.00,
        image: 'img/71.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Set Nerf con 10 lanzadores. ¡Equipa a todo el equipo para la batalla!'
    },
    ,{
        id: '4',
        name: 'Play-Doh Perrito',
        price: 430.00,
        image: 'img/73.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea un simpático perrito y sus accesorios con la plastilina Play-Doh.'
    },
    {
        id: '4',
        name: 'Beauty Nail Art Set 2 en 1',
        price: 700.00,
        image: 'img/74.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Kit de arte de uñas 2 en 1. ¡Decora tus uñas y luce un estilo increíble!'
    },
    {
        id: '4',
        name: 'Beauty Nail Art Set 4 en 1',
        price: 700.00,
        image: 'img/75.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Mega kit de uñas 4 en 1. ¡Todas las herramientas para un salón profesional!'
    },
    {
        id: '4',
        name: 'Art Nail Studio',
        price: 300.00,
        image: 'img/76.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Tu propio estudio de diseño de uñas. ¡Crea looks únicos y glamurosos!'
    },
    {
        id: '4',
        name: 'Supermercado',
        price: 1580.00,
        image: 'img/77.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Juguete de supermercado. Aprende a comprar y vender.'
    },
    {
        id: '4',
        name: 'Maleta de Herramientas',
        price: 500.00,
        image: 'img/78.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Maleta portátil con todas las herramientas. ¡A reparar como un experto!'
    },
    {
        id: '4',
        name: 'Cocina de 63pzs',
        price: 1190.00,
        image: 'img/79.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Cocina infantil de 63 piezas. ¡Hornea, guisa y diviértete sin parar!'
    },
    {
        id: '4',
        name: 'Pista HotWheels City',
        price: 800.00,
        image: 'img/80.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Arma la ciudad de HotWheels. ¡A toda velocidad por las calles!'
    },
    {
        id: '4',
        name: 'Figuras de Accion Avanger',
        price: 250.00,
        image: 'img/81.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Figuras de acción de tus héroes Avengers favoritos. ¡Colecciona a todos!'
    },
    {
        id: '4',
        name: 'Pistola Nerft Elite Jr',
        price: 480.00,
        image: 'img/82.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: 'Pistola Nerf fácil de usar para los más pequeños. ¡Acción para todos!'
    },
    {
        id: '4',
        name: 'Set de Doctor de Mascotas',
        price: 480.00,
        image: 'img/83.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Set de Doctor de Mascotas. ¡Cuida y cura a tu peluche enfermo!'
    },
    {
        id: '4',
        name: '2 en 1 Shiny Bracelet',
        price: 700.00,
        image: 'img/84.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Crea pulseras brillantes. ¡Kit de joyería con doble diversión!'
    },
    {
        id: '4',
        name: 'Blocks Princess',
        price: 100.00,
        image: 'img/85.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Bloques de construcción para las princesas. ¡Imaginación al poder!'
    },
    {
        id: '4',
        name: 'Play-Doh Spiderman',
        price: 520.00,
        image: 'img/86.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea telarañas y figuras del Hombre Araña con Play-Doh.'
    },
    {
        id: '4',
        name: 'Barbie Ily Stitch',
        price: 800.00,
        image: 'img/87.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie inspirada en el adorable Stitch de Disney. ¡Moda y ternura!'
    },
    {
        id: '4',
        name: 'Beauty Nail Art Set 4 en 1',
        price: 700.00,
        image: 'img/88.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Mega kit de uñas 4 en 1. ¡Todas las herramientas para un salón profesional y glamuroso!'
    },
    {
        id: '4',
        name: 'Plush Pet Carriola',
        price: 570.00,
        image: 'img/89.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Carriola para llevar de paseo a tus peluches favoritos. ¡A cuidar!'
    },
    {
        id: '4',
        name: 'Barbie Cutie Oso',
        price: 230.00,
        image: 'img/90.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie disfrazada con un suave y adorable traje de oso. ¡Súper tierna!'
    },
    {
        id: '4',
        name: 'Pinypon Nieve',
        price: 1200.00,
        image: 'img/91.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñecas Pinypon listas para esquiar y jugar en la nieve.'
    },
    {
        id: '4',
        name: 'Pista Hotweels Stunt',
        price: 980.00,
        image: 'img/92.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Pista HotWheels con saltos y acrobacias increíbles. ¡Adrenalina pura!'
    },
    {
        id: '4',
        name: 'Mochila Herramientas',
        price: 450.00,
        image: 'img/93.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Mochila que se transforma en un taller de herramientas. ¡Llévalo a todas partes!'
    },
    {
        id: '4',
        name: 'Pista Moster Jam Loop',
        price: 520.00,
        image: 'img/94.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Pista Monster Jam con un looping espectacular. ¡Demuestra tus trucos!'
    },
    {
        id: '4',
        name: 'Set Dentista',
        price: 270.00,
        image: 'img/95.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Kit de dentista para jugar. ¡Aprende a cuidar los dientes de tus muñecos!'
    },
    {
        id: '4',
        name: 'Plush Pet Casita',
        price: 450.00,
        image: 'img/96.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Linda casita para tu mascota de peluche. ¡Su propio hogar!'
    },
    {
        id: '4',
        name: 'Set Cool Collection Nail',
        price: 350.00,
        image: 'img/97.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Set de uñas con los colores más geniales. ¡Crea un estilo cool!'
    },
    {
        id: '4',
        name: 'Play-Doh Helados',
        price: 500.00,
        image: 'img/98.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Máquina para crear deliciosos helados de plastilina Play-Doh.'
    },
     {
        id: '4',
        name: 'Play-Doh Postres',
        price: 530.00,
        image: 'img/99.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Hornea pasteles, cupcakes y postres con este dulce set Play-Doh.'
    },
     {
        id: '4',
        name: 'Set Grils 3 en 1',
        price: 700.00,
        image: 'img/100.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Set de belleza 3 en 1 para peinado, maquillaje y uñas.'
    },
     {
        id: '4',
        name: 'Set Hair chalk Salon',
        price: 350.00,
        image: 'img/101.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Kit de tizas de color para el cabello. ¡Cambia tu look al instante!'
    },
     {
        id: '4',
        name: 'Camion Mega Blocks',
        price: 620.00,
        image: 'img/102.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Kit de tizas de color para el cabello. ¡Cambia tu look al instante!'
    },
     {
        id: '4',
        name: 'Barbie Cutie Conejito',
        price: 230.00,
        image: 'img/103.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie disfrazada con un tierno y esponjoso traje de conejo.'
    },
     {
        id: '4',
        name: 'Cocina Chef con luz y sonido',
        price: 1490.00,
        image: 'img/104.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Cocina con efectos realistas: luz y sonidos de verdad. ¡Súper chef!'
    },
     {
        id: '4',
        name: 'Pista HotWeels Ruleta',
        price: 980.00,
        image: 'img/105.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Pista HotWheels con desafío de ruleta. ¡Prueba tu suerte y velocidad!'
    },
     {
        id: '4',
        name: 'Pista Paw Patrol',
        price: 520.00,
        image: 'img/106.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Pista de carreras de la Patrulla Canina. ¡Rescata y diviértete con Ryder!'
    },
     {
        id: '4',
        name: 'Juego de Mesa Operando',
        price: 600.00,
        image: 'img/107.jpeg',
        category: 'Juegos de Mesa',
        featured: false,
        description: 'Clásico juego Operando. ¡Ten pulso firme o el paciente protestará!'
    },
     {
        id: '4',
        name: 'Peluche con luz y sonido Ranita',
        price: 400.00,
        image: 'img/108.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Peluche de ranita que emite luces y sonidos dulces. ¡Muy relajante!'
    },
     {
        id: '4',
        name: 'Muñeca Lilo',
        price: 800.00,
        image: 'img/109.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'La pequeña de Hawái. ¡Vive las aventuras de Lilo y Stitch!'
    },
     {
        id: '4',
        name: 'Play-Doh Moto Pizza(montable)',
        price: 1300.00,
        image: 'img/110.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea formas y pizzas divertidas con el set Play-Doh Moto Pizza. Haz entregas personales en ella.'
    },
     {
        id: '4',
        name: 'Fabrica de jabón Zote',
        price: 600.00,
        image: 'img/111.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Crea tu propio jabón Zote con este divertido y científico kit.'
    },
     {
        id: '4',
        name: 'Sonajas Baby',
        price: 85.00,
        image: 'img/112.jpeg',
        category: 'Bebe',
        featured: false,
        description: 'Sonajas de colores para el bebé. ¡Estimulación temprana y diversión!'
    },
     {
        id: '4',
        name: 'Señora Cara de Papa',
        price: 240.00,
        image: 'img/113.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'El clásico de los clásicos. ¡Crea mil caras diferentes con la Sra. Papa!'
    },
     {
        id: '4',
        name: 'Nenuco Bañera',
        price: 1100.00,
        image: 'img/114.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Nenuco y su bañera. ¡A la hora del baño! Incluye accesorios.'
    },
     {
        id: '4',
        name: 'Play-Doh Animalitos',
        price: 170.00,
        image: 'img/115.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Set de Play-Doh para moldear animales y figuras.'
    },
     {
        id: '4',
        name: 'Barbie Viajera',
        price: 600.00,
        image: 'img/117.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Barbie lista para un viaje por el mundo. Incluye maleta y accesorios.'
    },
     {
        id: '4',
        name: 'Maleta Set Herramientas',
        price: 290.00,
        image: 'img/118.jpeg',
        category: 'Carros, Pistas y Construcción',
        featured: false,
        description: 'Maleta de herramientas compacta. ¡Perfecta para pequeños constructores!'
    },
     {
        id: '4',
        name: 'Princess Rapunzel',
        price: 530.00,
        image: 'img/119.jpeg',
        category: 'Muñecas y Cocinas',
        featured: false,
        description: 'Muñeca Rapunzel (otra versión). ¡Deja crecer su mágica cabellera!'
    },
     {
        id: '4',
        name: 'Robot dinosaurio',
        price: 380.00,
        image: 'img/121.jpeg',
        category: 'Figuras de Acción',
        featured: false,
        description: '¡Robot y dinosaurio en uno! Este carro se transforma para una aventura increíble.'
    },
     {
        id: '4',
        name: 'Play-Doh Autobus',
        price: 550.00,
        image: 'img/122.jpeg',
        category: 'Play-Doh',
        featured: false,
        description: 'Crea divertidas figuras con este set de Play-Doh con forma de autobús.'
    } 

];

/* =============================================================================
 *  CATEGORÍAS (emoji y colores de cada una)
 * ========================================================================== */
const CATEGORIES = [
  { name: "Muñecas y Cocinas",             label: "👗 Muñecas y Cocinas", tint: "bg-pink-50",   chip: "bg-pink-100 text-pink-700",    hover: "hover:bg-pink-50 hover:text-pink-600" },
  { name: "Juegos de Mesa",                label: "🎲 Juegos de Mesa",    tint: "bg-purple-50", chip: "bg-purple-100 text-purple-700", hover: "hover:bg-purple-50 hover:text-purple-600" },
  { name: "Figuras de Acción",             label: "🦸 Figuras de Acción", tint: "bg-orange-50", chip: "bg-orange-100 text-orange-700", hover: "hover:bg-orange-50 hover:text-orange-600" },
  { name: "Carros, Pistas y Construcción", label: "🏎️ Carros y Pistas",   tint: "bg-blue-50",   chip: "bg-blue-100 text-blue-700",    hover: "hover:bg-blue-50 hover:text-blue-600" },
  { name: "Play-Doh",                      label: "🎨 Play-Doh",          tint: "bg-amber-50",  chip: "bg-amber-100 text-amber-800",  hover: "hover:bg-amber-50 hover:text-amber-600" },
  { name: "Bebe",                          label: "🍼 Bebé",              tint: "bg-sky-50",    chip: "bg-sky-100 text-sky-700",      hover: "hover:bg-sky-50 hover:text-sky-600" }
];
const CATEGORY_DEFAULT = { label: "🧸 Juguetes", tint: "bg-slate-50", chip: "bg-slate-100 text-slate-700", hover: "hover:bg-sky-50 hover:text-cheky-blue" };

/* =============================================================================
 *  MARCAS: detección por nombre + colores e iconos
 * ========================================================================== */
const BRAND_RULES = [
  [/barbie/i, "Barbie"],
  [/nenuco/i, "Nenuco"],
  [/nancy/i, "Nancy"],
  [/baby alive/i, "Baby Alive"],
  [/play-?doh/i, "Play-Doh"],
  [/nerf/i, "Nerf"],
  [/hot ?whe?els|hotweels/i, "Hot Wheels"],
  [/bluey/i, "Bluey"],
  [/monopoly|operando|cara de papa/i, "Hasbro"],
  [/paw patrol/i, "Paw Patrol"],
  [/mon?ster jam/i, "Monster Jam"],
  [/mega ?blocks/i, "Mega Bloks"],
  [/kinetic sand/i, "Kinetic Sand"],
  [/orbeez/i, "Orbeez"],
  [/pinypon/i, "Pinypon"],
  [/bright start/i, "Bright Starts"],
  [/spiderman|avanger|avenger/i, "Marvel"],
  [/elsa|\bana\b|princess|disney|lilo|stitch|baby yoda|zurg/i, "Disney"],
  [/ternurin/i, "Ternurines"],
  [/dragon ball/i, "Dragon Ball"],
  [/zote/i, "Zote"]
];

const BRANDS_META = {
  "Todas":      { color: "bg-slate-900 text-white border-slate-900",   pillBg: "bg-slate-100 text-slate-700",   icon: "✨" },
  "Barbie":     { color: "bg-pink-500 text-white border-pink-500",     pillBg: "bg-pink-100 text-pink-700",     icon: "💖" },
  "Hot Wheels": { color: "bg-blue-600 text-white border-blue-600",     pillBg: "bg-blue-100 text-blue-700",     icon: "🔥" },
  "Nerf":       { color: "bg-orange-500 text-white border-orange-500", pillBg: "bg-orange-100 text-orange-700", icon: "🎯" },
  "Play-Doh":   { color: "bg-amber-400 text-slate-900 border-amber-400", pillBg: "bg-amber-100 text-amber-800", icon: "🎨" },
  "Bluey":      { color: "bg-sky-500 text-white border-sky-500",       pillBg: "bg-sky-100 text-sky-700",       icon: "🐾" },
  "Nenuco":     { color: "bg-rose-400 text-white border-rose-400",     pillBg: "bg-rose-100 text-rose-700",     icon: "🍼" },
  "Disney":     { color: "bg-indigo-500 text-white border-indigo-500", pillBg: "bg-indigo-100 text-indigo-700", icon: "🏰" },
  "Nancy":      { color: "bg-fuchsia-500 text-white border-fuchsia-500", pillBg: "bg-fuchsia-100 text-fuchsia-700", icon: "🌸" },
  "Baby Alive": { color: "bg-pink-400 text-white border-pink-400",     pillBg: "bg-pink-100 text-pink-700",     icon: "👶" },
  "Marvel":     { color: "bg-red-600 text-white border-red-600",       pillBg: "bg-red-100 text-red-700",       icon: "🦸" },
  "Hasbro":     { color: "bg-blue-500 text-white border-blue-500",     pillBg: "bg-blue-100 text-blue-700",     icon: "🎲" },
  "Paw Patrol": { color: "bg-red-500 text-white border-red-500",       pillBg: "bg-red-100 text-red-700",       icon: "🐶" },
  "Monster Jam":{ color: "bg-lime-500 text-slate-900 border-lime-500", pillBg: "bg-lime-100 text-lime-800",     icon: "🚚" },
  "Mega Bloks": { color: "bg-emerald-500 text-white border-emerald-500", pillBg: "bg-emerald-100 text-emerald-700", icon: "🧱" },
  "Kinetic Sand": { color: "bg-yellow-400 text-slate-900 border-yellow-400", pillBg: "bg-yellow-100 text-yellow-800", icon: "🏖️" },
  "Orbeez":     { color: "bg-violet-500 text-white border-violet-500", pillBg: "bg-violet-100 text-violet-700", icon: "🫧" },
  "Pinypon":    { color: "bg-teal-500 text-white border-teal-500",     pillBg: "bg-teal-100 text-teal-700",     icon: "⛄" },
  "Bright Starts": { color: "bg-green-500 text-white border-green-500", pillBg: "bg-green-100 text-green-700", icon: "🌟" },
  "Ternurines": { color: "bg-purple-500 text-white border-purple-500", pillBg: "bg-purple-100 text-purple-700", icon: "🧁" },
  "Dragon Ball":{ color: "bg-orange-400 text-white border-orange-400", pillBg: "bg-orange-100 text-orange-700", icon: "🐉" },
  "Zote":       { color: "bg-pink-300 text-slate-900 border-pink-300", pillBg: "bg-pink-100 text-pink-700",     icon: "🧼" }
};
const BRAND_DEFAULT = { color: "bg-slate-700 text-white border-slate-700", pillBg: "bg-slate-100 text-slate-700", icon: "🎁" };

/* =============================================================================
 *  PREPARAR DATOS
 * ========================================================================== */
// Quita huecos accidentales en la lista (por ejemplo una coma doble ,,)
for (let i = products.length - 1; i >= 0; i--) if (!products[i]) products.splice(i, 1);

products.forEach((p, i) => {
  p.uid = i; // identificador único interno
  if (!p.brand) {
    const rule = BRAND_RULES.find(([re]) => re.test(p.name));
    p.brand = rule ? rule[1] : "";
  }
  p.soldOut = p.stock === 0;
});

const brandCounts = {};
products.forEach(p => { if (p.brand) brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1; });
const BRAND_LIST = Object.keys(brandCounts).sort((a, b) => brandCounts[b] - brandCounts[a]);

const catMeta = name => CATEGORIES.find(c => c.name === name) || { ...CATEGORY_DEFAULT, name };
const brandMeta = name => BRANDS_META[name] || BRAND_DEFAULT;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const normalize = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function formatPrice(amount) {
  return `$${amount.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${STORE_CONFIG.currency}`;
}

/* =============================================================================
 *  ESTADO
 * ========================================================================== */
const state = {
  selectedBrand: "Todas",
  selectedCategory: "Todas",
  searchQuery: "",
  sortBy: "featured",
  hideSoldOut: false,
  cart: loadCart() // [{ uid, quantity }]
};

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("chekytoys-cart") || "[]");
    return saved.filter(item => products[item.uid] && products[item.uid].name === item.name);
  } catch (e) { return []; }
}
function saveCart() {
  try { localStorage.setItem("chekytoys-cart", JSON.stringify(state.cart)); } catch (e) { /* sin almacenamiento */ }
}

/* =============================================================================
 *  BARRA DE MARCAS
 * ========================================================================== */
function renderBrandBar() {
  const container = document.getElementById("brandFilterBar");
  const brands = ["Todas", ...BRAND_LIST];

  container.innerHTML = brands.map(brand => {
    const meta = brandMeta(brand);
    const isActive = state.selectedBrand === brand;
    const activeClasses = isActive
      ? `${meta.color} shadow-md scale-[1.03]`
      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200";
    const count = brand === "Todas" ? products.length : brandCounts[brand];

    return `
      <button type="button" data-brand="${esc(brand)}"
        class="brand-btn shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 font-extrabold text-sm transition-all cursor-pointer ${activeClasses}">
        <span class="text-base">${meta.icon}</span>
        <span>${esc(brand)}</span>
        <span class="text-[11px] font-bold opacity-70">${count}</span>
      </button>`;
  }).join("");
}

/* =============================================================================
 *  BARRA DE CATEGORÍAS
 * ========================================================================== */
const CAT_ACTIVE = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all bg-cheky-blue text-white shadow-sm";
const CAT_IDLE = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-slate-100 text-slate-600";

function renderCategoryBar() {
  const container = document.getElementById("categoryFilterBar");
  const items = [{ name: "Todas", label: "Todas las Categorías", hover: "hover:bg-sky-50 hover:text-cheky-blue" }, ...CATEGORIES];
  container.innerHTML = items.map(c => {
    const active = state.selectedCategory === c.name;
    return `<button type="button" data-category="${esc(c.name)}" class="${active ? CAT_ACTIVE : `${CAT_IDLE} ${c.hover}`}">${esc(c.label)}</button>`;
  }).join("");
}

/* =============================================================================
 *  FILTRAR Y ORDENAR
 * ========================================================================== */
function getFilteredProducts() {
  const q = normalize(state.searchQuery.trim());
  const filtered = products.filter(p => {
    const matchBrand = state.selectedBrand === "Todas" || p.brand === state.selectedBrand;
    const matchCategory = state.selectedCategory === "Todas" || p.category === state.selectedCategory;
    const matchSearch = !q || normalize(`${p.name} ${p.brand} ${p.description} ${p.category}`).includes(q);
    const matchStock = !state.hideSoldOut || !p.soldOut;
    return matchBrand && matchCategory && matchSearch && matchStock;
  });

  if (state.sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (state.sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (state.sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
  else filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  // Los agotados siempre al final
  filtered.sort((a, b) => a.soldOut - b.soldOut);
  return filtered;
}

/* =============================================================================
 *  TARJETAS DE PRODUCTO
 * ========================================================================== */
function productBadge(p) {
  if (p.soldOut) return `<span class="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow-sm">Agotado</span>`;
  if (p.featured) return `<span class="absolute top-3 left-3 bg-cheky-yellow text-slate-900 text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow-sm">¡Nuevo!</span>`;
  return "";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const list = getFilteredProducts();

  resultsCount.textContent = `Mostrando ${list.length} ${list.length === 1 ? "juguete" : "juguetes"}`;

  if (list.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  grid.innerHTML = list.map(p => {
    const bm = brandMeta(p.brand);
    const cm = catMeta(p.category);
    return `
      <article class="toy-card bg-white rounded-[1.75rem] border-2 border-slate-100 hover:border-sky-200 shadow-toy hover:shadow-toy-hover transition-all duration-300 flex flex-col overflow-hidden group ${p.soldOut ? "sold-out" : ""}">

        <!-- Foto del juguete -->
        <div class="relative aspect-square overflow-hidden cursor-pointer ${cm.tint}" onclick="openProductModal(${p.uid})">
          <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"
               class="toy-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ${productBadge(p)}
          <span class="absolute top-3 right-3 ${cm.chip} text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
            ${esc(cm.label)}
          </span>
        </div>

        <!-- Cuerpo de la tarjeta -->
        <div class="p-5 flex-1 flex flex-col">
          <div class="flex items-center justify-between gap-2 mb-2">
            ${p.brand ? `<span class="inline-flex items-center gap-1 ${bm.pillBg} text-xs font-extrabold px-2.5 py-0.5 rounded-lg"><span>${bm.icon}</span><span>${esc(p.brand)}</span></span>` : "<span></span>"}
            ${p.soldOut ? "" : `<span class="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">Apartado disp.</span>`}
          </div>

          <h3 onclick="openProductModal(${p.uid})"
              class="font-display text-lg font-bold text-slate-800 group-hover:text-cheky-blue transition-colors leading-snug mb-1.5 cursor-pointer">
            ${esc(p.name)}
          </h3>

          <p class="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-4 flex-1">${esc(p.description)}</p>

          <div class="pt-3 border-t border-slate-100">
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-[11px] font-bold text-slate-400 block">Precio:</span>
                <span class="font-display text-2xl font-bold ${p.soldOut ? "text-slate-400 line-through" : "text-slate-900"}">${formatPrice(p.price)}</span>
              </div>
              <button type="button" onclick="openProductModal(${p.uid})"
                class="text-xs font-extrabold text-cheky-blue hover:text-cheky-purple underline underline-offset-2">
                Ver detalles
              </button>
            </div>

            ${p.soldOut ? `
            <button type="button" disabled
              class="w-full bg-slate-100 text-slate-400 font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-not-allowed">
              <i class="fa-solid fa-ban"></i><span>Agotado</span>
            </button>` : `
            <div class="grid grid-cols-5 gap-2">
              <button type="button" onclick="addToCart(${p.uid})"
                class="btn-toy col-span-4 bg-cheky-yellow hover:bg-amber-300 text-slate-900 font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-btn-3d border border-amber-400 flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-plus-circle text-cheky-coral"></i>
                <span>Agregar a Lista</span>
              </button>
              <button type="button" onclick="quickWhatsAppProduct(${p.uid})"
                class="btn-toy col-span-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-btn-3d flex items-center justify-center text-lg"
                title="Pedir este juguete por WhatsApp" aria-label="Pedir por WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </button>
            </div>`}
          </div>
        </div>
      </article>`;
  }).join("");
}

/* =============================================================================
 *  CONTROLES DE FILTRO
 * ========================================================================== */
function refresh() {
  renderBrandBar();
  renderCategoryBar();
  renderProducts();
}

function setBrandFilter(brand) {
  state.selectedBrand = brand;
  refresh();
}

function selectBrandFromFooter(brand) {
  setBrandFilter(brandCounts[brand] ? brand : "Todas");
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

function resetAllFilters() {
  state.selectedBrand = "Todas";
  state.selectedCategory = "Todas";
  state.searchQuery = "";
  state.sortBy = "featured";
  state.hideSoldOut = false;

  document.getElementById("navSearchInput").value = "";
  document.getElementById("mobileSearchInput").value = "";
  document.getElementById("sortSelect").value = "featured";
  document.getElementById("hideSoldOut").checked = false;
  refresh();
}

/* =============================================================================
 *  MODAL DE DETALLES
 * ========================================================================== */
function openProductModal(uid) {
  const p = products[uid];
  if (!p) return;
  const bm = brandMeta(p.brand);
  const cm = catMeta(p.category);
  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="${cm.tint} flex items-center justify-center relative overflow-hidden p-4 min-h-[260px]">
      <img src="${esc(p.image)}" alt="${esc(p.name)}" class="toy-img w-full h-full max-h-[60vh] object-contain ${p.soldOut ? "grayscale opacity-60" : ""}" />
      ${productBadge(p).replace("top-3 left-3", "top-4 left-4")}
    </div>
    <div class="p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          ${p.brand ? `<span class="${bm.pillBg} text-xs font-extrabold px-3 py-1 rounded-lg">${bm.icon} ${esc(p.brand)}</span>` : ""}
          <span class="${cm.chip} text-xs font-bold px-2.5 py-1 rounded-lg">${esc(cm.label)}</span>
        </div>

        <h3 class="font-display text-2xl font-bold text-slate-900 mb-2">${esc(p.name)}</h3>
        <p class="font-display text-3xl font-bold ${p.soldOut ? "text-slate-400 line-through" : "text-cheky-blue"} mb-4">${formatPrice(p.price)}</p>

        <p class="text-sm text-slate-600 leading-relaxed mb-4">${esc(p.description)}</p>

        <div class="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 mb-5">
          <p class="text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-1.5">Compra fácil:</p>
          <ul class="space-y-1 text-xs text-slate-700 font-medium">
            <li class="flex items-center gap-2"><i class="fa-solid fa-star text-amber-500 text-[10px]"></i> Confirma disponibilidad por WhatsApp</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-star text-amber-500 text-[10px]"></i> Disponible en Sistema de Apartado</li>
          </ul>
        </div>
      </div>

      ${p.soldOut ? `
      <div class="space-y-2.5">
        <p class="text-sm font-bold text-rose-600">Este juguete está agotado por ahora.</p>
        <button type="button" onclick="askRestock(${p.uid})"
          class="btn-toy w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-2xl shadow-btn-3d flex items-center justify-center gap-2 text-sm">
          <i class="fa-brands fa-whatsapp text-lg"></i><span>Preguntar cuándo llega</span>
        </button>
      </div>` : `
      <div class="space-y-2.5">
        <button type="button" onclick="addToCart(${p.uid}); closeProductModal();"
          class="btn-toy w-full bg-cheky-yellow hover:bg-amber-300 text-slate-900 font-extrabold py-3 px-4 rounded-2xl shadow-btn-3d border border-amber-400 flex items-center justify-center gap-2 text-sm">
          <i class="fa-solid fa-bag-shopping text-cheky-coral"></i>
          <span>Agregar a Mi Lista de Pedido</span>
        </button>
        <button type="button" onclick="quickWhatsAppProduct(${p.uid})"
          class="btn-toy w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-2xl shadow-btn-3d flex items-center justify-center gap-2 text-sm">
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>Apartar o Comprar por WhatsApp</span>
        </button>
      </div>`}
    </div>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

/* =============================================================================
 *  MI LISTA (carrito)
 * ========================================================================== */
function addToCart(uid) {
  const p = products[uid];
  if (!p || p.soldOut) return;
  const existing = state.cart.find(item => item.uid === uid);
  if (existing) existing.quantity += 1;
  else state.cart.push({ uid, name: p.name, quantity: 1 });
  updateCartUI();
  showToast(`¡"${esc(p.name)}" agregado a tu lista! 🎁`);
}

function updateCartQuantity(uid, delta) {
  const index = state.cart.findIndex(item => item.uid === uid);
  if (index === -1) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) state.cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  saveCart();
  const badge = document.getElementById("cartBadge");
  const container = document.getElementById("cartItemsContainer");
  const totalEl = document.getElementById("cartTotalAmount");
  const footer = document.getElementById("cartFooter");

  badge.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-14 px-4">
        <div class="w-16 h-16 rounded-full bg-sky-100 text-cheky-sky flex items-center justify-center mx-auto mb-3 text-2xl">🧸</div>
        <h4 class="font-display text-lg font-bold text-slate-800 mb-1">Tu lista está vacía</h4>
        <p class="text-xs text-slate-500 mb-5">Agrega los juguetes que te interesan para cotizarlos o apartarlos juntos.</p>
        <button type="button" onclick="toggleCartDrawer(false)" class="btn-toy bg-cheky-blue text-white text-xs font-bold px-5 py-2.5 rounded-xl">
          Explorar Juguetes
        </button>
      </div>`;
    footer.classList.add("hidden");
    return;
  }

  footer.classList.remove("hidden");
  let grandTotal = 0;

  container.innerHTML = state.cart.map(item => {
    const p = products[item.uid];
    const subtotal = p.price * item.quantity;
    grandTotal += subtotal;
    return `
      <div class="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
        <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 ${catMeta(p.category).tint}">
          <img src="${esc(p.image)}" alt="" class="toy-img w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <span class="text-[10px] font-extrabold uppercase text-cheky-blue block">${esc(p.brand || catMeta(p.category).label)}</span>
          <h5 class="font-bold text-sm text-slate-800 truncate">${esc(p.name)}</h5>
          <span class="text-xs font-extrabold text-slate-600">${formatPrice(subtotal)}</span>
        </div>
        <div class="flex items-center gap-1.5 bg-slate-100 rounded-xl p-1">
          <button type="button" onclick="updateCartQuantity(${p.uid}, -1)" class="w-7 h-7 rounded-lg bg-white text-slate-700 font-bold hover:bg-rose-50 hover:text-rose-600" aria-label="Quitar uno">-</button>
          <span class="w-6 text-center text-xs font-extrabold">${item.quantity}</span>
          <button type="button" onclick="updateCartQuantity(${p.uid}, 1)" class="w-7 h-7 rounded-lg bg-white text-slate-700 font-bold hover:bg-sky-50 hover:text-sky-600" aria-label="Agregar uno">+</button>
        </div>
      </div>`;
  }).join("");

  totalEl.textContent = formatPrice(grandTotal);
}

function toggleCartDrawer(open) {
  const backdrop = document.getElementById("cartDrawerBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (open) {
    backdrop.classList.remove("hidden");
    setTimeout(() => {
      backdrop.classList.remove("opacity-0");
      drawer.classList.remove("translate-x-full");
    }, 10);
  } else {
    backdrop.classList.add("opacity-0");
    drawer.classList.add("translate-x-full");
    setTimeout(() => backdrop.classList.add("hidden"), 300);
  }
}

/* =============================================================================
 *  WHATSAPP
 * ========================================================================== */
function openDirectWhatsApp(customMessage) {
  const msg = customMessage || "¡Hola Chekytoys! 👋 Estuve viendo su catálogo en línea y me gustaría recibir información sobre sus juguetes.";
  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function quickWhatsAppProduct(uid) {
  const p = products[uid];
  if (!p) return;
  const msg = `¡Hola Chekytoys! 🎁 Me interesa este juguete de su catálogo:\n\n• *${p.name}*${p.brand ? ` (${p.brand})` : ""}\n• Precio: *${formatPrice(p.price)}*\n\n¿Lo tienen disponible para compra o apartado?`;
  openDirectWhatsApp(msg);
}

function askRestock(uid) {
  const p = products[uid];
  if (p) openDirectWhatsApp(`¡Hola Chekytoys! 👋 Vi que *${p.name}* está agotado. ¿Cuándo lo vuelven a tener?`);
}

function sendCartToWhatsApp() {
  if (state.cart.length === 0) return;
  const selectedMode = document.querySelector('input[name="orderMode"]:checked')?.value || "Compra Directa";
  let total = 0;
  const lines = state.cart.map((item, idx) => {
    const p = products[item.uid];
    const sub = p.price * item.quantity;
    total += sub;
    return `${idx + 1}. *${p.name}*${p.brand ? ` (${p.brand})` : ""} x${item.quantity} — ${formatPrice(sub)}`;
  });

  const message = [
    "¡Hola *Chekytoys*! 🧸✨ Me gustaría cotizar los siguientes juguetes de su catálogo:",
    "",
    ...lines,
    "",
    `💰 *Total Estimado:* ${formatPrice(total)}`,
    `📋 *Modalidad elegida:* ${selectedMode}`,
    "",
    "¿Me confirman disponibilidad por favor?"
  ].join("\n");

  openDirectWhatsApp(message);
}

/* =============================================================================
 *  AVISO (toast)
 * ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "bg-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 transition-all duration-300";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

/* =============================================================================
 *  INICIO
 * ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("heroBrandCount").textContent = `+${BRAND_LIST.length}`;
  document.getElementById("year").textContent = new Date().getFullYear();

  refresh();
  updateCartUI();

  // Clic en marcas y categorías
  document.getElementById("brandFilterBar").addEventListener("click", e => {
    const btn = e.target.closest(".brand-btn");
    if (btn) setBrandFilter(btn.dataset.brand);
  });
  document.getElementById("categoryFilterBar").addEventListener("click", e => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    state.selectedCategory = btn.dataset.category;
    refresh();
  });

  // Buscadores sincronizados (escritorio y celular)
  const navSearch = document.getElementById("navSearchInput");
  const mobileSearch = document.getElementById("mobileSearchInput");
  const onSearch = (value, other) => {
    state.searchQuery = value;
    other.value = value;
    renderProducts();
  };
  navSearch.addEventListener("input", e => onSearch(e.target.value, mobileSearch));
  mobileSearch.addEventListener("input", e => onSearch(e.target.value, navSearch));
  [navSearch, mobileSearch].forEach(input => input.addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  }));

  // Orden y agotados
  document.getElementById("sortSelect").addEventListener("change", e => {
    state.sortBy = e.target.value;
    renderProducts();
  });
  document.getElementById("hideSoldOut").addEventListener("change", e => {
    state.hideSoldOut = e.target.checked;
    renderProducts();
  });

  // Cerrar modal al hacer clic fuera o con Esc
  document.getElementById("productModal").addEventListener("click", closeProductModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeProductModal(); toggleCartDrawer(false); }
  });
});
