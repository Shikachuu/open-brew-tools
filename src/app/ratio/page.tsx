"use client"

import { Card, CardContent } from "@components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import type { BrewRatio } from "@lib/brewRatio"
import { brewRatioSchema, calculateMissingBrewRatioParam } from "@lib/brewRatio"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

export default function Page() {
  const [brewRatio, setBrewRatio] = useState(calculateMissingBrewRatioParam({ input: 15, output: 255, ratio: 17 }))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BrewRatio>({ resolver: zodResolver(brewRatioSchema) })

  const onSubmit: SubmitHandler<BrewRatio> = formValue => {
    setBrewRatio(calculateMissingBrewRatioParam(formValue))
  }

  return (
    <section className="flex flex-col md:flex-row md:justify-center">
      <Card className="mx-2 mb-4 md:mb-0">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="flex flex-col text-center mt-4">
              Input
              <input
                type="number"
                {...register("input", { valueAsNumber: true })}
                className="p-2 border-4 border-black text-center my-2"
              />
            </label>
            <label className="flex flex-col text-center">
              Yield
              <input
                type="number"
                {...register("output", { valueAsNumber: true })}
                className="p-2 border-4 border-black text-center my-2"
              />
            </label>
            <label className="flex flex-col text-center">
              Ratio
              <input
                type="number"
                {...register("ratio", { valueAsNumber: true })}
                className="p-2 border-4 border-black text-center my-2"
              />
            </label>
            {Object.entries(errors).map(([field, error]) => (
              <>
                <span key={field}>
                  {field}: {error.message}
                </span>
                <br />
              </>
            ))}
            <button className="button w-full my-2" type="submit">
              Calculate
            </button>
          </form>
        </CardContent>
      </Card>
      <Card className="mx-2">
        <CardContent className="h-full flex flex-col justify-around">
          <h1 className="text-center text-2xl">
            <b>{brewRatio.input}</b>
            <sub> g input </sub>
            <b> X </b>
            <b>{brewRatio.ratio}</b>
            <sub> brew ratio </sub>
            <b>={brewRatio.output}</b>
            <sub> g yield </sub>
          </h1>
        </CardContent>
      </Card>
    </section>
  )
}
