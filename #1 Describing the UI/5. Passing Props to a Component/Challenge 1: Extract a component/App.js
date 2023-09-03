import Profile from './Profile'

const Maria = {
  name: 'Maria Skłodowska-Curie',
  imgId: 'szV5sdG',
  width: 70,
  height: 70,
  profession: 'physicist and chemist',
  awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
  discovered: 'polonium (element)',
}

const Katsuko = {
  name: 'Katsuko Saruhashi',
  imgId: 'YfeOqp2',
  width: 70,
  height: 70,
  profession: 'geochemist',
  awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
  discovered: 'a method for measuring carbon dioxide in seawater',
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={Maria.name}
        imgId={Maria.imgId}
        width={Maria.width}
        height={Maria.height}
        profession={Maria.profession}
        awards={Maria.awards}
        discovered={Maria.discovered}
      />
      <Profile
        name={Katsuko.name}
        imgId={Katsuko.imgId}
        width={Katsuko.width}
        height={Katsuko.height}
        profession={Katsuko.profession}
        awards={Katsuko.awards}
        discovered={Katsuko.discovered}
      />
    </div>
  )
}
