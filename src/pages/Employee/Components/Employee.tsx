import { IEmployee } from "../../../interfaces";

export default function Project(props: IEmployee): JSX.Element {

  return (
    <section className="employee">
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <img src={props.avatar} alt="employee avatar"/>
    </section>
  );
}
