import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import { DataTable } from "../table/UserDataTable";
import { columns } from "../table/UserColumns";

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
          <DataTable columns={columns} data={certificateData.certificate} />
        ) : (
          <Skeleton className="h-12 w-[224px] rounded-lg" />
        )}
      </div>
    </div>
  );
}

export default CheckTab;
