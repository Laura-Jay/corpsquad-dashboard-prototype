import axios from "axios";
import { IProject } from "../interfaces";

export default async function getProjects() {
  try {
    const response = await axios(
      "https://consulting-projects.academy-faculty.repl.co/api/projects"
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getProject(projectId: string) {
  try {
    const response = await axios(
      `https://consulting-projects.academy-faculty.repl.co/api/projects/${projectId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
