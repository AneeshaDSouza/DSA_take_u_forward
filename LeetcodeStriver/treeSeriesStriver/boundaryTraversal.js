function isLeaf( root) {
    return (root.left == null) && (root.right == null);
}

function addLeftBoundary( root, res) {
    let cur = root.left;
    while (cur != null) {
        if (!isLeaf(cur) ) res.push(cur.val);
        if (cur.left != null) cur = cur.left;
        else cur = cur.right;
    }
}
function addRightBoundary( root, res) {
    let cur = root.right;
    let tmp = [];
    while (cur != null) {
        if (isLeaf(cur) == false) tmp.push(cur.val);
        if (cur.right != null) cur = cur.right;
        else cur = cur.left;
    }
    
    for (let i = tmp.length-1; i >= 0; --i) {
        res.push(tmp[i]);
    }
}

function  addLeaves( root, res) {
    if (isLeaf(root)) {
        res.push(root.val);
        return;
    }
    if (root.left != null) addLeaves(root.left, res);
    if (root.right != null) addLeaves(root.right, res);
}
function printBoundary( node)
{
    let ans = []; 
    if(!isLeaf(node) ) ans.push(node.val); 
    addLeftBoundary(node, ans); 
    addLeaves(node, ans); 
    addRightBoundary(node, ans); 
    return ans;
}