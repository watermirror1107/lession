Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function reactDiff(prevChildren, nextChildren, parent) {
    let lastIndex = 0
    for (let i = 0; i < nextChildren.length; i++) {
        let nextChild = nextChildren[i];
        for (let j = 0; j < prevChildren.length; j++) {
            let prevChild = prevChildren[j]
            if (nextChild === prevChild) {
                // patch(prevChild, nextChild, parent)
                if (j < lastIndex) {
                    // 移动到前一个节点的后面
                    // let refNode = nextChildren[i - 1].el.nextSibling;
                    // parent.insertBefore(nextChild.el, refNode)
                    let n = prevChildren.splice(j, 1)[0]
                    prevChildren.insert(i, n)
                } else {
                    // 不需要移动节点，记录当前位置，与之后的节点进行对比
                    lastIndex = j
                }
            }
        }
    }
}

let a = ['a', 'b', 'c', 'd', 'e']
let b = ['a', 'c', 'd', 'e', 'b']
reactDiff(a, b)
console.log(a)
