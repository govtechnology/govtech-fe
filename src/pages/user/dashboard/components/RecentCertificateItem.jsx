import { Badge } from "@/components/cnc/ui/badge";
import { cn } from "@/utils/cnc";

function RecentCertificateItem({ requestDate, approveDate, skType }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-grow">
        <h6 className="font-semibold">{requestDate}</h6>
        <p className="text-sm">{"Disetujui pada" + approveDate}</p>
      </div>
      <Badge variant="secondary" className={cn(`px-[18px]`)}>
        {skType}
      </Badge>
    </div>
  );
}

export default RecentCertificateItem;
