# 🔐 Access Control CP

Projeto desenvolvido como exercício prático de **Autenticação com React Hook Form e JSON Server**, utilizando **Vite + React + TypeScript**.

O objetivo é implementar um sistema simples de **cadastro e login de usuários**, com validação, mensagens de erro personalizadas e simulação de autenticação com `localStorage`/`sessionStorage`.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** (com Vite)
- 🟦 **TypeScript**
- 🧩 **React Hook Form** (validação de formulários)
- 📦 **JSON Server** (simulação de API)
- 💾 **localStorage / sessionStorage**
- 🧠 **React Router DOM** (navegação entre páginas)

---

## 📁 Estrutura Principal

- `/login` → Página inicial com formulário de login  
- `/cadastro` → Página de cadastro de novos usuários  
- `/error` → Página de erro para quando der erro
- `/home` → Página principal depois do login
---

## ⚙️ Funcionalidades Implementadas

✅ **Configuração inicial**
- Projeto criado com `Vite + React + TypeScript`
- `json-server` configurado com o endpoint `/usuarios`
  ```json
  {
    "usuarios": [
      {
        "id": 1,
        "nome": "Henrique Martins",
        "nomeUsuario": "henriquemartins",
        "email": "henrique@email.com"
      }
    ]
  }

✅ **Formulários com React Hook Form**
- `Login`: nomeUsuario e email
- `Cadastro`: nome, nomeUsuario e email
- Todos os campos validados e com mensagens de erro personalizadas.

✅ **Cadastro com verificação de duplicidade**
- Antes de cadastrar um novo usuário, o sistema verifica se já existe nomeUsuario ou email no banco (json-server).

✅ **Login com validação**
- O sistema consulta o endpoint `/usuarios` para validar credenciais.
- Em caso de sucesso, salva os dados do usuário no `localStorage` ou `sessionStorage`.

✅ **Exibição de dados do usuário autenticado**
- Após o login, o nome e o e-mail do usuário são exibidos em todas as páginas.

---

## 💻 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/hrqmartins/access-control-cp.git
```
### 2️⃣ Instalar as dependências
```bash
npm install
```
### 3️⃣ Rodar o json-server
```bash
npm run api
```
### 4️⃣ Iniciar o projeto React
```bash
npm run dev
```
### 5️⃣ Acessar no navegador
```bash
http://localhost:5173
```

---

## 👨‍💻 Equipe

| RM     | Nome                |
| :----- | :------------------ |
| 563620 | Henrique Martins    |
| 563088 | Henrique Texeira    |