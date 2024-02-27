import { describe, expect, it } from "vitest"
import { type BrewRatio, calculateMissingBrewRatioParam } from "@lib/brewRatio"

describe("test calculate missing brew ratio parameter", () => {
  interface TestCase {
    name: string
    input: BrewRatio
    expect: BrewRatio
  }

  const testCases: TestCase[] = [
    {
      name: "calculates ratio",
      input: { input: 10, output: 200 },
      expect: { input: 10, output: 200, ratio: 20 },
    },
    {
      name: "calculates input",
      input: { ratio: 20, output: 200 },
      expect: { input: 10, output: 200, ratio: 20 },
    },
    {
      name: "calculates output",
      input: { input: 10, ratio: 20 },
      expect: { input: 10, output: 200, ratio: 20 },
    },
    {
      name: "does nothing when none is missing",
      input: { input: 10, output: 200, ratio: 20 },
      expect: { input: 10, output: 200, ratio: 20 },
    },
  ]

  for (const tc of testCases)
    it(tc.name, () => expect(calculateMissingBrewRatioParam(tc.input)).toStrictEqual(tc.expect))
})

describe("test calculate missing brew ratio paramter errors", () => {
  interface TestCase {
    name: string
    input: BrewRatio
    errorMessage: string
  }
  const testCases: TestCase[] = [
    {
      name: "thorws error on multiple missing params",
      input: { input: 10 },
      errorMessage: "more than a single parameter is missing",
    },
  ]

  for (const tc of testCases)
    it(tc.name, () => expect(() => calculateMissingBrewRatioParam(tc.input)).throws(tc.errorMessage))
})
