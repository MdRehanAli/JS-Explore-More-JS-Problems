const phones = [
    { name: 'Samsung', camera: 30, storage: '32GB', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 35, storage: '64GB', price: 22000, color: 'Gold' },
    { name: 'iphone', camera: 25, storage: '64GB', price: 82000, color: 'Blue' },
    { name: 'Xoami', camera: 48, storage: '64GB', price: 52000, color: 'red' },
    { name: 'Oppo', camera: 30, storage: '64GB', price: 20000, color: 'Black' },
    { name: 'Nokia', camera: 20, storage: '64GB', price: 44000, color: 'Purple' },
    { name: 'HTC', camera: 28, storage: '64GB', price: 62000, color: 'Orange' }
];

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         // console.log(phone);

//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }

//     }
//     return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

function cheapest(phones){
    let cheap = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];

        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
    return cheap;

}
const phone = cheapest(phones);
console.log(phone);