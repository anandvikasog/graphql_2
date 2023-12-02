"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LoginForm = () => {
  const [fieldValues, setFieldValues] = useState({
    email: "",
  });

  const handleSubmit = () => {};
  return (
    <Grid
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography align="center" variant="h4">
        Login
      </Typography>
      <Grid>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={fieldValues.email}
          onChange={(e) =>
            setFieldValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </Grid>
      <Grid align="right">
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
