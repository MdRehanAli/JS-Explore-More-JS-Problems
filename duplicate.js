const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul']


// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         console.log(name);

//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }

//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);




// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         console.log(name);

//         if(unique.includes(name) === false){
//             unique.push(name);
//         }

//     }
//     return unique;

// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

function duplicateRemove(names) {
    let newNames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name);

        if (newNames.includes(name) === false) {
            newNames.push(name);
        }
    }
    return newNames;

}

const name = duplicateRemove(names);
console.log(name);