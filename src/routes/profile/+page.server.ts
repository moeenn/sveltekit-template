import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("user.token")
  if (!token) {
    throw redirect(307, "/login")
  }

  return {
    user: {
      id: 1,
      email: "admin@site.com"
    }
  }
}