TypeScript Jest Mock Function with Accurate Typing Demo
=========================================================

使用`jest.fn`可以创建一个mock function，关于它的typing我一直感觉有疑问，两边对不上。

jest.fn的类型声明是这样：

```
function fn<T, Y extends any[]>(implementation?: (...args: Y) => T): Mock<T, Y>;
```

这里会让人觉得奇怪，为什么参数类型`Y`是一个数组？如果我想mock的函数的参数是一个普通类型，比如`string`，那这里应该怎么写？

通过这个demo发现，原来要写成`[string]`，而不是`string[]`或`any[]`。

`Y extends any[]`这里的`any[]`想表达的是一个“元组“（tuple），而不是一个“数组”(array).

```
npm install
npm test
```
