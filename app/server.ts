//Imports
import { serveStatic } from '@hono/node-server/serve-static'
import { createApp } from 'honox/server'

//Create app
const app = createApp()

//Serve HTML
app.get('/', (c) => {
    return c.html(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Honox - Vue 3</title>
            <link rel="stylesheet" href="/static/style.css">
        </head>
        <body>
            <div id="app"></div>
            <script type="module" src="/static/main.js"></script>
        </body>
        </html>
     `)
})

//Serve static files (*localdev, handled by CF static routing in production)
// app.get('/static/*', serveStatic({ root: './' }))
app.use('/static/*', serveStatic({ root: '../static' }))

//Export
export default app