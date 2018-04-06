module.exports = {
        loucura: function () {
            return import(
                /* webpackChunkName: "loucura.js" */
                /* webpackMode: "eager" */
                './../components/loucura.js'
            )
    },
        teste: function () {
            return import(
                /* webpackChunkName: "teste.js" */
                /* webpackMode: "eager" */
                './../components/teste.js'
            )
    },}