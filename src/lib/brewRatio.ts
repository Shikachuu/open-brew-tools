import { z } from "zod"

export const brewRatioSchema = z.object({
  input: z.union([z.number().positive().min(5), z.nan()]).optional(),
  output: z.union([z.number().positive().min(10), z.nan()]).optional(),
  ratio: z.union([z.number().positive().min(1), z.nan()]).optional(),
})

export type BrewRatio = z.infer<typeof brewRatioSchema>

export function calculateMissingBrewRatioParam({ input, output, ratio = undefined }: BrewRatio): BrewRatio {
  if ([input, output, ratio].filter(p => !p).length > 1) throw new Error("more than a single parameter is missing")

  if ([input, output, ratio].some(p => !p)) {
    switch (true) {
      case !input:
        return { input: output! / ratio!, output, ratio }
      case !output:
        return { input, output: ratio! * input!, ratio }
      case !ratio:
        return { input, output, ratio: output! / input! }
      default:
        return { input, output, ratio }
    }
  }

  return {
    input: Number(output) / Number(ratio),
    output: Number(ratio) * Number(input),
    ratio: Number(output) / Number(input),
  }
}
