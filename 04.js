/*

Gör en funktion: get_average_sum. Funktionen ska ta emot en array som parameter och räkna ut genomsnittet och summan av talen du skickade in och returnera de två svaren till den som anropar metoden. Du ska returnera svaren som ett objekt med egenskaperna average och sum. Du ska inte skriva någon klass utan bara returnera ett "fristående" objekt.

Du måste använda en reduce-funktion.

Anropa get_average_sum och skicka med en array med 2 till 10 heltal. Kontrollera antalet tal och returnera false om antalet tal är fel eller om ett värde inte är ett heltal.

Skriv kod som anropar get_average_sum, sparar resultatet i en variabel och skriver ut båda värdena.

OBS! get_average_sum-funktionen i sig får inte innehålla utskrifter, utskriften ska ske utanför funktionen.

Exempel på värden och deras svar:

1, 2, 3 ger average=2 och sum=6
4, 5, 6, 7 ger average=5,5 och sum=22
-1, 2, 18 ger average=6,333 och sum=19

*/








  



let NumArray = [2,3,4,5,8,6,7]

function get_average_sum(NumArray) {
    if(NumArray.some(i => !Number.isInteger(i)) ){
        return false;
    }

    if (NumArray.length <= 2 || NumArray.length >= 10) {
        return false
    }
    const sum = NumArray.reduce((acc, currValue, currIndex, array) => {
        return acc + currValue
    });
   let avg_sum = { total: sum, avg: sum / NumArray.length }
   console.log(avg_sum);
}

//Reduce, ett värde från hela

// return { total: acc + currValue, avg: (acc + currValue) / NumArray.length }

//acc + currValue

get_average_sum(NumArray)

