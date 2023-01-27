//
// ---------------- burger menu
//
const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger__menu');
const hiddenMenu = document.querySelector('.hidden-menu');
const headerContact = document.querySelector('.header__contact');
const menuLinks = document.querySelectorAll('.header__menu-link');
const logo = document.querySelector('.header__logo');
const linkCloseMenu = document.querySelectorAll('.close-menu');
const wrapper = document.querySelector('.wrapper');
const links = [...menuLinks, logo, ...linkCloseMenu];

if (burgerMenu) {

    burgerMenu.classList.add('toggled');
    burgerMenu.addEventListener('click', (e) => {
        burgerMenu.classList.toggle('active');
        burgerMenu.classList.toggle('toggled');
        let width1 = wrapper.offsetWidth;
        body.classList.toggle('fixed');
        hiddenMenu.classList.toggle('active');
        let width2 = wrapper.offsetWidth;
        let margin = width2 - width1;
        if (hiddenMenu.classList.contains('active')) {
            wrapper.style.marginRight = `${margin}px`;
        } else {
            wrapper.style.marginRight = `0px`;


        }


        headerContact.classList.toggle('hidden');
        langBox.classList.toggle('visible');
    });
}
if (links && links[0] !== null) {
    links.forEach((item) => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            burgerMenu.classList.add('toggled');
            body.classList.remove('fixed');
            hiddenMenu.classList.remove('active');
            headerContact.classList.remove('active');
            langBox.classList.remove('visible');
            wrapper.style.marginRight = `0px`;

        });
    });
}


// ---------------- THE END

window.onload = () => {

};






// Переключение языков

const langBox = document.querySelector('.lang-box');
const lang = document.querySelector('.lang');
const langSelect = document.querySelector('.lang-select');
const languages = document.querySelectorAll('.lang-select__option');

if (lang) {
    lang.addEventListener('click', () => {
        langBox.classList.add('active');
        langSelect.classList.add('active');

        if (languages) {
            languages.forEach(item => {
                item.addEventListener('click', (e) => {
                    const dataLang = e.currentTarget.dataset.lang;
                    lang.dataset.lang = dataLang;
                    lang.querySelector('span').textContent = e.currentTarget.querySelector('span').textContent;
                    langSelect.classList.remove('active');
                    langBox.classList.remove('active');
                })
            })
        }
    })
}

// the end


// -------------------------------------------------------------- SLIDER SWIPER 1

const heroSlider = document.querySelector('.hero-slider');

if (heroSlider) {

    const swiper = new Swiper('.hero-slider', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        autoplay: true,
        speed: 1000,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },

        // pauseOnMouseEnter: true,

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            // type: 'fraction',
            clickable: true,

        },

        // autoHeight: true,

        // Количество слайдов для показа
        slidesPerView: 1,
        // slidesPerView: auto,
        // Отступ между слайдами
        spaceBetween: 50,
        // Количество пролистываемых слайдов
        slidesPerGroup: 1,

        // Отключение функционала, если слайдов меньше чем нужно
        // watchOverflow: true,




        // Пролистование слайдов с помощью scroll
        // mousewheel: {
        //     sensitivity: 1,
        //     eventTarget: ".newsgame__item"
        // },

        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },


    });

    function addCountText() {
        const slideActive = document.querySelector('.swiper-slide-active');
        const countSlide = document.querySelector('.swiper-count-slide');
        countSlide.textContent = slideActive.getAttribute('aria-label');
    }

    addCountText();

    swiper.on('slideChange', e => {

        setTimeout(() => {
            addCountText();
        }, 100)
    })
}


// ---------------------------------------------------------------------------- the end swiper

// -------------------------------------------------------------- SLIDER SWIPER 2

const newsSlider = document.querySelector('.hero-slider');

