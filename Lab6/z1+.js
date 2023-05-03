const tab = [1, 2, 3, 4, 5]
console.log(tab)
//suma
let suma = 0
for (let i = 0; i < tab.length; i++){
    suma = tab[i] + suma
}
console.log("Zad 1) Suma elementow tablicy wynosi: " + suma)

//liczby parzyste
for (let i = 0; i < tab.length; i++){
    if (tab[i] % 2 == 0) {
        console.log("Zad 2) Parzysta: " + tab[i])
    }
}

//wartosci razy 3
for (let i = 0; i < tab.length; i++){
    tab[i] = tab[i] * 3
}
console.log("Zad 3) Wartości po pomnożeniu przez 3: " + tab)

// moj numer albumu
tab.push(68468)
for (let i = 0; i < tab.length; i++){
    if (tab[i] == 68468) {
        console.log("Zad 4)Indeks numeru albumu znajduje na pozycji: " + i)
    }
}

//srednia arytmetyczna
suma = 0
for (let i = 0; i < tab.length; i++){
    suma = tab[i] + suma
}
console.log("Zad 5) Średnia arytmetyczna tablicy wynosi: " + suma / tab.length)

//max
max = tab[0]
for (let i = 1; i < tab.length; i++){
    if (tab[i] > tab[i - 1]) {
        max = tab[i]
    }
}
console.log("Zad 6) Max wynosi: " + max)

//ilosc wystapien danej wartosci
ilosc = 0
for (let i = 0; i < tab.length; i++){
    for (let j = 0; j < tab.length; j++) {
        if (tab[i] == tab[j]) {
            ilosc++
        }
    }
    console.log("Zad 7) Ilość elementu " + tab[i] + " wynosi: " + ilosc)
    ilosc = 0
}