function insertDataInElements(destination) {
  for (const key in destination) {
    if (key === 'images') {
      const image = document.querySelector('.images')
      image.setAttribute('src', destination[key].webp)
      image.setAttribute('alt', destination.name)
    }
    const element = document.querySelector(`.${key}`)
    element.textContent = destination[key]
  }
}

export default insertDataInElements
