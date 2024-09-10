// prompt 작동 중일때는 javascript가 멈춰있음.
// prompt는 CSS를 적용 불가능하여 이쁜 스타일을 적용하지못하고,
// javascript 멈춤, 팝업이 제한적인 경우 등 다양한 이유로 인해 현재는
// 잘 사용하지 않음.
// const age = prompt('how old are you?');

// console.log(typeof '15', typeof parseInt('15'));
// console.log(typeof age, typeof parseInt(age));

// typeof나 parseInt로 입력된 값이 int인지 string인지 구별 가능

const age = parseInt(prompt('how old are you?'));

console.log(age);

