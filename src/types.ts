export interface Superhero {
  id: number
  name: string
  slug: string
  powerstats: Powerstats
  appearance: Appearance
  biography: Biography
  work: Work
  connections: Connections
  images: ImageSizes
}

export interface Powerstats {
  intelligence: number
  strength: number
  speed: number
  durability: number
  power: number
  combat: number
}

export interface Appearance {
  gender: string
  race: string
  height?: string[]
  weight?: string[]
  eyeColor: string
  hairColor: string
}

export interface Biography {
  fullName: string
  alterEgos: string
  aliases?: string[]
  placeOfBirth: string
  firstAppearance: string
  publisher: string
  alignment: string
}

export interface Work {
  occupation: string
  base: string
}

export interface Connections {
  groupAffiliation: string
  relatives: string
}

enum ImageSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export type ImageSizes = {
  [key in ImageSize]: string
}
