namespace A7 {

//Einwohnerzahlen der Laender 2022 (in Mio)
const germany = 83.13;
const france = 67.50;
const italy = 59.07;
const sweden = 10.42;
const europeanunion = 447.70;
//Einwohnerzahlen der Laender 2008 (in Mio)
const deutschland = 82.11;
const frankreich = 64.37;
const italien = 58.83;
const schweden = 9.22;
const eu2008 = 500;

console.log("Die Einwohnerzahl Deutschlands betrug im Jahr 2022: " + germany + " Mio. Das beträgt " + germany/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((germany/deutschland)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (germany-deutschland)+ " Mio.");
console.log("Die Einwohnerzahl Frankreichs betrug im Jahr 2022: " + france + " Mio. Das beträgt " + france/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((france/frankreich)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (france-frankreich)+ " Mio.");
console.log("Die Einwohnerzahl Italiens betrug im Jahr 2022: " + italy + " Mio. Das beträgt " + italy/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((italy/italien)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (italy-italien)+ " Mio.");
console.log("Die Einwohnerzahl Schwedens betrug im Jahr 2022: " + sweden + " Mio. Das beträgt " + sweden/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((sweden/schweden)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (sweden-schweden)+ " Mio.");

//let deAnteil = germany/europeanunion*100;
//let deWachstumsrate = ((germany/deutschland)-1)*100;
//let deWachstum = germany-deutschland;


function myFunction(Land2022:number, Land2008:number, Laendername:String){
    let Anteil = Land2022/europeanunion*100;
    let Wachstumsrate = ((Land2022/Land2008)-1)*100;
    let Wachstum = Land2022-Land2008;
    document.querySelector("#txt").innerHTML = "Einwohnerzahl von " + Laendername; 
    document.querySelector("#Einwohnerzahl").innerHTML = Land2022.toString();
    document.querySelector("#Einwohnerzahl2").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in "+ Laendername +" in 2022";
    document.querySelector("#AnteilEU").innerHTML = Anteil.toFixed(2)+"%";
    document.querySelector("#Wachstrumsrate2008").innerHTML = Wachstumsrate.toFixed(2)+"%";
    document.querySelector("#Wachstum2008").innerHTML = Wachstum.toFixed(2)+" Mio.";
    document.querySelector(".chart").setAttribute('style','height:'+Anteil.toFixed(0)+"%");
}

document.querySelector("#wrapper1").addEventListener('click',function() {myFunction(germany, deutschland, "Deutschland");});
document.querySelector("#wrapper11").addEventListener('click',function() {myFunction(france, frankreich, "Frankreich");});
document.querySelector("#wrapper15").addEventListener('click',function() {myFunction(italy, italien, "Italien");});
document.querySelector("#wrapper27").addEventListener('click',function() {myFunction(sweden, schweden, "Schweden");});
document.querySelector(".stars").addEventListener('click',function() {myFunction(europeanunion, eu2008, "der europäischen Union");});
}   