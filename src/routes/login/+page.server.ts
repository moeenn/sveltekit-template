import { fail, redirect, type Actions } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from "./$types"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("user.token") 

  if (token) {
    throw redirect(307, "/")
  }

  const form = superValidate(loginSchema)
  return { form }
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, loginSchema)

    if (!form.valid) {
      return fail(422, { form })
    }

    if (form.data.email !== "admin@site.com") {
      return fail(401, { form })
    }
    
    cookies.set("user.token", "abc123123123")
    throw redirect(307, "/")
  }
}