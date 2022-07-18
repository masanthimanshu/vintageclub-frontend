import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  Container,
  Button,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UpdateContext } from "../../context";
import style from "./style.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const { updateAuth } = UpdateContext();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if ((user == "admin@uxdlab.us") & (pass == "admin@1234")) {
      updateAuth();
      navigate("/category/teddy");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <main>
      <section className={style.inner}>
        <div className={style.left}>
          <Container maxWidth="xs">
            <img src="/images/logo.png" alt="Logo" className={style.logo} />
            <br />
            <br />
            <Typography> SIGN IN</Typography>
            <br />
            <br />
            {showAlert ? (
              <Alert severity="error"> Wrong Username or Password</Alert>
            ) : (
              <></>
            )}
            <br />
            <form onSubmit={handleLogin}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  label="Username"
                  placeholder="Enter Your Username"
                  type="email"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  fullWidth
                />
              </Box>
              <Box mt={2} sx={{ width: "100%" }}>
                <FormControl required fullWidth variant="outlined">
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    label="Password"
                    placeholder="Enter Your Password"
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPass(!showPass)}>
                          {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Box>
            </form>
          </Container>
        </div>
        <div className={style.right}></div>
      </section>
    </main>
  );
};
