# Provide-Inject

vue-next

## 使用

```vue
<script>
import { provide } from "vue";
provide("xx", value);
</script>

<script>
import { inject } from "vue";
const value = inject("xx");
</script>
```

## 源码

> packages\runtime-core\src\apiInject.ts

## 补充

实现方式就是将需要存储的数据放入到`this.$`当中，再取出来。

当你打印的时候你可以从 `this.$.provides` 中查看数据
