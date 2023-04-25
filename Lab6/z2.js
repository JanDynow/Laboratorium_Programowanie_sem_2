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
    porownanie(innyTrojkat){
        if(this.pole() > innyTrojkat.pole()){
            return this.nazwa;
        }
        else{
            return innyTrojkat.nazwa;
        }
    }

}


const T1 = new Trojkat('T1', 5,6,8);
T1.pole();

const T2 = new Trojkat('T2', 3,5,3);
T2.pole();

const T3 = new Trojkat('T3', 2,9,4);
T3.pole();

console.log(T2.porownanie(T1))
