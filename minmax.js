let arr = [3,5,7,6,9,0,1,8,4,6];
//console.log(arr.length);
let min = arr[0];
let max = arr[0];

for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i]
    }
    if(max<arr[i]){
        max=arr[i];
    }
}

console.log(min);
console.log(max);