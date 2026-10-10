let level6Direction = 1;

function isLevel6() {
    return valLevel && valLevel.textContent.trim() === '6';
}

function initLv6() {
    const centerRow = Math.floor(row / 2) - 1;
    const centerCol = Math.floor(col / 2) - 1;
    currentPos = centerRow * space2And3 + centerCol;
    level6Direction = Math.random() < 0.5 ? -1 : 1;
}

function checkBlockStopLv6() {
    if (level6Direction === 1) {
        return shapeBlock.some((offset) => {
            const nextPos = currentPos + space2And3 + offset;
            return nextPos >= row * col || cells[nextPos].classList.contains('marked');
        });
    } else {
        return shapeBlock.some((offset) => {
            const nextPos = currentPos - space2And3 + offset;
            return nextPos < 0 || cells[nextPos].classList.contains('marked');
        });
    }
}

function moveLv6() {
    if (checkBlockStopLv6()) {
        stopBlock();
        return;
    }

    removeBlock();
    currentPos += level6Direction * space2And3;
    drawBlock();
}
