function Node(value){
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
}

function DlinkedList(){
    var head = undefined;
    var tail = undefined;
    var length = 0;
    
    return {
        insert: function(item) {
            
            if (!item) return;
            
            var node = new Node(item);
            
            if (head) {
                node.next = head;
                head.prev = node;
            }
            
            head = node;
            
            if(!tail) {
                tail = node;
            }
            
            length++;
        },
        
        delete: function(value){
            var curr = head;
            
            while(curr) {
                if(curr.value === value) {
                    
                    var prev = curr.prev,next = curr.next;
                    
                    if(prev) {
                        prev.next = next;
                    }else {
                        head = next;
                    }
                    
                    if(next){
                        next.prev = prev;
                    }else{
                        tail = prev;
                    }
                    
                    length--;
                    
                    break;
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
        
        get size() {
        
            return length;
        },
        
        print: function() {
            var results = [];
            
            var curr = head;
            
            while(curr) {
                results.push(curr.value);
                
                curr= curr.next;
            }
            
            return results;
        }
    }
}
