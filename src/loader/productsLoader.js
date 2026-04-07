import data from "../data/data.json";

export async function productsLoader({request}) {
    const url = new URL(request.url);

    const filters = {
        category: url.searchParams.get("category") || "",
        subcategory: url.searchParams.get("subcategory") || "",
        brand: url.searchParams.get("brand") || "",
    };

    return {data, filters};
}