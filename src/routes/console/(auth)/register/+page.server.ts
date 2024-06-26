import { formHandler } from '$lib/server/formHelper.js';
import { hashPassword } from '$lib/server/hashPassword.js';
import { prisma } from '$lib/server/prismaConnection.js';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import crypto from 'crypto';
import { createSession } from '$lib/server/createSession.js';

export const actions = {
	auth: formHandler(
		z.object({
			firstName: z.string(),
			lastName: z.string(),
			email: z.string(),
			password: z.string(),
			password2: z.string()
		}),
		async ({ firstName, lastName, email, password, password2 }, { cookies }) => {
			if (password !== password2) {
				throw fail(400, {
					message: 'Passwords must match'
				});
			}

			const newEmail = email.toLowerCase();

			const userCheck = await prisma.user.findFirst({
				where: {
					email: newEmail
				}
			});

			if (userCheck) {
				throw fail(400, {
					message: 'Email already in use'
				});
			}

			const salt = crypto.randomBytes(16).toString();
			const hash = await hashPassword(password, salt);

			const user = await prisma.user.create({
				data: {
					firstName,
					lastName,
					email,
					salt,
					hash
				}
			});

			await createSession(user.id, cookies);
			throw redirect(303, '/console/dashboard');
		}
	)
};
