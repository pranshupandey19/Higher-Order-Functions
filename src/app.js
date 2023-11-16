const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start,end){
  let modifiedFood = []
  for(let i=start; i<end-1;i++){
    modifiedFood.push(foods[i])
  }
  return modifiedFood
}

// Progression 2:

function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}

// Progression 3:
function isEven(num){
  return num%2==0?true:false;
}

function isPrime(num){
  for(let i = 2; i < num; i++)
      if(num % i === 0) 
      return false; 
    return num > 1;
}

function checkNumber(numberArray, operation){
  newArray = numberArray.filter(operation);
  return newArray;
}
// Progression 4:
function reject(num){
  let rejectedNUM =[];
  num.forEach((n)=>{
    isPrime(n)?null:rejectedNUM.push(n)
  })
  return rejectedNUM
}
function nonPrime(numberArray){
  return reject(numberArray)
}
// Progression 5:

let isEvenUsingLambda = num => num%2==0;

// Progression 6:
function square(num){
  return num*num;
}

function findSquareOfNumbers(myArray){
  let newArray = myArray.map(square);
  return newArray;
}

// Progression 7:


function multiply(myArray){
  return myArray.reduce((n, number)=>{
      return n*number;
  },1);
}

function sumOfSquares(myArray){
  return myArray.map(square).reduce((sum,number)=>{
      return sum+number;
  },0)
}