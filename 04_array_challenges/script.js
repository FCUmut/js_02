// Question - 1
const arr = [1, 2, 3, 4, 5];

// Q1 - Solution - 1
arr.push(6);
arr.reverse();
arr.push(0);

// Q1 - Solution - 2
// arr.reverse();
// arr.push(0);
// arr.unshift(6);

console.log(arr);

// Question - 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Q2 - Solution - 1
// arr1.pop();
// const arr3 = arr1.concat(arr2);

// Q2 - Solution - 2
// const arr3 = arr1.slice(0, 4).concat(arr2);

// Q2 - Solution - 3
// const arr3 = arr1.concat(arr2.splice(1));

// Q2 - Solution - 4
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);
