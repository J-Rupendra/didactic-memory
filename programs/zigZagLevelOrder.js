zigzagLevelOrder = function (root) {
    const queue = []
    if (!root) {
        return queue
    }
    const res = [[root.val]]
    let levelNodes = []
    let isZigZag = true
    queue.push(root)
    queue.push(null)
    while (queue.length !== 0) {
        const currNode = queue.shift()
        if (!currNode) {
            if (queue.length === 0) {
                break
            }
            queue.push(null)
            if(isZigZag){
                levelNodes.reverse()
            }
            res.push(levelNodes)
            levelNodes = []
            isZigZag = !isZigZag
        } else {
            if (currNode.left) {
                levelNodes.push(currNode.left.val)
                queue.push(currNode.left)
            }
            if (currNode.right) {
                levelNodes.push(currNode.right.val)
                queue.push(currNode.right)
            }
        }
    }
    return res

}