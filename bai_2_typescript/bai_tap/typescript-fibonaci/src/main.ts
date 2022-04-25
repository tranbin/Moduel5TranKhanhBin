let F: number = 0;
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
console.log(tong);
