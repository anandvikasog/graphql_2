"use client";

import { Button, Grid } from "@mui/material";
import { useState } from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";

const Page = () => {
  const [formLayout, setFormLayout] = useState("login");
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {formLayout === "login" ? <LoginForm /> : <SignupForm />}
      <Grid
        sx={{
          marginTop: "30px",
        }}
      >
        {formLayout === "login" ? (
          <Button onClick={() => setFormLayout("signup")}>Go to signup</Button>
        ) : (
          <Button onClick={() => setFormLayout("login")}>Go to login</Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Page;
