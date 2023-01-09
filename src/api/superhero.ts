import { API_URL } from "src/constants"
import { Superhero } from "src/types"

async function fetchAll(): Promise<Superhero[]> {
  const response = await fetch(`${API_URL}/all.json`)
  return response.json()
}

async function fetchById(id: string): Promise<Superhero> {
  const response = await fetch(`${API_URL}/id/${id}.json`)
  return response.json()
}

export default {
  fetchAll,
  fetchById,
}
