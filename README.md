# My NPM Package
一个日常开发积累的工具包。
每次 npm publish 都需要修改 package.json version版本号保证其唯一。

## 版本号
版本号是用来标识软件或应用的不同发布版本的一个数字序列。它能够帮助开发者、维护人员和用户区分不同版本之间的差异，明确功能、修复和兼容性等方面的变化。

版本号通常是由三个数字组成的，格式为 MAJOR.MINOR.PATCH（主版本号.次版本号.修订号）。根据软件开发中的变化，这三个数字会有不同的变化规则。
1. 主版本号（MAJOR）
主版本号的更新通常表示软件有了重大变化。这些变化可能包括不兼容的 API 修改、核心架构的重构等，可能会导致现有用户或开发者的代码不再兼容，因此需要谨慎对待主版本号的更新。
  例如，1.0.0 更新到 2.0.0。
  主版本号的更新通常意味着重大的功能变动或破坏性更改。
2. 次版本号（MINOR）
次版本号的更新表示软件新增了功能或特性，但并不会破坏已有的功能或 API。用户可以在不破坏现有环境的情况下，享受到新功能的提升。
  例如，1.0.0 更新到 1.1.0。
  次版本号的更新通常是在保证兼容性的前提下，添加了新功能或进行了一些小的改进。
3. 修订号（PATCH）
修订号的更新通常表示修复了已知的 bug 或进行了小的性能优化，通常不会影响到现有功能或 API。修订号的变化往往是针对已经存在的问题进行修补，旨在提高软件的稳定性。
  例如，1.0.0 更新到 1.0.1。
  修订号的更新是最小的改动，通常只是修复了几个错误或进行了少量的优化。

## node
node v16.20.0

## test
```bash
npm test
```
 
## Installation
```bash
npm install muzidigbig-utils-npm
```

## Usage
```javascript
// const { sayHello } = require('muzidigbig-utils-npm');
/*
import { sayHello } from 'muzidigbig-utils-npm'; // ES6
console.log(sayHello('World')); // Outputs: Hello, World!
*/
import * as muzidigbig from 'muzidigbig-utils-npm'; // ES6
console.log(muzidigbig.sayHello('World')); // Outputs: Hello, World!
```