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
        .email("Email is not right format.")
        .required('Please fill in your email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 character.')
        .required('Please fill in your password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]\\|:;"'<>,.?/])(?=.*[a-zA-Z]).{6,}$/, "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character."),
    confirmPassword: yup
        .string()
        .required("This field is required")
        .oneOf([yup.ref("password")], "Passwords must match")
})