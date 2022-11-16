const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.41',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();