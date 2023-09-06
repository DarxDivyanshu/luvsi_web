import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName:Yup.string().min(2).max(24).required('plz enter your name'),
    lastName:Yup.string().min(2).max(24).required('plz enter your lastName'),
    email:Yup.string().email().required('plz enter your email'),
    password:Yup.string().min(5).required('plz enter your password'),
    // confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),
    mobile:Yup.string().min(10).max(10).required('plz enter your mpbile')
});
export const signInSchema = Yup.object({
    email:Yup.string().email().required('plz enter your email'),
    password:Yup.string().min(5).required('plz enter your password'),
});
export const profileForm = Yup.object({
    fullname:Yup.string().min(2).max(24).required('plz enter your FullName'),
    email:Yup.string().email().required('plz enter your email'),
    dob:Yup.string().required('plz enter dob'),
    gender:Yup.string().required('plz select gender'),
    showGender:Yup.string().required('plz select show gender'),
});
export const mobileValidation = Yup.object({
    countryCode:Yup.string().required('plz select country code'),
    phoneNumber:Yup.string().min(10).max(10).matches(/^\d{10}$/, "Mobile must be a 10-digit number").required('plz enter your Phone No.'),
    
});