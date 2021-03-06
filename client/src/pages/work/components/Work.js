import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skill from '../../../partials/skill/Skill';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WorkXPHeader from '../components/WorkXPHeader';
import WorkXPDescription from '../components/WorkXPDescription';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

import styles from './Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  getExperienceDescription(xp) {
    let result = [];
    for (let i in xp.description) {
      result.push(
        <WorkXPDescription
          key={i}
          description={xp.description[i]}
          expanded={this.state.expanded}
        />
      );
    }
    return result;
  }

  getSkillset(xp) {
    let result = [];
    xp.skills.forEach((s, i) => {
      result.push(<Skill label={s} key={i} />);
    });
    return result;
  }

  render() {
    return (
      <div>
        <Card className={styles.card}>
          <WorkXPHeader
            avatar={
              <Avatar
                aria-label="Recipe"
                className={styles.avatar}
                src={'/images/' + this.props.experience.company.logo}
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            position={this.props.experience.position}
            company={this.props.experience.company}
            startDate={this.props.experience.startDate}
            endDate={this.props.experience.endDate}
          />
          <Divider />
          <CardContent className={styles.cardContent}>
            {this.getExperienceDescription(this.props.experience)}
          </CardContent>
          <Divider />
          <div className={styles.techenv}>
            <Typography variant="body2" component="div">
              Technical environment
            </Typography>
            <div className={styles.skills}>
              {this.getSkillset(this.props.experience)}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

// TypeChecking for properties
Work.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Work;
