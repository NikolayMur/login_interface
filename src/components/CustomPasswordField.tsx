import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";

interface IPropsType extends Partial<OutlinedInputProps> {
  name: string;
  placeholder: string;
}

const CustomPasswordField = ({ name, ...otherProps }: IPropsType) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box sx={{ width: "100%" }}>
          <OutlinedInput
            {...field}
            {...otherProps}
            error={errors.hasOwnProperty(name)}
            // fullWidth
            id={name}
            type={showPassword ? "text" : "password"}
            // placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
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

export default CustomPasswordField;
