const fastify = require("fastify")({
  logger: true
});

fastify.get("/", async (request, reply) => {
  return [
    {
      action: "talk",
      text: "Hello from fastify"
    }
  ];
});

fastify.post("/", async (request, reply) => {
  console.log(request.body);
  return 200;
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info("Fastify listening on port 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
