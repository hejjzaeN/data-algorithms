let count = 0;

function quickSearch (array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [], greater = [];

    for (let i = 0 ; i < array.length; i++) {
        count += 1;
        if (pivotIndex === i) {
            continue
        }
        if (pivot < array[i]) {
            greater.push(array[i]);
        } else {
            less.push(array[i]);
        }
    }

    return [...quickSearch(less), pivot, ...quickSearch(greater)]
}

console.log(quickSearch([25,3,52,33,12,7,0,21,9,3]));
console.log(`count = ${count}`);
