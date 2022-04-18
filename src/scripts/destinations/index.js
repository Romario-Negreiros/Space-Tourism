import addMenuFunctionality from '../common/AddMenuFunctionality.js'
import redirectWithQueryStrings from '../common/redirectWithQueryStrings.js'
import onLoadHandler from '../common/onLoadHandler.js'

const main = document.querySelector('.main-inative')
const loader = document.querySelector('.loader')
const options = Array.from(document.querySelector('.content__options').children)

function manageClasses(index) {
  options[index].classList.add('active-option')
  main.classList.remove('main-inative')
  loader.classList.add('loader-inative')
}

options.forEach((option, index) =>
  option.addEventListener('click', () => redirectWithQueryStrings('destinations.html', index))
)

window.addEventListener('load', onLoadHandler('destinations', manageClasses))

addMenuFunctionality()
