function sum(a,b)
{
    return a+b;
}
let addition=sum(3,5);
console.log("sum is:" +addition);

//coverting minutes to seconds
function convert(min){
    return min*60;
  
}
 console.log(convert(5));

//perimeter of a rectangle
function perimeter(width,length){
    return 2*(width+length);
}
let calc=perimeter(5,8);
console.log("perimeter:"+calc);

//negative number

function  Negative(num){
    if(num< 0)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }
}
let neg=isNegative(-9);
console.log(neg);

 // try another version

 function isNegative(no){
    return no<0;
 }
 let negative=isNegative(4)
console.log(negative);

//can i drive
 function drive(name,age){

     if(age>=18){

        console.log(`${name} is older enough to drive`);
     }
     else{
         return `${name} is not old enough to drive yet`;

     }

 }
 console.log(drive("kimani",12));

// number 6. largest number
function findLargest(a,b,c){
    
    if(a>b && a>c)
    {
        return (`${a} : is the largest`);
    }
    else if(b>a && b>c){

         return (`${b} : is the largest`);
    }
    else{
        return (`${c} : is the largest`);
        

    }
    
}
console.log(findLargest(100,4,9));
console.log(100,4,9)

// // just a practice 
// function findLargest(a, b, c) {
//     console.log(`Input numbers: a = ${a}, b = ${b}, c = ${c}`);

//     if (a === b && b === c) {
//         return "All numbers are equal.";
//     }

//     let largest = a;
//     if (b > largest) largest = b;
//     if (c > largest) largest = c;

//     // Check for ties
//     let ties = [];
//     if (a === largest) ties.push("a");
//     if (b === largest) ties.push("b");
//     if (c === largest) ties.push("c");

//     if (ties.length > 1) {
//         return `${largest} is the largest (tie between ${ties.join(" and ")})`;
//     } else {
//         return `${largest} is the largest`;
//     }
// }

// console.log(findLargest(5, 9, 3));   // Normal case
// console.log(findLargest(7, 7, 7));   // All equal
// console.log(findLargest(10, 10, 5)); // Tie between a and b
// console.log(findLargest(2, 6, 6));   // Tie between b and c


// the bmi calculator
function  calculateBMI(weight,height){

    BMI=weight/(height*height);
    
    let result;
    if(BMI>=30)
    {
         result="Obese"
    }
    else if(BMI>=29.9)
    {
        result="Overweight";
    }
    else if(BMI>=24.9)
    {
          result="Normal weight";

    }
    else
{
    result="underweight";
}
return `Your BMI is ${BMI} and you are ${result} `;

}
console.log(calculateBMI(89,1.7));
console.log(calculateBMI(85, 1.8));

//greatings based on time
function greetUser(name , hour){
    
    if(hour>=5 && hour<=11)
    {
        console.log(`Good morning,${name}`);

    }
    else if(hour>=12 && hour<=17)
    {
        return `Good Afternoon,${name}`;
    }

    else if(hour>=18 && hour<=21)
    {
        return `Good evening,${name}`;
    }
     else if(hour>=22 && hour<=24)
    {
        return `Good night,${name}`;
    }

}
 console.log(greetUser("Alice",23));



//the fizzbuzz checker
function FizzBuzz(number){
    if(number%3==0){
        return "Fizz"
    }
    else if(number%5==0)
    {
        return "Buzz";

    }
    else if(number%3==0 && number%5==0)
    {
        return "FizzBuzz";
    }
    else{
        return `${number}`;
    }
}
console.log(FizzBuzz(7))

//10.Perimeter2 of circle and Squire
 function perimeter2(letter,num){
    switch(letter){
        case 's':
            return 4*num;
        case 'c':
            return 6.28 * num;
         default:
            return "no leter entered";
    }

 }
console.log( perimeter2("s",4));

//11.function to add all even numbers
function sumEvenNumbers(n){
        let sum=0;
    for(let i=2 ; i<=n;i+=2){
        sum +=i;
       
    }
     return sum;
}
let results=sumEvenNumbers(7);
console.log(`The sum of the numbers is: ${results}`);

//12.The multiply function of a number
function powerUp(num,times){
    let power=num**times;
    return power;

}
console.log(powerUp(6,0));

//13.factorial calculator
function factorial(n){

    if(n===0 || n===1){
        
        return 1;
    }
    return n * factorial(n-1);
   
}
console.log(factorial(4));

//14.multiple of sum ,returns sum of all numbers
function sumMutiples(n,divisor){

}
//15 .sum of digits 
function sumDigits(num){

}




