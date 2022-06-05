---
title: "vue-3.2.31"
date: "2022-03-21"
---

## 如何执行被生成为字符串的代码

```javascript
const code = `return function add(x) { console.log('add', arguments) }`;
console.log(new Function("Vue", code).name);
const fn = new Function("Vue", code)(1);

fn();
```

## nextTick

> packages\runtime-core\src\scheduler.ts

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = Promise.resolve();
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
```

将你需要执行的代码放入到微任务当中

只有在你的宏任务代码执行结束之后才会执行的微任务

## effect

::: tip
`effect`的收集原理是在于将用户传递的函数给予每个响应式，在响应式触发的时候被动的去触发用户传入函数，而并不是真的是去智能辨识每个响应式去收集。
:::

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

## 父组件向子组件传递插槽

```javascript
export default {
    setup() {
        const slots = {
            default: () => <h1>默认</h1>,
            foo: () => <h1>foo</h1>,
            name: () => <h1>name</h1>
        }
        return { slots }
    },
    render() {
        return (
            <div>
                <Child v-slots={this.slots}></Child>
            </div>
        )
    }
}
```

```javascript
export default {
    render(proxy) {
        console.log(proxy, this.$slots)
        return (
            <div>
                {this.$slots.default()}
                {this.$slots.foo()}
                {this.$slots.name()}
            </div>
        )
    }
}
```

## useSlots

> packages\runtime-core\src\apiSetupHelpers.ts

```typescript
export function useSlots(): SetupContext["slots"] {
  return getContext().slots;
}
```

## useAttrs

> packages\runtime-core\src\apiSetupHelpers.ts

```typescript
export function useAttrs(): SetupContext["attrs"] {
  return getContext().attrs;
}
```

## $once

```vue
<script>
export default {
  mounted() {
    const timer = setInterval(() => {}, 1000);
    this.$once("hook:beforeDestroy", () => clearInterval(timer));
  },
};
</script>
```

::: tip
[hooks](http://www.baidu.com)
:::

## Options.props

```typescript
function assertType(value: unknown, type: PropConstructor): AssertionResult {
  let valid;
  // type -> 构造函数
  const expectedType = getType(type);
  console.log("expectedType", expectedType, isSimpleType(expectedType));
  // expectedType -> 构造函数的名称
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType,
  };
}
```

```typescript
assertType(1, Number);
```

`value` 为值，`type` 为类型（`String`, `Array`, `Object`）

`expectedType` 获取的是通过正则对 `Array() { [native code] }` 所截取的 `Array` 部分

```typescript
function getType(ctor: Prop<any>): string {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
```

我认为在这里不适用 instanceof 或者是 typeof 的原因是，俩者都不能完全去判断，且支持额外的其他类型，所以使用正则

## provide inject

> packages\runtime-core\src\apiInject.ts

```vue
<script>
import { provide } from "vue";
provide("xx", value);
</script>
```

```vue
<script>
import { inject } from "vue";
const value = inject("xx");
</script>
```

实现方式就是将需要存储的数据放入到`this.$`当中，再取出来。

当你打印的时候你可以从 `this.$.provides` 中查看数据

## watch

> packages\runtime-core\src\apiWatch.ts

- watch
- watchEffect
- watchPostEffect
- watchSyncEffect

这四个函数都是使用的 `doWatch` 函数

`dowatch` 的函数原理又类似于 `effect`

```typescript
const effect = new ReactiveEffect(getter, scheduler); // TODO:

if (__DEV__) {
  effect.onTrack = onTrack;
  effect.onTrigger = onTrigger;
}

// initial run
if (cb) {
  if (immediate) {
    job();
  } else {
    oldValue = effect.run();
  }
} else if (flush === "post") {
  queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
} else {
  effect.run();
}

return () => {
  effect.stop();
  if (instance && instance.scope) {
    remove(instance.scope.effects!, effect);
  }
};
```