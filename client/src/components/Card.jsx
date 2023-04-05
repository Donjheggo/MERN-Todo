import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import UpdateDialog from "./UpdateDialog";

export default function TodoCard(props) {
  const [cardEL, setCardEl] = React.useState(null);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const openUpdate = () => {
    setToggleUpdate(true);
  };

  const closeUpdate = () => {
    setToggleUpdate(false);
  };
  const handleMenuCard = (event) => {
    setCardEl(event.currentTarget);
  };

  const handleCloseCard = () => {
    setCardEl(null);
  };

  const formattedDate = props.dueDate
    ? new Date(props.dueDate).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : "None";

  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card sx={{ backgroundColor: "#97A97C", color: "#E9F5DB" }}>
        <CardHeader
          action={
            <>
              <IconButton aria-label="settings" onClick={handleMenuCard}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-card"
                anchorEl={cardEL}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(cardEL)}
                onClose={handleCloseCard}
              >
                <MenuItem onClick={openUpdate}>Edit</MenuItem>
                <MenuItem onClick={props.delete}>Delete</MenuItem>
              </Menu>
            </>
          }
          subheaderTypographyProps={{ color: "#CFE1B9" }}
          title={props.title}
          subheader={`Due Date: ${formattedDate}`}
        />

        <CardContent>
          <Typography variant="body2" color="#E9F5DB">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CheckIcon />
          </IconButton>
        </CardActions>
      </Card>
      <UpdateDialog
        updateOpen={toggleUpdate}
        closeUpdate={closeUpdate}
        dueDate={props.dueDate}
        title={props.title}
        description={props.description}
      />
    </Grid>
  );
}
