/* eslint-disable react/prop-types */
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";

function Navigation({ active }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-[24px]">
        <Link to="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary leading-none">
              ngubalan
              <br />
              daring
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            className=" text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 hover:bg-primary hover:text-white md:mr-0"
          >
            Masuk
          </button>

          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center h-10 w-10 text-primary rounded-[99px] border-primary border-[1px] md:hidden"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-[99px] bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/" ? "text-primary" : "text-gray-900"
                  } rounded md:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Beranda
                </div>
              </Link>
            </li>
            <li>
              <Link to="/status">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/donate" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Cek Status
                </div>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/about" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Pertanyaan Umum
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <NavigationMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}

export default Navigation;
