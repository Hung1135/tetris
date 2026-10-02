const preShapes = [
    [5, 6, 9, 10],
    [1, 5, 9, 13],
    [5, 8, 9, 10],
    [6, 8, 9, 10],
    [4, 8, 9, 10],
    [5, 6, 8, 9],
    [4, 5, 9, 10]
];

const preAllCells = document.querySelector('.preview-box');
const preCells = Array.from(preAllCells.querySelectorAll('.cell'));
let nextRandom = Math.floor(Math.random() * allBlocks.length);
let nextBlock = allBlocks[nextRandom];



function displayPredictBlock() {
    preCells.forEach(cell => {
        cell.className = 'cell';
    });
    preShapes[nextRandom].forEach(index => {
        preCells[index].classList.add(nextBlock.color);
    });
}



function getNextBlock() {
    const blockPlay = nextBlock;
    nextRandom = Math.floor(Math.random() * allBlocks.length);
    nextBlock = allBlocks[nextRandom];
    displayPredictBlock();
    return blockPlay;
}


displayPredictBlock();