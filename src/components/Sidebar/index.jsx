/* eslint-disable react/prop-types */
import LogoContatoSeguro from "../../assets/logo.png";
import { Wrapper, Logo, Links } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { UserIcon, CompanyIcon } from "../../components";
import { useState } from "react";

export function Sidebar({ isActive, hideMenu }) {
  const [active, setActive] = useState(useLocation().pathname);

  function handleClickLink(e) {
    setActive(e.target.pathname);
    hideMenu();
  }

  return (
    <Wrapper className={isActive ? "active" : ""}>
      <Link to="/" onClick={handleClickLink}>
        <Logo src={LogoContatoSeguro} />
      </Link>
      <Links>
        <Link
          to="users"
          onClick={handleClickLink}
          className={active == "/users" ? "active" : ""}
        >
          <UserIcon />
          Usuários
        </Link>
        <Link
          to="companies"
          onClick={handleClickLink}
          className={active == "/companies" ? "active" : ""}
        >
          <CompanyIcon />
          Empresas
        </Link>
      </Links>
      <small>
        Desenvolvido com ❤️ por
        <a
          href="https://www.github.com/matheusgesser"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Matheus Gesser
        </a>
      </small>
    </Wrapper>
  );
}
