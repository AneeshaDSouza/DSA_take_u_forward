/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hours) {
    function check( a,  m,  h){
      let n=a.length;
      let total=0;
      for(let i=0;i<n;i++){
           let timeTaken=0.0;
              if(i==n-1)
                  timeTaken = a[i]/m;
             else  
              timeTaken = Math.ceil(Math.max(a[i]/m, 1.0));
          total += (timeTaken);
      }
      return total<=h;
  }
  
      let n = dist.length;
      let l=1, r=1000000000;
      let ans=-1, min=r;
      while(l<=r){
          let m= Math.floor((l+r)/2);
           let resp=check(dist, m, hours);
          if(resp){
              min=Math.min(min, m);
              ans=min;
              r=m-1;
          }else{
              l=m+1;
          }
          
      }
      return ans;  
  };