if (newsSlider) {

    const swiper = new Swiper('.news-slider', {
        loop: false,
        autoplay: false,
        speed: 500,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Количество слайдов для показа
        slidesPerView: 'auto',
        // Отступ между слайдами
        spaceBetween: 50,
        // Количество пролистываемых слайдов
        slidesPerGroup: 1,
    });
}


// ---------------------------------------------------------------------------- the end swiper

document.addEventListener('click', (e) => {
    if (langSelect.classList.contains('active') && !e.target.closest('.lang-select') && !e.target.closest('.lang')) {
        langSelect.classList.remove('active');
        langBox.classList.remove('active');
    }
    if (hiddenMenu.classList.contains('active') && !e.target.closest('.hidden-menu') && !e.target.closest('.burger__menu') && !e.target.closest('.lang-box')) {
        hiddenMenu.classList.remove('active');
        langBox.classList.remove('visible');
        burgerMenu.classList.remove('active');
        burgerMenu.classList.add('toggled');
        body.classList.remove('fixed');
        wrapper.style.marginRight = `0px`;
    }
})

//
//  анимация цифр
//

// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// );



// анимация декора
const animationIndecatorsDecor = () => {
    const items = document.querySelectorAll('.indicators-decor__item');
    items.forEach(item => {
        const speed = 4 + 2 * item.dataset.speed;
        // const delay = item.dataset.delay;
        item.style.animation = `decor-anim ${speed}s ease 0s infinite`;
    })
}

animationIndecatorsDecor();


//
//  анимация цифр
//
const animationNumber = () => {
    [...indicatorsItems.children].forEach(item => {
        item.style.opacity = 1;
        item.style.transition = 'opacity 1.5s ease';
    });

    itemsNumber.forEach(item => {
        item.style.opacity = 1;
        let start = 0;
        const end = +item.dataset.max;

        let interval = setInterval(() => {
            if (end > 100) {
                start += 100;
            } else {
                start += 1;
            }
            item.textContent = start
            if (start == end) {
                clearInterval(interval);
            }
        }, 20)
    })


}



let show = true; // флаг для анимации цифр 
const indicatorsItems = document.querySelector('.indicators__items');
const itemsNumber = document.querySelectorAll('.indicators__item-number-num');
itemsNumber.forEach(item => {
    item.textContent = 0;
});
if (indicatorsItems) {
    [...indicatorsItems.children].forEach(item => {
        item.style.opacity = 0;

    });
}

const scrollAnimationNumber = () => {
    // if (!show) return false;

    const w_top = window.scrollY; // Количество пикселей на которое была прокручена страница
    const e_top = indicatorsItems.getBoundingClientRect().top; // Расстояние от блока со счетчиками до верха всего документа

    const w_height = window.innerHeight; // Высота окна браузера
    const e_height = indicatorsItems.offsetHeight; // Полная высота блока со счетчиками

    const animStart = 4; // регулировка запуска анимации расстояние от блока

    let animItemPoints = w_height - e_height / animStart;
    if (e_height > w_height) {
        animItemPoints = w_height - w_height / animStart;
    }
    if (w_top > e_top - animItemPoints && w_top < e_top + e_height && show) {
        console.log('start');


        animationNumber();

        show = false;
    }
    //  запуск для повтора анимации
    // if (w_top > e_top + e_height && !show) {

    //     show = true;
    //     console.log('restart');
    // }



}
if (indicatorsItems) {

    scrollAnimationNumber();
}


// function getRandomArbitrary(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
// }



window.addEventListener('scroll', (e) => {
    setTimeout(() => {

        scrollAnimationNumber();
        scrollAnimation();

    }, 300);
})


// 
// -------------------------------------- checked input
// 

const inputCheckbox = document.querySelectorAll('.level-form__checkbox-li');

inputCheckbox.forEach(item => {
    item.addEventListener('change', (e) => {
        e.currentTarget.classList.toggle('active');
    })
})


