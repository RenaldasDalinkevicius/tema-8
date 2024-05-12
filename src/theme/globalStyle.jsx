import { createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #EAF6F4;
        --color-secondary-dark: #131F20;
        --color-secondary-light: #213536;
        --color-accent-dark: #08DBE9;
        --color-accent-light: #15E9F6;
        --color-text-dark: #000000;
        --color-text-light: #E5F1F1;
        --spacing-extraLarge: 200px;
        --spacing-large: 50px;
        --spacing-medium: 20px;
        --spacing-small: 10px;
        --font-size-extraLarge: 2rem;
        --font-size-large: 1.5rem;
        --font-size-normal: 1rem;
        --font-size-small: 0.7rem;
    }
    .react-datepicker-popper {
        display: flex;
        position: fixed;
    }
    body {
        display: flex;
        flex-direction: column;
        margin: 0;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
        background-color: var(--color-primary);
    }
    * {
        box-sizing: border-box;
    }
    p, h1, h2, h3, h4, a {
        font-weight: normal;
        color: var(--color-text-dark);
        margin: 0;
        padding 0;
    }
    p {
        font-size: var(--font-size-normal);
    }
    h1 {
        font-size: var(--font-size-extraLarge);
    }
    h2 {
        font-size: var(--font-size-large);
    }
    h3 {
        font-size: var(--font-size-normal);
    }
    h4 {
        font-size: var(--font-size-small);
    }
    a {
        font-size: var(--font-size-normal);
        color: var(--color-text-light);
        padding: var(--spacing-medium);
        text-decoration: none;
        border: 1px solid transparent;
        &: hover {
            background-color: var(--color-secondary-light);
        }
        &: focus {
            outline: none;
            border: 1px solid var(--color-accent-light);
        }
    }
    button {
        font-family: inherit;
        white-space: nowrap;
        background-color: var(--color-accent-light);
        color: var(--color-text-dark);
        border-radius: var(--spacing-small);
        padding: var(--spacing-medium);
        border: 1px solid transparent;
        width: fit-content;
        height: fit-content;
        outline: none;
        &:hover, &:focus {
            background-color: var(--color-accent-dark);
        };
        &: focus {
            border: 1px solid var(--color-secondary-dark);
        }
    }
    .react-datepicker-wrapper {
        width: 100%;
    }
`
export default GlobalStyle