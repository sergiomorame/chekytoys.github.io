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
         stock: 0, // 👈 AGOTADO
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
        category: 'juegos',
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

const productContainer = document.getElementById('product-container');
const featuredContainer = document.getElementById('featured-products-container');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// Función para renderizar los productos
/*function renderProducts(productsToRender, container) {
    container.innerHTML = ''; // Limpia el contenedor
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            
            <img src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <a href="https://wa.me/527291080492?text=Quisiera%20comprar%20el%20producto:%20'${encodeURIComponent(product.name)}'.%20%C2%BFEst%C3%A1%20disponible?." 
               target="_blank" 
               class="whatsapp-button">
               <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
            </a>
        `;
        container.appendChild(productCard);
    });
}*/
function renderProducts(productsToRender, container) {
    container.innerHTML = '';

    productsToRender.forEach(product => {
        const isOutOfStock = product.stock === 0;

        const productCard = document.createElement('div');
        productCard.className = `product-card ${isOutOfStock ? 'sin-stock' : ''}`;

        productCard.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onclick="openImageModal('${product.image}')">

                ${isOutOfStock ? `<span class="agotado">AGOTADO</span>` : ''}
            </div>

            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>

            <a href="https://wa.me/527291080492?text=Quisiera%20comprar%20el%20producto:%20'${encodeURIComponent(product.name)}'.%20%C2%BFEst%C3%A1%20disponible?." 
               target="_blank" 
               class="whatsapp-button ${isOutOfStock ? 'disabled' : ''}">
               <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
            </a>
        `;

        container.appendChild(productCard);
    });
}


// Renderiza los productos destacados y todos los productos al cargar la página
window.onload = () => {
    const featuredProducts = products.filter(p => p.featured);
    renderProducts(featuredProducts, featuredContainer);
    renderProducts(products, productContainer);
};

// Funcionalidad de búsqueda y filtro
searchInput.addEventListener('input', (e) => {
    filterAndSearch(e.target.value.toLowerCase(), categoryFilter.value);
});

categoryFilter.addEventListener('change', (e) => {
    filterAndSearch(searchInput.value.toLowerCase(), e.target.value);
});

function filterAndSearch(searchTerm, category) {
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    renderProducts(filteredProducts, productContainer);
}
// Funciones para abrir y cerrar el modal de imagen
function openImageModal(src) {
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImage");
  expandedImg.src = src;
  modal.style.display = "block";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}
