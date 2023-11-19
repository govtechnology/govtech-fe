import { useGetUserCertificateQuery } from "@/redux/api/certificateApi";
import { DataTable } from "../components/table/DataTable";
import { columns } from "../components/table/columns";
import { Skeleton } from "@/components/cnc/ui/skeleton";

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
