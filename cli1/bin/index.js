#!/usr/bin/env node

const commands = {
  init() {
    console.log("init");
  },
};

console.log("ma-cli1: 这是脚手架最基础版本");
const argv = require("process").argv;

console.log(require("process").argv);
