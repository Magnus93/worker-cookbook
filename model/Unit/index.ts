import { isly } from "isly";
import { Volume } from "./Volume";
import { Weight } from "./Weight";

export type Unit = Volume | Weight

export namespace Unit {
	export const values = [...Volume.values, ...Weight.values] as const
	export const type = isly.union<Unit>(Volume.type, Weight.type)
	export const is = type.is
}
