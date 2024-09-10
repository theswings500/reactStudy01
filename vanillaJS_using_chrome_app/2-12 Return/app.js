const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2; // return이 없으면 아래
    // const KrAge = calculateKrAge(age); 코드가 작동하지 않음
};

const KrAge = calculateKrAge(age);

console.log(KrAge);


const calculator = {
    plus: function(firstNum, secondNum) {
        return firstNum + secondNum;
    },
    minus: function(firstNum, secondNum) {
        return firstNum - secondNum;
    },
    multiple: function(firstNum, secondNum) {
        return firstNum * secondNum;
    },
    devide: function(firstNum, secondNum) {
        return firstNum / secondNum;
    },
    powerof: function(firstNum, secondNum) {
        return firstNum ** secondNum;
    }
};

// 직접 데이터를 콘솔창에서 다룰 수 있음
// 그냥 plusResult 입력하면 됨.
const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const multiple = calculator.minus(10, minusResult);
const divide = calculator.minus(multiple, plusResult);
const powerof = calculator.minus(divide, minusResult);
