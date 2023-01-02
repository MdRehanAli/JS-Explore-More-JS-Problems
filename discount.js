/* 
1. If ticket numbers is less than 100, per ticket price: 100
2. If ticket numbers is more than 100 but less then 200, First 100 tickets will be 100/ticket, rest tickets will be 90 taka per piece.
3. If you purchase more than 200 tickets, first 100 tickets will be 100, 101-200 --> 90 tk. and 200+ --> 70tk
*/

// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;

//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;

//         return price
//     }
//     else if (ticketQuantity > 100 || ticketQuantity <= 200) {
//         const price1 = 100 * first100Rate;
//         const price2 = (ticketQuantity - 100) * second100Rate;
//         const totalPrice = price1 + price2;

//         return totalPrice;
//     }
//     else {
//         const price1 = 100 * first100Rate;
//         const price2 = 100 * second100Rate;
//         const price3 = (ticketQuantity - 200) * second100Rate;
//         const totalPrice = price1 + price2 + price3;

//         return totalPrice;
//     }
// }

// const price = ticketPrice(967);
// console.log('Price:', price);


let sum = 0;
for(let i = 0; i <= 3; i++){
    sum = sum + i;
}