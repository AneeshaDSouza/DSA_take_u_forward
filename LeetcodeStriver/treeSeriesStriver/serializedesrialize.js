/*Steps to Serialize

We do a Pre-Order Traversal with a Depth First Search
We initialize a stack / array to hold the values for pre-order traversal
If we reach a null, we push null to stack
Otherwise, we push root.val, then traverse to left subtree and right subtree recursively
Return the string version of the array (array.toString())
Steps to Deserialize

If data is null or the length is zero, we return null
We recursively call helper(data.split(''))
We shift() the first value of our data.split array, and if it is null, we return null;
3a) Otherwise, we establish a new TreeNode with the shifted value, then recursively go to the left and recursively go to the right
Important: We are passing this reference to the input array, and it knows to stop and go to the right subtree once we've hit enough nulls.
*/
var serializeHelper = function (root, lst) {
	if (!root) {
		lst.push('null');
        return;
	} 
    // Pre-Order traversal
    lst.push(root.val);
    serializeHelper(root.left, lst);
    serializeHelper(root.right, lst);
};

var serialize = function (root) {
	var lst = [];
	serializeHelper(root, lst);
	return lst.toString();
};

var deserializeHelper = function (lst) {
	if (lst.length < 1) {
		return null;
	}
    
	let val = lst.shift();
    
	if (val === 'null') {
		return null;
	}
    
	var root = new TreeNode(val);
	root.left = deserializeHelper(lst);
	root.right = deserializeHelper(lst);
	return root;
};

var deserialize = function (data) {
	if (!data || data.length === 0) {
		return null;
	}
    
	return deserializeHelper(data.split(','));
};