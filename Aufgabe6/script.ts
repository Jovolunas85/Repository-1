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


console.log("Die Einwohnerzahl Deutschlands betrug im Jahr 2022: " + germany + " Mio. Das beträgt " + germany/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((germany/deutschland)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (germany-deutschland)+ " Mio.");
console.log("Die Einwohnerzahl Frankreichs betrug im Jahr 2022: " + france + " Mio. Das beträgt " + france/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((france/frankreich)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (france-frankreich)+ " Mio.");
console.log("Die Einwohnerzahl Italiens betrug im Jahr 2022: " + italy + " Mio. Das beträgt " + italy/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((italy/italien)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (italy-italien)+ " Mio.");
console.log("Die Einwohnerzahl Schwedens betrug im Jahr 2022: " + sweden + " Mio. Das beträgt " + sweden/europeanunion*100 +"% der gesamten Einwohnerzahl der EU. Die Wachstumsrate seit 2008 betraegt: "+ ((sweden/schweden)-1)*100+ "%. Die gesamte Wachstumsrate ist somit: "+ (sweden-schweden)+ " Mio.");