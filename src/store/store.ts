import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { State, testSlice } from "./super-heroes"

export const store = configureStore({
  reducer: {
    // TODO: rename reducer
    test: testSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = {
  test: State
}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
