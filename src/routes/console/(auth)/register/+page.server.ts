import { formHandler } from '$lib/server/formHelper.js';
import { prisma } from '$lib/server/prismaConnection.js';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';


export const actions = {
    auth: formHandler(z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        password: z.string(),
        password2: z.string()
    }), async({firstName, lastName, email, password, password2}, {}) => {

        if(password !== password2) {
            throw fail(400, {
                message: "Passwords must match"
            })
        }

        const newEmail = email.toLowerCase();

        const userCheck = await prisma.user.findFirst({
            where: {
                email: newEmail
            }
        })

        if(userCheck) {
            throw fail(400,{
                message: "Email already in use"
            })
        }

    })
}