let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

function showSlide(index) {
    const carouselContainer = document.querySelector('.carousel-container');
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Cambiar la imagen cada 5 segundos (5000 ms)
setInterval(nextSlide, 5000);

// Función para mostrar los productos según la categoría seleccionada
function mostrarProductos(categoria) {
    const productosContainer = document.getElementById('productos');
    
    // Limpiar el contenido actual
    productosContainer.innerHTML = '';

    // Definir los productos para cada categoría
    const productos = {
        bebidas: [
            { img: 'img/refresco.jpg', descripcion: 'Refresco de cola, 500 ml.' },
            { img: 'img/jugo.jpg', descripcion: 'Jugo de naranja natural, 1L.' }
        ],
        carnes: [
            { img: 'img/carne1.jpg', descripcion: 'Carne de res premium, 1kg.' },
            { img: 'img/pollo.jpg', descripcion: 'Pechuga de pollo sin hueso, 500g.' }
        ],
        lacteos: [
            { img: 'img/leche.jpg', descripcion: 'Leche entera, 1L.' },
            { img: 'img/queso.jpg', descripcion: 'Queso manchego, 500g.' }
        ],
        verduras: [
            { img: 'img/tomate.jpg', descripcion: 'Tomate fresco, 1kg.' },
            { img: 'img/lechuga.jpg', descripcion: 'Lechuga orgánica, 300g.' }
        ],
        snacks: [
            { img: 'img/papas.jpg', descripcion: 'Papas fritas, 150g.' },
            { img: 'img/chocolates.jpg', descripcion: 'Chocolate amargo, 100g.' }
        ]
    };

    // Obtener los productos correspondientes a la categoría seleccionada
    const productosSeleccionados = productos[categoria];

    // Generar HTML para cada producto
    productosSeleccionados.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.img}" alt="${producto.descripcion}">
                <p>${producto.descripcion}</p>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });
}
// nosotros
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.about-block');

    window.addEventListener('scroll', function() {
        blocks.forEach(block => {
            const blockPosition = block.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (blockPosition < screenPosition) {
                block.classList.add('show'); // Añadir clase 'show' para activar la animación
            }
        });
    });
});


//menu
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (totalSlides > 0) {
        function showSlide(index) {
            const carouselContainer = document.querySelector('.carousel-container');
            const slideWidth = slides[0].clientWidth;
            carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Cambia de imagen cada 3 segundos
        setInterval(nextSlide, 3000);
    }
});

// hamburguesa
// Selecciona el ícono del menú y el menú
const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');
let isMenuOpen = false; // Variable para controlar el estado del menú

// Agrega un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    // Alterna la clase 'active' en el menú para mostrarlo o ocultarlo
    if (!isMenuOpen) {
        menu.classList.add('active'); // Abre el menú
        isMenuOpen = true;
    } else {
        menu.classList.remove('active'); // Cierra el menú
        isMenuOpen = false;
    }
});

// Cierra el menú si se hace clic fuera de él (para mejor usabilidad)
window.addEventListener('click', (e) => {
    if (isMenuOpen && !menuIcon.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        isMenuOpen = false;
    }
});


