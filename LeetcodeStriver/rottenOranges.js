/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let mins = 0,freshCount = 1;
    while(freshCount>0){
          freshCount = 0
         for(let i=0;i<grid.length;i++){
        
           for(let j=0;j<grid[i].length;j++){
              if(grid[i][j] === 2){
                    if(i>0 && grid[i-1][j] == 1){
                        grid[i-1][j] = 3
                        freshCount++
                    }
                    if(i<grid.length-1 && grid[i+1][j] == 1){
                        grid[i+1][j] = 3
                        freshCount++
                    }
                    if(j>0 && grid[i][j-1] == 1){
                        grid[i][j-1] = 3
                        freshCount++
                    }
                    if(j<grid[0].length-1 && grid[i][j+1] == 1){
                       grid[i][j+1] = 3
                       freshCount++
                    }
                }
            }
         }
        if(freshCount == 0) break;
        mins++;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j] === 3){
                    grid[i][j] = 2
                }   
            }
        }
     }
    
    for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j] === 1){
                    return -1
                }   
            }
        }
    
    
    return mins
};