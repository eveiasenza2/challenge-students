import React from "react";
import { Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Title, EditFormContainer, ButtonContain, CustomInput } from "../styles/globalStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Edit = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var values = localStorage.getItem("formValues");
  var studentList = JSON.parse(values);

  const handleDelete = () => {
    localStorage.removeItem("studentList.name");
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
            Desea eliminar este elemento?
          </Typography>
          <ButtonContain>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handleDelete();
              }}
            >
              Aceptar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleClose();
              }}
            >
              Cancelar
            </Button>
          </ButtonContain>
        </Box>
      </Modal>
      {studentList.length > 0 ? (
        <>
          <Title>Editar datos</Title>
          {studentList.map((item) => {
            return (
              <EditFormContainer>
                <div>
                  <CustomInput value={item?.name} />
                  <IconButton onClick={handleOpen}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div>
                  <CustomInput value={item?.lastName} />
                  <IconButton onClick={handleOpen}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div>
                  <CustomInput value={item?.age} />
                  <IconButton onClick={handleOpen}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div>
                  <CustomInput value={item?.gender} />
                  <IconButton onClick={handleOpen}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </EditFormContainer>
            );
          })}
        </>
      ) : (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <h2>NO HAY DATOS PARA MODIFICAR</h2>
        </Container>
      )}
    </div>
  );
};

export default Edit;
