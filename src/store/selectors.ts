import { RootState } from "./store"

export const superheroesSelector = (state: RootState) => state.superheroes

export const superheroesListSelector = (state: RootState) =>
  state.superheroes.data.superheroes

export const selectedHeroSelector = (state: RootState) =>
  state.superheroes.data.selectedHero
