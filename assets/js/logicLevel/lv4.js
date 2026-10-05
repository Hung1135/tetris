function isLevel4() {
    return valLevel && valLevel.textContent.trim() === '4';
}

let isBlockFall = false;
function dropLevel4() {
    isBlockFall = true;
    removeBlock();

    setTimeout(() => {
        if (!isplay) {
            isBlockFall = false;
            return;
        }

        removeBlock();
        for (let i = 0; i < 3; i++) {
            if (i === 0 || !checkBlockStop()) {
                currentPos += space2And3;
            } else {
                break;
            }
        }
        drawBlock();
        isBlockFall = false;
    }, 500);
}
