const net = require("net");
const { connected } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.3.1.225',
    port: 50541,
  });

  // print a message to the screen when the connection is successfully established.
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Send name to server as soon as connected
    conn.write("Name: AMC");
  });

  // conn.on("connect", () => {
    // Send move instruction to server as soon as connected
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 150);
    // setInterval(() => {
    //   conn.write("Move: down");
    // }, 50);
    
  // });

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