export default function Breadcrumb({ filters, data }) {
    const category = data.categories.find(c => c.id === filters.category);
    const sub = data.subCategories.find(s => s.id === filters.subCategories);
    const brand = data.brands.find( b => b.id === filters.brand);

    return (
        <nav className="product-breadcrumb text-sm text-gray-600" aria-label="breadcrumb">
            {category?.name || ""}
            {sub ? " / " + sub.name : ""}
            {brand ? " / " + brand.name : ""}
        </nav>
    );
}