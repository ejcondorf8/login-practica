import bycript from 'bcryptjs'
export const encriptedPassword = (password) => {
    const salt = bycript.genSaltSync(10)
    return bycript.hashSync(password, salt)
}