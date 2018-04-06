define('component/teste', function () {

    class Teste {
        constructor (el) {

            el.innerHTML = `Testando ${el.getAttribute('data-text')}`
        }
    }

    return Teste

})
