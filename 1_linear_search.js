let count = 0;

function linearSearch (array, item) {
    for (let i = 0; i < array.length - 1; i++) {
        count += 1;
        if (array[i] == item) return i;
    }
    return null;
}

console.log(linearSearch([1,6,7,22,2,3,56,3,4], 3));
console.log(`count = ${count}`);

