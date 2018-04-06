import batch from './temp/component-batch.js'

function init () {
    let els = Array.from(document.querySelectorAll('[data-component]'));

    els.forEach(initComponent)
}

function initComponent (el) {
    let module = el.getAttribute('data-component');

    batch[module]().then((exported) => {
        var Comp = exported.default
        new Comp(el);
    })
}


export {init}
