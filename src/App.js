import { useState } from 'react'
import AppForm from './components/AppForm'
import loadFromLocal from './services/loadFromLocal'
import Teams from './components/Teams'
import AppHeader from './components/AppHeader'

function App() {
  const [data, setData] = useState(
    loadFromLocal('groups') || {
      size: 4,
      project: '',
      names: '',
      prefix: 'HH-WEB-21-1-BR-',
    }
  )

  return (
    <>
      <AppHeader data={data} />
      <Teams data={data} />
      <AppForm setData={setData} data={data} />
    </>
  )
}

export default App
