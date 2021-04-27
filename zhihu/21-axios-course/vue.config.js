module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://test-d1384-default-rtdb.firebaseio.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/api': '', }
            }
        }
    }
}