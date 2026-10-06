const allGrid = document.querySelector('.tetris-grid');
const cells = Array.from(allGrid.querySelectorAll('.cell'));

let currentPos = 4;
let space2And3 = 10;
let orientedBlock = 0;


// let random = Math.floor(Math.random() * allBlocks.length);
// let currentBlock = allBlocks[random];
// let shapeBlock = currentBlock.shapes[orientedBlock];
let currentBlock = null;
let shapeBlock = null;


// let shapeBlock = [0, 1, space2And3 ,space2And3+1];
let saveTime = null;
let isplay = false;

function drawBlock() {
    shapeBlock.forEach((offset) => {
        // cells[currentPos+ offset].classList.add('block-yellow')
        cells[currentPos+ offset].classList.add(currentBlock.color)
    })
}

function redrawBlock() {
    currentPos = 4;
    orientedBlock = 0;
    currentBlock = getNextBlock();
    shapeBlock = currentBlock.shapes[orientedBlock];

    if (isLevel3()) {
        combine2Block();
    }
}

function moveBlock(){
    if(checkBlockStop()){
        stopBlock();
        return;
    }

    removeBlock();
    if (isLevel4()) {
        dropLevel4();
        return;
    }

    currentPos +=space2And3;

    if (isLevel2()) {
        autoRotate();
    }

    drawBlock();
}

function removeBlock(){
    if (isLevel5()) {
        removeBlockLv5();
        return;
    }

    shapeBlock.forEach((offset) => {
        // cells[currentPos + offset].classList.remove('block-yellow')
        cells[currentPos + offset].classList.remove(currentBlock.color)
    })
}

function checkBlockStop(){
    if (isLevel5()) {
        return checkBlockStopLv5();
    }

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

    // currentPos = 4;
    // orientedBlock = 0;
    // random = Math.floor(Math.random() * allBlocks.length);
    // currentBlock = allBlocks[random];
    // shapeBlock = currentBlock.shapes[orientedBlock];
    redrawBlock();

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

function changeOriented(){
    const nextOriented = (orientedBlock + 1) % currentBlock.shapes.length;
    const nextShape = currentBlock.shapes[nextOriented];
    const checkLeft = nextShape.some(offset => (currentPos + offset)% space2And3 ===0);
    const checkRight = nextShape.some(offset => (currentPos + offset)% space2And3 ===space2And3-1);

    const checkBlock = nextShape.some(offset => {
        const nextPos = currentPos + offset;
        return nextPos < 0 || nextPos >= 200 || cells[nextPos].classList.contains('marked');
    });

    if (!checkBlock && !(checkLeft && checkRight)) {
        removeBlock();
        orientedBlock = nextOriented;
        shapeBlock = nextShape;
        drawBlock();
    }

}