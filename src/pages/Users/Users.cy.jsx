/// <reference types="cypress" />

import { Users } from "./index";

Cypress.Commands.add("addUser", (name, mail, phone, birthdate, city) => {
  cy.get("button").first().should("have.text", "Novo").as("addButton");
  cy.get("@addButton").click();
  cy.get("input#name").type(name);
  cy.get("input#mail").type(mail);
  if (phone) {
    cy.get("input#phone").type(phone);
  }
  if (birthdate) {
    cy.get("input#birthdate").type(birthdate);
  }
  if (city) {
    cy.get("input#city").type(city);
  }
  cy.get("input[type='submit']").click();
});

describe("<Users />", () => {
  beforeEach(() => {
    cy.mount(<Users />);
  });

  it("renderiza o título da página corretamente", () => {
    cy.get("h1").should("have.text", "Usuários");
  });

  it("botão 'Novo' abre o modal com o formulário", () => {
    cy.get("button").should("have.text", "Novo").as("addButton");
    cy.get("@addButton").click();
    cy.get("form#user").should("be.visible");
  });

  it("adiciona usuário e exibe na tabela", () => {
    cy.addUser(
      "Matheus",
      "matheusmvg@hotmail.com",
      "47992257721",
      "2003-09-24",
      "Indaial"
    );
    // Checa se a última linha da tabela CONTÉM as informações corretas
    cy.get("table tr:last-child td:nth-child(1)").should(
      "have.text",
      "Matheus"
    );
    cy.get("table tr:last-child td:nth-child(2)").should(
      "have.text",
      "matheusmvg@hotmail.com"
    );
    cy.get("table tr:last-child td:nth-child(3)").should(
      "have.text",
      "(47)99225-7721"
    );
    cy.get("table tr:last-child td:nth-child(4)").should(
      "have.text",
      "2003-09-24"
    );
    cy.get("table tr:last-child td:nth-child(5)").should(
      "have.text",
      "Indaial"
    );
  });

  it("edita usuário corretamente e atualiza na tabela", () => {
    // Pressiona o botão para editar o último usuário
    cy.get("table tr:last-child td:last-child button:nth-child(1)").click();
    cy.get("input#name").clear().type("Novo Nome");
    cy.get("input[type='submit']").click();
    cy.wait(500);
    // Checa se o último registro da tabela CONTÉM o nome 'Novo Nome'
    cy.get("table tr:last-child td:nth-child(1)").should(
      "have.text",
      "Novo Nome"
    );
  });

  it("filtra usuários corretamente", () => {
    // Adiciona outro usuário
    cy.addUser("Fulano", "fulano@gmail.com");
    cy.wait(500);

    // Filtra por nome "Fulano" e checa
    cy.get("input").type("Fulano");
    cy.get("table tbody").should("have.length", "1");
    cy.get("table tr:first-child td:nth-child(1)").should(
      "have.text",
      "Fulano"
    );
  });

  it("deleta usuário e remove da tabela", () => {
    // Deleta o último usuário
    cy.get("table tr:last-child td:last-child button:nth-child(2)").click();
    cy.wait(300);
    // Checa se a tabela tem apenas uma linha
    cy.get("table tbody").should("have.length", "1");
    // Checa se a primeira linha da tabela NÃO CONTÉM o nome 'Matheus'
    cy.get("table tr:last-child td:nth-child(1)").should(
      "not.have.text",
      "Fulano"
    );
  });
});
