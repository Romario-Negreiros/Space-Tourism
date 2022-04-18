import redirect from './redirect.js'

function redirectWithQueryStrings(path, index) {
  if (!path) {
    alert('An error occurred, try again!')
    console.log('key parameter is undefined')
  }
  if (!index && index !== 0) {
    alert('An error occurred, try again!')
    console.log('index parameter is undefined')
    return
  }

  const urlWithQueryStrings = `${path}?index=${index}`
  redirect(urlWithQueryStrings)
}

export default redirectWithQueryStrings
