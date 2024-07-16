
// bubble sort

const bubblesortMethod = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
// quick sort

const quicksortMethod = array => {
    if (array.length <=1 ) return array;
    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(x => x < pivot);
    const right = array.filter(x => x > pivot);
    return [...quicksortMethod(left), pivot, ...quicksortMethod(right)];
}

// MergeSort

function mergeSortMethod(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSortMethod(left), mergeSortMethod(right));
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
    bubblesort : bubblesortMethod,
    quicksort : quicksortMethod,
    mergesort : mergeSortMethod
}

export default function getSortedArray(array, typeSort) {
    if (sorting[typeSort]) {
        console.log(sorting[typeSort](array));
    }
    else {
        console.log('Invalid sort type');
    }
}

// Usage


