function verifierMotDePasse(mdp) {

    if (mdp.length >= 8) {

        if (mdp.includes("@")) {
            return true;
        } 
        else {
            return false;
        }

    } 
    else {
        return false;
    }
}

let mot = prompt("Entrez votre mot de passe :");

if (verifierMotDePasse(mot)) {
    alert("Mot de passe valide");
} 
else {
    alert("Mot de passe non valide");
}
