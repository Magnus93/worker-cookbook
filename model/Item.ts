import { isly } from "isly"
import { Unit } from "./Unit"

export interface Item {
	name: string
	quantity?: {
		amount: number
		unit: Unit
	}
}

export namespace Item {
	export const type = isly.object<Item>({
		name: isly.string(),
		quantity: isly.object<{ amount: number, unit: Unit }>({
			amount: isly.number(),
			unit: Unit.type,
		}).optional()	
	})
}
