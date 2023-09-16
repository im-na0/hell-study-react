import { useState } from 'react'

export default function Picture() {
  const [isActive, setIsActive] = useState(false)

  let bcClassName = 'background'
  let picClassName = 'picture'
  if (isActive) {
    picClassName += ' picture--active'
  } else {
    bcClassName += ' background--active'
  }

  return (
    <div className={bcClassName} onClick={() => setIsActive(false)}>
      <img
        className={picClassName}
        onClick={(e) => {
          e.stopPropagation()
          setIsActive(true)
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  )
}
