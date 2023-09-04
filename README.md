# Desafio Contato Seguro

O teste consiste em implementar uma lista de contatos e empresas.

- Usuário

  - Nome\*
  - E-mail\*
  - Telefone
  - Data de nascimento
  - Cidade
  - Empresas

- Empresa

  - Nome\*
  - CNPJ\*
  - Endereço\*
  - Usuários

A regra de relacionamento entre`Usuário` e `Empresa` deve ser **n para n**

## Frontend

O frontend **deve** ser desenvolvido utilizando `React`

Você **pode** e, de preferência, **deve** utilizar bibliotecas de terceiros.

Deve-se desenvolver páginas de visualização e formulário para cada uma das entidades (`Usuario` e `Empresa`) listando todos registros e seus respectivos campos.

Deve-se ter a possibilidade de filtrar os dados conforme cada um dos campos.

Obs: você tem liberdade para desenvolver o layout da forma que achar mais adequado.

## Testes

**Devem** ser implementados testes unitários para a tela de exibição dos usuários.

Você pode utilizar o framework de sua preferência.

## Requisitos

- Operações CRUD, para ambas entidades `Usuário` e `Empresa`
- Filtro de registros
- Código legível, limpo e seguindo boas práticas
- Representação do armazenamento de dados
- Testes unitários para a tela usuários
- Commits identificados semanticamente

# Resposta do participante

_Dificuldades e explicação da solução_

**Matheus Vinícius Gesser**

**Front-end Junior**

Contato: **matheusmvg@hotmail.com**

Aplicação (Deploy): https://contato-seguro.netlify.app/

Backend (API): https://github.com/matheusgesser/rest-api-cyclic

## Tecnologias utilizadas

**React**, **React-Router**, **Styled Components**, **Cypress**

React-Hook-Form, React-Input-Mask, nanoid, Cyclic (API e backend com AWS DynamoDB)

## Execute localmente

`npm install`

`npm run dev`

## Considerações

Iniciei o projeto focando em transmitir um dos objetivos da Contato Seguro, de transmitir **transparência**, então idealizei um layout **minimalista** e **clean**, enriquecido com efeito _glassmorphism_ que utiliza transparência e desfoque para refletir **modernidade**, e mantendo a identidade visual com algumas cores do site oficial da Contato Seguro.

Segui uma estrutura de layout de **dashboard**, com uma sidebar/menu lateral para navegar entre as páginas de maneira fluida (através do **react-router**) e atentando-se a **responsividade**, portanto a aplicação se adapta a diferentes tamanhos de tela.

Implementei as quatro operações **CRUD**, nas entidades Usuário e Empresa, que dispensam instrução pois são bem **intuitivas** na utilização.

Utilizei o **Cyclic** como backend/API para armazenar as informações, criando uma API com Express e NodeJS que se conecta com a SDK deles ligada à AWS DynamoDB permitindo que eu me concentrasse no **frontend** e apenas em implementar as requisições, que será a parte analisada nesse teste. A utilização do Cyclic sua SDK com AWS foi a melhor solução para criação e hospedagem simples de uma API.

É possível **filtrar** os dados através do input no topo de cada página, selecionando o campo e digitando para buscar por uma informação.

Escrevi o código seguindo as **melhores práticas** de desenvolvimento, priorizando **legibilidade** e **organização**. Sempre que necessário, adicionei comentários para explicar partes do código que pudessem ser mais complexas ou que exigissem contexto adicional.

Implementei testes unitários (**adição**, **visualização**, **edição**, **remoção** e **filtro** de usuários) na página de usuários - execute os testes com: `npm run cypress`.

## Dificuldades

No geral, consegui resolver os problemas que surgiam de maneira **fluida**, mas colocaria duas dificuldades como principais: **escolha de ferramenta de backend/API** e a **escolha do framework de testes**.

A primeira dificuldade aconteceu pois inicialmente pensei em utilizar localStorage, que além de ser muito difícil implementar o relacionamento entre as entidades, onde não bastava apenas adicionar/excluir o objeto da sua entidade, mas também alterar todos outros objetos que ele fazia parte na outra entidade, ainda não seria possível simular um backend com requisições assíncronas como pedido na descrição do teste. Então tentei utiizar o mockAPI, mas é um serviço gratuito com limite de requisições, o que quebrava a aplicação caso tentasse fazer operações em sequencia rapidamente, então migrei novamente para a Cyclic, utilizando express com a SDK deles que utiliza AWS DynamoDB para criar as rotas CRUD e contornar todos problemas.

A segunda dificuldade notável foi com o **framework de testes**, eu nunca tinha utilizado um, então primeiramente tentei utilizar _Jest_ com _testing-library_, mas tive muitos problemas na configuração dos mocks de assets, pacotes npm que precisaram ser ignorados executando um comando específico para o teste rodar, além de que não achei muito conveniente a seleção de elementos que o _Jest_ propõe (_getByRole_, _queryByLabelText_). Mas quando decidi pesquisar sobre o **Cypress** decidi utilizá-lo, e a implementação dos **testes unitários** foi bem mais **conveniente** e **fluida**.

## Conclusão

Em resumo, acredito que o desafio foi uma **excelente oportunidade** para demonstrar minhas habilidades com frontend, usando **React** e tecnologias relacionadas, desde a criação do **design** à implementação de todas **funcionalidades** exigidas, solucionando os problemas e automatizando **testes**. Encarei os desafios propostos como oportunidades de aprendizado, dando meu melhor para garantir uma **excelente experiência** no uso da aplicação.

Agradeço pela oportunidade e estou à disposição para qualquer informação ou esclarecimento adicional.

<div align="center">
  <img src="https://i.imgur.com/51ppMMr.png" width="70%" />
  <img src="https://i.imgur.com/zlY35jN.png" width="50%" />
  
  ![image](https://github.com/matheusgesser/contato-seguro/assets/117914140/04524e7a-0720-4723-bec2-8a405f8c9761)

  ![image](https://github.com/matheusgesser/contato-seguro/assets/117914140/da62a97c-5490-4917-93fc-f3095b179abc)
  
  (estrutura banco de dados - Cyclic)

  <img src="https://i.imgur.com/6KWmojy.png" width="70%" />

(testes unitários - Cypress)

</div>
