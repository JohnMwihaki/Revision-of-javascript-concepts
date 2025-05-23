let arr=["kim","john",4,7,9];
for(let i=0;i< arr.length;i++)
console.log(arr[i]);


let cars=["toyota","benz","harrier"]
cars[-1]="rvr" //the negative integers don't get counted or included in array of javscript ,they are called custom propery
cars[3]="fielder"
cars.length;
console.log(cars[2].length)//length of the element three

function arrayLength(cars){
    cars=["toyota","benz","harrier"]
    // return cars[3].length; by uncomenting we get the lenth of third elemt string
}
console.log(arrayLength([2].length)) // is not accessing any element in the cars array but it creating another array with one element

//different function of finding length of a string 
function arrayLength(cars){
    cars=["toyota","benz","harrier"]
    let last=cars[cars.length-2]
    return `we have ${last.length}`; 
}
console.log(arrayLength())
//creting a shopping list
//this one method eyou can do it
function shop(items)
{
    items=["milk","bread","apples"]
    items[1]="banana";
    // items.length
    return items
}
let shopping=shop();
console.log(shopping.length)
console.log(shopping)

//part two of shopping by having to return two elements
function shop(items)
{
    items=["milk","bread","apples"]
    items[1]="banana";
    return {
        list:items,
        length:items.length
    }
}
console.log(shop())

//part three of the same 
function shop(items) {
    items = ["milk", "bread", "apples"];
    const index = items.indexOf("bread");
    if (index !== -1) {
        items[index] = "banana"; // Replaces "bread" with "banana"
    }
    return items;
}

console.log(shop());

//part four of the same 
function shop(action) {
    let items = ["milk", "bread", "apples"];
    
    if(action==="items"){
        return items;
    }
    if(action==="length"){
        return items.length
    }
     return "no action"
}

console.log(shop("items"));

//methode part 
//using concat method
let arr2=[1,2,4,4];
let  arr1=[5,6,7,8,9]
console.log(arr2.concat(arr1))
//pop and push method
let pushing=[2,3,4]
pushing.splice(1,2,12,14)//adding elemnt at a specific index
pushing.push(9);//add a number in the array
pushing.pop()//delete the last number
pushing.shift()//delete the first index
pushing.unshift(34)//adding elemnt at the beginning of an array
console.log(pushing);

//using the find function both with a funnction and without
 let store=[
    {name:"milk" , price:50},
    {name:"bread" , price:25},
    {name:"sugar" , price:120}
 ];

 let items=store.find(item=>item.price===50);
 console.log(items.price)
 console.log(items.name)
 console.log(items)

 //using an at and findindex function
 let number = [1, 2, 3, 4, 5];
let index = number.findIndex(n => n === 3); // index of 
let result = number.at(index);              // value at that index
console.log(result); 
//example 2
let numbers=[{num:1},{num:2  } ,{num:3  } ].find(n=>n.num==3)
console.log(numbers)
//exmple 3
let arr5=[1,2,10,20,30,45];
let findvalue=arr5.find(function(e)
{
    return e===45;
});

let findvalue2=arr5.find(function(e)
{
    return e===10;
});
console.log(findvalue,findvalue2)
console.log(arr5)

// sorting in array
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];// string are sorted using alphabets
names.sort();
console.log(names)
//using reverse methode
let name = ["James", "Alicia", "Fatiha", "Maria", "Bert"];// string are sorted using alphabets
names.reverse();
console.log(name)

//lastindexof() function
let arrays=[5,10,15,20]
console.log( arrays.lastIndexOf(20))

//checking if a value exits using includes()
let arrs=["milk","breads"]
console.log(arrs.includes("bread"));
console.log(arrs.includes("banana"));

//getting index of first matcch item 
let nums=[1,3,5,8,9]
let indexs=nums.findIndex(num=>num===5)
console.log(index)

//use of maps  by transforming
let Number = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); 

//use of filter

let fill=[3,4,6,8,10,25,15,7,11]
let evens=fill.filter(n=>n%2==0);
console.log(evens)

// reduce array into a single value
let units= [1, 2, 3];
let total = units.reduce((sum, n) => sum + n, 0);
console.log(total); 

// version two 
function addNumbers(array) {
    return array.reduce(function(sum, n) {
        return sum + n;
    }, 0);
}

let num = [1, 2, 3];
console.log(addNumbers(num)); 

//turn array inot string
let word=["hello","kimani"]
console.log(word.join("  "))
 //practice finding sumof positive number using filter and reduce
 function sumOfPositives(numbers) {
    return numbers
        .filter(n => n > 0)         // keep only positives
        .reduce((sum, n) => sum + n, 0);  // add them up
}


