// 💡Hint: Rendering is a calculation, it shouldn’t try to “do” things.
// ✍️Memo: 컴포넌트 내에서 DOM에 직접 접근해서는 안된다.

export default function Clock({ time }) {
  let hours = time.getHours()
  let timeOfDay
  if (hours >= 0 && hours <= 6) {
    timeOfDay = 'night'
  } else {
    timeOfDay = 'day'
  }
  return (
    <h1 id="time" className={timeOfDay}>
      {time.toLocaleTimeString()}
    </h1>
  )
}
