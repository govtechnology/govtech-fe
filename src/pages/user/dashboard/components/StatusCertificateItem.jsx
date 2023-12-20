import { formatDate } from "@/utils/dateFormatter";
import PropTypes from "prop-types";

StatusCertificateItem.propTypes = {
  requestDate: PropTypes.string,
  status: PropTypes.string,
  skType: PropTypes.string,
};

function StatusCertificateItem({ skType, requestDate }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-grow">
        <h6 className="font-semibold">{skType}</h6>
        <p className="text-sm">{"Diminta pada " + formatDate(requestDate)}</p>
      </div>
    </div>
  );
}

export default StatusCertificateItem;
