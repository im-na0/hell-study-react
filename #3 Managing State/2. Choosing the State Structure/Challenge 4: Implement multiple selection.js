import { useState } from 'react'
import { letters } from './data.js'
import Letter from './Letter.js'
export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set())

  const selectedCount = selectedIds.length

  function handleToggle(toggledId) {
    setSelectedIds((prev) => {
      const newValue = new Set(prev)
      if (newValue.has(toggledId)) {
        newValue.delete(toggledId)
      } else {
        newValue.add(toggledId)
      }
      return newValue
    })
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter key={letter.id} letter={letter} isSelected={selectedIds.includes(letter.id)} onToggle={handleToggle} />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  )
}
