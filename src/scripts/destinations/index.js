import addMenuFunctionality from '../common/AddMenuFunctionality.js'
import redirectWithQueryStrings from '../common/redirectWithQueryStrings.js'
import pickUpDataFromJson from '../common/pickUpDataFromJson.js'
import insertDataInElements from './insertDataInElements.js'

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

window.addEventListener('load', async () => {
  const params = new URLSearchParams(window.location.search)
  if (!params.has('index')) {
    const destination = await pickUpDataFromJson('destinations', '0')
    insertDataInElements(destination)
    manageClasses(0)

    return
  }

  const index = params.get('index')
  /*
    destination: {
      name: string,
      images: {
        png: string,
        webp: string
      },
      description: string,
      distance: string,
      travel: string
    }
  */
  const destination = await pickUpDataFromJson('destinations', index)
  insertDataInElements(destination)
  manageClasses(index)
})

addMenuFunctionality()
