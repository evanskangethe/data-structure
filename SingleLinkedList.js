function Node(value) {
  this.value = value;
  this.next = undefined;
}

function SLinkedList() {
  this.length = 0;
  this.head = undefined;

  return {
    insert: function (item) {
      //make sure item to insert is valid
      if (!item) return ;

      //create a new node to wrap around the item data
      var node = new Node(item)
      
      //check to see if it is  not the first element in list if so update the node next pointer to point to old head
      if (head) {
        node.next = head;
      }
      
      head = node;
      length++;
    },
    
    delete: function(value){
        var current = head;
        
        if (head.value === value) {
            head = head.next;
            return;
        }
        //Iterate through thr list
        while(curr){
        
            //check if the next node is the matched one
            if (curr.next) {
                var next = curr.next;
                if(next.value === value){
                    //Remove from list and update the next pointer if found
                    curr.next = next.next;
                    
                    length--;//update the list length
                    break;//stop loop
                }
            }
            
            curr = curr.next;
        }
    },
    
    search: function(value) {
        var curr = head;
        var found = undefined;
        
        while(curr){
            if(curr.value === value) {
                found = curr;
                break;
            }
            
            curr = curr.next;
        }
        
        return found;
    },
    
    get size(){
        return length;
    },
    
    print: function() {
        var results = [];
        
        var curr = head;
        
        while(curr){
            results.push(curr.value);
            
            curr = curr.next;
        }
        
        return results;
    }
  };
}
