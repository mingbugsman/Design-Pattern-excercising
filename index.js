import SortContext from './StrategyPattern/Sorting_Strategies_by_Class.js';
import getSortedArray from './StrategyPattern/Sorting_Strategies_by_Func.js';



const array = [11, 40, 79, 73, 55, 76, 30, 90,  9, 81, 86, 97, 43, 68, 14, 63, 11,51, 24, 34]

getSortedArray(array,"quicksort");



const ConTextSort = new SortContext();
ConTextSort.setStrategy('quicksort');
console.log(ConTextSort.sort(array));