import type { WaterRecipePpm } from "@lib/waterRatio"
import { waterRecipes } from "@lib/index"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface RecipePickerProps {
  setRecipe: React.Dispatch<React.SetStateAction<WaterRecipePpm>>
}

export function RecipePicker({ setRecipe }: RecipePickerProps) {
  const [selectedRecipeId, setSelectedRecipeId] = useState(0)

  useEffect(() => {
    setRecipe(waterRecipes.find(({ id }) => id === selectedRecipeId)!.data)
  }, [selectedRecipeId, setRecipe])

  return (
    <label htmlFor="dropletStyle" className="flex flex-col">
      <span className="text-center">Recipe</span>
      <Select value={selectedRecipeId.toString()} onValueChange={e => setSelectedRecipeId(Number(e))}>
        <SelectTrigger>
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {waterRecipes.map(wr => (
            <SelectItem key={wr.id} value={wr.id.toString()}>
              {wr.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  )
}
