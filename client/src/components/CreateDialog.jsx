import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default function CreateDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#718355",
          "&:hover": { backgroundColor: "#87986A" },
        }}
      >
        <AddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" noValidate onSubmit={props.submit}>
          <DialogTitle>Todo</DialogTitle>
          <DialogContent>
            <TextField
              id="duedate"
              name="dueDate"
              autoFocus
              fullWidth
              margin="dense"
              type="datetime-local"
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              name="title"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              multiline
              maxRows={5}
              margin="dense"
              id="name"
              label="Description"
              name="description"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
