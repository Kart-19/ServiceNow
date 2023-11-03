let row = parseInt(prompt("Enter the Row"));

//Pattern
var res="";
for( var i=0;i<row;i++){
    for(var j=0;j<=i;j++){
        res+="*"
    }
    res+="\n";
}
console.log(res);


//factorila
let num = parseInt(prompt("Enter the num for Factorila"));
var sum=1;
for(let k =1;k<=num;k++){
    sum*=k;
}
console.log(sum);

//Calculator

let operation = prompt("Enter the Operation");

let x,y;
x = parseInt( prompt("Enter the First Number"));
y = parseInt(prompt("Enter the Second Number"));

var add = (x,y)=>x+y;
var sub = (x,y)=>x-y;
var mul = (x,y)=>x*y;
var div = (x,y)=>x/y;

var z=0;
switch (operation) {
    case "+":
        z = add(x,y);
        console.log(z);
        break;

    case "-":
        z = sub(x,y);
        console.log(z);
        break;

    case "*":
        z =mul(x,y);
        console.log(z);
        break;

    case "/":
        z =div(x,y);
        console.log(z);
        break;

    default:
        alert("Enter the Valid Operation");
        break;
}

