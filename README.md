# Psicuidar

# Este projeto foi gerado com o Angular CLI versão 17.3.11.

![](img/print.png)

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
Para alternar entre GitHub Pages e Hostinger utilize o seguinte script no package.json
"scripts": {
  "build:github": "ng build --output-path=dist --base-href=\"/psicuidar/\"",
  "build:hostinger": "ng build --output-path=dist --base-href=\"/\""
}

Build para o GitHub Pages:
Depois de realizar as alterações e comitar é necessário gerar um novo Build e fazer um Deploy para a plataforma do GitHub.
Utilize o comando npm run build:github para gerar a atualizar a dist.
Em seguida utilize o comando ngh --dir=dist/browser para fazer o deploy para o GitHub. (esse atalho resolve o erro do github não encontrar os arquivos da pasta dist.)


## Tecnologias Utilizadas 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" /> 

## <a href="https://psicuidar.com/" target="_blank">Conheça o projeto</a>
