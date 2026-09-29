const btnStart = document.querySelector('.btn-start');
const allGrid = document.querySelector('.tetris-grid');
const cells = Array.from(allGrid.querySelectorAll('.cell'));

let currentPos = 4;
let space2And3 = 10;
let shapeBlock = [0, 1, space2And3 ,space2And3+1];
let saveTime = null;
function drawBlock() {
    shapeBlock.forEach((offset) => {
        cells[currentPos+ offset].classList.add('block-yellow')
    })
}

function moveBlock(){
    if(checkBlockStop()){
        stopBlock();
    }

    removeBlock();
    currentPos +=space2And3;
    drawBlock();
}

function removeBlock(){
    shapeBlock.forEach((offset) => {
        cells[currentPos + offset].classList.remove('block-yellow')
    })
}

function checkBlockStop(){

    return shapeBlock.some((offset) => {
        const nextPos = currentPos + space2And3 + offset;
        return nextPos >= 200 ||   cells[nextPos].classList.contains('marked');
    })

}


function stopBlock(){
    shapeBlock.forEach((offset) => {
        cells[currentPos + offset].classList.add('marked')
    });

    currentPos = 4;

    saveTime= null;

    drawBlock();
}

btnStart.addEventListener('click', ()=>{
    cells.forEach(cell => {
        cell.className = 'cell';
    });
    drawBlock();

    saveTime = setInterval(moveBlock, 100);
});
