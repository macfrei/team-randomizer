import styled from 'styled-components'

export default function AppHeader({ data }) {
  const date = new Date().toDateString()

  return <Headline>{data.project === '' ? date : data.project}</Headline>
}

const Headline = styled.h1`
  font-weight: normal;
  color: var(--orange-main);
`
