import Box from "@mui/material/Box";
import CustomPasswordField from "../../components/CustomPasswordField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Control } from "react-hook-form";
import { LoginFormInputs } from "./Login";
import { useWatch } from "react-hook-form";

const PasswordBlock = ({ control }: { control: Control<LoginFormInputs> }) => {
  const email = useWatch({
    control,
    name: "email",
  });
  if (!email) {
    return null;
  }
  return (
    <>
      <CustomPasswordField
        name="password"
        placeholder="Password"
        fullWidth
        sx={{ mt: 3 }}
      />
      <Box sx={{ mt: 2, width: "100%", textAlign: "right" }}>
        <Link href="/forgot" sx={{ fontSize: "15px" }} underline="hover">
          <Typography noWrap={true} sx={{ fontSize: "15px" }}>
            Forgot your password?
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default PasswordBlock;
