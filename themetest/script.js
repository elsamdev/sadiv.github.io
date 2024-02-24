const searchInput = document.getElementById('search-input');
const searchIcon = document.querySelector('.icon-burger-search');
const menuBtn = document.querySelector('.menu');
const menuContent = document.querySelector('.menu-content');
const closeBtn = document.querySelector('.close-btn');
searchInput.addEventListener('focus', function() {
  searchIcon.classList.add('fade-out');
  if (searchInput.value === '') {
    fade('icon-burger-search', 'icon-burger-close')
  }else{
    searchIcon.className = '';
    searchIcon.classList.add('icon-burger-close');
  }
});

searchInput.addEventListener('blur', function() {
  if (searchInput.value === '') {
    fade('icon-burger-close', 'icon-burger-search')
  }
  
});

searchInput.addEventListener('input', function() {
  if (searchInput.value === '') {
    fade('icon-burger-close', 'icon-burger-search')
  }
});

searchIcon.addEventListener('click', function() {
  if (searchIcon.classList.contains('icon-burger-close')) {
    fade('icon-burger-close', 'icon-burger-search');
    searchInput.value = '';
  }
});


function fade(salida,entrada){
  setTimeout(function() {
    searchIcon.classList.replace(salida, entrada);
    searchIcon.classList.remove('fade-out');
    searchIcon.classList.add('fade-in');
    setTimeout(function() {
      searchIcon.classList.remove('fade-in');
    }, 100); 
  }, 100); 


}
menuBtn.addEventListener('click', function() {
    menuContent.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function() {
    menuContent.classList.remove('active');
  });


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      menuContent.classList.remove('active');
    }
  });

  // document.querySelector(".more-tags").addEventListener("click", function() {
  //   var ds = document.querySelector(".modal");
  //   ds.classList.add("showmodal");
  //   document.querySelector(".CloseViewB").addEventListener("click", function() {
  //     ds.classList.remove("showmodal");
  //   });
  // });

//carrusel


document.addEventListener("DOMContentLoaded", function() {
  var carouselContainer = document.querySelector(".carousel-container");
  var carouselItems = carouselContainer.querySelectorAll(".carousel-item");
  var dotsContainer = carouselContainer.querySelector(".dots-container");
  var dots = dotsContainer.querySelectorAll(".dot");
  var currentIndex = 0;
  var intervalId;
  showItem(currentIndex);
  function showItem(index) {
    carouselItems.forEach(function(item) {
      item.classList.remove("active");
    });

    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });

    carouselItems[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextItem() {
    currentIndex++;

    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }

    showItem(currentIndex);
  }

  function startInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextItem, 5000);
  }

  function restartInterval() {
    clearInterval(intervalId);
    startInterval();
  }

  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      currentIndex = index;
      showItem(currentIndex);
      restartInterval();
    });
  });

  startInterval();
});

const moreTagsIcons = document.querySelectorAll('.more-tags');
const tagsContainers = document.querySelectorAll('.tags');
const titles = document.querySelectorAll('.blog-card .post-principal-container-titulo');
const imgCard = document.querySelectorAll('.blog-card img');

  
  moreTagsIcons.forEach((icon, index) => {
    
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      if (tagsContainers[index].classList.contains('show-tags')) {
        deleteClassTag();
      }else {
        deleteClassTag();
        tagsContainers[index].classList.toggle('show-tags');
        titles[index].classList.toggle('show-tittle');
        imgCard[index].classList.toggle('blog-card-brightness');
      }
    });
  
    icon.addEventListener('blur', () => {
      deleteClassTag();
    });

  });
  
  function deleteClassTag() {
    tagsContainers.forEach(container => {
      container.classList.remove('show-tags');
    });
  
    titles.forEach(title => {
      title.classList.remove('show-tittle');
    });
  
    imgCard.forEach(card => {
      card.classList.remove('blog-card-brightness');
    });
  }
  
  function addClassTag(index) {
    tagsContainers[index].classList.toggle('show-tags');
    titles[index].classList.toggle('show-tittle');
    imgCard[index].classList.toggle('blog-card-brightness');
  }
  





//// paginacion 

// Obtén todas las cards y la paginación
const cards = document.querySelectorAll('.blog-card');
const pagination = document.querySelector('.pagination');
const pagesContainer = document.querySelector('.pages');

// Número de cards por página
const cardsPerPage = 2;

// Obtiene el valor del parámetro de página de la URL
const urlParams = new URLSearchParams(window.location.search);
let currentPage = parseInt(urlParams.get('page')) || 1;

// Calcula el número total de páginas
const totalPages = Math.ceil(cards.length / cardsPerPage);

// Función para mostrar las cards de la página actual
function showPage(page) {
  // Calcula el índice inicial y final de las cards a mostrar
  console.log(page+ " " +totalPages)
  if(page == 1){
    previousLink.classList.add('active');
  }else if(page == totalPages ){
    nextLink.classList.add('active');
  }
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;

  // Recorre todas las cards y muestra u oculta según la página actual
  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}
const previousLink = document.querySelector('.previous');
const nextLink = document.querySelector('.next');

// Función para generar los números de página y agregar eventos de clic
function generatePageNumbers() {
  pagesContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.classList.add('page');

    if (i === currentPage) {
      pageLink.classList.add('active');
    }

    

    pageLink.addEventListener('click', function(e) {
      e.preventDefault();
      const newPage = parseInt(this.textContent);
      updatePageParam(newPage);
    });

    pagesContainer.appendChild(pageLink);
  }
}

// Muestra la página actual al cargar la página y genera los números de página
showPage(currentPage);
generatePageNumbers();

// Actualiza el valor del parámetro de página en la URL y recarga la página al hacer clic en los enlaces de paginación

previousLink.addEventListener('click', function(e) {
  e.preventDefault();
  const newPage = currentPage - 1;
  if (newPage >= 1) {
    updatePageParam(newPage);
  }
});

nextLink.addEventListener('click', function(e) {
  e.preventDefault();
  const newPage = currentPage + 1;
  if (newPage <= totalPages) {
    updatePageParam(newPage);
  }
});

// Función para actualizar el valor del parámetro de página en la URL y recargar la página
function updatePageParam(page) {

  const url = new URL(window.location.href);
  url.searchParams.set('page', page);
  window.location.href = url;
}


// modo noche


var modoNocheBtn = document.getElementById("modoNocheBtn");
var body = document.body;
var html = document.documentElement;
var menuItems = document.getElementsByClassName("menu-items");
var searcItems = document.getElementsByClassName("search-container")
// Verificar el estado del modo noche en el almacenamiento local
var modoNocheActivado = localStorage.getItem("modoNocheActivado");

// Si existe un estado guardado, aplicar el modo noche
if (modoNocheActivado === "true") {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.add("modoNoche-secundario");
    
  }
  for (var i = 0; i < searcItems.length; i++) {
    searcItems[i].classList.toggle("modoNoche-secundario");
  }
    body.classList.toggle("modoNoche");
    html.classList.toggle("modoNoche");
}

modoNocheBtn.addEventListener("click", function() {
  // Alternar la clase y guardar el estado en el almacenamiento local
  html.classList.toggle("modoNoche");
  body.classList.toggle("modoNoche");
  modoNocheActivado = body.classList.contains("modoNoche");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("modoNoche-secundario");
  }

  for (var i = 0; i < searcItems.length; i++) {
    searcItems[i].classList.toggle("modoNoche-secundario");
  }
  localStorage.setItem("modoNocheActivado", modoNocheActivado);
});