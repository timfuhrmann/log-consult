import React from "react";
import { Content } from "../../css/content";
import styled from "styled-components";
import { NavigationItem } from "../atom/NavigationItem";
import { LogoColored } from "../../icon/LogoColored";
import { routes } from "../../lib/routes";
import { useRouter } from "next/router";

const NavigationWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.white};
`;

const NavigationInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationGroup = styled.div`
    display: flex;
    align-items: center;
`;

const LogoWrapper = styled.div`
    margin-right: 4rem;
`;

const ItemWrapper = styled.div`
    margin-right: 2rem;
    height: 5rem;

    &:last-child {
        margin-right: 0;
    }
`;

const Logo = styled(LogoColored)`
    width: 25rem;
    height: 2.51rem;
`;

export const Navigation: React.FC = () => {
    const router = useRouter();

    return (
        <NavigationWrapper>
            <Content>
                <NavigationInner>
                    <NavigationGroup>
                        <LogoWrapper>
                            <NavigationItem action={routes.home}>
                                <Logo />
                            </NavigationItem>
                        </LogoWrapper>
                        <ItemWrapper>
                            <NavigationItem
                                active={routes.about === router.pathname}
                                action={routes.about}>
                                Über Uns
                            </NavigationItem>
                        </ItemWrapper>
                        <ItemWrapper>
                            <NavigationItem
                                active={routes.products === router.pathname}
                                action={routes.products}>
                                Produkte
                            </NavigationItem>
                        </ItemWrapper>
                        <ItemWrapper>
                            <NavigationItem
                                active={router.asPath.includes("contact")}
                                action={() =>
                                    router.push({ query: { contact: "default" } }, undefined, {
                                        shallow: true,
                                    })
                                }>
                                Kontakt
                            </NavigationItem>
                        </ItemWrapper>
                    </NavigationGroup>
                    <ItemWrapper>
                        <NavigationItem
                            active={routes.watchlist === router.pathname}
                            action={routes.watchlist}>
                            Merkliste
                        </NavigationItem>
                    </ItemWrapper>
                </NavigationInner>
            </Content>
        </NavigationWrapper>
    );
};
