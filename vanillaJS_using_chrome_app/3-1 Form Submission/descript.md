로그인 창의 유효성 검사
- if-else문으로 로그인창이 비어있거나 너무 긴 경우를 검사

<input
required
maxlenth="15"
/>
- 위 코드처럼 required, maxlenth로 input창 자체에 입력개수에 제한을 걸 수 있음
- 문제점
1. input이 항상 form안에 있어야 작동함(div라고 되어있다면 form으로 고쳐야함. 아니면 작동안됨.)
2. 로그인을 할때마다 누를때마다 항상 페이지가 새로고침됨
(원래 대다수의 사이트들은 로그인을하면 사이트가 새로고침되지만,
어떤 버튼을 눌렀을때마다 새로고침되는 것은 비효율적임.)
