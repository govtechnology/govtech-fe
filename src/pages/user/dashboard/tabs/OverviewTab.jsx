import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import RecentCertificateItem from "../components/RecentCertificateItem";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import StatusCertificateItem from "../components/StatusCertificateItem";

function OverviewTab() {
  const { data: certificateData, isSuccess } = useGetUserCertificateQuery();

  return (
    <div
      data-aos="fade-down"
      className="flex flex-col-reverse md:flex-row gap-8"
    >
      <div className="flex flex-col overflow-y-auto w-full h-min border border-gray-100 rounded-lg p-8">
        {isSuccess ? (
          <>
            <div className="mb-8">
              <h6 className="font-bold text-lg">
                Permintaan Surat yang berlangsung
              </h6>
              <h6>Surat yang sedang diverifikasi</h6>
            </div>
            <div className="flex flex-col gap-8">
              {isSuccess ? (
                certificateData.certificate
                  .filter((certificate) => certificate.skStatus === "VERIFY")
                  .map((certificate, index) => (
                    <>
                      <StatusCertificateItem
                        key={index}
                        skType={certificate.skType}
                        requestDate={certificate.requestDate}
                      />
                    </>
                  ))
              ) : (
                <Skeleton className="h-12 w-[224px] rounded-lg" />
              )}
            </div>
          </>
        ) : (
          <>
            <img
              className="max-w-[284px]"
              src="/assets/images/dashboard_user_empty.png"
            />
            <h4 className="font-bold text-xl text-center">
              Tidak Ada Permintaan <br />
              Surat Keterangan
            </h4>{" "}
          </>
        )}
      </div>
      <div className="flex justify-center flex-col w-full h-full border border-gray-100 rounded-lg p-8">
        <div>
          <h6 className="font-bold text-lg">Riwayat Permintaan Surat</h6>
          <h6>Riwayat surat yang telah di verifikasi</h6>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {isSuccess ? (
            certificateData.certificate
              .filter((certificate) => certificate.skStatus === "DONE")
              .map((certificate, index) => (
                <>
                  <RecentCertificateItem
                    key={index}
                    skType={certificate.skType}
                    requestDate={certificate.requestDate}
                    approveDate={certificate.approvedDate}
                  />
                </>
              ))
          ) : (
            <Skeleton className="h-12 w-[224px] rounded-lg" />
          )}
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
