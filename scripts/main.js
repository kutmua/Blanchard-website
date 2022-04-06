document.addEventListener('DOMContentLoaded', function(){
  // функция открытия бургер меню
  function burgerMenuOpen(){
    let burgerBtn = document.querySelector('.header-top-menu--burger');
    let burgerMenu = document.querySelector('.header-top--burger-menu');
    let burgerMenuClose = document.querySelector('.burger-menu__close-btn');

    burgerBtn.addEventListener('click', ()=>{
      burgerMenu.classList.add('burger-menu--is-open');
      document.body.style.overflow = "hidden"
    });

    burgerMenuClose.addEventListener('click', ()=> {
      burgerMenu.classList.remove('burger-menu--is-open');
      document.body.style.overflow = "auto"
    });
  };

  // функция открытия поиска
  function searchOpen(){
    let searchBtn = document.querySelector('.header__search-btn--1024');
    let searchForm = document.querySelector('.header__search-container--1024');
    let searchFormClose = document.querySelector('.header__search-form-btn-close--1024');

    searchBtn.addEventListener('click', () =>{
      searchForm.classList.add('header__search--is-open');
    })


    searchFormClose.addEventListener('click', ()=>{
      searchForm.classList.remove('header__search--is-open');
    });
  };

  // плавный скролл
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
      event.preventDefault();

      let burgerMenu = document.querySelector('.header-top--burger-menu');

      if (burgerMenu.classList.contains('burger-menu--is-open')){
        burgerMenu.classList.remove('burger-menu--is-open');
        document.body.style.overflow = "auto";
      };

      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    });
  }


  burgerMenuOpen();
  searchOpen();
});
