const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// submit는 엔터, 버튼을 누를때마다 발생
// 브라우저는 엔터를 누를 때 새로고침을 하고 submit 하도록 설계되어있음
function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit에 '()' 괄호를 더하면 브라우저가 자동으로 해당 function을 실행시킴
// 06:41