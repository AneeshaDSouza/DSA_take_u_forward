/**
 * @param {number[]} nums
 * @return {number}
 */

//only works for positive 
var minimumDifference = function(nums) {

    let sum =0;
    
    for(let i=0; i<nums.length; i++){
        sum = sum+Math.abs(nums[i]);
    }
      
    const lastRow =  subSet(nums, sum, nums.length);
    let tempArray=[];
    let minDiff = Infinity
    for (let j=0; j<Math.ceil(sum/2); j++)
    {
        // Find the
        if (lastRow[j] == true)
        {
            tempArray.push(j);
        }
    }
       console.log(tempArray)
    for(let i=0; i< tempArray.length; i++){
        minDiff= Math.min(minDiff, sum -2*tempArray[i])
    }
    
     return minDiff;
    }
    

function subSet(nums, sum, n){
      const dp = new Array(nums.length+1);
    for (i=0;i<n+1;i++) {
        dp[i] = new Array((sum)+1);
    }
  for(j=0;j<sum+1;j++) {
        dp[0][j] = false;
    }
    for(i=0;i<n+1;i++) {
        dp[i][0] = true;
    }
       
    for(let i=1; i<n+1; i++){
        for(let j=1; j< sum+1; j++){
            if(nums[i-1] <=j)
                dp[i][j] = dp[i-1][j-nums[i-1]] || dp[i-1][j];
            
            else
                dp[i][j] = dp[i-1][j]
        }
    }
   
    return dp[n];
    
    
}
