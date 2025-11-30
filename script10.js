function sommeIterative(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}
function sommeRecursive(n){
   if (n === 1) {
        return 1; 
    } else {
        return n + sommeRecursive(n - 1); 
    }
}
let valeur1 = Number(prompt("Entrez un nombre pour sommeIterative :"));
console.log("Somme itérative de 1 à " + valeur1 + " = " + sommeIterative(valeur1));
let valeur2 = Number(prompt("Entrez un nombre pour sommeRecursive :"));
console.log("Somme récursive de 1 à " + valeur2 + " = " + sommeRecursive(valeur2));