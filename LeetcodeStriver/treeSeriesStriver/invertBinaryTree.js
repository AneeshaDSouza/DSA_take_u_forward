function invertBinaryTree(tree) {
    // Write your code here.
      if(tree=== null) return;
      [tree.left, tree.right] = [tree.right, tree.left];
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.invertBinaryTree = invertBinaryTree;