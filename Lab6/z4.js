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
}
const P1 = new Prostokat('P1', 16,10);
const P2 = new Prostokat('P2', 23,13);
const P3 = new Prostokat('P3', 48,37);

class Trojkat{
    constructor(nazwa,wysokosc,dlugosc,podstawa){
        this.nazwa = nazwa;
        this.wysokosc = wysokosc;
        this.dlugosc = dlugosc;
        this.podstawa = podstawa;
        
    }
    pole(){
        var wynik = (this.wysokosc * this.podstawa)/2;
        console.log("Pole " + this.nazwa + " trójkąta wynosi: " + wynik);
    }
}
const T1 = new Trojkat('T1', 5,6,8);
const T2 = new Trojkat('T2', 3,5,3);
const T3 = new Trojkat('T3', 2,9,4);

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
const R1 = new Trapez('R1', 5,6,8);
const R2 = new Trapez('R2', 3,5,3);
const R3 = new Trapez('R3', 2,9,4);


function porownanie(f1,f2,f3){
    if(f1.pole() != f2.pole() && f2.pole() != f3.pole()){
        if((f1>f2) && (f1>f3)){
        console.log("Większa figura to "+f1.nazwa +" o polu "+f1.pole)
    }
    if((f2>f1) && (f2>f3)){
        console.log("Większa figura to "+f2.nazwa +" o polu "+f2.pole)
    }
    if((f3>f1) && (f3>f2)){
        console.log("Większa figura to "+f3.nazwa +" o polu "+f3.pole)
    }
    }
    else{
        console.log("pola są równe")
    }
    

}
porownanie(P2,T1,R1)