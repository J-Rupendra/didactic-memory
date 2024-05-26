class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode=new Node(val);
        if(this.head) {
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=this.tail.next; 
        }
        else{
            this.head=this.tail=newNode;
        }
        this.length++;
    }
    pop(){
        if(this.head){
            this.tail=this.tail.prev;
            let p=this.tail.next;
            this.tail.next=null;
            p.prev=null;
            this.length=this.length && --this.length;
            return p;
        }
        else return null;
    }

    // shift()  //removes first element - move head to next ele make head prev null and prev element next to null
    // unShift()  //adds an element at first

    reverse(){
        let newHead=null;
        let currentNode=this.head;
        let nextNode=null;
        while(currentNode){
            nextNode=currentNode.next;
            if(nextNode)
            nextNode.prev=currentNode.prev;
            currentNode.next=newHead
            currentNode.prev=null;
            if(newHead)
            newHead.prev=currentNode
            newHead=currentNode;
            currentNode=nextNode;
        }
        this.tail=this.head
        this.head=newHead
        return this.head;

    }
}

var list=new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(4);
// console.log(list.pop())
console.log(list.reverse());