let str = "My_name_is_khan";
let str2 = "";
// console.log(str.length);
// str2[1]=str[0];
// str2[0]=str[1];

for(let i=0;i<str.length; i++){
    if(str[i]=="_"){
        str2+="_";
        continue;
    }
    let first = str.charAt(i);
    let last = str.charAt(i+1);
    // console.log(first);
    // console.log(last);
    // str2[i]= str[i+1];
    // str2[i+1] = str[i];
    str2 += last + first;
    i++;
}
console.log(str2);



// let a = "some";
// let str = "";
// console.log(str[0]=a);