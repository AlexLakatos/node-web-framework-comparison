'use strict'

const Hapi = require('hapi')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return {
        talk: "Hello from Hapi"
      }
    }
  })

  server.route({
    method: 'POST',
    path: '/',
    handler: (request, h) => {
      console.log(request.payload)
      return 200
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
