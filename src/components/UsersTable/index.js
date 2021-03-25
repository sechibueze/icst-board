// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UsersTable.scss";

const UsersTable = () => {
  return (
    <div className="table-wrapper">
      <p className="table-title"> Applicants' data</p>

      <table className="table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> usser type </th>
            <th> Joined </th>
            <th> Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Bolanle Oni </td>
            <td> b.yusuf@gmail.com </td>
            <td> member </td>
            <td> 02.05.2021 </td>
            <td>
              {" "}
              <button className="table-btn"> active </button>{" "}
            </td>
          </tr>
          <tr>
            <td> Yinka Twak </td>
            <td> b.twak@gmail.com </td>
            <td> admin </td>
            <td> 02.05.2021 </td>
            <td>
              {" "}
              <button className="table-btn"> active </button>{" "}
            </td>
          </tr>
          <tr>
            <td> Mona Cruiz </td>
            <td> m.cruiz@gmail.com </td>
            <td> free </td>
            <td> 02.01.2020 </td>
            <td>
              {" "}
              <button className="table-btn"> active </button>{" "}
            </td>
          </tr>
          <tr>
            <td> Barak Tolani </td>
            <td> b.tolani@gmail.com </td>
            <td> admin </td>
            <td> 02.10.2020 </td>
            <td>
              {" "}
              <button className="table-btn warn"> active </button>{" "}
            </td>
          </tr>
          <tr>
            <td> Chiamaka Ndu </td>
            <td> c.ndu@gmail.com </td>
            <td> admin </td>
            <td> 02.05.2021 </td>
            <td>
              <button className="table-btn"> active </button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
