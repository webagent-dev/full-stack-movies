const { createProxyMiddleware } = require('http-proxy-middleware')

const createProxy = (app) => {
    app.use(
        'api/v1'
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin:true,
        })
    )
}

module.exports = createProxy