function askFirstNumber(){
    return Number(prompt("Enter first number: "));
}

function askSecondNumber(){
    return Number(prompt("Enter second number: "));
}

function calcSumOfNumbers(){
    var totalSum = 0;
    var i=askFirstNumber();
    var rightNumber = askSecondNumber(); 
    for( ; i <= rightNumber; i++){
        totalSum = totalSum + i;
    }
    return totalSum;
}

alert(calcSumOfNumbers());