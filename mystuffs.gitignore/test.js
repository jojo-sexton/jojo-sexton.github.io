function fizzbuzz(num) {
    /*for(var i=0;i<=num;i++){
    
      if(i%3===0 && i%5===0){console.log("FizzBuzz");}
      else if(i%3===0){console.log("Fizz");}
      else if(i%5===0){console.log("Buzz");}
      else{console.log(i);}
    
    }*/
    
    if(num%3===0 && num%5===0){console.log("FizzBuzz");}
      else if(num%3===0){console.log("Fizz");}
      else if(num%5===0){console.log("Buzz");}
      else{console.log(num);}
    
    }
    fizzbuzz(40);
    
    function super_fizzbuzz(arr) {
        
        for(i=0;i<arr.length;i++){
        if(arr[i]%3===0 && arr[i]%5===0){
            arr[i]="FizzBuzz";}
          else if(arr[i]%3===0){
            arr[i]="Fizz";}
          else if(arr[i]%5===0){arr[i]="Buzz";}
          else{ arr;}
        }
        
        arr;
        }

    let friends=[
    {name:"Robyn",age:55,kids:2},
    {name:"Nikki",age:50,kids:1},
    {name:"Abhi",
        age:6,
        kids:1,
        hobbies:
        {food: ["Vietnamese","Thai","Chinese"], sports:"walking"  }},
    {name:"Siobhan",age:30,kids:1}
    ];

let kidsName=[{Robyn:["Zac","Jacob"]},
                {Nikki:"Broke"},
            {Abhi:"Nikisha"},
        {Siobhan:"Charlie"}];

var test = friends.map(x => x.name + x.age);

console.log(test);


var temp=`hello, my name is poppy`;
function intro(a,b){return `my name is ${a} and my age is ${b}`};

console.log (intro("Poppy",2))

var baby= friends.map(function(x){return `${x.name} has ${x.kids} kid(s)`});
console.log(baby);

var lotto=[4,90,2,19,68];
lotto.sort((a,b)=> (a>b ? 1 :-1));
console.log(lotto);

const lottoSum= lotto.reduce((total,x) =>total+x,0);
console.log(lottoSum);


var poppyDuplo=[5,9,12,30,90];
const sumPoppyDuplo=poppyDuplo.reduce((total,x)=> total+x,0);
console.log(sumPoppyDuplo);

var kids=friends.map(x =>x.kids);
console.log (kids);
var totalKids=kids.reduce((total,x)=>total+x,0);
console.log(totalKids);

var poppyWho=`Poppy is a toddler. She is very cute.`;
var words=poppyWho.split(" ");
console.log(words);

var combined=words.join(" ");
console.log(combined);

var poppyAge=["Poppy is 2.","She is very active."];
var poppy= [].concat(poppyWho,poppyAge);
console.log (poppy);
var aboutPoppy=poppy.join(" ")
console.log(aboutPoppy);

var removeCute=aboutPoppy.split("She is very cute.");
console.log(removeCute);

var fullLine=removeCute.join(" ");
console.log(fullLine);


var testString="twinkle twinkle little star";
var testArray=testString.split(" ")
.map(x => x.charAt(0).toUpperCase()+x.slice(1))
.join(" "); 




 arr=[{door: 1, hiding: "Shaggy"}, {door: 2, hiding: "Scooby"}, {door: 3, hiding: "Velma"}]
arr1=[{door: 1, hiding: ""}, {door: 2, hiding: "Scooby"}, {door: 3, hiding: "Velma"}]

// find the door where Scooby is hiding
function whereAreYou (arr){
    var isScoopy= arr.find(x => x.hiding==="Scooby");
    if (isScoopy===undefined) {return 0} else {console.log (isScoopy.door)}
    }

whereAreYou(arr);
