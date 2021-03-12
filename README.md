# api-node-docker
API Node Docker é uma aplicação onde existe integração nodejs + mongodb + docker.
Para testar aplicação acesse http://localhost:{porta definida no arquivo .env}
Você pode Criar/Alterar e Excluir um usuário com as propriedades name e email.

## Instalações

- NPM versão > 7.6.0
- Docker
- Chocolatey (necessário para instalação do Make)
- Make
- Node
## Iniciar Aplicação

- Criar o arquivo .env com as configurações
- Executar os comandos abaixo na pasta raiz do projeto:
- npm install
- make up

## Outros Comandos

- make down (make down para finalizar aplicação)
- make logs (make logs para visualizar o logs da aplicação)