const business =350;

const minister =6250;

const army =700;

// if(business >minister){
//                console.log('business is bigerr');
// }

// else{
//                console.log("minister is bigeer")
// }
/*
if(business>minister && business>army){
               console.log("business is bigger");
}

else if (minister>business &&minister>army){
               console.log("minister is bigger");
}

// else if(army >business && army>minister){
//                console.log("army is bigger")
// }
else{
               console.log("army is bigger")
}*/

// var max =Math.max(business,minister,army);

// console.log("largest is ", max);

function findLargest (first,second){
               if(first>second){
                              return first;
               }

               else{
                              return second;
               }
}

// task 1 create funvtion 3 number bigest  number and smallest three number

const larger =findLargest(156,256);

console.log(larger);