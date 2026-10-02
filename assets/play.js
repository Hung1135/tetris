const btnStart = document.querySelector('.btn-start');
const allGrid = document.querySelector('.tetris-grid');
const cells = Array.from(allGrid.querySelectorAll('.cell'));

let currentPos = 4;
let space2And3 = 10;
let orientedBlock = 2;

let random = Math.floor(Math.random() * allBlocks.length);
let currentBlock = allBlocks[random];
let shapeBlock = currentBlock.shapes[orientedBlock];


// let shapeBlock = [0, 1, space2And3 ,space2And3+1];
let saveTime = null;
let isplay = false;

function drawBlock() {
    shapeBlock.forEach((offset) => {
        // cells[currentPos+ offset].classList.add('block-yellow')
        cells[currentPos+ offset].classList.add(currentBlock.color)
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
        // cells[currentPos + offset].classList.remove('block-yellow')
        cells[currentPos + offset].classList.remove(currentBlock.color)
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
    checkAndRemoveRows();
    currentPos = 4;
    orientedBlock = 0;
    random = Math.floor(Math.random() * allBlocks.length);
    currentBlock = allBlocks[random];
    shapeBlock = currentBlock.shapes[orientedBlock];

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

function checkAndRemoveRows(){
    let countRow = 0;
    for(let i = 19; i>=0; i--){
        const rowStart = i * space2And3;
        let isRowFull = true;
        for (let j = 0; j < space2And3; j++){
            if (!cells[rowStart + j].classList.contains('marked')) {
                isRowFull = false;
                break;
            }
        }

        if(isRowFull){
            countRow += 1;
            for (let j = rowStart + space2And3 - 1; j >= space2And3; j--) {
                cells[j].className = cells[j- space2And3].className;
            }
            for (let i = 0; i < space2And3; i++) {
                cells[i].className = 'cell';
            }
            i++;
        }
    }
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
