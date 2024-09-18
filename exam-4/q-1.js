const fectorial=(n)=>{
    if(n==0) return 0
    if(n==1) return 1
    return n*fectorial(n-1)
}

console.log(fectorial(5));
