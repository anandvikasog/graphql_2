"use client";

import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import AddComponent from "./AddComponent";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { style } from "./modalStyle";

const Page = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(true);
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const name = localStorage.getItem("name");
    // const email = localStorage.getItem("email");
    // const id = localStorage.getItem("id");

    // if (!name || !email || !id) {
    //   router.push("/");
    //   return;
    // }

    // setUserData({
    //   name,
    //   email,
    //   id,
    // });

    setUserData({
      name: "Vikas",
      email: "vikas@yopmail.com",
      id: "123456",
    });

    setIsAuth(true);
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    router.push("/");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {!isAuth ? (
        <Loader />
      ) : (
        <>
          <Typography align="center" variant="h4">
            Hi, {userData?.name || "Guest"}
          </Typography>
          <Grid>
            <ListComponent />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "100px",
            }}
          >
            <Button variant="contained" onClick={handleOpen}>
              Add new project
            </Button>
            <Button variant="contained" color="error" onClick={logoutHandler}>
              Logout
            </Button>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AddComponent handleClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}
    </Grid>
  );
};



export default Page;
