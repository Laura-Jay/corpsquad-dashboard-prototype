import { IProjectProps } from "../../../interfaces";

export default function Project(props: IProjectProps): JSX.Element {
  const employeeIds = props.employeeIds.map((employeeId) => (
    <li key={employeeId}>{employeeId}</li>
  ));

  return (
    <section className="project">
      <p>Id: {props.id}</p>
      <p>Client id: {props.clientId}</p>
      {employeeIds}
      <p>Start Date: {props.startDate}</p>
      <p>End Date: {props.endDate}</p>
      <p>Size: {props.size}</p>
    </section>
  );
}
