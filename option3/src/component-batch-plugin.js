// this will not be part of webpack bundle
// it will generate a constant used inside the bundle

var pluginName = 'ComponentPlugin';
var fs = require('fs');
var path = require('path');

class ComponentPlugin {
    constructor (options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.entryOption.tap(pluginName, compilation => {
            // console.log("The webpack build process is starting!!!");
            var folder = this.options.folder;
            var output = this.options.output;

            var componentFileNames = fs.readdirSync(this.options.folder);

            var result = '';

            componentFileNames.forEach((fileName) => {

                var noExt = fileName.replace(/.js$/, '')
                var outputFolder = output.replace(/\/[^\/]+$/, '');

                var compPath = path.relative(outputFolder, folder);

                result += `
                    ${noExt}: function () {
                        return import(
                            /* webpackChunkName: "${fileName}" */
                            /* webpackMode: "eager" */
                            '${compPath}/${fileName}'
                        )
                },`
            })

            fs.writeFileSync(output, `module.exports = {${result}}`);

        });
    }
}

module.exports = ComponentPlugin
