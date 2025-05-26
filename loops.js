//while loop  1=0;

let i=0;
while(i<10){
    console.log(i);
    i++
}

//checking an elemnt in an array and delete it when is not found
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jack"]
let notFound= true;
while (notFound && someArray.length > 0) {
if (someArray[0] === "Louiza") {
console.log("Found her!");
notFound = false;
} else {
someArray.shift();
}
}
//fibonacci series
let ntr1=0;
let ntr2=1;
let temp;
let finobacci=[];
while(finobacci.length<25){
    finobacci.push(ntr1);
    temp=ntr1+ntr2;
    ntr1=ntr2;
    ntr2=temp;
}
console.log(finobacci);