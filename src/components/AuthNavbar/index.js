import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AuthNavbar.scss";
const AuthNavbar = () => {
  return (
    <nav className="top-navbar">
      <label htmlFor="toggler" className="hamburger">
        <FontAwesomeIcon
          icon={["fas", "stream"]}
          color="#333"
          size="2x"
          style={{
            marginRight: "12px",
          }}
        />
      </label>
      <div className="search-wrapper">
        <span>
          <FontAwesomeIcon
            icon={["fas", "search"]}
            color="#ddd"
            style={{
              marginRight: "12px",
            }}
          />
        </span>
        <input type="text" className="search-box" placeholder="Search" />
      </div>
      <div className="nav-right">
        <div className="navbar-user-wrapper" style={{ marginRight: "10px" }}>
          <img
            className="user-image"
            alt="A user profile"
            src="https://images.unsplash.com/photo-1515848797093-effe16ccfabb"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <p className="username"> Angelina Doe</p>
        </div>
        <div className="navbar-icons">
          <span>
            <FontAwesomeIcon
              icon={["fas", "microchip"]}
              color="#ddd"
              //   style={{ marginRight: "10px" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={["far", "keyboard"]}
              color="#ddd"
              //   style={{ marginRight: "10px" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={["fas", "shield-alt"]}
              color="#ddd"
              //   style={{ marginRight: "10px" }}
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
