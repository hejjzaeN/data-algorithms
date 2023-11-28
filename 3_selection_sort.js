let count = 0;

function selectionSort (array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}

console.log(selectionSort([25,3,52,33,12,7,0,21,9,3]));
console.log(`count = ${count}`);
