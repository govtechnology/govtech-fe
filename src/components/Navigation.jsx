/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useGetUserProfileQuery } from "../redux/api/userApi";
import { NavigationDropdown } from "./NavigationDropdown";

function Navigation({ active }) {
  const { data: userData, isSuccess: userSuccess } = useGetUserProfileQuery();

  const cookies = new Cookies();

  return (
    <nav className="bg-white/80 backdrop-blur-3xl fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 px-[24px]">
        <Link className="flex-grow" to="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary leading-none">
              <img className="w-[159px]" src="/assets/images/main_logo.png" />
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          {cookies.get("ACCESS-TOKEN") &&
          cookies.get("REFRESH-TOKEN") &&
          userSuccess ? (
            <NavigationDropdown
              id="basic-menu"
              name={userData.user.name}
              email={userData.user.email}
            />
          ) : (
            <Link to="/auth/signin">
              <button
                type="button"
                className=" text-primary font-medium rounded-[99px] border-primary border-[1px] text-sm px-[35px] py-2 mx-2 text-center mr-3 hover:bg-primary hover:text-white md:mr-0"
              >
                Masuk
              </button>
            </Link>
          )}
        </div>

        <div
          className="items-center justify-between hidden w-full mr-6 md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 mr-4 font-mediu md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
              <Link to="/about">
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "/donate" ? "text-primary" : "text-gray-900"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                >
                  Tentang Kami
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
                  Bantuan
                </div>
              </Link>
            </li>
            {cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN") ? (
              <li>
                <Link to="/dashboard">
                  <div
                    className={`block py-2 pl-3 pr-4 ${
                      active === "/about" ? "text-primary" : "text-gray-900"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0`}
                  >
                    Dashboard
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
