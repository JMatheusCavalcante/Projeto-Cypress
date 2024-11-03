# Projeto de Testes com Cypress

Este repositório contém um projeto de testes automatizados utilizando o Cypress. 

## Descrição
Este projeto realiza testes automatizados em um carrinho de compras na aplicação [Automation Exercise](https://automationexercise.com/) usando Cypress. O objetivo é garantir que os produtos possam ser adicionados corretamente ao carrinho e que a interface do usuário funcione como esperado.

## Estrutura do Projeto

- `cypress/fixtures`: Contém arquivos de dados que podem ser utilizados nos testes.
- `cypress/support`: Contém arquivos de suporte e comandos personalizados para os testes.
- `cypress/e2e`: Contém os testes de ponta a ponta.

## Como Executar os Testes

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npx cypress open` para abrir a interface do Cypress e rodar os testes.

## Testes Realizados
 - Adição de produtos ao carrinho.
 - Verificação da visibilidade dos produtos no carrinho após a adição.
 
 ## Futuras Melhorias
 - Adicionar teste de login.
 - Implementar integração contínua.
 - Adicionar relatórios de testes e capturas de tela.



## Contribuições

Sinta-se à vontade para contribuir com melhorias e novos testes!


## Licença
Este projeto está licenciado sob a MIT License.