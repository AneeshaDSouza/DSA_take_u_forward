function subsetSum(nums, sum, n){
    const dp = new Array(nums.length+1);
  for (let i=0;i<n+1;i++) {
      dp[i] = new Array((sum)+1);
  }
for(let j=0;j<sum+1;j++) {
      dp[0][j] = 0;
  }
  for(let i=0;i<n+1;i++) {
      dp[i][0] = 1;
  }
     
  for(let i=1; i<n+1; i++){
      for(let j=1; j< sum+1; j++){
          if(nums[i-1] <=j)
              dp[i][j] = dp[i-1][j-nums[i-1]] + dp[i-1][j];
          
          else
              dp[i][j] = dp[i-1][j]
      }
  }
  
  return dp[n][sum];
  
  
}

function countWithGivenSum( arr,  n,  diff)
{   
     let sum=0;
    for(let i=0;i<n;i++)
         sum+=nums[i]
	 
	 let reqSum=(diff+sum)/2;
	 return subsetSum(arr,n,reqSum);
}