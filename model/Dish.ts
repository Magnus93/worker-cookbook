import { isly } from "isly";
import { Item } from "./Item";

export interface Dish {
	key: string
	name: string
	media?: { base64?: string }
	ingredients: Item[]
}

export namespace Dish {
	export const type = isly.object<Dish>({
		key: isly.string(),
		name: isly.string(),
		media: isly.object({ base64: isly.string().optional() }).optional(),
		ingredients: Item.type.array()
	})
}
