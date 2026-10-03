function isLevel2() {
    return valLevel && valLevel.textContent.trim() === '2';
}

function errorRotate(nextShape) {
    let checkLeft = false;
    let checkRight = false;

    for (let i = 0; i < nextShape.length; i++) {
        let nextPos = currentPos + nextShape[i];
        if (nextPos < 0 || nextPos >= 200 || cells[nextPos].classList.contains('marked')) {
            return false;
        }


        let col = nextPos % space2And3;
        if (col === 0) checkLeft = true;
        if (col === 9) checkRight = true;
        if (checkLeft && checkRight) {
            return false;
        }
    }
    return true;
}

function autoRotate() {
    let nextOriented = (orientedBlock + 1) % currentBlock.shapes.length;
    let nextShape = currentBlock.shapes[nextOriented];

    if (errorRotate(nextShape)) {
        orientedBlock = nextOriented;
        shapeBlock = nextShape;
    }
}
