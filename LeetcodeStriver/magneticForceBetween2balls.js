/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let low = 1, high = (position[position.length-1] - position[0]) / (m - 1);
    
    while(low < high) {
        const mid = Math.ceil((low + high) / 2);
        const canFit = checkFit(mid);
        
        if(canFit) low = mid;
        else high = mid - 1;
    }
    return low;
    
    function checkFit(space) {
        let balls = 0, nextPos = 0;
        
        for(let i = 0; i < position.length; i++) {
            if(position[i] >= nextPos) {
                balls++;
                nextPos = position[i] + space
            }
            if(balls >= m) return true;
        }
        return balls >= m;
    }
};