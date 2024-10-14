let n = 5;
let p ="";

for(let i= 1; i<=n;i++){
    for(let j=1;j<=i; j++){
        if(j % 2 != 0 ){
            p += "1";
        }
        else{
            p +="0";
        }
    }
    p += "\n";
    //console.log(p);
}

console.log(p);