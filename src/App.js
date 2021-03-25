import Sidebar from "./components/Sidebar";
import AuthNavbar from "./components/AuthNavbar";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="main">
      <div className="inner-box">
        <div className="main-box">
          <input type="checkbox" id="toggler" name="toggler" />
          {/* <span> hello </span> */}
          <Sidebar />
          <div className="main-board">
            <AuthNavbar />
            <div className="main-dash">
              <div className="">
                <FontAwesomeIcon
                  icon={["fas", "terminal"]}
                  color="blue"
                  style={{
                    marginRight: "10px",
                    // backgroundColor: "blue",
                    // color: "#ddd",
                    // padding: ".4rem",
                  }}
                />
                <span className=""> Dashboard </span>
              </div>
              <div className="card-wrapper">
                <div className="card">
                  <span className="card-icon">
                    <FontAwesomeIcon
                      icon={["fas", "qrcode"]}
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
                      icon={["fas", "shield-alt"]}
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
                      icon={["fas", "microphone"]}
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
                <p className="table-title"> Standard table design</p>

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
