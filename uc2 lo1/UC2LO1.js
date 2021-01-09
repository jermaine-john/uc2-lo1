
var firstNumber = prompt("Enter First Number");
var operation =prompt("enter Arithmetic operations");
var secondNumber =prompt("Enter Second Number");

if(operation=='+'){

   var ans= document.createTextNode(+firstNumber + + secondNumber);
}
else if(operation=='-'){

    var ans= document.createTextNode(firstNumber - secondNumber);  
}
else if(operation=='*'){

    var ans= document.createTextNode(firstNumber * secondNumber);   
}
else if(operation=='/'){

    var ans= document.createTextNode(firstNumber / secondNumber);   
}
else{
alert("Cannot compute this!!!");
}

answer.appendChild(ans)

