import { http } from "cloudly-http"
import { Context } from "../Context"
import { Env } from "../Context"
import { router } from "../router"

async function fetch(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	// DISH.
	// return result
}
router.add("POST", "/dish", fetch)
