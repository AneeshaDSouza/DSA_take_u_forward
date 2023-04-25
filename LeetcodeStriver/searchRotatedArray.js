/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(a, target) {

    let low = 0, high = a.length - 1; 
           while(low <= high) {
               let mid = Math.floor((low + high) /2); 
               if(a[mid] == target) return mid; 
               
               // the left side is sorted
               if(a[low] <= a[mid]) {
                   if(target >= a[low] && target <= a[mid]) {
                       high = mid - 1; 
                   }
                   else {
                       low = mid + 1; 
                   }
               }
               else {
                   if(target >= a[mid] && target <= a[high]) {
                       low = mid + 1; 
                   }
                   else {
                       high = mid - 1; 
                   }
               }
           } 
           return -1; 
       }
      