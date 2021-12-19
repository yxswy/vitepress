# Effect

## 使用

`effect` 在 vue-next 中的创建了类似树一般的整体结构

```javascript
const count = ref(0);
const setCount = () => {
  count.value++;
};

effect(() => {
  console.log(count.value * 9);
});
```

::: tip
`effect`的收集原理是在于将用户传递的函数给予每个响应式，在响应式触发的时候被动的去触发用户传入函数，而并不是真的是去智能辨识每个响应式去收集。
:::

## 思考

```javascript
shouldTrack = true;
// 执行的时候给全局的 activeEffect 赋值
// 利用全局属性来获取当前的 effect
activeEffect = this as any;
// 执行用户传入的 fn
console.log("执行用户传入的 fn");
const result = this.fn();
// 重置
shouldTrack = false;
activeEffect = undefined;
```

在执行`fn`函数的时候会触发`Proxy`代理的 get 函数，进行以来获取。

我们该思考的是这个函数放在了哪里，才可以被响应式随时拿到？

在`effect.ts`文件中有一个`const targetMap = new WeakMap();`

`targetMap`就是`vue`在整个项目中的所有的响应式的集合

```javascript
// targetMap: {
//    obj(用户的对象)： new Set(所对应需要触发的函数)
// }
```

在触发代理`Proxy`的时候会获取对应的触发函数，进行调用，更改页面效果
