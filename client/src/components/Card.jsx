import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';


export default function TodoCard(props) {
  const [cardEL, setCardEl] = React.useState(null);
  
  const handleMenuCard = (event) => {
    setCardEl(event.currentTarget);
  };
  
  const handleCloseCard = () => {
    setCardEl(null);
  };
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
            <MenuItem onClick={handleCloseCard}>Edit</MenuItem>
            <MenuItem onClick={handleCloseCard}>Delete</MenuItem>
            </Menu>
            </>
          }
          subheaderTypographyProps={{color: "#CFE1B9"}}
          title={props.title}
          subheader={props.dueDate}
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
      </Grid>
  );
}
