class Trapez{
    constructor(nazwa,wysokosc,podstawa1,podstawa2){
        this.nazwa = nazwa;
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        
    }
    pole(){
        var wynik = this.wysokosc * (this.podstawa1 * this.podstawa2)/2;
        console.log("Pole " + this.nazwa + " trapezu wynosi: " + wynik);
    }
}
const T1 = new Trapez('T1', 5,6,8);
T1.pole();







