import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"

export interface State {
  value: string
}

const initialState: State = {
  value: "Hello world",
}

// TODO: rename slice
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
})

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
