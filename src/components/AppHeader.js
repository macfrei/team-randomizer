import styled from 'styled-components'

export default function AppHeader({ data }) {
  const date = new Date().toDateString()

  return (
    <Headline>
      Teams <span>{data.project === '' ? date : data.project}</span>
    </Headline>
  )
}

const Headline = styled.h1`
  font-weight: normal;

  span {
    color: var(--orange-main);
  }
`
