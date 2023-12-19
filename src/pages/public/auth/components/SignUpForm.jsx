import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateMutation } from "../../../../redux/api/authApi";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import RHFTextField from "../../../../components/hook-form/RHFTextField";
import RHFProvider from "../../../../components/hook-form/RHFProvider";
import { Button } from "@/components/cnc/ui/button";
import { Icons } from "@/components/Icons";
import { cn } from "@/utils/cnc";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[^\d]+$/, "Nama tidak valid")
    .required("Nama diperlukan"),
  email: Yup.string()
    .email("Alamat email tidak valid")
    .required("Email diperlukan"),
  password: Yup.string()
    .min(8, "Password minimal 8 karakter")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password harus mengandung kurang lebih satu huruf kapital, satu huruf kecil, dan satu angka"
    )
    .required("Password diperlukan"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  const [signupMutation] = useCreateMutation();
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    setButtonLoading(true);
    signupMutation({ data })
      .then((res) => {
        console.log(res);
        if (res.success) {
          enqueueSnackbar(`Tidak dapat mendaftar, ${res.data.message}`, {
            variant: "error",
            autoHideDuration: 1800,
          });
        } else {
          enqueueSnackbar(`Berhasil mendaftar`, {
            variant: "success",
            autoHideDuration: 1800,
          });
          navigate("/auth/signin");
        }
      })

      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <div className={cn("grid gap-6")}>
      <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <RHFTextField
              name="name"
              label="Nama"
              helperText="Masukkan nama lengkap"
            />
          </div>
          <div className="grid gap-1">
            <RHFTextField
              name="email"
              label="Email"
              helperText="Masukkan alamat email"
            />
          </div>
          <div className="grid gap-1">
            <RHFTextField
              name="password"
              label="Password"
              type="password"
              helperText="Masukkan password"
            />
          </div>
          <Button className="mt-6" disabled={buttonLoading}>
            {buttonLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </RHFProvider>
    </div>
  );
};
