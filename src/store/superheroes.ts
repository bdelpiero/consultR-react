import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import superheroApi from "../api/superhero"

// TODO: type superheroes correctly
export type SuperheroesState = {
  data: any[]
  loading: boolean
  error: boolean
}

const initialState: SuperheroesState = {
  data: [],
  loading: false,
  error: false,
}

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchSuperheroes",
  async () => await superheroApi.fetchAll()
)

export const superheroes = createSlice({
  name: "superheroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuperheroes.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchAllSuperheroes.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.data = action.payload
      })
      .addCase(fetchAllSuperheroes.rejected, (state, action) => {
        state.loading = false
        state.error = true
        // TODO: improve error handling
        console.error(action.error)
      })
  },
})
