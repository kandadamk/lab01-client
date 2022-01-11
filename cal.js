// program to generate a multiplication table

// take input from the user
var number = 5

//creating a multiplication table
for(let i = 0; i <= 12; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}