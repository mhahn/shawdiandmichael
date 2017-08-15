const server = "./server";

require("babel-polyfill");
require("babel-register");

require(server).default;
