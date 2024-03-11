import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReactComponent as MainLogo } from "../asets/mainLogo.svg";
import * as yup from "yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomPasswordField from "../components/CustomPasswordField";
import useAppContext from "../context/useAppContext";
import { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  password: string;
  passwordConfirm: string;
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required(),
  passwordConfirm: yup
    .string()
    .min(8, "Confirm password must be at least 8 characters")
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default function CreatePassword() {
  const methods = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [warningText, setWarningText] = useState("");
  const { email } = useAppContext();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (warningText) {
      navigate("/login");
    }
    setWarningText(
      `Because of the test data restriction we cannot finalize the flow.\n email: '${email}'\npassword: '${data.password}'\npassword confirm: '${data.passwordConfirm}'`
    );
  };

  return (
    <Container component="main" maxWidth="smc">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Box
            sx={{
              marginTop: 22,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MainLogo />
            <Typography component="h1" variant="subtitle1" sx={{ mt: 9 }}>
              Create new Password?
            </Typography>
            <Box sx={{ width: "100%", mt: 5 }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                Password
              </Typography>
              <CustomPasswordField
                fullWidth
                name="password"
                placeholder="Password"
              />
            </Box>
            <Box sx={{ width: "100%", mt: 3.5 }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                Confirm Password
              </Typography>
              <CustomPasswordField
                fullWidth
                name="passwordConfirm"
                placeholder="Password"
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="customContained"
              sx={{ mt: 4 }}
            >
              Reset Password
            </Button>
          </Box>
        </FormProvider>
      </form>
      <FormHelperText disabled={Boolean(warningText)} error>
        {warningText}
      </FormHelperText>
    </Container>
  );
}
