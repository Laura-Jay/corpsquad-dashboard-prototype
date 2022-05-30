import { IClient } from "../../../interfaces";

export default function Project(props: IClient): JSX.Element {
  return (
    <section className="client">
      <h3> {props.id}</h3>
      <h3> {props.name}</h3>
    </section>
  );
}
