# Vue.observable

2.6.0 版本以后才支持，类似于 Vuex

## 使用

```javascript
import Vue from "vue";
const store = Vue.observable({
  name: "1",
});

const setName = (val) => {
  store.name = val;
};
```

::: tip
3.0 以后推荐 [pinia](http://www.baidu.com)
:::
