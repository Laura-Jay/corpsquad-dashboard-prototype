// import { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import { IClient } from "../../interfaces";
import Client from "./Components/Client";

export default function EmployeePage(): JSX.Element {
  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/clients"
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);
  let allClientData = [];
  if (data) {
    allClientData = data.map((employee: IClient) => (
      <Client key={employee.id} id={employee.id} name={employee.name} />
    ));
  }

  return (
    <>
      <h1>Client Page</h1>
      {allClientData}
    </>
  );
}
