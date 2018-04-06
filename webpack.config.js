var merge = require('webpack-merge')
var webpack = require('webpack')
var path = require('path')

// OPTION 2
// creates a temp manifest
var option2 = require('./option2/src/create-batch.js').fetchComponents();

// OPTION 3
// webpack plugin to create the batch
var ComponentBatchPlugin = require('./option3/src/component-batch-plugin.js');

// basic webpack config
var base = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../[name].[ext]',
                        }
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'html-loader',
                    }
                ]

            }
        ]
    },
};

function factory(path) {
    return Object.assign({}, base, {
        entry: `./${path}/src/index.js`,
        output: {
            filename: 'index.js',
            path: `${__dirname}/${path}/dist/js`
        }
    })
}

module.exports = [
    // option 1
    factory('option1'),

    // option 2
    factory('option2'),

    // option 3
    merge(factory('option3'), {
        plugins: [
            new ComponentBatchPlugin({
                folder: `${__dirname}/option3/src/js/components`,
                output: `${__dirname}/option3/src/js/temp/component-batch.js`
            })
        ]
    }),
]
