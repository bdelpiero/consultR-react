import { API_URL } from "../constants"

async function fetchAll() {
  const response = await fetch(`${API_URL}/all.json`)
  return response.json()
}

export default {
  fetchAll,
}
