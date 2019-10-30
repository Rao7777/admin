const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port: 1077,
    },
    configureWebpack: {
        resolve: {
            symlinks: false
        },
        optimization: {
            minimizer: [
                new TerserPlugin({ 
                    terserOptions: { 
                        compress: { drop_console: true } 
                    } 
                })
            ]
        }
    },
    chainWebpack:(config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
           
        
    }
}