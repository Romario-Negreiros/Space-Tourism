import MenuHandler from '../common/MenuHandler.js'

const openIcon = document.querySelector('.nav__mobile-open')
const closeIcon = document.querySelector('.nav__mobile-close')

const menu = new MenuHandler()

openIcon.addEventListener('click', menu.open)
closeIcon.addEventListener('click', menu.close)
