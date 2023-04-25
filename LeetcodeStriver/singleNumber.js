var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
      
      let low = 0, high = nums.length - 2; 
          while(low <= high) {
              let mid = Math.floor((low + high) /2); 
              if(nums[mid] == nums[mid^1]) {
                  low = mid + 1; 
              } 
              else {
                  high = mid - 1; 
              }
          }
          return nums[low]; 
  };



var singleNumber = function(nums) {
    return nums.reduce((a, b) => {
        return a ^ b;
    }, 0)
};