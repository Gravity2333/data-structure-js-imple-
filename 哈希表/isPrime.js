function isPrime(num){
    if(num === 1) return false
    for(let i = 2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            return false
        }
    }
    return true
}

const list = []
for(let i=1;i<100;i++){
    if(isPrime(i)){
        list.push(i)
    }
}
console.log(list)