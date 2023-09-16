// TODO: 특별히 업데이트를 막으려는 경우가 아니라면 props를 state에 넣지 마세요.

import { useState } from 'react'

export default function Clock(props) {
  const color = props.color

  return <h1 style={{ color }}>{props.time}</h1>
}
