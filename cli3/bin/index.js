#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");

// const { program } = commander; // 单例
const program = new commander.Command(); // 除了使用单例，我们还能自己初始化一个实例

program
  .name(Object.keys(pkg.bin)[0]) // 可以自动获取的， 这是手动传入
  .usage("<command> [option]")
  .version(pkg.version)
  .option("-d, --debug", "是否启动 debug 模式", false)
  .option("-e, --envName <envName>", "获取环境变量名称")
  .parse(process.argv);

// program.outputHelp();

console.log(program.opts(), program.args, process.argv);
