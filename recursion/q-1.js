const find_factorial=(n)=>{
    if(n < 0) {
      return 0
    }
    if( n == 1) {
      return 1;
    }
    return n * find_factorial(n - 1);
  }
  
  console.log(find_factorial(5));