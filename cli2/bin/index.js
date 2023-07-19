#!/usr/bin/env node

const commands = {
  init(args) {
    console.log(
      `command: init, option: ${args.option || "无"}, options 参数: ${
        args.params || "无"
      }`
    );
  },
};

console.log("Welcome ! ma-cli1 是学习脚手架的启蒙版本");
const argv = require("process").argv;

const command = argv[2];
const options = argv.slice(3);
let [option, params] = options;

option = option?.replace("--", "");

if (commands[command]) {
  commands[command]({ option, params });
} else {
  console.log("请输入有效的命令 暂时只支持 init");
}
