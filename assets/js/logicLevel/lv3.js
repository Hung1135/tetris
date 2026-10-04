function isLevel3() {
    return valLevel && valLevel.textContent.trim() === '3';
}

function combine2Block() {
    let random = Math.floor(Math.random() * allBlocks.length);
    let block2 = allBlocks[random];
    let shape2 = block2.shapes[0];

    for (let i = 0; i < shape2.length; i++) {
        shapeBlock.push(shape2[i] + 3);
    }
    currentPos = 2;
}