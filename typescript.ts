function parosDarab(szamok:number[]):number{
var parosakSzama:number = 0;

for (var i = 0; i < szamok.length; i ++){
 if (szamok[i] % 2 == 0){
    parosakSzama++;
 }
}
return parosakSzama;
}

var szam:number = 0;
function osszesOszto(szam:number):number[]{
   var osztok:number[] = [];

   for(var i = 0; i <= szam; i++){
      if(szam % i == 0){
         osztok.push(i);
      }
   }
   return osztok;
}


function fuggvenyhivasPalindrom(palindrom:string):boolean{
   var palindrom:string;
   var length:number = palindrom.length;

   for(var i:number = 0; i < length/2; i++){
      if(palindrom[i] !== palindrom [length - 1 - i]){
         return false;
      }
   }
   return true;
}



