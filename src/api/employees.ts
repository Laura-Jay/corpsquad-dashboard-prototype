import axios from "axios";

export default async function getAllEmployees() {
  const { data } = await axios(
    "https://consulting-projects.academy-faculty.repl.co/api/employees"
  );
  console.log(data);
}

async function getEmployee(employeeId: string) {
  const { data } = await axios(
    `https://consulting-projects.academy-faculty.repl.co/api/employees/${employeeId}`
  );
  console.log(data);
}
