import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import superheroApi from "src/api/superhero"
import { Superhero } from "src/types"

export type SuperheroesState = {
  data: {
    superheroes: Superhero[]
    selectedHero: Superhero | null
  }
  loading: boolean
  error: boolean
}

const initialState: SuperheroesState = {
  data: { superheroes: [], selectedHero: null },
  loading: false,
  error: false,
}

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async () => await superheroApi.fetchAll()
)

export const fetchSuperhero = createAsyncThunk(
  "superheroes/fetchSuperhero",
  async (id: string) => await superheroApi.fetchById(id)
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
        state.data.superheroes = action.payload
      })
      .addCase(fetchAllSuperheroes.rejected, (state, action) => {
        state.loading = false
        state.error = true
        // TODO: improve error handling
        console.error(action.error)
      })
      .addCase(fetchSuperhero.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchSuperhero.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.data.selectedHero = action.payload
      })
      .addCase(fetchSuperhero.rejected, (state, action) => {
        state.loading = false
        state.error = true
        // TODO: improve error handling
        console.error(action.error)
      })
  },
})
