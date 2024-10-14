let str1 = "aabbbccdddaa";
let str2 = str1[0];

// console.log(str2);

for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
        if(str1[i]!=str2[j]){
            str2 += str1[i];
        }
    }
}
console.log(str2);