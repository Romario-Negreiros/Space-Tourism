import addMenuFunctionality from '../common/AddMenuFunctionality.js'
import redirectWithQueryStrings from '../common/redirectWithQueryStrings.js'
import pickUpDataFromJson from '../common/pickUpDataFromJson.js'
import insertDataInElements from './insertDataInElements.js'

const options = Array.from(document.querySelector('.content__options').children)

options.forEach((option, index) =>
  option.addEventListener('click', () =>
    redirectWithQueryStrings('destinations.html', index)
  )
)

window.addEventListener('load', async () => {
  const params = new URLSearchParams(window.location.search)
  if (!params.has('index')) {
    const destination = await pickUpDataFromJson('destinations', '0')
    insertDataInElements(destination)
    options[0].classList.add('active-option')
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

  options[index].classList.add('active-option')
})

addMenuFunctionality()
