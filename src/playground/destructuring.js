const person = {
    name: 'Dule',
    age: '30',
    location: {
        city: 'Cacak',
        temp: '1'
    }
};

const { name: firstName = 'Anonymous', age = 'NaN' } = person;
console.log(`${firstName} is ${age} old.`);

const { temp: temperature, city} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {publisher: publisherName = 'Self-Published'} = book;
console.log(publisherName); // Penguin or Self-Published