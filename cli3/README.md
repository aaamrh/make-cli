# 脚手架 ma-cli3

基于 commander 实现的脚手架

## Start

### demo

``` js
  // 最小粒度的脚手架
  #!/usr/bin/env node

  const commander = require("commander");
  const pkg = require("../package.json");

  const { program } = commander; // 单例

  program.version(pkg.version).parse(process.argv);
```

和 yargs 不同的是，默认情况下就支持 -V -h

### 命令注册

#### command 注册命令

#### addCommand 注册命令

```
可以注册子命令

独立的可执行（子）命令
当.command()带有描述参数时，就意味着使用独立的可执行文件作为子命令。 Commander 会尝试在入口脚本的目录中搜索名称组合为 command-subcommand 的文件，如以下示例中的 pm-install 或 pm-search。搜索包括尝试常见的文件扩展名，如.js。 你可以使用 executableFile 配置选项指定自定义名称（和路径）。 你可以使用 .executableDir() 为子命令指定自定义搜索目录。

你可以在可执行文件里处理（子）命令的选项，而不必在顶层声明它们。

示例代码：pm

program
  .name('pm')
  .version('0.1.0')
  .command('install [name]', 'install one or more packages')
  .command('search [query]', 'search with optional query')
  .command('update', 'update installed packages', { executableFile: 'myUpdateSubCommand' })
  .command('list', 'list packages installed', { isDefault: true });

program.parse(process.argv);
如果该命令需要支持全局安装，请确保有对应的权限，例如755。
```
