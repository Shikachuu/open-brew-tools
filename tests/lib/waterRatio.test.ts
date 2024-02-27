import { describe, expect, it } from "vitest"
import {
  type DropletType,
  type LotusWaterDroplets,
  type WaterRecipePpm,
  calculateLotusWaterDroplets,
} from "@lib/waterRatio"

describe("test calculate missing brew ratio parameter", () => {
  interface TestCase {
    name: string
    input: { waterRecipe: WaterRecipePpm, dropletType: DropletType, waterVolumeMl: number }
    expect: LotusWaterDroplets
  }

  const testCases: TestCase[] = [
    {
      name: "empty",
      input: {
        dropletType: "round",
        waterVolumeMl: 0,
        waterRecipe: { magnesium: 0, calcium: 0, potassium: 0, sodium: 0 },
      },
      expect: { magnesium: 0, calcium: 0, potassium: 0, sodium: 0 },
    },
    {
      name: "light and bright round",
      input: {
        dropletType: "round",
        waterVolumeMl: 250,
        waterRecipe: { magnesium: 0, calcium: 60, potassium: 25, sodium: 0 },
      },
      expect: {
        calcium: 2,
        magnesium: 0,
        potassium: 2,
        sodium: 0,
      },
    },
    {
      name: "light and bright straight",
      input: {
        dropletType: "straight",
        waterVolumeMl: 250,
        waterRecipe: { magnesium: 0, calcium: 60, potassium: 25, sodium: 0 },
      },
      expect: {
        calcium: 3,
        magnesium: 0,
        potassium: 3,
        sodium: 0,
      },
    },

    {
      name: "rao and perger 10L straight",
      input: {
        dropletType: "straight",
        waterVolumeMl: 10000,
        waterRecipe: { magnesium: 60, calcium: 27.2, potassium: 20, sodium: 20 },
      },
      expect: {
        calcium: 60,
        magnesium: 133,
        potassium: 89,
        sodium: 89,
      },
    },
  ]

  for (const tc of testCases) {
    it(tc.name, () => expect(calculateLotusWaterDroplets(
      tc.input.waterRecipe,
      tc.input.dropletType,
      tc.input.waterVolumeMl,
    ))
      .toEqual(tc.expect))
  }
})
