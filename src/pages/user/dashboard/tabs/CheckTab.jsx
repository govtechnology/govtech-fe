import {
  useGetUserCertificateQuery,
  useGetUserLinkCertificateMutation,
} from "@/redux/api/certificateApi";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import StatusCertificateItem from "../components/StatusCertificateItem";
import { Button } from "@/components/cnc/ui/button";

function CheckTab() {
  const { data: certificateData, isSuccess: certificateSuccess } =
    useGetUserCertificateQuery();

  const [getCertificateLink] = useGetUserLinkCertificateMutation();

  const handleGenerate = async () => {
    const link = await getCertificateLink({
      remotePath:
        "documents/225fa34c-08e0-4011-b4ec-a5ff52bf1d57/Jody Yuantoro_SKTM_054651-054651.docx",
    }).unwrap();
    console.log(link);
  };

  return (
    <div
      data-aos="fade-down"
      className="flex justify-center flex-col w-full h-full border border-gray-100 rounded-lg p-8"
    >
      <div className="flex flex-col gap-8">
        {certificateSuccess ? (
          certificateData.certificate.map((certificate, index) => (
            <>
              <StatusCertificateItem
                key={index}
                skType={certificate.skType}
                requestDate={certificate.requestDate}
                status={certificate.skStatus}
              />
              <Button
                onClick={() => {
                  handleGenerate();
                }}
              >
                Download
              </Button>
            </>
          ))
        ) : (
          <Skeleton className="h-12 w-[224px] rounded-lg" />
        )}
      </div>
    </div>
  );
}

export default CheckTab;
