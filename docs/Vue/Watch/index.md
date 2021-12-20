# Watch

vue-next

## 开始

- watch
- watchEffect
- watchPostEffect
- watchSyncEffect

这四个函数都是使用的 `doWatch` 函数

`dowatch` 的函数原理又类似于 `effect`

## 源码

> packages\runtime-core\src\apiWatch.ts

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
