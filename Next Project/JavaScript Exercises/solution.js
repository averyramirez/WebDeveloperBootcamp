//isEven

function isEven(num){
	return num % 2 === 0;
}

//factorial

function factorial(num){
	if (num === 0){
		return 1;
	}
//define a result variable
var result = num;
//calculate factorial and store value in result
for(var i = num-1; i >= 1; i--){
	result *= i;
}
//return the result variable
return result;
}

// factorial(4) 4 x 3 x 2 x 1

function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}








