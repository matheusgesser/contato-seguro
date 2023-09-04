import { nanoid } from "nanoid";

const url = "https://busy-pink-beaver-sock.cyclic.cloud/companies/";

export default class CompanyAPI {
  static get = getCompany;
  static getAll = getCompanies;
  static create = createCompany;
  static update = updateCompany;
  static delete = deleteCompany;
  static addUser = addUser;
  static removeUser = removeUser;
}

async function getCompany(id) {
  const response = await fetch(url + id).then((response) => response.json());
  return response.props;
}

async function getCompanies() {
  return await fetch(url).then((response) => response.json());
}

async function createCompany(data) {
  const id = nanoid(8).toString();
  await fetch(url + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, users: [], id: id }),
  });
}

async function updateCompany(data) {
  await fetch(url + data.id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

async function deleteCompany(id) {
  await fetch(url + id, {
    method: "DELETE",
  });
}

async function addUser(companyID, userID) {
  const companyInfo = await getCompany(companyID);
  companyInfo.users.push(userID);

  // Atualiza apenas as informações da empresa, deixando o restante que é controlado pelo banco de dados (updated, created)
  const { address, cnpj, id, name, users } = companyInfo;
  const companyData = { address, cnpj, id, name, users };
  await updateCompany(companyData);
}

async function removeUser(companyID, userID) {
  const companyInfo = await getCompany(companyID);
  companyInfo.users = companyInfo.users.filter((user) => user != userID);

  // Atualiza apenas as informações da empresa, deixando o restante que é controlado pelo banco de dados (updated, created)
  const { address, cnpj, id, name, users } = companyInfo;
  const companyData = { address, cnpj, id, name, users };
  await updateCompany(companyData);
}
