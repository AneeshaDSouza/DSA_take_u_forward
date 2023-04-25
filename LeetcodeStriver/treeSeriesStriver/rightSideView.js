/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const arr=[]
    preorder(root, 0)
    return arr
    
    function preorder(root, level){
       
    if(!root) return 
        
        if(arr.length === level)
         arr.push(root.val)
    preorder(root.right, level+1)
    
    preorder(root.left, level+1)
    }
} 
//Input: root = [1,2,3,null,5,null,4]
//Output: [1,3,4]