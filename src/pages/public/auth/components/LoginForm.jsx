import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../../redux/api/authApi";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Cookies from "universal-cookie";

import { setCredentials } from "../../../../redux/authSlices";

import RHFTextField from "../../../../components/hook-form/RHFTextField";
import RHFProvider from "../../../../components/hook-form/RHFProvider";
import { Button } from "@/components/cnc/ui/button";
import { Icons } from "@/components/Icons";
import { cn } from "@/utils/cnc";
import { useSnackbar } from "notistack";
import { IBMFALogin } from "./IBMFALogin";

const cookies = new Cookies();

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Alamat email tidak valid")
    .required("Alamat email diperlukan"),
  password: Yup.string().required("Password diperlukan"),
});
const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [loginMutation] = useLoginMutation();
  const [ibmfOpen, ibmfaSetOpen] = useState(false);
  const [tempAuth, tempAuthSet] = useState({});

  const [buttonLoading, setButtonLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

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
    loginMutation({ data })
      .unwrap()
      .then((res) => {
        if (res.ibmfa.enabled && res.ibmfa.verified) {
          tempAuthSet({ data, res });
          ibmfaSetOpen(true);
        } else {
          dispatch(
            setCredentials({
              ACCESS_TOKEN: res.access_token,
              REFRESH_TOKEN: res.refresh_token,
            })
          );
          cookies.set("ACCESS-TOKEN", res.access_token, {
            path: "/",
          });
          cookies.set("REFRESH-TOKEN", res.refresh_token, {
            path: "/",
          });
          window.location.href = "/";
        }
      })
      .catch((res) => {
        if (!res.data.success) {
          enqueueSnackbar(`Tidak dapat masuk, ${res.data.message}`, {
            variant: "error",
            autoHideDuration: 1800,
          });
        }
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <>
      <div className={cn("grid gap-6")}>
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
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
              Sign In
            </Button>
          </div>
        </RHFProvider>
      </div>
      <IBMFALogin
        open={ibmfOpen}
        onOpenChange={ibmfaSetOpen}
        basicData={tempAuth}
      />
    </>
  );
};
