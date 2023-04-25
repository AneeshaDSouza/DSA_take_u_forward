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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxi =[-Infinity];
    
    function maxPath(root, maxi){
    if (!root) return 0;   
        let lh = maxPath(root.left, maxi); 
        let rh = maxPath(root.right, maxi); 
        if(lh<0) lh=0;
        if(rh<0)  rh=0;
        maxi[0] = Math.max(maxi[0], lh+rh+root.val);
        return root.val + Math.max(lh, rh); 
    }
    let x = maxPath(root, maxi);
    return maxi;    
};