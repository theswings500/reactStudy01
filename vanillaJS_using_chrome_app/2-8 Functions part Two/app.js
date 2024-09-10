function sayHello(name) {
    console.log("hello " + name);
};

// function안에 작성한 코드를 간결하게 재사용 가능함
// function의 괄호 안에 변수명을 넣어주면 아래 코드처럼 활용이 가능함
sayHello("nico");
sayHello("dal");
sayHello("lynn");



// argment를 1개가 아니라 여러개도 받을 수 있음
function sayHello2(name, age, sex, phoneNum) {
    console.log("data : ", name, age, sex, phoneNum);
};
sayHello2("nico", 22, "male", "010-0000-0001");
sayHello2("dal", 23, "male", "010-0000-0002");
sayHello2("lynn", 19, "female", "010-0000-0003");


// 사칙연산도 쉽게 다룰 수 있음
function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
};
plus(1, 2);

function devide(firstNum, secondNum) {
    console.log(firstNum / secondNum);
};
devide(3, 4);

// firstNum과 secondNum을 2번씩 선언 가능해서 서로 다른 function에서
// 사용 가능한 이유는 전역 변수(global var)가 아니라 지역 변수(local var)이라서 가능
// 즉, plus, devide에서만 저 변수들(args)을 사용가능하고 외부에서 불러오기가 불가능



const player = {
    name: 'nico',
    // 아래와 같은 function 선언 방법은 object 안에서만 유효
    sayHello3: function(otherPersonName) {
        console.log('hello! ', otherPersonName, " nice to meet you.");
    }
};

console.log(player.name);
player.sayHello3('lynn');