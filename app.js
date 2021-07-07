
Pic.arr = [];
arrOfName=[];
arrOfVote=[];
arrOfShown=[];
function Pic(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.shown = 0;
    Pic.arr.push(this);
    arrOfName.push(this.name);
    
}

new Pic('bag', 'images/bag.jpg');
new Pic('banana', 'images/banana.jpg');
new Pic('bathroom', 'images/bathroom.jpg');
new Pic('boots', 'images/boots.jpg');
new Pic('breakfast', 'images/breakfast.jpg');
new Pic('bubblegum', 'images/bubblegum.jpg');
new Pic('chair', 'images/chair.jpg');
new Pic('cthulhu', 'images/cthulhu.jpg');
new Pic('dog-duck', 'images/dog-duck.jpg');
new Pic('dragon', 'images/dragon.jpg');
new Pic('pen', 'images/pen.jpg');
new Pic('pet-sweep', 'images/pet-sweep.jpg');
new Pic('scissors', 'images/scissors.jpg');
new Pic('shark', 'images/shark.jpg');
new Pic('sweep', 'images/sweep.png');
new Pic('tauntaun', 'images/tauntaun.jpg');
new Pic('unicorn', 'images/unicorn.jpg');
new Pic('water-can', 'images/water-can.jpg');
new Pic('wine-glass', 'images/wine-glass.jpg');

listFrom();
let section = document.getElementById('section');
let firstImage = document.getElementById('firstImage');
let secondImage = document.getElementById('secondImage');
let thirdImage = document.getElementById('thirdImage');

const max = 25;
let counter = 0;




let first;
let second;
let third;

let arrOfIndex =[];


function getImages() {
    first = generateRandom();
    second = generateRandom();
    third = generateRandom();
    console.log();
console.log(arrOfIndex,'begore whie');
    while (first === second || first === third || second === third||arrOfIndex.includes(first)||arrOfIndex.includes(second)||arrOfIndex.includes(third)){
     
        
        first = generateRandom();
        third = generateRandom();
        second= generateRandom();
        
    }
    arrOfIndex=[first,second,third];
    console.log(first,second,third);

    firstImage.src = Pic.arr[first].path;
    secondImage.src = Pic.arr[second].path;
    thirdImage.src = Pic.arr[third].path;
    Pic.arr[first].shown++;
    Pic.arr[second].shown++;
    Pic.arr[third].shown++;
    currentImage =[];

}
getImages();


section.addEventListener('click', clicking );

function clicking(event) {
    counter++;
    saveData();
    if (max >= counter) {
        if (event.target.id === 'firstImage') {
            Pic.arr[first].votes++;

        } else if (event.target.id === 'secondImage') {
            Pic.arr[second].votes++;

        } else if (event.target.id === 'thirdImage') {
            Pic.arr[third].votes++;
        }
       
        getImages();

    } else {
        let btn = document.getElementById('btn');
        btn.addEventListener('click', list);

    }
    
}


function list() {
    let ul = document.getElementById('unList');
    for (let i = 0; i < Pic.arr.length; i++) {
        arrOfVote.push(Pic.arr[i].votes)
        arrOfShown.push(Pic.arr[i].shown)
        let listItem = document.createElement('li');
        ul.appendChild(listItem);
        listItem.textContent = `${Pic.arr[i].name} ${Pic.arr[i].votes} votes , seen ${Pic.arr[i].shown}`;
        
    }
    gittingChart();
    btn.removeEventListener('click', list);
    section.removeEventListener('click', clicking);


}



function generateRandom() {
    return Math.floor(Math.random() * Pic.arr.length);
}
function gittingChart(){

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfName,
        datasets: [{
            label: '# of Votes',
            data: arrOfVote,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1


        },{
            label: '# of shown',
            data: arrOfShown,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
function saveData(){
    let arrOFData=JSON.stringify(Pic.arr);
    localStorage.setItem('name: ',arrOFData);
}





function listFrom(){
let info=localStorage.getItem('name: ')
let parsedName =JSON.parse(info);
if (parsedName){
    Pic.arr = parsedName
}

}

