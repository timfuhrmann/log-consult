import { Data } from "../../types/data";

interface Error {
    message: string;
}

interface ContentfulResponse<T, PropertyName extends string> {
    data?: ContentfulData<T, PropertyName>;
    errors?: Error[];
}

type ContentfulData<T, PropertyName extends string> = { [P in PropertyName]: T };

type ProductById = ContentfulResponse<Data.Product, "product">;

type AllProductIds = ContentfulResponse<Data.ProductIdentifiers, "productCollection">;

const fetchGraphQL = async <T>(query: string, preview = false): Promise<T> => {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then(response => response.json());
};

const extractProductIds = (res: AllProductIds): string[] | null => {
    if (!res || !res.data) {
        return null;
    }

    return res.data.productCollection.items.map(item => item.sys.id);
};

const extractProduct = (res: ProductById): Data.Product | null => {
    if (!res || !res.data) {
        return null;
    }

    return res.data.product;
};

// Replace with slugs
export const getAllProductIds = async (): Promise<string[] | null> => {
    const entries = await fetchGraphQL<AllProductIds>(
        `query {
            productCollection {
                items {
                    sys {
                        id
                    }
                }
            }
        }`
    );

    return extractProductIds(entries);
};

export const getProductById = async (id: string): Promise<Data.Product | null> => {
    const entries = await fetchGraphQL<ProductById>(
        `query {
            product(id: "${id}") {
                name
                headline
                category
                imagesCollection {
                    items {
                        url
                    }
                }
                description {
                    json
                }
                vpe
                usps
                brochure {
                    url
                }
                type
            }
        }`
    );

    return extractProduct(entries);
};
