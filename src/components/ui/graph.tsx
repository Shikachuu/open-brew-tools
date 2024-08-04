import React from "react"
import { Card, CardContent } from "@components/ui/card"
import { WaterRecipePpm } from "@lib/waterRatio"
import { ComputedBar, ResponsiveRadialBar } from "@nivo/radial-bar"

type GraphProps = {
  recipe: WaterRecipePpm
}

export const Graph: React.FC<GraphProps> = ({ recipe }) => {
  const data = [
    {
      id: "Alkalinity",
      data: [
        { x: "Potassium", y: recipe.potassium },
        { x: "Sodium", y: recipe.sodium },
      ],
    },
    {
      id: "Hardness",
      data: [
        { x: "Calcium", y: recipe.calcium },
        { x: "Magnesium", y: recipe.magnesium },
      ],
    },
  ]

  const colorPicker = (d: Omit<ComputedBar<{ x: string; y: number }>, "color">) => {
    switch (d.data.x) {
      case "Calcium":
        return "#edc9b9"
      case "Magnesium":
        return "#b84f5d"
      case "Potassium":
        return "#65a8a8"
      case "Sodium":
        return "#fdf0f2"
      default:
        return "#000"
    }
  }

  return (
    <div className="flex flex-1 w-full flex-wrap lg:flex-nowrap">
      <Card className="mx-4 p-6 my-2 w-full text-center font-mono bg-alkalinity">
        <CardContent className="h-[500px]">
          <p className="text-xl font-bold">Total Hardness: {recipe.calcium + recipe.magnesium}ppm</p>
          <p className="text-xl font-bold">Total Alkalinity: {recipe.potassium + recipe.sodium}ppm</p>
          <ResponsiveRadialBar
            data={data}
            margin={{ top: 40, right: 40, bottom: 0, left: 40 }}
            valueFormat=" >-.0d"
            startAngle={-90}
            endAngle={180}
            innerRadius={0}
            padding={0.2}
            colors={colorPicker}
            borderWidth={3}
            borderColor="black"
            enableTracks={false}
            radialAxisStart={{ tickSize: 20, tickPadding: 5, tickRotation: 46 }}
            circularAxisOuter={{ tickSize: 7, tickPadding: 20, tickRotation: 0 }}
            enableLabels={true}
            label={d => `${d.value} ppm`}
            labelsTextColor="black"
            animate={false}
            isInteractive={false}
          />
        </CardContent>
      </Card>
    </div>
  )
}
