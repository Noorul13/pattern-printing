const a=[4,7,5,6]
let maxstars = Math.max(...a);//6
for (let i=0;i<maxstars;i++){
  let starline = "";
  for (let j=0;j<a.length;j++){//6
    if (i<a[j]){
      starline += "*";
    } else {
      starline += " ";
    }
  }
  console.log(starline);
}