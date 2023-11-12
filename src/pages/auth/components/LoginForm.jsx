import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/api/authApi";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Cookies from "universal-cookie";

import { setCredentials } from "../../../redux/authSlices";
import { LoadingButton } from "@mui/lab";

import RHFTextField from "../../../components/hook-form/RHFTextField";
import RHFProvider from "../../../components/hook-form/RHFProvider";

const cookies = new Cookies();

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [loginMutation] = useLoginMutation();
  const [buttonLoading, setButtonLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    setButtonLoading(true);
    loginMutation({ data })
      .unwrap()
      .then((res) => {
        dispatch(
          setCredentials({
            ACCESS_TOKEN: res.access_token,
            REFRESH_TOKEN: res.refresh_token,
          })
        );
        console.log(res);
        cookies.set("ACCESS-TOKEN", res.access_token, {
          path: "/",
        });
        cookies.set("REFRESH-TOKEN", res.refresh_token, {
          path: "/",
        });
        navigate("/");
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <div className={"grid gap-6"}>
      <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <RHFTextField name="email" label="Email" />
          </div>
          <div className="grid gap-1">
            <RHFTextField name="password" label="Password" />
          </div>
          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={buttonLoading}
            sx={{
              bgcolor: "#000000",
              color: "#FFFFFF",
              "&:hover": {
                bgcolor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Login
          </LoadingButton>
        </div>
      </RHFProvider>
    </div>
  );
};
