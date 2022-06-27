//https://leetcode.com/problems/design-circular-queue/submissions/

/*Runtime: 657 ms, faster than 5.03% of JavaScript online submissions for Design Circular Queue.
Memory Usage: 54 MB, less than 5.03% of JavaScript online submissions for Design Circular Queue.
*/

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.maxLength = k;
  this.queue = [];
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.queue.length < this.maxLength){
      console.log('we have available space, so we can enqueue number:' , value)
      this.queue.push(value)
      console.log('here is the queue now:', this.queue)
      return true;
    }
    else {
      return false;
    }
};


MyCircularQueue.prototype.deQueue = function() {
    if(this.queue.length > 0){
      this.queue.shift();
      return true;
    }
    else{
      return false;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.queue.length === 0){
      return -1;
    }
    return this.queue[0]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.queue.length > 0){
      return this.queue[this.queue.length -1]
    }
    else{
      return -1;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.queue.length === 0){
      return true;
    }
    else{
      return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.queue.length === this.maxLength){
      return true;
    }
    else{
      return false;
    }
};

var obj = new MyCircularQueue(3)
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.isFull());
console.log(obj.deQueue());
console.log(obj.enQueue(4));


/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

