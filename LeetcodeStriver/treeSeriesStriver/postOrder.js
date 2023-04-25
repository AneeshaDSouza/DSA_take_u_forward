var postorderTraversal = function(root) {
    const arr=[]
   postorder(root)
   return arr
   
   function postorder(root){
   if(!root) return 
   postorder(root.left)
   
   postorder(root.right)
       arr.push(root.val)
   }
};

//using 2 stacks
var postorderTraversal = function(root) {
    let st1 = []; 
        let st2 = [];
        let postOrder = [];
        
        if(root == null) return postOrder; 
        
        st1.push(root); 
        while(st1.length) {
            root = st1.pop(); 
            st2.push(root); 
            if(root.left != null) st1.push(root.left); 
            if(root.right != null) st1.push(root.right); 
        }
        while(st2.length) {
            postOrder.push(st2.pop().val); 
        }
        return postOrder; 
};

//using 1 stack
var postorderTraversal = function(root) {
    let st1 = []; 
        let postOrder = [];
        
        if(root == null) return postOrder; 
        
        let current = root;  
        while(current != null || st1.length) {
            if(current != null){
                st1.push(current);
                current = current.left;
            }else{
                let temp = st1[st1.length-1].right;
                if (temp == null) {
                    temp = st1.pop();
                    postOrder.push(temp.val);
                    while (st1.length && temp == st1[st1.length-1].right) {
                        temp = st1.pop();
                        postOrder.push(temp.val);
                    }
                } else {
                    current = temp;
                }
            }
        }
      
        return postOrder; 
};