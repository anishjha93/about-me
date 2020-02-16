import { makeStyles } from '@material-ui/core/styles';


const cardStyle = makeStyles(theme => ({
    card: {
      maxWidth: '80%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red[500]',
    },
  }));

  const gridListStyle = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  const progessBarStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  export default {cardStyle, gridListStyle, progessBarStyles};
