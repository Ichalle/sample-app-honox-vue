//Imports
import { serveStatic } from '@hono/node-server/serve-static'
import { createApp } from 'honox/server'

//Create app
const app = createApp()

//Serve HTML
app.get('/', (c) => {
    return c.html('a')
})

//Serve static files (*localdev, handled by CF static routing in production)
app.get('/static/*', serveStatic({ root: './' }))

//Export
export default app