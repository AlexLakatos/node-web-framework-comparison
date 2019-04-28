const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return {
    talk: "Hello from fastify"
  }
})

fastify.post('/', async (request, reply) => {
  console.log(request.body)
  return 200
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
