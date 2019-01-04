const path = require('path');
const ExtractPluginText = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            //aqui van los loaders
            {
                test:/\.css$/, //que tipo de archivo quiero reconocer
                use:ExtractPluginText.extract({
                    //['style-loader','css-loader']
                    //fallback:'style-loader'
                    use:'css-loader'
                }),
            }
        ]
    },
    plugins:[
        //aqui van los plugin
        new ExtractPluginText('css/[name].css')
    ]
}