// import { useEffect, useState } from "react";
import useFetchClient from "../../api/useFetchClient";
import { IProject } from "../../interfaces";
import Client from "./Components/Client";
import findProjectsFromClient from "../../utils/findProjectsFromClient";
import Project from "./Components/Project";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EmployeePage(): JSX.Element {
  const { clientId } = useParams() as { clientId: string };

  let currentClient;
  let clientProjects;
  let clientProjectsData;

  const { clientData, projectData, error, loading } = useFetchClient(clientId);

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  if (clientData) {
    currentClient = (
      <Client key={clientData.id} id={clientData.id} name={clientData.name} />
    );
  }

  if (projectData && clientId) {
    clientProjectsData = findProjectsFromClient(clientId, projectData);
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
    <>
      <nav>
        <button>
          <Link to="/" className="link-button">
            Dashboard Home
          </Link>
        </button>
      </nav>
      <section className="responsive-wrapper">
        <h1>Client Bio</h1>
        <div className="client-bio">{currentClient}</div>
        <div className="project-grid">{clientProjects}</div>
      </section>
    </>
  );
}
