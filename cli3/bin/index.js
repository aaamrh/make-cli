#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");

const { program } = commander; // 单例

program.version(pkg.version).parse(process.argv);
