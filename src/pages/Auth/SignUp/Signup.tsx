import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { AuthInput } from "../../../components/AuthInput/AuthInput";
import axios from "axios";

export const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      password: ''
    },
    onSubmit(data){
      axios.post('http://localhost:4500/api/registration', {...data, role: 'admin'}).then((res) => {
        console.log(res);
      })
    }
  });
  return (
    <Box>
      <Box>
        <form onSubmit={formik.handleSubmit} >
          <AuthInput formik={formik} name='email' />
          <AuthInput formik={formik} name='name' />
          <AuthInput formik={formik} name='password' />
          <AuthInput formik={formik} name='phone' />
          <Button type="submit" >send</Button>
        </form>
      </Box>
      <Box></Box>
    </Box>
  );
};
