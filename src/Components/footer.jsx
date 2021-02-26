import React, { Components } from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" style={{position:"absolute", bottom:"0", left:"0", width:"100%"}}>
      <div className="container">
        <span className="text-muted">This appplication is a pilot project</span>
      </div>
    </footer>
  );
};

export default Footer;
