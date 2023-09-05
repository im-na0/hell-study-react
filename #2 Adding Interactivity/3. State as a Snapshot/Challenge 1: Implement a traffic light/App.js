// ❓ Does it make a difference whether you put the alert before or after the setWalk call?
// : 차이가 없습니다. state가 업데이트되는 시점의 스냅샷을 사용하기 때문에 호출 순서가 바뀌어도 state는 변하지 않습니다.

import { useState } from "react";
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
