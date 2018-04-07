import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import moment from "moment/moment";
import styleSass from './WorkXPHeader.scss';

export const styles = theme => ({
      root: theme.mixins.gutters({
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      })
    });

function WorkXPHeader(props) {
  const {
    action,
    avatar,
    className: classNameProp,
    component: Component,
    startDate,
    endDate,
    company,
    position
  } = props;
  
  const classes = Object.assign(props.classes, styleSass);
  

  function getDuration(startDateStr, endDateStr) {
    let startDate = moment(startDateStr);
    if (endDateStr) {
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
      <Component className={classNames(classes.root, classNameProp)}>
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
              variant={'body1'}
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
      </Component>
  );
}

WorkXPHeader.propTypes = {
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

WorkXPHeader.defaultProps = {
  component: 'div',
};

export default withStyles(styles, {name: 'WorkXPHeader'})(WorkXPHeader);