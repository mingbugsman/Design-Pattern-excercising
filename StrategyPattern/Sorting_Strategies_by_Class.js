// Strategy Pattern with functions
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function quickSort(array) {
    if (array.length <= 1) return array;
    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(x => x < pivot);
    const right = array.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

const sorting = {
    mergesort : mergeSort,
    bubblesort : bubbleSort,
    quicksort : quickSort
}
class SortContext {
    constructor() {
        this.strategy = null;
    }
    setStrategy(strategy) {
        console.log(strategy);
        if (sorting[strategy]) { // kiểm tra chiến lược sort có tồn tại trong sorting không
            this.strategy = strategy;
        }
        else {
            console.log("Invalid sort strategy");
        }
    }
    sort(array) {
        if (this.strategy && sorting[this.strategy]) {
            console.log(`Using strategy sorting ::: ${this.strategy}`)
            return sorting[this.strategy](array);
        } else {
            console.log('No valid strategy set');
            return [];
        }
    }
}

export default SortContext;