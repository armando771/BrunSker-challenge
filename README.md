# BrunSker-challenge

## Sobre o projeto: 

<p>Neste projeto foi proposto a criação de um CRUD no âmbito de locação de imoveis. Para o desafio técnico da empresa BrunSker.</p>

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

<p>O projeto conta com duas etapas de autenticação, onde a primeira o usuário faz o cadastro no banco de dados salvando suas informações na tabela Users<p>
  <p>Apos isto o usuario devera efetuar o login, onde será verificado sé o usuario existe no banco de dados<p/>
  <p>Com o usuário logado e gerado um token de autenticação através da biblioteca JWT<p/>/
  
<p>
 Dentro do token ele possui informações a cerca do tipo de usuário: Se for um usuário comum ele permite adicionar novos imoveis e consultar imoveis existentes </p>

<p>Se o tipo de usuário for admin ele tem acesso a alterar e deletar imoveis além dos demais</p>

##
 
Aqui o usuário efetua seu cadastro através do end-point POST /users 

![DemonstraçaoCreateUser](/images/UserImages/UserCreate.png)

##

E se tudo der certo ira voltar uma resposta semelhante a isto:

![DemonstraçãoResponseUser](/images/UserImages/UserResponse.png)

##

Se der algo de errado ou algum campo não for preenchido:

![DemonstracaoErrorUser](/images/UserImages/UserError.png)
<br/>
<br/>
![DemonstracaoErrorUser](/images/UserImages/UserErrorP.png)

##

<br/>

<br/>


Apos o usuário ter feito o cadastro ele ira acessar o end-point POST /login

![DemonstracaoLogin](/images/LoginImages/Login.png)

<br/>

E se der tudo certo, irá voltar uma resposta semelhante a isto: 

![DemonstracaoLoginResponse](/images/LoginImages/LoginResponse.png)

<br/>

Caso o usuário tente logar com email ou senha inexistentes:

![DemonstracaoLoginErro](/images/LoginImages/LoginError.png)

##

<br/>

Apos o usuário esta logado ele poderá finalmente interagir com nossa tabela Imovels.

  -- Se o usuário tentar acessar esta rota sem ter feito login voltara algo semelhante a isto:

![DemonstracaoError](/images/ImoveisImages/GetError.png)

  -- Com o usuário autenticado ele poderá fazer as seguintes interações:
  
![DemonstracaoImoveis](/images/ImoveisImages/GetImoveis.png)

  <br/>
  <br/>
  
![DemonstracaoResponseImoveis](/images/ImoveisImages/GetResponse.png)

  <br/>
  <br/>
  <br/>
  
![DemonstracaoImovel](/images/ImoveisImages/GetIDImoveis.png)

  <br/>
  <br/>
  
![DemonstracaoResponseImovel](/images/ImoveisImages/GetIDResponse.png)

  <br/>
  <br/>
  <br/>

  -- Um usuário pode inserir novos imoveis em nossa tabela. Mas somente administradores podem alterar ou excluir imoveis:
  
![DemonstracaoResponseImovel](/images/ImoveisImages/PostImoveis.png)

  <br/>
  
![DemonstracaoResponseImovel](/images/ImoveisImages/PostResponse.png)

  <br/>

  -- Caso algum campo seja invalido ou esteja vazio sera retornado o seguinte erro:
  
  ![DemonstracaoResponseImovel](/images/ImoveisImages/PostError.png)
  
   <br/>
   
  -- Caso o usuário nao seja um administrador e tente executar os verbos PUT/DELETE sera retornado o seguinte erro:
     
   <br/>   
     
   ![DemonstracaoResponseImovel](/images/ImoveisImages/PutNotAdmin.png)
       
   <br/>
   <br/>  
       
   ![DemonstracaoResponseImovel](/images/ImoveisImages/PutNotAdminError.png)
     
   <br/> 

  -- Um usuário logado como administrador possui permissão para fazer qualquer tipo de alteração:
  
   ![DemonstracaoResponseImovel](/images/ImoveisImages/LoginAdmin.png)
      
   ##
   
   <br/>


