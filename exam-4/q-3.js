const sum=(n)=>{
    if(n<=1){
        return 1
    }
    else{
        return n%10+ sum(Math.floor(n/10))
    }
}
console.log(sum(1234));
