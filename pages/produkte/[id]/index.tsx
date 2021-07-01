import React from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { getAllProductIds, getProductById } from "../../../app/lib/api/backend";
import { Data } from "../../../app/types/data";

const ProductWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

interface ProductProps {
    product: Data.Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return <ProductWrapper>{product.name}</ProductWrapper>;
};

export const getStaticPaths = async () => {
    const res = await getAllProductIds();

    if (!res) {
        throw new Error("couldn't fetch product identifiers");
    }

    const paths = res.map(id => ({
        params: { id },
    }));

    // Pre-render only fetched paths at build time.
    // Server-side render on demand if the path doesn't exist.
    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;

    if (!id || "string" !== typeof id) {
        return {
            notFound: true,
        };
    }

    const product = await getProductById(id);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: { product },
        revalidate: 60 * 60 * 24,
    };
};

export default Product;
