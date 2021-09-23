// Building object

Jojo = {Name: "Jojo", Age:35, Kids:"Poppy", "Marital Status": "Married", Iscool:true};
Nikki = {Name: "Nikki", Age:50, Kids:"Brookie", "Marital Status": "Separating", Iscool:true};
Robyn = {Name: "Robyn", Age:55, Kids:["Corby","Zac"], "Marital Status": "Divorced", Iscool:true};
Siobhan = {Name: "Siohan", Age:30, Kids:"Charlie", "Marital Status": "Married", Iscool:false};



// FUNCTION:
function printkids(person){console.log(person.Kids)}
printkids(Jojo)

function size(a,b) {console.log(a*b)}
size(3,4)

function thunderAndLightningDistance (distance){console.log(distance/5)} 
thunderAndLightningDistance(20)

function getAge(person){return console.log(person.Name +" is " + person.Age)}
getAge(Jojo)

function compareAge(person1, person2){
if (person1.Age >= person2.Age) {console.log(person1.Name + " is older than " + person2.Name)}
else {console.log(person1.Name + "younger or same age as " + person2.Name)}
}

compareAge(Robyn,Jojo)


function compareEquality(a,b){if( a!= b) {return "different";} return "the same";
}

function marriedOrNot (person) {
return person.Name + "is " + person["Marital Status"];
}

function areTheyMarried (person){
if(person["Marital Status"].hasOwnProperty("Married")){return "yes she is Married"} else {return person.Name + " is not. She is " + person["Marital Status"]}}

function convertPoundToKg(pound){
var kg=pound*2.2;
return kg;
}



   

var arr=[9, 2, 3, 4, 5];
function multiply(arr,n) {

var product=1;
for (var i=0; i<n; i++){
var product=product*arr[i];}
return product;
}

 console.log(multiply(arr,1));

/* Convert Loop to recursion explain
n=0: multiply(arr,0)= not applicable because the zero element of the array doesnt exist
n=1: multiply(arr,1)= 1*9= 1*arr[0]]
n=2: multiply(arr,2)= 1*9*2=1*arr[0]*arr[1]
n=3: multiply(arr,3)= 1*9*2*3=arr[0]*arr[1]*arr[2]
n=4: multiply(arr,4)= 1*9*2*3*4=arr[0]*arr[1]*arr[2]*arr[3]
n=3: multiply(arr,5)= 1*9*2*3*5=arr[0]*arr[1]*arr[2]*arr[4]
*/

