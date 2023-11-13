import Cookies from "universal-cookie";

export const getUserAuthHeaderApi = () => {
  const cookies = new Cookies();

  const headers = {
    Authorization: `Bearer ${cookies.get("ACCESS-TOKEN")}`,
  };

  return headers;
};
