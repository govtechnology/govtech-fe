import { Button } from "@/components/cnc/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/cnc/ui/dialog";
import { useOtpGenerateQuery, useOtpVerifyMutation } from "@/redux/api/authApi";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import RHFProvider from "@/components/hook-form/RHFProvider";
import RHFTextField from "@/components/hook-form/RHFTextField";
import { Icons } from "@/components/Icons";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useDispatch } from "react-redux";
import { baseApi } from "@/redux/axiosBaseQuery";
import { useNavigate } from "react-router-dom";

const IBMFASchema = Yup.object().shape({
  token: Yup.string().required("Token is required"),
});

const defaultValues = {
  token: "",
};

function IBMFAModal() {
  const { enqueueSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [qrcodeUrl, setQrCodeUrl] = useState(null);
  const navigate = useNavigate();

  const { data: userData } = useGetUserQuery();
  const { data: otpGenerate, isSuccess: otpGenerateSuccess } =
    useOtpGenerateQuery();
  const [otpVerify] = useOtpVerifyMutation();

  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(IBMFASchema),
    defaultValues,
  });

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (!userData.ibmfa.enabled && !userData.ibmfa.verified) {
      if (otpGenerate && otpGenerate.otpauth_url) {
        QRCode.toDataURL(otpGenerate.otpauth_url)
          .then((url) => {
            setQrCodeUrl(url);
          })
          .catch((error) => {
            console.error("QR Code generation error:", error);
          });
      }
    }
  }, [otpGenerate]);

  const onSubmit = async (data) => {
    setButtonLoading(true);
    otpVerify({ token: data.token })
      .unwrap()
      .then((res) => {
        if (res.otp_verified) {
          enqueueSnackbar("Autentikasi 2 Faktor berhasil diaktifkan", {
            variant: "success",
            autoHideDuration: 1800,
          });
          dispatch(baseApi.util.invalidateTags(["userTag"]));
          navigate(0);
        }
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Aktifkan IBM Security Verify</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keamanan Autentikasi dua faktor</DialogTitle>
          <DialogDescription>
            Scan QR Code di bawah ini menggunakan aplikasi IBM Security Verify
          </DialogDescription>
          {otpGenerateSuccess && (
            <>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="block w-64 h-64 object-contain"
                  src={qrcodeUrl || "placeholder_for_initial_state.png"}
                  alt="qrcode url"
                />
                <p className="text-sm">{otpGenerate.base32}</p>
              </div>
              <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="gap-6 mt-6">
                  <div>
                    <RHFTextField
                      name="token"
                      helperText="Masukkan token IBM Security Verify"
                      label="Token"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="align-end w-full mt-8"
                  disabled={buttonLoading}
                >
                  {buttonLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Aktifkan IBM Security Verify
                </Button>
              </RHFProvider>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default IBMFAModal;
