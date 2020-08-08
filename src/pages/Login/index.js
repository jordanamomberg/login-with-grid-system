import React from "react";
import { Link } from "react-router-dom";
// import { FiLogIn } from "react-icons/fi";
import "./styles.css";
import wls from "../../assets/wls.svg";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@material-ui/core";

export default function Login() {
  return (
    <Grid container justify="center" alignItems="center">
      {/* Background Azuk */}
      <Grid className="background-blue" />

      {/* Imagem */}
      <Grid xs={12} align="center" className="image">
        <img src={wls} />
      </Grid>

      {/* Card */}
      <Grid xl={4} md={4} sm={6} xs={12} className="block-login">
        <Grid>
          <Box mt={2}>
            <Typography variant="h4">Olá!</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box mt={6}>
            <TextField
              id="standard-password-input"
              label="CPF ou E-mail"
              type="text"
              fullWidth
            />
          </Box>
          <Grid>
            <Box mt={10}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disableRipple 
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
              >
                Criar conta
              </Button>

              {/* <Link className="link" to="create-account">
                Criar conta
              </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    // <Card>
    //       <CardContent>
    //         <Typography color="textSecondary" gutterBottom>
    //           oioi
    //         </Typography>
    //       </CardContent>
    //     </Card>

    // <div className="login-container">
    //   <header className="header">
    //     <img src={download} alt="WLS Soluções"></img>
    //     <span>Contato</span>
    //   </header>

    //   <div className="container-login">
    //     <section className="form">
    //       <form>
    //         <h1>Faça seu Login</h1>
    //         <input placeholder="CPF ou e-mail" />

    //         <button className="button" type="submit">
    //           Continuar
    //         </button>

    //         <Link className="back-link" to="register">
    //           {/* <FiLogIn size={16} color="#e02041" /> */}
    //           Não tenho cadastro
    //         </Link>
    //       </form>
    //     </section>
    //   </div>
    // </div>
  );
}
