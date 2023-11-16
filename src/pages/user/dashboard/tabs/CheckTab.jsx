import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import StatusCertificateItem from "../components/StatusCertificateItem";

function CheckTab() {
  const { data: certificateData, isSuccess: certificateSuccess } =
    useGetUserCertificateQuery();

  return (
    <div
      data-aos="fade-down"
      className="flex justify-center flex-col w-full h-full border border-gray-100 rounded-lg p-8"
    >
      <div className="flex flex-col gap-8">
        {certificateSuccess ? (
          certificateData.certificate.map((certificate, index) => (
            <>
              {console.log(certificate)}
              <StatusCertificateItem
                key={index}
                skType={certificate.skType}
                requestDate={certificate.requestDate}
                status={certificate.skStatus}
              />
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
