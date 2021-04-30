/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    
    const dir = [[-1,0],[0,1],[1,0],[0,-1]];
    let i = 0;
    let j = 0;
    let ii, jj, cur, q;
    let iEnd = grid.length - 1;
    let jEnd = grid[i].length - 1;
    let perimeter = 0;
    //onBound helper method
    let onBounds = (i, j) => i >= 0 && i <= iEnd && j >= 0 && j <= jEnd;
    //find first plot of land
    while(grid[i][j] == 0){
        if(j == jEnd) {
            i=i+1;
            j = 0;
            continue;
        }
        j++;
        if(i > iEnd) return "can't find island"
    };
    //initialize plot of land q with first plot of land found
    q = [[i,j]];
    //bfs to count perimeter of island
    while(q[0]){
        i = q[0][0];
        j = q[0][1];
        for(d of dir) {
            ii = i+d[0];
            jj = j+d[1];
            if(onBounds(ii, jj)){
                cur = grid[ii][jj];
                if(cur == -1) continue;
                if(cur == 0 ) perimeter ++;
                else if(cur == 1) {
                    q.push([ii,jj]);
                    grid[ii][jj] = -1;
                };
            }
            else {
                perimeter ++;
            } 
        }
        grid[i][j] = -1;
        q.shift();

    }
    
    return perimeter;   

};