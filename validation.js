function add(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'Please enter a number.'
    }
    const sum = num1 + num2;
    return sum;
}

const sum = add(2, '4');
console.log('Sum of the numbers', sum);

function multiply(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12, 45);
console.log(output);

