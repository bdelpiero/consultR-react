import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import superheroApi from "../api/superhero"

// TODO: type superHeroes correctly
export type SuperHeroesState = {
  data: any[]
  loading: boolean
  error: boolean
}

const initialState: SuperHeroesState = {
  data: [],
  loading: false,
  error: false,
}

export const fetchAllSuperheroes = createAsyncThunk(
  "superHeroes/fetchSuperHeroes",
  async () => await superheroApi.fetchAll()
)

export const superHeroes = createSlice({
  name: "superHeroes",
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
