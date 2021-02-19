import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background: #8C52E5;
        font-weight: 300 !important;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
    a {
        color: #000;
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 200 !important;
    }

    @keyframes toRight {
        from { opacity: 0; transform: translateX(-30px) } to { opacity: 1; transform: translateX(0px) }
    }
`;
