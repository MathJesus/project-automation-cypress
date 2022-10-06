# project-automation-cypress
Projeto de Automação de Testes utilizando versão 10 do Cypress

Para realizar a instalação da ferramenta de testes Cypress precisaremos inicialmente instalar o NPM (Node Package Manager)
gerenciador de pacotes do Node

1. Visitar o site oficial Node - nodejs.org
2. Selecionar a opção LTS e recomendada do Node
3. Clicar em next em todas as etapas
4. Após a instalação ser finalizada, abra o prompt de comando e rode o comando npm --version para verifica a versão node ao qual foi instalada
5. Criar Pasta <nomeDaPasta> no seu diretorio de preferencia
6. Abrir prompt de comando a partir da pasta criada 
7. Digitar comando: npm init
7.1 Na opção test: (Digitar comando: npx cypress open)
8. Criar projeto npm
9. Digitar comando: npm i cypress --save-dev
10. Após isso rodar o comando: npm run test dentro da pasta principal para abrir a interface grafica do Cypress
11.Logo após abrir escolha a opção e2e testing, clicar em continuar e escolher o navegador ao qual deseja que os testes sejam executados

Pronto agora voce ja pode criar seus scripts de testes e verificar eles sendo executados na interface do Cypress rodando o comando npx cypress open
