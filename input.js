const { COMMAND } = require('./constants');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  // mapping command with keys
  } else if (COMMAND[key]) {
    connection.write(COMMAND[key]);
  }
};

module.exports = {
  setupInput
};