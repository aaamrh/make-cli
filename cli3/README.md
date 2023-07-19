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

### 知识点

和 yargs 不同的是，默认情况下就支持 -V -h 