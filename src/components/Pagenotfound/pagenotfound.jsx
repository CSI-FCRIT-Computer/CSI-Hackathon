import React from 'react';
import './pagenotfound.css'; 

const pagenotfound = () => {
  return (
    <div className="container">
      <h1>:(</h1><br />
      <h2>A <span>404</span> error occurred, Page not found, check the URL and try again.</h2><br /><br />
      <h3><a href="#">Return to home</a>&nbsp;|&nbsp;<a href="javascript:history.back()">Go Back</a></h3>
    </div>
  );
};

export default pagenotfound;