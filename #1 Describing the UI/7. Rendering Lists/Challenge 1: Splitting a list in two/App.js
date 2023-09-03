import { people } from './data.js'
import { getImageUrl } from './utils.js'
const chemistGroup = people.filter((person) => person.profession === 'chemist')
const elseGroup = people.filter((person) => person.profession !== 'chemist')

export default function List() {
  const chemistList = chemistGroup.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  const elseList = elseGroup.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  return (
    <article>
      <h1>Scientists</h1>
      <h3>Chemists</h3>
      <ul>{chemistList}</ul>
      <h3>Else</h3>
      <ul>{elseList}</ul>
    </article>
  )
}