//final practice
let cart=[];
cart.push("milk","bread","apples")
cart[1]="banana";
cart.pop();
cart.sort()
cart.find(c=>c.cart=="milk")
console.log(cart);
 let juice=["mango","lavenda","strawberry"]
 juice.pop()
  console.log(cart.concat(juice))

  //discussing multidimentional arrays
  let somevalue1=[1,2,3];
  let somevalue2=[4,5,6]
  let somevalue3=[7,8,9]
  let arrayOfAllValue=[somevalue1,somevalue2,somevalue3]
  console.log(arrayOfAllValue)

  let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(arrOfArrays2[0][1])

//student array marks 
  let students = [
  ["John", 85, 90],
  ["Mary", 78, 82],
  ["James", 88, 91]
];


console.log(students[1][2]); 
//tic tac game
let board = [
  ["X", "O", "X"],
  ["", "X", "O"],
  ["O", "", "X"]
];


console.log(board[1][1]);

let namesofpeople=[["mark","john"],["mathwe","ann"]]
namesofpeople[1][0]="joseph"
console.log(namesofpeople[1][0])


//  finding maximum number 
function findMax(list){
  let max=list[0];
  for(let i;i < list.length;i++)
  {
    if(list[i]>max){

        max=list[i]
    }
  }
  return max;
}
let array=[7,8,9];
console.log(findMax(array))



// filters by given minimum length
function filterByLength(strings, minLength) {
  return strings.filter(str => str.length >= minLength);
}

//  find minimum length and filter by it
function filterByMinLength(array) {
  if (array.length === 0) return []; 
  
  let minLength = array[0].length; 
  for(let n = 0; n < array.length; n++) {
    if(array[n].length < minLength) {
      minLength = array[n].length; 
    }
  }
  return array.filter(word => word.length === minLength);
}

//use of spread in function ,array
//  basic syntax
// ...iterable
//in arrays in coping numbers
let numb=[1,2,3]
let copy=[...numb]
console.log("numbers copied:"+copy)

//merging array using spread
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(`the merged numbers:${merged}`); 
//adding elements
let arrys=[2,3]
let extend=[1,...arrys ,8]
console.log(`extended:${extend}`)
//using spread to find max number
let maxNumber=[1,9,3,4]
let maxn=Math.max(...maxNumber)
console.log(`Maximum number is:${maxn}`)


console.log( "type of console", typeof(console))


//learning ojects
let person={
  name:"kimani",
  age:25,
  isStudent:true

}
person.age=35;
person.height=174
delete person.isStudent// for deleting we use key word delete
console.log("age" in person)//check elemnt in object if exist

console.log("The person property" ,person)

//using for .... in loop in ojects

for(let key in person){
  console.log(key +":" + person[key])
}
//use of obejects.keys and objects entries
//we use Object.keys(ojc) and we use Object.values(ojc) to get the keys and values in an objects
//object. is a inbult function
//Object.entries(obj) -returns [keys,value] pair
Object.keys(person).forEach(key => {
  console.log(key + ": " + person[key]);
});
//counting keys in an object
let objectkeylen=Object.keys(person).length
console.log("The length is:",objectkeylen)


//summing value in an oject

let marks={
  math:90,
  kiswahili:98,
  english:40,

}
let sum=0;
for (let mark in marks){

  sum+=marks[mark]

}

console.log("the totals", sum)
//using for loop
let summation = {
  math: 90,
  kiswahili: 98,
  english: 40,
};

let totals = 0;
let keys = Object.keys(marks); 

for (let i = 0; i < keys.length; i++) {
  totals += marks[keys[i]];
}

console.log("The total is", summation);

//using object.entries()
let mark = {
  math: 90,
  kiswahili: 98,
  english: 40
};

let addition = 0;

for (let [subject, score] of Object.entries(marks)) {
  console.log(`${subject}: ${score}`);
  addition += score;
}

console.log("Total marks:", addition);
//nested oject
let userss={
  name:"john",
  age:35,
  address:{
    city:"muranga",
    zip:10200
  }
}
let key=Object.keys(userss.address)
console.log("the key in nested object:",key)
//challenges

function getAllKeys(obj) {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      // Add nested keys i level deeper
      let nestedKeys = Object.keys(obj[key]);
      keys.push(...nestedKeys);
    }
  }

  return keys;
}

let user = {
  name: "john",
  age: 35,
  address: {
    city: "muranga",
    zip: 10200
  }
};

console.log("The keys:", getAllKeys(user));


//objects with methods
let car = {
  brand: "Toyota",
  speed: 120,
  describe: function() {
    return `This is a ${this.brand} moving at ${this.speed}km/h.`;
  }
};
console.log("the decribe:",car.describe());

//objects in array in objects
let company = {
  name: "TechCorp",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ]
};

console.log(company.name);              
console.log(company.employees[0].name); 

//objects in array

let userlist = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 22 }
];

console.log(userlist[1].name);  
