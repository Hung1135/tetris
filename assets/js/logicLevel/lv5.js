function isLevel5() {
    return valLevel && valLevel.textContent.trim() === '5';
}
function checkBlockStopLv5() {
    return shapeBlock.some((offset) => {
        const nextPos = currentPos + space2And3 + offset;

        if (nextPos >= 200) {
            return true;
        }

        if (cells[nextPos].classList.contains('marked')) {
            if (cells[nextPos].classList.contains(currentBlock.color)) {
                return false;
            }

            return true;
        }

        return false;
    });
}
function removeBlockLv5() {
    shapeBlock.forEach((offset) => {
        const pos = currentPos + offset;
        if (pos >= 0 && pos < cells.length) {
            if (!cells[pos].classList.contains('marked')) {
                cells[pos].classList.remove(currentBlock.color);
            }
        }
    });
}