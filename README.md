# Localiza API

API para conectar a Landapage da Localiza com o banco de dados MS SQL. Com essa API poderam consultar, adicionar, editar, apagar e contar clientes no banco de dados.
Para executar a API terá que seguir as instruções abaixo:

### Como configurar a aplicação

- [ ] Clonar o repositório
- [ ] Executar o comendo (npm install) para instalar as dependencias
- [ ] Criar arquivo .env e adicionar as variáveis de conexão com o banco de dados MS SQL Server
- [ ] npm run dev - Executa a API como modo de desenvolvimento
- [ ] npm run build - Faz o build da API
- [ ] npm run start - Executa a API após terminar o build

### Variáveis de Configura para o Banco de Dados

- [ ] SQL_SERVER - IP ou Server Name onde o servidor MS SQL esta rodando
- [ ] SQL_USER - Usuário do banco de dados
- [ ] SQL_PASSWORD - Senha de acesso do usuário
- [ ] SQL_DATABASE - Nome do banco de dados à ser utilizado
- [ ] SQL_PORT - Porta que o banco de dados esta utilizando (opcional, não implementado)
- [ ] SQL_ENCRYPT - Se o banco de dados estiver em servidores da Microssoft Azure passar para true

### Arquivo Config.js

> Neste arquivo é o responsável por pegar as variáveis de sistema e exporta-las para a aplicação.

### Arquivos database/connection.js

> Arquivo de conexão com o banco de dados

### Arquivo request/clients.http

> Arquivo utilizado pelo plugin REST Client do VS Code para poder testar as requisições
