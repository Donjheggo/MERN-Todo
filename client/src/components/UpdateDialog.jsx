import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default function FormDialog(props) {
  
  const date = new Date(props.dueDate);
  const formattedDate = date.toISOString().slice(0, 16);

  return (
    <div>
      <Dialog open={props.updateOpen} onClose={props.closeUpdate}>
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
              value={formattedDate}
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
              value={props.title}
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
              value={props.description}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.closeUpdate}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
