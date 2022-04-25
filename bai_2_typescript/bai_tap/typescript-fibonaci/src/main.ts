let F:number = 0,
    F0:number = 0,
    F1:number = 0
let fibonacci:string = "";
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        F = 1
        F1 = 1
        fibonacci += F + " "
    } else {
        F = F0 + F1
        F0 = F1
        F1 = F
        fibonacci += F + " "
    }
}
console.log(fibonacci)