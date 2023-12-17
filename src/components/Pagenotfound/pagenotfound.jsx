import React from 'react';
import './pagenotfound.css'; 

const pagenotfound = () => {
  return (
    <div className="container404">
      <div className="face404">:(</div><br />
      <div className="text404">A <span>404</span> error occurred, Page not found, check the URL and try again.</div><br /><br />
      <div className="subtext404"><a href="/">Return to home</a>&nbsp;|&nbsp;<a href="javascript:history.back()">Go Back</a></div>
    </div>
  );
};

export default pagenotfound;