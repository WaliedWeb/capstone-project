import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }

    :root {
        --card-bg-dark: #1D3557;
        --card-bg-middle: #457B9D;
        --card-bg-light: #A8DADC;
        --font-main: #F1FAEE;
        --button-main: #E63946;
    }

    body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--font-main);
    background-color: var(--card-bg-light);
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyles;
