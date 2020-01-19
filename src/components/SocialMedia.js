import React from 'react';
import '../styles/Contact.css';

export default class SocialMedia extends React.Component {

render() {
    return (
      <div>
      <ul className="socialMediaIconsList">
          <a href = 'https://www.facebook.com/sumanth.pikkili' target='_blank' rel="noopener noreferrer"><li className="facebook"></li></a>
          <a href = 'https://www.linkedin.com/in/spikkili/' target='_blank' rel="noopener noreferrer"><li className="linkedIn"></li></a>
          <a href = 'https://www.instagram.com/sumanthpikkili/' target='_blank' rel="noopener noreferrer"><li className="instagram"></li></a>
      </ul>
      </div>
    )
}
}
