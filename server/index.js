const express = require("express");
const redis = require("socket.io-redis");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);
  // Listen the server
  let server = app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
  socketStart(server);
  console.info("Socket.io started.");
}

function socketStart(server) {
  const io = require("socket.io").listen(server);
  io.adapter(redis({ host: "127.0.0.1", port: "6379" }));
  io.on("connection", socket => {
    room = "";
    console.log("id: " + socket.id + " is connected");
    socket.on("join_room", roomname => {
      room = roomname;
      socket.join(roomname);
    });

    socket.on("broadcast_join", name => {
      socket.broadcast.to(room).emit(`New User: ${name} joined to this room`);
    });
  });
}
start();
