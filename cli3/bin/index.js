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
  .option("-e, --envName <envName>", "获取环境变量名称");

// program.outputHelp();

// command 命令注册
const clone = program.command("clone <source> [target]");
clone
  .description("克隆一个项目")
  .option("-f, --force", "是否强制克隆，这样会覆盖已存在的文件")
  .action((source, target, cmdObj) => {
    console.log(`我要开始克隆了, 将 ${source} 克隆到 ${target}`, cmdObj);
  });

// addCommand 注册命令
const service = new commander.Command("service"); // 一个新的命令实例
service.description("服务管理");
service
  .command("start [port]")
  .description("启动一个服务")
  .action((port) => {
    console.log(`服务成功运行在 ${port} 端口`);
  });
service
  .command("stop [port]")
  .description("终止服务")
  .action((port) => {
    console.log(`成功结束 ${port} 端口的服务`);
  });
program.addCommand(service);

// 解析参数
program.parse(process.argv);

console.log(program.opts(), program.args, process.argv);
