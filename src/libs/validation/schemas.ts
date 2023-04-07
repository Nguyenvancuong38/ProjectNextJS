import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    email: yup
        .string()
        .required('Please fill in your email!'),
    password: yup
        .string()
        .required('Please fill in your password')
});

export const signUpSchema = yup.object().shape({
    email: yup
        .string()
        .required('Please fill in your email'),
    password: yup
        .string()
        .min(6)
        .max(11)
        .required('Please fill in your password'),
    confirmPassword: yup
        .string()
        .required("This field is required")
        .oneOf([yup.ref("password")], "Passwords must match")
})