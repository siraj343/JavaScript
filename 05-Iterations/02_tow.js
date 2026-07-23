// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const it of arr) {
    // console.log(it);
}

const greeting ="Hello world"
for (const st of greeting) {
    // console.log(`Each char is ${st}`);
    
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United states of america");
map.set('Fr', "France");
map.set('Sp', "Spain");
map.set('Nr', "Norway");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value)
}