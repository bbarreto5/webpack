const path = require('path');
const ExtractPluginText = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        index:path.resolve(__dirname,'./src/js/index.js'),
        index1:path.resolve(__dirname,'./src/js/index1.js'),
        index2:path.resolve(__dirname,'./src/js/index2.js')
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].js'
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