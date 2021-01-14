import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    display: grid;
    font-family: sans-serif;
    grid-template-rows: auto auto 1fr auto;
    height: 100vh;
    padding: 24px;
}
`
