

// function fibonacciSeries(num){
//                const fibo =[0,1];

//                for(let i=2; i<=num;i++ ){
//                               fibo[i]=fibo[i +(-1)]+fibo[i+(-2)];
//                }

//                return fibo;
// }

// fibonacciSeries(10);

// const fiboseris =fibonacciSeries();

// console.log(fiboseris);


function fibonacciSeries(num){

               // console.log(typeof num);

               if(typeof num !='number'){
                              return 'please give me a number'
               }

               else if(num<2){
                              return 'please give me positive number grater than 1';
               }
                              const fibo =[0,1];
               
                              for(let i=2; i<=num;i++ ){
                                             fibo[i]=fibo[i +(-1)]+fibo[i+(-2)];
                              }
               
                              return fibo;
               }


               
const fiboseris =fibonacciSeries(3);

console.log(fiboseris);
