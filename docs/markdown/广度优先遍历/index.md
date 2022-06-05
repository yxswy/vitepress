# 广度优先遍历

Breadth First Search

广度优先搜索（BFS）是一种遍历或搜索数据结构（如树或图）的算法，也可以在更抽象的场景中使用。
它的特点是越是接近根结点的结点将越早地遍历。
例如，我们可以使用 BFS 找到从起始结点到目标结点的路径，特别是最短路径。
在 BFS 中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般使用队列实现。

> https://blog.csdn.net/qq_42893625/article/details/102592037

```html
<div id="container">
  <div class="c1-1">
    <div class="c1-2"></div>
    <div class="c1-3"></div>
    <div class="c1-4"></div>
    <div class="c1-5"></div>
  </div>
  <div class="c2-1"></div>
  <div class="c3-1"></div>
  <div class="c4-1"></div>
  <div class="c5-1">
    <div class="c5-2"></div>
    <div class="c5-3"></div>
    <div class="c5-4"></div>
    <div class="c5-5"></div>
  </div>
  <div class="c6-1"></div>
</div>
```

```javascript
/*广度优先遍历*/
let widthTraversal2 = (node) => {
  let nodes = [];
  let stack = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      let item = stack.shift();
      let children = item.children;
      nodes.push(item);
      // 队列，先进先出
      // nodes = [] stack = [parent]
      // nodes = [parent] stack = [child1,child2,child3]
      // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
      // nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i]);
      }
      console.log(stack);
    }
  }
  return nodes;
};
console.log(widthTraversal2(document.querySelector("#app")));
```
