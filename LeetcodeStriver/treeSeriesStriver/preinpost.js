var allTraversals = function(root) {
    let st = []; 
        st.push({node:root,num: 1}); 
        let pre =[];
        let inOrder = [];
        let post = [];
        if(root == null) return post;

        while(st.length) {
            let it = st.pop(); 

            // this is part of pre
            // increment 1 to 2 
            // push the left side of the tree
            if(it.num == 1) {
                pre.push(it.node.val); 
                it.num++; 
                st.push(it); 
                
                if(it.node.left) {
                    st.push({node:it.node.left,num: 1}); 
                }
            }

            // this is a part of in 
            // increment 2 to 3 
            // push right 
            else if(it.num == 2) {
                inOrder.push(it.node.val); 
                it.num++; 
                st.push(it); 

                if(it.node.right) {
                    st.push({node:it.node.right,num: 1}); 
                }
            }
            // don't push it back again 
            else {
                post.push(it.node.val); 
            }
        } 

        return post; 

    }