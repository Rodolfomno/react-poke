# 📱 Pokédex - React + TypeScript

Este projeto é uma **Pokédex interativa** desenvolvida como desafio técnico de Front-End.  
A aplicação consome a **PokéAPI** para listar Pokémon, permitir busca por nome e tipo, navegação entre páginas e visualização organizada em cards.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface
- **TypeScript** – Tipagem estática para maior segurança e organização
- **Vite** – Ferramenta de build rápida e moderna
- **Styled-components** – Estilização com CSS-in-JS
- **React Router DOM** – Navegação entre páginas
- **PokéAPI** – API pública de dados dos Pokémon

---

## 📂 Estrutura do Projeto

```text
src/
├─ components/
│  ├─ Header/
│  ├─ SearchInput/
│  ├─ Card/
│  └─ Pagination/
│
├─ pages/
│  ├─ Home/
│  └─ Pokedex/
│
├─ layouts/
│  └─ MainLayout.tsx
│
├─ routes/
│  └─ index.tsx
│
├─ services/
│  └─ api.ts
│
├─ types/
│  └─ pokeTypes.ts
│
├─ styles/
│  └─ GlobalStyle.ts
│
├─ App.tsx
```

---

## ✨ Funcionalidades

- 📋 **Listagem de Pokémon**
- 🔍 **Busca por nome**
- 🔍 **Filtro por tipo**
- 📄 **Paginação**
- 🎯 **Identificação de rota ativa no Header**
- 📱 **Layout responsivo**
- ⚡ **Atualizações sem recarregar a página**

---

## 🎨 Layout

O layout foi desenvolvido com base em um **design do Figma**, respeitando:
- Tipografia
- Espaçamentos
- Cores
- Componentes visuais

---

## 🧠 Decisões Técnicas

Embora o desafio permita **Vanilla JS**, foi utilizado **React + TypeScript** para:
- Melhor organização do código
- Reutilização de componentes
- Tipagem forte
- Facilidade de manutenção e escalabilidade

O **styled-components** foi escolhido para manter estilos próximos dos componentes, facilitando leitura e manutenção.

## ▶️ Como executar o projeto
 
# instalar dependências
```
npm install
```
# iniciar o projeto
```
npm run dev
```

A aplicação estará disponível em:
👉 http://localhost:5173
