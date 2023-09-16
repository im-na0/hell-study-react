import { useState } from 'react'

export default function EditProfile() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [firstName, setFirstName] = useState('jane')
  const [lastName, setLastName] = useState('jacob')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setIsEditMode(!isEditMode)
      }}
    >
      <label>
        First name:
        {isEditMode ? (
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b> {firstName}</b>
        )}
      </label>
      <label>
        Last name:
        {isEditMode ? (
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b> {lastName}</b>
        )}
      </label>
      <button type="submit">{isEditMode ? 'Save Profile' : 'Edit Profile'}</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  )
}
