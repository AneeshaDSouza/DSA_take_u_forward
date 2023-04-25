//height of bt

var maxDepth = function(root) {
    if (!root) return 0;
  //  if(!root.left && !root.right) return 1;     
        let lh = maxDepth(root.left); 
        let rh = maxDepth(root.right); 
        
        return 1 + Math.max(lh, rh); 
};