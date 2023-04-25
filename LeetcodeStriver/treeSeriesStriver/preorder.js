//recursive

var preorderTraversal = function(root) {
    const arr=[]
    preorder(root)
    return arr
    
    function preorder(root){
       
    if(!root) return 
         arr.push(root.val)
    preorder(root.left)
    
    preorder(root.right)
    }
}

//iterative
var preorderTraversal = function(root) {
    let preorder = [];
        if(!root ) return preorder; 
        let q = []; 
        q.push(root);
        while(q.length){
            let node = q.pop();
            preorder.push(node.val); 
            if(node.right != null){
                q.push(node.right);
            }
            if(node.left!= null){
                q.push(node.left);
            }
        }
        return preorder;
} 

var preorderTraversal = function(root) {
    let preorder = []; 
        
        let cur = root; 
        while(cur != null) {
            if(cur.left == null) {
                preorder.push(cur.val); 
                cur = cur.right; 
            }
            else {
                let prev = cur.left; 
                while(prev.right != null && prev.right != cur) {
                    prev = prev.right; 
                }
                
                if(prev.right == null) {
                    
                    prev.right = cur;
                    preorder.push(cur.val); 
                    cur = cur.left; 
                }
                else {
                    prev.right = null; 
                    
                    cur = cur.right; 
                }
            }
        }
        return inorder; 
    
}

