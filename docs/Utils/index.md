# 工具类

## isFunction

```javascript
export const isFunction = (val) => typeof val === "function";
```

```typescript
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
```
