/* eslint-disable no-nonoctal-decimal-escape */
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

export function UserModal({
  updateUsers,
  updateCompanies,
  closeModal,
  values,
  users,
  companies,
}) {
  const { register, handleSubmit, reset } = useForm();

  // Filtra empresas vinculadas com o usuário
  const assignedCompanies =
    values.id && users
      ? companies.filter((company) =>
          users
            .find((user) => user.id == values.id)
            .companies.includes(company.id)
        )
      : []; // Caso esteja criando um usuário, ele não possui empresas ainda

  //  Filtra empresas que *não estão* vinculadas com o usuário
  const unassignedCompanies = values.id
    ? companies.filter(
        (company) =>
          !users
            .find((user) => user.id == values.id)
            .companies.includes(company.id)
      )
    : companies; // Caso esteja criando um usuário, mostra todas empresas

  // Define se é uma inserção ou edição de dado
  async function handleSubmitForm(data) {
    // Valida telefone (permite apenas vazio ou completo)
    let phoneInput = document.querySelector("input#phone");
    let phoneLength = data.phone.replace(/\D/g, "").length;
    if (phoneLength > 0 && phoneLength < 11) {
      phoneInput.focus();
      return;
    }
    // Se possuir um id, edita um dado, senão apenas insere
    if (values.id) {
      await UserAPI.update({ ...data, id: values.id });
    } else {
      await UserAPI.create(data);
    }
    reset();
    closeModal();
    updateUsers();
  }

  async function handleAssignCompany(companyID) {
    let userID = values.id;
    await UserAPI.addCompany(userID, companyID);
    updateUsers();
    await CompanyAPI.addUser(companyID, userID);
    updateCompanies();
  }

  async function handleUnassignCompany(companyID) {
    let userID = values.id;
    await UserAPI.removeCompany(userID, companyID);
    updateUsers();
    await CompanyAPI.removeUser(companyID, userID);
    updateCompanies();
  }

  return (
    <>
      <Backdrop onClick={closeModal} />
      <ModalContainer>
        <Title>
          {values.name ? `Editar ${values.name}` : "Adicionar Usuário"}
        </Title>

        <form
          id="user"
          onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        >
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            defaultValue={values.name}
          />
          <label htmlFor="mail">E-mail*</label>
          <input
            type="email"
            id="mail"
            {...register("mail", { required: true })}
            defaultValue={values.mail}
          />
          <label htmlFor="phone">Telefone</label>
          <InputMask
            mask="(99)99999-9999"
            type="tel"
            id="phone"
            {...register("phone")}
            defaultValue={values.phone}
          />
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            type="date"
            id="birthdate"
            {...register("birthdate")}
            defaultValue={values.birthdate}
          />
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            {...register("city")}
            defaultValue={values.city}
          />
          <label htmlFor="companies">Empresas</label>
          <section className={assignedCompanies ? "items" : ""}>
            {assignedCompanies.map((company) => {
              return (
                <Item
                  key={company.id}
                  onClick={() => handleUnassignCompany(company.id)}
                >
                  {company.name}
                  <RemoveIcon />
                </Item>
              );
            })}
          </section>
          <select
            id="users"
            onChange={(e) => handleAssignCompany(e.target.value)}
            disabled={values.id && unassignedCompanies ? false : true}
          >
            {unassignedCompanies.length > 0 && <option value={""} />}
            {unassignedCompanies.map((company) => {
              return (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              );
            })}
          </select>
          {!unassignedCompanies && <sub>não há mais empresas</sub>}
          {!values.id && <sub>*você pode adicionar empresas depois</sub>}
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
