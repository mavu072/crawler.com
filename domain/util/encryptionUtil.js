import bcrypt from 'bcrypt'

/**
 * Creates a hashed password with a salt
 * @param {string} password 
 * @returns {string} hashed password
 */
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (err) {
        throw err;
    }
}