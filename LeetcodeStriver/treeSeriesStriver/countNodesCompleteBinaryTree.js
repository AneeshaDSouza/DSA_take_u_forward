/* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var countNodes = function(root) {

       if(root == null) return 0;
       
       let left = getHeightLeft(root);
       let right = getHeightRight(root);
       
       //If left and right are equal it means that the tree is complete and hence go for 2^h -1.
       if(left == right) return ((2<<(left)) -1);
           
       //else recursively calculate the number of nodes in left and right and add 1 for root.
       else return countNodes(root.left)+ countNodes(root.right)+1;
   }
   
   
   function getHeightLeft( root){
       let count=0;
       while(root.left!=null){
           count++;
           root = root.left;
       }
       return count;
   }
   
   
   function getHeightRight( root){
       let count=0;
       while(root.right!=null){
           count++;
           root = root.right;
       }
       return count;
   }

   //Input: root = [1,2,3,4,5,6]
//Output: 6