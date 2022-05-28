import { IClient } from "../../../interfaces";

export default function Project(props: IClient): JSX.Element {

  return (
    <section className="client">
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
    </section>
  );
}
