module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return a array of integers
       solve : function(A, B){
          function getPath( root, arr,  x) {
           if(root == null) {
               return false; 
           }
           arr.push(root.data)
           if(root.data == x) {
               return true; 
           }
           
           if(getPath(root.left, arr, x) || getPath(root.right, arr, x)) {
               return true; 
           }
   
           arr.pop(); 
           return false; 
       }
      
           let arr =[]; 
           if(A == null) return arr; 
           getPath(A, arr, B); 
           return arr; 
       }
   }