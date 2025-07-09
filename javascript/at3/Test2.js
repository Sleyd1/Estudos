//Truthly & Falsely
const x = '';
const y = 0;
const z = null;
const w = undefined;
const v = NaN;

const list = [];
const obj = {};

console.log(!!x); // false
console.log(!!y); // false
console.log(!!z); // false
console.log(!!w); // false
console.log(!!v); // false
//!! (dupla negação) é uma forma de converter um valor em booleano em JavaScript.
//Valores "truthy" são aqueles que são considerados verdadeiros em um contexto booleano, enquanto valores "falsy" são aqueles que são considerados falsos. Os valores falsy incluem: false, 0, "", null, undefined e NaN.
 console.log(!!list); // true
console.log(!!obj); // true
//Objetos e arrays são sempre truthy, mesmo se estiverem vazios.
