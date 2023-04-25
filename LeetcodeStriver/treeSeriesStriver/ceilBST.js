function findCeil(root,  key) {

    let ceil = -1; 
    while (root != null) {
        if (root.data == key) {
            ceil = root.data;
            return ceil;
        }

        if (key > root.data) {
            root = root.right;
        }
        else {
            ceil = root.data; 
            root = root.left;
        }
    }
    return ceil;

}