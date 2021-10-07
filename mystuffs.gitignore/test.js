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
    
//     function super_fizzbuzz(arr) {
        
//         for(i=0;i<arr.length;i++){
//         if(arr[i]%3===0 && arr[i]%5===0){
//             arr[i]="FizzBuzz";}
//           else if(arr[i]%3===0){
//             arr[i]="Fizz";}
//           else if(arr[i]%5===0){arr[i]="Buzz";}
//           else{ arr;}
//         }
        
//         arr;
//         }

//     let friends=[
//     {name:"Robyn",age:55,kids:2},
//     {name:"Nikki",age:50,kids:1},
//     {name:"Abhi",
//         age:6,
//         kids:1,
//         hobbies:
//         {food: ["Vietnamese","Thai","Chinese"], sports:"walking"  }},
//     {name:"Siobhan",age:30,kids:1}
//     ];

// let kidsName=[{Robyn:["Zac","Jacob"]},
//                 {Nikki:"Broke"},
//             {Abhi:"Nikisha"},
//         {Siobhan:"Charlie"}];

// var test = friends.map(x => x.name + x.age);

// console.log(test);


// var temp=`hello, my name is poppy`;
// function intro(a,b){return `my name is ${a} and my age is ${b}`};

// console.log (intro("Poppy",2))

// var baby= friends.map(function(x){return `${x.name} has ${x.kids} kid(s)`});
// console.log(baby);

// var lotto=[4,90,2,19,68];
// lotto.sort((a,b)=> (a>b ? 1 :-1));
// console.log(lotto);

// const lottoSum= lotto.reduce((total,x) =>total+x,0);
// console.log(lottoSum);


// var poppyDuplo=[5,9,12,30,90];
// const sumPoppyDuplo=poppyDuplo.reduce((total,x)=> total+x,0);
// console.log(sumPoppyDuplo);

// var kids=friends.map(x =>x.kids);
// console.log (kids);
// var totalKids=kids.reduce((total,x)=>total+x,0);
// console.log(totalKids);

// var poppyWho=`Poppy is a toddler. She is very cute.`;
// var words=poppyWho.split(" ");
// console.log(words);

// var combined=words.join(" ");
// console.log(combined);

// var poppyAge=["Poppy is 2.","She is very active."];
// var poppy= [].concat(poppyWho,poppyAge);
// console.log (poppy);
// var aboutPoppy=poppy.join(" ")
// console.log(aboutPoppy);

// var removeCute=aboutPoppy.split("She is very cute.");
// console.log(removeCute);

// var fullLine=removeCute.join(" ");
// console.log(fullLine);


// var testString="twinkle twinkle little star";
// var testArray=testString.split(" ")
// .map(x => x.charAt(0).toUpperCase()+x.slice(1))
// .join(" "); 




//  arr=[{door: 1, hiding: "Shaggy"}, {door: 2, hiding: "Scooby"}, {door: 3, hiding: "Velma"}]
// arr1=[{door: 1, hiding: ""}, {door: 2, hiding: "Scooby"}, {door: 3, hiding: "Velma"}]

// // find the door where Scooby is hiding
// function whereAreYou (arr){
//     var isScoopy= arr.find(x => x.hiding==="Scooby");
//     if (isScoopy===undefined) {return 0} else {console.log (isScoopy.door)}
//     }

// whereAreYou(arr);


// MINESWEEPER
// <!-- redo fizzbuzz -->
//  first create a function (number) that:
//     If the number is a multiple of 3 replace it with  fizz, 
//     If the number is a multiple of 5, replace it with buzz 
//     If the number is a multiple of 14, replace it with fizzbuzz 
//     Else, return the number  
// function fizzbuzz (x){if (x%3===0 && x%5===0){return("fizzbuzz")}
//                 else if(x%3===0){return ("fizz")}
//                 else if(x%5===0){return("buzz")}
//                 else {return (x)}
// }

// // Testing fizzbuzz:
// fizzbuzz(20);
// fizzbuzz(24);
// fizzbuzz(45);



//-- create a function that turn array=[3,9,7] into newArray=[fizz,9,7]

// function superfizzbuzz (arr) {
//   let newArr=[];
//   for (i=0;i<arr.length;i++){
//   newArr.push(fizzbuzz(arr[i]))}
// console.log(newArr);
// }

// var arr1=[1,3,5,7,9];
// var arr2=[18,0,4,6,20,90];
// var arr3=[200,40,59,24,65];



// function superfizzbuzz (arr){
// return arr.map(num => fizzbuzz(num))}

// console.log(superfizzbuzz (arr1));
// superfizzbuzz (arr2);
// superfizzbuzz (arr3);

// arr3.ticket="Poppy";
// console.log(arr3);


// person=[{name:"Anna", Age:29, Kid: "Maggie"},
//           {name:"JoJo", Age:35, Kid: "Poppy"},
//           {name:"Ngoc", Age:36, Kid: "Bin"}]

// person[0].isCool=true;

          
//           console.log(person);

// let repayment = (interest, amount)=>{return interest*amount/100/26};

// console.log(`Repayment per fortnight is $${repayment(2.6,35000)}`)

// let volume= (w,d,h)=>{return w*d*h};

// let volumeOfBox=volume(3,3,3);
// console.log(`The volume of the box is ${volumeOfBox}`)

// let maxBorrowing = (OO,IP) =>  (OO*80/100)+(IP*70/100);
// console.log(`maximum you can borrowing against your Owner Occupied and Investment Property is ${maxBorrowing(500000, 1000000)}`);

// array=[10, 20, 30];

// //sum all numbers in array

// let sum= x => {
//     var sum =0; 
//     for (i=0;i<x.length;i++){sum=sum+x[i]}
// return sum;}

// console.log(`Total value of the numbers in the array is ${sum(array)}`);


 let fairyTales=document.querySelector('body > h1');
 fairyTales.style='color: pink';
 fairyTales.style.fontSize='50px';
 fairyTales.style.fontFamily='san-serif';
 fairyTales.style.textAlign='center';
 fairyTales.setAttribute('class','fairy dust pink title');

 
fairyTales.classList.add('cute');
fairyTales.classList.remove('dust');
fairyTales.setAttribute('class','')

var epsum=document.querySelectorAll('p')
console.log(epsum);

epsum.forEach(x =>{
    
var content=x.textContent;
if(content.includes('error')){x.classList.add('error')}
else if(content.includes('success')){x.classList.add('success')}
else return x;

})


var button=document.querySelector('body > button');
button.innerHTML='Add more book';

button.addEventListener('click',() =>
// add new book when the button is clicked
{const newBook=document.createElement('p');
newBook.textContent="Something new to read";
const divToAddTo=document.querySelector('div.container');
divToAddTo.prepend(newBook);
}
)

var book=document.querySelectorAll('p');
book.forEach(x => x.addEventListener(
    'click', 
    e=>{e.target.remove()})


)