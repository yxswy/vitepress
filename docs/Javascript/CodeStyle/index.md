# Javascript 代码风格

或运算符优先于三目运算

```javascript
console.log(true || false ? 0 : 1); // 0

console.log(true || (false ? 0 : 1)); // true
```
