const net = require("net");
const { connected } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.41',
    port: 50541,
  });

  // print a message to the screen when the connection is successfully established.
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AMC");
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

module.exports = {
  connect
};