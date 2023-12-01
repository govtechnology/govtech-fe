import { Button } from "@/components/cnc/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/cnc/ui/dialog";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { useOtpDisableMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { baseApi } from "@/redux/axiosBaseQuery";
import { useNavigate } from "react-router-dom";
import IBMLogo from "@/pages/public/auth/components/IBMLogo";

function IBMFADisableModal() {
  const { enqueueSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  const [disableIBMFA] = useOtpDisableMutation();
  const dispatch = useDispatch();

  const handleDisable = async () => {
    setButtonLoading(true);
    disableIBMFA()
      .unwrap()
      .then((res) => {
        if (res.status === "success") {
          enqueueSnackbar(`IBM Security Verify berhasil dimatikan`, {
            variant: "success",
            autoHideDuration: 1800,
          });
          dispatch(baseApi.util.invalidateTags(["userTag"]));
          navigate(0);
        } else {
          enqueueSnackbar(`Error, ${res.message}`, {
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
    <Dialog>
      <DialogTrigger>
        <Button>Matikan IBM Security Verify</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keamanan Autentikasi dua faktor</DialogTitle>
          <DialogDescription>
            Apakah anda yakin untuk mematikan layanan IBM Security Verify,
            keamanan akun akan dimungkinkan akan melemah setelah ini
          </DialogDescription>
          <div className="flex flex-col gap-8">
            <Button
              type="submit"
              className="align-end mt-8 w-full"
              onClick={handleDisable}
              disabled={buttonLoading}
            >
              {buttonLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Matikan
            </Button>
            <div className="flex justify-center items-center overflow-hidden gap-3">
              <IBMLogo />
              <a className="" href="https://www.ibm.com/verify">
                <p className=" hover:text-primary text-muted-foreground text-sm">
                  Didukung oleh IBM Security Verify
                </p>
              </a>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default IBMFADisableModal;
