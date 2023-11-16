import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateMutation } from "../../../redux/api/authApi";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import RHFTextField from "../../../components/hook-form/RHFTextField";
import RHFProvider from "../../../components/hook-form/RHFProvider";
import { Button } from "@/components/cnc/ui/button";
import { Icons } from "@/components/Icons";
import { cn } from "@/utils/cnc";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Nama diperlukan"),
  email: Yup.string().required("Email diperlukan"),
  password: Yup.string().required("Password diperlukan"),
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
      .then(() => {
        navigate("/auth/signin");
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
              label="Name"
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
          <Button disabled={buttonLoading}>
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
