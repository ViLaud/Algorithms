function kthMax (nums, k) {
    let top = new Array(k).fill(-Infinity);
    for(let i=0; i<nums.length; i++){
        if(nums[i] < top[k-1]) continue;
        placeMax(nums[i]);
        
    }
    return top.pop();

    function placeMax(num){
        for(let j = k-2; j >= 0 ; j--){
            if(newNum < top[j]){
                inject(j, num);
                return;
            }
            else if(newNum > top[j] && j == 0 ){
                inject(j, num);
                return;
            }
        }
         
    }
    function inject (j, num){
        top.splice(j,0,newNum);
                top.pop();
                return;
    }
}