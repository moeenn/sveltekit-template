import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ cookies }) => {
  const token = cookies.get("user.token")
  if (token) {
    return {
      links: [
        { id: 2, text: 'About', href: '/about' },
        { id: 3, text: 'Profile', href: '/profile' },
        { id: 0, text: 'Logout', href: '/logout' },
      ]
    }
  }

  return {
    links: [
      { id: 2, text: 'About', href: '/about' },
      { id: 0, text: 'Login', href: '/login' },
    ]
  }
}