const btnStart = document.querySelector('.btn-start');
const btnLevel = document.querySelector('.btn-level');
const popupLevel = document.querySelector('.popup-level');
const valLevel = document.querySelector('.val-level');

function navigate(e) {
    if (!isplay|| isBlockFall) return;

    if(e.key === 'A' || e.key === 'a'){
        const checkLeft = shapeBlock.some(offset => (currentPos + offset)%space2And3 ===0);
        const checkBlock = shapeBlock.some(offset => {
            let target = currentPos + offset - 1;
            return target >= 0 && cells[target].classList.contains('marked');
        });
        if (!checkLeft && !checkBlock) {
            removeBlock();
            currentPos -= 1;
            drawBlock();
        }

    } else if (e.key === 'D'|| e.key === 'd') {
        const checkRight = shapeBlock.some(offset => (currentPos + offset) % space2And3 === space2And3 - 1);
        const checkBlock = shapeBlock.some(offset => {
            let target = currentPos + offset + 1;
            return target < 200 && cells[target].classList.contains('marked');
        });
        if (!checkRight && !checkBlock) {
            removeBlock();
            currentPos += 1;
            drawBlock();
        }


    }else if( e.key === 'W'|| e.key === 'w' ) {
        changeOriented();
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
    redrawBlock();
    drawBlock();

    saveTime = setInterval(moveBlock, 1000);
});

btnLevel.addEventListener('click', () => {
    popupLevel.classList.toggle('show');
});
document.querySelectorAll('.level-item').forEach(e => {
    e.addEventListener('click', () => {
        valLevel.textContent = e.textContent;
        popupLevel.classList.remove('show');
    });
});