# Psicuidar

# Este projeto foi gerado com o Angular CLI versão 17.3.11.

![](src/assets/images/print.png)

## Índice
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Motivação](#motivação)
3. [Deploy](#deploy)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Conheça o projeto](#Conheça-o-projeto)

## Descrição do Projeto
A aplicação web foi desenvolvida para a Psicuidar com o objetivo de divulgar os serviços oferecidos e disponibilizar artigos escritos pelo psicólogo responsável. A plataforma foi construída utilizando tecnologias modernas, como HTML, CSS, TailwindCSS, JavaScript, Node.js, Angular e TypeScript, garantindo um desempenho ágil e uma experiência de usuário fluida e intuitiva.

A proposta central da aplicação é servir como um canal de comunicação entre a clínica e seus pacientes, oferecendo informações claras sobre os serviços disponíveis e compartilhando conhecimento por meio de artigos especializados. Com uma navegação simples e design responsivo, a plataforma proporciona uma experiência acessível e agradável para todos os usuários.

## Motivação
Projeto desenvolvido com o intuito de aprimorar meus conhecimentos e me desenvolver na área da programação. Acredito que, ao investir tempo e esforço no estudo contínuo, poderei evoluir minhas habilidades técnicas e contribuir de forma significativa para projetos desafiadores e inovadores.

## Deploy
Como Alternar Entre GitHub Pages e Hostinger
Configuração no package.json
Adicione estes scripts ao seu package.json para facilitar os builds:
"scripts": {
  "build:github": "ng build --output-path=dist --base-href=\"/psicuidar/\"",
  "build:hostinger": "ng build --output-path=dist --base-href=\"/\""
}

Build para o GitHub Pages:
Depois de realizar as alterações e comitar é necessário gerar um novo Build e fazer um Deploy para a plataforma do GitHub.
Gere o build com o comando:
npm run build:github
Em seguida faça o deploy usando:
ngh --dir=dist/browser
Observação: O comando ngh resolve o erro comum do GitHub Pages de não encontrar os arquivos na pasta `dist*.

Build para Hostinger
Gere o build com:
npm run build:hostinger
Envie os arquivos:
Copie todo o conteúdo da pasta dist para o diretório raiz (ex.: public_html) do seu servidor na Hostinger.

Dicas Importantes
GitHub Pages: O base-href deve apontar para o nome do repositório (/psicuidar/).

Hostinger: Use base-href="/" para o domínio raiz.

Sempre verifique se os arquivos da pasta dist estão atualizados antes do deploy.


## Tecnologias Utilizadas 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"/> <img alt="Adobe Photoshop" src="https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white"/> <img alt="Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/> <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/> <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>

## <a href="https://psicuidar.com/" target="_blank">Conheça o projeto</a>



