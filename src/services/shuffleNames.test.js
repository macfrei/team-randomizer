import shuffleNames from './shuffleNames'
import randomSeed from 'random-seed'

const rand = randomSeed.create()

describe('shuffleNames', () => {
  it('should save names to a seed according to given project name', () => {
    let names = ['Lene', 'Jerry', 'Jan', 'Miriam', 'Thomas', 'Namir']
    shuffleNames(names, rand, 'project')

    let referenceNames = ['Lene', 'Jerry', 'Jan', 'Miriam', 'Thomas', 'Namir']
    shuffleNames(referenceNames, rand, 'project')

    expect(names).toEqual(referenceNames)

    shuffleNames(referenceNames, rand, '')

    expect(names).not.toEqual(referenceNames)
  })
})
