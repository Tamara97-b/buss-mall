Pic.arr = [];

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


let section = document.getElementById('section');
let firstImage = document.getElementById('firstImage');
let secondImage = document.getElementById('secondImage');
let thirdImage = document.getElementById('thirdImage');

const max = 25;
let counter = 0;


function Pic(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.shown = 0;
    Pic.arr.push(this);
}

let first;
let second;
let third;

function getImages() {
    first = generateRandom();
    second = generateRandom();
    third = generateRandom();

    while (first === second || first === third || second === third) {
        first = generateRandom();
        third = generateRandom();
    }


    firstImage.src = Pic.arr[first].path;
    secondImage.src = Pic.arr[second].path;
    thirdImage.src = Pic.arr[third].path;
    Pic.arr[first].shown++;
    Pic.arr[second].shown++;
    Pic.arr[third].shown++;

}
getImages();


section.addEventListener('click', clicking);

function clicking(event) {
    counter++;

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
        let listItem = document.createElement('li');
        ul.appendChild(listItem);
        listItem.textContent = `${Pic.arr[i].name} ${Pic.arr[i].votes} votes , seen ${Pic.arr[i].shown}`;
        
    }
    btn.removeEventListener('click', list);
    section.removeEventListener('click', clicking);


}



function generateRandom() {
    return Math.floor(Math.random() * Pic.arr.length);
}
generateRandom();

