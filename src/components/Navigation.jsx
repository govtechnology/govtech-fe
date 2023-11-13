/* eslint-disable react/prop-types */
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import CustomAvatar from "./CustomAvatar";
import { Menu, MenuItem } from "@mui/material";
import { useGetUserProfileQuery } from "../redux/api/userApi";
import { useSelector } from "react-redux";

function Navigation({ active }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useGetUserProfileQuery();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cookies = new Cookies();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-3xl fixed w-full z-20 top-0 left-0">
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
          {cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN") ? (
            <div className="mr-3">
              <CustomAvatar onClick={handleClick} />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Akun saya
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Keluar
                </MenuItem>
              </Menu>
            </div>
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-mediu md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
