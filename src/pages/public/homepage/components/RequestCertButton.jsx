import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/cnc/ui/alert-dialog";
import { Button } from "@/components/cnc/ui/button";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function RequestCertButton() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleConfirmation = () => {
    navigate("/auth/signin");
  };

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="large"
          data-aos="fade-up"
          className="py-4 px-12 mt-10 text-lg"
          onClick={
            cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN")
              ? handleLogin
              : null
          }
        >
          Urus sekarang
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {!cookies.get("ACCESS-TOKEN") && !cookies.get("REFRESH-TOKEN") ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle>Login diperlukan</AlertDialogTitle>
              <AlertDialogDescription>
                Anda perlu melakukan autentikasi login di website kami. Apakah
                bersedia untuk melakukan login?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Batal</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmation}>
                Konfirmasi
              </AlertDialogAction>
            </AlertDialogFooter>
          </>
        ) : null}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RequestCertButton;
