// let numbers = ['1768593234', '124464566', '9345664356', '13940958654059869', '122']

// const checkLength = (phone_number) => {
//     if (phone_number.length <= 10) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const filterLongNumbers = (numbers_array) => {
//     let filtered_numbers = numbers_array.filter(checkLength)
//     return filtered_numbers
// }

// console.log(filterLongNumbers(numbers))

// //

// let names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla']

// const dealMessage = (name) => {
//     return `Hi ${name}! 50% off our best sweets for you today!`
// };

// const generateMessages = (names) => {
//     let messages = names.map(dealMessage)
//     return messages;
// }

// console.log(generateMessages(names))

//

let namesAndDiscounts = [
    {name: 'Anna', discount: 50},
    {name: 'Laura', discount: 40},
    {name: 'Josh', discount: 30},
    {name: 'Min', discount: 50},
    {name:'Karla', discount: 60}
];

const dealMessageBespoke = (namesAndDiscounts) => {
    return `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best sweets for you today!`
};

const generateMessagesBespoke = (namesAndDiscounts) => {
    let messages = namesAndDiscounts.map(dealMessageBespoke)
    return messages;
}

console.log(generateMessagesBespoke(namesAndDiscounts))