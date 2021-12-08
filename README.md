# BrunSker-challenge

## Sobre o projeto: 

<p>Neste projeto foi proposto a criação de um CRUD no ambito de locação de imoveis. Para o desafio tecnico da empresa BrunSker. </p>

## Algumas das principais Tecnologias ultilizadas durante a criaçao:

<p>🔗 <a href="https://nodejs.org/pt-br/docs/" target="_blank">Node.js</a></p>
<p>🔗 <a href="https://expressjs.com/pt-br/" target="_blank">Express</a></p>
<p>🔗 <a href="https://www.npmjs.com/package/body-parser" target="_blank">Body-Parser</a></p>
<p>🔗 <a href="https://jwt.io/" target="_blank">Json Web Token</a></p>
<p>🔗 <a href="https://joi.dev/api/?v=17.5.0" target="_blank">Joi</a></p>
<p>🔗 <a href="https://www.mysql.com/" target="_blank">MySQL</a></p>
<p>🔗 <a href="https://sequelize.org/" target="_blank">Sequelize ORM</a></p>

##

## Como Ultilizar:

<p>O projeto conta com duas etapas de autenticação, onde a primeira o usuario faz o cadastro no banco de dados salvando suas informaçoes na tabela Users <p>
  <p>Apos isto o usuario devera efetuar o login, onde sera verificado se o usuario existe no banco de dados <p/>
  <p>Com o usuario logado e gerado um token de autentição atraves da biblioteca JWT <p/>
  
<p>Dentro do token ele possui informaçoes a cerca do tipo de usuario: Se for um usuario comum ele permite adicionar novos imoveis e consultar imoveis existentes </p>

<p>Se o tipo de usuario for admin ele tem acesso a alterar e deletar imoveis alem dos demais</p>

##
 
 Aqui o usuario efetua seu cadastro atraves do end-point POST /users
 
![DemonstraçaoCreateUser](/images/UserImages/UserCreate.png);

##

E se tudo der certo ira voltar uma resposta semelhante a isto:

![DemonstraçãoResponseUser](/images/UserImages/UserResponse.png)

##

Se der algo de errado ou algum campo nao for preenchido:

![DemonstracaoErrorUser](/images/UserImages/UserError.png) ![DemonstracaoErrorUser](/images/UserImages/UserErrorP.png)

##

<br/>

<br/>


Apos o usuario ter feito o cadastro ele ira acessar o end-point POST /login

![DemonstracaoLogin](/images/LoginImages/Login.png)

E se der tudo certo ira voltar uma resposta semelhante a isto: 

![DemonstracaoLoginResponse](/images/LoginImages/LoginResponse.png)

caso o usuario tente logar com email ou senha inexistentes:

![DemonstracaoLoginErro](/images/LoginImages/LoginError.png)


Apos o usuario esta logado ele podera finalmente interarir com nossa tabela Imovels.

-- Se o usuario tentar acessar esta rota sem ter feito login voltara algo semelhante a isto:

![Demonstracao](/images/ImoveisImages/GetError.png)




