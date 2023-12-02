"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SignupForm = () => {
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    phone: "",
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
        Signup
      </Typography>
      <Grid>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          value={fieldValues.name}
          onChange={(e) =>
            setFieldValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </Grid>
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
      <Grid>
        <TextField
          type="text"
          label="Phone"
          variant="outlined"
          value={fieldValues.phone}
          onChange={(e) =>
            setFieldValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </Grid>
      <Grid align="right">
        <Button variant="contained" onClick={handleSubmit}>
          Signup
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
