import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    display: grid;
    grid-template-columns: 1fr min(65ch, 100%) 1fr;
    font-family: sans-serif;
    padding: 24px;
    color: #193251;

    & > * {
        grid-column: 2;
    }
}
`
