### Instruções de instalação e execução

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
npm install
npx prisma migrate dev
npm run dev


### Antes de começar, certifique-se de ter os seguintes itens instalados:

- **Node.js**: Versão LTS mais recente (recomendado)
- **npm**: Gerenciador de pacotes do Node.js
- **SQLite**: Banco de dados utilizado no desenvolvimento
- **Prisma CLI**: Instalado globalmente ou como dependência do projeto

### Estrutura do Projeto

A estrutura do projeto após a configuração deve ser semelhante a:

```
/src
  /controllers
    tarefaController.js
  /models
    tarefaModel.js
/prisma
  schema.prisma
  client.js
.env
README.md
```

Certifique-se de que todos os arquivos estão organizados conforme descrito para evitar problemas durante a execução.

### Endpoints

#### 1. Listar todos os cursos
- **Método**: GET  
- **URL**: /api/courses  
- **Exemplo de Resposta**:

```
[
  {
    "id": 1,
    "title": "Curso de Piano para Iniciantes",
    "instrument": "Piano",
    "level": "Iniciante",
    "duration": 12,
    "price": 500.00,
    "instructor": "João Silva",
    "maxStudents": 10,
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T00:00:00.000Z"
  }
]
```

#### 2. Obter detalhes de um curso
- **Método**: GET  
- **URL**: /api/courses/:id  
- **Exemplo de Resposta**:

```
{
  "id": 1,
  "title": "Curso de Piano para Iniciantes",
  "instrument": "Piano",
  "level": "Iniciante",
  "duration": 12,
  "price": 500.00,
  "instructor": "João Silva",
  "maxStudents": 10,
  "createdAt": "2023-10-01T00:00:00.000Z",
  "updatedAt": "2023-10-01T00:00:00.000Z"
}
```

#### 3. Adicionar um novo curso
- **Método**: POST  
- **URL**: /api/courses  
- **Body**:

```
{
  "title": "Curso de Violão",
  "instrument": "Violão",
  "level": "Intermediário",
  "duration": 8,
  "price": 400.00,
  "instructor": "Maria Souza",
  "maxStudents": 15
}
```

- **Exemplo de Resposta**:

```
{
  "id": 2,
  "title": "Curso de Violão",
  "instrument": "Violão",
  "level": "Intermediário",
  "duration": 8,
  "price": 400.00,
  "instructor": "Maria Souza",
  "maxStudents": 15,
  "createdAt": "2023-10-01T00:00:00.000Z",
  "updatedAt": "2023-10-01T00:00:00.000Z"
}
```

#### 4. Atualizar informações de um curso
- **Método**: PUT  
- **URL**: /api/courses/:id  
- **Body**:

```
{
  "title": "Curso de Violão Avançado",
  "instrument": "Violão",
  "level": "Avançado",
  "duration": 10,
  "price": 600.00,
  "instructor": "Carlos Lima",
  "maxStudents": 20
}
```

- **Exemplo de Resposta**:

```
{
  "id": 2,
  "title": "Curso de Violão Avançado",
  "instrument": "Violão",
  "level": "Avançado",
  "duration": 10,
  "price": 600.00,
  "instructor": "Carlos Lima",
  "maxStudents": 20,
  "createdAt": "2023-10-01T00:00:00.000Z",
  "updatedAt": "2023-10-02T00:00:00.000Z"
}
```

#### 5. Remover um curso
- **Método**: DELETE  
- **URL**: /api/courses/:id  
- **Exemplo de Resposta**:

```
http://localhost:3000/api/1
```

- **Código de status**: 204 No Content

### Decisões de Design e Arquitetura
- **Arquitetura MVC**: O projeto segue a arquitetura Model-View-Controller (sem a camada de View, pois é uma API).  
- **Prisma ORM**: Utilizado para facilitar a interação com o banco de dados.  
- **Express**: Framework leve e eficiente para criar APIs RESTful.

### Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.  
- **Express**: Framework para criação de APIs.  
- **Prisma ORM**: Gerenciamento de banco de dados.  
- **SQLite**: Banco de dados utilizado (pode ser substituído por outro, como PostgreSQL ou MySQL).  
- **Nodemon**: Para reiniciar automaticamente o servidor durante o desenvolvimento.

### Conclusão
Se você seguir este modelo, seu projeto estará bem documentado e pronto para entrega.