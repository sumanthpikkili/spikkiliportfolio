import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import InfoIcon from '@material-ui/icons/AccountBox';
import ProjectIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/ContactMail';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/Sidebar.css';

type Props = {
  activeSideBarCallBack: PropTypes.function;
}
export default class Sidebar extends React.Component<Props> {

    render() {
      return (
        <div className="sidebar">
        <List disablePadding dense>
         <ListItem button onClick={() => this.props.activeSideBarCallBack(<About />)}>
         <ListItemAvatar>
          <Avatar>
            <InfoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>About</ListItemText>
      </ListItem>
      <ListItem button onClick={() => this.props.activeSideBarCallBack(<Projects />)}>
      <ListItemAvatar>
       <Avatar>
         <ProjectIcon />
       </Avatar>
     </ListItemAvatar>
        <ListItemText>Projects</ListItemText>
      </ListItem>
      <ListItem button onClick={() => this.props.activeSideBarCallBack(<Contact />)}>
      <ListItemAvatar>
       <Avatar>
         <ContactIcon />
       </Avatar>
     </ListItemAvatar>
        <ListItemText>Contact</ListItemText>
      </ListItem>
    </List>
    </div>
  );
}
}
