const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('add 2 nums', () => {
    const result = add(3, 4);
    expect(result).toBe(7);


    // if (result !== 7) {
    //     throw new Error('added 4 and 3 exp 7');
    // }
})

test('Generate name test', () => {
    const greeting = generateGreeting('Pero');
    expect(greeting).toBe('Hello Pero');
})