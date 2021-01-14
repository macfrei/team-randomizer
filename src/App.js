import { useState } from 'react'
import Form from './Form'
import saveToLocal from './services/saveToLocal'
import loadFromLocal from './services/loadFromLocal'
import Teams from './Teams'

function App() {
  const [data, setData] = useState(loadFromLocal('groups') || '')

  return (
    <>
      <h1>Team {data.seed}</h1>
      <Teams data={data} />
      <Form onSubmit={submitForm} />
    </>
  )

  function submitForm(formData) {
    saveToLocal('groups', formData)
    setData(formData)
  }
}

export default App
