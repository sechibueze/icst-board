import Sidebar from "./components/Sidebar";
import AuthNavbar from "./components/AuthNavbar";
import QuickData from "./components/QuickData";
import UsersTable from "./components/UsersTable";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="main">
      <div className="inner-box">
        <div className="main-box">
          <input type="checkbox" id="toggler" name="toggler" />

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
                  }}
                />
                <span className=""> Dashboard </span>
              </div>

              <QuickData />

              <UsersTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
