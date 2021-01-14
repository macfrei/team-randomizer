import { useState } from 'react'
import styled from 'styled-components/macro'
import AppForm from './AppForm'
import saveToLocal from './services/saveToLocal'
import loadFromLocal from './services/loadFromLocal'
import Teams from './Teams'

function App() {
  const [data, setData] = useState(loadFromLocal('groups') || '')

  return (
    <>
      <Headline>
        Team <span>{data.seed}</span>
      </Headline>
      <Teams data={data} />
      <AppForm onSubmit={submitForm} />
    </>
  )

  function submitForm(formData) {
    saveToLocal('groups', formData)
    setData(formData)
  }
}

const Headline = styled.h1`
  font-weight: normal;

  span {
    color: #ff5a36;
  }
`

export default App
