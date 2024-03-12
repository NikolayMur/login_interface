import Box from "@mui/material/Box";
import CustomPasswordField from "../../components/CustomPasswordField";
import Link from "@mui/material/Link";
import { Control } from "react-hook-form";
import { LoginFormInputs } from "./Login";
import { useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PasswordBlock = ({ control }: { control: Control<LoginFormInputs> }) => {
  const email = useWatch({
    control,
    name: "email",
  });
  const navigate = useNavigate();
  if (!email) {
    return null;
  }
  function onForgotClick() {
    navigate("/forgot");
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
        <Link
          sx={{ cursor: "pointer" }}
          underline="hover"
          variant="button"
          onClick={onForgotClick}
          textTransform="none"
          fontSize={15}
          lineHeight={1}
        >
          Forgot your password?
        </Link>
      </Box>
    </>
  );
};

export default PasswordBlock;
