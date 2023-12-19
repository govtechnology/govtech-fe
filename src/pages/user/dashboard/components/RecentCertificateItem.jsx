import { Badge } from "@/components/cnc/ui/badge";
import { cn } from "@/utils/cnc";
import { formatDate, formatDateNoTime } from "@/utils/dateFormatter";
import PropTypes from "prop-types";

RecentCertificateItem.propTypes = {
  requestDate: PropTypes.string,
  approveDate: PropTypes.string,
  skType: PropTypes.string,
};

function RecentCertificateItem({ requestDate, approveDate, skType }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-grow">
        <h6 className="font-semibold">{formatDateNoTime(requestDate)}</h6>
        <p className="text-sm">{"Disetujui pada " + formatDate(approveDate)}</p>
      </div>
      <Badge variant="secondary" className={cn(`px-[18px]`)}>
        {skType}
      </Badge>
    </div>
  );
}

export default RecentCertificateItem;
