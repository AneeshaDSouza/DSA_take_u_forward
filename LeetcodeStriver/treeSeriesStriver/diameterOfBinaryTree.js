var diameterOfBinaryTree = function(root) {
    let diameter = [0];
    height(root, diameter);
    return diameter[0];        
}

function height( node, diameter) {
    if (node == null) {
        return 0;
    }
    let lh = height(node.left, diameter);
    let rh = height(node.right, diameter);
    diameter[0] = Math.max(diameter[0], lh + rh);
    return 1 + Math.max(lh, rh);
}

//array because variables dont store values since pass by value. and array pass by reference