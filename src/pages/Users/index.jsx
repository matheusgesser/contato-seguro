import { useEffect, useState } from "react";
import { Filter, ButtonAdd, EditIcon, DeleteIcon } from "../../components";
import { Container } from "../../styles/components/Container";
import { Title, Wrapper } from "../../styles/components/PageHeader";
import { Table } from "../../styles/components/Table";
import { UserModal } from "./UserModal";
import UserAPI from "../../services/users";
import CompanyAPI from "../../services/companies";

export function Users() {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState({ text: "", field: "name" });
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    updateUsers();
    updateCompanies();
  }, []);

  async function updateUsers() {
    let users = await UserAPI.getAll();
    // Ordena usuários por data de criação
    users = users.sort(function (a, b) {
      var c = new Date(a.created);
      var d = new Date(b.created);
      return c - d;
    });
    setUsers(users);
  }

  async function updateCompanies() {
    let companies = await CompanyAPI.getAll();
    // Ordena empresas por data de criação
    companies = companies.sort(function (a, b) {
      var c = new Date(a.created);
      var d = new Date(b.created);
      return c - d;
    });
    setCompanies(companies);
  }

  let filteredData = users.filter((value) =>
    value[filter.field].toLowerCase().includes(filter.text)
  );

  // Atualiza o estado filter
  function handleChangeText(e) {
    setFilter({ ...filter, text: e.target.value.toLowerCase() });
  }

  // Atualiza o estado filter
  function handleChangeField(e) {
    setFilter({ ...filter, field: e.target.value });
  }

  // Exibe o modal vazio (formvalues {})
  function handleAdd() {
    setShowModal(true);
    setFormValues({});
  }

  // Exibe o modal com os valores atuais a serem editados
  function handleEdit(id) {
    let userEditIndex = users.findIndex((user) => user.id == id);

    setShowModal(true);
    setFormValues(users[userEditIndex]);
  }

  async function handleDelete(id) {
    // Remove o usuário com o ID recebido
    await UserAPI.delete(id);
    updateUsers();
    // Remove o usuário de todas empresas
    companies.forEach(async (company) => {
      await CompanyAPI.removeUser(company.id, id);
    });
    updateCompanies();
  }

  return (
    <>
      {showModal && (
        <UserModal
          updateUsers={updateUsers}
          updateCompanies={updateCompanies}
          closeModal={() => setShowModal(false)}
          values={formValues}
          users={users}
          companies={companies}
        />
      )}
      <Container>
        <Wrapper>
          <Title>Usuários</Title>
          <ButtonAdd buttonClicked={handleAdd} />
        </Wrapper>
        <Filter
          changeInput={handleChangeText}
          changeSelect={handleChangeField}
          options={[
            { label: "Nome", value: "name" },
            { label: "E-mail", value: "mail" },
            { label: "Telefone", value: "phone" },
            { label: "Nascimento", value: "birthdate" },
            { label: "Cidade", value: "city" },
            { label: "Empresas", value: "companies" },
          ]}
        />
        {users.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Nascimento</th>
                <th>Cidade</th>
                <th>Empresas</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((person) => {
                return (
                  <tr key={person.id}>
                    <td data-label="Nome">{person.name}</td>
                    <td data-label="E-mail">{person.mail}</td>
                    <td data-label="Telefone">{person.phone}</td>
                    <td data-label="Nascimento">{person.birthdate}</td>
                    <td data-label="Cidade">{person.city}</td>
                    <td data-label="Empresas">
                      {person.companies ? person.companies.length : 0}
                    </td>
                    <td>
                      <button onClick={() => handleEdit(person.id)}>
                        <EditIcon />
                      </button>
                      <button onClick={() => handleDelete(person.id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}
