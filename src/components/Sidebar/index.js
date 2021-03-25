import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <sidebar className="sidebar" id="sidebar">
      <label htmlFor="toggler" className="sidebar-close-btn">
        <FontAwesomeIcon icon={["fas", "times"]} color="#ddd" />
      </label>
      <div className="navbar">
        <div className="logo-wrapper">
          <h3 className="logo-text"> Blue box </h3>
        </div>
      </div>
      <header className="header">
        <img
          className="user-image"
          alt="A user profile"
          src="https://picsum.photos/200/300"
        />
        <div className="user-info">
          <p className="username">Angelina Doe</p>
          <small> project manager</small>
        </div>
      </header>

      <ul className="sidebar-menu">
        <li>
          <p className="menu-text"> Dashboard </p>
          <span className="menu-icon">
            {" "}
            <FontAwesomeIcon icon={["fas", "bug"]} color="#ccc" />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> Components </p>
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "code"]} color="#ccc" />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> Data table </p>
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "bars"]} color="#ccc" />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> UI elements </p>
          <span className="menu-icon">
            {" "}
            <FontAwesomeIcon icon={["fas", "coffee"]} color="#ccc" />{" "}
          </span>
        </li>
        <li>
          <button className="btn btn-primary"> Add project</button>
        </li>
      </ul>
    </sidebar>
  );
};

export default Sidebar;
