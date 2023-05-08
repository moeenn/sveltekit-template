import { redirect, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, cookies }) => {
	if (!locals.user) throw error(401);

	cookies.delete('user.token');
	throw redirect(307, '/');
};
