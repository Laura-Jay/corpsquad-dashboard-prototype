// import { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import Project from "./Components/Project";
import getAggregate from "../../utils/getAggregate";
import { IProject } from "../../interfaces";
import { useState } from "react";

export default function HomePage(): JSX.Element {

  const [ filter, setFilter ] = useState("");
  const [sort, setSort ] = useState("")
  const [ displayedProjects, setDisplayedProjects ] = useState()


  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/projects"
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  let projectDataArray = [];
  let allProjectData: IProject[] = [];

  if (data) {
    projectDataArray = data;
    allProjectData = data.map((project: IProject) => (
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
  

  const aggregateRevenue = getAggregate(projectDataArray);

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
    // localStorage.setItem("filter", e.target.value);
  }
  

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSort(e.target.value);
    // localStorage.setItem("sort", e.target.value);
  }

  return (
    <section className="responsive-wrapper">
      <h1>CorpSquad Project Dashboard</h1>
      <h3>Aggregate Consultancy Project Revenue</h3>
      <h1 className="cost-h1">£{aggregateRevenue}</h1>
      <div className="options-bar">
        <select 
        onChange={handleFilter}
        value={filter}>
          <option value="">Filter By</option>
          {filterOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
          
        </select>
        <select
        onChange={handleSort}
        value={sort}>
          <option value="">Sort By</option>
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="project-grid">{allProjectData}</div>
    </section>
  );
}


const filterOptions = [
  { name: "Start Date",
    value: "startDate"},
    { name: "Completion Date",
    value: "endDate"},
    { name: "Contract Size",
    value: "size"},
    { name: "Team Member",
    value: "employee"},
    { name: "Client ID",
    value: "client"},
]

const sortOptions = [
  { name: "Start Date",
    value: "startDate"},
    { name: "Completion Date",
    value: "endDate"},
    { name: "Contract Size",
    value: "size"}
]