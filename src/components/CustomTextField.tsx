import FormHelperText from "@mui/material/FormHelperText";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";

interface IPropsType extends Partial<BaseTextFieldProps> {
  name: string;
  placeholder: string;
}

const CustomTextField = ({ name, ...otherProps }: IPropsType) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // const { name, ...otherProps } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box sx={{ width: "100%" }}>
          <TextField
            {...field}
            {...otherProps}
            error={errors.hasOwnProperty(name)}
            id={name}
            name={name}
          />
          {errors.hasOwnProperty(name) && (
            <FormHelperText error sx={{ position: "absolute" }}>
              {String(errors[name]?.message)}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};

export default CustomTextField;
