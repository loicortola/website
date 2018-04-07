import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import Skill from '../../../partials/skill/Skill';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import WorkXPHeader from '../components/WorkXPHeader';
import WorkXPDescription from '../components/WorkXPDescription';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Divider from 'material-ui/Divider';

import styles from './Work.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    }
  }

  getExperienceDescription(xp) {
    let result = [];
    for (let i in xp.description) {
      result.push(<WorkXPDescription key={i} description={xp.description[i]} expanded={this.state.expanded}></WorkXPDescription>);
    }
    return result;
  }
  
  getSkillset(xp) {
    let result = []
    xp.skills.forEach((s, i) => {
      result.push(<Skill label={s} key={i}/>)
    });
    return result;
  }

  render() {
    return (
        <div>
          <Card className={styles.card}>
            <WorkXPHeader
                avatar={
                  <Avatar aria-label="Recipe" className={styles.avatar} src={"/images/" + this.props.experience.company.logo}>
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon/>
                  </IconButton>
                }
                position={this.props.experience.position}
                company={this.props.experience.company}
                startDate={this.props.experience.startDate}
                endDate={this.props.experience.endDate}
            />
            <Divider/>
            <CardContent>
              {this.getExperienceDescription(this.props.experience)}
            </CardContent>
            <Divider/>
            <div className={styles.techenv}>
              <Typography variant="body2" component="div">Technical environment</Typography>
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

export default injectIntl(Work);
