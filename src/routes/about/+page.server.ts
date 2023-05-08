type User = {
	id: number;
	name: string;
	email: string;
};

export async function load() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Failed to fetch users');
	}

	const users = (await res.json()) as User[];
	return { users };
}
