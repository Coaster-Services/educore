import type { Cookies } from '@sveltejs/kit';
import crypto from 'crypto';
import { prisma } from './prismaConnection';

const thirtyDays = 30 * 24 * 60 * 60 * 1000;

export const createSession = async (userId: string, cookies: Cookies) => {
	const sessionToken = crypto.randomBytes(32).toString('hex');

	await prisma.session.create({
		data: {
			token: sessionToken,
			userId: userId
		}
	});

	cookies.set('session', sessionToken, {
		sameSite: 'strict',
		expires: new Date(Date.now() + thirtyDays),
		path: '/'
	});
};
