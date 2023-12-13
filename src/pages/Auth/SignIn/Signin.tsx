import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { AuthInput } from "../../../components/AuthInput/AuthInput";
import { ILogin } from "../../../api/types";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const initValues: ILogin = {
  email: "",
  password: "",
};

export const Signin = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initValues,
    async onSubmit(data) {
      const res = await api.login(data)
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate(`/profile`)
      }
    },
  });
  return (
    <Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <AuthInput formik={formik} name="email" />
          <AuthInput formik={formik} name="password" />
          <Button type="submit">send</Button>
        </form>
      </Box>
      <Box></Box>
    </Box>
  );
};
