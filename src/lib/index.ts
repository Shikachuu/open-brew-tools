import type { WaterRecipePpm } from "./waterRatio"

export const waterRecipes: { id: number, name: string, data: WaterRecipePpm }[] = [
  {
    id: 0,
    name: "Light and Bright",
    data: { magnesium: 0, calcium: 60, potassium: 25, sodium: 0 },
  },
  {
    id: 1,
    name: "Espresso Light and Bright",
    data: { magnesium: 20, calcium: 0, potassium: 45, sodium: 0 },
  },
  {
    id: 2,
    name: "Bright and Juicy",
    data: { magnesium: 36, calcium: 36, potassium: 9, sodium: 9 },
  },
  {
    id: 3,
    name: "Rao/Perger",
    data: { magnesium: 60, calcium: 27.2, potassium: 20, sodium: 20 },
  },
]
