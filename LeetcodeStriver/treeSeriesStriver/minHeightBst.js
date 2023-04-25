function minHeightBst(array) {
    // Write your code here.
      return constructMinHeightBst(array,0,array.length-1);
  }
  
  function constructMinHeightBst(array, low, high){
      if(high<low) return null;
      let mid =Math.floor((low+high)/2) ;
      const bst =new BST(array[mid]);
      bst.left = constructMinHeightBst(array, low, mid-1);
      bst.right = constructMinHeightBst(array, mid+1, high);
      return bst
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;