/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NavigationMenu = ({ isOpen }) => {
  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <ul className="flex flex-col p-4 font-medium">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded" href="/">
            Beranda
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-900 rounded"
            href="/donate"
          >
            Cek Status
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-900 rounded"
            href="/about"
          >
            Pertanyaan Umum
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
