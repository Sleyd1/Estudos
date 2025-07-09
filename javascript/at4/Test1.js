//function
function Test1(a, b) {
    return a + b;

}

const sumvalue = Test1(5, 10);
console.log(sumvalue);

// passando parâmetros com valores padrão
function Test2(a = 1, b = 2) {  
    return a + b;
}

const sumvalue2 = Test2();
console.log(sumvalue2);
// Arrow function
const Test3 = (a = 3, b = 4) => a + b;

const sumvalue3 = Test3(5, 10);
console.log(sumvalue3);

// ou

const Test4 = (a = 5, b = 6) => {
    return a + b;
}