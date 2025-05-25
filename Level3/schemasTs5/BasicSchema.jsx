import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    email: yup.
    string().
    email("Enter the Valid email address").
    required("This field is required"),

    age: yup.
    number().
    positive().
    integer().
    required("This field is required"),

    password: yup.
    string().
    min(5, 'minimum 5 param  requied').
    required("This field is required"),

    cPassword: yup.
    string().
    oneOf([yup.ref("password"), null], "the password and confirm Password are not Matching").//'oneOf is used to compare the pass and cPass
    required("This field is required"),
})