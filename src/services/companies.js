const url = "https://64ecf6c5f9b2b70f2bfb2d4b.mockapi.io/companies/";

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
  return response;
}

async function getCompanies() {
  let response = await fetch(url);
  response =
    response.status == 429
      ? alert("Too Many Requests (mockapi free tier)")
      : await response.json();
  return response || [];
}

async function createCompany(data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, users: [] }),
  }).then((response) => response.json());
  return response;
}

async function updateCompany(id, data) {
  const response = await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return response;
}

async function deleteCompany(id) {
  const deletedUser = await fetch(url + id, {
    method: "DELETE",
  }).then((response) => response.json());
  return deletedUser;
}

async function addUser(companyID, userID) {
  const companyInfo = await fetch(url + companyID).then((response) =>
    response.json()
  );

  const body = {
    users: [...companyInfo.users, userID],
  };

  await fetch(url + companyID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

async function removeUser(companyID, userID) {
  const companyInfo = await fetch(url + companyID).then((response) =>
    response.json()
  );

  const body = {
    users: companyInfo.users.filter((user) => user != userID),
  };

  return await fetch(url + companyID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

// const newUser = await User.create({ nome: "Gesser", email: "gesser@email.com" })
