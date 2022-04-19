function insertDataInElements(data) {
  for (const key in data) {
    if (key === 'images') {
      if (data[key].portrait && data[key].landscape) {
        const portraitImg = document.querySelector('.portrait-image')
        portraitImg.setAttribute('src', data[key].portrait)
        portraitImg.setAttribute('alt', data.name)

        const landscapeImg = document.querySelector('.landscape-image')
        landscapeImg.setAttribute('src', data[key].landscape)
        landscapeImg.setAttribute('alt', data.name)
      } else {
        const image = document.querySelector('.images')

        image.setAttribute('src', data[key].png)
        image.setAttribute('alt', data.name)
      }
      continue
    }
    const element = document.querySelector(`.${key}`)
    console.log(data, data[key])
    element.textContent = data[key]
  }
}

export default insertDataInElements
