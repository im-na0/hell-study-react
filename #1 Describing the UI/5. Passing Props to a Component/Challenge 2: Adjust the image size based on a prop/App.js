import { getImageUrl } from './utils.js'

function Avatar({ person, size }) {
  let renderSize = 'b'
  if (size < 90) {
    renderSize = 's'
  }
  return <img className="avatar" src={getImageUrl(person, renderSize)} alt={person.name} width={size} height={size} />
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
      }}
    />
  )
}
