import { prisma } from '$lib/server/prismaConnection.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const sessionToken = await cookies.get('session');

	if (!sessionToken) {
		throw redirect(303, '/console/login');
	}

	const sessionCheck = await prisma.session.findUnique({
		where: {
			token: sessionToken
		},
		include: {
			user: true
		}
	});

	if (!sessionCheck || !sessionCheck.user) {
		throw redirect(303, '/console/login');
	}

	return {
		user: sessionCheck.user
	};
};
