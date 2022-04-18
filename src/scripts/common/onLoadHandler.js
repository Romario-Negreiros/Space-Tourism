import pickUpDataFromJson from './pickUpDataFromJson.js'
import insertDataInElements from './insertDataInElements.js'

async function onLoadHandler(key, manageClasses) {
  const params = new URLSearchParams(window.location.search)
  if (!params.has('index')) {
    const data = await pickUpDataFromJson(key, '0')
    insertDataInElements(data)
    manageClasses(0)
    return
  }

  const index = params.get('index')
  const data = await pickUpDataFromJson(key, index)
  insertDataInElements(data)
  manageClasses(index)
}

export default onLoadHandler
