// Base de datos de productos (simulada)
const products = [
    {
        id: '1',
        name: 'Figura de Acción Spiderman',
        price: 250.00,
        image: 'img/spiderman.jpg',
        category: 'figuras',
        featured: true,
        description: 'Figura de acción de 15 cm con múltiples puntos de articulación.'
    },
    {
        id: '2',
        name: 'Juego de Mesa',
        price: 800.00,
        image: 'img/destreza.jpg',
        category: 'juegos',
        featured: false,
        description: 'Juego de estrategia para 3-4 jugadores. Construye y comercia en la isla de Catán.'
    },
    {
        id: '3',
        name: 'Auto de Carreras a Control Remoto',
        price: 450.00,
        image: 'img/auto.jpg',
        category: 'carros',
        featured: true,
        description: 'Coche de carreras deportivo con control de alta precisión. Batería recargable incluida.'
    },
    {
        id: '4',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/princesa.jpg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '5',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/lego.png',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '6',
        name: 'Pistola de Juguete',
        price: 180.00,
        image: 'img/pistola.jpg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
];

const productContainer = document.getElementById('product-container');
const featuredContainer = document.getElementById('featured-products-container');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// Función para renderizar los productos
function renderProducts(productsToRender, container) {
    container.innerHTML = ''; // Limpia el contenedor
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <a href="https://wa.me/527291080492?text=Hola,%20me%20interesa%20el%20producto%20'${encodeURIComponent(product.name)}'." 
               target="_blank" 
               class="whatsapp-button">
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
