var levelOrder = function(root) {      
    let results =[];    
    const lot = (root, level) => {        
         if(!root) return [];
        if(results[level]){
            results[level].push(root.val);            
        }else{
            results[level] = [root.val];
        }        
        lot(root.left, level+1)
        lot(root.right, level+1)        
        
    }    
    lot(root, 0);    
    return results
}

//bottom result
var levelOrderBottom = function(root) {
    let results =[];
    
    const lot =(root, level) =>{
        
        if(!root) return;
        
        
        if(results[level]){
            results[level].push(root.val);
        }else{
            results[level] = [root.val];
        }
        lot(root.left, level+1);
        lot(root.right, level +1);
        
    }
    lot(root, 0);  
return results.reverse();
    
};

//zigzag

var zigzagLevelOrder = function(root){
    let results =[];
     const lot =(root, level) =>{
         
      if(!root){
        return;
      }
      
      if(results[level]){
    level%2 ? results[level].unshift(root.val) : results[level].push(root.val) ;
  }else results[level] = [root.val];
      
      lot(root.left, level+1);
      lot(root.right, level+1);
  
     }
  
     lot(root, 0);     
  
    return  results;
  }

  //515 largest value in each tree row
  var largestValues = function(root) {     
    let res =[]; 
    const lot = (root, level) => {        
         if(!root) return [];
        if(res[level] == undefined || res[level] < root.val ) res[level] =root.val;       
        lot(root.left, level+1)
        lot(root.right, level+1)        
        
    }    
    lot(root, 0);    
    return res

};