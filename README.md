
# FidellCine

Pequeno projeto React/Vite que lista filmes, exibe detalhes e permite salvar favoritos.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

## Descrição

Este projeto demonstra conceitos básicos de SPA com React: roteamento, Context API, persistência local e temas claro/escuro. A UI permite navegar entre Home, Login e Favoritos, visualizar detalhes de um filme e adicionar/remover favoritos (persistidos em `localStorage`).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tecnologias

- React 19
- Vite
- react-router-dom
- CSS moderno (variáveis e tema)

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
```

## Funcionalidades

- Home: lista de filmes trazida da OMDb API
- Página de detalhes: informações do filme e botão "Adicionar aos favoritos"
- Favoritos: lista persistida em `localStorage`
- Login simulado com navegação (persistência de usuário em `localStorage`)
- Tema claro/escuro com `ThemeContext`
- Rotas protegidas para `/favoritos` usando `AuthContext`
- Mensagens de feedback (toasts)

## Conceitos aplicados

- `createContext`, `useContext` — Context API para `Auth`, `Theme`, `Favoritos`, `Toast`
- `useState`, `useEffect` — estado e efeitos (fetch, persistência local)
- `react-router-dom` — `BrowserRouter`, `Routes`, `Route`, `Link`, `Outlet`, `Navigate`, `useParams`, `useNavigate`
- Persistência com `localStorage`

## Como testar

- Abra `http://localhost:5173/`
- Clique em um filme para ver detalhes
- Adicione aos favoritos e verifique em `/favoritos`
- Teste o tema no Header
- Efetue login em `/login` (nome qualquer) para acessar `/favoritos` quando autenticado


- A lista de filmes e detalhes são carregados diretamente da OMDb API usando a chave configurada em `.env.local`.

### Usar OMDb

Se você tiver uma chave da OMDb, pode configurá-la em um arquivo `.env.local` na raiz do projeto:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

O arquivo `.env.local` está incluído no `.gitignore` e NÃO deve ser commitado. Quando a chave estiver presente, a aplicação tentará enriquecer os filmes com dados da OMDb (sinopse completa, elenco e diretor).

---


## Histórico de Commits (Changelog)

Lista dos commits principais e o que foi alterado em cada passo:

- `cf55d5f` 2026-05-21 — Docs: update README
	- Atualização da documentação do projeto com descrição completa, instruções de instalação, funcionalidades e este changelog.

- `a045760` 2026-05-21 — Passo 9: Polimento e CSS
	- Polimento visual do projeto: ajustes de CSS, layout da página de detalhes, adição de toasts visuais para feedback do usuário, mensagens de erro mais amigáveis.

- `cf092d3` 2026-05-21 — Passo 8: Criando o FavoritosContext
	- Implementado `FavoritosContext` com `FavoritosProvider`, funções `adicionarFavorito` e `removerFavorito`, persistência em `localStorage`.
	- Integrado com `DetalhesFilme` e a página `Favoritos` para adicionar/remover e exibir favoritos.

- `1ffb035` 2026-05-21 — Passo 7: Página de detalhes do filme
	- Criada a página `DetalhesFilme.jsx` que usa `useParams` para carregar detalhes do filme selecionado.
	- Adicionada rota dinâmica `/filme/:id` em `App.jsx`.

- `e134322` 2026-05-21 — Passo 6: Listando filmes na Home
	- Implementada listagem de filmes em `Home.jsx` usando `fetch` (mock `public/movies.json`), `useState`/`useEffect` e cards com `Link` para os detalhes.

- `47305b5` 2026-05-21 — Passo 5: Criando a Rota Protegida
	- Criado `RotaProtegida.jsx` que usa `AuthContext` para proteger rotas privadas e configurada em `App.jsx` para `/favoritos`.

- `afa9c0a` 2026-05-21 — Passo 4: Criando o AuthContext (login simulado)
	- Implementado `AuthContext` com `login`/`logout`, persistência em `localStorage` e formulário de login em `Login.jsx` que usa `useNavigate`.

- `adedc9a` 2026-05-21 — Passo 3: Criando o ThemeContext (tema claro/escuro)
	- Implementado `ThemeContext` com `ThemeProvider`, botão no `Header` para alternar tema, aplicação do tema no `body` via `useEffect` e variáveis CSS para ambos os temas.

- `a823e91` 2026-05-21 — Passo 2: Configurando as rotas básicas
	- Criadas páginas iniciais `Home`, `Login`, `Favoritos`, configuração de `BrowserRouter` em `App.jsx` e componente `Header` com `Link`s para navegação.

- `82eeee5` 2026-05-21 — Iniciando o projeto da aula do dia 21/05
	- Commit inicial com scaffold do template React + Vite e configuração básica do projeto.
