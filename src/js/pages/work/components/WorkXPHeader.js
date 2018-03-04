import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import moment from "moment/moment";

export const styles = theme => ({
  root: theme.mixins.gutters({
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }),
  avatar: {
    flex: '0 0 auto',
    marginRight: theme.spacing.unit * 2,
  },
  dates: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -2,
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -2,
  },
  content: {
    flex: '1 1 auto',
  },
  title: {},
  subheader: {},
});

function CardHeader(props) {
  const {
    action,
    avatar,
    classes,
    className: classNameProp,
    component: Component,
    startDate,
    endDate,
    company,
    position,
    ...other
  } = props;


  function getDuration(startDateStr, endDateStr) {
    let startDate = moment(startDateStr);
    if (endDateStr) {
      console.log('Here');
      // Experience is over
      let endDate = moment(endDateStr);
      let durationInMonths = endDate.diff(startDate, 'months');
      if (durationInMonths > 10) {
        let numberOfYears = endDate.diff(startDate, 'years');
        return numberOfYears <= 1 ? '1 year' : numberOfYears + ' years';
      }
      return durationInMonths + ' months';
    }
    return 'Since ' + (startDate.year() === moment().year() ? startDate.format('MMMM') : startDate.format('YYYY'));
  }

  return (
      <Component className={classNames(classes.root, classNameProp)} {...other}>
        {avatar && <div className={classes.avatar}>{avatar}</div>}
        <div className={classes.content}>
          <Typography
              variant={'headline'}
              component="span"
              className={classes.title}
          >
            {position} @ {company.name}
          </Typography>
          <Typography
              variant={'body2'}
              component="span"
              color="textSecondary"
              className={classes.subheader}>
            {company.description}
          </Typography>
        </div>
        <Typography
            variant="body2"
            component="span"
            color="textSecondary"
            className={classes.dates}>
          {getDuration(startDate, endDate)}
        </Typography>
        {action && <div className={classes.action}>{action}</div>}
      </Component>
  );
}

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  company: PropTypes.object.isRequired,
  position: PropTypes.node,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string
};

CardHeader.defaultProps = {
  component: 'div',
};

export default withStyles(styles, {name: 'MuiCardHeader'})(CardHeader);