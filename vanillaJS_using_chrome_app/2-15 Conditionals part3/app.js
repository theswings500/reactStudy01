const age = parseInt(prompt('how old are you?'));

// false일 경우, age가 비어있지 않다는 뜻. (숫자)
// true일 경우, age가 비어있다는 뜻. (숫자 아님)
// console.log(isNaN(age));

if (isNaN(age || age < 0)) {
    console.log('please write a real positive number.');
}
else if (age < 18){
    console.log('You are too young.');
}
// || : OR
// && : AND
else if (age >= 18 && age <= 50) {
    console.log('you can drink.');
}
else if (age > 50 && age <= 80) {
    console.log('you should exercise.');
}
else if (age > 80) {
    console.log('you can do whatever you want.');
}
