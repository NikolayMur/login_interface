import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReactComponent as MainLogo } from "../asets/mainLogo.svg";
import * as yup from "yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../components/CustomTextField";
import { Link } from "react-router-dom";
import useAppContext from "../context/useAppContext";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  email: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function ForgotPassword() {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const methods = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    appContext.setEmail(data.email);
    navigate("/create");
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
              Forgot Password?
            </Typography>
            <CustomTextField
              fullWidth
              sx={{ mt: 4 }}
              name="email"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              fullWidth
              variant="customContained"
              sx={{ mt: 3 }}
            >
              Send
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="customOutlined"
              sx={{ mt: 2.5, fontSize: "16px", lineHeight: "21px" }}
              component={Link}
              to="/login"
            >
              Cancel
            </Button>
          </Box>
        </FormProvider>
      </form>
    </Container>
  );
}
