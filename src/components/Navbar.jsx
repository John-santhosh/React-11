import { links, social } from "../data";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="container">
        <div className="header">
          <div className="img-container">
            <img src={logo} />
          </div>
          <button onClick={toggleLinks} className="toggleBtn">
            <FaBars />
          </button>
        </div>
        {
          <div className="links" style={linkStyles}>
            <ol className="d-flex " ref={linkRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a className="nav-link" href={url}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        }

        <div className="social">
          <ol className="d-flex">
            {social.map((item) => {
              // console.log(item);
              const { url, icon, id } = item;
              return (
                <li key={id}>
                  <a className="social_link" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
