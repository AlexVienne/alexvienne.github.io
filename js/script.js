'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById('prev'),
          next = document.getElementById('next'),
          prevImg = document.querySelector('.comments__slider-img_prev'),
          currentImg = document.querySelector('.comments__slider-img_active'),
          nextImg = document.querySelector('.comments__slider-img_next'),
          sliderContent = document.querySelectorAll('.comments__content'),
          tabsLinks = document.querySelectorAll('.products__link'),
          tabsContent = document.querySelectorAll('.products__item-content'),
          modal = document.querySelector('.modal'),
          modalThx = document.querySelector('.modal__thanks'),
          btnModal = document.querySelectorAll('.btn__modal'),
          formButton = document.querySelectorAll('.form__button'),
          btnClose = document.querySelectorAll('.btn__close'),
          overlay = document.querySelector('.overlay'),
          hamburgerMenu = document.querySelector('.hamburger__menu'),
          hamburgerLinks = document.querySelectorAll('.hamburger__menu-links'),
          hamburger = document.querySelector('.hamburger');

//mobile menu
    function mobileMenu(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburgerMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        hamburgerLinks.forEach(item => {
            item.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.classList.add('hidden');
                document.body.style.overflow = '';
                scrollTo(item);
            });
        });
    }
    mobileMenu(hamburger)

// tabs for products block
    function tabs(){
        tabsLinks.forEach((item, i) => {
            item.addEventListener('click', function(e){
                e.preventDefault();

                tabsLinks.forEach(item => {
                    item.classList.remove('products__link_active');
                });
        
                tabsContent.forEach(item => {
                    item.classList.remove('products__item-content_active');
                });

                item.classList.add('products__link_active');
                tabsContent[i].classList.add('products__item-content_active');
            });
        });
    }   
    tabs();

// slider for comments block
    function slider(){
        let index = 0;

        prev.addEventListener('click', () => {
            if(index === 0){
                sliderContent[index].classList.remove('comments__content_active');
                index = sliderContent.length - 1;
                sliderContent[index].classList.add('comments__content_active');

                prevImg.innerHTML =  sliderContent[index - 1].querySelector('.comments__header-img').innerHTML;
                currentImg.innerHTML =  sliderContent[index].querySelector('.comments__header-img').innerHTML;
                nextImg.innerHTML =  sliderContent[0].querySelector('.comments__header-img').innerHTML;
            }else{
                sliderContent[index].classList.remove('comments__content_active');
                index--;
                sliderContent[index].classList.add('comments__content_active');

                
                nextImg.innerHTML =  sliderContent[index + 1].querySelector('.comments__header-img').innerHTML;
                currentImg.innerHTML =  sliderContent[index].querySelector('.comments__header-img').innerHTML;

                if (index === 0) {
                    prevImg.innerHTML =  sliderContent[sliderContent.length - 1].querySelector('.comments__header-img').innerHTML;
                }else{
                    prevImg.innerHTML =  sliderContent[index - 1].querySelector('.comments__header-img').innerHTML;
                }
            }
        });

        next.addEventListener('click', () => {
            if(index === sliderContent.length - 1){
                sliderContent[index].classList.remove('comments__content_active');
                index = 0;
                sliderContent[index].classList.add('comments__content_active');

                prevImg.innerHTML =  sliderContent[sliderContent.length -1].querySelector('.comments__header-img').innerHTML;
                currentImg.innerHTML =  sliderContent[index].querySelector('.comments__header-img').innerHTML;
                nextImg.innerHTML =  sliderContent[index + 1].querySelector('.comments__header-img').innerHTML;
            }else{
                sliderContent[index].classList.remove('comments__content_active');
                index++;
                sliderContent[index].classList.add('comments__content_active');


                prevImg.innerHTML =  sliderContent[index - 1].querySelector('.comments__header-img').innerHTML;
                currentImg.innerHTML =  sliderContent[index].querySelector('.comments__header-img').innerHTML;

                if (index === sliderContent.length - 1) {
                    nextImg.innerHTML =  sliderContent[0].querySelector('.comments__header-img').innerHTML;
                }else{
                    nextImg.innerHTML =  sliderContent[index + 1].querySelector('.comments__header-img').innerHTML;
                }
            }
        });
    }
    slider();

    //modal window
    function modalWindow() {
        btnModal.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('hidden');
                modal.classList.add('active');
                overlay.classList.remove('hidden');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });  

        formButton.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                item.closest('form').checkValidity() == true;

                if (item.closest('form').checkValidity() == true){
                    modal.classList.remove('active');
                    modal.classList.add('hidden');
                    modalThx.classList.remove('hidden');
                    modalThx.classList.add('active');
                    overlay.classList.remove('hidden');
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }else {
                    alert('Все поля должны быть заполнены!');
                }
            });
        });
    }

    modalWindow();

// button close
    function closeButton() {
        btnClose.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                item.closest('.container').parentElement.classList.remove('active');
                item.closest('.container').parentElement.classList.add('hidden');
                overlay.classList.remove('active');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';

            });
        });
    }

    closeButton();
});