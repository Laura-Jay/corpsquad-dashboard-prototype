import { IProjectProps, IEmployee } from "../../../interfaces";
import useFetchEmployeeInfo from "../../../api/useFetchEmployeeInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Project(props: IProjectProps): JSX.Element {
  const [toggleDetails, setToggleDetails] = useState(false);

  const { teamData, loading, error } = useFetchEmployeeInfo(props.employeeIds);

  if (toggleDetails) if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  let teamMembers;

  if (teamData) {
    teamMembers = teamData.map((employee: IEmployee) => {
      return (
        <div className="team-details" key={employee.id}>
          <div className="profile-image">
            <img
              className="avatar"
              src={employee.avatar}
              alt="employee avatar"
            />
          </div>
          <p>
            <strong>Name: </strong>
          </p>
          <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          <p>
            <strong>ID: </strong> {employee.id}
          </p>
          <p>
            <strong>Role: </strong>
            {employee.role}
          </p>
        </div>
      );
    });
  } else {
    console.log("no teamData");
    teamMembers = props.employeeIds.map((employeeId) => (
      <li key={employeeId}>{employeeId}</li>
    ));
  }

  function handleShowDetails() {
    setToggleDetails((prev) => !prev);
  }

  return (
    <section className="project">
      <div className="project-header">
        <p>
          <strong>ID:</strong> {props.id}
        </p>
      </div>
      <div className="project-body">
        <p>
          <strong>Client ID:</strong>
        </p>
        <Link to={`/clients/${props.clientId}`}>{props.clientId}</Link>
        <p>
          <strong>Start Date:</strong> {props.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {props.endDate}
        </p>
        <p>
          <strong>Project Size:</strong> {props.size}
        </p>
      </div>
      <div className="project-footer">
        {toggleDetails ? (
          <button onClick={handleShowDetails}>Hide Team Member Details</button>
        ) : (
          <button onClick={handleShowDetails}>Show Team Member Details</button>
        )}
        <div className="team-details-grid">
          {toggleDetails && (teamData ? teamMembers : props.employeeIds)}
        </div>
      </div>
    </section>
  );
}
