const fwends = ['Ed', 'Luke', 'James', 'Max', 'Ryan']

console.log(fwends.length)
console.log(fwends[1])

const moreFwends = fwends.concat('Anna')

console.log(moreFwends)
 //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let counter = 0;

numbers.forEach((number) => {
    counter += number;
});

console.log(counter);

//

const addToBatch = (array, number) => {
    if (array.length <= 5) {
    newarray = array.concat(number);
    console.log(newarray);
    } else { 
    console.log(array)};
};

addToBatch([1], 3)
addToBatch([1, 2, 3], 4)
addToBatch([], 8)
addToBatch([1, 2, 3, 4, 5, 6], 7)
addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)