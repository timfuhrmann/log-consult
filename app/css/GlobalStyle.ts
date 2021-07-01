import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { font } from "./font";
import { FlowText } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${font};
    
    body {
        font-family: Suisse, Helvetica, Arial, sans-serif;
        color: ${p => p.theme.black};
        ${FlowText};
    }
`;
