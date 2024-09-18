const find_sum=(n)=>{
    if(n < 0) {
      return 0
    }
    if( n == 1) {
      return 1;
    }
    return n + find_sum(n - 1);
  }
  
  console.log(find_sum(5));