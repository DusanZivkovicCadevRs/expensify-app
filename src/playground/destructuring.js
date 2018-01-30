// const person = {
//     name: 'Dule',
//     age: '30',
//     location: {
//         city: 'Cacak',
//         temp: '1'
//     }
// };

// const { name: firstName = 'Anonymous', age = 'NaN' } = person;
// console.log(`${firstName} is ${age} old.`);

// const { temp: temperature, city} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {publisher: publisherName = 'Self-Published'} = book;
// console.log(publisherName); // Penguin or Self-Published

// //
// // Array destrucutring
// //

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state = 'New York', zip] = address; // this is about position
// const [, city, state, zip] = address; // no need for all of them to destructure
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.74'];
const [coffeeType = 'Coffee', priceSmall, priceMedium, priceLarge] = item;
// use first and third 
// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${coffeeType} costs ${priceMedium}`);