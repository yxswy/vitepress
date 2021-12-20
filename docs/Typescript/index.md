# Typescript

## 对象

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

const obj: Record<string, any> = {};
```

```typescript
interface Obj {
  [key: string]: any;
}
const obj: Obj = {};
```
