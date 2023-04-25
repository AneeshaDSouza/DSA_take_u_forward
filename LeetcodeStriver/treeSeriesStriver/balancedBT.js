var isBalanced = function(tree) {
	let isBalanced = true
	function dfs(t){
		if(!t) return 0
		const left = dfs(t.left)
		const right = dfs(t.right)
		if(Math.abs(left-right) > 1){
			isBalanced = false
		}
		return 1 + Math.max(left, right)
	}
	dfs(tree)
  return isBalanced;    
};

var isBalanced = function(tree) {    
     
    return dfsHeight(tree) != -1;
  
function dfsHeight( root) {
    if (root == null) return 0;
    
    let leftHeight = dfsHeight (root.left);
    if (leftHeight == -1) return -1;
    let rightHeight = dfsHeight (root.right);
    if (rightHeight == -1) return -1;
    
    if (Math.abs(leftHeight - rightHeight) > 1)  return -1;
    return Math.max(leftHeight, rightHeight) + 1;
}
};
