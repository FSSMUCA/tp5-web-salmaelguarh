let s=0;
let j=0;

for (let i = 1; i <= 50; i++) {
    if(i%2===0){
        s+=i;
    }
    else{
        j+=i;
    }       
}
console.log(s);
console.log(j);