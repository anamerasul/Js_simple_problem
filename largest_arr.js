function largestArr(numbers){
               let largest =numbers[0];
               for(let i =0; i<numbers.length; i++){
                              const element =numbers[i];
                              // console.log(element);
                              if(element>largest){
                                             largest=element;
                              }
                            
               }

               return largest;

}

const ages =[12,34,67,78,54,67,97];
const oldest =largestArr(ages);

const oldest2 =largestArr([-3, -6,-12])

console.log(oldest);
console.log(oldest2);
