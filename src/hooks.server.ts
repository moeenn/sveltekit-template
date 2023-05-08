import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('user.token');
	if (token) {
		// TODO: extract from JWT
		event.locals.user = { id: 10, role: 'ADMIN' };
	}

	return await resolve(event);
};
