/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(a, k) {
  
    let n = a.length;
    let res = [];
  if (k === 1) return a;
    // store index
    let q = [];
    for (let i = 0; i < a.length; i++) {
        // remove numbers out of range k
    if (q.length === 0) {
        q.push(a[i]);
        continue;
    }
    
    // remove 1st from q as that num is outside window
    if (i >= k && q[0] === a[i-k]) {
        q.shift();
    }
            
    // remove all numbers small than num in queue        
    while (q[q.length-1] < a[i]) {
        q.pop();
    }
    
    // add new number to queue
    q.push(a[i]);
            
    if (i >= k-1) {
        res.push(q[0]);
    }
        
    }
    return res;
}

