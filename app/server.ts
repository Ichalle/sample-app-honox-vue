import { serveStatic } from '@hono/node-server/serve-static'
import { createApp } from 'honox/server'

const app = createApp()

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

// app.use('/style.css', serveStatic({ path: './dist/style.css' }))
// app.use('/main.js', serveStatic({ path: './dist/main.js' }))
app.get('/static/*', serveStatic({ root: './' }))

export default app
