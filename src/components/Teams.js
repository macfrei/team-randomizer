import styled from 'styled-components'
import createGroup from '../services/createGroups'

export default function Teams({ data }) {
  const groups = createGroup(data) ?? []

  return (
    <>
      {groups.map((group, index) => (
        <div key={index}>
          <TeamHeadline>
            {data.prefix}
            {index + 1}:{' '}
          </TeamHeadline>
          <List>
            {group.sort().map((student, index) => (
              <ListItem key={index}>
                <span key={index}>{student}</span>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </>
  )
}

const TeamHeadline = styled.h2`
  color: var(--blue-main);
  font-size: 1em;
  font-weight: 400;
  line-height: 1.143;
  margin-bottom: 10px;
  margin-top: 10px;
`

const List = styled.ul`
  border-radius: 6px;
  border: 1px solid var(--blue-50);
  display: flex;
  flex-direction: column;
  font-size: 1em;
  list-style: none;
  padding: 0;
  width: 100%;

  > * + * {
    border-top: var(--border-blue);
  }

  @media (min-width: 500px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    > * + * {
      border-top: none;
    }
  }
`

const ListItem = styled.li`
  display: grid;
  min-height: 58px;
  padding: 0 5px;
  place-items: center;
  position: relative;

  span {
    color: var(--blue-75);
    font-size: 100%;
    font-weight: 400;
    text-align: center;
  }
`
