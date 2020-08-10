import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import wls from "../../assets/wls.svg";

import {
  Grid,
  Box,
  Typography,
  TextField,
  Container,
  Button,
} from "@material-ui/core";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const history = useHistory();
  const notify = () => {
    toast("Sucesso !");
    setTimeout(function () {
      history.push("/");
    }, 2000);
  };
  return (
    <>
      <ToastContainer />

      <Grid className="header-blue">
        <img src={wls} width={160} height={50} className="image-account" />
      </Grid>

          <form onSubmit={notify}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center">
          {/* Card */}
            <Grid xs={12} md={10} className="title-box">
              <Box mt={16} mb={4} color="#1C1C1C">
                <Typography variant="h5">Complete os seus dados</Typography>
              </Box>
            </Grid>
            {/* xs=extra small
        sm=small
        md=medio 
        lg=large
        xl=extra large */}

            {/* Input */}

            <Grid xs={12} md={10} container className="block-account">
              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="Nome"
                    type="text"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>

              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="Sobrenome"
                    type="text"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="CPF"
                    type="text"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="Celular"
                    type="text"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="E-mail"
                    type="email"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box mt={4} pr={2}>
                  <TextField
                    id="standard-password-input"
                    label="Senha"
                    type="text"
                    fullWidth
                    required
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid xs={10}>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  <Box px={4}>Finalizar</Box>
                </Button>
              </Box>
            </Grid>
        </Grid>
      </Container>
          </form>
    </>
  );
}
