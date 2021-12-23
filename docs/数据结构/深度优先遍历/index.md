# 深度优先遍历 （DFS）

Depth First Search

> https://blog.csdn.net/qq_42893625/article/details/102592037 6.5

和广度优先搜索一样，深度优先搜索（DFS）是用于在树/图中遍历/搜索的一种重要算法。
与 BFS 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在 DFS 中找到的第一条路径可能不是最短路径。
在 DFS 中，结点的处理顺序是完全相反的顺序，就像它们被添加到栈中一样，它是后进先出。所以深度优先搜索一般使用栈实现。

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

### 遍历一

```javascript
let deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node);
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList);
    }
  }
  return nodeList;
};
console.log(deepTraversal1(document.querySelector("#app"), []));
```

### 遍历二

这种和第一种其实就是栈的存放位置不同和存放的方式不同

```javascript
let deepTraversal2 = (node) => {
  let nodes = [];
  if (node !== null) {
    nodes.push(node);
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      nodes = nodes.concat(deepTraversal2(children[i]));
    }
  }
  return nodes;
};
console.log(deepTraversal2(document.querySelector("#app")));
```
