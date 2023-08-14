import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social" >
    <a href={process.env.REACT_APP_twitterLink} target='_blank' rel='noopener noreferrer'>
      <div>
        <BsTwitter />
      </div>
    </a>

    <a href={process.env.REACT_APP_githubLink} target='_blank' rel='noopener noreferrer'>
      <div>
        <BsGithub />
      </div>
    </a>
    
    <a href={process.env.REACT_APP_linkedinLink} target='_blank' rel='noopener noreferrer'>
      <div>
        <BsLinkedin />
      </div>
    </a>
    
  </div>
);

export default SocialMedia;
