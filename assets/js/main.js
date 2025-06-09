/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* search show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* search hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
     loginContent = document.getElementById('login-content')
/* login show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* login hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
        spaceBetween: -32,
    }
  }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1150: {
        slidesPerView: 4,
        centeredSlides: false,
    }
  }
})
/*Botão de curtida*/
const heartButtons = document.querySelectorAll('.featured__actions button:nth-child(1)');

heartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('i');
    if (icon.classList.contains('ri-heart-3-line')) {
      icon.classList.remove('ri-heart-3-line');
      icon.classList.add('ri-heart-3-fill');
    } else {
      icon.classList.remove('ri-heart-3-fill');
      icon.classList.add('ri-heart-3-line');
    }
  });
});
/*cart*/

    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');

    cartIcon.addEventListener('click', () => {
      cartSidebar.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
      cartSidebar.classList.remove('active');
    });

    // Fechar a sidebar ao clicar fora dela (opcional)
    window.addEventListener('click', (e) => {
      if (cartSidebar.classList.contains('active') && !cartSidebar.contains(e.target) && e.target !== cartIcon) {
        cartSidebar.classList.remove('active');
      }
    });

 function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.featured__card');
      const title = card.getAttribute('data-title');
      const img = card.getAttribute('data-img');
      const price = card.getAttribute('data-price');
      const discount = card.getAttribute('data-discount');
      const rent = card.getAttribute('data-rent');

      const cartItems = document.getElementById('cartItems');

      const item = document.createElement('li');
      item.innerHTML = `
        <div class="cart-item">
          <img src="${img}" alt="${title}" class="cart-img">
          <div>
            <h4>${title}</h4>
            <p>Compre: R$${discount} <del>R$${price}</del></p>
            <p>Aluguel: R$${rent}/mês</p>
          </div>
        </div>
      `;

      cartItems.appendChild(item);
      toggleCart();
    });
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
 // reset: true // Repetição da Animação
})
sr.reveal(`.home__data, .featured__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})

const LoginButton = document.getElementById("login-button");

// Verifica o estado do login e ajusta a função do botão
function updateLoginButtonBehavior() {
  if (localStorage.getItem("loggedIn") === "true") {
    // Usuário logado: clicar no ícone leva para perfil.html
    loginButton.onclick = function () {
      window.location.href = "perfil.html";
    };
  } else {
    // Usuário não está logado: clicar abre o formulário de login (exemplo)
    loginButton.onclick = function (e) {
      e.preventDefault();
      // Aqui abre seu modal ou formulário de login
      abrirFormularioLogin();
    };
  }
}

// Quando o usuário clicar em "Entrar" no formulário, faça login e atualize a função do botão
document.getElementById("login-button-form").addEventListener("click", function (e) {
  e.preventDefault();
  
  // Validação do login aqui (simulação)
  localStorage.setItem("loggedIn", "true");
  
  // Atualiza a função do botão
  updateLoginButtonBehavior();
  
  
  // Feche o formulário/login modal se precisar
});
 document.addEventListener("DOMContentLoaded", () => {
      const loginButton = document.getElementById("login-button");

      function updateLoginButtonBehavior() {
        if (localStorage.getItem("loggedIn") === "true") {
          loginButton.onclick = () => {
            window.location.href = "perfil.html"; // leva para perfil
          };
          loginButton.title = "Ir para Perfil";
        } else {
          loginButton.onclick = (e) => {
            e.preventDefault();
            alert("Aqui você pode abrir seu formulário de login.");
            // Exemplo: abre modal login aqui
          };
          loginButton.title = "Login";
        }
      }
    })
// Atualiza a função do botão toda vez que a página carrega
window.addEventListener("DOMContentLoaded", () => {
  updateLoginButtonBehavior();
});