function checkButtons() {
    const levelTabsContent = document.querySelectorAll('.level-tabs__content');
    levelTabsContent.forEach(item => {

        const buttonsBox = item.querySelectorAll('.level-form__buttons');
        buttonsBox[0].querySelector('.level-form__btn-prev').setAttribute('disabled', '');
        buttonsBox[buttonsBox.length - 1].querySelector('.level-form__btn-next').textContent = 'Отправить';

        const buttons = item.querySelectorAll('.level-form__btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
            })
        })
    })
}
checkButtons();

// переключение табов

const tabsBtn = document.querySelectorAll('.level-tabs__btn');
tabsBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        if (btn.classList.contains('level-tabs__btn--active')) return false;
        checkTabs(btn);
    })
})

const levelTabsContent = document.querySelectorAll('.level-tabs__content');
const levelForms = document.querySelectorAll('.level__form');

function checkTabs(btn) {
    levelForms.forEach(form => {
        console.log(form);
        form.reset();
    })
    inputCheckbox.forEach(item => {
        item.classList.remove('active');
    })

    tabsBtn.forEach(item => {
        item.classList.remove('level-tabs__btn--active');
    })
    btn.classList.add('level-tabs__btn--active');

    const itemsForm = document.querySelectorAll('.level-form__item');
    itemsForm.forEach(item => {
        item.classList.remove('level-form__item--active');
    })

    levelTabsContent.forEach(item => {
        item.classList.remove('level-tabs__content--active');
    })
    const data = btn.dataset.tabsPath;
    document.querySelector(`[data-tabs-target="${data}"]`).classList.add('level-tabs__content--active');
    document.querySelector(`[data-tabs-target="${data}"] .level-form__item-1`).classList.add('level-form__item--active');

}


levelTabsContent.forEach(tabContent => {
    const itemsForm = tabContent.querySelectorAll('.level-form__item');
    itemsForm.forEach((item, index) => {
        item.addEventListener('click', e => {
            if (e.target.closest('.level-form__btn') && e.target.dataset.direction == 'prev' || e.target.dataset.direction == 'next') {
                checkTabBtn(itemsForm, e.target, index, itemsForm.length - 1);
            }
        })
    })
})


function checkTabBtn(itemsForm, btn, index, length) {
    itemsForm.forEach(item => {
        item.classList.remove('level-form__item--active');
    })

    if (btn.dataset.direction === 'next' && index !== 2) {
        itemsForm[index + 1].classList.add('level-form__item--active');
    }
    if (btn.dataset.direction === 'prev' && index !== 0) {
        itemsForm[index - 1].classList.add('level-form__item--active');
    }

}


//
// скролл к нужному элементу

function scrollToElement(el) {
    let offsetPositon = el.getBoundingClientRect().top - 20;
    window.scrollBy({
        top: offsetPositon,
        behavior: 'smooth',
    });
}

// click btn top scroll

const topBtn = document.querySelector('#top-btn');

topBtn.addEventListener('click', () => { scrollToElement(body) })

const arrayForAnimation = [];
const itemsTitleH2 = document.querySelectorAll('.title-h2');
itemsTitleH2.forEach(el => {
    arrayForAnimation.push(el);

})

const animItems = document.querySelectorAll('._anim-item');

animItems.forEach(el => {
    arrayForAnimation.push(el);
})



function scrollAnimation() {
    arrayForAnimation.forEach(item => {
        const w_top = window.scrollY; // Количество пикселей на которое была прокручена страница
        const w_height = window.innerHeight; // Высота окна браузера

        const e_top = item.getBoundingClientRect().top; // Расстояние от блока до верха всего документа
        const e_height = item.offsetHeight; // Полная высота блока

        const animStart = 4; // регулировка запуска анимации расстояние от блока

        let animItemPoints = w_height - e_height / animStart;

        if (e_height > w_height) {
            animItemPoints = w_height - w_height / animStart;
        }
        if (e_top < w_height / 2 + w_height / 3 && e_top > 0 && !item.classList.contains('active')) {
            item.classList.add('active');
        }
    });
}
