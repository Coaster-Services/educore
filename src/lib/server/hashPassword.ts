import crypto from 'crypto';
import { promisify } from 'util';

const pbkdf2 = promisify(crypto.pbkdf2);

export const hashPassword = async (password: string, salt: string) => {
	return (await pbkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');
};
