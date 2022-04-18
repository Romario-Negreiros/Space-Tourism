async function pickUpDataFromJson (key, index) {
  if (!key) {
    alert('An error occurred, try again!')
    console.log('key parameter is undefined')
  }
  if (!index && index !== 0) {
    alert('An error occurred, try again!')
    console.log('index parameter is undefined')
    return
  }

  try {
    const response = await fetch('src/data/data.json')
    const body = await response.json()
    const desiredData = body[key][index]
    return desiredData
  } catch (err) {
    alert('An error occurred, try again!')
    console.log(err.message)
  }
}

export default pickUpDataFromJson
