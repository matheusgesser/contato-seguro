/* eslint-disable react/prop-types */
import {
  Backdrop,
  ModalContainer,
  Title,
  Button,
  Item,
} from "../../../styles/components/Modal";
import { RemoveIcon } from "../../../components";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import UserAPI from "../../../services/users";
import CompanyAPI from "../../../services/companies";

export function CompanyModal({
  updateCompanies,
  updateUsers,
  closeModal,
  values,
  companies,
  users,
}) {
  const { register, handleSubmit, reset } = useForm();

  // Filtra usuários vinculados com  a empresa
  const assignedUsers = values.id
    ? users.filter((user) =>
        companies
          .find((company) => company.id == values.id)
          .users.includes(user.id)
      )
    : []; // Caso esteja criando uma empresa, ela não possui usuários ainda

  // Filtra usuários que *não estão* vinculados com  a empresa
  const unassignedUsers = values.id
    ? users.filter(
        (user) =>
          !companies
            .find((company) => company.id == values.id)
            .users.includes(user.id)
      )
    : users; // Caso esteja criando uma empresa, mostra todos usuários

  // Define se é uma inserção ou edição de dado
  async function handleSubmitForm(data) {
    // Valida CNPJ completo
    let cnpjInput = document.querySelector("input#cnpj");
    if (data.cnpj.replace(/\D/g, "").length < 14) {
      cnpjInput.focus();
      return;
    }
    // Se possuir um id, edita um dado, senão apenas insere
    if (values.id) {
      await CompanyAPI.update(values.id, data);
    } else {
      await CompanyAPI.create(data);
    }
    reset();
    closeModal();
    updateCompanies();
  }

  async function handleAssignUser(e) {
    let companyID = values.id;
    let userID = e.target.value;
    await CompanyAPI.addUser(companyID, userID);
    updateCompanies();
    setTimeout(async () => {
      await UserAPI.addCompany(userID, companyID);
      updateUsers();
    }, 1000);
  }

  async function handleUnassignUser(id) {
    let companyID = values.id;
    let userID = id;
    await CompanyAPI.removeUser(companyID, userID);
    updateCompanies();
    setTimeout(async () => {
      await UserAPI.removeCompany(userID, companyID);
      updateUsers();
    }, 1000);
  }

  return (
    <>
      <Backdrop onClick={closeModal} />
      <ModalContainer>
        <Title>
          {values.name ? `Editar ${values.name}` : "Adicionar Empresa"}
        </Title>

        <form
          id="company"
          onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        >
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            defaultValue={values.name}
          />
          <label htmlFor="cnpj">CNPJ*</label>
          <InputMask
            mask="99.999.999/9999-99"
            type="tel"
            id="cnpj"
            {...register("cnpj", { required: true, minLength: 18 })}
            defaultValue={values.cnpj}
          />
          <label htmlFor="address">Endereço*</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: true })}
            defaultValue={values.address}
          />
          <label htmlFor="users">Usuários</label>
          <section className={assignedUsers ? "items" : ""}>
            {assignedUsers.map((user) => {
              return (
                <Item key={user.id} onClick={() => handleUnassignUser(user.id)}>
                  {user.name}
                  <RemoveIcon />
                </Item>
              );
            })}
          </section>
          <select
            id="users"
            onChange={handleAssignUser}
            disabled={values.id && unassignedUsers ? false : true}
          >
            {unassignedUsers.length > 0 && <option value={""} />}
            {unassignedUsers.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          {!unassignedUsers.length > 0 && <sub>não há mais usuários</sub>}
          {!values.id && <sub>você pode adicionar usuários depois</sub>}
          <section className="buttons">
            <Button onClick={closeModal} className="cancel">
              Cancelar
            </Button>
            <input type="submit" className="save" value="Salvar" />
          </section>
        </form>
      </ModalContainer>
    </>
  );
}
