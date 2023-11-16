import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavigationMobileItem({ to, icon }) {
  return (
    <Link
      to={to}
      className="inline-flex flex-col items-center justify-center px-5 rounded-full hover:bg-gray-50"
    >
      <button>
        <img className="mb-2" src={icon} />
      </button>
    </Link>
  );
}

NavigationMobileItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
};

export default NavigationMobileItem;
