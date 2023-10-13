
class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    // Function to add an element to the queue with a specified priority
    add(element, priority) {
      const queueElement = { element, priority };
      let added = false;
      
      for (let i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      
      if (!added) {
        this.items.push(queueElement);
      }
    }
  
    // Function to remove and return the element with the highest priority
    poll() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift().element;
    }
  
    // Function to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Function to get the element with the highest priority without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0].element;
    }
  
    // Function to get the size of the queue
    size() {
      return this.items.length;
    }
  }
  function calculateMinCost() {
    //your code here
    const input=document.getElementById("rope-lengths");
    let arr= input.value.split(",");
    console.log(arr)
    let n=arr.length;
    const q = new PriorityQueue();
         
         for(let i=0;i<n;i++){
             q.add(parseInt(arr[i]));
         }
         let ans=0;
         let ans1=0;
         while(q.size()>1){
             
             ans=q.poll()+q.poll();
             ans1=ans1+ans;
             q.add(ans);
         }
         const res= document.getElementById("result");
         res.innerText=ans1;
  }  
  