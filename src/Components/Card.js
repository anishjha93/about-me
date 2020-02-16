import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultStyles from '../styles/custom-material-ui-styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgressbar from 'react-circular-progressbar';



export default function RecipeReviewCard(props) {
  const classes = defaultStyles.cardStyle();
  const gridListStyle = defaultStyles.gridListStyle();
  const progessBarStyles = defaultStyles.progessBarStyles();
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  if(props.data){
    // var skills = props.data.skills.map(function(skills){
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    //   });

      var skills = props.data.skills.map(function(skills){
            var className = 'bar-expand '+skills.name.toLowerCase();
            const percentage = 66;
            return <Grid item xs={4}><Paper className={classes.paper}>
              <CircularProgressbar
                percentage={percentage}
                text={`${percentage}%`}
              />
             {skills.name}</Paper></Grid>
          });
  }

  console.log('data------; ', props.data);
  return (
    <Card className={classes.card}>
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/images/profile.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography>
        <div className={classes.root}>
            <Grid container spacing={2}>
                {skills}
            </Grid>
        </div>
        </Typography>
      </CardContent>
    </Card>
  );
}