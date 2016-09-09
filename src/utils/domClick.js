import sounds from './sounds';

const domClick = (color) => {

  let element = document.querySelector('.simon__button--'+color);
  element.classList.add('is-active');

  let clickID = setTimeout(() => {
    element.classList.remove('is-active');
    sounds[color].play();
    clearTimeout(clickID);
  }, 50);
}

export default domClick;
