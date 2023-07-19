# 脚手架 cli2

使用 yargs 来处理命令参数

## 使用 yargs 来创建脚手架

```js
// 最简化的一个脚手架
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

console.log(hideBin(process.argv)); // 参数解析

const arg = hideBin(process.argv);

yargs(arg).argv; // 创建一个脚手架
```
