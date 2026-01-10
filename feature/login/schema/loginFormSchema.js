import * as yup from "yup";

export const loginFormSchema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Email is Required"),
    password: yup.string().required("Password is Required"),
});
