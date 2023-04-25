/*Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all
 the values along the path equals targetSum.

A leaf is a node with no children.


*/

var hasPathSum = function(root, targetSum) {
    if(!root) return false
    targetSum=targetSum-root.val
    
    if(!root.left && !root.right) return targetSum==0
    else{
        return hasPathSum(root.left,targetSum) || hasPathSum(root.right,targetSum)
    }
    
};

//like 2 sum
//Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
//Output: true