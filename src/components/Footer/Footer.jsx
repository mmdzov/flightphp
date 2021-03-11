import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [ftrLnk, setFtrLnk] = useState([
    { title: "Star", link: "https://github.com/mikecao/flight" },
    { title: "Fork", link: "https://github.com/mikecao/flight/fork" },
  ]);
  return (
    <footer className='footer'>
      <div className='footerLinks'>
        {ftrLnk.map((item, i) => (
          <a href={item.link} className='footerLinkItem' key={i}>
            {item.title}
          </a>
        ))}
      </div>
      <div className='copyRight'>Copyright &#169; Mike Cao</div>
    </footer>
  );
};

export default Footer;
