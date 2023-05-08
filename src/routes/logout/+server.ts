import { redirect, error } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ cookies }) => {
  const token = cookies.get("user.token")
  if (!token) throw error(401)

  cookies.delete("user.token")
  throw redirect(307, "/")
}