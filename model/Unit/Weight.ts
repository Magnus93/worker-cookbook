import { isly } from "isly"

export type Weight = typeof Weight.values[number]


export namespace Weight {
	export const values = ["mg", "g" , "kg" , "oz" , "lb"] as const
	export const type = isly.string<Weight>(values)
	export const is = type.is
}


