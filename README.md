#### In progress. Converting an older Angular application ([Log & Consult](https://log-consult.net/)) to Next.js.

A [Next.js](https://nextjs.org/) project using [Typescript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/) and [Contentful's GraphQL API](https://www.contentful.com/developers/docs/references/graphql/).

## Static Generation
The application and its contents, including all products, are statically pre-rendered and revalidated every 24 hours. <br/>
To do so, the following steps are being followed:

Respective files:
1. [Product Page](pages/produkte/[id]/index.tsx)
2. [Data fetching](app/lib/api/backend.ts)

### First step

Within `getStaticPaths`, fetch all product identifiers to tell Next.js what params to expect and pre-render:

```typescript
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
```
```typescript
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
```

### Second step

Within `getStaticProps`, use `params` to fetch the respective product on build:
```typescript
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
    };
};
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
