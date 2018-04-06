define('component-loader', function () {

    function init () {
        let els = Array.from(document.querySelectorAll('[data-component]'));

        els.forEach(initComponent)
    }

    function initComponent (el) {
        let module = el.getAttribute('data-component');

        let Comp = require(`component/${module}`);

        new Comp(el);

    }


    return {init}
})
