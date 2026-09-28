const btnStart = document.querySelector('.btn-start');
const allGrid = document.querySelector('.tetris-grid');
const cells = Array.from(allGrid.querySelectorAll('.cell'));

let currentPos = 4;
let space2And3 = 10;
let shapeBlock = [0, 1, space2And3 ,space2And3+1];

function drawBlock() {
    shapeBlock.forEach((offset) => {
        cells[currentPos+ offset].classList.add('block-yellow')
    })
}

function moveBlock(){
    removeBlock();
    currentPos +=space2And3;
    drawBlock();
}

function removeBlock(){
    shapeBlock.forEach((offset) => {
        cells[currentPos + offset].classList.remove('block-yellow')
    })
}


btnStart.addEventListener('click', ()=>{
    cells.forEach(cell => {
        cell.className = 'cell';
    });
    drawBlock();

    setInterval(moveBlock, 300);
});
