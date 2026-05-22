
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

- Home: lista de filmes (mock em `public/movies.json`)
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

## Observações

- Os dados de filmes estão mockados em `public/movies.json` para facilitar testes sem depender de API externa.

---

Se quiser, eu posso criar um repositório remoto (GitHub) e subir o código para você — ou, se já existir um remoto configurado, posso commitar e dar push das mudanças.
