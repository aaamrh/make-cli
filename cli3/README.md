# 脚手架

简单脚手架

`npm publish --access=public` 发布包

## 开发

### npm link

* npm link 是将当前目录包链接到全局
* npm remove -g pka-name 是将全局的链接的 pkg-name 包移除
* npm unlink pka-name 是将当前项目中软链接的包移除

在 projA 下， npm link. 在 projB 下 npm link projA（包名）就可以在 projA 还没发布的时候就能引入本地的代码。
当然，还没发布的时候 npm i projA 的时候会报错，我们需要手动在 package.json 中写一下 `dependenices`

### 调试本地脚手架

`npm list -g` 可以查看link

1. 在项目根目录下执行 `npm link`, 当不需要的时候执行 `npm remove @aaamrh/ma-cli1 -g` (这时候需要重新全局安装 @aaamrh/ma-cli1)
2. 在项目目录下，`npm i -g <pkg>` (个人试了不行)

### 脚手架命令注册和参数解析

## FAQ

当在项目中 npm i -g 脚手架 ， 应该会默认有本地代码的软链，如果不希望这样，要在代码目录外全局安装（个人试了不太行，可能以前老版本的可以）
