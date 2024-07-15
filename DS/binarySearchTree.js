class Node{
    constructor(data){
      this.data = data
      this.left = null
      this.right = null
    }
  }
    
    class BinarySearchTree{
      constructor(){
        this.root = null
      }
      addNode(root, data){
        if(root === null){
          return new Node(data)
        }
        if(data<root.data){
          root.left = this.addNode(root.left,data)
        } else {
          root.right = this.addNode(root.right,data)
        }
        return root
      }
      insertion(data){
        let temp = this.root
        this.root = this.addNode(temp, data)
      }
      printTree(flag){
        let temp = this.root
        if(flag === "DFS"){
          this.preOrderTraversal(temp)
        } else if(flag === "BFS"){
          this.levelOrderTraversal(temp)
        }
      }
      preOrderTraversal(root){
        if(!root){
          return
        }
        console.log(root.data,"->")
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
      }
      levelOrderTraversal(root){
        if(!root){
          console.log("No data found")
          return
        }
        let queue = []
        queue.push(root)
        queue.push(null)
        while(queue.length>0){
          let node = queue.shift()
          if(!node){
            console.log("------------")
            if(queue.length>0)
            queue.push(null)
            continue
          }
          console.log(node.data,"<-")
          if(node.left){
            queue.push(node.left)
          }
          if(node.right){
            queue.push(node.right)
          }
          
        }
      }
      height(){
        let temp = this.root
        console.log("height of the BST :: ",this.treeHeight(temp))
      }
      treeHeight(root){
        if(!root){
          return 0
        }
        let leftSubTreeHeight = this.treeHeight(root.left)
        let rightSubTreeHeight = this.treeHeight(root.right)
        return Math.max(leftSubTreeHeight, rightSubTreeHeight)+1
      }

      lowestCommonAncestor(node, n1,n2){

        if(!node){
          return null
        }

        if(node.data === n1 || node.data === n2){
          return node
        }

        const left_lca = this.lowestCommonAncestor(node.left, n1, n2)
        const right_lca = this.lowestCommonAncestor(node.right, n1, n2)

        if(left_lca && right_lca){
          return node
        }

        return left_lca||right_lca

      }

      /*

      in the binary tree we check left, right tree and if the tree has matching value in it then we pass particular node
      if the left, right tree has no matching value then it will give null 
      if left tree has a match and right has no match then we pass left subtree instead of node because node is not the ancestor as it's right side tree doesn't have another match
      same applies for the right tree.
      when we find both left and right sub trees as not null then this particular node is the ancestor so we pass this node to top level
      */

    }
  
  
  let BT = new BinarySearchTree()
  BT.insertion(10)
  BT.insertion(9)
  BT.insertion(11)
  BT.insertion(12)
  BT.insertion(19)
  BT.insertion(11)
  BT.insertion(17)
  BT.printTree("DFS")
  BT.printTree("BFS")
  BT.height()