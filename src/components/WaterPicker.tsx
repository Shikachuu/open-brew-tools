import { Slider } from "./ui/slider"

interface WaterPickerProps {
  waterQuantityMl: number
  setWaterQuantityMl: React.Dispatch<React.SetStateAction<number>>
}

export function WaterPicker({ waterQuantityMl, setWaterQuantityMl }: WaterPickerProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="waterSlider">
          <span className="text-center">Recipe</span>
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
        <p className="px-4 font-bold text-center text-2xl">
          {waterQuantityMl < 1000 ? `${waterQuantityMl} Ml` : `${waterQuantityMl / 1000} L`}
        </p>
      </div>

      <section>
        <span className="text-center">Presets</span>
        <ul className="flex justify-evenly flex-wrap">
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(220)}>
              Set to a basic cupping bowl (220Ml)
            </button>
          </li>
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(450)}>
              Set to Mixing bottle (450Ml)
            </button>
          </li>
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(1000)}>
              Set to 1L
            </button>
          </li>
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(2000)}>
              Set to 2L
            </button>
          </li>
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(5000)}>
              Set to 5L
            </button>
          </li>
          <li>
            <button className="button grow my-2" onClick={() => setWaterQuantityMl(10000)}>
              Set to max (10L)
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}
