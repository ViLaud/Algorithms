let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  console.log(string);
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  console.log(char);
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  console.log(remainingChars);
  console.log(i);
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
        console.log(permutationsArray);
    }
    
    return permutationsArray
  }

  findPermutations("abc");