# api-node-docker
API Node Docker é uma aplicação onde existe integração nodejs + mongodb + docker.
Para testar aplicação acesse http://localhost:{porta definida no arquivo .env}
Você pode Criar/Alterar e Excluir um usuário com as propriedades name e email.

## Instalações

- NPM versão > 7.6.0
- Docker
- Node
## Preparar Aplicação

- Criar o arquivo .env com as configurações
- Executar os comandos abaixo na pasta raiz do projeto:
- npm install

## Comandos da Aplicação

- docker-compose up -d
- docker-compose down
- docker-compose stop
- docker-compose logs -f