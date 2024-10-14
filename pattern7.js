let arr = [4,7,5,6];

let p = "";

for(let i=0;i<arr.length;i++){
    let round = arr[i];
    for(let j=0;j<round;j++){
        p += "*";
    }
    p += "\n";

}

console.log(p);