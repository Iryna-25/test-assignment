import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().max(15).required()
})