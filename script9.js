function  factorielle(n){
    if(n===0)
        return 1;
    else{
        return n * factorielle(n - 1);
    }
}

let valeur = Number(prompt("enter une valeur"));
let fac = factorielle(valeur);
console.log("La factorielle de " + valeur + " est : " + fac);
