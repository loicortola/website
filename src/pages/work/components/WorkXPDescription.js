import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import ReactMarkdown from 'react-markdown';

import styleSass from './WorkXPHeader.scss';

export const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit
  })
});

function WorkXPDescription(props) {
  const { className: classNameProp, component: Component, description } = props;

  const classes = Object.assign(props.classes, styleSass);

  return (
    <Component className={classNames(classes.root, classNameProp)}>
      <Typography variant={'body2'} component="span" className={classes.label}>
        {description.label}
      </Typography>
      {props.expanded ? (
        <ReactMarkdown source={description.details} />
      ) : (
        <span />
      )}
    </Component>
  );
}

WorkXPDescription.propTypes = {
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

  description: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired
};

WorkXPDescription.defaultProps = {
  component: 'div'
};

export default withStyles(styles, { name: 'WorkXPDescription' })(
  WorkXPDescription
);
