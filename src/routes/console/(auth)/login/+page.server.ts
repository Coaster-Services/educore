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
			email: z.string(),
			password: z.string()
		}),
		async ({ email, password }, { cookies }) => {
			const userCheck = await prisma.user.findFirst({
				where: {
					email: email
				}
			});

			if (!userCheck) {
				throw fail(400, {
					message: 'Invalid email or password'
				});
			}

			const salt = userCheck.salt;
			const hash = await hashPassword(password, salt);

			if (hash != userCheck.hash) {
				throw fail(400, {
					message: 'Invalid email or password'
				});
			}

			await createSession(userCheck.id, cookies);
			throw redirect(303, '/console/dashboard');
		}
	)
};
