# Jsx

vue-next

## 使用

以下皆在 `.jsx` 文件下执行

```javascript
// 这种写法就不会具有动态改变数据的变化的能力
const HelloWorld1 = <div>{`child2 count: ${count.value}`}</div>

const HelloWorld2 = () => <div>{`child2 count: ${count.value}`}</div>
```

父组件像子组件传递插槽

```javascript
export default {
    setup() {
        const slots = {
            default: () => <h1>默认</h1>,
            foo: () => <h1>foo</h1>,
            name: () => <h1>name</h1>
        }
        return { slots }
    },
    render() {
        return (
            <div>
                <Child v-slots={this.slots}></Child>
            </div>
        )
    }
}
```

```javascript
export default {
    render(proxy) {
        console.log(proxy, this.$slots)
        return (
            <div>
                {this.$slots.default()}
                {this.$slots.foo()}
                {this.$slots.name()}
            </div>
        )
    }
}
```
