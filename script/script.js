const scrollBanner = () =>{
  const scrollPos = window.pageYOffset;
  const paralaxLeft = document.querySelector('.paralax-left');
  const paralaxRight = document.querySelector('.paralax-right__wrap');
  const ss = 100 - 17.708 - 14.167;   
  paralaxLeft.style.transform = `translateY(${scrollPos / 19.2 / 100 * ss}vw)`;
  paralaxRight.style.transform = `translateY(${scrollPos / 19.2 / 100 * ss}vw)`;
}

const hideCardInfo = () => {
  const pulse = document.querySelector('.card__text');
  pulse.style.display = "none";
}

const showCardInfo = () => {
  const card = document.querySelector('.card__text');
  card.style.display = "block";
}

const showMap = () => {
  const map = document.querySelector('.yandexMap');

  map.style.display = "block"
}

const hideMap = () => {
  let map = document.querySelector('.yandexMap');

  map.style.display = "none"
}

const showPopupSuccess = () => {
  const popup = document.querySelector('.popup__wrap');

  if(popup.style.display === "flex") {
    popup.style.display = "none"
    document.body.style.overflow = "auto";
  } 

  let popupSuccess = document.querySelector('.popupSuccess__wrap');

  if(popupSuccess.style.display === '' || popupSuccess.style.display === 'none') {
    popupSuccess.style.display = "flex"
    document.body.style.overflow = "hidden";
  } else {
    popupSuccess.style.display = "none"
    document.body.style.overflow = "auto";
  }
}

const showPopup = () => {
  const popup = document.querySelector('.popup__wrap');

  if(popup.style.display === '' || popup.style.display === 'none') {
    popup.style.display = "flex"
    document.body.style.overflow = "hidden";
  } else {
    popup.style.display = "none"
    document.body.style.overflow = "auto";
  }
}

const toggleBurger = () => {
  const menu = document.querySelector(".menu-link");

  menu.classList.toggle("menu-link-active");

  const nav = document.querySelector(".nav");

  nav.classList.toggle("nav__active");
}

window.addEventListener('scroll', scrollBanner);