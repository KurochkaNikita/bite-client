import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { bool, element, func } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
    width: '100%',
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  defaultPadding: {
    padding: 0,
  },
}));

const Card = ({ children, withoutPadding, onClick }) => {
  const classes = useStyles();
  const cardStyle = `${classes.paper} ${withoutPadding && classes.defaultPadding}`;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      onClick={onClick}
    >
      <Paper className={cardStyle} elevation={3}>
        {children}
      </Paper>
    </Grid>
  );
};

Card.propTypes = {
  children: element.isRequired,
  withoutPadding: bool,
  onClick: func,
};

Card.defaultProps = {
  withoutPadding: false,
};

export default Card;
