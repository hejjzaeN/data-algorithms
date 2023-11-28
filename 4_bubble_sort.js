let count = 0;

function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log(bubbleSort([25,3,52,33,12,7,0,21,9,3]));
console.log(`count = ${count}`);
