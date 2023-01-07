import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { SuperHeroesState, superHeroes } from "./superHeroes"

export const store = configureStore({
  reducer: {
    superHeroes: superHeroes.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = {
  superHeroes: SuperHeroesState
}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
