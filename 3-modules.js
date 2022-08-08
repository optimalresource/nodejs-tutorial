// Modules
//CommonJs, every file in node is a module (by default)

const names = require("./4-first-module-name");
const sayHi = require("./5-second-module-utils");
const { john, peter } = names;

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
sayHi(john);
sayHi(peter);
