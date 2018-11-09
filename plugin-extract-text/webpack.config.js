const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            /* Aquí van los Loaders */
            {
                /* test: que tipo de archivo quiero reconocer */
                /* use: que loader se va a encargar del archivo */
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                   /*  ['style-loader', 'css-loader'] */
                   use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        /* Aquí van los plugins */
        new ExtractTextPlugin('css/styles.css')
    ]
}

module.exports = config