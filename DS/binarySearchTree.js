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