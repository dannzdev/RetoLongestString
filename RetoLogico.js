
const Frutas = ["Manzana", "Pera", "Durazno", "Kiwi", "Mandarina", "Naranja", "Uva", "Guayaba"];
const ArrayFinal = [Frutas[0]];
const ArrayIndice = [Frutas.indexOf(Frutas[0])];
const ArrayFinalResult = [];
const ArrayIndiceResult = [];



function findLongestStrings() {
    for (i = 1; i <= Frutas.length - 1; i++) {
        if (ArrayFinal[0].length > Frutas[i].length) {
            ArrayFinal[0] = ArrayFinal[0];
            ArrayIndice[0] = Frutas.indexOf(ArrayFinal[0]);
        }
        else if (ArrayFinal[0].length === Frutas[i].length) {
            ArrayFinal.push(Frutas[i]);
            ArrayIndice.push(Frutas.indexOf(Frutas[i]))
        }
        else {
            ArrayFinal[0] = Frutas[i];
            ArrayIndice[0] = Frutas.indexOf(Frutas[i]);
        }
    }

    const resultA = ArrayFinal.filter(ar => ar.length == ArrayFinal[0].length);

    const resultI = ArrayIndice.filter(ar => ar == ArrayIndice[0]);

    console.log(`El String o Cadena mas larga es ${resultA} y esta ubicado en la posicion ${resultI}`);
}