//Input: root = [1,2,5,3,4,null,6]
//Output: [1,null,2,null,3,null,4,null,5,null,6]

var flatten = function(root) {
    let prev = null;
    flattenTree(root);
    function flattenTree(root){
      if(root == null) return; 
        
        flattenTree(root.right); 
        flattenTree(root.left); 
        
        root.right = prev;
        root.left = null; 
        prev = root; 
    }
};

var flatten = function(root) {
    if(root == null) return; 
        
        let st = []; 
        st.push(root); 
        while(st.length) {
            let cur = st[st.length-1];
            st.pop();
            
            if(cur.right != null) {
                st.push(cur.right); 
            }
            if(cur.left != null) {
                st.push(cur.left); 
            }
            if(st.length) {
                cur.right = st[st.length-1]; 
            }
            cur.left = null;
        }
};

//morris

var flatten = function(root) {
    let cur = root;
		while (cur != null)
		{
			if(cur.left != null)
			{
				let pre = cur.left;
				while(pre.right != null)
				{
					pre = pre.right;
				}
				pre.right = cur.right;
				cur.right = cur.left;
				cur.left = null;
			}
			cur = cur.right;
		}
};