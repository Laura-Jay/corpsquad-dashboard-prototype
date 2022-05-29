
import { useEffect, useState } from "react";
import axios from "axios";
import { IProject } from "../interfaces";
import useFetchEmployeeInfo from "./useFetchEmployeeInfo";
import useFetch from "./useFetch";

// export default function useFetchProjects(projects:IProject[]): IProject[] {
//   const [projectData, setProjectData] = useState<IProject[]>([])


//   useEffect(() => {
//     async function stitchProjectData() {
//     await projects.forEach((project : IProject) => {
//     const info = useFetchEmployeeInfo(project.employeeIds)
//     if(info){
//     project.teamData = info
//     }
//   })
// }
//   setProjectData(projects)
// }, [projects])

// return projectData

// }