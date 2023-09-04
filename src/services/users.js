import { nanoid } from "nanoid";

const url = "https://busy-pink-beaver-sock.cyclic.cloud/users/";

export default class UserAPI {
  static get = getUser;
  static getAll = getUsers;
  static create = createUser;
  static update = updateUser;
  static delete = deleteUser;
  static addCompany = addCompany;
  static removeCompany = removeCompany;
}

async function getUser(id) {
  const response = await fetch(url + id).then((response) => response.json());
  return response.props;
}

async function getUsers() {
  return await fetch(url).then((response) => response.json());
}

async function createUser(data) {
  const id = nanoid(8).toString();
  await fetch(url + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, companies: [], id: id }),
  });
}

async function updateUser(data) {
  await fetch(url + data.id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

async function deleteUser(id) {
  await fetch(url + id, {
    method: "DELETE",
  });
}

async function addCompany(userID, companyID) {
  const userInfo = await getUser(userID);
  userInfo.companies.push(companyID);

  // Atualiza apenas as informações do usuário, deixando o restante que é controlado pelo banco de dados (updated, created)
  const { birthdate, city, companies, id, mail, name, phone } = userInfo;
  const userData = { birthdate, city, companies, id, mail, name, phone };
  await updateUser(userData);
}

async function removeCompany(userID, companyID) {
  const userInfo = await getUser(userID);
  userInfo.companies = userInfo.companies.filter(
    (company) => company != companyID
  );

  // Atualiza apenas as informações do usuário, deixando o restante que é controlado pelo banco de dados (updated, created)
  const { birthdate, city, companies, id, mail, name, phone } = userInfo;
  const userData = { birthdate, city, companies, id, mail, name, phone };
  await updateUser(userData);
}
