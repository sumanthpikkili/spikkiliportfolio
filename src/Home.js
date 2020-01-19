import React from 'react';
import './Home.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import SocialMedia from './components/SocialMedia';

export default class Home extends React.Component {
  state = {
    activeSideBarElement: <About />
  }

  sideBarCallBack = (sideBarElement) => {
    this.setState({activeSideBarElement: sideBarElement});
  }

render() {
  return (
    <div className="home">
    <div className="header"> Sumanth Pikkili </div>
    <div className="socialMediaContainer">
    <SocialMedia />
    </div>
    <span className="topFadingLine"></span>
      <Sidebar activeSideBarCallBack={this.sideBarCallBack} />
      {this.state.activeSideBarElement}
    </div>
  );
}
}
