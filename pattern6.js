let n=4;
let p = "";

for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        p += " ";
    }
    for(let k=0;k<=i;k++){
        p += "* ";
    }
    p += "\n";
}

console.log(p);