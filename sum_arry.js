const numbers=[44,23,34,32,5,78,6,78];
// let sum = 0;
// for(let i =0; i<numbers.length;i++){
//             const element =numbers[i]  ; 
            
//                // console.log(i);
//                console.log(element);
//                // let sum = 0;
//                sum =sum+element;
//                console.log(sum);


// }

// console.log(sum);

function arryTotal(numbers){
               let sum =0;
               for(let i =0; i<numbers.length; i++){
                  const element =numbers[i];
                  ;
                  sum =sum+element;
               //    return sum;          
               }

               return sum;
}
const total =arryTotal([32,45,67]);
console.log(total);