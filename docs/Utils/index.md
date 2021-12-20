# 工具类

## isFunction

```javascript
export const isFunction = (val) => typeof val === "function";
```

```typescript
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
```

## 获取文件后缀

```javascript
function getExt(filename) {
  if (typeof filename == "string") {
    // 如果文件没有后缀名，返回null
    if (!filename.includes(".")) {
      return null;
    }
    return filename.split(".").pop().toLowerCase();
  } else {
    throw new Error("filename must be a string type");
  }
}
```

## 保留小数点后几位

```javascript
function cutNumber(number, no = 2) {
  if (typeof number != "number") {
    number = Number(number);
  }
  return Number(number.toFixed(no));
}
```
