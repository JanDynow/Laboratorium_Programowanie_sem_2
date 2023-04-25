class Prostokat{
    constructor(nazwa,wysokosc,szerokosc){
        this.nazwa = nazwa;
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
        
    }
    pole(){
        var wynik = this.wysokosc * this.szerokosc;
        console.log("Pole " + this.nazwa + " prostokąta wynosi: " + wynik);
    }
    zmienNazwe(nowaNazwa){
        this.nazwa = nowaNazwa;
        return this.nazwa;
    }
}
const P1 = new Prostokat('P1', 16,10);
const P2 = new Prostokat('P2', 23,13);
const P3 = new Prostokat('P3', 48,37);

console.log(P1.zmienNazwe("Pr1"));

