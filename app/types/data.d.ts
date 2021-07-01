export namespace Data {
    interface Product {
        name: string;
        headline: string;
        category: string;
        imagesCollection: {
            items: {
                url: string;
            };
        };
        description: {
            json: {};
        };
        vpe: string;
        usps: string[];
        brochure: {
            url: string;
        };
        type: string;
    }

    interface ProductIdentifiers {
        items: {
            sys: Sys;
        }[];
    }

    interface Sys {
        id: string;
    }
}
