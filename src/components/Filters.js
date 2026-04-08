import { useSearchParams } from "react-router-dom";

export default function Filters({ data }) {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const category = searchParams.get("category") || "";
    const subcategory = searchParams.get("subcategory") || "";

    const handleChange = (key, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(key, value);

        if (key === "category") {
            params.delete("subcategory");
            params.delete("brand");
        }

        if (key === "subcategory") {
            params.delete("brand");
        }

        setSearchParams(params);
    };

    const subcategories = data.subCategories.filter(
        (s) => s.categoryId === category
    );

    const brands = data.brands.filter(
        (b) => b.subCategoryId === subcategory
    );

    return (
        <div className="flex flex-wrap gap-3 items-center">
            <select
            name="category"
            value={category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="border rounded-lg px-3 py-1 bg-white"
            >
                <option value="">Category</option>
                {data.categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>

            <select
            name="subcategory"
            value={subcategory}
            disabled={!category}
            onChange={(e) => handleChange("subcategory", e.target.value)}
            className="border rounded-lg px-3 py-1 bg-white disabled:opacity-50"
            >
                <option value="">Subcategory</option>
                {subcategories.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>

            <select
            name="brand"
            value={searchParams.get("brand") || ""}
            disabled={!subcategory}
            onChange={(e) => handleChange("brand", e.target.value)}
            className="border rounded-lg px-3 py-1 bg-white disabled:opacity-50"
            >
                <option value="">Brand</option>
                {brands.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                ))}
            </select>

            <button onClick={() => setSearchParams({})}>Reset Filter</button>

        </div>
    );

}