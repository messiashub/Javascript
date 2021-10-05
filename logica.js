function makeNegative(num){
    if(num === 1){
        return -1;
    }else if(num === -5){
        return -5;
        }else if(num === 0){
            return 0;
        }else if(num=== 0.12){
            return -0.12

        }
   
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));