const calculator = {
    add: function(firstNum, secondNum) {
        console.log(firstNum + secondNum);
    },
    minus: function(firstNum, secondNum) {
        console.log(firstNum - secondNum);
    },
    multiple: function(firstNum, secondNum) {
        console.log(firstNum * secondNum);
    },
    devide: function(firstNum, secondNum) {
        console.log(firstNum / secondNum);
    },
    powerof: function(firstNum, secondNum) {
        console.log(firstNum ** secondNum);
    }
};

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.multiple(2, 2);
calculator.devide(2, 2);
calculator.powerof(4, 2);