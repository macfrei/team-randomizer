import createGroup from './services/createGroups'

export default function Teams({ data }) {
  const groups = createGroup(data)
  console.log(data, groups)
  return (
    <div>
      {groups?.map((group, index) => {
        return (
          <>
            <span>
              {data.prefix}
              {index + 1}:{' '}
            </span>
            <span>{group.sort().join('&')}</span>
          </>
        )
      })}
    </div>
  )
}
