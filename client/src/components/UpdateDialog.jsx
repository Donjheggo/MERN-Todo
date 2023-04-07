import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import moment from "moment";

export default function FormDialog(props) {
  
  const formattedDate = props.dueDate
  ? moment.utc(props.dueDate).local().format("YYYY-MM-DDTHH:mm")
  : "";

  const [updatedFormData, setUpdatedFormData] = useState({
    dueDate: formattedDate,
    title: props.title,
    description: props.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <Dialog open={props.updateOpen} onClose={props.closeUpdate}>
        <Box component="form" noValidate onSubmit={props.update}>
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
              value={updatedFormData.dueDate}
              onChange={handleChange}
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
              value={updatedFormData.title}
              onChange={handleChange}
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
              value={updatedFormData.description}
              onChange={handleChange}
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
