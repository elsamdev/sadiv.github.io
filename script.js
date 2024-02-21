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


  ///// limite de letras en titulos y cuerpos
const titleElement = document.querySelector('.post-principal-container-titulo');
//const descriptionElement = document.querySelector('.post-principal-container-desc');
const titleLimit = 80; // Límite de caracteres para el título
const descriptionLimit = 200; // Límite de caracteres para la descripción

titleElement.textContent = truncateText(titleElement.textContent, titleLimit);
//descriptionElement.textContent = truncateText(descriptionElement.textContent, descriptionLimit);

function truncateText(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';;
  }
  return text;
}

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

