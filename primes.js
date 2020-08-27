//Solution 1
function backwardsPrime(start, stop){
  let primes = [];
  for(let i = start; i <= stop; i++){
    if(isPrime(i) && isReversePrime(i)){
      primes.push(i);
    }
  }
  return primes;
}

const isPrime = num => {
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

const isReversePrime = num => {
  let reverseNum = +num.toString().split('').reverse().join('');
  if( num !== reverseNum){
    return isPrime(reverseNum);
}
  return false;
}
