// import { useEffect, useState } from "react";
import useFetchClient from "../../api/useFetchClient";
import { IProject } from "../../interfaces";
import Client from "./Components/Client";
import findProjectsFromClient from "../../utils/findProjectsFromClient";
import Project from "./Components/Project"

export default function EmployeePage(): JSX.Element {
  const id = "e729699c1e86e4a760a51f5b";

  let currentClient;
  let clientProjects;
  let clientProjectsData;

  const { clientData, projectData, error, loading } = useFetchClient(id);

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  if (clientData) {
    currentClient = (
      <Client key={clientData.id} id={clientData.id} name={clientData.name} />
    );
  }

  if (projectData) {
    clientProjectsData = findProjectsFromClient(id, projectData);
    clientProjects = clientProjectsData.map((project: IProject) => (
      <Project
        key={project.id}
        id={project.id}
        clientId={project.clientId}
        employeeIds={project.employeeIds}
        startDate={project.contract.startDate}
        endDate={project.contract.endDate}
        size={project.contract.size}
      />
    ));
  }

  return (
    <section className="responsive-wrapper">
    <h1>Client Bio</h1>
    <div className="client-bio">
    {currentClient}
    </div>
    <div className="project-grid">{clientProjects}</div>
    </section>
  );
}
