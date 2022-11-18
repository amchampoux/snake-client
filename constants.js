const IP = '10.3.1.225';
const PORT = 50541;
const NAME = 'AMC';

const COMMAND = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
  'f': "Say: Hello friend",
  'h': "Say: I'm hungry!!",
  'c': "Say: I love cats"
};

module.exports = {
  IP,
  PORT,
  NAME,
  COMMAND
};