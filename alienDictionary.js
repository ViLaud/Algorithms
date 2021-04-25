var alienOrder = function(words) {
    let adj = new Map();
    words.forEach(word => {
        word.split('').forEach(l => adj.set(l, new Set()))
    });

let order = new Array(adj.size);
//build adjacency list
let i=1;
    while(i < words.length){
        if(!getAdjacent(words[i-1], words[i])) return "";
        i++; 
    }
// do dfs topological sort
let seen = new Set();
i = order.length-1;
let isCyclical = false;
    adj.forEach((value, key) => {
        if(isCyclical || i < 0 ) return false;
        if(seen.has(key)) return;
        this.history = new Set();
        dfs(key);
    })
return isCyclical ?  "" :  order.join('')

    
    function dfs(key){
        if(this.history.has(key)) {
            isCyclical = true; 
            return false
        }
        this.history.add(key);
        adj.get(key).forEach((val) => {
            if(isCyclical) return false;
            if(seen.has(key)) return;
            dfs(val);
        });
        seen.add(key); 
        order[i] = key;
        i--;
    }
    function getAdjacent(w1, w2){
        let l = 0;
        let short = Math.min(w1.length, w2.length);
        while(w1[l]==w2[l]){
        console.log(w1[l],w2[l]);
            if(l + 1 == short) break;
            l++;
        }
        if(w1[l] == w2[l] && w1.length > w1.length) { return false }
        if(w1[l] == w2[l] && w2.length == w1.length){return true}
        adj.get(w1[l]).add(w2[l]);
        return true;
    };
    
};