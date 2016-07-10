var autoprefixer = require('autoprefixer')
var postcssEasyImport = require('postcss-easy-import')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCustomMedia = require('postcss-custom-media')

const webpackConfig = {

    entry: './main.js',

    output: {
        filename: 'bundle.js'
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                // include: PATHS.appDir,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: [
                        'react',
                        'es2015-webpack',
                        'stage-0'
                    ],
                    plugins: [
                        'transform-object-rest-spread'
                    ]
                },
            }, {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ],
    },
    postcss: function (webpack) {
        return [
            postcssEasyImport({
                addDependencyTo: webpack
            }),
            autoprefixer,
            postcssCustomProperties,
            postcssCustomMedia,
        ];
    }

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: PATHS.index,
    //         inject: true,
    //     }),
    // ],
}

module.exports = webpackConfig
