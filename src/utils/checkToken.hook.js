import { parse } from "cookie";

export const checkToken = async ({ req }) => {
  const rawCookies = req.headers.cookie;

  const cookies = parse(rawCookies || "");

  if (!cookies["ACCESS-TOKEN"] && !cookies["REFRESH-TOKEN"]) {
    return null;
  }

  return "Authorized";
};
