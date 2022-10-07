/* creo una funcion isIntersecting que recibe una entrada y este tiene una propiedad llamada isIntersecting que me va a devolver true
o false segun el caso */

const isIntersecting = entry => {
    return entry.isIntersecting 
}

//Creo una funcion action que recibe una entrada
const action = (entry) => {
    // esta variable busca en la entrada la propiedad target que es el nombre del nodo, ejemplo, img
    const nodo = entry.target

    // aqui le indicamos al observador que deje de observar el nodo si la accion se vuelve a ejecutar, ejemplo, se observara una
    // unica vez y no cargara las imagenes cada vez que el observador la detecte
    observer.unobserve(nodo)
}

// Creo una instancia de la api IntersectionObserver, esta recibe un callback que se ejecutara cuando el umbral sea cruzado en una
// u otra direccion

// este callback recibe las entradas (un array) 
const observer = new IntersectionObserver(entries => {
    entries
    // filtro por su propiedad isIntersecting para reconocer el true or false
    .filter(isIntersecting)
    // por cada una de las entradas ejecuto la action de dejar de observar
    .forEach(action)
})


export const registerImage = image => {
    // aqui observamos la imagen 
    observer.observe(image)
}