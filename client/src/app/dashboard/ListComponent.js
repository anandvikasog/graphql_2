"use client";

import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { style } from "./modalStyle";
import { useEffect, useState } from "react";

const data = [
  {
    name: "topic 1 ..... topic 1 ..... topic 1 ..... topic 1 ..... topic 1 ..... ",
    description: "description 1",
    status: "Not Started",
    id: "123",
    client: {
      name: "vikas",
    },
  },
  {
    name: "topic 2",
    description: "description 2",
    status: "Completed",
    id: "456",
    client: {
      name: "vikas",
    },
  },
  {
    name: "topic 3",
    description: "description 3",
    status: "In Progress",
    id: "789",
    client: {
      name: "vikas",
    },
  },
];

const ListComponent = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleChangeStates = (id) => {};
  const handleDelete = (id) => {};
  const handleView = (id) => {
    setModalData(data.find((elem) => elem.id === id));
    handleOpen();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setModalData(null);
    setOpen(false);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: "800px",
        padding: "20px",
      }}
    >
      <Grid md={12} sx={{ padding: "10px" }}>
        <Typography align="center" variant="h6">
          Projects
        </Typography>
      </Grid>
      {data.map((elem) => {
        return (
          <Grid
            key={elem.id}
            md={12}
            container
            alignItems="center"
            sx={{ borderBottom: "1px solid grey", padding: "10px" }}
          >
            <Grid md={2}>
              <Checkbox
                checked={elem.status === "Completed"}
                onChange={() => handleChangeStates(elem.id)}
              />
            </Grid>
            <Grid md={8}>
              <Typography>{elem.name}</Typography>
            </Grid>
            <Grid md={1}>
              <IconButton onClick={() => handleView(elem.id)}>
                <RemoveRedEyeIcon />
              </IconButton>
            </Grid>
            <Grid md={1}>
              <IconButton onClick={() => handleDelete(elem.id)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {modalData?.name || "NA"}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {modalData?.description || "NA"}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Status : {modalData?.status || "NA"}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Auther : {modalData?.client?.name || "NA"}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ListComponent;
