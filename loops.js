function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        if (i === 1) {
            array[i] = "I am " + i + " strange loop.";
        } else {
            array[i] = "I am " + i + " strange loop.";
        }

    }
    return array;
}

function whileLoop(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
    console.log("done");
}

function incrementVariable() {
    i = i + 1;
    return i;
}

function doWhileLoop(num) {
    do {

    } while (incrementVariable() <= num);
}
