function parosDarab(szamok) {
    var parosakSzama = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosakSzama++;
        }
    }
    return parosakSzama;
}
var szam = 0;
function osszesOszto(szam) {
    var osztok = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function fuggvenyhivasPalindrom(palindrom) {
    var palindrom;
    var length = palindrom.length;
    for (var i = 0; i < length / 2; i++) {
        if (palindrom[i] !== palindrom[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
