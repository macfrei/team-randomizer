import shuffel from './shuffel'
import randomSeed from 'random-seed'

const rand = randomSeed.create()

describe('shuffel', () => {
  it('should save names to a seed according to given project name', () => {
    let names = ['Lene', 'Jerry', 'Jan', 'Miriam', 'Thomas', 'Namir']
    shuffel(names, rand, 'project')

    let referenceNames = ['Lene', 'Jerry', 'Jan', 'Miriam', 'Thomas', 'Namir']
    shuffel(referenceNames, rand, 'project')

    expect(names).toEqual(referenceNames)

    shuffel(referenceNames, rand, '')

    expect(names).not.toEqual(referenceNames)
  })
})
