let adj = new Map();
let items = ["yes", "yes2", "no", "nomore", "yes2", "no", "nomore"];
items.forEach((val, i) => adj.set(val, i));
console.log(adj);
let breaker = false;
adj.forEach((val, key) => {
    if(val == 2) return;
    if(val == 4) return false;
    console.log(key);
})

