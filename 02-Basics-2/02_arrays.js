const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const allHeroes = marvel_heroes.concat(dc_heroes);

// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];

console.log(all_new_heroes);