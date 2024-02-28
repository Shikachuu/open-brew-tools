import { Slider } from "./ui/slider"

interface WaterPickerProps {
  waterQuantityMl: number
  setWaterQuantityMl: React.Dispatch<React.SetStateAction<number>>
}

export function WaterPicker({ waterQuantityMl, setWaterQuantityMl }: WaterPickerProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="waterSlider">
        <p className="text-center mb-2">Recipe</p>
        <Slider
          value={[waterQuantityMl]}
          onValueChange={e => setWaterQuantityMl(e.shift()!)}
          min={100}
          max={10000}
          step={50}
          className="w-full h-2 range-lg appearance-none cursor-pointer"
          name="waterSlider"
          id="waterSlider"
        />
      </label>
      <p className="px-4 font-bold text-center text-2xl m-10 md:m-0">
        {waterQuantityMl < 1000 ? `${waterQuantityMl} Ml` : `${waterQuantityMl / 1000} L`}
      </p>
    </div>
  )
}
