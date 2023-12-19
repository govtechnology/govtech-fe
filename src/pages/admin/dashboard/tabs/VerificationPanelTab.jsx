import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import { DataTable } from "../components/table/AdminDataTable";
import { Skeleton } from "@/components/cnc/ui/skeleton";
import { columns } from "../components/table/AdminColumns";

export default function VerificationPanelTab() {
  const { data: certificateData, isSuccess } = useGetUserCertificateQuery();

  return (
    <div data-aos="fade-down" className="flex flex-col md:flex-col gap-8">
      {isSuccess ? (
        <DataTable columns={columns} data={certificateData.certificate} />
      ) : (
        <Skeleton className="h-12 w-[224px] rounded-lg" />
      )}
    </div>
  );
}
