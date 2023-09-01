const url = "https://64ecf6c5f9b2b70f2bfb2d4b.mockapi.io/users/";

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
  return response;
}

async function getUsers() {
  let response = await fetch(url);
  response =
    response.status == 429
      ? alert("Too Many Requests (mockapi free tier)")
      : await response.json();
  return response ? response : [];
}

async function createUser(data) {
  const createdUser = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, companies: [] }),
  }).then((response) => response.json());
  return createdUser;
}

async function updateUser(id, data) {
  await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

async function deleteUser(id) {
  const deletedUser = await fetch(url + id, {
    method: "DELETE",
  }).then((response) => response.json());
  return deletedUser;
}

async function addCompany(userID, companyID) {
  const userInfo = await fetch(url + userID).then((response) =>
    response.json()
  );

  const body = {
    companies: [...userInfo.companies, companyID],
  };

  return await fetch(url + userID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

async function removeCompany(userID, companyID) {
  const userInfo = await fetch(url + userID).then((response) =>
    response.json()
  );

  const body = {
    companies: userInfo.companies.filter((company) => company != companyID),
  };

  return await fetch(url + userID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
