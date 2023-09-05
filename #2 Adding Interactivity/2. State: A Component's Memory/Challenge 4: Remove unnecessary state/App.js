// state 변수가 불필요한 이유?
// state 변수가 필요한 이유는 1. 렌더링간에 데이터를 유지하기 위해서 2. 렌더링을 발생시키기 위해서이다.
// 하지만 이 로직은 리렌더가 일어나지 않고 불필요하기 때문에, state 변수를 사용하지 않는다.
export default function FeedbackForm() {
  function handleClick() {
    const userName = prompt("What is your name?");
    alert(`Hello, ${userName}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
