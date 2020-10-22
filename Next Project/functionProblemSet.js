//isEven

function isEven(num) {
    return num % 2 === 0;
}



//factorial

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


//kebabToSnake

function kebabToSnake(str) {
    let newStr = str.replace(/-/g, "_");
    return newStr;
}

