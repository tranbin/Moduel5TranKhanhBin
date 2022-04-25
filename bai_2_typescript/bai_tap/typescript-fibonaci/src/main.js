var F = 0, F0 = 0, F1 = 0;
var fibonacci = "";
for (var i = 0; i < 10; i++) {
    if (i == 0) {
        F = 1;
        F1 = 1;
        fibonacci += F + " ";
    }
    else {
        F = F0 + F1;
        F0 = F1;
        F1 = F;
        fibonacci += F + " ";
    }
}
console.log(fibonacci);
