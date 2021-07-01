import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ItemWrapper = styled.a<{ active?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        display: ${p => (p.active ? "block" : "none")};
        width: 100%;
        height: 0.2rem;
        background-color: ${p => p.theme.primaryAccent};
    }
`;

interface NavigationItemProps {
    action: string | (() => void);
    active?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ active, action, children }) => {
    return "string" === typeof action ? (
        <Link href={action} passHref>
            <ItemWrapper active={active}>{children}</ItemWrapper>
        </Link>
    ) : (
        <ItemWrapper as="button" type="button" active={active} onClick={action}>
            {children}
        </ItemWrapper>
    );
};
