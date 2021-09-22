import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalRes from "./reservation/ModalRes"
import {Link} from "react-router-dom";
import { deleteCard } from '../../js/actions/card';
import { useSelector,useDispatch } from 'react-redux'

const useStyles = makeStyles({

  root: {
    maxWidth: 280,
    minHeight:421,
    overflow: "visible",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    minWidth:300,
    maxHeight:434,
    marginTop:"20px",
    
  },
  media: {
    width: "100%",
    height: 'auto',
    borderRadius: "4px",
  
   
    position: "relative",
    zIndex: 1000
  }

});

function CardEvt({card}) {

const classes = useStyles();
const dispatch = useDispatch()
const user = useSelector(state => state.userReducer.user)

return (

  <Card className={classes.root}>
    <CardActionArea >
      <CardMedia
        className={classes.media}
        image={card.cardImg} 
        title="Contemplative Reptile"
        style={{height:280}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{height:45,fontSize:18}} >
        {card.agentName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {card.details[0]}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       Prix Unitaire: {card.prix} DT
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>

     {(user && user.isAdmin)?  <button style={{marginLeft:8,width:23,height:30,marginTop:-10}} onClick={()=>dispatch(deleteCard(card._id))}>   
     <svg style={{marginTop:-20,marginLeft:-8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
     </button> :null } 
    




{user ?<ModalRes card={card}/>:
            <Link to="/Activités">
              
              <span style={{marginLeft:182 ,marginTop:-13,height:"40px",fontSize:"8",border:"none",marginTop:2}} size="8"  >
            Réserver
                </span></Link> }




    </CardActions>
  </Card>
);

    
}

export default CardEvt
