import { css } from "styled-components";

export const font = css`
    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-Thin.woff2") format("woff2"),
            url("/font/SuisseIntl-Thin.woff") format("woff");
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-Light.woff2") format("woff2"),
            url("/font/SuisseIntl-Light.woff") format("woff");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-SemiBold.woff2") format("woff2"),
            url("/font/SuisseIntl-SemiBold.woff") format("woff");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-Regular.woff2") format("woff2"),
            url("/font/SuisseIntl-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-Medium.woff2") format("woff2"),
            url("/font/SuisseIntl-Medium.woff") format("woff");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Suisse";
        src: url("/font/SuisseIntl-Bold.woff2") format("woff2"),
            url("/font/SuisseIntl-Bold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
`;
