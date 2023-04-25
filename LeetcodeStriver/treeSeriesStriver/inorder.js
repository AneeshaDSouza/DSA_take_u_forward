//recursive
var inorderTraversal = function(root) {
    const arr=[]
    inorder(root)
    return arr
    
    function inorder(root){
    if(!root) return 
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
    }
}

//iterative
var inorderTraversal = function(root) {
    let inorder = []; 
      let stack = [];
          let node = root;
          while(true){
              if(node != null){
                  stack.push(node);
                  node = node.left;
              }
              else{
                  if(!stack.length){
                      break;
                  }
                  node = stack.pop();
                  inorder.push(node.val);
                  node = node.right;
              }
          }
          return inorder
  }

  //morris traversal -o(1)
  var inorderTraversal = function(root) {
    let inorder = []; 
        
        let cur = root; 
        while(cur != null) {
            if(cur.left == null) {
                inorder.push(cur.val); 
                cur = cur.right; 
            }
            else {
                let prev = cur.left; 
                while(prev.right != null && prev.right != cur) {
                    prev = prev.right; 
                }
                
                if(prev.right == null) {
                    prev.right = cur;
                    cur = cur.left; 
                }
                else {
                    prev.right = null; 
                    inorder.push(cur.val); 
                    cur = cur.right; 
                }
            }
        }
        return inorder; 
    
}