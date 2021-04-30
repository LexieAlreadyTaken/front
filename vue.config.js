module.exports = {
    devServer: {
        host: "0.0.0.0",
        hot: true,
        compress: true,
        disableHostCheck: true,    
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}