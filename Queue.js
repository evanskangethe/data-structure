function Queue() {
  let head = 0;//index of first elemnt
  let tail = 0;//index of last item
  let storage = {};//storage object

  return {
    //add item in the queue and increment the last item
    enQueue: function(item) {
      storage[tail] = item;
      tail++;
    },
    /*remove item in the queue and increment first item
    * return removed item
    */
    deQueue: function() {
      //check if the queue is empty
      if (this.isEmpty()) {
        return undefined;
      }

      let item = storage[head];//get the first item in the queue
      delete storage[head];//remove the item in the queue
      head++;//increment the head

      /*
       *check if the head and tail are equal
       *and initialise it to zero if equal
      */
      if (head === tail) {
        head = 0;
        tail = 0;
      }

      return item;
    },
    /*
     *check if the queue is empty
    */
    isEmpty: function() {
      return this.size() === 0;
    },
    /*
     *check the size of the queue
    */
    size: function() {
      return tail - head;
    },
    /*
     *check the last item
    */
    peek: function () {
      //check if the list is isEmpty if empty return undefined
      if (this.isEmpty()) {
        return undefined;
      }
      return storage[tail - 1]
    },
    /*
     *print the elements in the queue
    */
    print: function () {
      let results = [];

      for (var key in storage) {
        if (storage.hasOwnProperty(key)) {
           results += `${storage[key]} `;
        }
      }

      return results;
    }
  }
}
