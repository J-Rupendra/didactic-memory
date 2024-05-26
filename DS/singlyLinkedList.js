//recent contribution

class Node{
    constructor(data){
      this.data = data
      this.next = null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null
    }
    
    insert(data){
      if(this.head === null){
        this.head = new Node(data)
      } else {
        
      let pointer = this.head
      while(pointer.next){
        pointer = pointer.next
      }
        pointer.next = new Node(data)
      }
    }
    
    removeAt(indexToRemove){
      if(this.head === null || indexToRemove>=this.size() || indexToRemove<0){
        console.log("Cannot be removed")
      } else if(indexToRemove === 0){
        this.head = this.head.next
      } else {
        let ind = 0, pointer = this.head
        while(++ind<indexToRemove){
          pointer = pointer.next
        }
        pointer.next = pointer.next.next
      }
      
    }
    
    print(){
      if(this.head === null){
        console.log("No data found")
      } else {
        let pointer = this.head, res=""
        while(pointer){
          res+=pointer.data+(pointer.next===null?"":"->")
          pointer = pointer.next
        }
        console.log("Linked List :: "+res)
      }
    }
    
    size(){
      let count=0
      let pointer = this.head
      while(pointer){
        count++
        pointer=pointer.next
      }
      return count
    }
    reverse(){
      if(this.head === null)
      return
      let selectedNode = this.head.next
      let prevNode = this.head
      while(prevNode.next){
        prevNode.next = selectedNode.next
        selectedNode.next = this.head
        this.head = selectedNode
        selectedNode = prevNode.next
      }
    }
  }
  
  
  let LL = new LinkedList()
  LL.insert(1)
  LL.insert(2)
  LL.insert(3)
  LL.insert(4)
  LL.insert(5)
  LL.print()
  LL.reverse()
  LL.print()
  console.log("size of list :: ",LL.size())
  
//while solving problems like remove nth node from last, it's ok to take a dummy node and put it before head to handle the corner cases.


// old

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=this.tail=null;
        this.length=0;
    }

    push(val){
        if(this.head){
            this.tail.next=new Node(val)  //instead we can use while loop also with a ref pointer
            this.tail=this.tail.next;
        }
        else{
            this.head=this.tail=new Node(val)
        }
        return ++this.length;

    }

    pop(){
            let dumPointer=this.head;
            let valueToReturn=null;
            if(!this.head){
                valueToReturn=this.head=this.tail=null;
            }
            else if(!this.head.next){

                valueToReturn=this.head
                this.head=this.tail=null;
            }
            else{
                while(dumPointer.next.next!=null){
                    dumPointer=dumPointer.next;
                }
                valueToReturn=dumPointer.next
                this.tail=dumPointer
                dumPointer.next=null;
            }
            this.length=this.length && this.length-1;
            console.log(this.length);
            return valueToReturn;
    }

    reverse(){
        // let newHead=null;
        // while(this.head){
        //     let dumNode=this.head;
        //     this.head=this.head.next;
        //     dumNode.next=newHead;
        //     newHead=dumNode;
        //     this.tail=this.head;
        // }
        // this.head=newHead
        // return this.head

        //inplace algo
        let currentNode=this.head
        let newHead=null; 
        let nexNode=null;
        while(currentNode){
            nexNode=currentNode.next; //storing the next node for linking that with rest list after delinking the current node
            currentNode.next=newHead //after delinking the cur node, pointing it to the first ele as it should go to the first position
            newHead=currentNode; //changing the head pointer to cur node to make cur node as first node
            currentNode=nexNode; //now re-assigning the current node to nextNode as we have to delink nextNode in next iteration
        }
        this.head=newHead
        return this.head
        
    }

}

var list=new SinglyLinkedList();
console.log(list.push(1));
// console.log(list);
console.log(list.push(2));
// console.log(list);
console.log(list.push(3));
console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list.reverse());




