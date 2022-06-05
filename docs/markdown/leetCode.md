LeetCode

## 27.移除元素

> [数组中移除元素并不容易！](https://www.bilibili.com/video/BV12A4y1Z7LP)

> [LeetCode 27 移除数组元素](https://leetcode.cn/problems/remove-element/comments/)

> [其他语言版本实现](https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)

```typescript
function removeElement(nums: number[], val: number): number {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i]
        }
    }
    return k
}
```

```rust
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut slow_index: i32 = 0;
        for pos in 0..nums.len() {
            if nums[pos] != val {
                nums[slowIdx] = nums[pos];
                slowIdx+=1;
            }
        }
        return slow_index;
    }
}
```