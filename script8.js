function totalAvecRemise(total, remise) {

    let totalFinal = total - (total * remise / 100);

    return totalFinal;
}
    let totalHT = Number(prompt("un total HT:"));
    let remise = Number(prompt("une remise en %:"));
    let totalFinal = totalAvecRemise(totalHT, remise);
    console.log("Voici le totale final \n" + totalFinal);

