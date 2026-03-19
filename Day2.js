let arr = [10, 12, 5, 56, 63, 26, 3, 75, 89, 1];

let sum =0;

let max =arr[0];
let min =arr[0];
for (let i =0; i<arr.length; i++) {
 sum+=arr[i];

 if(arr[i]>max){
    max =arr[i];
 }
 if(arr[i]<min){
    min = arr[i];
 }
}
 let average =sum/arr.length;

console.log(sum);




