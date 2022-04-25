/*let F: number = 0;
let F0: number = 0;
let F1: number = 0;
let tong: number = 0;
let fibonacci: string = "";
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        F = 1;
        F1 = 1;
        fibonacci += F + " ";
        tong = tong + F;
    } else {
        F = F0 + F1
        F0 = F1
        F1 = F
        fibonacci += F + " "
        tong = tong + F;
    }
}
console.log(fibonacci);
console.log(tong);*/
function sumFibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    return sumFibonacci(num - 1) + sumFibonacci(num - 2);
}
var num = 10;
var sumFibo = 0;
for (var i = 0; i < num; i++) {
    sumFibo += sumFibonacci(i + 1);
}
console.log(sumFibo);
