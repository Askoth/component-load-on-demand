// this will not be part of webpack bundle
// it will generate a constant used inside the bundle

var fs = require('fs');
var componentFileNames = fs.readdirSync(__dirname + '/js/components');
var result = '';


componentFileNames.forEach((fileName) => {

    var noExt = fileName.replace(/.js$/, '')

    result += `
        ${noExt}: function () {
            return import(
                /* webpackChunkName: "${fileName}" */
                /* webpackMode: "eager" */
                './../components/${fileName}'
            )
    },`
})

module.exports = {
    fetchComponents: function () {
        fs.writeFileSync(`${__dirname}/js/temp/component-batch.js`, `module.exports = {${result}}`);
    }
}
