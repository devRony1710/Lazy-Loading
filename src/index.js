import { registerImage } from "./lazyLoading";

const URL = 'https://randomfox.ca/floof/'
const mountNode = document.querySelector('#images')
const addImageBtn = document.querySelector('button');

//this function will be create an image node
const createImageNode = (image) => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.src = image

    // added img node to container
    container.append(imagen)
    registerImage(imagen)
    
    // added container to "mount" node
    mountNode.append(container)
}


// get data from fox api
const fetchImage = async urlApi => {
    const response = await fetch(urlApi)
    const data = await response.json()
    let image = data.image

    // send image atribute to createImageNode function like a src to img node
    createImageNode(image)
}

fetchImage(URL)

// this function will be create an image when the user clicks at "agregar imagen" button
const addImage = async () => {
    const newImage = await fetchImage(URL)
    return newImage
}


addImageBtn.addEventListener('click', addImage)