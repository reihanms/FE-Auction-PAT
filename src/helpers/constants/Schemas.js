import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Harap isi email anda"),
  password: Yup.string()
    .min(8, "Password minimal 8 karakter")
    .required("Harap isi password anda."),
});
