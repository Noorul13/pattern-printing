let n=5;
let p = "";
let m = "1";

for(let i=1; i<=n; i++){
    for(let j=1;j<=i;j++){
        p += m;
    }
    p += ",";
}

console.log(p);