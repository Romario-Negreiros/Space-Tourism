import addMenuFunctionality from '../common/AddMenuFunctionality.js'
import redirect from '../common/redirect.js'

addMenuFunctionality()

const explorebtn = document.querySelector('.explore__btn')

explorebtn.addEventListener('click', () => redirect('destinations.html'))
