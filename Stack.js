function Stack() {
  let storage = {}; //storage container
  let tail = 0;//size of stack

  return {
    push: function (item) {
      storage[tail] = item;
      tail++;
    },

    pop: function () {
      if (this.isEmpty()) {
        return undefined;
      }
      let item = storage[tail - 1];
      delete storage[tail - 1];
      tail -= 1;

      return item;
    },

    isEmpty: function () {
      return this.size() === 0;
    },

    size: function () {
      return tail;
    },

    peek: function () {
      if (this.isEmpty()) {
        return  undefined;
      }
      return storage[tail-1]
    },

    print: function () {
      let results = [];
      for (var key in storage) {
        if (storage.hasOwnProperty(key)) {
          results += `${storage[key]} `
        }
      }
      return results;
    }
  }
}
