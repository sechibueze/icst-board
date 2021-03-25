// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UsersTable.scss";

const UsersTable = () => {
  return (
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
              <button className="table-btn warn"> active </button>{" "}
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
  );
};

export default UsersTable;
