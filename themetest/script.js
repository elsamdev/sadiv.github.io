const searchInput = document.getElementById('search-input');
const searchIcon = document.querySelector('.fa-search');
const menuBtn = document.querySelector('.menu');
const menuContent = document.querySelector('.menu-content');
const closeBtn = document.querySelector('.close-btn');
searchInput.addEventListener('focus', function() {
  searchIcon.classList.add('fade-out');
  if (searchInput.value === '') {
    fade('fa-search', 'fa-times')
  }else{
    searchIcon.className = '';
    searchIcon.classList.add('fas');
    searchIcon.classList.add('fa-times');
  }
});

searchInput.addEventListener('blur', function() {
  if (searchInput.value === '') {
    fade('fa-times', 'fa-search')
  }
  
});

searchInput.addEventListener('input', function() {
  if (searchInput.value === '') {
    fade('fa-times', 'fa-search')
  }
});

searchIcon.addEventListener('click', function() {
  if (searchIcon.classList.contains('fa-times')) {
    fade('fa-times', 'fa-search');
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
  
  icon.addEventListener('click', () => {
    tagsContainers[index].classList.toggle('show-tags');
    titles[index].classList.toggle('show-tittle');
    imgCard[index].classList.toggle('blog-card-brightness');
  });
});




//// paginacion 


// Obtén todas las cards y la paginación
const cards = document.querySelectorAll('.blog-card');
const pagination = document.querySelector('.pagination');

// Número de cards por página
const cardsPerPage = 2;

// Calcula el número total de páginas
const totalPages = Math.ceil(cards.length / cardsPerPage);
console.log(totalPages);
// Función para mostrar las cards de la página actual
function showPage(page) {
  // Calcula el índice inicial y final de las cards a mostrar
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

// Muestra la primera página al cargar la página
showPage(1);

// Agrega eventos de clic a los enlaces de paginación
const previousLink = document.querySelector('.previous');
const nextLink = document.querySelector('.next');

previousLink.addEventListener('click', function(e) {
  e.preventDefault();
  const currentPage = parseInt(pagination.dataset.page);
  if (currentPage > 1) {

    pagination.dataset.page = currentPage - 1;
    showPage(currentPage - 1);
  }
});

nextLink.addEventListener('click', function(e) {
  e.preventDefault();
  const currentPage = 1;
  console.log(currentPage)
  if (currentPage < totalPages) {
    pagination.dataset.page = currentPage + 1;
    showPage(currentPage + 1);
  }
});