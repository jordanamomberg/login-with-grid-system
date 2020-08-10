import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import wls from "../../assets/wls.svg";

import { Typography, Grid, TextField, Button, Box } from "@material-ui/core";

export default function Login() {
  const history = useHistory();

  function handlePassaword() {
    history.push("/passaword");
  }

  function handleAccount() {
    history.push("/account");
  }

  return (
    <form onSubmit={handlePassaword}>
      <Grid container justify="center" alignItems="center">
        {/* Background Azuk */}
        <Grid className="background-blue" />

        {/* Imagem */}
        <Grid xs={12} align="center" className="image">
          <img src={wls} />
        </Grid>

        {/* Card */}
        <Grid xl={4} md={4} sm={6} xs={12} className="block-login">
          {/* Mensagem */}
          <Grid>
            <Box mt={2} color="#1C1C1C">
              <Typography variant="h4">Olá!</Typography>
            </Box>
          </Grid>

          {/* Input */}
          <Grid>
            <Box mt={6}>
              <TextField
                id="standard-password-input"
                label="CPF ou E-mail"
                type="text"
                fullWidth
                required
              />
            </Box>

            {/* Button */}
            <Grid>
              <Box mt={10}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Continuar
                </Button>
              </Box>

              <Box mt={2}>
                <Button
                  href="#text-buttons"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleAccount}
                >
                  Criar conta
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
