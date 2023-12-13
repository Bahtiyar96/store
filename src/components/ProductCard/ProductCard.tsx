import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../store/types";


export const Productcard = (props: IProduct) => {
   const navigate = useNavigate();
  return (
   <Card sx={{ flex: 1, minWidth: '350px', maxWidth: '400px', width: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography 
         onClick={() => navigate(`/product/${props._id}`)} 
         gutterBottom variant="h5"
         component="div">
        {props.brand}
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
