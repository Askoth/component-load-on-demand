class Teste {
    constructor (el) {

        el.innerHTML = `Dynamic text component: ${el.getAttribute('data-text')}`
    }
}

export default Teste

