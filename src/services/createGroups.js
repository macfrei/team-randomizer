import shuffle from './shuffel'
import randomSeed from 'random-seed'
import _ from 'lodash'

const rand = randomSeed.create()

export default function createGroup(data) {
  let { names, size = 4, seed = 'Web Development' } = data

  if (names === '') return // early out

  names = names?.split(',').map((item) => item.trim())
  shuffle(names, rand, seed)
  let groups = _.chunk(names, Number(size))
  const lastGroup = groups[groups.length - 1]

  if (lastGroup.length === 1 && groups.length > 1) {
    groups = [
      ...groups.slice(0, groups.length - 2),
      groups[groups.length - 2].slice().concat(lastGroup),
    ]
  } else if (lastGroup.length === 2 && size === 4) {
    groups = [
      ...groups.slice(0, groups.length - 2),
      groups[groups.length - 2].slice().concat(lastGroup[0]),
      groups[groups.length - 3].slice().concat(lastGroup[1]),
    ]
  }

  return groups
}
