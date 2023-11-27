/* eslint-disable react/prop-types */
import { Button } from "@/components/cnc/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/cnc/ui/dialog";
import { Input } from "@/components/cnc/ui/input";
import { Label } from "@/components/cnc/ui/label";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import {
  useGenerateUserCertificateMutation,
  useGetUserCertificateByIdQuery,
} from "@/redux/api/certificateApi";
import { useGetUserQuery } from "@/redux/api/userApi";

function DetailCertificateModal({ id }) {
  const { data: certificateData, isSuccess: certificateSuccess } =
    useGetUserCertificateByIdQuery({ id: id });

  const [generateCertificate] = useGenerateUserCertificateMutation();
  const { data: userData } = useGetUserQuery();

  const handleGenerate = async () => {
    generateCertificate({
      userId: userData.uuid,
      skId: id,
      skType: certificateData.certificate.skType,
      skData: certificateData.certificate.skData,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Detail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detail Permintaan</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        {certificateSuccess ? (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right"></Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
        ) : (
          <Skeleton className="h-12 w-[224px] rounded-lg" />
        )}

        <DialogFooter>
          <Button onClick={handleGenerate}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DetailCertificateModal;
