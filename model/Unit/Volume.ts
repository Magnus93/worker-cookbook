import { isly } from "isly"

export type Volume = typeof Volume.values[number]


export namespace Volume {
	export const values = ["ml" , "l" , "tsp" , "tbsp" , "fl oz" , "cup" , "pint" , "quart" , "gallon"] as const
	export const type = isly.string<Volume>(values)
	export const is = type.is
}


