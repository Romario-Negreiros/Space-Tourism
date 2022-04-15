class MenuHandler {
  open() {
    document.querySelector('.nav__mobile-open').classList.add('nav__mobile-open--inactive')
    document.querySelector('.nav__mobile-close').classList.add('nav__mobile-close--active')
    document.querySelector('.nav__list').classList.add('nav__list--active')
    document.querySelector('body').classList.add('body--active')
  }

  close() {
    document.querySelector('.nav__mobile-open').classList.remove('nav__mobile-open--inactive')
    document.querySelector('.nav__mobile-close').classList.remove('nav__mobile-close--active')
    document.querySelector('.nav__list').classList.remove('nav__list--active')
    document.querySelector('body').classList.remove('body--active')
  }
}

export default MenuHandler
