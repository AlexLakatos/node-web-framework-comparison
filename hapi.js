"use strict";

const Hapi = require("hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return [
        {
          action: "talk",
          text: "Hello from hapi"
        }
      ];
    }
  });

  server.route({
    method: "POST",
    path: "/",
    handler: (request, h) => {
      console.log(request.payload);
      return 200;
    }
  });

  await server.start();
  console.log("Happi listening on port 3000");
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
