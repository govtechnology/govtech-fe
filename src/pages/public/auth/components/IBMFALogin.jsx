/* eslint-disable react/prop-types */
import { Button } from "@/components/cnc/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/cnc/ui/dialog";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFProvider from "@/components/hook-form/RHFProvider";
import RHFTextField from "@/components/hook-form/RHFTextField";
import { Icons } from "@/components/Icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOtpValidateMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/authSlices";
import Cookies from "universal-cookie";
import { useSnackbar } from "notistack";
import IBMLogo from "./IBMLogo";

const LoginSchema = Yup.object().shape({
  token: Yup.string().required("Token diperlukan"),
});
const defaultValues = {
  token: "",
};

export function IBMFALogin({ open, basicData }) {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [ibmfaMutation] = useOtpValidateMutation();

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const cookies = new Cookies();

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
    ibmfaMutation({
      userId: basicData.res.userId,
      token: data.token,
    })
      .unwrap()
      .then((res) => {
        if (res.otp_valid) {
          dispatch(
            setCredentials({
              ACCESS_TOKEN: basicData.res.access_token,
              REFRESH_TOKEN: basicData.res.refresh_token,
            })
          );
          cookies.set("ACCESS-TOKEN", basicData.res.access_token, {
            path: "/",
          });
          cookies.set("REFRESH-TOKEN", basicData.res.refresh_token, {
            path: "/",
          });
          window.location.href = "/";
        } else {
          enqueueSnackbar(`Token tidak valid`, {
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
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Autentikasi Dua Langkah</DialogTitle>
          <DialogDescription>
            Masukkan Token dari aplikasi IBM Security Verify
          </DialogDescription>
        </DialogHeader>
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid">
            <div className="grid items-center">
              <RHFTextField
                name="token"
                label="Token"
                helperText="Masukkan token"
              />
            </div>
            <Button className="mt-6" disabled={buttonLoading}>
              {buttonLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
            <div className="flex justify-center items-center overflow-hidden gap-3 mt-6">
              <IBMLogo />
              <p className="text-sm">Didukung oleh IBM Security Verify</p>
            </div>
          </div>
        </RHFProvider>
      </DialogContent>
    </Dialog>
  );
}
