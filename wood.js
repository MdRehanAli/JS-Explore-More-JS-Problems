/* 
fixed: per item wood requirement cft
1. chair --> 3 cft
2. table --> 10 cft 
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log('Total wod requires =', totalWood, 'cft');


// function requireWood(chairQuantity, tableQuantity, bedQuantity) {
//     const chairRequireWood = 3;
//     const tableRequireWood = 10;
//     const bedRequireWood = 50;

//     const chairWood = chairQuantity * chairRequireWood;
//     const tableWood = tableQuantity * tableRequireWood;
//     const bedWood = bedQuantity * bedRequireWood;

//     const totalWoodRequired = chairWood + tableWood + bedWood;

//     return totalWoodRequired;
// }

// const wood = requireWood(1, 1, 1);
// console.log(wood);