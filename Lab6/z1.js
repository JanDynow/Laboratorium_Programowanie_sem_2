class Prostokat{
    constructor(nazwa,wysokosc,szerokosc){
        this.nazwa = nazwa;
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
        
    }
    wypisz(){
        console.log("Rodzaj to: " + this.nazwa);
        console.log("Wysokość to: " + this.wysokosc);
        console.log("Szerokosć to: " + this.szerokosc);
    }
    obwod(){
        var wynik = 2 * this.wysokosc + 2 * this.szerokosc;
        console.log("Obwód" + this.nazwa + " prostokąta wynosi: " + wynik);
    }
    pole(){
        var wynik = this.wysokosc * this.szerokosc;
        console.log("Pole " + this.nazwa + " prostokąta wynosi: " + wynik);
    }
    porownanie(innyProstokat){
        if(this.pole() > innyProstokat.pole()){
            return this.nazwa;
        }
        else if(this.pole() < innyProstokat.pole()){
            return innyProstokat.nazwa;
        }
        else{
            console.log("Prostokąty są równe");
        }
    }
}

const pierwszy = new Prostokat('prostokąt', 16,10);
const drugi = new Prostokat('prostokąt', 23,13);
const trzeci = new Prostokat('prostokąt', 48,37);
pierwszy.wypisz()
drugi.wypisz()
trzeci.wypisz()
pierwszy.obwod()
pierwszy.pole()
console.log(drugi.porownanie(pierwszy))





