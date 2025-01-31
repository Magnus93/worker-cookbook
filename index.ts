import { Context, Env as CEnv } from "./Context"
import { router } from "./router"

import "./item"
import "./version"

export type Env = CEnv

export default {
	async fetch(request: Request, environment: Context.Environment) {
		return await router.handle(request, new Context(environment))
	},
}
