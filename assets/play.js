const btnStart = document.querySelector('.btn-start');
const allGrid = document.querySelector('.tetris-grid');
const cells = Array.from(allGrid.querySelectorAll('.cell'));

let currentPos = 4;
let space2And3 = 10;
let shapeBlock = [0, 1, space2And3 ,space2And3+1];
let saveTime = null;
let isplay = false;

function drawBlock() {
    shapeBlock.forEach((offset) => {
        cells[currentPos+ offset].classList.add('block-yellow')
    })
}

function moveBlock(){
    if(checkBlockStop()){
        stopBlock();
        return;
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
    const checkGameOver = shapeBlock.some(offset =>
        cells[currentPos + offset].classList.contains('marked')
    );

    if(checkGameOver){
        clearInterval(saveTime);
        saveTime= null;
        alert("game over");
        isplay = false;
        return;
    }

    drawBlock();
}

function navigate(e) {
    if(!isplay) return;
    if(e.key === 'A' || e.key === 'a'){
        const checkLeft = shapeBlock.some(offset => (currentPos + offset)%space2And3 ===0);
        const checkBlock = shapeBlock.some(offset => cells[currentPos + offset - 1]?.classList.contains('marked'));
        if (!checkLeft && !checkBlock) {
            removeBlock();
            currentPos -= 1;
            drawBlock();
        }
    } else if (e.key === 'D'|| e.key === 'd') {
        const checkRight = shapeBlock.some(offset => (currentPos + offset) % space2And3 === space2And3 - 1);
        const checkBlock = shapeBlock.some(offset => cells[currentPos + offset + 1]?.classList.contains('mared'));
        if (!checkRight && !checkBlock) {
            removeBlock();
            currentPos += 1;
            drawBlock();
        }
    }



    }
document.addEventListener('keydown', navigate);

btnStart.addEventListener('click', ()=>{
    if(isplay) return;
    cells.forEach(cell => {
        cell.className = 'cell';
    });

    isplay = true;
    // currentPos -= 4;
    drawBlock();

    saveTime = setInterval(moveBlock, 100);
});
