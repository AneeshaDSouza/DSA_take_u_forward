function getLeftmostChild(node){
	let currentNode = node;
	while(currentNode.left !== null){
		currentNode= currentNode.left;
	}
	return currentNode;
}
function getRightmostParent(node){
	let currentNode = node;
	while(currentNode.parent !== null && currentNode.parent.right === currentNode){
		currentNode= currentNode.parent;
	}
	return currentNode.parent;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;