class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(root, k) {
      
      let result = [];
      let ctr1 = 0;
        let N= counter(root);
        return result[ctr1-k];
        
        function counter(node){
          if(!node) return null;
          if(node.left) counter(node.left);
          result.push(node.value);
          ctr1++; 
          if(node.right) counter(node.right);
      } 
        
     
  
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  