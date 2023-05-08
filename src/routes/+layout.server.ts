import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user) {
		return {
			links: [
				{ id: 2, text: 'About', href: '/about' },
				{ id: 3, text: 'Profile', href: '/profile' },
				{ id: 0, text: 'Logout', href: '/logout' }
			]
		};
	}

	return {
		links: [
			{ id: 2, text: 'About', href: '/about' },
			{ id: 0, text: 'Login', href: '/login' }
		]
	};
};
