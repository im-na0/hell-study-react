// Challenge 1 of 4: Export the component
export default function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
}

// Challenge 2 of 4: Fix the return statement
export default function Profile() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
}

// Challenge 3 of 4: Spot the mistake
function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

// Challenge 4 of 4: Your own component
export default function Test() {
  return (
    <>
      <h1>My goal is...🤔</h1>
      <p>To conquer the world with React!</p>
    </>
  )
}

