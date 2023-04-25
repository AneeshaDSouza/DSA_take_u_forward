var insertIntoBST = function(root, value) {
    let node = new TreeNode(value);
    if(!root){
        root = node
        return root
    }
    let current = root
    while(current){
        if(value < current.val){
            if(!current.left){
                current.left = node
                return root
            }
            current = current.left
        } else {
            if(!current.right){
                current.right = node
                return root
            }
            current = current.right
        }
    }
    return root
};

//easy

var insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val);
        let cur = root;
        while(true) {
            if(cur.val <= val) {
                if(cur.right != null) cur = cur.right;
                else {
                    cur.right = new TreeNode(val);
                    break;
                }
            } else {
                if(cur.left != null) cur = cur.left;
                else {
                    cur.left = new TreeNode(val);
                    break;
                }
            }
        }
        return root;
};