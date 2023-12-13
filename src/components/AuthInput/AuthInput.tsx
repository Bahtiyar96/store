import { TextField } from "@mui/material";

interface IauthInput<T> {
  formik: {values: T;
    errors: {
      [key: string]: string | null;
    };
    touched: {
      [key: string]: boolean;
    };
    isSubmitting: boolean;
    handleSubmit: (values: T) => void;
    register: (field: FieldHook<T>) => void;
    unregister: (field: FieldHook<T>) => void;};
  name: string
}

interface FieldHook<T> {
  name: string;
  value: T;
  errors: {
    [key: string]: string | null;
  };
  touched: boolean;
  onChange: (value: T) => void;
  onBlur: () => void;
  onFocus: () => void;
  reset: () => void;
}

export const AuthInput = ({formik,name}: IauthInput) => {

  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );
};
