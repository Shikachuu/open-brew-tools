"use client"

import { RecipePicker } from "@components/RecipePicker"
import { WaterPicker } from "@components/WaterPicker"
import { Card, CardContent } from "@components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { waterRecipes } from "@lib/index"
import { calculateLotusWaterDroplets } from "@lib/waterRatio"
import type { DropletType, LotusWaterDroplets, WaterRecipePpm } from "@lib/waterRatio"
import { useEffect, useState } from "react"

export default function Page() {
  const [waterQuantityMl, setWaterQuantityMl] = useState(250)
  const [recipe, setRecipe] = useState<WaterRecipePpm>(waterRecipes[0].data)
  const [dropletType, setDropletType] = useState<DropletType>("round")

  const [recommendedLotusParams, setRecommendedLotusParams] = useState<LotusWaterDroplets>(
    { calcium: 0, magnesium: 0, potassium: 0, sodium: 0 },
  )

  useEffect(() => {
    setRecommendedLotusParams(calculateLotusWaterDroplets(recipe, dropletType, waterQuantityMl))
  }, [recipe, dropletType, waterQuantityMl])

  return (
    <>
      <div className="flex mx-4">
        <Card className="lg:w-1/4 w-2/4 mr-4 lg:mr-0">
          <CardContent>
            <label htmlFor="dropletStyle" className="flex flex-col">
              <span className="text-center">Droplet type</span>
              <Select value={dropletType} onValueChange={e => setDropletType(e as DropletType)}>
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="round">Round</SelectItem>
                  <SelectItem value="straight">Straight</SelectItem>
                </SelectContent>
              </Select>
            </label>
            <RecipePicker setRecipe={setRecipe} />
          </CardContent>
        </Card>
        <div className="lg:w-1/4" />
        <Card className="w-2/4">
          <CardContent>
            <WaterPicker waterQuantityMl={waterQuantityMl} setWaterQuantityMl={setWaterQuantityMl} />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-1 w-full flex-wrap lg:flex-nowrap">
        <Card className="mx-4 p-6 my-2 min-w-52 w-full text-center font-mono bg-magnesium">
          <CardContent className="p-0 py-6">
            <b>{recommendedLotusParams?.magnesium}</b>
            {" "}
            <span className="capitalize">magnesium</span>
          </CardContent>
        </Card>
        <Card className="mx-4 p-6 my-2 min-w-52 w-full text-center font-mono bg-calcium">
          <CardContent className="p-0 py-6">
            <b>{recommendedLotusParams?.calcium}</b>
            {" "}
            <span className="capitalize">calcium</span>
          </CardContent>
        </Card>
        <Card className="mx-4 p-6 my-2 min-w-52 w-full text-center font-mono bg-potassium">
          <CardContent className="p-0 py-6">
            <b>{recommendedLotusParams?.potassium}</b>
            {" "}
            <span className="capitalize">potassium</span>
          </CardContent>
        </Card>
        <Card className="mx-4 p-6 my-2 min-w-52 w-full text-center font-mono bg-sodium">
          <CardContent className="p-0 py-6">
            <b>{recommendedLotusParams?.sodium}</b>
            {" "}
            <span className="capitalize">sodium</span>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
