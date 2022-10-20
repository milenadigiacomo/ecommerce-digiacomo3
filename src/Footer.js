import React from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/">facebook</a>
        <a href="https://www.instagram.com/">instagram</a>
        <a href="https://www.twitter.com/">twitter</a>
      </div>
      <div>todos los derechos reservados</div>
      <div>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
