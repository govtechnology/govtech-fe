import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/cnc/ui/avatar";
import { Badge } from "@/components/cnc/ui/badge";
import { cn } from "@/utils/cnc";
import { formatDate } from "@/utils/dateFormatter";
import PropTypes from "prop-types";

RecentRequestCertificateItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  skType: PropTypes.string,
  requestDate: PropTypes.string,
};

function RecentRequestCertificateItem({ name, email, skType, requestDate }) {
  return (
    <div className="flex flex-row">
      <Avatar className="mr-3">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-grow">
        <h6 className="font-semibold">{name}</h6>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{formatDate(requestDate)}</p>
      </div>
      <Badge variant="secondary" className={cn(`px-[18px]`)}>
        {skType}
      </Badge>
    </div>
  );
}

export default RecentRequestCertificateItem;
