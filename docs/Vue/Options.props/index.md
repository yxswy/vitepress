# Options.props

## 源码

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
