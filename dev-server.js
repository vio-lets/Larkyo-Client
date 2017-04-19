const project = require('./config/project.config.js')
const server = require('./config/server.config.js')
const debug = require('debug')('app:bin:dev-server')

server.listen(project.server_port)
debug(`Server is now running at http://localhost:${project.server_port}.`)
