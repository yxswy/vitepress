# Render

## 使用

### 获取参数

`this.$attrs` 中获取父组件传递的属性

`this.$listener` 中获取父组件传递的事件

`this.$slots.default` 默认插槽

`{...{ attrs }}` 挂载属性的方式

`[].map` 遍历数组渲染的方式类似 `v-for`

想使用 `v-if` 的请使用三目运算

`render` 中使用 `v-model` 有点困难，可以参照 `react` 中，使用 `value, onChange`(如果非要使用 `v-model` 也是可以的，需要额外的方式，不过忘记了)

### 代码

```vue
<script>
export default {
  methods: {
    renderTableColumn() {
      return (
        <el-table-column
          scopedSlots={{
            default(props) {
              if (render)
                return (
                  <span class="text-1">{render(props.row, props.$index)}</span>
                );

              return (
                <span class="text-">
                  <text-transform-input
                    setValue={(value) => {
                      _that.$set(props.row, privateKey, value);
                    }}
                    value={props.row[privateKey]}
                  />
                </span>
              );
            },
          }}
        />
      );
    },
  },
  render() {
    return (
      <div class="common-table-index">
        {this.$slots.default}
        {this.$slots.header}
        <el-table
          data={data}
          {...{ attrs }}
          on-selection-change={this.handleSelectionChange}
          v-loading={this.loading}
          header-cell-style={{
            background: "#fafafa",
            color: "#000",
          }}
        >
          {col.map((item) => this.renderTableColumn(h, item))}
        </el-table>
        {this.$slots.footer}
      </div>
    );
  },
};
</script>
```
