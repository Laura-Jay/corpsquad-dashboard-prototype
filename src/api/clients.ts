import axios from "axios";

export default async function getAllClients() {
  const { data } = await axios(
    "https://consulting-projects.academy-faculty.repl.co/api/clients"
  );
  console.log(data);
}

async function getClient(clientId: string) {
  const { data } = await axios(
    `https://consulting-projects.academy-faculty.repl.co/api/clients/${clientId}`
  );
  console.log(data);
}
