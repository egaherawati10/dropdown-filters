import { useLoaderData } from "react-router-dom";
import Filters from "../components/Filters";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

export default function ProductPage() {
    const { data, filters } = useLoaderData();

    let products = data.products;

    if (filters.category) {
        const subIds = data.subCategories
            .filter(s => s.categoryId === filters.category)
            .map(s => s.id);

        const brandIds = data.brands
            .filter(b => subIds.includes(b.subCategoryId))
            .map(b => b.id);

        products = products.filter(p => brandIds.includes(p.brandId));
    }

    if (filters.subcategory) {
        const brandIds = data.brands
            .filter(b => b.subCategoryId === filters.subcategory)
            .map(b => b.id);

        products = products.filter(p => brandIds.includes(p.brandId));
    }

    if (filters.brand) {
        products = products.filter(p => p.brandId === filters.brand);
    }

    return (
        <div className="min-h-screen bg-gray-200 p-6">
        <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-xl shadow space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Product Catalog</h1>
            <Filters data={data} />
            <Breadcrumb filters={filters} data={data} />
            <ProductList products={products} />
        </div>
        </div>
    )
}