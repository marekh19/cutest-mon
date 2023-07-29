const MAX_POKEDEX_ID = 493

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne,
) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_POKEDEX_ID) + 1

  if (pokedexNumber !== notThisOne) return pokedexNumber
  return getRandomPokemon(notThisOne)
}

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon()
  const secondId = getRandomPokemon(firstId)

  return [firstId, secondId]
}
