'use strict'
let arr =[];
function Pic (name,path,time){
    this.name = name;
    this.path = path;
    this.time =time;
    arr.push(this);
}
new Pic ('bag','images/bubblegum.jpg');
new Pic ('banana','images/banana.jpg');
new Pic ('bathroom','images/bathroom.jpg');
new Pic ('boots','images/boots.jpg');
new Pic ('breacfast','images/breakfast.jpg');
new Pic ('bubblegum','images/bubblegum.jpg');
new Pic ('chair','images/chair.jpg');
new Pic ('cthulhu','images/cthulhu.jpg');
new Pic ('dog-duck','images/dog-duck.jpg');
new Pic ('dragon','images/dragon.jpg');
new Pic ('pen','images/pen.jpg');
new Pic ('pet-sweep','images/pet-sweep.jpg');
new Pic ('scissors','images/scissors.jpg');
new Pic ('shark','images/shark.jpg');
new Pic ('sweep','images/sweep.png');
new Pic ('tauntaun','images/tauntaun.jpg');
new Pic ('unicorn','images/unicorn.jpg');
new Pic ('water-can','images/water-can.jpg');
new Pic ('wine-glass','images/wine-glass.jpg');

let max =25;
let count= 0;

// console.log(arr);
function randomnum (){
    return Math.floor(Math.random()*arr.length)
}
console.log(randomnum())

let first = document.getElementById('firstImage')
let second=document.getElementById('secondImage')
let third=document.getElementById('thirdImage')

let firstNum
        let secondNum
        let thirdNum

function tamara (){
    firstNum=randomnum();
    secondNum=randomnum();
     thirdNum=randomnum();
    while (firstNum===secondNum|| secondNum===thirdNum||firstNum===thirdNum) {
        firstNum=randomnum();
        secondNum=randomnum();
         thirdNum=randomnum();
        
        
    }
    first.src=arr[firstNum].path
    second.src=arr[secondNum].path
    third.src=arr[thirdNum].path
    
    
}
tamara()

first.addEventListener('click',clicking)
second.addEventListener('click',clicking)
third.addEventListener('click',clicking)
function clicking (){
    count++
    // console.log(count);
//     if (count<=max){
// if(event.target.id==='firstImage'){
//     Pic.arr[firstNum].vote++;
    
// }
// else if(event.target.id==='secondImage'){
// Pic.arr[secondNum].vote++;
//     }
//  else if (event.target.id==='thirdImage') {
//     Pic.arr[thirdNum].vote++;
//  }
// tamara();
// }else {
//     List();
// }
// }
// function List(){
//     const unorder =document.getElementById('unorder');
//     for(let i =0 ; i< Pic.arr.length;i++){
//         let list =document.createElement('li');
//         unorderd.appendChild(list);
//         list.textContent =`${Pic.arr[i].name} had ${Pic.arr[i].vote} vote ,and was seen &{Pic.arr[i].name}`
//     }
    
}