import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { SuperheroesState, superheroes } from "./superheroes"

export const store = configureStore({
  reducer: {
    superheroes: superheroes.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = {
  superheroes: SuperheroesState
}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
