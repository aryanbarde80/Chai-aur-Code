const marvel_heros = [ "thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
//concept -=> concat returns new array

//spread operator
//-=> Ex: Drop a glass bowl

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// infinity is depth here, we can give exact value also but this is also very fine

console.log(Array.isArray("Aryan"));
console.log(Array.from("Hitesh")) //convert it into a character array

console.log(Array.from({name:'"Tommy'}));
//interesting case for array, returns empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))






