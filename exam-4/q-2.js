const feboncci=(n)=>{
    if(n==0) return 0
    if(n==1) return 1
    return feboncci(n-1)+feboncci(n-2)
}

console.log(feboncci(5));