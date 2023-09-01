import { Container } from "../../styles/components/Container";
import {
  Description,
  SubTitle,
  Title,
} from "../../styles/components/PageHeader";
import { Card } from "../../styles/components/Card";
import { HomeUserIcon, HomeCompanyIcon } from "../../components";
import UserAPI from "../../services/users";
import CompanyAPI from "../../services/companies";
import { useEffect, useState } from "react";

export function Home() {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setUsers(await UserAPI.getAll());
    setCompanies(await CompanyAPI.getAll());
  }

  return (
    <Container className="home">
      <Title>Contato Seguro</Title>
      <SubTitle>Sistema de Gerenciamento de Pessoas e Empresas</SubTitle>
      <Description>
        Simplifique suas tarefas de administração e concentre-se no que
        realmente importa: <b>fazer o seu negócio prosperar</b>.
      </Description>
      <Description>
        Cadastre, visualize, atualize e delete registros com facilidade,
        visualize a lista completa ou use filtros para encontrar informações
        facilmente.
      </Description>
      <section className="cards">
        <Card>
          <div>
            <b>{users.length || 0}</b>
            <p>Usuários cadastrados</p>
          </div>
          <HomeUserIcon />
        </Card>
        <Card>
          <div>
            <b>{companies.length || 0}</b>
            <p>Empresas cadastradas</p>
          </div>
          <HomeCompanyIcon />
        </Card>
      </section>
    </Container>
  );
}
