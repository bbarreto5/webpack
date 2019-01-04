const path = require('path');
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
                use:[
                    'style-loader' ,
                    'css-loader'
                ], //que loader se encargara del archivo
            }
        ]
    }
}