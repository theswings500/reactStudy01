// const loginForm = document.getElementById("login-form");
// loginForm안에 있는 값들 중에서 input과 button을 가져옴
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 더 짧은 코드
// #login-form : login-form이라는 id를 찾음
// #login-form input : 찾은 id 중에서 input을 찾아내서 가져옴
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


// 로그인 버튼을 클릭했을때 콘솔창에 클릭 출력
function onLoginBtnClick() {
    // console.dir("hello", loginInput.value);
    console.log("hello", loginInput.value);
    
}

loginButton.addEventListener("click", onLoginBtnClick);