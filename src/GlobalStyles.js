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

:root {
    --blue-main: #193251;
    --blue-75: #7589A2;
    --blue-50: #E0E4E8;
    --blue-25: #F8F8F8;

    --orange-main: #FF5A36;
    --orange-75: #FF9C86;
    --orange-50: #FFBDAF;
    --orange-25: #FFDED7;

    --shadow-blue: 0px 2px 11px 0px rgba(25, 50, 81, 0.2);
    --shadow-orange: 0px 4px 10px #ff5a3666;

    --border-blue: 1px solid var(--blue-50);

}
`
