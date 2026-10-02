const width = 10;

//hình vuông
const shapeO = {
    color: 'block-yellow',
    shapes: [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]
};

const shapeI = {
    color: 'block-white',
    shapes: [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]
};

const shapeT = {
    color: 'block-purple',
    shapes: [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]
};

const shapeL = {
    color: 'block-orange',
    shapes: [
        [2, width, width + 1, width + 2],
        [1, width + 1, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width + 2, width * 2],
        [0, 1, width + 1, width * 2 + 1]
    ]
};

const shapeJ = {
    color: 'block-blue',
    shapes: [
        [0, width, width + 1, width + 2],
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2]
    ]
};

const shapeS = {
    color: 'block-green',
    shapes: [
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2],
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2]
    ]
};

const shapeZ = {
    color: 'block-red',
    shapes: [
        [0, 1, width + 1, width + 2],
        [2, width + 1, width + 2, width * 2 + 1],
        [0, 1, width + 1, width + 2],
        [2, width + 1, width + 2, width * 2 + 1]
    ]
};

const allBlocks = [shapeO, shapeI, shapeT, shapeL, shapeJ, shapeS, shapeZ];
