import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import wls from "../../assets/wls.svg";

export default function Passaword() {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justify="center" alignItems="center">
      {/* Container-blue */}
      <Grid className="background-blue" />

      {/* Imagem */}
      <Grid xs={12} align="center" className="image">
        <img src={wls} />
      </Grid>

      {/* Card */}
      <Grid xl={4} md={4} sm={6} xs={12} className="block-login">
        <Grid>
          <Box mt={2} color="#1C1C1C">
            <Typography variant="h4">Digite sua senha</Typography>
          </Box>
        </Grid>

        <Grid>
          <Box mt={6}>
            <FormControl fullWidth>
              <InputLabel >Password</InputLabel>
              <Input
                
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <Grid>
            <Box mt={10}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Entrar
              </Button>
            </Box>

            <Box mt={2}>
              <Button
                href="#text-buttons"
                color="primary"
                size="large"
                fullWidth
              >
                Esqueci minha senha
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
