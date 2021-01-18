import { useState } from 'react'
import styled from 'styled-components/macro'
import AppForm from './components/AppForm'
import loadFromLocal from './services/loadFromLocal'
import Teams from './components/Teams'

function App() {
  const [data, setData] = useState(
    loadFromLocal('groups') || {
      size: 4,
      project: '',
      names: '',
      prefix: 'HH-WEB-21-1-BR-',
    }
  )

  const date = new Date().toDateString()

  return (
    <>
      <Headline>
        Teams <span>{data.project === '' ? date : data.project}</span>
      </Headline>
      <Teams data={data} />
      <AppForm setData={setData} data={data} />
    </>
  )
}

const Headline = styled.h1`
  font-weight: normal;

  span {
    color: #ff5a36;
  }
`

export default App
