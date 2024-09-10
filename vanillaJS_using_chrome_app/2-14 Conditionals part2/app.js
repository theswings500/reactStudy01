const age = parseInt(prompt('how old are you?'));

// false일 경우, age가 비어있지 않다는 뜻. (숫자)
// true일 경우, age가 비어있다는 뜻. (숫자 아님)
// console.log(isNaN(age));

if (isNaN(age)) {
    console.log('please write a number.');
}
else {
    console.log('Thank you for writing your age.');
}
