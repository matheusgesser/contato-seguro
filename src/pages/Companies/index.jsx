import { useEffect, useState } from "react";
import {
  ButtonAdd,
  Filter,
  CompanyModal,
  EditIcon,
  DeleteIcon,
} from "../../components";
import { Container } from "../../styles/components/Container";
import { Table } from "../../styles/components/Table";
import { Title, Wrapper } from "../../styles/components/PageHeader";
import CompanyAPI from "../../services/companies";
import UserAPI from "../../services/users";

export function Companies() {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({ text: "", field: "name" });
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    updateCompanies();
    updateUsers();
  }, []);

  async function updateCompanies() {
    setCompanies(await CompanyAPI.getAll());
  }

  async function updateUsers() {
    setUsers(await UserAPI.getAll());
  }

  let filteredData = companies.filter((value) =>
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
    let companyEditIndex = companies.findIndex((company) => company.id == id);

    setShowModal(true);
    setFormValues(companies[companyEditIndex]);
  }

  async function handleDelete(id) {
    // Remove a empresa com o ID recebido
    await CompanyAPI.delete(id);
    updateCompanies();
    // Remove a empresa de todos usuários
    setTimeout(async () => {
      users.forEach(async (user, index) => {
        // Remove de um a um a cada 200ms para não sobrecarregar a API (erro too many requests)
        setTimeout(async () => {
          await UserAPI.removeCompany(user.id, id);
        }, index * 200);
      });
      updateUsers();
    }, 500);
  }

  // Atualiza a tabela com os dados do local storage

  return (
    <>
      {showModal && (
        <CompanyModal
          updateCompanies={updateCompanies}
          updateUsers={updateUsers}
          closeModal={() => setShowModal(false)}
          values={formValues}
          companies={companies}
          users={users}
        />
      )}
      <Container>
        <Wrapper>
          <Title>Empresas</Title>
          <ButtonAdd buttonClicked={handleAdd} />
        </Wrapper>
        <Filter
          changeInput={handleChangeText}
          changeSelect={handleChangeField}
          options={[
            { label: "Nome", value: "name" },
            { label: "CNPJ", value: "cnpj" },
            { label: "Endereço", value: "address" },
            { label: "Usuários", value: "users" },
          ]}
        />
        {companies.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Endereço</th>
                <th>Usuários</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((company) => {
                return (
                  <tr key={company.id}>
                    <td data-label="Nome">{company.name}</td>
                    <td data-label="CNPJ">{company.cnpj}</td>
                    <td data-label="Endereço">{company.address}</td>
                    <td data-label="Usuários">
                      {company.users ? company.users.length : 0}
                    </td>
                    <td>
                      <button onClick={() => handleEdit(company.id)}>
                        <EditIcon />
                      </button>
                      <button onClick={() => handleDelete(company.id)}>
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
