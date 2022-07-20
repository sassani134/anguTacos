const express = require('express')
const path = require('path')
const http = require('http')
const compression = require('compression')
const app = express()
app.use(compression())
const appname = 'tacos'

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist', appname)))

// Catch all routes and return the index file
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '..', 'dist', appname, 'index.html'))
})

// Get port from environment and store in Express.
const port = process.env.PORT || '4200'
app.set('port', port)

// Create HTTP server.
const server = http.createServer(app)

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Angular app \'${appname}\' running on port ${port}`))