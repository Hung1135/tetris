const btnStart = document.querySelector('.btn-start');

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
        const checkBlock = shapeBlock.some(offset => cells[currentPos + offset + 1]?.classList.contains('marked'));
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

    saveTime = setInterval(moveBlock, 100);
});
