// Base de datos de productos (simulada)
const products = [
    {
        id: '1',
        name: 'Barbie ciclista',
        price: 350.00,
        image: 'img/1.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Barbie magic',
        price: 350.00,
        image: 'img/2.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Barbie dentista',
        price: 350.00,
        image: 'img/3.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Princess',
        price: 320.00,
        image: 'img/4.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Princess mermaid',
        price: 320.00,
        image: 'img/5.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 320.00,
        image: 'img/6.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 320.00,
        image: 'img/7.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/8.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/9.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/10.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/11.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/12.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/13.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/14.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/15.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/16.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/17.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/18.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/19.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/20.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/21.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/22.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/23.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/24.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/25.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/26.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '1',
        name: 'Muñeca Princesa del Reino',
        price: 350.00,
        image: 'img/27.jpeg',
        category: 'muñecas',
        featured: false,
        description: 'Hermosa muñeca con vestido brillante y accesorios para el cabello.'
    },
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/28.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/29.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/30.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/31.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/32.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '2',
        name: 'Juego de Construcción Lego',
        price: 900.00,
        image: 'img/33.jpg',
        category: 'juegos',
        featured: false,
        description: 'Caja con 1,000 piezas para construir todo lo que imagines. Incluye manual de ideas.'
    },
    {
        id: '3',
        name: 'Pistola de Juguete',
        price: 180.00,
        image: 'img/34.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
    {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/35.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
    {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/36.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/37.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/38.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/39.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/40.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/41.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/42.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/43.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/44.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/45.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/46.jpg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/47.jpg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/48.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/49.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/50.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/51.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/52.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/53.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/54.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    }
    ,
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/55.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/56.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/57.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/58.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/59.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/60.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/61.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/62.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/63.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/64.jpeg',
        category: 'juegos',
        featured: false,
        description: 'Pistola con dardos de goma espuma, segura para los niños.'
    },
     {
        id: '4',
        name: 'Patin',
        price: 180.00,
        image: 'img/65.jpeg',
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
            
            <img src="${product.image}" alt="${product.name}" onclick="openImageModal('${product.image}')">
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
