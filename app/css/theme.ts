export const theme = {
    //region Color
    black: "#171514",
    white: "#fff",

    primary: "#002543",

    accent: "#939393",
    primaryAccent: "#de303d",
    secondaryAccent: "#bfbebe",
    
    backgroundColor: "#f8f8f8",
    //endregion

    //region Breakpoints
    bp: {
        m: "screen and (min-width: 768px)",
        l: "screen and (min-width: 1024px)",
        xl: "screen and (min-width: 1340px)",
        xxl: "screen and (min-width: 2000px)",
    },
    //endregion
};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
