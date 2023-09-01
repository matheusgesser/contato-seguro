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

Repositório (GitHub):
Aplicação (Deploy):
Aplicação (Screenshot): https://i.imgur.com/7VFFt3n.png
Banco de dados (Screenshot do localStorage):
Testes unitários (Screenshot do Cypress): https://i.imgur.com/6KWmojy.png

## Tecnologias utilizadas

**React**, **React-Router**, **Styled Components**, **Cypress**
React-Hook-Form, React-Input-Mask, MockAPI (backend)

## Considerações

Iniciei o projeto focando em transmitir um dos objetivos da Contato Seguro, de transmitir **transparência**, então idealizei um layout **minimalista** e **clean**, enriquecido com efeito _glassmorphism_ que utiliza transparência e desfoque para refletir **modernidade**, e mantendo a identidade visual com algumas cores do site oficial da Contato Seguro.

Segui uma estrutura de layout de **dashboard**, com uma sidebar/menu lateral para navegar entre as páginas de maneira fluida (através do **react-router**) e atentando-se a **responsividade**, portanto a aplicação se adapta a diferentes tamanhos de tela.

Implementei as quatro operações **CRUD**, nas entidades Usuário e Empresa, que dispensam instrução pois são bem **intuitivas** na utilização.

Utilizei **mockAPI** para armazenar as informações, pois funciona como um backend conectado a um banco de dados, permitindo que eu me concentrasse no **frontend** e apenas em implementar as requisições, que será a parte analisada nesse teste. O mockapi foi solução viável que simula precisamente uma API no backend, porém como é um serviço gratuito, exige um pouco de paciência no uso da aplicação pois ele tem um limite de requisições em determinado período e podem ocorrer bugs por conta desse limite.

É possível **filtrar** os dados através do input no topo de cada página, selecionando o campo e digitando para buscar por uma informação.

Escrevi o código seguindo as **melhores práticas** de desenvolvimento, priorizando **legibilidade** e **organização**. Sempre que necessário, adicionei comentários para explicar partes do código que pudessem ser mais complexas ou que exigissem contexto adicional.

Implementei testes unitários (**adição**, **visualização**, **edição**, **remoção** e **filtro** de usuários) na página de usuários - execute os testes com: `npm run cypress`.

## Dificuldades

No geral, consegui resolver os problemas que surgiam de maneira **fluida**, mas colocaria duas dificuldades como principais: **contornar parcialmente o limite de requisições do mockAPI (API backend gratuito)** e a **escolha do framework de testes**.

A primeira dificuldade foi mais especificamente na funcionalidade de adicionar/excluir um objeto, onde não bastava apenas adicionar/excluir o objeto da sua entidade, mas também alterar todos outros objetos que ele fazia parte na outra entidade (por exemplo, quando exclui-se um usuário, ele tem que ser removido de todas empresas que ele estava vinculado, e vice-versa), e não foi uma tarefa tão fácil implementar esse relacionamento pois simplesmente chamar todas as requisições ao mesmo tempo atingiria o limite e causaria erros, mas consegui contornar a situação definindo um tempo de espera para cada chamada encapsulada em classes na pasta services.

A segunda dificuldade notável foi com o **framework de testes**, eu nunca tinha utilizado um, então primeiramente tentei utilizar _Jest_ com _testing-library_, mas tive muitos problemas na configuração dos mocks de assets, pacotes npm que precisaram ser ignorados executando um comando específico para o teste rodar, além de que não achei muito conveniente a seleção de elementos que o _Jest_ propõe (_getByRole_, _queryByLabelText_). Mas quando decidi pesquisar sobre o **Cypress** decidi utilizá-lo, e a implementação dos **testes unitários** foi bem mais **conveniente** e **fluida**.

## Conclusão

Em resumo, acredito que o desafio foi uma **excelente oportunidade** para demonstrar minhas habilidades com frontend, usando **React** e tecnologias relacionadas, desde a criação do **design** à implementação de todas **funcionalidades** exigidas, solucionando os problemas e automatizando **testes**. Encarei os desafios propostos como oportunidades de aprendizado, dando meu melhor para garantir uma **excelente experiência** no uso da aplicação.

Agradeço pela oportunidade e estou à disposição para qualquer informação ou esclarecimento adicional.
