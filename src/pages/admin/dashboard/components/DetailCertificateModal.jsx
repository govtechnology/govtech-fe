/* eslint-disable react/prop-types */
import { Button } from "@/components/cnc/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/cnc/ui/dialog";
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
        </DialogHeader>
        {certificateSuccess ? (
          <div className="flex flex-col gap-3">
            <>
              {Object.keys(certificateData.certificate.skData).map((key) => (
                <div className="flex flex-col" key={key}>
                  <Label htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Label>
                  <p>{certificateData.certificate.skData[key]}</p>
                </div>
              ))}
            </>
          </div>
        ) : (
          <Skeleton className="h-12 w-[224px] rounded-lg" />
        )}

        <DialogFooter>
          <Button variant="secondary">Revision</Button>
          <Button variant="secondary">Decline</Button>
          <Button onClick={handleGenerate}>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DetailCertificateModal;
