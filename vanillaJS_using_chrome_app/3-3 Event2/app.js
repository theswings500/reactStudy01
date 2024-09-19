const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// submit는 엔터, 버튼을 누를때마다 발생
// 브라우저는 엔터를 누를 때 새로고침을 하고 submit 하도록 설계되어있음

// 이 function은 어떤 event의 기본 행동 발생을 막음(새로고침을 멈추는 역할)
// 기본행동 : 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
// 기본행동 ex : form을 submit하면 브라우저는 기본적으로 페이지를 새로고침함
// onLoginSubmit에서 괄호안에 event를 넣고 안넣고의 차이점을 명확히 이해해야함.
// onLoignSubmit 괄호 안에 event를 넣지않아도 event.preventDefault가 작동하는 것을 확인함.
// onLoginSubmit()에 들어간 값과 다른 값을 preventDefault에 삽입했을때 오류가 난 것을 확인
// 주관적인 결론은 onLoginSubmit()에 event를 넣지않아도 event라는 값을 preventDefault에 삽입하면
// 자동으로 JS에서 event라는 값을 확인하고 잡아주는 것 같음
function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit에 '()' 괄호를 더하면 브라우저가 자동으로 해당 function을 실행시킴
// 06:41