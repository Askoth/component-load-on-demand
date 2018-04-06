export default {
    teste: function () {
        return import(
            /* webpackChunkName: "teste.js" */
            /* webpackMode: "eager" */
            './components/teste.js'
        )
    },
    loucura: function () {
        return import(
            /* webpackChunkName: "loucura.js" */
            /* webpackMode: "eager" */
            './components/loucura.js'
        )
    }
}
