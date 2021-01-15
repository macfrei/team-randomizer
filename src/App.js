import { useState } from 'react'
import styled from 'styled-components/macro'
import AppForm from './AppForm'
import loadFromLocal from './services/loadFromLocal'
import Teams from './Teams'

function App() {
  const [data, setData] = useState(
    loadFromLocal('groups') || {
      size: 4,
      seed: 'Web Development',
      names: '',
      prefix: 'HH-WEB-21-1-BR-',
    }
  )

  return (
    <>
      <Headline>
        Team <span>{data.seed}</span>
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
