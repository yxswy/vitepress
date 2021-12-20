# $once

## 使用

```vue
<script>
export default {
  mounted() {
    const timer = setInterval(() => {}, 1000);
    this.$once("hook:beforeDestory", () => clearInterval(timer));
  },
};
</script>
```

::: tip
[hooks](http://www.baidu.com)
:::
