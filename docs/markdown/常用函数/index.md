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

## 手动切割数组

```javascript
function chunk(array, process, context) {
  var item = array.shift();
  process.call(context, item);
  if (array.length > 0) {
    arguments.callee(array, process, context);
  }
}

let arr = Array.apply(null, new Array(4));
arr = arr.map((elem, index) => index);

chunk(
  arr,
  function (item) {
    console.log(item);
    console.log(this);
    console.log(this.name);
  },
  { name: 123 }
);
```

## 使用 [].reduce 代替 forEach 进行返回

```typescript
const result = {};
keys.forEach((key) => {
  let value = parse(options, args, key);
  result[key] = value;
});
return result;
```

```typescript
return keys.reduce((result, key) => {
  result[key] = parse(options, args, key);
  return result;
}, {});
```

## 字符串读取对象中的数据

```typescript
const obj = {
  selector: { to: { val: "val to select" } },
  user: { name: "xiaohong" },
  target: [1, 2, { a: "test" }],
};

// get(obj, "selector.to.val", "target[0]", "target[2].a");
// ["val to select", 1, "test"]

export function get(obj, ...selectors: string[]) {
  return selectors.map((s) => {
    return s
      .replace(/\[(\w+)\]/g, ".$1")
      .split(".")
      .reduce((prev, cur) => {
        return prev && prev[cur];
      }, obj);
  });
}
```