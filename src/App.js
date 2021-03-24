import Sidebar from "./components/Sidebar";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="main">
      <div className="inner-box">
        <div className="main-box">
          <Sidebar />
          <input type="checkbox" id="toggler" />
          <div className="main-board">
            <nav className="top-navbar">
              <div className="search-wrapper">
                <label htmlFor="toggler">
                  <FontAwesomeIcon
                    icon={["fas", "bars"]}
                    color="#333"
                    style={{
                      marginRight: "12px",
                    }}
                  />
                </label>
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  color="#ddd"
                  style={{
                    marginRight: "12px",
                  }}
                />
                <input
                  type="text"
                  className="search-box"
                  placeholder="Search"
                />
              </div>
              <div className="nav-right">
                <div
                  className="navbar-user-wrapper"
                  style={{ marginRight: "10px" }}
                >
                  <img
                    className="user-image"
                    alt="A user profile"
                    src="https://picsum.photos/200/300"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <p> Angelina Doe</p>
                </div>
                <div className="navbar-icons">
                  <span>
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                </div>
              </div>
            </nav>
            <div className="main-dash">
              <div className="">
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  color="#ddd"
                  style={{ marginRight: "10px" }}
                />
                <span className=""> Dashboard </span>
              </div>
              <div className="card-wrapper">
                <div className="card">
                  <span className="card-icon">
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                  <div className="mid-text">
                    <small> unique visitors</small>
                    <p className="card-value"> 250000</p>
                  </div>
                  <small className="bottom-text"> Increased by 10%</small>
                </div>
                <div className="card">
                  <span className="card-icon">
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                  <div className="mid-text">
                    <small> unique visitors</small>
                    <p className="card-value"> 250000</p>
                  </div>
                  <small className="bottom-text"> Increased by 10%</small>
                </div>
                <div className="card">
                  <span className="card-icon">
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      color="#ddd"
                      style={{ marginRight: "10px" }}
                    />
                  </span>
                  <div className="mid-text">
                    <small> unique visitors</small>
                    <p className="card-value"> 250000</p>
                  </div>
                  <small className="bottom-text"> Increased by 10%</small>
                </div>
              </div>

              <div className="table-wrapper">
                <p className="table-title"> Standar table design</p>

                <table className="table">
                  <thead>
                    <tr>
                      <th> Name </th>
                      <th> Email </th>
                      <th> usser type </th>
                      <th> Joineh </th>
                      <th> Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td>
                        {" "}
                        <button className="table-btn"> active </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td>
                        {" "}
                        <button className="table-btn"> active </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td>
                        {" "}
                        <button className="table-btn"> active </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td>
                        {" "}
                        <button className="table-btn warn">
                          {" "}
                          active{" "}
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td> name Your </td>
                      <td>
                        {" "}
                        <button className="table-btn"> active </button>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
