# NextTick

## 使用

```javascript
nextTick(() => {
  console.log("25--" + app1.innerText);
});
app5.innerText = 5;
```

## 源代码

> packages\runtime-core\src\scheduler.ts

```Typescript
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = Promise.resolve()
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

`nextTick` 使用的是 `Promise.resolve()`

将你需要执行的代码放入到微任务当中

只有在你的宏任务代码执行结束之后才会执行的微任务

::: tip
[宏任务与微任务](http:///www.baidu.com)
:::
