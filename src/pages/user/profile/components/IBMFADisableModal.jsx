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
            Apakah anda yakin untuk mematikan layanan IBM Security Verify
          </DialogDescription>

          <Button
            type="submit"
            className="align-end w-full mt-8"
            onClick={handleDisable}
            disabled={buttonLoading}
          >
            {buttonLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Matikan
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default IBMFADisableModal;
