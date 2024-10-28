let score = "Ankit";
score = "33";
console.log(typeof score);

let result = Number(score);
console.log(typeof result);
console.log(result);

/*

"33" => 33
"33abc" => NaN
"abc33" => NaN
"True"=> 1 , False=> 0

*/

let isLogged = 1;
let boolLog = Boolean(isLogged);
console.log(boolLog);