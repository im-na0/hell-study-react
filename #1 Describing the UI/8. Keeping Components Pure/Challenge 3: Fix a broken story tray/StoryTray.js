// 📌 Alternatively, you could create a new array (by copying the existing one) before you push an item into it

export default function StoryTray({ stories }) {
  const fakeStory = {
    id: 'create',
    label: 'Create Story',
  }
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li key={fakeStory.id}>{fakeStory.label}</li>
    </ul>
  )
}
