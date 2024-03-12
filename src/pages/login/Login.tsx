import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { ReactComponent as GoogleLogo } from "../../asets/google_logo.svg";
import { ReactComponent as GitLogo } from "../../asets/git_logo.svg";
import { ReactComponent as MainLogo } from "../../asets/mainLogo.svg";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../../components/CustomTextField";
import PasswordBlock from "./PasswordBlock";
import endpoints from "../../api/endpoints/endpoints";
import useAppContext from "../../context/useAppContext";
import axios, { AxiosError } from "axios";
import { FormHelperText } from "@mui/material";

export type LoginFormInputs = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function Login() {
  const { setAccessToken, setRefreshToken } = useAppContext();
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await endpoints.login(data);

      if (response.data.access_token && response.data.refresh_token) {
        setAccessToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);
      }
    } catch (error) {
      const err = error as Error | AxiosError;
      if (!axios.isAxiosError(err)) {
        methods.setError("root", {
          type: "manual",
          message: err.message,
        });
      } else {
        methods.setError("root", {
          type: "manual",
          message: err.response?.data?.detail,
        });
      }
    }
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
              Log in to your account
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="customOutlined"
                  startIcon={<GoogleLogo />}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="customOutlined"
                  startIcon={<GitLogo />}
                >
                  Github
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  sx={{
                    mt: 2,
                    minWidth: 1,
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#BEC5CC",
                  }}
                >
                  OR
                </Divider>
              </Grid>
            </Grid>

            <CustomTextField
              name="email"
              placeholder="Work email"
              fullWidth
              sx={{ mt: 4 }}
            />

            <PasswordBlock control={methods.control} />

            <Button
              type="submit"
              fullWidth
              variant="customContained"
              sx={{ mt: 4, mb: 2.5 }}
            >
              Log in to Qencode
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography sx={{ mr: 1, fontSize: "15px" }}>
                  Is your company new to Qencode?
                </Typography>
              </Grid>
              <Grid item>
                <Link
                  sx={{ cursor: "pointer" }}
                  underline="hover"
                  variant="button"
                  onClick={() => {}}
                  textTransform="none"
                  fontSize={15}
                  lineHeight={1}
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
          <FormHelperText
            error
            disabled={Boolean(methods.formState.errors.root?.message)}
          >
            {methods.formState.errors.root?.message}
          </FormHelperText>
        </FormProvider>
      </form>
    </Container>
  );
}
