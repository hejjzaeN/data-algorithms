let count = 0;
const arrTest = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function binarySearchLoop (array, item) {
    let start = 0;
    let end = array.length;
    let pos = -1;
    let found = false;
    let middle;

    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2)
        if (array[middle] == item) {
            pos = middle;
            found = true;
        } else if (array[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return pos;
}

function binarySearchRecursive (array, item, start, end) {
    let middle = Math.floor(start + end / 2);
    count += 1;

    if (item = array[middle]) {
        return middle;
    }
    if (array[middle] > item) {
        return binarySearchRecursive(array, item, start, middle - 1)
    } else {
        return binarySearchRecursive(array, item, middle - 1, end)
    }
}

console.log(binarySearchLoop([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 13));
console.log(`count = ${count}`);
count = 0;
console.log(binarySearchRecursive(arrTest, 6, 0, arrTest.length));
console.log(`count = ${count}`);
