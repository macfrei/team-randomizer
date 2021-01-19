import styled from 'styled-components'
import createGroup from '../services/createGroups'

export default function Teams({ data }) {
  const groups = createGroup(data)

  return (
    <>
      {groups?.map((group, index) => {
        return (
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
        )
      })}
    </>
  )
}

const TeamHeadline = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.143;
  color: var(--blue-main);
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  border: 1px solid var(--blue-50);
  border-radius: 6px;
  width: 100%;
  font-size: 1em;

  > * + * {
    border-top: var(--border-blue);
  }

  @media (min-width: 500px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    > * + * {
      border-top: none;
    }
  }
`

const ListItem = styled.li`
  min-height: 58px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  position: relative;

  span {
    font-weight: 400;
    color: var(--blue-75);
    font-size: 100%;
    text-align: center;
  }
`
