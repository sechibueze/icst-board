import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./QuickData.scss";
const QuickData = () => {
  return (
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
  );
};

export default QuickData;
