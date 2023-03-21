//zad 1
var a = 20
var b = 10
var c = 15
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
document.getElementById("dodawanie").innerHTML = "wynik dodawania to: "+ a+b;
document.getElementById("odejmowanie").innerHTML ="wynik odejmowania to: "+ a-b;
document.getElementById("mnorzenie").innerHTML ="wynik mnorzenia to: "+ a*b;
document.getElementById("dzielenie").innerHTML ="wynik dzielenia to: "+ a/b;
//zad 2
var p = (a+b+c)/2
var P = Math.sqrt(p*(p-a)*(p-b)*(p-c))

console.log(p)
console.log(P)
document.getElementById("zad2").innerHTML = p;
document.getElementById("zad2").innerHTML = P;
//zad 3
var n = 10;
var l = Math.ceil(Math.random()*n)
var x = prompt("Podaj liczbe i sprawdź czy trafiłeś: ");
if (l == x){
    console.log("Dobra robota zgadłeś.")
    document.getElementById("zad3").innerHTML = "Dobra robota zgadłeś.";
}
else{
    console.log("Niestety nie tym razem.")
    document.getElementById("zad3").innerHTML = "Niestety nie tym razem.";
}
//zad 4

var q = parseFloat(prompt("Podaj pierwszą liczbę: "));
var w = parseFloat(prompt("Podaj drugą liczbę: "));
var e = parseFloat(prompt("Podaj trzecią liczbę: "));

if ((q>w) && (q>e)){
    console.log("Największa z podanych liczb to: "+q)
    document.getElementById("zad4").innerHTML = "Największa z podanych liczb to: "+q;
}
if ((w>q) && (w>e)){
    console.log("Największa z podanych liczb to: "+w)
    document.getElementById("zad4").innerHTML = "Największa z podanych liczb to: "+w;
}
if ((e>q) && (e>w)){
    console.log("Największa z podanych liczb to: "+e)
    document.getElementById("zad4").innerHTML = "Największa z podanych liczb to: "+e;
}

//zad 5
var j = parseInt(prompt("Podaj pierwszą liczbe do NWD: "));
var k = parseInt(prompt("Podaj drugą liczbę do NWD: "));
function nwd(j,k){
    while(j!=k){
        if(j>k){
            j=j-k;
        }
        else{
            k=k-j;
        }
    }
    return j;
        
}
console.log("NWD: "+nwd(j,k))
document.getElementById("zad5").innerHTML = "NWD: "+nwd(j,k);

//zad 6

let Student1 = {firstName:"Janusz", lastName:"Nowak", age:30};
let Student2 = {firstName:"Kamil", lastName:"Dąbrowski", age:70};
let Student3 = {firstName:"patryk", lastName:"Kula", age:40};




















