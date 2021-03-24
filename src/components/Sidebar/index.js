import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <div className="navbar">
        <div className="logo-wrapper">
          <h3> Blue box </h3>
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
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "bars"]} />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> Components </p>
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "bars"]} />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> Data table </p>
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "bars"]} />{" "}
          </span>
        </li>
        <li>
          <p className="menu-text"> UI elements </p>
          <span className="menu-icon far fa-bar">
            {" "}
            <FontAwesomeIcon icon={["fas", "bars"]} />{" "}
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
