# React 小记

## jsx
:::warning
react 中作为一个组件的条件需要是一个函数，不然就只是一个静态元素
:::
```javascript
// 这种写法就不会具有动态改变数据的变化的能力
const HelloWorld1 = <div>{`child2 count: ${count.value}`}</div>
const HelloWorld2 = () => <div>{`child2 count: ${count.value}`}</div>
```