#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const dedent = require("dedent");
const { boolean } = require("yargs");

// console.log(hideBin(process.argv)); // 参数解析 ['--help']

const arg = hideBin(process.argv);
const cli = yargs(arg);

cli
  .usage("使用方式: ma-cli2 [command] <options>")
  .demandCommand(
    1,
    "需要传入一个 command, 输入 --help 查看所有可用的 command 和 option"
  )
  .strict()
  .recommendCommands()
  .fail((err, msg) => {
    console.log(err);
  })
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(
    dedent`
    ############## footer ###############
    alias:     命令别名 
    warp:      输出的内容在命令行中的宽度
    epilogue:  相当于一个 footer
    options:   主要用于增加全局的选项, 对所有的 command 都有效
    #####################################
  `
  )
  .options({
    debug: {
      type: "boolean",
      describe: "启用调试模式",
      alias: "d",
      defaultDescription: "启用调试模式, 查看更多开发信息",
    },
  })
  .option("registry", {
    type: "string",
    hidden: false, // 作用是 --help 中不显示，但是用户以然能够继续使用
    describe: "定义全局 registry",
  })
  .group(["debug", "registry"], "开发环境 options: ")
  .command(
    "init [name]",
    "初始化一个项目",
    (yargs) => {
      yargs.option("name", {
        type: "string",
        describe: "项目的名称",
        alias: "n",
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: "list",
    aliases: ["ll", "ls"],
    describe: "本地 package 列表",
    builder: (yargs) => {},
    handler: (argv) => {
      console.log(argv);
    },
  }).argv; // 创建一个脚手架
