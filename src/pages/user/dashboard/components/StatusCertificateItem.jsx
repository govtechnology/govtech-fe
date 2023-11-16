import { Badge } from "@/components/cnc/ui/badge";
import { cn } from "@/utils/cnc";
import { formatDate } from "@/utils/dateFormatter";
import PropTypes from "prop-types";

StatusCertificateItem.propTypes = {
  requestDate: PropTypes.string,
  status: PropTypes.string,
  skType: PropTypes.string,
};

function StatusCertificateItem({ skType, requestDate, status }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-grow">
        <h6 className="font-semibold">{skType}</h6>
        <p className="text-sm">{"Diminta pada " + formatDate(requestDate)}</p>
      </div>
      <Badge variant="secondary" className={cn(`px-[18px]`)}>
        {status}
      </Badge>
    </div>
  );
}

export default StatusCertificateItem;
