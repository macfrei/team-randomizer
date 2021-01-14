export default function shuffle(list, randomizer, seed) {
  for (let i = list.length - 1; i > 0; i--) {
    randomizer.seed(seed + i)
    const j = Math.floor(randomizer.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }
}
