import styled from 'styled-components/macro'
import createGroup from './services/createGroups'

export default function Teams({ data }) {
  const groups = createGroup(data)

  return (
    <List>
      {groups?.map((group, index) => {
        return (
          <li key={index}>
            <span>
              {data.prefix}
              {index + 1}:{' '}
            </span>
            {group.map((student, index) => (
              <>
                <Name key={index}>{student}</Name>
                {index < group.length - 1 && <And>&</And>}
              </>
            ))}
            {/* <span>{group.sort().join('&')}</span> */}
          </li>
        )
      })}
    </List>
  )
}

const List = styled.ul`
  font-size: 1.2em;
  display: grid;
  gap: 12px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    width: max-content;
  }
`

const Name = styled.span`
  box-shadow: 0px 2px 11px 0px rgba(25, 50, 81, 0.2);
  background: linear-gradient(#193251, #7589a2);
  color: white;
  padding: 8px 28px;
  margin: 0 -20px 0 -20px;

  &:nth-child(2) {
    border-radius: 5px 0 0 5px;
    margin: 0 -20px 0 20px;
    padding-left: 12px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    margin: 0 0 0 -20px;
    padding-right: 12px;
  }
`

const And = styled.span`
  background: linear-gradient(-45deg, #fefefe, #eee);
  color: #193251;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 50%;
  z-index: 1;
`
