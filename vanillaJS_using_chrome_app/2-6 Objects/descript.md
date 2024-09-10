Object(객체)
- 상황에 따라 데이터를 적합하고 효율적이게 저장하고 다룰 필요가 있음
- 예를 들어, 객체는 게임 내 플레이어의 정보를 효율적으로 다룰 수 있음

const player = {
    name : 'nico',
    points : '10',
    fat : true,
}

console.log(player); // 플레이어의 전체 정보 출력
console.log(player.name); // 플레이어의 이름(특정 정보만 출력)

player.fat = true;
console.log(player); // const는 일반적으로 수정할 수 없지만 const가 object라면 해당 object 안의 특정한 값의 수정이 가능함.

player = false; // 이렇게 저장할 경우 오류가 발생. 왜냐, player 변수를 boolean으로 변경하는 것이기 때문

player.lastName = 'one'; // player 객체에 새로운 값 추가 가능

player.points = player.points + 10 // 유동적인 변수 데이터의 변화 가능 