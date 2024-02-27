export interface WaterComponents {
  magnesium: number
  calcium: number
  potassium: number
  sodium: number
}
export type LotusWaterDroplets = WaterComponents
export type WaterRecipePpm = WaterComponents

export type DropletType = "round" | "straight"

export interface WaterHardness {
  alkalinity: number
  hardness: number
}

export function calculateLotusWaterDroplets(
  waterRecipe: WaterRecipePpm,
  dropletType: DropletType,
  waterVolumeMl: number,
): LotusWaterDroplets {
  const dropletModifier = dropletType === "round" ? 0.56 : 1
  return {
    magnesium: Math.round(waterRecipe.magnesium * (waterVolumeMl / 4500) * dropletModifier),
    calcium: Math.round(waterRecipe.calcium * (waterVolumeMl / 4500) * dropletModifier),
    potassium: Math.round(2 * waterRecipe.potassium * (waterVolumeMl / 4500) * dropletModifier),
    sodium: Math.round(2 * waterRecipe.sodium * (waterVolumeMl / 4500) * dropletModifier),
  }
}

// value is in (ppm as CaCO3)
export function calculateGHKH(waterRecipe: WaterRecipePpm): WaterHardness {
  return {
    alkalinity: waterRecipe.potassium + waterRecipe.sodium,
    hardness: waterRecipe.magnesium + waterRecipe.calcium,
  }
}
