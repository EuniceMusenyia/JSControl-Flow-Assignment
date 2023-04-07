// Write a function that accepts an array of strings and 
// console.logs each element using a for loop.
function pets(petsArray){
for (let i =0; i< petsArray.length; i++){
    
    console.log(petsArray[i]);
}
}
const petsArray = ["Dogs", "Cats", "Puppies", "Rabbits"];
pets(petsArray)

// Write a function that accepts an array of numbers and 
// uses the forEach() method to console.log each number multiplied by 2.
    function nums(numsArray){
    
     numsArray.forEach(numsArray=>{
      numsArray*= 2
      console.log(numsArray);

     });
    }
        
    let numsArray = [4, 15, 6, 70, 8,];
    nums(numsArray)


// Write a function that takes in an array of numbers and 
// consoles the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values
function numbers(numsArr) {
    // let numsArr = [2, 4, 5, 7,1, 3, 9, 6]

    for (let i =0; i< numsArr.length; i++){
    
        if (i <4 ){
          numsArr[i]*=8
        }
        else if(i>=numsArr.length-2){
          numsArr[i]+=5

        }
      }
      console.log(numsArr)
           
}
let numsArr = [2, 4, 5, 7,1, 3, 9, 6]
numbers(numsArr)

// Write a function that takes in the following array and 
// use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];

function num(arrNums){
  let i = 0;
  while (i<arrNums.length) {
    console.log(arrNums[i]);
    
  if(i===4){
    break;
   
  }
  i++
}
}
let arrNums = [1,2,3,4,5,6,7,8,9];
num(arrNums)


// Write a function that takes in a an array of strings and 
// use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruits(fruitsArray){
  for (let i =0; i< fruitsArray.length; i++){  
      
  if (i ===2) {
    continue
    
  }
  console.log(fruitsArray[i]);
  }
}
  let fruitsArray= ['apple','plum','banana','strawberries','kiwi']
  fruits(fruitsArray)